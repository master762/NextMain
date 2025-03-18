"use client";
import { useState } from "react";
import styles from "@/styles/AddFilm.module.css";

export default function AddFilm() {
  const [description, setDescription] = useState("no description");
  const [isEditing, setIsEditing] = useState(false);
  const [cover, setCover] = useState(null);
  const [releaseYear, setReleaseYear] = useState("2022");
  const [languages, setLanguages] = useState(["English"]);
  const [genres, setGenres] = useState(["Action"]);
  const [videos, setVideos] = useState({
    "1080p": null,
    "720p": null,
    "480p": null,
  });

  const [newLanguage, setNewLanguage] = useState("");
  const [newGenre, setNewGenre] = useState("");

  const handleChange = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFile(fileUrl);
    }
  };

  const handleDelete = (setFile) => setFile(null);

  const handleAddItem = (setItems, items, value, setValue) => {
    if (value.trim() && !items.includes(value)) {
      setItems([...items, value]);
      setValue(""); // Очищаем поле ввода
    }
  };

  const handleDeleteItem = (setItems, items, index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSubmit = async () => {
    // Подготовка данных для отправки
    const movieData = {
      description,
      cover,
      releaseYear,
      genres,
      languages,
      videos,
    };

    try {
      const response = await fetch("/api/addfilm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit movie");
      }

      const data = await response.json();
      console.log("Movie added:", data); // Выводим добавленный фильм
    } catch (error) {
      console.error("Error submitting movie:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className={styles.MoviesTools}>
          <div className={styles.film}>
            {/* Превью */}
            <div
              className={styles.cover}
              style={{ backgroundImage: cover ? `url(${cover})` : "none" }}
            >
              <p className={styles.title}>cover of the movie</p>
              <input
                className={styles.upload}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setCover)}
              />
              {cover && (
                <button
                  className={styles.UiButton}
                  onClick={() => handleDelete(setCover)}
                >
                  <span>delete</span>
                </button>
              )}
            </div>
            {/* Описание */}
            <div className={styles.desc}>
              <h2 className={styles.titleDesc}>description</h2>
              {isEditing ? (
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              ) : (
                <p>{description}</p>
              )}
              <button
                className={styles.UiButton}
                onClick={isEditing ? handleSave : handleChange}
              >
                <span>{isEditing ? "save" : "change"}</span>
              </button>
            </div>
            {/* Видео */}
            <div className={styles.videos}>
              <h2>Films</h2>
              {Object.entries(videos).map(([quality, videoUrl]) => (
                <div className={styles.video} key={quality}>
                  <h2>{quality}</h2>
                  {videoUrl ? (
                    <video
                      className={styles.preview}
                      src={videoUrl}
                      controls
                      width="100%"
                    ></video>
                  ) : (
                    <input
                      className={styles.upload}
                      type="file"
                      accept="video/*"
                      onChange={(e) =>
                        handleFileChange(e, (url) =>
                          setVideos((prev) => ({ ...prev, [quality]: url }))
                        )
                      }
                    />
                  )}
                  {videoUrl && (
                    <button
                      className={styles.UiButton}
                      onClick={() =>
                        setVideos((prev) => ({ ...prev, [quality]: null }))
                      }
                    >
                      <span>delete</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
            {/* Дата релиза */}
            <div className={styles.ReleaseData}>
              <h2>Released Year</h2>
              <input
                type="number"
                value={releaseYear}
                onChange={(e) => setReleaseYear(e.target.value)}
                className={styles.input}
                placeholder="Enter year"
              />
            </div>
            {/* Языки */}
            <div className={styles.languages}>
              <h2>Languages</h2>
              <div className={styles.container}>
                {languages.map((lang, index) => (
                  <div key={index} className={styles.languageItem}>
                    <span>{lang}</span>
                    <button
                      className={styles.deleteButton}
                      onClick={() =>
                        handleDeleteItem(setLanguages, languages, index)
                      }
                    >
                      Х
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleAddItem(
                    setLanguages,
                    languages,
                    newLanguage,
                    setNewLanguage
                  )
                }
                className={styles.input}
                placeholder="Add language"
              />
            </div>
            {/* Жанры */}
            <div className={styles.genres}>
              <h2>Genres</h2>
              <div className={styles.container}>
                {genres.map((genre, index) => (
                  <div key={index} className={styles.genreItem}>
                    <p>{genre}</p>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDeleteItem(setGenres, genres, index)}
                    >
                      Х
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleAddItem(setGenres, genres, newGenre, setNewGenre)
                }
                className={styles.input}
                placeholder="Add genre"
              />
            </div>

            <button className={styles.save} onClick={handleSubmit}>
              <span>publish</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
