import React from "react";
import styles from "./FavoriteBook.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "react-tooltip";

export default function FavoriteBook({ book, addToFavoriteList }) {
  const deleteHandler = () => {
    addToFavoriteList(book.id);
  };
  return (
    <>
      <div className={styles.FavoriteBook}>
        <a href={book.link} target="-blank">
          <img src={book.img} />
        </a>
        <p>{book.title}</p>
        <FontAwesomeIcon
          icon={faCircleXmark}
          id={styles.CircleXmark}
          onClick={deleteHandler}
        />
      </div>
      <div className={styles.imageSmall}>
        <a
          data-tooltip-id="toolF"
          data-tooltip-content={book.title}
          data-tooltip-place="bottom"
        >
          <img src={book.img} />
        </a>
        <Tooltip
          id="toolF"
          style={{
            width: "80px",
            backgroundColor: "#00000078",
            fontSize: "10px",
            textAlign: "center",
            borderRadius: "20px",
          }}
        />

        <FontAwesomeIcon
          icon={faCircleXmark}
          id={styles.CircleXmark}
          onClick={deleteHandler}
        />
      </div>
    </>
  );
}
