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
    <React.Fragment>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label
          className="form__label" htmlFor="search">
          <span className="form__label--name">¿Qué personaje buscas?</span>
        </label>
        <input
          className="form__input-text"
          type="text"
          name="search"
          value={props.search}
          onChange={handleSearch} />
      </form>
      <form>
        <h3 className="form__text">
          Busca por cómics protagonizados:
      </h3>
        <section className="form__checkbox">

          <select
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
    </React.Fragment>
  )
}

export default Filters;