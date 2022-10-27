import Link from "next/link";
import { useQuery } from "react-query";
import Loading from "../../src/components/Loading";
import Nav from "../../src/components/Nav";
import { getCompanyPublicInfo } from "../../src/controllers/companies";
import { getJob } from "../../src/controllers/jobs";
import { seniorityLevel } from "../../src/utils/app";
import styles from "../../styles/Job.module.css";
const Job = ({ id }) => {
  //Get job
  const { data: job, isLoading } = useQuery(["jobs", id], () => getJob(id));

  const { isIdle, data: company, isLoading: comLoading } = useQuery(['companeis', job?.companyID],
    () => getCompanyPublicInfo(job?.companyID), {
    enabled: !!job?.companyID,
  });



  if (isLoading || isIdle || comLoading) {
    return <Loading />
  }

  return (
    <div className={styles.job}>
      <Nav bg={true} />
      <div className={styles.job_header}>
        <div className={styles.company}>
          <img src={company.fileUrl} alt="" />
          <div className={styles.company_heading}>
            <h3>{job.title}</h3>
            <Link href={"/"}><a className={styles.company_name}>{company.name}</a></Link>
            <small dangerouslySetInnerHTML={{ __html: company.background.slice(0, 100) + "..." }}></small>
            {/* <h4>Sandton, South Africa</h4> */}

            <div className={styles.fine_details}>
              <div className={styles.details}>
                <img src="/assets/map.png" alt="Location of the company" />
                <small>{job.location}</small>
              </div>
              <div className={styles.details}>
                <img src="/assets/money.png" alt="Salary of the job" />
                <small>R{job.minSalary} - R{job.maxSalary}</small>
              </div>
              <div className={styles.details}>
                <img src="/assets/job.png" alt="Seniority of the job" />
                <small>{seniorityLevel(job.seniority)}</small>
              </div>
              <div className={styles.details}>
                <img src="/assets/calendar.png" alt="Seniority of the job" />
                <small>{(job.closingDate)}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <h3>More about the job</h3>
        {/* <hr /> */}
        <div className={styles.more_info}>
          <p dangerouslySetInnerHTML={{ __html: job.about }}>
          </p>
          <div className={styles.share}>
            <h4>Share</h4>
            <img src="/assets/linkedin.png" alt="" />
            <img src="/assets/facebook.png" alt="" />
            <img src="/assets/whatsapp.png" alt="" />
            <img src="/assets/twitter.png" alt="" />
          </div>
        </div>
        <Link
          href={"google.com"} >
          <a target="_blank" className={styles.apply_job}>
            Apply for this job
          </a>
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      id
    }
  }
}

export default Job;
