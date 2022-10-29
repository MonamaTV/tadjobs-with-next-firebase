import Head from "next/head";
import Link from "next/link";
import Meta from "../src/components/Meta";
import Nav from "../src/components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta title={"TadJobs - Home"} description={"Find Your Dream Job At Ease From The Best"} />

      <Head>
        <title>TadJobs - Home For Best Tech Jobs</title>
        <meta
          name="description"
          content="The best companies, best jobs. The developer job platform that has your back - complete with your own dev career coach and upfront salary
            info."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.content}>
          <h2>Find your dream job at ease from the best</h2>
          <p>
            The best companies, best jobs. The developer job platform that has your back - complete with your own dev career coach and upfront salary
            info.
          </p>
          <Link href="/jobs/search">
            <a>Start searching</a>
          </Link>
          <Link href="/companies/">
            <a className={styles.companies}>Companies</a>
          </Link>
        </div>
        <div className={styles.img}>
          <img loading="lazy" src="/assets/cover.svg" alt="" />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
