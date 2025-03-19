"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from "@/styles/profile.module.css";

export default function Profile() {
  const { data: session, update } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [avatar, setAvatar] = useState("/userAvatars/defaultAvatar.png");
  const [profileData, setProfileData] = useState({
    nickname: "",
    email: "",
    age: "",
    country: "",
  });

  useEffect(() => {
    if (session) {
      fetch(`/api/getProfile?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setProfileData({
            nickname: data.nickname,
            email: data.email,
            age: data.age.toString(),
            country: data.country,
          });
          setAvatar(data.image);
        });
    }
  }, [session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value, 10) || "" : value,
    }));
  };

  const handleSave = async () => {
    const response = await fetch("/api/updateProfile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    });

    if (response.ok) {
      setIsEditing(false);
    }
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", session.user.email);

    const response = await fetch("/api/uploadAvatar", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.imageUrl) {
      setAvatar(data.imageUrl);
      setProfileData((prev) => ({ ...prev, image: data.imageUrl }));
      window.location.reload();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  //поведение,если не сессия (не авторизован либо истек токен)
  if (!session)
    return (
      <>
        <div className="container">
          <div className={styles.sessionFalse}>
            <h2>
              Please
              <Link href="/signin">
                <span>sign in</span>
              </Link>
            </h2>
          </div>
        </div>
      </>
    );
  // основная стилизация
  return (
    <>
      <Link href="/">
        <button className={styles.back}>
          <span>Back</span>
        </button>
      </Link>

      <div className="container">
        <h2 className={styles.title}>Your Profile</h2>
        <div className={styles.Cardcontainer}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <div
                className={`${styles.userImg} ${
                  isDragging ? styles.dragging : ""
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <p className={styles.hoverTitle}>Upload photo</p>
                <p className={styles.titleDrug}>Pull it here!</p>
                <label htmlFor="fileUpload">
                  <img src={avatar} alt="user img" />
                </label>
                <input
                  id="fileUpload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageUpload(e.target.files[0])}
                />
              </div>
            </div>
            <div className={styles.attributes}>
              <p>
                User name:{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="nickname"
                    value={profileData.nickname}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                ) : (
                  <span>{profileData.nickname}</span>
                )}
              </p>
              <p>
                Email: <span>{profileData.email}</span>
              </p>
              <p>
                Age:{" "}
                {isEditing ? (
                  <input
                    type="number"
                    name="age"
                    value={profileData.age}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                ) : (
                  <span>{profileData.age}</span>
                )}
              </p>
              <p>
                Country:{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={profileData.country}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                ) : (
                  <span>{profileData.country}</span>
                )}
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              >
                <img src="/img/edit.png" alt="" />
                <span>{isEditing ? "Save Profile" : "Edit Profile"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
