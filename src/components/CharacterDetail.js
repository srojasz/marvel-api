import React from 'react';
import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  console.log(props);

  const { name, thumbnail, comics } = props.character;

  return (
    <aside>
      <Link to="/">
        <button title="Volver al listado">Volver atrás
        </button>
      </Link>
      <img src={thumbnail.path + "." + thumbnail.extension} />
      <h3>{name}</h3>
      <p>Cómics: {comics.available}</p>
    </aside>
  )
}

export default CharacterDetail;