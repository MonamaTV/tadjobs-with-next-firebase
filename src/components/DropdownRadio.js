import styles from "../../styles/Search.module.css";
const DropdownRadio = ({ options, handleChange }) => {
  return (
    <div className={styles.inputs_container}>
      <label>
        <input name={"location"} value={""} onChange={handleChange} type={"radio"} defaultChecked={false} />
        <span>{"Search by location"}</span>
      </label>
      {options.map((opt, index) => (
        <label key={index}>
          <input name={"location"} value={opt} onChange={handleChange} type={"radio"} defaultChecked={false} />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
};

export default DropdownRadio;
