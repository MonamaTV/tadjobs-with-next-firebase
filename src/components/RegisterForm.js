import styles from "./Form.module.css";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateUserRegistration } from "../../src/utils/validations";

const RegisterForm = ({ user, handleSubmission, error }) => {
  return (
    <Formik
      initialValues={user}
      onSubmit={handleSubmission}
      validationSchema={validateUserRegistration}
    >
      {
        ({ isSubmitting }) => (
          <Form className={styles.form}>
            <Field
              name="name"
              placeholder="Enter your full name"
              type={"text"}
              required
            />
            <ErrorMessage name="name" component={"p"} className={styles.errors} />
            <Field
              name="email"
              placeholder="Enter your email"
              type={"email"}
              required
            />
            <ErrorMessage name="email" component={"p"} className={styles.errors} />
            <Field
              name="password"
              placeholder="Enter your password"
              type={"password"}
              required
            />
            <ErrorMessage
              name="password"
              component={"p"}
              className={styles.errors}
            />
            {error && <p className={styles.errors} >{error}</p>}
            <button type="submit" disabled={isSubmitting}>Register</button>
            <Link href="/auth/login">
              <a>Have account? Login</a>
            </Link>
          </Form>
        )
      }
    </Formik>
  );
};

export default RegisterForm;
