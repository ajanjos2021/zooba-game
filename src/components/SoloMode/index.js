import { useState } from "react";
import IgraciDodaniUIgru from "./IgraciDodaniUIgru";
import ListaIgraca from "./ListaIgraca";

function SoloMode({
  listaIgracaINapada,
  dodajUHistoriju,
  setListaIgracaINapada,
}) {
  const [tim, setTim] = useState([]);

  function dodajUIgru(item) {
    setTim([
      ...tim,
      {
        name: item.name,
        attack: item.attack,
        health: 100,
      },
    ]);
    let novaListaIgraca = listaIgracaINapada.filter((igrac) => {
      return igrac.name !== item.name;
    });
    setListaIgracaINapada(novaListaIgraca);
  }

  function napadNaProtivnika(item1, item2) {
    const b = tim.map((el) => {
      if (el.name === item2.name) {
        el.health = el.health - item1.attack;
      }
      return el;
    });

    const prezivjeliIgraci = b.filter((el) => el.health > 0);

    setTim(prezivjeliIgraci);
    dodajUHistoriju(item1, item2);
  }

  return (
    <div>
      <div>
        <ListaIgraca
          listaIgracaINapada={listaIgracaINapada}
          dodajUIgru={dodajUIgru}
        />
      </div>
      <div>
        <IgraciDodaniUIgru tim={tim} napadNaProtivnika={napadNaProtivnika} />
      </div>
    </div>
  );
}

export default SoloMode;
