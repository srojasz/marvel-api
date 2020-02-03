import React from 'react';
import "../stylesheets/filters.scss";

function Filters(props) {

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  function handleSearch(ev) {
    const search = ev.target.value;
    props.handleSearch(search);
  }

  function handleComics(ev) {
    const value = ev.target.value;
    props.handleComics(value);
  }

  return (

    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <section className="form-search">
        <label
          className="form__label" htmlFor="search">
          ¿Qué personaje buscas?
        </label>
        <input
          className="form__input-text"
          type="text"
          name="search"
          placeholder="Ej. Hulk"
          value={props.search}
          onChange={handleSearch} />
      </section>


      <section className="form__comics">
        <h3 className="form__comics--title">
          ¿Cuántos cómics protagoniza?
      </h3>
        <select className="form__comics--select"
          onChange={handleComics}>
          <option value="">
            Todos
            </option>
          <option value="-10">
            Menos de 10 cómics
              </option>
          <option value="11-20">
            Entre 11 y 20 cómics
              </option>
          <option value="+20">
            Más de 20 cómics
              </option>

        </select>

      </section>

    </form>

  )
}

export default Filters;