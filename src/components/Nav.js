import Link from "next/link";

const Nav = ({ text = "Login", bg = false }) => {
  return (
    <div className="containers">
      <header>
        <nav>
          <h3 style={{ color: bg && "#665df5" }}>TadJobs</h3>
          <Link href="/auth/login">
            <a>{text}</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
