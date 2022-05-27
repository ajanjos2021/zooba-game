import Button from "../../Button";

import styles from "./styles.module.css";

function ListaIgraca({ dodajUTim, brojTimova, listaIgracaINapada }) {
  return (
    <div className={styles.omotacListe}>
      <ul>
        {listaIgracaINapada.map((item, index) => (
          <li key={`${item.name}_${index}`} className={styles.listItem}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.attack}>{item.attack}</span>
            {[...Array(brojTimova)].map((el, index) => {
              return (
                <span key={index} className={styles.omotacButtona}>
                  <Button
                    text={`dodaj u tim ${index + 1}`}
                    onClickHandler={() => dodajUTim(item, index)}
                  />
                </span>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaIgraca;
