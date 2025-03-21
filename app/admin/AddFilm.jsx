"use client";
import { useState } from "react";

export default function AddFilm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [cover, setCover] = useState(null);
  const [video, setVideo] = useState(null);
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

      const response = await fetch("/api/addfilm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          releaseYear,
          cover: coverUrl,
          video: videoUrl,
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
      alert("Film added successfully!");
    } catch (error) {
      setErrorMessage(error.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Add a Film</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Release Year:</label>
          <input
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cover:</label>
          <input
            type="file"
            onChange={(e) => setCover(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>
        <div>
          <label>Video:</label>
          <input
            type="file"
            onChange={(e) => setVideo(e.target.files[0])}
            accept="video/*"
            required
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Film"}
          </button>
        </div>
      </form>
    </div>
  );
}
