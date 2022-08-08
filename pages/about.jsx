import styles from '../styles/about.module.css'
import Nav from '../components/nav/nav'

export default function About () {
    return (
        <div className={styles.container}>
            <Nav/>
            <h1>About</h1>
        </div>
    )
} 