import LoginForm from "../../src/components/LoginForm";
import styles from "../../styles/Auth.module.css";
const Login = () => {
  return (
    <div className={styles.authentication}>
      <div className={styles.login_header}>
        <h3>TadJobs</h3>
        <p>Welcome back, login and attract the best talent</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
