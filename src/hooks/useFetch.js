import { useEffect, useState } from "react";
import { getJobs } from "../controllers/jobs";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchJobs = async () => {
      try {
        const firestoreJobs = await getJobs(title, location, type, seniority, salary);
        setJobs(firestoreJobs);
      } catch (error) {
        setError("Error occured fetching jobs");
      }
      setIsLoading(false);
    };
    fetchJobs();
  }, [title, location, type, seniority, salary]);

  return { jobs, isLoading, error };
};

export default useFetch;
