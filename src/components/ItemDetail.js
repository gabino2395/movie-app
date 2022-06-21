import React from "react";
import { Link } from "react-router-dom";
const API_IMG="https://image.tmdb.org/t/p/w500/";

// const ItemDetail = ({ movies}) => {

    

     
    
//         console.log(ItemDetail)
//       return (
        
//           <div className='itemsList'>
//               <h1>hola</h1>
//               {/* <img width="200px" src={API_IMG+movies.poster_path}  alt="producto" />
//               <h2>{movies.title}</h2>
//               <p>popularid {movies.popularity}</p>
//               <Link className='btn btn-primary' to={`/detail/${movies.id}`}>ver detalle</Link> */}
//           </div>

//       )
// };
const ItemDetail = ({ item }) => {
    return (
      
        <div className='itemsList'>
            <img width="200px" src={API_IMG+item.poster_path}  alt="producto" />
            <h2>{item.title}</h2>
            <p>popularid {item.popularity}</p>
            <Link className='btn btn-primary' to={`/detail/${item.id}`}>ver detalle</Link>
        </div>
  
  
      
    );
  }

export default ItemDetail;
