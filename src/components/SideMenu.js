import Link from "next/link";
import styles from "./SideMenu.module.css";
export default function SideMenu() {
  return (
    <div className={styles.side_menu}>
      <nav>
        <ul className={styles.taps}>
          <li className={styles.tap}>
            <Link href="/admin/">
              <a>
                {" "}
                <img src="/assets/home.png" alt="" />
                Home
              </a>
            </Link>
          </li>
          <li className={styles.tap}>
            <Link href={"/admin/jobs"}>
              <a>
                <img src="/assets/jobs.png" alt="" />
                Jobs
              </a>
            </Link>
          </li>
          <li className={styles.tap}>
            <Link href="/admin/profile">
              <a>
                {""}
                <img src="/assets/profile.png" alt="" />
                Profile
              </a>
            </Link>
          </li>
        </ul>

        <hr />
        <ul className={styles.taps}>
          <li className={styles.tap}>
            <Link href="/admin/companies/add">
              <a>
                <small>Add company</small>
              </a>
            </Link>
          </li>
          <li className={styles.tap}>
            <Link href={"/admin/jobs/add"}>
              <a>
                <small>Add job</small>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
