import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import connectMongo from '../utils/connectMongo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from '../styles/Home.module.css';
import Modal from '../components/modal/modal';
import { useState } from 'react';
const Project = require('../models/Project');
import Nav from '../components/nav/nav';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticProps = async () => {
  await connectMongo();
  console.log('Connected to Mongo 👍');
  let projects = await Project.find().lean();
  projects.forEach(
    (project) => (project._id = project._id.toString())
  );
  projects.sort((a, b) => a.order - b.order);
  return { props: { projects } };
};

export default function Home({ projects }) {
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

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
            default: {
              duration: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: 'spring',
              damping: 10,
              stiffness: 70,
              restDelta: 0.001,
              duration: 0.05,
            },
          }}
        >
          <div className={styles.description}>
            <div className={styles.descriptionText}>
              <h2 className={styles.hey}>Hey, I&apos;m Jamie 👋 </h2>
              <br />
              <p>
                I&apos;m a full-stack developer
                <br /> in Toronto.
              </p>
            </div>
          </div>
          <div className={styles.picContainer}>
            <Image
              className={styles.image}
              alt="Jamie Pantling"
              src="/me.jpg"
              height="300px"
              width="300px"
              priority
            />
            <div className={styles.icons}>
              <motion.div
                className={styles.twitter}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://twitter.com/jamiepantling">
                  {' '}
                  <FontAwesomeIcon icon={brands('twitter')} />
                </a>
              </motion.div>
              <motion.div
                className={styles.linkedin}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://linkedin.com/in/jamie-pantling">
                  <FontAwesomeIcon icon={brands('linkedin')} />
                </a>
              </motion.div>
              <motion.div
                className={styles.github}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://github.com/jamiepantling">
                  <FontAwesomeIcon icon={brands('github')} />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className={styles.grid}>
          <h2 className={styles.subtitle}>I built:</h2>
          <div className={styles.gridSubcontainer}>
            {projects.map((project) => {
              return (
                <div
                  key={project.order}
                  className={styles.cardContainer}
                >
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
                    style={{}}
                    whileHover={{ scale: 1.05, zIndex: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProps({
                        name: `${project.name}`,
                        longDescription: `${project.longDescription}`,
                        url: `${project.url}`,
                        deployedUrl: `${project.deployedUrl}`,
                        techs: `${project.techs}`,
                        style: `${project.style}`,
                        font: `${project.font}`,
                      });
                      setShowModal(true);
                    }}
                  >
                    <div className="cardTitleDescContainer">
                      <h2>
                        <span
                          style={{ fontFamily: `${project.font}` }}
                        >
                          {project.name}
                        </span>
                      </h2>
                      <p>{project.description}</p>
                    </div>
                    <p className={styles.technologies}>
                      {project.techs}
                    </p>
                  </motion.div>
                  <AnimatePresence>
                    {showModal && (
                      <Modal
                        key="modal"
                        onClose={() => setShowModal(false)}
                        name={modalProps.name}
                        longDescription={modalProps.longDescription}
                        url={modalProps.url}
                        deployedUrl={modalProps.deployedUrl}
                        techs={modalProps.techs}
                        style={modalProps.style}
                        font={modalProps.font}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div>
            I also make beautiful, user-centred Wordpress websites,
            plugins and themes for cultural non-profits with{' '}
            <a href="https://surfaceimpression.digital">
              Surface Impression
            </a>
            .
          </div>
          <Link className={styles.link} href={'/contact'}>
            Get in touch
          </Link>
        </div>
      </main>
    </div>
  );
}
