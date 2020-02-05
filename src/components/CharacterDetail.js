import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/detail.scss";

class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {

  //   const { id } = this.props.character;

  //   const comicsUrl = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&limit=50&apikey=4d46429eee763362f21b987f0e5f594a&hash=b9cc6de99e12cc463c64a0fee68e69bc`;

  //   fetch(comicsUrl)
  //     .then(response => response.json())
  //     .then(responseData => responseData.data.results)
  // }



  render() {

    const { name, thumbnail, comics } = this.props.character;
    const apiKey = "?ts=1&apikey=4d46429eee763362f21b987f0e5f594a&hash=b9cc6de99e12cc463c64a0fee68e69bc";
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
          src={thumbnail.path + "." + thumbnail.extension} />

        <h3>{name}</h3>
        <p>Cómics: {comics.available}</p>
        {/* <a
          href={comics}
          title={`Pincha aquí para acceder a los comics disponibles de ${name}`}>
          {`Descubre los comics de ${name}`}
        </a> */}

      </aside >
    )
  }
}

export default CharacterDetail;