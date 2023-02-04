import Link from "next/link";
import styles from "../../styles/Job.module.css";

const JobInformation = ({ about, application, checkLater }) => {
  return (
    <div className={styles.information}>
      <button aria-checked onClick={checkLater} className={styles.later}>
        <img src="/assets/clock.png" alt="clock" />
        <span>Check this job later</span>
        <span className={"done"}>Added...</span>
      </button>
      <hr />
      <h3>More about the job</h3>
      <div className={styles.more_info}>
        <p dangerouslySetInnerHTML={{ __html: about }}></p>
        <div className={styles.share}>
          <h4>Share</h4>
          <img src="/assets/linkedin.png" alt="LinkedIn" />
          <img src="/assets/facebook.png" alt="Facebook" />
          <img src="/assets/whatsapp.png" alt="WhatsApp" />
          <img src="/assets/twitter.png" alt="Twitter" />
        </div>
      </div>
      <Link href={application}>
        <a target="_blank" className={styles.apply_job}>
          Apply now
        </a>
      </Link>
    </div>
  );
};

export default JobInformation;
