import { Link } from 'react-router-dom';
import React from 'react'
const API_IMG="https://image.tmdb.org/t/p/w500/";

const Item = ({ item }) => {
  return (
    
      <div className='itemsList'>
          <img width="200px" src={API_IMG+item.poster_path}  alt="producto" />
          <h2>{item.title}</h2>
          <p>popularid {item.popularity}</p>
          <Link className='btn btn-primary' to={`/detail/${item.id}`}>ver detalle</Link>
      </div>


    
  );
}
export default Item