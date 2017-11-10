import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  CardContent,
  Media,
  MediaLeft,
  MediaContent,
  Content,
  Image,
  Title,
  Subtitle,
  Table
} from "bloomer";

import PokemonStatsTable from './PokemonStatsTable';

export default class Pokecard extends Component {
  getImageUrl() {
    const pokemon = this.props.pokemon;
    return `${process.env
      .PUBLIC_URL}/pokeimg/${pokemon.id}${pokemon.ename}.png`;
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <Card>
          <CardHeader>
            <CardHeaderTitle>{pokemon.ename}</CardHeaderTitle>
          </CardHeader>
          <CardImage>
            <Image style={{width: '50%', margin: 'auto'}}
             src={this.getImageUrl()} />
          </CardImage>
          <CardContent>
            <Content>
              <PokemonStatsTable stats={pokemon.base}/>
            </Content>
          </CardContent>
        </Card>
      </div>
    );
  }
}
