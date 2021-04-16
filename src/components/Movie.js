import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const { data } = props;

  return (
      <Link to={{ pathname: `/movie/${data.id}` }}>
        <img
          src={`${imgUrl}${data.poster_path}`}
          alt={data.title}
          style={{ width: "150px" }}
        />
      </Link>

  );
}
export default Movie;
