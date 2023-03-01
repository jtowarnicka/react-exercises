import React, { useContext } from 'react';
import { UsersContext } from './DataProvider';

const Table = ({ user }) => {
  if (!useContext(UsersContext)) return;
  return (
    <table>
      <tbody>
        <tr>
          <td>first name</td>
          <td>{user.firstName}</td>
        </tr>
        <tr>
          <td>last name</td>
          <td>{user.lastName}</td>
        </tr>
        <tr>
          <td>email</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>date of birth</td>
          <td>{user.date}</td>
        </tr>
        <tr>
          <td>pic</td>
          <td>{user.image}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
