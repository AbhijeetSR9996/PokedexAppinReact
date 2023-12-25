import React from "react";
import { Card } from "../card/card.component";

export const CardList = ({ monsters, buttonProp }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} buttonProp={buttonProp} />
    ))}
  </div>
);

export default CardList;
