import Link from "next/link";
import styles from "./NavBarLink.module.css"; // create this CSS module

export default function NavBarLink({ href, children, isActive }) {
  return (
    <li>
      <Link
        href={href}
        className={isActive ? styles.activeLink : ""}
      >
        {children}
      </Link>
    </li>
  );
}
