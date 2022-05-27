import styles from "./styles.module.css";

function Button({ text, onClickHandler }) {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      {text}
    </button>
  );
}

export default Button;
