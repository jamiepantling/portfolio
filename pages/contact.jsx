import styles from "../styles/contact.module.css";
import Head from "next/head";
import Nav from "../components/nav/nav";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  // useEffect() {
    
  // }

  const onSubmit = (data) => {
    setName(data.name);
    setEmail(data.email);
    setMessage(data.message);
    fetch("./api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    setSuccess("Message sent. Thanks!");
  };
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="name..."
              {...register("name", { required: true })}
            />
            <input
              className={styles.input}
              placeholder="email..."
              {...register("email", { required: true })}
            />
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="message..."
              {...register("message", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

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

        <motion.div layout className={styles.success}>
          {success}
        </motion.div>
      </motion.div>
    </div>
  );
}
