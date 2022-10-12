import Nav from "../../src/components/Nav";
import styles from "../../styles/Job.module.css";
const Job = () => {
  return (
    <div className={styles.job}>
      <Nav bg={true} />
      <div className={styles.job_header}>
        <div className={styles.company}>
          <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
          <div className={styles.company_heading}>
            <h5>Facebook Inc.</h5>
            <h3>Mobile App Engineer</h3>
            <h4>Sandton, South Africa</h4>
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
        </div>
      </div>
      <div className={styles.information}>
        <h3>More about the job</h3>
        <hr />
        <p>
          Xcede has an exciting opportunity for a Software Developer with Nodejs experience to join a new business unit within Africa's largest
          digital bank - think start-up without the risk! Key Functions and Responsibilities As a Software Developer you will be developing basic
          technical specifications from functional descriptions, perform quality checks, execute applications and systems performance analysis,
          recommend and implement improved methods, maintain and modify existing applications and systems, liaise with software vendors and external
          parties.
        </p>
        <a className={styles.apply_job}>Apply for this job</a>
      </div>
    </div>
  );
};

export default Job;
