import Link from "next/link";
import styles from "../../styles/Jobs.module.css";
import { normalDate, seniorityLevel } from "../utils/app";
const AboutJob = ({ title, minSalary, maxSalary, id, location, seniority, addedAt, about }) => {
  return (
    <div className={styles.job} id="job">
      <div className={styles.job_info}>
        <h4>
          <Link href={"/jobs/" + id}>
            <a target={"_blank"}>{title}</a>
          </Link>
        </h4>
        <h6>{normalDate(addedAt) || "N/A"}</h6>
        <small className={styles.desc} dangerouslySetInnerHTML={{ __html: about.slice(0, 300) + "..." }}></small>
        <div className={styles.job_details}>
          <div className={styles.details}>
            <img loading="lazy" src="/assets/map.png" alt="Location of the company" />
            <small>{location || "N/A"}</small>
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
        <div className={styles.menu_container}>
          <img loading="lazy" className={styles.menu} src="/assets/menu.png" alt="Menu" />
          <div className={styles.show_menu}>
            <Link href={"/admin/jobs/" + id}>
              <a>Edit</a>
            </Link>
            <a href="">Share job</a>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutJob;
