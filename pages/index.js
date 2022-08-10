import Head from "next/head";
import { motion } from "framer-motion";
const Project = require("../models/Project");
import connectMongo from "../utils/connectMongo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Home.module.css";

import Nav from "../components/nav/nav";
// import getProjects from "../api/projects"

export const getStaticProps = async () => {

  await connectMongo();
  console.log("CONNECTED TO MONGO");
  console.log(Project)
  let projects = await Project.find();
  console.log(JSON.parse(JSON.stringify(projects)));
  return { props: { projects: JSON.parse(JSON.stringify(projects)) } };
};
export default function Home({ projects }) {
  return (
    <div className={styles.container}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Head>
        <title>Jamie Pantling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className={styles.main}>
        <img className={styles.image} src="/me.jpg" />
        <h1 className={styles.title}>Jamie Pantling</h1>
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <p className={styles.description}>
          I'm a full-stack developer in Toronto.
        </p>

        <h2 className={styles.subtitle}>I built:</h2>

        <div className={styles.grid}>
          <motion.div
            layout
            href="https://github.com/jamiepantling/mixtails"
            className={[styles.card, styles.motion].join(" ")}
            target="_blank"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2>
              <span className={styles.mixtails}>{projects[3].name}</span>
            </h2>
            <p>{projects[3].description}</p>
            <br />
            <p className={styles.technologies}>{projects[3].techs}</p>
          </motion.div>
          <motion.div
            href="https://github.com/jamiepantling/bored-game"
            className={styles.card}
            target="_blank"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
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
          </motion.div>

          <motion.div
            layout
            href="https://github.com/ThomasLawlor17/fridgy"
            className={styles.card}
            target="_blank"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2>
              <span className={styles.fridgy}>Fridgy</span>
            </h2>
            <p>
              Organise a shared fridge. Tag your food as shared, or "hands off"!
            </p>
            <br />
            <p className={styles.technologies}>Django, PostgreSQL, Tailwind</p>
          </motion.div>

          <motion.div
            href="https://github.com/jamiepantling/sproutsweeper"
            className={styles.card}
            target="_blank"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
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
          </motion.div>
        </div>
      </main>
    </div>
  );
}
