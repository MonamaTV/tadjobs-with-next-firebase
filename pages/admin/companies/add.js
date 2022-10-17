import { useRouter } from "next/router";
import { useState } from "react";
import UpdateCompanyForm from "../../../src/components/UpdateCompanyForm";
import { addCompanyAvatar, addNewCompany } from "../../../src/controllers/companies";
import { getUserDetails } from "../../../src/controllers/users";
import styles from "../../../styles/AddCompany.module.css";
import { useMutation } from "react-query";

const AddNewCompany = () => {
  const mutation = useMutation((company) => {
    return addNewCompany(company);
  });

  const [company, setCompany] = useState({
    name: "",
    fileUrl: "",
    email: "",
    about: "",
    companySize: "",
    location: null,
    background: "",
    userID: "",
  });

  const router = useRouter();
  const [file, setFile] = useState(null);
  const [background, setBackground] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCompany({ ...company, [name]: value });
  };

  const handleFileInput = (e) => {
    const value = e.target.files[0];
    setFile(value);
  };

  const handleLocation = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCompany({
      ...company,
      location: {
        ...company.location,
        [name]: value,
      },
    });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const { userID } = getUserDetails();
    try {
      const url = await addCompanyAvatar(file);
      const newCompany = {
        ...company,
        background: background,
        fileUrl: url,
        userID,
      };
      mutation.mutate(newCompany);
      router.push("/admin/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.add_new}>
      <h3>Add new company</h3>
      <UpdateCompanyForm
        handleChange={handleChange}
        handleSubmission={handleSubmission}
        handleFileInput={handleFileInput}
        handleBackground={setBackground}
        handleLocation={handleLocation}
        background={background}
      />
    </div>
  );
};

export default AddNewCompany;
