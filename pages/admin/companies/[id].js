import UpdateCompanyForm from "../../../src/components/EditCompanyForm";
import styles from "../../../styles/Update.module.css";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { editCompany, getCompany } from "../../../src/controllers/companies";
import { useState } from "react";

const UpdateCompany = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  let company = {
    name: "",
    companySize: 0,
    fileUrl: "",
    location: {
      country: "",
      city: ""
    },
    website: "",
    background: ""
  };


  //Get the company ID
  const { id } = router.query;
  const mutation = useMutation(([newCompany, file]) => {
    return editCompany(newCompany, file, id);
  }, {
    onSuccess: data => {
      queryClient.setQueryData(["companies", { id }], data);
    }
  });
  //Fetching the company based on the ID
  const {
    data,
    isLoading,
    isError,
  } = useQuery(["companies", id], () => {
    return getCompany(id);
  });

  //For inputs Formik seems to fail to cater for
  const [background, setBackground] = useState("");
  const [url, setUrl] = useState("");
  const [img, setImg] = useState(null);
  //Error based state for the above values
  const [error, setError] = useState({
    url: "",
    background: ""
  })

  const handleSubmit = async (values) => {
    try {
      const newBackground = (background === "") ? company.background : background;
      if (newBackground === "") {
        setError({
          ...error, background: "Please provide your organization background"
        })
        return;
      }
      else {
        values = {
          ...values,
          background: background || company.background
        }
      }
      setError({
        url: " ",
        background: " "
      });
      await mutation.mutateAsync([values, img]);

    } catch (error) {
      console.log(error);
    }
  }

  const setFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (file.size > 2097152) {
      setError({
        ...error, url: "File too big. Choose less than 2mb"
      })
      return;
    }
    setImg(file);
    setError({
      ...error, url: " "
    })
    setUrl(url);
  }

  if (isLoading && !data) {
    return <h1>Loading...</h1>
  }
  company = Object.assign(company, data);


  return (
    <div className={styles.update}>
      <div className={styles.update_edit}>
        <h3>Edit company</h3>
        <UpdateCompanyForm
          setFile={setFile}
          setBackground={setBackground}
          company={company}
          handleSubmit={handleSubmit}
          imgUrl={url}
          error={error}
          background={background}
        />
      </div>
      <div className={styles.company_jobs}>
        {/* <h3>All jobs related to this company</h3> */}
        <div className={styles.job}>
          <h4>Product Manager</h4>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempore voluptatum culpa similique cupiditate.</small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
        </div>
        <div className={styles.job}>
          <h4>Product Manager</h4>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempore voluptatum culpa similique cupiditate.</small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
        </div>
        <div className={styles.job}>
          <h4>Product Manager</h4>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempore voluptatum culpa similique cupiditate.</small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
        </div>
        <div className={styles.job}>
          <h4>Product Manager</h4>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempore voluptatum culpa similique cupiditate.</small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UpdateCompany;
