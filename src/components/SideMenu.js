import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authProvider";
import styles from "./SideMenu.module.css";
export default function SideMenu() {

  const { signOutUser } = useContext(AuthContext);
  const [classic, setClassic] = useState(false);

  return (
    <>
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
        <button className={styles.logout} onClick={signOutUser}>Logout</button>
      </div>
      {/* Only visible to mobile */}
      <footer className={styles.mobile_footer}>
        <nav className={styles.mobile_nav}>
          <ul className={styles.mobile_taps}>
            <li>
              <Link href={"/admin/"}>
                <a>
                  <img src="/assets/home.png" alt="" />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/admin/jobs"}>
                <a>
                  <img src="/assets/jobs.png" alt="" />
                  Jobs
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/admin/jobs"}>
                <a>
                  <img src="/assets/profile.png" alt="" />
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <button onClick={() => setClassic(!classic)}>
                <img src="/assets/add.png" alt="" />
                Add
                {classic && (
                  <div className={styles.classic}>
                    <Link href={"/admin/companies/add"}>
                      <a>
                        Add company
                      </a>
                    </Link>
                    <Link href={"/admin/jobs/add"}>
                      <a>
                        Add new job
                      </a>
                    </Link>
                  </div>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
