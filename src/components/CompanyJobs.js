import Job from "./Job";

const CompanyJobs = ({ jobs }) => {
  return jobs.map((job) => {
    return <Job key={job.id} {...job} />;
  });
};

export default CompanyJobs;
