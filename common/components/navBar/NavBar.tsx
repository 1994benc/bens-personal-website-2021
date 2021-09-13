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
            <a
              className={
                query.mode === "about"
                  ? styles.menuItem + " " + styles.active
                  : styles.menuItem
              }
            >
              All
            </a>
          </Link>
          <Link href="/?mode=skills">
            <a
              className={
                query.mode === "skills"
                  ? styles.menuItem + " " + styles.active
                  : styles.menuItem
              }
            >
              Skills
            </a>
          </Link>
          <Link href="/?mode=contact">
            <a
              className={
                query.mode === "contact"
                  ? styles.menuItem + " " + styles.active
                  : styles.menuItem
              }
            >
              Contact
            </a>
          </Link>
          <Link href="/?mode=careers">
            <a
              className={
                query.mode === "careers"
                  ? styles.menuItem + " " + styles.active
                  : styles.menuItem
              }
            >
              Careers
            </a>
          </Link>
          <Link href="/?mode=edu">
            <a
              className={
                query.mode === "edu"
                  ? styles.menuItem + " " + styles.active
                  : styles.menuItem
              }
            >
              Education
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
