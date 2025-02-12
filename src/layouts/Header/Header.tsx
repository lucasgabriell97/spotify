import React from "react";
import "./styles.css"

import logoSpotify from "../../assets/logo/spotify-logo.png";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logoSpotify} alt="Logo do Spotify" />

      <a href="/">
        <h1>Spotify</h1>
      </a>
    </header>
  );
};
