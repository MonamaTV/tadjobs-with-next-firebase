import styles from "./Selection.module.css";

const Selection = ({ label, options }) => {
  return (
    <div className={styles.selection}>
      <h4>{label} </h4>
      {options.map(opt => (
        <label>
          <input value={opt.value} type={"checkbox"} />
          {opt.name}
        </label>
      ))}
    </div>
  );
};

export default Selection;
