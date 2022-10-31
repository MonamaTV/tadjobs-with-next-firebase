import Link from "next/link";
import styles from "../../styles/Job.module.css";

const JobInformation = ({ about }) => {
  return (
    <div className={styles.information}>
      <h3>More about the job</h3>
      <div className={styles.more_info}>
        <p dangerouslySetInnerHTML={{ __html: about }}></p>
        <div className={styles.share}>
          <h4>Share</h4>
          <img src="/assets/linkedin.png" alt="" />
          <img src="/assets/facebook.png" alt="" />
          <img src="/assets/whatsapp.png" alt="" />
          <img src="/assets/twitter.png" alt="" />
        </div>
      </div>
      <Link href={"google.com"}>
        <a target="_blank" className={styles.apply_job}>
          Apply now
        </a>
      </Link>
    </div>
  );
};

export default JobInformation;
