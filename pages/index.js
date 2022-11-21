import Head from "next/head";
import Link from "next/link";
import Nav from "../src/components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/logono.svg" />
        <title>TadJobs - Home For Best Tech Jobs</title>
        <meta
          name="description"
          content="The best companies, best jobs. The developer job platform that has your back - complete with your own dev career coach and upfront salary
            info."
        />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.content}>
          <h2>Find your dream job in tech!</h2>
          <p>
            Find the best tech jobs around the country from the best companies
            building amazing products. Everything is at your finger tips
          </p>
          <Link href="/jobs/search">
            <a>Start searching</a>
          </Link>
          <Link href="/companies/">
            <a className={styles.companies}>Companies</a>
          </Link>
        </div>
        <div className={styles.img}>
          <img
            loading="lazy"
            src="/assets/back.png"
            alt="The backgroud image"
          />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
