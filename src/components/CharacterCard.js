import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/card.scss";

function CharacterCard(props) {

  const { name, id, img, comicNumber } = props;
  const route = `/character/${id}`;

  return (
    <React.Fragment>
      <img
        className="card__img"
        alt={`Imagen de ${name}`}
        src={img} />
      <h3>{name}</h3>
      {/* <p>Número de comics disponibles: {comicNumber}</p> */}

      <Link to={route}>
        <button
          className="card__button"
          title="Pincha aquí para conocer todos los detalles">
          Más información
        </button>
      </Link>

    </React.Fragment>
  )
}

export default CharacterCard;