import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

import { Link } from "react-router-dom";

const Resultados = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [movieResult, setMovieResult] = useState([]);
  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=279b0ab905a9e9e8f2d8373ae4d217a0&language=es-ES&query=${keyword}`;
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data.results;
        if (apiData.length === 0) {
          swal(<h2>upps, hubo un error</h2>);
        } else {
          setMovieResult(apiData);
        }
      })
      .catch((error) => {
        swal(<h2>upps, hubo un error</h2>);
      });
  }, [keyword]);

  return (
    <>
      {movieResult.length === 0 && <h3>no hay resultados</h3>}
      <div className="container">
        <div className="row listado">
          {movieResult.map((movieResult, index) => {
            return (
              <div className="col-md-3 itemList" key={index}>
                <div className="card my-4 itemList">
                  <img
                    src={API_IMG + movieResult.poster_path}
                    alt={movieResult.poster_path}
                  />

                  <div className="itemList card-body">
                    <Link
                      to={`/detalle?movieID=${movieResult.id}`}
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
    </>
  );
};

export default Resultados;
