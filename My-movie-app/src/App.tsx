import { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";

//const API_URL =
//'https://api.themoviedb.org/3/search/movie?query=all&api_key=fd85488746b2b3420e6dd65219f99e37'
//   const API_URL =
//  "https://api.themoviedb.org/3/movie/popular?api_key=fd85488746b2b3420e6dd65219f99e37";

const API_URL = "https://api.themoviedb.org/3/search/movie?query=";
const QUERY = "";
QUERY;
const API_KEY = "&api_key=fd85488746b2b3420e6dd65219f99e37";

function App() {
  const [movies, setmovies] = useState([]);

  const [search, setsearch] = useState("");

  const searchMovies = async (QUERY: any) => {
    const ALL = API_URL + QUERY + API_KEY;
    const response = await fetch(`${ALL}&s=${QUERY}`);
    const data = await response.json();
    console.log(data);
    setmovies(data.results);
  };

  useEffect(() => {
    // fetch(API_URL)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setmovies(data.results);
    //   });
    searchMovies("action");
  }, []);
  const page = () => {
    const names = [
      "Please Check Your Internet",
      "An error just occured",
      "Poor connection",
    ];

    const render = Math.floor(Math.random() * 3);
    return names[render];

    // if (names.length == 1) {
    //   color:"#c19a6bcb";
    // }else if (names.length == 2) {
    //   color:"yellow";
    // }else if (names.length == 2) {
    //   color:"red";
    // }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-p">
          <h1 className="h1">Movie Land</h1>
          <div className="black"></div>
        </div>

        <div className="search">
          <div className="input">
            <input
              type="text"
              placeholder="search for movies"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <div
              className="search-icon bx bx-search"
              onClick={() => {
                searchMovies(search);
              }}
            ></div>
          </div>
        </div>
      </div>

      <div>
        {movies.length > 0 ? (
          <div className="movie-card">
            {movies.map((results) => (
              <MovieBox key={results} results={results} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>{page()}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
