import styles from './nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className={styles.navbar}>
            <div className={styles.titleContainer}>
                <Link href={'/'}><h1 className={styles.title}>Jamie Pantling</h1></Link>
            </div>
            
            <Link className={styles.link} href={'/contact'}>Contact</Link>

        </div>
    )
}