import React, { Component } from "react";
import { Table } from 'bloomer';

const PokemonStatsTable = (props) => {
  return (
    <Table isBordered isStriped isNarrow>
      <thead>
        <tr>
          <th>Base Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {["Attack", "Defense", "HP", "Sp.Atk", "Sp.Def", "Speed"].map((attr, i) => (
          <tr key={i}>
            <td> {attr} </td>
            <td> {props.stats[attr]} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PokemonStatsTable;
