import { useState } from "react";
import styles from "../../styles/Admin.module.css";
import { getCompanies } from "../../src/controllers/companies";
import CompanyDetails from "../../src/components/CompanyDetails";
import { useQuery } from "react-query";
import Meta from "../../src/components/Meta";

const Admin = () => {
  const [companyID, setCompanyID] = useState(null);
  const { isLoading, data: companies } = useQuery("companies", getCompanies);

  const changeActiveClass = (e) => {
    const names = document.querySelectorAll(".names");
    names.forEach((n) => {
      n.parentElement.parentElement.classList.remove("active_company");
    });
    //Oh, boy!
    e.target.parentElement.parentElement.classList.add("active_company");
  };

  const openCompanyDetails = (e, id) => {
    changeActiveClass(e);
    setCompanyID(id);
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={styles.admin}>
      <Meta title={"TadJobs - Companies"} />

      <div className="heading"></div>
      <div className={styles.companies}>
        {companies.length !== 0 && <div className={styles.companies_list}>
          <div className={styles.filter_options}>
            <input type={"text"} />
            <button><img src="/assets/slide.png" alt="" /></button>
          </div>
          {
            companies.map(({ fileUrl, name, id, background }) => {
              return (
                <div key={id} className={styles.company}>
                  <div className={styles.avatar}>
                    <img src={fileUrl} alt="" />
                  </div>
                  <div className={styles.content}>
                    <h3 className="names" onClick={(e) => openCompanyDetails(e, id)}>
                      {name}
                    </h3>
                    <small
                      className={styles.preview}
                      dangerouslySetInnerHTML={{ __html: background.slice(0, 150) + "..." }}>
                    </small>
                  </div>
                </div>
              );
            })}
        </div>}
        <CompanyDetails companyID={companyID} />
      </div>
    </div>
  );
};
export default Admin;
