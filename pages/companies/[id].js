import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../src/components/Loading";
import Nav from "../../src/components/Nav";
import Taps from "../../src/components/Taps";
import { getCompanyPublicInfo } from "../../src/controllers/companies";
import { getJobsByCompany } from "../../src/controllers/jobs";
import styles from "../../styles/PublicCompany.module.css";

const Company = ({ id }) => {
  const [tap, setTap] = useState(1);

  const { data: company, isLoading } = useQuery(["companies", id], () => {
    return getCompanyPublicInfo(id);
  });
  const { data: jobs, isLoading: jobLoading } = useQuery(["jobs", id], () => {
    return getJobsByCompany(id);
  });

  if (isLoading && jobLoading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <main className={styles.public_company}>
        <header className={styles.header}>
          <div className={styles.container}>
            <h3>
              <img src={company.fileUrl} alt="" /> {company.name}
            </h3>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img loading="lazy" src="/assets/website.png" alt="" />
                <div>
                  <p>Official website</p>
                  <small>
                    <a href="/ ">gogol.com</a>
                  </small>
                </div>
              </div>
              <div className={styles.card}>
                <img loading="lazy" src="/assets/location.png" alt="" />
                <div>
                  <p>Location</p>
                  <small>South Africa, Pretoria</small>
                </div>
              </div>
              <div className={styles.card}>
                <img loading="lazy" src="/assets/workers.png" alt="" />
                <div>
                  <p>Company size</p>
                  <small>200+</small>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* The tap must be sticky*/}
        <nav className={styles.navigation}>
          <span className={tap === 1 ? styles.nav_active : ""} onClick={() => setTap(1)}>
            About
          </span>
          <span className={tap === 2 ? styles.nav_active : ""} onClick={() => setTap(2)}>
            Jobs ({jobs?.length})
          </span>
        </nav>
        <Taps tap={tap} background={company.background} jobs={jobs} />
      </main>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      id,
    },
  };
}

export default Company;
