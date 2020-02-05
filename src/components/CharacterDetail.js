import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../stylesheets/detail.scss";

function CharacterDetail(props) {

  const { name, thumbnail, comics } = props.character;

  return (

    <aside className="detail">

      <Link to="/">
        <button className="detail__button"
          title="Volver al listado">
          Volver atrás
          </button>
      </Link>

      <img
        className="detail__img"
        alt={`Imagen de ${name}`}
        src={thumbnail.path + "." + thumbnail.extension} />

      <h3>{name}</h3>
      <p>Cómics: {comics.available}</p>


    </aside >
  )
}

// PropTypes 

CharacterDetail.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string, comics: PropTypes.string

};

export default CharacterDetail;