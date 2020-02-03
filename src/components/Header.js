import React from 'react';
import logo from "../images/marvel-cabecera.jpg";
import "../stylesheets/header.scss"

function Header() {
  return (
    <header className="header">
      <h2 className="header__title">
        Marvel Finder
      </h2>
      <img
        src={logo}
        alt="Imagen de la cabecera con todos los personajes de Marvel"
      />

    </header>
  )
}

export default Header;