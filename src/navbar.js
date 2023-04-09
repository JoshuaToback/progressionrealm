import React from "react";
import { Link } from 'react-router-dom';


export default function navbar() {
  return (
    <nav className="nav">
      <ul className="navbar">
          <CustomLink to="/">Home</CustomLink>
      </ul>

    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
    return (
        <li>
        <Link to = {to} {...props}>
        { children }
        </Link>
        </li>
    )
}