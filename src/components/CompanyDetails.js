import styles from "../../styles/Admin.module.css";
import { getCompany } from "../controllers/companies";
import Link from "next/link";
import { useQuery } from "react-query";

const CompanyDetails = ({ companyID }) => {
  const { data: company, isLoading } = useQuery(["companies", companyID], () => getCompany(companyID));
  if (!companyID) {
    return (
      <div className={styles.empty_company}>
        <h2>Select a company</h2>
        <p>Choose from your existing companies, create a new one, or refresh the page if you think there's an error</p>
        <Link href="/admin/companies/add">
          <a>Create new company</a>
        </Link>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={styles.empty_company}>
        <h2>Wait for it while we are fetching...</h2>
        <p>😩</p>
      </div>
    );
  }

  return (
    <div className={styles.company_details}>
      <div className={styles.heading}>
        <div className={styles.contain}>
          <div className={styles.name}>
            <h5>{company.name}</h5>
            <a href={"/admin/companies/edit/" + company.id}>
              {" "}
              <img src="/assets/edit.png" alt="" />
              <img src="/assets/delete.png" alt="" />
            </a>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/assets/website.png" alt="" />
              <div>
                <p>Official website</p>
                <small>
                  <a href="/ ">{company?.website}</a>
                </small>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/assets/location.png" alt="" />
              <div>
                <p>Location</p>
                <small>{company.location.country}</small>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/assets/workers.png" alt="" />
              <div>
                <p>Company size</p>
                <small>{company.companySize}+</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div
          className={styles.values}
          dangerouslySetInnerHTML={{ __html: company.background }}>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
