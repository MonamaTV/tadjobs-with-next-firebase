import UpdateCompanyForm from "../../../../src/components/EditCompanyForm";
import styles from "../../../../styles/Update.module.css";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { editCompany, getCompany } from "../../../../src/controllers/companies";
import { useState } from "react";
import Meta from "../../../../src/components/Meta";
import { getJobsByCompany } from "../../../../src/controllers/jobs";
import CompanyJob from "../../../../src/components/CompanyJob";
import Loading from "../../../../src/components/Loading";

const UpdateCompany = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  let company = {
    name: "",
    companySize: 0,
    fileUrl: "",
    location: {
      country: "",
      city: "",
    },
    website: "",
    background: "",
  };

  //Get the company ID
  const { id } = router.query;
  const mutation = useMutation(
    ([newCompany, file]) => {
      return editCompany(newCompany, file, id);
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["companies", { id }], data);
      },
    }
  );
  //Fetching the company based on the ID
  const { data, isLoading, isError } = useQuery(["companies", id], () => {
    return getCompany(id);
  });

  const { data: jobs } = useQuery(["jobs", id], () => {
    return getJobsByCompany(id);
  });

  //For inputs Formik seems to fail to cater for
  const [background, setBackground] = useState("");
  const [url, setUrl] = useState("");
  const [img, setImg] = useState(null);
  //Error based state for the above values
  const [error, setError] = useState({
    url: "",
    background: "",
  });

  const handleSubmit = async (values) => {
    try {
      const newBackground = background === "" ? company.background : background;
      if (newBackground === "") {
        setError({
          ...error,
          background: "Please provide your organization background",
        });
        return;
      } else {
        values = {
          ...values,
          background: background || company.background,
        };
      }
      setError({
        url: " ",
        background: " ",
      });
      await mutation.mutateAsync([values, img]);
      router.push("/admin/companies/" + id);
    } catch (error) {
      setError({ ...error, background: "Something bad happened" });
    }
  };

  const setFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (file.size > 2097152) {
      setError({
        ...error,
        url: "File too big. Choose less than 2mb",
      });
      return;
    }
    setImg(file);
    setError({
      ...error,
      url: " ",
    });
    setUrl(url);
  };

  if (isLoading && !data) {
    return <Loading />;
  }
  company = Object.assign(company, data);

  return (
    <div className={styles.update}>
      <Meta title={"TadJobs - Update company"} />

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
        <h5>All jobs related to this company</h5>
        {jobs.map((job) => (
          <CompanyJob key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default UpdateCompany;
