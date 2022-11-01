import JobForm from "../../../src/components/JobForm";
import styles from "../../../styles/AddJob.module.css";
import JobMetaData from "../../../src/components/JobMetaData";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { editJob, getJob } from "../../../src/controllers/jobs";
import { getCompaniesNamesAndIds } from "../../../src/controllers/companies";
import { useState } from "react";
import Loading from "../../../src/components/Loading";
import Meta from "../../../src/components/Meta";

const UpdateJob = () => {
  const router = useRouter();
  const job = {
    title: "",
    minSalary: "",
    maxSalary: "",
    openingDate: "",
    closingDate: "",
    application: "",
    about: "",
    location: "",
    companyID: "",
  };

  const [error, setError] = useState({
    about: "",
  });
  const [about, setAbout] = useState("");

  const { id } = router.query;
  //React query hooks
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ([job, id]) => {
      return editJob(job, id);
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["jobs", { id }], data);
      },
    }
  );
  const jobQuery = useQuery(["jobs", id], () => getJob(id));
  const idsQuery = useQuery("companyIDs", () => {
    return getCompaniesNamesAndIds();
  });

  const handleAbout = (e) => {
    if (e.length < 100) {
      setError({
        ...error,
        about: "The About must at least have 100 characters",
      });
    } else {
      setError({ ...error, about: " " });
    }

    setAbout(e);
  };

  const handleSubmission = (values) => {
    try {
      if (about.length < 100) {
        setError({
          ...error,
          about: "The About must at least have 100 characters",
        });
        return;
      }
      setError({ ...error, about: " " });
      const newJob = {
        ...values,
        about: about || job.about,
      };
      mutation.mutate([newJob, id]);
      setTimeout(() => {
        router.push("/admin/jobs");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  if (idsQuery.isLoading || jobQuery.isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  job = { ...job, ...jobQuery.data };

  return (
    <div className={styles.edit_job}>
      <Meta title={"TadJobs - Update job"} />

      <div className={styles.job}>
        <h3>Edit job</h3>
        <JobForm job={job} companies={idsQuery.data} about={about} errors={error} handleSubmission={handleSubmission} handleAbout={handleAbout} />
      </div>
      <JobMetaData {...job} />
    </div>
  );
};

export default UpdateJob;
