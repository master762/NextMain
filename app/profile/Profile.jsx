"use client";

import React, { useState } from "react";
import styles from "@/styles/profile.module.css";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [avatar, setAvatar] = useState("/defultAvatar.png");
  const [profileData, setProfileData] = useState({
    username: "Alexey",
    email: "example@gmail.com",
    age: "32",
    country: "USA",
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatar(e.target.result);
      reader.readAsDataURL(file);
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

  return (
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
              <p
                className={`${styles.titleDrug} ${
                  isDragging ? styles.dragging : ""
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                pull it here!
              </p>
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
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              ) : (
                <span>{profileData.username}</span>
              )}
            </p>
            <p>
              Email:{" "}
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              ) : (
                <span>{profileData.email}</span>
              )}
            </p>
            <p>
              Age:{" "}
              {isEditing ? (
                <input
                  type="text"
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
            <button>
              <img src="/img/logOut.png" alt="" />
              <span>Log out</span>
            </button>
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
  );
}
