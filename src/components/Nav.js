import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../controllers/app";
const Nav = ({ text = "Login", bg = false }) => {
  const [user, setUser] = useState(null);

  //Since the component is not wrapped with the authProvider...
  useEffect(() => {
    setUser(() => {
      return auth.currentUser;
    });
  }, [auth, user]);
  return (
    <div className="containers">
      <header>
        <nav>
          <Link href="/">
            <a className="logo" style={{ color: "#665df5" }}>
              DiSpane
            </a>
          </Link>
          <Link href={user ? "/admin" : "/auth/login"}>
            <a>{user ? "Admin" : text}</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
