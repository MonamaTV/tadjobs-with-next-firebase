import { useState } from "react";
import Meta from "../../src/components/Meta";
import Job from "../../src/components/Job";
import Loading from "../../src/components/Loading";
import Nav from "../../src/components/Nav";
import Radio from "../../src/components/Radio";
import Selection from "../../src/components/Selection";
import useFetchJobs from "../../src/hooks/useFetchJobs";
import { jobTypes, salaryRange, seniority } from "../../src/utils/app";
import styles from "../../styles/Search.module.css";

const Jobs = () => {
  //By default all filters are set to -1, meaning they aren't included in the first search
  const [filters, setFilters] = useState({
    type: "-1",
    seniority: "-1",
    salary: "-1",
  });

  const query = `type=${filters.type}&salary=${filters.salary}&seniority=${filters.seniority}`;

  const { jobs, isLoading } = useFetchJobs(filters);
  if (!jobs) {
    return <Loading />;
  }

  const handleFilters = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className={styles.jobs}>
      <Meta title="Tadjobs - see all the available jobs" />
      <Nav text="Post a job" bg={true} />
      <div className={styles.searches}>
        <input className={styles.title_input} placeholder="Title" />
        <input className={styles.location_input} placeholder="Location" />
        <button>
          <img src="/assets/search.png" />
        </button>
      </div>
      <small className={styles.smalls}>
        <i>Search results: {jobs.length} jobs</i>
      </small>
      <div className={styles.results}>
        <div className={styles.filter}>
          <Radio name="type" handleChange={handleFilters} options={jobTypes} label={"Job type"} />
          <Radio name="seniority" handleChange={handleFilters} options={seniority} label="Seniority" />
          <Radio name="salary" handleChange={handleFilters} options={salaryRange} label={"Salary"} />
          <button>Apply filters</button>
        </div>
        <div className={styles.available_jobs}>{!isLoading ? jobs.map((job) => <Job key={job.id} {...job} query={query} />) : <Loading />}</div>
      </div>
    </div>
  );
};

export default Jobs;
