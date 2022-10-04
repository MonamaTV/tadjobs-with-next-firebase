import styles from "./Form.module.css";
import Link from "next/link";
const LoginForm = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Enter your email" type={"email"} />
      <input placeholder="Enter your password" type={"password"} />
      <button>Login</button>
      <Link href="/auth/register">
        <a>Don't have account? Register</a>
      </Link>
    </form>
  );
};

export default LoginForm;
