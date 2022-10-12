import LoginForm from "../../src/components/LoginForm";
import styles from "../../styles/Auth.module.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { loginWithEmailAndPassword } from "../../src/controllers/users";
import { AuthContext } from "../../src/context/authProvider";
import { auth } from "../../src/controllers/app";

const Login = () => {
  const [authUser, setAuthUser] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAuthUser({ ...authUser, [name]: value });
  };
  useEffect(() => {
    if (auth.currentUser) {
      router.push("/admin");
    }
  }, [auth]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginWithEmailAndPassword(authUser);
      router.push("/admin/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.authentication}>
      <div className={styles.login_header}>
        <h3>TadJobs</h3>
        <p>Welcome back, login and attract the best talent</p>
      </div>
      <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

export default Login;
