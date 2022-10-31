import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import JobHeader from "../../src/components/JobHeader";
import JobInformation from "../../src/components/JobInformation";
import JobList from "../../src/components/JobsList";
import Loading from "../../src/components/Loading";
import Nav from "../../src/components/Nav";
import { getCompanyPublicInfo } from "../../src/controllers/companies";
import { getJob } from "../../src/controllers/jobs";
import styles from "../../styles/Job.module.css";
const Job = ({ id }) => {
  const router = useRouter();
  //Get job
  let jobID = router.query?.jid ?? id;

  const { data: job, isLoading } = useQuery(["jobs", jobID], () => getJob(jobID));

  const {
    isIdle,
    data: company,
    isLoading: comLoading,
  } = useQuery(["companies", job?.companyID], () => getCompanyPublicInfo(job?.companyID), {
    enabled: !!job?.companyID,
  });

  return (
    <>
      <Nav bg={true} />
      <div className={styles.job}>
        <JobList />

        <main>
          {isLoading || isIdle || comLoading ? (
            <Loading />
          ) : (
            <>
              <JobHeader {...job} fileUrl={company.fileUrl} background={company.background} companyName={company.name} companyID={company.id} />
              <JobInformation {...job} />
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
