import Link from "next/link";
import styles from "./Job.module.css";
const Job = () => {
  return (
    <Link href="/jobs/">
      <a className={styles.job}>
        <div className={styles.logo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
            alt=""
          />
        </div>
        <div className={styles.job_details}>
          <h3>Title</h3>
          <h4>Company name</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum neque necessitatibus ad saepe facere! Doloremque atque consequuntur natus
            officiis molestiae laudantium totam, eum rerum deserunt, soluta obcaecati, illo suscipit eos?
          </p>
          <div className={styles.fine_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/job.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/calendar.png" alt="Seniority of the job" />
              <small>21-09-22</small>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Job;
