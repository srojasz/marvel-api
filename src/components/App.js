import React from 'react';
import fetchCharacters from '../services/fetchCharacters';
import Header from "./Header";
import Filters from "./Filters";
import CharactersList from "./CharactersList";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetchCharacters().then(characters => this.setState({ characters }));
  }

  render() {
    console.log(this.state.characters)
    return (
      <div>
        Probando...
        <Header />
        <Filters />
        <CharactersList />
        <CharacterCard />
        <CharacterDetail />



      </div>
    );
  }
}

export default App;
