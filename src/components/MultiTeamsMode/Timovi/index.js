import Button from "../../Button";
import styles from "./styles.module.css";

function Timovi({ timovi, napad }) {
  return (
    <>
      {timovi.map((tim, index) => (
        <div key={`tim_${index}`} className={styles.boxTima}>
          <div className={styles.imeTima}> Tim {index + 1} </div>
          {tim.map((player1, ind) => (
            <div
              key={`igrac_${player1.name}_${ind}`}
              className={styles.infoIgraca}
            >
              <div>
                <div>Name: {player1.name}</div>
                <div>Health: {player1.health}</div>
                <div>Attack: {player1.attack}</div>
              </div>
              <div className={styles.buttoniZaNapad}>
                {timovi.map((tim, i) => {
                  if (index !== i)
                    return tim.map((player2) => (
                      <span
                        key={`igrac_${player2.name}_${index}`}
                        className={styles.buttonZaNapad}
                      >
                        <Button
                          text={`napad na ${player2.name}`}
                          onClickHandler={() => napad(player1, player2)}
                        />
                      </span>
                    ));
                })}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Timovi;
