import React, { useState, useEffect } from "react";
import "../Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Movies(props) {
  const [movies, setMovies] = useState([{ data: null }]);
  const [trailerUrl, setTrailer] = useState("");

  const url = `https://api.themoviedb.org/3/${props.fetchMovieUrl}`;
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    xhr.responseType = "json";
    xhr.open(method, url);
    xhr.onload = () => {
      setMovies({ data: xhr.response.results });
    };
    xhr.send();
  }, [url]);

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailer("");
    } else {
      console.log("im entered");
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opt = {
    height: "360px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  let content = null;
  if (movies.data) {
    content = movies.data.map((m) => (
      <div className="single-image-container" key={m.id}>
        <img
          key={m.id}
          className={`row_poster ${props.isLarge && "row_posterLarge"}`}
          onClick={() => handleTrailer(m)}
          src={`https://image.tmdb.org/t/p/original${
            props.isLarge ? m.poster_path : m.backdrop_path
          }`}
          alt={m.title}
        />
      </div>
    ));
  }
  return (
    <div className="row">
      <h3>{props.title}</h3>
      <div className="row_posters">{content}</div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opt} />}
    </div>
  );
}

export default Movies;
