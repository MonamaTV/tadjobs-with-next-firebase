import LoginForm from "../../src/components/LoginForm";
import styles from "../../styles/Auth.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSignedInUser, loginWithEmailAndPassword } from "../../src/controllers/users";
const Login = () => {
  //State
  const [authUser, setAuthUser] = useState({ email: "", password: "" });
  //Flags signed in user
  const [loggedIn, setLoggedIn] = useState(null);
  const router = useRouter();
  //The user inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAuthUser({ ...authUser, [name]: value });
  };

  //Checks if there's a user logged in and direct to the admin page
  useEffect(() => {
    getSignedInUser(setLoggedIn);
    if (loggedIn) {
      router.push("/admin");
    }
  }, [loggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmailAndPassword(authUser);
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
      <LoginForm 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
      />
    </div>
  );
};

export default Login;
