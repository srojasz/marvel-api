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
      search: "",
      characters: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.filterChar = this.filterChar.bind(this);
  }

  // helpers

  handleSearch(search) {
    this.setState({
      search
    })
  }

  filterChar() {
    const characters = this.state.characters;

    return (

      characters.filter((character =>
        character.name.toLowerCase().includes(this.state.search)))
    )
  }



  // fetch

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
    console.log(this.state.characters)

    return (
      <div>
        <Header />
        <Filters
          handleSearch={this.handleSearch}
          search={this.state.search} />
        <CharactersList
          characters={this.filterChar()}
        />

        <CharacterDetail />

      </div >
    );
  }
}

export default App;
