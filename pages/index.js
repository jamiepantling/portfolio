import Head from "next/head";
import { motion } from "framer-motion";
import connectMongo from "../utils/connectMongo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "../styles/Home.module.css";
import Modal from "../components/modal/modal";
const Project = require("../models/Project");
import { useEffect, useState } from "react";

import Nav from "../components/nav/nav";

export const getStaticProps = async () => {
  await connectMongo();
  console.log("CONNECTED TO MONGO");
  let projects = await Project.find();
  console.log(JSON.parse(JSON.stringify(projects)));
  return { props: { projects: JSON.parse(JSON.stringify(projects)) } };
};

export default function Home({ projects }) {
  const [showModal0, setShowModal0] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Head>
        <title>Jamie Pantling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className={styles.main}>
        <motion.div
          layout
          className={styles.introContainer}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className={styles.description}>
            <div className={styles.descriptionText}>
              <span className={styles.hey}>Hey, I&apos;m Jamie 👋 </span>
              <br />
              I&apos;m a full-stack developer in Toronto.
            </div>
          </div>
          <div className={styles.picContainer}>
            <img className={styles.image} src="/me.jpg" />
            <div className={styles.icons}>
              <span className={styles.twitter}>
                <a href="https://twitter.com/jamiepantling">
                  {" "}
                  <FontAwesomeIcon icon={brands("twitter")} />
                </a>
              </span>
              <span className={styles.linkedin}>
                <a href="https://linkedin.com/in/jamie-pantling">
                  <FontAwesomeIcon icon={brands("linkedin")} />
                </a>
              </span>
              <span className={styles.github}>
                <a href="https://github.com/jamiepantling">
                  <FontAwesomeIcon icon={brands("github")} />
                </a>
              </span>
            </div>
          </div>
        </motion.div>
        <h2 className={styles.subtitle}>I built:</h2>

        <div className={styles.grid}>
          <div>
            <motion.div
              layout
              className={`${styles.card} ${styles.motion}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowModal0(true);
              }}
            >
              <h2>
                <span className={styles.mixtails}>{projects[3].name}</span>
              </h2>
              <p>{projects[3].description}</p>
              <br />
              <p className={styles.technologies}>{projects[3].techs}</p>
            </motion.div>
            {showModal0 && (
              <Modal
                onClose={() => setShowModal0(false)}
                name={projects[3].name}
                longDescription={projects[3].longDescription}
                url={projects[3].url}
                deployedUrl={projects[3].deployedUrl}
                techs={projects[3].techs}
                style={projects[3].style}
                font={projects[3].font}
              />
            )}
          </div>
          <div>
            <motion.div
              layout
              className={`${styles.card} ${styles.motion}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowModal1(true);
              }}
            >
              <h2>
                <span className={styles.boredGame}>{projects[1].name}</span>
              </h2>
              <p>{projects[1].description}</p>
              <br />
              <p className={styles.technologies}>{projects[1].techs}</p>
            </motion.div>
            {showModal1 && (
              <Modal
                onClose={() => setShowModal1(false)}
                name={projects[1].name}
                longDescription={projects[1].longDescription}
                url={projects[1].url}
                deployedUrl={projects[1].deployedUrl}
                techs={projects[1].techs}
                style={projects[1].style}
                font={projects[1].font}
              />
            )}
          </div>
          <div>
            <motion.div
              layout
              className={`${styles.card} ${styles.motion}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowModal2(true);
              }}
            >
              <h2>
                <span className={styles.fridgy}>{projects[2].name}</span>
              </h2>
              <p>{projects[2].description}</p>
              <br />
              <p className={styles.technologies}>{projects[2].techs}</p>
            </motion.div>
            {showModal2 && (
              <Modal
                onClose={() => setShowModal2(false)}
                name={projects[2].name}
                longDescription={projects[2].longDescription}
                url={projects[2].url}
                deployedUrl={projects[2].deployedUrl}
                techs={projects[2].techs}
                style={projects[2].style}
                font={projects[2].font}
              />
            )}
          </div>
          <div>
            <motion.div
              layout
              className={`${styles.card} ${styles.motion}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowModal3(true);
              }}
            >
              <h2>
                <span className={styles.sproutsweeper}>{projects[0].name}</span>
              </h2>
              <p>{projects[0].description}</p>
              <br />
              <p className={styles.technologies}>{projects[0].techs}</p>
            </motion.div>
            {showModal3 && (
              <Modal
                onClose={() => setShowModal3(false)}
                name={projects[0].name}
                longDescription={projects[0].longDescription}
                url={projects[0].url}
                deployedUrl={projects[0].deployedUrl}
                techs={projects[0].techs}
                style={projects[0].style}
                font={projects[0].font}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
