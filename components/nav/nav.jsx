import styles from './nav.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div className={styles.titleContainer}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={'/'}>
              <h1 className={styles.title}>Jamie Pantling</h1>
            </Link>
          </motion.div>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={'/contact'}>Get in touch</Link>
        </motion.div>
      </div>
    </div>
  );
}
