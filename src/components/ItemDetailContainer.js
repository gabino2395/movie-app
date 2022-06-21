import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";
//  import { productos } from "../utils/productos";
import ItemDetail from "./ItemDetail";
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=279b0ab905a9e9e8f2d8373ae4d217a0";

const ItemDetailContainer = () => {
   
    const [query, setQuery]=useState('');

     const [movies, setMovies]=useState([]);
    //  const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;

     const { id } = useParams();

     useEffect(()=>{
          fetch(API_URL)
         .then((res)=>res.json())
         .catch(error=>console.log(error))

         .then((mov)=>(movies.find(mov =>movies.id == id)
         ))
         setMovies(movies.results);


       },[])
   
  return (
    <>
     <ItemDetail items={movies} />
   
    </>
         


  )
};

export default ItemDetailContainer;
