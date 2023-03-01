import * as React from 'react';
import ColorContext from './Context';
import PrimaryHeadline from './components/PrimaryHeadline';
import Paragraph from './components/Paragraph';
import SecondaryHeadline from './components/SecondaryHeadline';
import './style.css';

export default function App() {
  return (
    <ColorContext.Provider value={'#A8EBFF'}>
      <PrimaryHeadline />
      <Paragraph text={'parapraph'} />
      <SecondaryHeadline text={'secondary headline'} />
    </ColorContext.Provider>
  );
}
