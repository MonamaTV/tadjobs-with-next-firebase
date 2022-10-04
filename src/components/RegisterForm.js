import styles from "./Form.module.css";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Enter your full name" type={"text"} required />
      <input placeholder="Enter your email" type={"email"} required />
      <input placeholder="Enter your password" type={"password"} required />
      <button>Register</button>
      <Link href="/auth/login">
        <a>Have account? Login</a>
      </Link>
    </form>
  );
};

export default RegisterForm;
