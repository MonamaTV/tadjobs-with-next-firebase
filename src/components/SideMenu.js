import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authProvider";
import Meta from "./Meta";
import styles from "./SideMenu.module.css";
export default function SideMenu() {
  const { signOutUser } = useContext(AuthContext);
  const [classic, setClassic] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <>
      <Meta title={"Tadjobs - Manage jobs and companies "} />
      <div className={styles.side_menu}>
        <nav>
          <ul className={styles.taps}>
            <li className={styles.tap}>
              <Link href="/admin/">
                <a>
                  {" "}
                  <img src="/assets/home.png" alt="Home" />
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.tap}>
              <Link href={"/admin/jobs"}>
                <a>
                  <img src="/assets/jobs.png" alt="Jobs" />
                  Jobs
                </a>
              </Link>
            </li>
            <li className={styles.tap}>
              <Link href="/admin/profile">
                <a>
                  {""}
                  <img src="/assets/profile.png" alt="Profile" />
                  Profile
                </a>
              </Link>
            </li>
            <li className={styles.tap}>
              <div>
                <img src="/assets/logout.png" alt="Logout" />
                <button onClick={signOutUser}>Logout</button>
              </div>
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
      {/* Only visible to mobile */}
      <footer className={styles.mobile_footer}>
        <nav className={styles.mobile_nav}>
          <ul className={styles.mobile_taps}>
            <li>
              <Link href={"/admin/"}>
                <a>
                  <img src="/assets/home.png" alt="Home image" />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/admin/jobs"}>
                <a>
                  <img src="/assets/jobs.png" alt="Jobs img" />
                  Jobs
                </a>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setProfile(false);
                  setClassic(!classic);
                }}
              >
                <img src="/assets/add.png" alt="Add img" />
                Add
                {classic && (
                  <div className={styles.classic}>
                    <Link href={"/admin/companies/add"}>
                      <a>Add company</a>
                    </Link>
                    <Link href={"/admin/jobs/add"}>
                      <a>Add job</a>
                    </Link>
                  </div>
                )}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setClassic(false);
                  setProfile(!profile);
                }}
              >
                <img src="/assets/profile.png" alt="Settings img" />
                Settings
                {profile && (
                  <div className={styles.classic}>
                    <Link href={"/admin/profile"}>
                      <a>Profile</a>
                    </Link>
                    <button onClick={signOutUser}>
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
