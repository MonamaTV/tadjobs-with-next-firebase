import JobForm from "../../../src/components/JobForm";
import styles from "../../../styles/AddJob.module.css";
const UpdateJob = () => {
  return (
    <div className={styles.new_job}>
      <h3>Edit job</h3>
      <JobForm />
    </div>
  );
};

export default UpdateJob;
