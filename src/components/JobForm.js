import { Formik, Form, Field, ErrorMessage } from "formik";
import dynamic from "next/dynamic";
import styles from "./Form.module.css";
import { validateJob } from "../utils/validations";

const Editor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const JobForm = ({ job, companies, handleAbout, about, handleSubmission, errors }) => {

  return (
    <Formik
      enableReinitialize={true}
      initialValues={job}
      validationSchema={validateJob}
      onSubmit={handleSubmission}
    >
      {
        ({ isSubmitting }) => (
          <Form className={styles.job_form}>
            <Field
              placeholder="Title"
              name="title"
            />
            <ErrorMessage className={styles.errors} component={"p"} name="title" />
            <Field as="select" name="seniority">
              <option value="-1">Job Seniority</option>
              <option value="1">Entry</option>
              <option value="2">Intermediate</option>
              <option value="3">Senior</option>
            </Field>
            <ErrorMessage
              className={styles.errors}
              component={"p"}
              name="seniority"
            />
            <Field as="select" name="companyID">
              <option value="-1">Choose company</option>
              {companies.length !== 0 && companies.map(({ name, id }) => (
                <option key={id} value={id}>{name}</option>
              ))}
            </Field>
            <ErrorMessage
              className={styles.errors}
              component={"p"}
              name="companyID"
            />
            <Field
              name="location"
              placeholder="Job location"
            />
            <ErrorMessage
              component={"p"}
              className={styles.errors}
              name="location"
            />
            <div className={styles.salary_range}>
              <Field placeholder="Min. salary" name="minSalary" />
              <Field placeholder="Max. salary" name="maxSalary" />
            </div>
            <ErrorMessage
              className={styles.errors}
              component={"p"}
              name={"maxSalary"}
            />
            <div className={styles.salary_range}>
              <Field type={"date"} name="openingDate" />
              <Field type={"date"} name="closingDate" />
            </div>
            <ErrorMessage
              className={styles.errors}
              component={"p"}
              name="openingDate"
            />
            <Field
              type="text"
              placeholder="Application link"
              name="application"
            />
            <ErrorMessage
              className={styles.errors}
              component={"p"}
              name="application"
            />
            <Editor
              controls={[
                ["bold", "italic", "underline", "link"],
                ["unorderedList", "h1", "h2", "h3"],
                ["sup", "sub"],
                ["alignLeft", "alignCenter", "alignRight"],
              ]}
              value={about || job.about}
              onChange={handleAbout}
              placeholder="Explain in detail... "
              id="rte"
            />
            {errors.about && <p className={styles.errors}>{errors.about}</p>}
            {console.log((about === job.about))}
            <button
              disabled={isSubmitting}
              className={styles.button}>
              Add new job
            </button>
          </Form>
        )
      }
    </Formik>
  )
};
export default JobForm;
