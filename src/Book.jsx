import { useState } from "react";
import styles from "./Book.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartregular } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starregular } from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "react-tooltip";

function Book({ info, addToFavoriteList }) {
  const likeHandler = () => {
    addToFavoriteList(info.id);
  };
  return (
    <div className={styles.Book}>
      <div className={styles.bookImage}>
        <a href={info.link} target="-blank">
          <img src={info.img} />
        </a>
      </div>
      <div className={styles.bookInformatoin}>
        <h4>{info.title}</h4>
        <div>
          <p>
            <b>Year:</b> {info.year}
          </p>
          <p>
            <b>Developer:</b> {info.developer}
          </p>
          <p>
            <b>Publisher:</b> {info.publisher}
          </p>

          <p>
            <b>Genre:</b> {info.genre}{" "}
          </p>
        </div>
      </div>
      <div className={styles.like}>
        <FontAwesomeIcon
          id={styles.heart}
          icon={info.status === 1 ? starSolid : starregular}
          onClick={likeHandler}
          style={{
            color: info.status === 1 ? "#99FF66" : "white",
          }}
        />

        {/*<FontAwesomeIcon
          id={styles.heart}
          icon={info.status === 1 ? heartSolid : heartregular}
          onClick={likeHandler}
          style={{
            color: info.status === 1 ? "#99FF66" : "white",
          }}
        />*/}
      </div>
    </div>
  );
}

export default Book;
