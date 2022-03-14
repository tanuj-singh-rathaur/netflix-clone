import React, { useEffect, useState } from 'react';
import axios from './axios'
import './Row.css'

function Row({title, fetchURL, isLarge}) { 

    const [movies,setMovies]=useState([]);
    const baseURL="https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
     
        async function fetchData(){
             const request = await axios.get(fetchURL)
             setMovies(request.data.results)
             return request
        }

        fetchData()

    },[fetchURL])
     
  return (<div className='row'>

    <h2>{title}</h2>
    
    <div className='row__posters'>

        {movies.map(movie=>(     
            <img 
            key={movie.id}
            className={`row__poster ${isLarge && 'row__posterLarge'}`}
            src={`${baseURL}${
                isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
        ))}

    </div>
  
  </div>);
}

export default Row;
