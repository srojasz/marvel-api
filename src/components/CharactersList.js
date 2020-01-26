import React from 'react';
import CharacterCard from './CharacterCard';

function CharactersList(props) {

  if (props.characters.length === 0) {
    return (
      <p>Lo sentimos, no hay coincidencias</p>
    )
  } else {
    return (
      <ul>
        {props.characters.map(character =>

          < li
            key={character.id}>

            <CharacterCard
              name={character.name}
              img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              comic={character.comics.collectionURI}

            />


          </li>

        )
        }

      </ul >
    )
  }




}

export default CharactersList;


