import Head from "next/head";
import Link from "next/link";
import Nav from "../src/components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TadJobs</title>
        <meta name="description" content="Find the best jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.content}>
          <h2>Find Your Dream Job At Ease From The Best</h2>
          <p>
            The best companies, best jobs. The developer job platform that has your back - complete with your own dev career coach and upfront salary
            info.
          </p>
          <Link href="/jobs/search">
            <a>Start searching</a>
          </Link>
        </div>
        <div className={styles.img}>
          <img src="/assets/cover.svg" alt="" />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
