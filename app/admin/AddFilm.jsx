"use client";
import { useState } from "react";
import styles from "@/styles/AddFilm.module.css";
export default function AddFilm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [cover, setCover] = useState(null);
  const [video, setVideo] = useState(null);
  const [languages, setLanguages] = useState("");
  const [genres, setGenres] = useState("");
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload file");
    }

    const data = await response.json();
    return data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !releaseYear || !cover || !video) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const coverUrl = await handleFileUpload(cover);
      const videoUrl = await handleFileUpload(video);

      const castUrls = await Promise.all(
        cast.map((file) => handleFileUpload(file))
      );

      const response = await fetch("/api/addfilm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          releaseYear,
          cover: coverUrl,
          video: videoUrl,
          languages: languages.split(",").map((lang) => lang.trim()),
          genres: genres.split(",").map((genre) => genre.trim()),
          cast: castUrls,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add film.");
      }

      setTitle("");
      setDescription("");
      setReleaseYear("");
      setCover(null);
      setVideo(null);
      setLanguages("");
      setGenres("");
      setCast([]);
      alert("Film added successfully!");
    } catch (error) {
      setErrorMessage(error.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.addFilmContainer}>
      <h1 className={styles.addFilmTitle}>Add a Film</h1>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.addFilmForm}>
        <div className={styles.inputGroup}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Release Year:</label>
          <input
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Cover:</label>
          <input
            type="file"
            onChange={(e) => setCover(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Video:</label>
          <input
            type="file"
            onChange={(e) => setVideo(e.target.files[0])}
            accept="video/*"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Languages :</label>
          <input
            type="text"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Genres :</label>
          <input
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Cast :</label>
          <input
            type="file"
            multiple
            onChange={(e) => setCast(Array.from(e.target.files))}
            accept="image/*"
          />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Film"}
          </button>
        </div>
      </form>
    </div>
  );
}
