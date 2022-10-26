import Link from "next/link";
import { auth } from "../controllers/app";
const Nav = ({ text = "Login", bg = false }) => {
  const user = auth.currentUser;
  //This syntax because the authProvider doesn't provide cover the Nav
  return (
    <div className="containers">
      <header>
        <nav>
          <Link href="/">
            <a className="logo" style={{ color: bg && "#665df5" }}>
              TadJobs
            </a>
          </Link>
          <Link href={user ? "/admin" : "/auth/login"}>
            <a>{user ? 'Manage' : text}</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
