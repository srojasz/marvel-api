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

  return (

    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <label
        className="form__label" htmlFor="search">
        ¿Qué personaje buscas?
        </label>
      <input
        className="form__input-text"
        type="text"
        name="search"
        value={props.search}
        placeholder="Ej. Hulk"
        onChange={handleSearch} />
    </form>


  )
}

export default Filters;