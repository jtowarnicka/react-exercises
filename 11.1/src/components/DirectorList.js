import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DirectorList = () => {
  const directors = useSelector((state) => state.directors);
  return (
    <div>
      <h1>directors</h1>
      <ul>
        {directors.map((d) => (
          <li key={d.id}>
            {d.firstName} {d.lastName}
            <Link className="btn btn-outline-dark" to={`/directors/${d.id}`}>
              details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DirectorList;
