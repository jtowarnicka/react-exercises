import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [pattern, setPattern] = useState('');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const usersSelect = useSelector((state) => state.users);
  const [users, setUsers] = useState(usersSelect);
  const handleChange = (set) => {
    return (event) => {
      set(event.target.value);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    checked1
      ? checked2
        ? setUsers(
            usersSelect
              .filter((user) => user.email.includes(pattern))
              .sort((a, b) =>
                a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1
              )
          )
        : setUsers(usersSelect.filter((user) => user.email.includes(pattern)))
      : checked2
      ? setUsers(
          usersSelect
            .filter((user) => user.username.includes(pattern))
            .sort((a, b) =>
              a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1
            )
        )
      : setUsers(usersSelect.filter((user) => user.username.includes(pattern)));
  };
  return (
    <div>
      <h1>users</h1>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control search-input"
            type="text"
            placeholder="Search"
            aria-label="Search"
            name="title"
            value={pattern}
            onChange={handleChange(setPattern)}
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={checked1}
              id="defaultCheck1"
              onChange={() => setChecked1(!checked1)}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              check if you want search by email
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={checked2}
                id="defaultCheck1"
                onChange={() => setChecked2(!checked2)}
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                check if you want to sort alphabetically
              </label>
            </div>
          </div>
          <button className="btn btn-outline-success my-2 my-sm-0">
            Search
          </button>
        </div>
      </form>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.username} {u.email}
            <Link className="btn btn-outline-dark" to={`/user/${u.id}`}>
              details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;
