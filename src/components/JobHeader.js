import Link from "next/link";
import styles from "../../styles/Job.module.css";
import { seniorityLevel } from "../utils/app";

const JobHeader = ({ fileUrl, companyName, title, background, location, minSalary, maxSalary, seniority, closingDate, companyID }) => {
  return (
    <div className={styles.job_header}>
      <div className={styles.company}>
        <img src={fileUrl} alt="" loading="lazy" />
        <div className={styles.company_heading}>
          <h3>{title}</h3>
          <Link href={"/companies/" + companyID}>
            <a className={styles.company_name}>{companyName}</a>
          </Link>
          <small dangerouslySetInnerHTML={{ __html: background.slice(0, 100) + "..." }}></small>
          {/* <h4>Sandton, South Africa</h4> */}

          <div className={styles.fine_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>{location}</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>
                R{minSalary} - R{maxSalary}
              </small>
            </div>
            <div className={styles.details}>
              <img src="/assets/job.png" alt="Seniority of the job" />
              <small>{seniorityLevel(seniority)}</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/calendar.png" alt="Seniority of the job" />
              <small>{closingDate}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
