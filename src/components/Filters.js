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

  function handleCheckbox(ev) {
    const comics = ev.target.value;
    props.handleCheckbox(comics);
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
      <h3 className="form__text">
        ¿O prefieres buscar por número de episodios protagonizados?</h3>
      <section className="form__checkbox">


        <select
          onChange={handleCheckbox}>
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