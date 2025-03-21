"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/AdminUsers.module.css";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      const res = await fetch("/api/users", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setUsers(users.filter((user) => user.id !== id));
      } else {
        console.error("Failed to delete user");
      }
    }
  };

  const handleUpdate = async (id, key, value) => {
    const res = await fetch("/api/users", {
      method: "PUT",
      body: JSON.stringify({ id, [key]: value }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setUsers(
        users.map((user) => (user.id === id ? { ...user, [key]: value } : user))
      );
    } else {
      console.error("Failed to update user");
    }
  };

  const handleResetAvatar = async (id) => {
    const res = await fetch("/api/users", {
      method: "PATCH",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setUsers(
        users.map((user) =>
          user.id === id
            ? { ...user, image: "/userAvatars/defaultAvatar.png" }
            : user
        )
      );
    } else {
      console.error("Failed to reset avatar");
    }
  };
  return (
    <div className="container">
      <h1 className={styles.title}>User Management</h1>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nickname</th>
                <th>Email</th>
                <th>Country</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, visibleUsers).map((user) => (
                <tr key={user.id}>
                  <td>
                    <img
                      src={user.image || "/userAvatars/defaultAvatar.png"}
                      alt="Avatar"
                      className={styles.avatar}
                    />
                    <button
                      className={styles.buttonRemove}
                      onClick={() => handleResetAvatar(user.id)}
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={user.nickname}
                      onChange={(e) =>
                        handleUpdate(user.id, "nickname", e.target.value)
                      }
                    />
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <input
                      type="text"
                      value={user.country}
                      onChange={(e) =>
                        handleUpdate(user.id, "country", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleUpdate(user.id, "role", e.target.value)
                      }
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {visibleUsers < users.length && (
            <div className={styles.pagination}>
              <button onClick={() => setVisibleUsers((prev) => prev + 4)}>
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
