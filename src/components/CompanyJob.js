import styles from "../../styles/Update.module.css";
import { seniorityLevel } from "../utils/app";

const CompanyJob = ({ title, about, location, minSalary, maxSalary, seniority }) => {
  return (
    <div className={styles.job}>
      <h4>{title}</h4>
      <small dangerouslySetInnerHTML={{ __html: about.slice(0, 100) }}></small>
      <div className={styles.job_details}>
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
          <img loading="lazy" src="/assets/map.png" alt="Seniority of the job" />
          <small>{seniorityLevel(seniority)}</small>
        </div>
      </div>
    </div>
  );
};

export default CompanyJob;
