import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      error: "",
      characters: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    // this.filterChar = this.filterChar.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }

  // helpers

  handleSearch(search) {
    this.setState({
      search,
      isLoading: true
    })

    fetchCharacters(search)
      .then(characters => {
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
      .catch(err => {
        console.error('my error', err)
        this.setState({
          isLoading: false,
          error: "Please try again"
        })
      })
  }


  // filterChar() {
  //   const characters = this.state.characters;

  //   return (

  //     characters.filter((character =>
  //       character.name.toLowerCase().includes(this.state.search)))
  //   )
  // }



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


  // rendering

  renderCharacterDetail(props) {

    const routeId = parseInt(props.match.params.id);

    const selectedCharacter = this.state.characters.find(character => character.id === routeId)
    if (selectedCharacter === undefined) {
      return <h4 >
        Personaje no encontrado
        </h4>
    } else {

      return (

        < CharacterDetail character={selectedCharacter} />
      );
    }
  }


  render() {
    console.log(this.state.search)

    return (
      <div>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Filters
              handleSearch={this.handleSearch}
              search={this.state.search} />
            <CharactersList
              characters={this.state.characters}
            />
          </Route>
          <Route
            path='/character/:id'
            render={this.renderCharacterDetail} />

        </Switch>
      </div >
    );
  }
}

export default App;
