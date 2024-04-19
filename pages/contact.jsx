import styles from '../styles/contact.module.css';
import Head from 'next/head';
import Nav from '../components/nav/nav';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import toast from '../components/toast/toast';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('./api/contact', {
      method: 'post',
      body: JSON.stringify({ name, email, message }),
    }).then((response) => {
      console.log(response);

      setName('');
      setEmail('');
      setMessage('');

      return response.status == 200
        ? notify('success', '👍 Thanks for your message!')
        : notify(
            'error',
            "Sorry, there's been an error. Please get in touch on LinkedIn or Twitter."
          );
    });
  };

  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jamie Pantling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <motion.div
        className={styles.contactContainer}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1>Get in touch!</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="name..."
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              placeholder="email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="message..."
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.button}
              type="submit"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
