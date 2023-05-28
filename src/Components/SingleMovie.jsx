import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function SingleMovie() {
  const { id } = useParams();
  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  async function getData(url) {
    setLoading(true);
    try {
      const data = await fetch(url);
      const MovieData = await data.json();
      console.log(MovieData);
      if (MovieData.Response === "True") {
        setMovie(MovieData);
        console.log(MovieData);
        setIsError({
          show: false,
          msg: "",
        });
        setLoading(false);
      } else {
        setIsError({
          show: true,
          msg: MovieData.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getData(`${url}&i=${id}`);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [id]);
  if(isLoading){
    return(
      <div className="movie-section">
        <div className="loading">Loading....</div>
      </div>
    );
  }
  return (
    <>
    <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img src={movie.Poster} alt="" />
      </figure>
      <div className="card-content">
        <p className="title">Title:{movie.Title}</p>
        <p className="card-text">Released In:{movie.Released}</p>
        <p className="card-text">Writer:{movie.Writer}</p>
        <p className="card-text">Year:{movie.Year}</p>
        <p className="card-text">Imdb Rating:{movie.imdbRating}</p>

      </div>
    </div>
    </section>
    </>
  );
}
export default SingleMovie;
