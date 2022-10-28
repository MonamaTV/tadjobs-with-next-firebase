import Link from "next/link";
import styles from "../../styles/PublicCompany.module.css";
import CompanyJobs from "./CompanyJobs";

const Taps = ({ tap, jobs, background }) => {
  switch (tap) {
    case 1:
      return (
        <div className={styles.background}>
          <h2>About company</h2>
          <div dangerouslySetInnerHTML={{ __html: background }}></div>
          <Link href="/">
            <a className={styles.website}>Visit our website</a>
          </Link>
        </div>
      );
    case 2:
      return (
        <div className={styles.company_jobs}>
          <CompanyJobs jobs={jobs} />
        </div>
      );
    default:
      return (
        <div className={styles.background}>
          <h2>About company</h2>
          <div dangerouslySetInnerHTML={{ __html: background }}></div>
          <Link href="/">
            <a className={styles.website}>Visit our website</a>
          </Link>
        </div>
      );
  }
};
export default Taps;
