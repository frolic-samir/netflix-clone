import React, { useState, useEffect } from "react";
import "../banner.css";

function Banner() {
  const [movie, setMovie] = useState({ data: null });
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=cd824fd224256a67f14eef590b8998f5&with_genres=28";

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    xhr.responseType = "json";
    xhr.open(method, url);
    xhr.onload = function () {
      setMovie({
        data:
          xhr.response.results[
            Math.floor(Math.random() * xhr.response.results.length)
          ],
      });
    };
    xhr.send();
  }, [url]);

  let description;
  if (movie.data) {
    description = movie.data.overview.substring(0, 250) + "...";
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${
          movie.data?.poster_path || movie.data?.backdrop_path
        }")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "45vh",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie.data?.title || movie.data?.name || movie.data?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <div className="banner-description">{description}</div>
      </div>
      <div className="banner-bottom-blur"></div>
    </div>
  );
}

export default Banner;
