import styles from "./Selection.module.css";

const Selection = ({ label, options }) => {
  const handle = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.selection}>
      <h4>{label} </h4>
      {options.map((opt) => (
        <label key={opt.value} htmlFor={label} onClick={handle}>
          <input name={label} value={opt.value} type={"checkbox"} />
          {opt.name}
        </label>
      ))}
    </div>
  );
};

export default Selection;
