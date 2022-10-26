import { useRouter } from "next/router";
import { useState } from "react";
import { addCompanyAvatar, addNewCompany } from "../../../src/controllers/companies";
import { getUserDetails } from "../../../src/controllers/users";
import styles from "../../../styles/AddCompany.module.css";
import { useMutation, useQueryClient } from "react-query";
import CompanyForm from "../../../src/components/CompanyForm";
import Meta from "../../../src/components/Meta";

const AddNewCompany = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(([company, file]) => {
    return addNewCompany(company, file);
  }, {
    onSuccess: data => {
      queryClient.setQueryData(["companies", { id: data.id }], data)
    }
  });

  const company = {
    name: "",
    fileUrl: "",
    email: "",
    website: "",
    companySize: "",
    location: {
      country: "",
      city: ""
    },
    background: "",
    userID: "",
  };

  const router = useRouter();
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState({
    background: "",
    url: ""
  })
  const [background, setBackground] = useState("");


  const handleBackgroundChange = (e) => {
    if (e.length < 100) {
      setError({
        ...error, background: "Background must at least have 100 characters"
      });
    } else {
      setError({
        ...error, background: " "
      });
    }
    setBackground(e);
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (file.size > 2097152) {
      setError({
        ...error, url: "File too big. Choose less than 2mb"
      });
      return;
    }
    setFile(file);
    setError({
      ...error, url: " "
    })
    setImgUrl(url);
  };

  const handleSubmit = async (values) => {
    const { userID } = getUserDetails();
    try {
      if (!file) {
        setError({
          ...error,
          url: "Logo can't be empty"
        })
        return;
      }
      if (background.length < 100) {
        setError({
          ...error,
          background: "Background must at least have 100 characters"
        });
        return;
      }

      // const newCompany = {
      //   ...values,
      //   background: background,
      //   userID,
      // };
      // mutation.mutate([newCompany, file]);
      // setTimeout(() => {
      //   router.push("/admin/");
      // }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.add_new}>
      <Meta title={"TadJobs - Add company"} />
      <h3>Add new company</h3>
      <CompanyForm
        company={company}
        handleSubmit={handleSubmit}
        setBackground={handleBackgroundChange}
        background={background}
        imgUrl={imgUrl}
        setFile={handleFileInput}
        error={error}
      />
    </div>
  );
};

export default AddNewCompany;
