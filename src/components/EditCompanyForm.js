import styles from "./Form.module.css";
import dynamic from "next/dynamic";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import { validateCompany } from "../utils/validations";
import { departments } from "../utils/app";

const Editor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

export const CustomEditor = ({ background, setBackground }) => {
  return (
    <Editor
      controls={[
        ["bold", "italic", "underline", "link"],
        ["unorderedList", "h1", "h2", "h3", "h4", "h5", "h6"],
        ["sup", "sub"],
        ["alignLeft", "alignCenter", "alignRight"],
      ]}
      style={{ borderColor: "#d3d2d2" }}
      value={background}
      onChange={setBackground}
      placeholder="Detailed background about your organization"
    />
  );
};

const UpdateCompanyForm = ({
  company,
  handleSubmit,
  background,
  setBackground,
  error,
  setFile,
  imgUrl,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={company}
      validationSchema={validateCompany}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.update_form}>
          <label className={styles.change_image} htmlFor="newFileUrl">
            <small>Click the camera icon to change logo</small>
            <br />
            <img
              loading="lazy"
              src={imgUrl || company.fileUrl}
              width={"50px"}
              style={{ padding: "5px" }}
              alt="Company logo"
            />
            <input
              onChange={setFile}
              type={"file"}
              name="newFileUrl"
              id="newFileUrl"
              placeholder="Change company logo"
              accept="image/png, image/jpeg, image/jpg"
            />
            <img
              loading="lazy"
              className={styles.add_image}
              src="/assets/camera.png"
              alt="Add company logo"
            />
          </label>
          {error.url && <p className={styles.errors}>{error.url}</p>}
          <Field name="name" type={"text"} placeholder="Company name" />
          <ErrorMessage component={"p"} name="name" className={styles.errors} />
          <Field
            name="companySize"
            type={"text"}
            placeholder="Company size (employee count est.)"
          />
          <ErrorMessage
            component={"p"}
            name="companySize"
            className={styles.errors}
          />
          <Field name="department" as={"select"}>
            <option className="default_option" defaultValue={"-1"} value={"-1"}>
              Choose department
            </option>
            {departments.map(({ name, value }) => (
              <option key={value} value={`${value}`}>
                {name}
              </option>
            ))}
          </Field>
          <ErrorMessage
            component={"p"}
            name="department"
            className={styles.errors}
          />
          <Field name="email" type={"email"} placeholder="Email" />
          <ErrorMessage
            component={"p"}
            name="email"
            className={styles.errors}
          />

          <Field name="website" type={"text"} placeholder="Website" />
          <ErrorMessage
            component={"p"}
            name="website"
            className={styles.errors}
          />
          <div className={styles.location}>
            <Field
              name="location.country"
              type={"text"}
              placeholder="Country"
            />
            <Field name="location.city" type={"text"} placeholder="City" />
          </div>
          <ErrorMessage
            component={"p"}
            name="location.country"
            className={styles.errors}
          />

          <ErrorMessage
            component={"p"}
            name="about"
            className={styles.errors}
          />

          <CustomEditor
            background={background || company.background}
            setBackground={setBackground}
          />
          {error.background && (
            <p className={styles.errors}>{error.background}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Save changes
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateCompanyForm;
