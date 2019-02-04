import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
      
         {movies.map(movie => {
           <div>{movie}</div>
         })}
       
    </div>
  );
};

export default Movies;
