import styles from "./Selection.module.css";

const Selection = ({ options }) => {
  return (
    <div className={styles.selection}>
      <h4>Job type</h4>
      <label>
        <input type={"checkbox"} />
        Office
      </label>
      <label>
        <input type={"checkbox"} />
        Remote
      </label>
      <label>
        <input type={"checkbox"} />
        Hybrid
      </label>
    </div>
  );
};

export default Selection;
