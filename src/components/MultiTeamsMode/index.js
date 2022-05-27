import { useState } from "react";
import ListaIgraca from "./ListaIgraca";
import Timovi from "./Timovi";
import styles from "./styles.module.css";
import Button from "../Button";

function MultiTeamsMode({
  setListaIgracaINapada,
  listaIgracaINapada,
  dodajUHistoriju,
}) {
  const [timovi, setTimovi] = useState([]);

  const [brojTimova, setBrojTimova] = useState(0);

  function dodajUTim(item, index) {
    timovi[index] = [
      ...timovi[index],
      {
        name: item.name,
        attack: item.attack,
        health: 100,
      },
    ];
    setTimovi([...timovi]);
    let novaListaIgraca = listaIgracaINapada.filter((igrac) => {
      return igrac.name !== item.name;
    });
    setListaIgracaINapada(novaListaIgraca);
  }

  function dodajNoviTim() {
    setBrojTimova(brojTimova + 1);
    setTimovi([...timovi, []]);
  }

  function obrisiTim() {
    setBrojTimova(brojTimova - 1);
    timovi.pop();
    setTimovi(timovi);
  }

  function napad(napadac, branitelj) {
    branitelj.health = branitelj.health - napadac.attack;
    let prezivjeli = timovi.map((tim) => {
      return tim.filter((player) => player.health > 0);
    });
    setTimovi(prezivjeli);
    dodajUHistoriju(napadac, branitelj);
  }

  return (
    <div>
      <ListaIgraca
        dodajUTim={dodajUTim}
        brojTimova={brojTimova}
        listaIgracaINapada={listaIgracaINapada}
      />
      <div className={styles.timoviInfo}>
        <div className={styles.brojTimovaText}>
          Broj timova je: {brojTimova}
        </div>
        <div className={styles.button}>
          <Button
            text="Klikni za dodavanje timova"
            onClickHandler={dodajNoviTim}
          />
        </div>
        <div className={styles.button}>
          <Button text="Klikni za brisanje tima" onClickHandler={obrisiTim} />
        </div>
      </div>
      <Timovi timovi={timovi} napad={napad} />
    </div>
  );
}

export default MultiTeamsMode;
