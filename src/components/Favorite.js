import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContextProvider";
import { Button } from "@material-ui/core";

const Favorite = () => {
  const { movies, clear } = useContext(MoviesContext);

  console.log(movies);
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => clear()}>
        Clear
      </Button>
      {movies.map((movie) => (
        <div>{movie.title}</div>
      ))}
    </>
  );
};

export default Favorite;
