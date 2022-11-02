import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../controllers/app";
const Nav = ({ text = "Login", bg = false }) => {
  const [user, setUser] = useState(null);

  //Since the component is not wrapped with the authProvider...
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth, auth.currentUser]);
  return (
    <div className="containers">
      <header>
        <nav>
          <Link href="/">
            <a className="logo" style={{ color: "#665df5" }}>
              TadJobs
            </a>
          </Link>
          <Link href={user ? "/admin" : "/auth/login"}>
            <a>{"Post a job"}</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
