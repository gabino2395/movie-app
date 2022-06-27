import React from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Listado = () => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/movie/popular?api_key=279b0ab905a9e9e8f2d8373ae4d217a0&language=es-ES&page=1";
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data;
        setMovieList(apiData.results);
      })
      .catch((error) => {
        swal(<h2>upps, hubo un error</h2>);
      });
  }, [setMovieList]);
  return (
    <div className="container">
      <div className="row listado">
        {movieList.map((oneMovie, index) => {
          return (
            <div className="col-md-3 itemList" key={index}>
              <div className="card my-4 itemList">

                <img
                  src={API_IMG + oneMovie.poster_path}
                  alt={oneMovie.poster_path}
                />

                <div className="itemList card-body">                
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="linkTitle"
                  >
                    view detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listado;
