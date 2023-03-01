import React from 'react';

const Table = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <table className="user-table">
      <tbody>
        <tr>
          <td className="title">name</td>
          <td className="usr-data">{user.name}</td>
        </tr>
        <tr>
          <td className="title">email</td>
          <td className="usr-data">{user.email}</td>
        </tr>
        <tr>
          <td className="title">password</td>
          <td className="usr-data">{user.password}</td>
        </tr>
        <tr>
          <td className="title">gender</td>
          <td className="usr-data">{user.gender}</td>
        </tr>
        <tr>
          <td className="title">nationality</td>
          <td className="usr-data">{user.nationality}</td>
        </tr>
        <tr>
          <td className="title">terms and agreements</td>
          <td className="usr-data">accepted</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
