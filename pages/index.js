import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jamie Pantling</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />

      <main className={styles.main}>
        <img className={styles.image} src="/me.jpg" />
        <h1 className={styles.title}>Jamie Pantling</h1>

        <p className={styles.description}>I'm a software developer in Toronto, Ontario.</p>

        <h2 className={styles.subtitle}>I built:</h2>

        <div className={styles.grid}>
          <a
            href="https://github.com/jamiepantling/mixtails"
            className={styles.card}
            target="_blank"
          >
            <h2>
              <span className={styles.mixtails}>Mixtails</span>
            </h2>
            <p>Pair your favourite cocktails with playlists to set the mood.</p>
            <br />
            <p className={styles.technologies}>React, Node.js, Mongoose</p>
          </a>
          <a
            href="https://github.com/jamiepantling/bored-game"
            className={styles.card}
            target="_blank"
          >
            <h2>
              <span className={styles.boredGame}>Bored? Game!</span>
            </h2>
            <p>
              Add, rate and review board games to find the perfect one to play.
            </p>
            <br />
            <p className={styles.technologies}>
              Express, Mongoose, Node.js, Tailwind{" "}
            </p>
          </a>

          <a
            href="https://github.com/ThomasLawlor17/fridgy"
            className={styles.card}
            target="_blank"
          >
            <h2>
              <span className={styles.fridgy}>Fridgy</span>
            </h2>
            <p>
              Organise a shared fridge. Tag your food as shared, or "hands off"!
            </p>
            <br />
            <p className={styles.technologies}>Django, PostgreSQL, Tailwind</p>
          </a>

          <a
            href="https://github.com/jamiepantling/sproutsweeper"
            className={styles.card}
          >
            <h2>
              <span className={styles.sproutsweeper}>Sproutsweeper!</span>
            </h2>
            <p>
              Brussels-sprouts-based version of the classic Minesweeper, styled
              for fans of the 90s.
            </p>
            <br />
            <p className={styles.technologies}>HTML, vanilla CSS, Node.js </p>
          </a>
        </div>
      </main>
    </div>
  );
}
