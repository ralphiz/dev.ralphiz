"use client"

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ralphiz.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <a
          href="https://www.instagram.com/lulu_naps/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src='/lulu.jpg' alt='our doggo' className={styles.image__lulu} />
        </a>

        <h1 className={styles.title}>ralphiz.
          <a className={styles.link} href="https://blog.ralphiz.dev">dev</a>
        </h1>

        <div className={styles.description}>
          <p>Links to where you can find me:</p>
          <div>
            <ul className={styles.social}>
              <li className={styles.social__li}>
                <a
                  href="https://github.com/ralphiz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/github.svg" />
                </a>
              </li>
              <li className={styles.social__li}>
                <a
                  href="https://twitter.com/ralphiz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/twitter.svg" />
                </a>
              </li>
              <li className={styles.social__li}>
                <a
                  href="https://www.instagram.com/ra7phiz/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/instagram.svg" />
                </a>
              </li>
              <li className={styles.social__li}>
                <a
                  href="https://www.linkedin.com/in/ralphcacho/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/linkedin.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
