import React from "react";
import { useModal } from "./useModals";
import { wrapper } from "./_styleModals";
interface Props {
  children: any;
  isShow: boolean;
  handleOpen: (e: boolean) => void;
}

export const ModalPokemon = ({ data, setOpen, open }: any) => {
  const { name, types = [], sprites, abilities = [], stats = [] } = data;
  if (!open) return null;
  return (
    <div className={wrapper}>
      <div className="overlay" onClick={() => setOpen(false)}></div>
      <div className="box">
        <div className={"container"}>
          <div className="overview">
            <p className="pokemonName">{name}</p>
            <div className="pokemon">
              <img
                alt={name}
                src={sprites?.front_default}
                width={96}
                height={96}
              />
            </div>
            <div className="type">
              <p>Type</p>
              <ul>
                {types.map((e: any, i: number) => (
                  <li key={e.slot}>{e.type.name}</li>
                ))}
              </ul>
            </div>
            <div className="ability">
              <p>Special abilities</p>
              <ul>
                {abilities.map((e: any, i: number) => (
                  <li key={i}>{e.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="baseState">
            <p>Base Stats</p>
            {stats.map((e: any, i: number) => (
              <div key={i} className="progress">
                <p>
                  {e.stat.name} {e.base_stat}
                </p>
                <div className="status">
                  <span style={{ width: `${e.base_stat}px` }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
