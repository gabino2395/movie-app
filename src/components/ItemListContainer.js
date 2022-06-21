import React, { useEffect,useState } from "react";
import ItemList from "./ItemList";
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=279b0ab905a9e9e8f2d8373ae4d217a0";
 const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=279b0ab905a9e9e8f2d8373ae4d217a0&page=1";
 function ItemListContainer() {

   const [movies, setMovies]=useState([]);
   const [query, setQuery]=useState('');

   useEffect(() => {
     fetch(API_URL)
     .then((res)=>res.json())
     .then(data=>{
       console.log(data);
       setMovies(data.results);
     })
   }, [])


   const searchMovie = async(e)=>{
     e.preventDefault();
     console.log("Searching");
     try{
       const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
       const res= await fetch(url);
       const data= await res.json();
       console.log(data);
       setMovies(data.results);
     }
     catch(e){
       console.log(e);
     }
    }
    const changeHandler=(e)=>{
       setQuery(e.target.value);
     }

     return(

    <>
    <li>
        
    <form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <input
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></input>
              <button variant="secondary" type="submit">Search</button>
            </form>
            <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <ItemList items={movies} />)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div> 
          </li>
    </>
   )
}
   export default ItemListContainer;
    //     <div>
    //     <ItemList items={movies} />
      
    // </div>