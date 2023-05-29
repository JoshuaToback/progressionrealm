import React from "react";
import { Link } from "react-router-dom";
import ProgRealmLogo from "./images/TheProgressionRealmLogo.png";

export default function navbar() {
  return (
    <nav className="navbar">
      <CustomLink to="/">
        <img
          src={ProgRealmLogo}
          id="progLogo"
          alt="Progression Realm Logo"
        ></img>
      </CustomLink>
      <ul className="navbar-links">
        <li>
          <CustomLink to="/Videos">Videos</CustomLink>
        </li>
        <li>
          <CustomLink to="/Stats">Stats</CustomLink>
        </li>
        <li>
          <CustomLink to="/Duelists">Duelists</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
