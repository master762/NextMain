"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/AdminSupport.module.css";

export default function SupportPage() {
  const [messages, setMessages] = useState([]);
  const [visibleMessages, setVisibleMessages] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/support")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const res = await fetch("/api/support", {
      method: "PUT",
      body: JSON.stringify({ id, status: newStatus }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, status: newStatus } : msg))
      );
    } else {
      console.error("Failed to update status");
    }
  };

  const handleReply = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="container">
      <h1 className={styles.title}>Support panel</h1>
      {loading ? (
        <p>Loading...</p>
      ) : messages.length === 0 ? (
        <div className={styles.noRequests}>
          <p>No support requests found.</p>
        </div>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.slice(0, visibleMessages).map((msg) => (
                <tr key={msg.id}>
                  <td>
                    {msg.firstName} {msg.lastName}
                  </td>
                  <td>{msg.email}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.message}</td>
                  <td>
                    <select
                      value={msg.status}
                      onChange={(e) =>
                        handleStatusChange(msg.id, e.target.value)
                      }
                      className={`${styles.status} ${styles[msg.status]}`}
                    >
                      <option value="new">New</option>
                      <option value="in_progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>

                  <td>
                    <div className={styles.buttonContainer}>
                      <button
                        className={styles.button}
                        onClick={() => handleReply(msg.email)}
                      >
                        Reply
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {visibleMessages < messages.length && (
            <div className={styles.pagination}>
              <button onClick={() => setVisibleMessages((prev) => prev + 4)}>
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
