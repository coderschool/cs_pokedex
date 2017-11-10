import React, { Component } from "react";
import pokedexImg from "./pokedex.gif";
import { Section, Container, Columns, Column, Field, Label, Control, Input } from "bloomer";
import Pokecard from "./Pokecard";
import "./App.css";
import "bulma/css/bulma.css";

const dataPokemons = require("./pokedex.json");

class App extends Component {
  constructor(props) {
    super(props);
    let initialPokemons = dataPokemons.map( (p) => ({
      ...p
    })).slice(0, 50);
    this.state = {
      pokemons: initialPokemons,
      filterValue: ''
    }
  }

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

  handleOnChange(e) {
    let val = e.target.value;
    this.setState({
      filterValue: val,
      pokemons: dataPokemons.filter( (p) => p.ename.toLowerCase().includes(val)).slice(50)
    });
  }


  render() {
    return (
      <Section>
        <Container>
          <header className="App-header">
            <img src={pokedexImg} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to CS Pokedex</h1>
          </header>
          <Container>
          <Field>
              <Label>Filter by name:</Label>
              <Control>
                  <Input type="text" 
                    value={this.state.filterValue}
                    placeholder='Text Input' onChange={this.handleOnChange.bind(this)}/>
              </Control>
          </Field>

          </Container>
          <Container>
            {this.chunk(this.state.pokemons, 3).map((c, idx) => (
              <Columns isCentered>
                {c.map(p => (
                  <Column isSize="1/3">
                    <Pokecard pokemon={p} key={p.id} />
                  </Column>
                ))}
              </Columns>
            ))}
          </Container>
        </Container>
      </Section>
    );
  }
}

export default App;
