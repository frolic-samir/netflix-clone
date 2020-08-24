import React from "react";
import "./App.css";
import Movies from "./components/Row";
import "./request.js";
import { requestUrl } from "./request.js";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Movies
        title="Action"
        fetchMovieUrl={requestUrl.fetchAction}
        isLarge={true}
      />
      <Movies title="Adventure" fetchMovieUrl={requestUrl.fetchAdventure} />
      <Movies title="Comedy" fetchMovieUrl={requestUrl.fetchComedy} />
      <Movies title="History" fetchMovieUrl={requestUrl.fetchHistory} />
      <Movies title="Horror" fetchMovieUrl={requestUrl.fetchHorror} />
      <Movies title="Documentary" fetchMovieUrl={requestUrl.fetchDocumentary} />
      <Movies title="Mystery" fetchMovieUrl={requestUrl.fetchMystery} />
    </div>
  );
}

export default App;
