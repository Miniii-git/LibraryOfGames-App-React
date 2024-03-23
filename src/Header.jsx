import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Header() {
  return (
    <div className={styles.Header}>
      <h1>
        <IoGameControllerOutline id={styles.bookIcon} /> 2D Games{" "}
        <MdOutlineStarPurple500 style={{ fontSize: "14px" }} />
      </h1>
      <div id={styles.Mini}>
        <a href="#" target="-blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Made By Mini
        </a>{" "}
        <span>| React.js</span>
      </div>
      {/*<div class={styles.ro}>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </div>*/}
    </div>
  );
}

export default Header;
