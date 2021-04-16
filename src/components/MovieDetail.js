import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { MoviesContext } from "../contexts/MoviesContextProvider";

function MovieDetail(props) {
  const data = props.match.params;
  const [movie, setMovie] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/original";
  
  const { addMovies } = useContext(MoviesContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/${data.id}?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=fr`
      );
      setMovie(res.data);
  
    };
    fetchData();
  }, [data.id]);
  
  console.log(movie);

  return (
    <div className="movie-detail-container">
      <div className="movie">
        <h4>{movie.title}</h4>
        <img
          src={`${imgUrl}${movie.poster_path}`}
          alt={`${movie.title}`}
          style={{ width: "300px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addMovies(movie)}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default MovieDetail;
