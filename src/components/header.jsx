import Link from "next/link"

export default function Header() {
  return (
    <>
    <nav>
    {/* <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/"> */}
    <Link href="/">
        Home
      </Link>
 
      <Link
        href="/about"
      >
        About
      </Link>
      <Link href="/music">
        Music
      </Link>
      <Link href="/contact">
        Contact
      </Link>
    </nav>
    </>
  )
}
