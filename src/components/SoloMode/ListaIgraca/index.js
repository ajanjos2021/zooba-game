import Button from "../../Button";

import styles from "./styles.module.css";

function ListaIgraca({ listaIgracaINapada, dodajUIgru }) {
  return (
    <div className={styles.omotacListe}>
      <ul>
        {listaIgracaINapada.map((item, index) => (
          <li className={styles.listItem} key={`${item.name}_${index}`}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.attack}>{item.attack}</span>
            <Button
              text="Dodaj u igru"
              onClickHandler={() => dodajUIgru(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaIgraca;
