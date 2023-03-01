import React from 'react';
import { useParams, Link } from 'react-router-dom';
import pictures from '../data/pictures.js';

const Details = () => {
  const { id } = useParams();

  return (
    <>
      <div className="details-2">
        <p className="details-p"> Author: {pictures[id].author}</p>
        <a className="details-p" href={pictures[id].info}>
          about {pictures[id].author}
        </a>
        <p className="details-p"> {pictures[id].date}</p>
        <p className="details-p">{pictures[id].description}</p>
      </div>
      <Link to={`/${id}`} className="details">
        ...Hide
      </Link>
    </>
  );
};

export default Details;
