import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../stylesheets/card.scss";

function CharacterCard(props) {

  const { name, id, img } = props;
  const route = `/character/${id}`;

  return (
    <React.Fragment>
      <img
        className="card__img"
        alt={`Imagen de ${name}`}
        src={img} />
      <h3>{name}</h3>


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
//PropTypes
CharacterCard.propTypes = {

  name: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.string,

}

export default CharacterCard;