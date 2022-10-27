import { useQuery } from "react-query";
import Job from "../../src/components/Job";
import Nav from "../../src/components/Nav";
import Selection from "../../src/components/Selection";
import { getJobs } from "../../src/controllers/jobs";
import { jobTypes, salaryRange, seniority } from "../../src/utils/app";
import styles from "../../styles/Search.module.css";

const Jobs = () => {

  const { data: jobs, isLoading } = useQuery(["jobs"], getJobs);
  console.log(jobs);
  if (isLoading) {
    return (
      <div className={styles.jobs}>
        <h3>Loading...</h3>
      </div>
    )
  }

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
      <small className={styles.smalls}>
        <i>Search results: 100 jobs</i>
      </small>
      <div className={styles.results}>
        <div className={styles.filter}>
          <Selection
            options={jobTypes}
            label={"Job type"}
          />
          <Selection
            options={seniority}
            label="Seniority"
          />
          <Selection
            options={salaryRange}
            label={"Salary"}
          />
        </div>
        <div className={styles.available_jobs}>
          {
            jobs.map(job => (
              <Job key={job.id} {...job} />
            ))
          }

        </div>
      </div>
    </div>
  );
};

export default Jobs;
