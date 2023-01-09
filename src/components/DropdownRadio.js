import styles from "../../styles/Search.module.css";
const DropdownRadio = ({ options, handleChange, searchBy = "location" }) => {
  return (
    <div className={styles.inputs_container}>
      <label>
        <input
          name={searchBy}
          value={""}
          onChange={handleChange}
          type={"radio"}
          defaultChecked={false}
        />
        <span>{`Search by ${searchBy}`}</span>
      </label>
      {options.map((opt, index) => (
        <label key={index}>
          <input
            name={searchBy}
            value={opt}
            onChange={handleChange}
            type={"radio"}
            defaultChecked={false}
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
};

export default DropdownRadio;
