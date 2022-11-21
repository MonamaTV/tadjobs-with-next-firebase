import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <Link href="/">
          <a className={styles.logo}>
            <img src="/log.svg" alt="" />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search jobs" />
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
}
