import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../controllers/app";
const Nav = () => {
  const [user, setUser] = useState(null);
  const [showNav, setShowNav] = useState(false);
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
          <button onClick={() => setShowNav(!showNav)}>
            <p>Menu</p>
            <img src="/assets/menus.png" alt="" />
          </button>
        </nav>
      </header>
      {showNav && (
        <nav className="navigation">
          <div className="head">
            <Link href="/">
              <a className="home">TadJobs</a>
            </Link>
            <button onClick={() => setShowNav(!showNav)}>Close</button>
          </div>
          <ul className="nav_items">
            <li className="nav_item">
              <Link href="/jobs/search">
                <a>Jobs</a>
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/companies">
                <a>Companies</a>
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/jobs/saved">
                <a>Saved</a>
              </Link>
            </li>
          </ul>
          <div className="call_to_action">
            {!user && (
              <>
                <Link href="/auth/register">
                  <a className="register">Register</a>
                </Link>
                <Link href="/auth/login">
                  <a>Login</a>
                </Link>
              </>
            )}
            {user && (
              <Link href="/admin/">
                <a className="post">Dashboard</a>
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Nav;
