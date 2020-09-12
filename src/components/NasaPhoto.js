import React, { useState, useEffect } from "react";

export const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState({});

  async function fetchPhoto(date) {
    const res = await fetch(process.env.REACT_APP_KEY);
    const data = await res.json();
    setPhotoData(data);
  }

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className="container">
      <div>
        <h1>{photoData.title}</h1>
        <span>{photoData.date}</span>

        <img className="nasa-image" src={photoData.hdurl} alt="nasa" />
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
};
