import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <h3 className={styles.logo}>TadJobs</h3>
        <div className={styles.search}>
          <input type="text" placeholder="Search items" />
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
}
