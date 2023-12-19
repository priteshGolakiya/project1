import React from "react";
import styles from "../../styles/pages/home/Hero.module.css";
import CountUp from "react-countup";

function Hero() {
  return (
    <div className={styles["heroWrapper"]}>
      <div
        className={`${styles["paddings"]} ${styles["innerWidth"]} ${styles["flexCenter"]} ${styles["heroContainer"]}`}
      >
        {/* Left side */}
        <div className={`${styles["flexColStart"]} ${styles["heroLeft"]}`}>
          <div className={styles["orangCircle"]} />
          <div className={styles["heroTitle"]}>
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className={`${styles["flexColStart"]} ${styles["heroDes"]}`}>
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className={`${styles["searchBar"]}`}>
            <input type="text" />
          </div>
          <div className={`${styles["flexCenter"]}`}>
            <div className={`${styles["flexColStart"]} ${styles["stats"]}`}>
              <span>
                <CountUp end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className={`${styles["secondaryText"]}`}>
                Premium Product
              </span>
            </div>
            <div className={`${styles["flexColStart"]} ${styles["stats"]}`}>
              <span>
                <CountUp end={2000} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Customer</span>
            </div>
            <div className={`${styles["flexColStart"]} ${styles["stats"]}`}>
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span>Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className={`${styles["flexCenter"]} ${styles["heroRight"]}`}>
          <div className={styles["imageContainer"]}>
            <img
              src="https://real-estate-web.pages.dev/hero-image.png"
              alt="heroImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
