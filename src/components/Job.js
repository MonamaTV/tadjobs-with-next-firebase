import Link from "next/link";
import { normalDate } from "../utils/app";
import styles from "./Job.module.css";
const Job = ({ title, location, minSalary, maxSalary, closingDate, seniority, about, addedAt, id }) => {
  return (
    <Link href={"/jobs/" + id}>
      <a className={styles.job}>
        <div className={styles.job_details}>
          <h3>{title} </h3>
          <small>Posted: {normalDate(addedAt)}</small>
          <p dangerouslySetInnerHTML={{ __html: about.slice(0, 240) + "..." }}></p>
          <div className={styles.fine_details}>
            <div className={styles.details}>
              <img loading="lazy" src="/assets/map.png" alt="Location of the company" />
              <small>{location} </small>
            </div>
            <div className={styles.details}>
              <img loading="lazy" src="/assets/money.png" alt="Salary of the job" />
              <small>
                R{minSalary} - R{maxSalary}
              </small>
            </div>
            <div className={styles.details}>
              <img loading="lazy" src="/assets/job.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
            <div className={styles.details}>
              <img loading="lazy" src="/assets/calendar.png" alt="Seniority of the job" />
              <small>{closingDate}</small>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Job;
