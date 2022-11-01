import styles from "../../styles/AddJob.module.css";
import { normalDate } from "../utils/app";
const JobMetaData = ({ addedAt, updatedAt }) => {
  return (
    <div className={styles.meta_data}>
      {/* <h3>More details</h3>
            <small>Please note you can't edit or change the following</small> */}
      {/* <br /> */}
      <div className={styles.data}>
        <h4>Added</h4>
        <small>{normalDate(addedAt)}</small>
      </div>
      <div className={styles.data}>
        <h4>Last updated at</h4>
        <small>{normalDate(updatedAt)}</small>
      </div>
      <div className={styles.data}>
        <h4>Open application</h4>
        <small>200</small>
      </div>
      <div className={styles.data}>
        <h4>Views</h4>
        <small>200</small>
      </div>
    </div>
  );
};

export default JobMetaData;
