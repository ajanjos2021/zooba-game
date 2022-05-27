import styles from "./styles.module.css";

function HistorijaNapada({ historijaNapada }) {
  return (
    <div>
      <div className={styles.historijaText}>H I S T O R I J A</div>
      {historijaNapada.map((el) => {
        let klasa =
          el.healthBranitelja <= 0 ? styles.mrtvac : styles.historijaBox;
        return (
          <div
            key={`${el.napad}_${el.odbrana}_${el.healthBranitelja}`}
            className={klasa}
          >
            <div>Napadač: {el.napad}</div>
            <div>Branitelj: {el.odbrana}</div>
            <div>Napad: {el.attack}</div>
            <div>Health napadača: {el.healthNapadaca}</div>
            <div>Health branitelja: {el.healthBranitelja}</div>
          </div>
        );
      })}
    </div>
  );
}

export default HistorijaNapada;
