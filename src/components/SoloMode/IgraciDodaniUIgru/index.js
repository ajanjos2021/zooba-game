import Button from "../../Button";
import styles from "./styles.module.css";

function IgraciDodaniUIgru({ tim, napadNaProtivnika }) {
  return (
    <div>
      {tim.map((item1, index) => (
        <div key={`${item1.name}_${index}`} className={styles.boxIgraca}>
          {item1.name}
          <div>attack: {item1.attack}</div>
          <div>health: {item1.health}</div>
          <div className={styles.buttoniZaNapad}>
            {tim.map((item2, index) => {
              if (item1.name !== item2.name)
                return (
                  <span
                    key={`${item2.name}_${index}`}
                    className={styles.buttonZaNapad}
                  >
                    <Button
                      text={`Napad na ${item2.name}`}
                      onClickHandler={() => napadNaProtivnika(item1, item2)}
                    />
                  </span>
                );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IgraciDodaniUIgru;
