import React from 'react';
import { actors } from '../data';
import Movies from './Movies';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      
      {actors.map(actor => (
        
        <div className="actor">
        <h1 className="actor">{actor.name}</h1>
        <ul className="actor">
          {actor.movies.map(movie => (
            <li className="actor">{movie}</li>
          ))}
          </ul>
        </div>
      ))}
     
    </div>
    
  );
};

export default Actors;
