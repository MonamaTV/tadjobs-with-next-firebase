import JobForm from "../../../src/components/JobForm";
import styles from "../../../styles/AddJob.module.css";
const AddNewJob = () => {
  return (
    <div className={styles.new_job}>
      <h3>Add a new job</h3>
      <JobForm />
    </div>
  );
};

export default AddNewJob;
