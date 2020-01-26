import React from 'react';
import fetchCharacters from '../services/fetchCharacters';
import Header from "./Header";
import Filters from "./Filters";
import CharactersList from "./CharactersList";
import CharacterDetail from "./CharacterDetail";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      characters: []
    }
  }

  componentDidMount() {
    fetchCharacters().then(characters => {
      if (characters === undefined) {
        this.setState({
          isLoading: true
        })
      } else {

        this.setState({
          isLoading: false,
          characters
        })
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        Probando...
        <Header />
        <Filters />
        <CharactersList
          characters={this.state.characters} />

        <CharacterDetail />

      </div>
    );
  }
}

export default App;
