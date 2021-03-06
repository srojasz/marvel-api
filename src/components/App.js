import React from 'react';
import { Route, Switch } from 'react-router-dom';
import fetchCharacters from '../services/fetchCharacters';
import "../stylesheets/app.scss"
import Loader from "./Loader";
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
      comics: "",
      orderBy: "",
      characters: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleComics = this.handleComics.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.sortResults = this.sortResults.bind(this);
  }

  // helpers

  selectComicsRange(value) {

    let min;
    let max;
    if (value === "-10") {
      min = 0;
      max = 10;
    }
    else if (value === "11-20") {
      min = 11;
      max = 20;
    }
    else if (value === "+20") {
      min = 21;
      max = Number.POSITIVE_INFINITY;
    }
    else {
      min = undefined;
      max = undefined;
    }

    return { min, max }
  }

  // filter by text

  handleSearch(search) {

    const { min, max } = this.selectComicsRange(this.state.comics);

    this.setState({
      search,
      isLoading: false,

    })

    fetchCharacters(search, min, max)
      .then(characters => {
        this.setState({
          isLoading: false,
          characters
        })
      })

      .catch(err => {
        console.error('my error', err)
      })
  }

  // filter by comics

  handleComics(value) {
    const search = this.state.search;

    const { min, max } = this.selectComicsRange(value);

    this.setState({
      comics: value
    })


    fetchCharacters(search, min, max)
      .then(characters => {

        this.setState({
          isLoading: false,
          characters
        })
      }

      )
  }

  // sort results

  sortResults(orderBy) {

    const search = this.state.search;

    const { min, max } = this.selectComicsRange(this.state.comics);

    this.setState({
      orderBy

    })

    fetchCharacters(search, min, max, orderBy)
      .then(characters => {

        this.setState({
          isLoading: false,
          characters
        })
      }

      )
  }


  // first fetch (no params)

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

    const selectedCharacter = this.state.characters
      .find(character => character.id === routeId)
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
    console.log(this.state.characters)
    const isLoading = this.state.isLoading;

    return isLoading
      ? (
        <div className="ml-5 mt-5">
          <Loader />
        </div>)
      : (
        <div className="container">
          <Header
          />


          <Switch>
            <Route exact path='/'>
              <Filters
                handleSearch={this.handleSearch}
                search={this.state.search}
                handleComics={this.handleComics} />
              <CharactersList
                characters={this.state.characters}
                sortResults={this.sortResults}
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