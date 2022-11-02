import { useState } from "react";
import { useEffect } from "react";
import Job from "../../src/components/Job";
import Loading from "../../src/components/Loading";
import Nav from "../../src/components/Nav";
import { getJobsSavedByUser } from "../../src/controllers/jobs";
import { getCheckLaterJobs } from "../../src/utils/app";
import styles from "../../styles/Search.module.css";

const Saved = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const ids = getCheckLaterJobs();
        const jobs = await getJobsSavedByUser(ids);
        setJobs(jobs);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.saved_jobs}>
      <Nav />
      <div className={styles.saved}>
        <h4>
          All the jobs you <span>saved</span>
        </h4>
        <input />
        {jobs.length !== 0 && jobs.map((job) => <Job key={job.id} {...job} />)}
      </div>
    </div>
  );
};

export default Saved;
