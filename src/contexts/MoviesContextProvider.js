import React, { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("movies")) || [];

  const [movies, setMovies] = useState([...initialState]);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const clear = () => {
    setMovies([]);
  };

  const addMovies = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovies, clear }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
