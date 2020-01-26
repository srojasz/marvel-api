import React from 'react';

function Filters(props) {

  function onSubmit(ev) {
    ev.preventDefault();
  }

  function handleSearch(ev) {
    const search = ev.target.value;
    props.handleSearch(search);
  }

  return (

    <form
      className="form"
      onSubmit={onSubmit}
    >
      <label htmlFor="search">
        ¿Qué personaje buscas?
        </label>
      <input
        type="text"
        name="search"
        value={props.search}
        placeholder="Ej. Aaron Stack"
        onChange={handleSearch} />
    </form>


  )
}

export default Filters;