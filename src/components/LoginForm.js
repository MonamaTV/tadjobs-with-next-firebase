import styles from "./Form.module.css";
import Link from "next/link";
const LoginForm = ({ handleChange, handleSubmit }) => {
  return (
    <form className={styles.form}>
      <input onChange={handleChange} placeholder="Enter your email" type={"email"} name="email" />
      <input onChange={handleChange} placeholder="Enter your password" type={"password"} name="password" autoComplete={"false"} />
      <button onClick={handleSubmit}>Login</button>
      <Link href="/auth/register">
        <a>Don't have account? Register</a>
      </Link>
    </form>
  );
};

export default LoginForm;
