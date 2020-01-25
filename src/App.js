import React from 'react';
import fetchCharacters from './services/fetchCharacters';


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

      </div>
    );
  }
}

export default App;
