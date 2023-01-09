import { Formik, Form, Field, ErrorMessage } from "formik";
import dynamic from "next/dynamic";
import styles from "./Form.module.css";
import { validateJob } from "../utils/validations";
import { useEffect } from "react";

const Editor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const JobForm = ({
  job,
  companies,
  handleAbout,
  about,
  handleSubmission,
  errors,
}) => {
  useEffect(() => {
    if (job.about) {
      handleAbout(job.about);
    }
  }, []);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={job}
      validationSchema={validateJob}
      onSubmit={handleSubmission}
    >
      {({ isSubmitting }) => (
        <Form className={styles.job_form}>
          {isSubmitting}
          <Field placeholder="Title" name="title" />
          <ErrorMessage
            className={styles.errors}
            component={"p"}
            name="title"
          />
          <Field as="select" name="seniority">
            <option defaultValue={"-1"} value="-1">
              Job Seniority
            </option>
            <option value="1">Entry</option>
            <option value="2">Intermediate</option>
            <option value="3">Senior</option>
            <option value="4">Internship</option>
          </Field>
          <ErrorMessage
            className={styles.errors}
            component={"p"}
            name="seniority"
          />
          <Field as="select" name="type">
            <option defaultValue={"-1"} value="-1">
              Job type
            </option>
            <option value="1">Office</option>
            <option value="2">Remote</option>
            <option value="3">Hybrid</option>
          </Field>
          <ErrorMessage className={styles.errors} component={"p"} name="type" />
          <Field as="select" name="companyID">
            <option value="-1">Choose company</option>
            {companies.length !== 0 &&
              companies.map(({ name, id }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
          </Field>
          <ErrorMessage
            className={styles.errors}
            component={"p"}
            name="companyID"
          />
          <Field name="location" placeholder="Job location" />
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
            <Field
              type={"text"}
              name="openingDate"
              onFocus={(e) => {
                e.target.type = "date";
              }}
              onBlur={(e) => {
                e.target.type = "text";
              }}
              placeholder="Opening date"
            />
            <Field
              type={"text"}
              name="closingDate"
              onFocus={(e) => {
                e.target.type = "date";
              }}
              onBlur={(e) => {
                e.target.type = "text";
              }}
              placeholder="Closing date"
            />
          </div>
          <ErrorMessage
            className={styles.errors}
            component={"p"}
            name="openingDate"
          />
          <ErrorMessage
            className={styles.errors}
            component={"p"}
            name="closingDate"
          />
          <Field
            type="text"
            placeholder="Apply URL or email"
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
            style={{ borderColor: "#d3d2d2" }}
            onChange={handleAbout}
            placeholder="Explain in detail... "
            id="rte"
          />
          {errors.about && <p className={styles.errors}>{errors.about}</p>}
          <button
            disabled={!!!errors.about && isSubmitting}
            type="submit"
            className={styles.button}
          >
            Save {isSubmitting}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default JobForm;
