import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./StudyWays.module.css";

export default function StudyWays({ data, title }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "slides",
  };
  return (
    <section id="studyWays" className={styles.studyWays}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        <Slider {...settings}>
          {data.map((item) => (
            <li className={styles.listItem} key={item.id}>
              {item.img ? (
                <img width="370" height="370" src={item.img} alt={item.name} />
              ) : (
                ""
              )}
              {item.name ? <p className={styles.name}>{item.name}</p> : ""}
            </li>
          ))}
        </Slider>
      </ul>
    </section>
  );
}
