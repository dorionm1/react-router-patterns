import React from 'react';
import defaultProps from "../defaultProps";

import { Link } from 'react-router-dom';

const Dogs = () => {
  const { dogs } = defaultProps

  return (
      <div>
        {dogs.map((dog, index) => (
          <div key={index}>
            <h2><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h2>
          </div>
        ))}
      </div>
    );
}

export default Dogs;