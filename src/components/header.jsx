import Link from "next/link"
import localFont from 'next/font/local'
import styles from "./header.module.css"

const titleFont = localFont({ src: '../../public/fonts/titlefont48.otf' })

export default function Header() {
  return (
    <>
    <div className={styles.header}>
    <div className={styles.title}>
    <h1 className={titleFont.className}>Karin Hawksworth</h1>
    </div>
    <nav className={styles.nav}>
    {/* <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/"> */}
    <Link href="/" className={styles.link}>
        home
      </Link>
 
      <Link className={styles.link}
        href="/about"
      >
        about
      </Link>
      <Link className={styles.link} href="/music">
        music
      </Link>
      <Link className={styles.link} href="/contact">
        contact
      </Link>
    </nav>
    </div>
    </>
  )
}
