import styles from "./Buttons.module.css";

const Buttons = ({ handleClick }) => {
  const buttonNames = [
    "C",
    "0",
    "1",
    "+",
    "2",
    "3",
    "-",
    "4",
    "5",
    "*",
    "6",
    "7",
    "/",
    "8",
    "9",
    ".",
    "=",
  ];

  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={`${buttonName === "C" ? styles.clear : ""} ${
            buttonName === "=" ? styles.equal : ""
          } ${
            buttonName === "+" ||
            buttonName === "-" ||
            buttonName === "*" ||
            buttonName === "/"
              ? styles.operator
              : ""
          } ${styles.btn}`}
          onClick={() => handleClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
