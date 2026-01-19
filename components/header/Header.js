import Image from "next/image";
import styles from "./Header.module.css";
import logo from "@/public/image/tasteaura-logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header>
        <div>
          <Image src={logo} alt="TasteAura Logo" width={150} height={50} />
        </div>
        <nav>
          <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                 <Link href="/about-us">About Us</Link>
            </li>
            <li>
                 <Link href="/menu">Menu</Link>
            </li>
            <li>
                <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
