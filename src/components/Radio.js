import styles from "./Selection.module.css";

const Radio = ({ name, label, options, handleChange }) => {
  return (
    <div className={styles.selection}>
      <h4>{label} </h4>
      {options.map((opt) => (
        <label key={opt.value} htmlFor={name} onChange={handleChange}>
          <input name={name} value={opt.value} type={"radio"} />
          <span>{opt.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
