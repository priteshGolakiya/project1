import React from "react";
import styles from "../styles/layout/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const toggleMenuClicked = () => {
    const body = document.body;
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");

    body.classList.toggle(styles.open);

    if (body.classList.contains(styles.open)) {
      openIcon.style.display = "none";
      closeIcon.style.display = "flex"; // Added semicolon here
    } else {
      openIcon.style.display = "flex";
      closeIcon.style.display = "none"; // Added semicolon here
    }
  };

  return (
    <nav className={styles["navigation-menu"]}>
      <div
        className={styles["navigation-menu__overlay"]}
        onClick={toggleMenuClicked}
      ></div>
      <button
        type="button"
        className={styles["hamburger-menu"]}
        onClick={toggleMenuClicked}
      >
        <span className="material-icons" id="open-icon">
          menu
        </span>
        <span className="material-icons" id="close-icon">
          close
        </span>
      </button>
      <img
        src={"https://real-estate-web.pages.dev/logo.png"}
        alt="logos"
        className={styles["site-identity-logo"]}
      ></img>
      <section className={styles["navigation-menu__labels"]}>
        <NavLink className={styles["link"]} to="/" style={{ color: "#c5c5c5" }}>
          Residencies
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/about"
          style={{ color: "#c5c5c5" }}
        >
          Our Value
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/blog"
          style={{ color: "#c5c5c5" }}
        >
          Contact Us
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/pages"
          style={{ color: "#c5c5c5" }}
        >
          Get Started
        </NavLink>

        <div className={styles["button"]}>Contact</div>
      </section>
    </nav>
  );
};

export default Navbar;
