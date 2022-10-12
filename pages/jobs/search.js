import Job from "../../src/components/Job";
import Nav from "../../src/components/Nav";
import Selection from "../../src/components/Selection";
import styles from "../../styles/Search.module.css";

const Jobs = () => {
  return (
    <div className={styles.jobs}>
      <Nav text="Post a job" bg={true} />
      <div className={styles.searches}>
        <input className={styles.title_input} placeholder="Title" />
        <input className={styles.location_input} placeholder="Location" />
        <button>
          <img src="/assets/search.png" />
        </button>
      </div>
      <small>
        <i>Search results: 100 jobs</i>
      </small>
      <div className={styles.results}>
        <div className={styles.filter}>
          <Selection />
          <Selection />
          <Selection />
        </div>
        <div className={styles.available_jobs}>
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
