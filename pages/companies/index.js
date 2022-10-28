import Link from "next/link";
import { useQuery } from "react-query";
import Loading from "../../src/components/Loading";
import Nav from "../../src/components/Nav";
import { getCompaniesPublicInfo } from "../../src/controllers/companies";
import styles from "../../styles/PublicCompanies.module.css";

const PublicCompanies = () => {
  const { data: companies, isLoading } = useQuery("companies", getCompaniesPublicInfo);

  if (isLoading) {
    return (
      <div className={styles.public}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.public}>
      <Nav />
      <div className={styles.companies}>
        <h3>
          Discover the <span>Best TECH</span> companies in the world!
        </h3>
        <br />
        <div className={styles.companies_list}>
          {companies.map(({ id, name, fileUrl, background }) => (
            <div key={id} className={styles.company}>
              <img loading="lazy" src={fileUrl} alt="" />
              <div className={styles.info}>
                <Link href={"/companies/" + id}>
                  <a>
                    <h4>
                      <span>{name}</span>
                      <span className={styles.openings}> 10 Openings</span>
                    </h4>
                  </a>
                </Link>
                <small dangerouslySetInnerHTML={{ __html: background.slice(0, 200) + "... Read more" }}></small>
                <div className={styles.fine_details}>
                  {/* <div className={styles.details}>
                                    <img src="/assets/map.png" alt="Location of the company" />
                                </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicCompanies;
