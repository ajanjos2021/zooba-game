import { useState } from "react";
import Button from "../Button";

import styles from "./styles.module.css";

function FormaZaDodavanjeIgraca({ dodajUListuIgracaINapada }) {
  const [uneseniIgrac, setUneseniIgrac] = useState("");
  const [uneseniNapad, setUneseniNapad] = useState("");
  const [error, setError] = useState("");

  function spremiIgraca(event) {
    setUneseniIgrac(event.target.value);
  }

  function spremiNapad(event) {
    setUneseniNapad(event.target.value);
  }

  function onClickHandler() {
    if (uneseniIgrac.length == 0) {
      setError("Ime ne smije biti prazno!");
      return;
    }
    if (!Number(uneseniNapad)) {
      setError("Napad mora biti broj!");
      return;
    }
    if (Number(uneseniNapad) <= 0) {
      setError("Napad mora biti pozitivan broj !");
      return;
    }
    dodajUListuIgracaINapada(uneseniIgrac, uneseniNapad);
    setError("");
  }

  return (
    <>
      <div className={styles.error}>{error}</div>
      <div className={styles.form}>
        <input
          className={styles.input}
          placeholder="Unesite igrača"
          onChange={spremiIgraca}
        />
        <input
          className={styles.input}
          placeholder="Unesite napad"
          onChange={spremiNapad}
        />
        <Button text="Potvrdi" onClickHandler={onClickHandler} />
      </div>
    </>
  );
}

export default FormaZaDodavanjeIgraca;
