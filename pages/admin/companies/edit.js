import UpdateCompanyForm from "../../../src/components/UpdateCompanyForm";
import styles from "../../styles/Update.module.css";

const UpdateCompany = () => {
  return (
    <div className={styles.update}>
      <div className={styles.update_edit}>
        <h3>Edit company</h3>
        <p></p>
        <UpdateCompanyForm />
      </div>
      <div className={styles.company_jobs}>
        {/* <h3>All jobs related to this company</h3> */}
        <div className={styles.job}>
          <h4>Product Manager</h4>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempore voluptatum culpa similique cupiditate.</small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
        </div>
        <div className={styles.job}>
          <h4>Product Manager</h4>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempore voluptatum culpa similique cupiditate.</small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
        </div>
        <div className={styles.job}>
          <h4>Product Manager</h4>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempore voluptatum culpa similique cupiditate.</small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
        </div>
        <div className={styles.job}>
          <h4>Product Manager</h4>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempore voluptatum culpa similique cupiditate.</small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCompany;
