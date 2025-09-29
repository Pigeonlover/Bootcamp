//
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        EXAMPLE SITE
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/staff"}>Staff</Link>
        </nav>
      </header>
    </>
  );
}
