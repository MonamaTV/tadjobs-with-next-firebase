import { useEffect, useState } from "react";
import styles from "../../styles/Admin.module.css";
import cookies from "js-cookie";
import { getCompanies, getCompany } from "../../src/controllers/companies";
import CompanyDetails from "../../src/components/CompanyDetails";
import { useQuery } from "react-query";

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
      <div className="heading"></div>
      <div className={styles.companies}>
        <div className={styles.companies_list}>
          {companies.length !== 0 &&
            companies.map(({ fileUrl, name, id }) => {
              return (
                <div key={id} className={styles.company}>
                  <div className={styles.avatar}>
                    <img src={fileUrl} alt="" />
                  </div>
                  <div className={styles.content}>
                    <h3 className="names" onClick={(e) => openCompanyDetails(e, id)}>
                      {name}
                    </h3>
                    <small>We're a remote-first, cloud-native company focused on providing high-quality technology solutions to businesses.</small>
                  </div>
                </div>
              );
            })}
        </div>
        <CompanyDetails companyID={companyID} />
      </div>
    </div>
  );
};
export default Admin;
