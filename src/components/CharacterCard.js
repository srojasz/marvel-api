import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/card.scss";

function CharacterCard(props) {

  const { name, id, img, comic, comicNumber } = props;
  const route = `/character/${id}`;

  return (
    <React.Fragment>
      <img
        className="card__img"
        alt={`Imagen de ${name}`}
        src={img} />
      <p>{name}</p>
      <p>Número de comics disponibles: {comicNumber}</p>
      <a
        href={comic}
        title={`Pincha aquí para acceder a los comics disponibles de ${name}`}>
        {`Descubre los comics de ${name}`}
      </a>
      <Link to={route}>
        <button
          title="Pincha aquí para conocer todos los detalles">
          Más información
        </button>
      </Link>

    </React.Fragment>
  )
}




export default CharacterCard;