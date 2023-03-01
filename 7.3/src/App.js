import React, { useContext } from 'react';
import SignUpForm from './components/SignUpForm';
import Table from './components/Table';
import { UserContext } from './DataProvider';
import './style.scss';

export default function App() {
  const registered = useContext(UserContext).registered;

  return registered ? (
    <div>
      <Table />
    </div>
  ) : (
    <div>
      <SignUpForm />
    </div>
  );
}
