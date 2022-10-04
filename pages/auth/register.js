import RegisterForm from "../../src/components/RegisterForm";
import styles from "../../styles/Auth.module.css";
const Login = () => {
  return (
    <div className={styles.authentication}>
      <div className={styles.login_header}>
        <h3>TadJobs</h3>
        <p>Register and find the best talent for the openings in your company</p>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Login;
