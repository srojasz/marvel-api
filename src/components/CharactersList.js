import React from 'react';
import noresults from "../images/no-results.jpg";
import "../stylesheets/list.scss";
import CharacterCard from './CharacterCard';

function CharactersList(props) {
  if (props.characters.length === 0) {
    return (
      <section className="noresults">
        <p className="noresults__text">Lo sentimos, no hemos encontrado lo que buscas. ¡Inténtalo otra vez!</p>
        <img className="noresults__img" alt="Imagen de Supermán llorando"
          src={noresults} />
      </section>
    )
  } else {
    return (
      <React.Fragment>
        <section className="list">
          <div className="list__info">Hay <span className="list__number">{props.characters.length}</span> personajes que coinciden con tus criterios de búsqueda
          </div>



          <ul className="list__list">
            {props.characters.map(character =>

              < li className="card"

                key={character.id}>

                <CharacterCard

                  name={character.name}
                  id={character.id}
                  img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                // comicNumber={character.comics.available}

                />


              </li>
            )
            }

          </ul >
        </section>
      </React.Fragment>
    )
  }

}

export default CharactersList;


