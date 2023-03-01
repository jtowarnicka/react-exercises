import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div>
      <h1>dashboard</h1>
      <ul>
        {movies.slice(-3).map((m) => (
          <li key={m.id}>
            {m.title} ({m.productionYear})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;
