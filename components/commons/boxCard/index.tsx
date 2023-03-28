import React from "react";
import { container } from "./_styleBox";

interface PropsCard {
  id: number;
  name: string;
  power: any[];
  url: string;
}
export const Cards = ({ id, name, power, url }: PropsCard) => {
  return (
    <div className={container}>
      <div className="details">
        <p className="number">#{id}</p>
        <p className="pokemonName">{name}</p>
        <div className="type">
          <ul>
            {power.map((e: any, i: number) => (
              <li key={e.slot}>{e.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pokemon">
        <img alt={name} src={url} width={96} height={96} />
      </div>
    </div>
  );
};
