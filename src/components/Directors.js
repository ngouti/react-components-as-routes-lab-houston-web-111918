import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        <div>{director}</div>
      })}
    </div>
  );
}

export default Directors
