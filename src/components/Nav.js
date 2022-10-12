import Link from "next/link";

const Nav = ({ text = "Login", bg = false }) => {
  return (
    <div className="containers">
      <header>
        <nav>
          <Link href="/">
            <a className="logo" style={{ color: bg && "#665df5" }}>
              TadJobs
            </a>
          </Link>
          <Link href="/auth/login">
            <a>{text}</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
