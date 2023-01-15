import Link from "next/link";
import { useState } from "react";
import { titles } from "../utils/app";
import DropdownRadio from "./DropdownRadio";
import styles from "./Header.module.css";

export default function Header() {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearch(value);
    // If the width is less than this specified, it automatically takes to the
    // jobs page because the search button is not visible on mobile screens.
    if (window.innerWidth <= "586") {
      window.location.href = "/admin/jobs/?search=" + search;
    }
  };

  const handleSearchJob = () =>
    (window.location.href = "/admin/jobs/?search=" + search);
  return (
    <header>
      <nav className={styles.navigation}>
        <Link href="/">
          <a className={styles.logo}>
            <img src="/log.svg" alt="" />
          </a>
        </Link>
        <div className={styles.search}>
          <div className={styles.title_input}>
            <div className={styles.drop}>
              <span>{search ? search : "Search jobs"}</span>
            </div>
            <DropdownRadio
              options={titles}
              searchBy="jobs"
              handleChange={handleSearchInput}
            />
          </div>
          <button onClick={handleSearchJob}>Search</button>
        </div>
      </nav>
    </header>
  );
}
