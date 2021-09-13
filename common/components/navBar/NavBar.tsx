import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { useRouter } from "next/dist/client/router";
interface Props {}

export default function NavBar({}: Props): ReactElement {
  const { query } = useRouter();
  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.navBar}>
        <div className={styles.brand}>B</div>
        <div className={styles.menuItemGroup}>
          <Link href="/?mode=about">
            <a className={isActive("about")}>All</a>
          </Link>
          <Link href="/?mode=skills">
            <a className={isActive("skills")}>Skills</a>
          </Link>
          <Link href="/?mode=contact">
            <a className={isActive("contact")}>Contact</a>
          </Link>
          <Link href="/?mode=careers">
            <a className={isActive("careers")}>Careers</a>
          </Link>
          <Link href="/?mode=edu">
            <a className={isActive("edu")}>Education</a>
          </Link>
        </div>
      </div>
    </div>
  );

  function isActive(mode: string): string {
    return query.mode === mode
      ? styles.menuItem + " " + styles.active
      : styles.menuItem;
  }
}
