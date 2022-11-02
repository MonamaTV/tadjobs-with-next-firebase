import { useRouter } from "next/router";
import { useQuery } from "react-query";
import JobHeader from "../../src/components/JobHeader";
import JobInformation from "../../src/components/JobInformation";
import JobList from "../../src/components/JobsList";
import Loading from "../../src/components/Loading";
import Meta from "../../src/components/Meta";
import Nav from "../../src/components/Nav";
import { getCompanyPublicInfo } from "../../src/controllers/companies";
import { getJob } from "../../src/controllers/jobs";
import { addCheckLaterJob } from "../../src/utils/app";
import styles from "../../styles/Job.module.css";
import NotFound from "../404";
const Job = ({ id }) => {
  const router = useRouter();
  //Get job - listens to ID changes...
  let jobID = router.query?.jid ?? id;
  const { data: job, isLoading, isFetched } = useQuery(["jobs", jobID], () => getJob(jobID));

  //Wait for the job to finish fetching, then start fetching the company
  const {
    isIdle,
    data: company,
    isLoading: comLoading,
  } = useQuery(["companies", job?.companyID], () => getCompanyPublicInfo(job?.companyID), {
    enabled: !!job?.companyID,
  });

  //If the fetch is done, and no data is available
  if (isFetched && !job) {
    return (
      <>
        <Meta title="Tadjobs - Error" />
        <Nav bg={true} />
        <div className={styles.job}>
          <JobList />
          <main>
            <NotFound />
          </main>
        </div>
      </>
    );
  }

  const checkLater = (e) => {
    const text = addCheckLaterJob(jobID);
    const span = document.querySelectorAll("button[aria-checked] span")[1];
    span.textContent = text;
    span.classList.toggle("animate");
  };

  //Dones
  return (
    <>
      <Meta title={`Tadjobs - ${job?.title} at ${company?.name}`} />
      <Nav bg={true} />
      <div className={styles.job}>
        <JobList />
        <main>
          {/* Fetch only after boht the company and job are done loading */}
          {isLoading || isIdle || comLoading ? (
            <Loading />
          ) : (
            <>
              <JobHeader {...job} fileUrl={company.fileUrl} background={company.background} companyName={company.name} companyID={company.id} />
              <JobInformation checkLater={checkLater} {...job} />
            </>
          )}
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      id,
    },
  };
}

export default Job;
