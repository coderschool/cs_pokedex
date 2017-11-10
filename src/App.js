import React, { Component } from "react";
import pokedexImg from "./pokedex.gif";
import { Section, Container, Columns, Column } from "bloomer";
import Pokecard from "./Pokecard";
import "./App.css";
import 'bulma/css/bulma.css';


const pokemons = require('./pokedex.json');

class App extends Component {
  chunk(array, size) {
    return array.reduce((chunks, item, i) => {
      if (i % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  }

  render() {
    // Test Code
    return (
      <Section>
        <Container>
          <header className="App-header">
            <img src={pokedexImg} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to CS Pokedex</h1>
          </header>
          <Container>
          {this.chunk(pokemons, 3).map((c, idx) => (
            <Columns isCentered>
              {c.map( (p) => (
                <Column isSize="1/3">
                  <Pokecard pokemon={p} />
                </Column>
              ))}
            </Columns>)
          )}
          </Container>
        </Container>
      </Section>
    );
  }
}

export default App;
