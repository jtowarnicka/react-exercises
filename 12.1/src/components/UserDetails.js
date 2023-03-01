import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../actions/UserActions';

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((u) => u.id === id);
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    navigate('/', { replace: true });
  };
  return (
    <div>
      <h1>user</h1>
      <h2>
        {user.username} {user.email}
      </h2>
      <p>{user.password}</p>
      <Link className="btn btn-outline-dark" to={`/user/${id}/edit`}>
        edit
      </Link>
      <button className="btn btn-outline-dark" onClick={() => handleDelete(id)}>
        delete
      </button>
    </div>
  );
};
export default UserDetails;
