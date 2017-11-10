import React, { Component } from 'react';
import pokedexImg from './pokedex.gif';
import { Section, Container } from 'reactbulma';
import './App.css';

class App extends Component {
  render() {
    return (
      <Section>
        <Container>
        <header className="App-header">
          <img src={pokedexImg} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CS Pokedex</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </Container>>
      </Section>
    );
  }
}

export default App;
