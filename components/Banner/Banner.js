import styles from "./Banner.module.css";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ h1Text, h2Text, paraText, classses, bannerContentClass, children }) => {
  return <div className={`${styles['banner']} ${classses ? classses : ''}`}>
    <div className={`${styles['banner-content']} ${bannerContentClass ? bannerContentClass : ''}`}>
      {h1Text && <h1 data-aos="zoom-in" data-aos-duration="2000">{h1Text}</h1>}
      {h2Text && <h2>{h2Text}</h2>}
      {paraText && <p className="my-5" data-aos="fade-down" data-aos-duration="2500">{paraText}</p>}
      <Button size='lg' variant="outline-light" className={`${styles['banner-btn']}`} data-aos="zoom-in" data-aos-duration="3000">
        Get Started
      </Button>
      {children}

      <div className={styles.homeBannersocial}>
        <Link href='#' data-aos="fade-down" data-aos-duration="1000">
          <Image
            className="me-4 my-4"
            src='/Assets/Assets/For Web/facebook.svg'
            alt="banner social media icon"
            width='30'
            height='30'
          />
        </Link>
        <Link href='#' data-aos="fade-down" data-aos-duration="1000">
          <Image
            className="me-4 my-4"
            src='/Assets/Assets/For Web/Dribble.svg'
            alt="banner social media icon"
            width='30'
            height='30'
          />
        </Link>
        <Link href='#' data-aos="fade-down" data-aos-duration="1000">
          <Image
            className="me-4 my-4"
            src='/Assets/Assets/For Web/Twitter.svg'
            alt="banner social media icon"
            width='30'
            height='30'
          />
        </Link>
        <Link href='#' data-aos="fade-down" data-aos-duration="1000">
          <Image
            className="me-4 my-4"
            src='/Assets/Assets/For Web/Linked In.svg'
            alt="banner social media icon"
            width='30'
            height='30'
          />
        </Link>
        <Link href='#' >
          <p className={`${styles['homeBannerScrollText']}`}>Scroll Down</p>
        </Link>
        <Link href=''>
          <Image
              className={`${styles['homeBannerScrollIcon']} ${'me-4 my-4'}`}
              src='/Assets/Assets/For Web/Scroll-down-Arrow (2).svg'
              alt="banner social media icon"
              width='30'
              height='30'
          />
        </Link>
      </div>

    </div>
  </div>
};

export default Banner;