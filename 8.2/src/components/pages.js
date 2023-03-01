import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export function Add() {
  const [params] = useSearchParams();
  return (
    <>
      <p>
        {!(params.has('x') || params.has('y'))
          ? 'error'
          : parseInt(params.get('x')) + parseInt(params.get('y'))}
      </p>
    </>
  );
}

export function Subtract() {
  const [params] = useSearchParams();
  return (
    <>
      <p>
        {!(params.has('x') || params.has('y'))
          ? 'error'
          : parseInt(params.get('x')) - parseInt(params.get('y'))}
      </p>
    </>
  );
}

export function Multiply() {
  const [params] = useSearchParams();
  return (
    <>
      <p>
        {!(params.has('x') || params.has('y'))
          ? 'error'
          : parseInt(params.get('x')) * parseInt(params.get('y'))}
      </p>
    </>
  );
}

export function Divide() {
  const [params] = useSearchParams();
  return (
    <>
      <p>
        {!(params.has('x') || params.has('y'))
          ? 'error'
          : params.get('y') === '0'
          ? 'you cannot divide by zero!!!'
          : parseInt(params.get('x')) / parseInt(params.get('y'))}
      </p>
    </>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Nie znaleziono elementu: {location.pathname}</h1>
    </div>
  );
}
