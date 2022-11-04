import { useState } from "react";
import { useEffect } from "react";
import Job from "../../src/components/Job";
import Loading from "../../src/components/Loading";
import Nav from "../../src/components/Nav";
import Meta from "../../src/components/Meta";
import { getJobsSavedByUser } from "../../src/controllers/jobs";
import { getCheckLaterJobs } from "../../src/utils/app";
import styles from "../../styles/Search.module.css";
import NotFound from "../404";

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
  if (!loading && jobs?.length === 0) {
    return (
      <div className={styles.saved_jobs}>
        <Meta title="Tadjobs - all the jobs you saved..." />
        <Nav />
        <div className={styles.unsaved}>
          <NotFound title="It seems like you have not saved any job yet..." />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.saved_jobs}>
      <Meta title="Tadjobs - all the jobs you saved..." />
      <Nav />
      <div className={styles.saved}>
        <h4>
          All the jobs you <span>saved</span>
        </h4>
        <small>All expire in 30 days...</small>
        <input placeholder="Start typing..." />
        {jobs.length !== 0 && jobs.map((job) => <Job key={job.id} {...job} />)}
      </div>
    </div>
  );
};

export default Saved;
