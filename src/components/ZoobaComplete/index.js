import { useState } from "react";
import FormaZaDodavanjeIgraca from "../FormaZaDodavanjeIgraca";
import MultiTeamsMode from "../MultiTeamsMode";
import HistorijaNapada from "../HistorijaNapada";
import SoloMode from "../SoloMode";
import { MULTI_TEAMS_MODE, SOLO_MODE } from "../../constants";
import Button from "../Button";

import styles from "./styles.module.css";

function ZoobaComplete() {
  const [odabraniMode, setOdabraniMode] = useState(SOLO_MODE);

  const [listaIgracaINapada, setListaIgracaINapada] = useState([
    { name: "Steve", attack: 26 },
    { name: "Buck", attack: 25 },
    { name: "Molly", attack: 34 },
    { name: "Lizzy", attack: 30 },
    { name: "Tiger", attack: 22 },
    { name: "Larry", attack: 40 },
    { name: "Finn", attack: 45 },
  ]);

  const [historijaNapada, setHistorijaNapada] = useState([]);

  function dodajUListuIgracaINapada(uneseniIgrac, uneseniNapad) {
    setListaIgracaINapada([
      ...listaIgracaINapada,
      {
        name: uneseniIgrac,
        attack: uneseniNapad,
        health: 100,
      },
    ]);
  }

  function promijeniMode() {
    if (odabraniMode === SOLO_MODE) {
      setOdabraniMode(MULTI_TEAMS_MODE);
    } else if (odabraniMode === MULTI_TEAMS_MODE) {
      setOdabraniMode(SOLO_MODE);
    }
    setHistorijaNapada([]);
    setListaIgracaINapada([
      { name: "Steve", attack: 26 },
      { name: "Buck", attack: 25 },
      { name: "Molly", attack: 34 },
      { name: "Lizzy", attack: 30 },
      { name: "Tiger", attack: 22 },
      { name: "Larry", attack: 40 },
      { name: "Finn", attack: 45 },
    ]);
  }

  function dodajUHistoriju(item1, item2) {
    setHistorijaNapada([
      ...historijaNapada,
      {
        napad: item1.name,
        odbrana: item2.name,
        attack: item1.attack,
        healthNapadaca: item1.health,
        healthBranitelja: item2.health,
      },
    ]);
  }

  return (
    <>
      <div className={styles.modeInfo}>
        <div className={styles.modeInfoText}>
          Trenutni mode je: <b>{odabraniMode}</b>
        </div>
        <Button text="Promijeni mode" onClickHandler={promijeniMode} />
      </div>
      <FormaZaDodavanjeIgraca
        dodajUListuIgracaINapada={dodajUListuIgracaINapada}
      />
      {odabraniMode == SOLO_MODE && (
        <SoloMode
          listaIgracaINapada={listaIgracaINapada}
          setListaIgracaINapada={setListaIgracaINapada}
          dodajUHistoriju={dodajUHistoriju}
        />
      )}
      {odabraniMode == MULTI_TEAMS_MODE && (
        <MultiTeamsMode
          listaIgracaINapada={listaIgracaINapada}
          dodajUHistoriju={dodajUHistoriju}
          setListaIgracaINapada={setListaIgracaINapada}
        />
      )}
      {!!historijaNapada.length && (
        <div>
          <HistorijaNapada historijaNapada={historijaNapada} />
        </div>
      )}
    </>
  );
}

export default ZoobaComplete;
