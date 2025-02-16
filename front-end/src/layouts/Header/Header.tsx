import React from "react";
import "./styles.css";
import { Link } from "react-router";

import logoSpotify from "../../assets/logo/spotify-logo.png";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>

      <Link to="/">
        <h1>Spotify</h1>
      </Link>
    </header>
  );
};
