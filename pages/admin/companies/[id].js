import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Loading from "../../../src/components/Loading";
import { getCompany } from "../../../src/controllers/companies";
import styles from "../../../styles/Admin.module.css";

const CompanyDetails = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data: company, isLoading } = useQuery(["companies", id], () => {
    return getCompany(id);
  });

  if (isLoading) {
    return (
      <div className={styles.company_details}>
        <div className={styles.heading}>
          <div className={styles.contain}>
            <div className={styles.name}>
              <Loading />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.company_details}>
      <div className={styles.heading}>
        <div className={styles.contain}>
          <div className={styles.name}>
            <h5>{company.name}</h5>
            <Link href={"/admin/companies/edit/" + id}>
              <a>
                <img loading="lazy" src="/assets/edit.png" alt="" />
                <img loading="lazy" src="/assets/delete.png" alt="" />
              </a>
            </Link>
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
