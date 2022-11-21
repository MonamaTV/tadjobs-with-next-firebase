import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../controllers/app";
const Nav = () => {
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
              <img src="/log.svg" alt="" />
            </a>
          </Link>
          <div>
            <Link href={"/jobs/saved"}>
              <a className="jobs">Saved jobs</a>
            </Link>
            <Link href={user ? "/admin" : "/auth/login"}>
              <a>{"Post a job"}</a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
