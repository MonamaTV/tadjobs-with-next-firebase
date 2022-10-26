import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import JobForm from "../../../src/components/JobForm";
import Meta from "../../../src/components/Meta";
import { getCompaniesNamesAndIds } from "../../../src/controllers/companies";
import { addJob } from "../../../src/controllers/jobs";
import styles from "../../../styles/AddJob.module.css";

const AddNewJob = () => {
  const router = useRouter();
  const job = {
    title: "",
    minSalary: "",
    maxSalary: "",
    openingDate: "",
    closingDate: "",
    application: "",
    companyID: "",
    location: "",
  };

  const [error, setError] = useState({
    about: "",
  });
  const [about, setAbout] = useState("");

  //React query hooks
  const mutation = useMutation(job => {
    return addJob(job);
  });

  const { data: companies, isLoading } = useQuery("companyIDs", () => {
    return getCompaniesNamesAndIds();
  });

  const handleAbout = (e) => {
    if (e.length < 100) {
      setError({
        ...error,
        about: "The About must at least have 100 characters"
      });
    }
    else {
      setError({ ...error, about: " " });
    }
    setAbout(e);
  }

  const handleSubmission = (values) => {
    try {
      if (about.length < 100) {
        setError({
          ...error,
          about: "The About must at least have 100 characters"
        });
        return;
      }
      setError({ ...error, about: " " });
      const newJob = {
        ...values,
        about
      }
      mutation.mutate(newJob);
      setTimeout(() => {
        router.push("/admin/jobs");
      }, 2000)
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return (
      <div className={styles.new_job}>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className={styles.new_job}>
      <Meta title={"TadJobs - Add job"} />

      <h3>Add a new job</h3>
      <JobForm
        job={job}
        companies={companies}
        about={about}
        handleSubmission={handleSubmission}
        handleAbout={handleAbout}
        errors={error}
      />
    </div>
  );
};

export default AddNewJob;
