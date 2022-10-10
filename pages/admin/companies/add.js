import UpdateCompanyForm from "../../../src/components/UpdateCompanyForm";
import styles from "../../../styles/AddCompany.module.css";
const AddNewCompany = () => {
  return (
    <div className={styles.add_new}>
      <h3>Add new company</h3>
      <UpdateCompanyForm />
    </div>
  );
};

export default AddNewCompany;
