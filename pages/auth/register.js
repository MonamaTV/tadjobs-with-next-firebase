import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Meta from "../../src/components/Meta";
import RegisterForm from "../../src/components/RegisterForm";
import { getSignedInUser, registerWithEmailAndPassword } from "../../src/controllers/users";
import { authResponses } from "../../src/utils/responses";
import styles from "../../styles/Auth.module.css";
const Register = () => {

  //Flags signed in user
  const [loggedIn, setLoggedIn] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  //The user inputs
  const user = {
    name: "",
    password: "",
    email: ""
  };

  //Checks if there's a user logged in and direct to the admin page
  useEffect(() => {
    getSignedInUser(setLoggedIn);
    if (loggedIn) {
      router.push("/admin");
    }
  }, [loggedIn]);

  const handleSubmit = async (user) => {
    setError("");
    try {
      await registerWithEmailAndPassword(user);
      router.push("/admin/");
    } catch (error) {
      setError(authResponses(error.code));
    }
  };
  return (
    <div className={styles.authentication}>
      <Meta title={"TadJobs - Register"} />

      <div className={styles.login_header}>
        <h3><a href="/">TadJobs</a></h3>
        <p>Register and find the best talent for the openings in your company</p>
      </div>
      <RegisterForm
        handleSubmission={handleSubmit}
        user={user}
        error={error}
      />
    </div>
  );
};

export default Register;
