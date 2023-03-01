import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import './style.css';

export function Home() {
  return (
    <div>
      <h1>Company Website</h1>
      <nav className="navbar navbar-expand-lg bg-light">
        <Link to="about">About </Link>
        <Link to="events">Events </Link>
        <Link to="">Home </Link>
        <Link to="services">Services </Link>
        <Link to="contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h1>Services</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <nav className="navbar navbar-expand-lg bg-light">
        <Link to="us">US </Link>
        <Link to="pl">PL </Link>
        <Link to="de">DE </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function ContactUS() {
  return (
    <div>
      <h1>How can we help you?</h1>
    </div>
  );
}

export function ContactPL() {
  return (
    <div>
      <h1>W czym możemy pomóc?</h1>
    </div>
  );
}

export function ContactDE() {
  return (
    <div>
      <h1>Wie können wir Ihnen helfen?</h1>
    </div>
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
