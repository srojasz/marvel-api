import React from 'react';

function CharacterCard(props) {

  const { name, img, comic, comicNumber } = props;

  return (
    <React.Fragment>
      <img
        alt={`Imagen de ${name}`}
        src={img} />
      <p>{name}</p>
      <p>Número de comics disponibles: {comicNumber}</p>
      <a
        href={comic}
        title={`Pincha aquí para acceder a los comics disponibles de ${name}`}>
        {`Descubre los comics de ${name}`}
      </a>
    </React.Fragment>
  )
}




export default CharacterCard;