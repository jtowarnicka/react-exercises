import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DirectorDetails = () => {
  const { id } = useParams();
  const directors = useSelector((state) => state.directors);
  const director = directors.find((d) => d.id === id);
  return (
    <div>
      <h1>details</h1>
      <h2>
        {director.firstName} {director.lastName}
      </h2>
      <p>{director.age}</p>
      <Link
        className="btn btn-outline-dark"
        to={`/directors/${director.id}/edit`}
      >
        edit
      </Link>
    </div>
  );
};
export default DirectorDetails;
