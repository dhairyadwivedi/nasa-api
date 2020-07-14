import React, { useState, useEffect } from "react";

export const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState({});

  async function fetchPhoto(date) {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=Zh7WE3pY03LRHUSR4KB0HdjRXPHwwqDKO1GRgVt4`
    );
    const data = await res.json();
    setPhotoData(data);
  }

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className="container">
      <img className="nasa-image" src={photoData.hdurl} alt="nasa" />
      <div>
        <h1>{photoData.title}</h1>
        <span>{photoData.date}</span>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
};
