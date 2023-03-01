import React, { useState } from 'react';
import pictures from '../data/pictures.js';
import StarRating from './StarRating.js';
import { useParams, Link, Outlet } from 'react-router-dom';

const Look = () => {
  const { id } = useParams();
  const [looks, setLooks] = useState(pictures);
  const ratePhoto = (id, rating) =>
    setLooks(
      looks.map((look) => (look.id === id ? { ...look, rating } : look))
    );

  return (
    <>
      <h2>LOOK {id}</h2>
      <div className="look-window">
        <img src={pictures[id].url} />
        <div className="stars">
          <StarRating
            selectedStars={looks[id].rating}
            onRate={(rating) => ratePhoto(looks[id].id, rating)}
          />
          <p className="rating">
            {(
              (parseFloat(pictures[id].rating) + parseFloat(looks[id].rating)) /
              2
            ).toFixed(2)}
          </p>
        </div>
        <Link className="details" to={`/${id}/details`}>
          More
        </Link>
        <Outlet />
      </div>
      <div className="arrows">
        {id != 0 ? (
          <Link
            className="long-arrow-left"
            to={'/' + `${parseInt(id) - 1}`}
          ></Link>
        ) : null}
        {id != pictures.length - 1 ? (
          <Link
            className="long-arrow-right"
            to={'/' + `${parseInt(id) + 1}`}
          ></Link>
        ) : null}
      </div>
    </>
  );
};
export default Look;
