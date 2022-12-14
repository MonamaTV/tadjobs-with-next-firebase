import styles from "./Form.module.css";
import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = ({ user, handleSubmission, error, google }) => {
  return (
    <Formik
      initialValues={user}
      onSubmit={handleSubmission}
      validationSchema={Yup.object({
        email: Yup.string().email("Please provide a valid email").required("Email is required"),
        password: Yup.string().min(8, "Your password must be at least 8 characters long").required("Password is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Field placeholder="Enter your email" type={"email"} name="email" />
          <ErrorMessage name="email" component={"p"} className={styles.errors} />
          <Field placeholder="Enter your password" type={"password"} name="password" autoComplete={"false"} />
          <ErrorMessage name="password" component={"p"} className={styles.errors} />
          {error && <p className={styles.errors}>{error}</p>}

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <Link href="/auth/register">
            <a>Don&apos;t have account? Register</a>
          </Link>
          <button onClick={google} className={styles.google}>
            <span>Continue With Google</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
