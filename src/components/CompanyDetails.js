import styles from "../../styles/Admin.module.css";
import { getCompany } from "../controllers/companies";
import Link from "next/link";
import { useQuery } from "react-query";
import Loading from "./Loading";

const CompanyDetails = ({ companyID }) => {
  const { data: company, isLoading } = useQuery(["companies", companyID], () =>
    getCompany(companyID)
  );
  if (!companyID) {
    return (
      <div className={styles.empty_company}>
        <h3>Select a company</h3>
        <p>
          Choose from your existing companies, create a new one, or refresh the
          page if you think there&apos;s an error
        </p>
        <Link href="/admin/companies/add">
          <a>Create new company</a>
        </Link>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loading />
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
              <img loading="lazy" src="/assets/edit.png" alt="" />
              <img loading="lazy" src="/assets/delete.png" alt="" />
            </a>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img loading="lazy" src="/assets/website.png" alt="" />
              <div>
                <p>Official website</p>
                <small>
                  <a href="/ ">{company?.website}</a>
                </small>
              </div>
            </div>
            <div className={styles.card}>
              <img loading="lazy" src="/assets/location.png" alt="" />
              <div>
                <p>Location</p>
                <small>{company.location.country}</small>
              </div>
            </div>
            <div className={styles.card}>
              <img loading="lazy" src="/assets/workers.png" alt="" />
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
          dangerouslySetInnerHTML={{ __html: company.background }}
        ></div>
      </div>
    </div>
  );
};

export default CompanyDetails;
