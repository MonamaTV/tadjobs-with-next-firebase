import LoginForm from "../../src/components/LoginForm";
import styles from "../../styles/Auth.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSignedInUser, loginWithEmailAndPassword, loginWithGooglePopup } from "../../src/controllers/users";
import { authResponses } from "../../src/utils/responses";
import Meta from "../../src/components/Meta";
import Link from "next/link";

const Login = () => {
  //State
  const user = {
    email: "",
    password: "",
  };
  const [error, setError] = useState("");
  //Flags signed in user
  const [loggedIn, setLoggedIn] = useState(null);
  const router = useRouter();

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
      await loginWithEmailAndPassword(user);
    } catch (error) {
      setError(authResponses(error.code));
    }
  };

  const googleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginWithGooglePopup();
    } catch (error) {
      setError(authResponses(error.code));
    }
  };

  return (
    <div className={styles.authentication}>
      <Meta title={"TadJobs - Login"} />
      <div className={styles.login_header}>
        <h3>
          <Link href="/">
            <a>TadJobs</a>
          </Link>
        </h3>
        <p>Welcome back, login and attract the best talent</p>
      </div>
      <LoginForm google={googleSignIn} handleSubmission={handleSubmit} user={user} error={error} />
    </div>
  );
};

export default Login;
