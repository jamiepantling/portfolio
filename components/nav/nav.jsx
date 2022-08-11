import styles from './nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className={styles.navbar}>
            <Link href={'/'}><a ><h1 className={styles.title}>Jamie Pantling</h1></a></Link>
            <ul className={styles.linksList}>
                {/* <li className={styles.link}><Link href={'/about'}><a>About</a></Link></li> */}
                <li className={styles.link}><Link href={'/contact'}><a>Contact</a></Link></li>
            </ul>
        </div>
    )
}