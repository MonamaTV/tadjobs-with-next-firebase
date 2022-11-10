import styles from "../../styles/Search.module.css";
const Dropdown = ({ options, handleChange }) => {
  return (
    <div className={styles.inputs_container}>
      {options.map((opt, index) => (
        <label key={index}>
          <input name={opt} onChange={handleChange} type={"checkbox"} defaultChecked={false} />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
};

export default Dropdown;
