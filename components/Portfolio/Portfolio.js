import React from 'react'
import styles from './Portfolio.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import Link from 'next/link';
import Slider from "react-slick";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import HomePortfolio1 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-1.jpg'
import HomePortfolio2 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-2.jpg' 
import HomePortfolio3 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-3-main.jpg' 
import HomePortfolio4 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-4-main.jpg' 
import HomePortfolio5 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-5-main.jpg' 
import HomePortfolio6 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-6-main.jpg' 
import HomePortfolio7 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-7.jpg' 
import HomePortfolio8 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-8.jpg' 
import HomePortfolio9 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-9.jpg' 
import HomePortfolio10 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-10.jpg' 
import HomePortfolio11 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-11-main.jpg'
import HomePortfolio12 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-12-main.jpg'
import HomePortfolio13 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-13.jpg'
import HomePortfolio14 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-14.jpg'
import HomePortfolio15 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-15-main.jpg'
import HomePortfolio16 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-16.jpg'
import HomePortfolio17 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-17.jpg'
import HomePortfolio18 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-18-main.jpg'
import HomePortfolio19 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-19.jpg'
import HomePortfolio20 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-20.jpg'
import HomePortfolio21 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-21-main.jpg'
import HomePortfolio22 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-22.jpg'
import HomePortfolio23 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-23-main.jpg'
import HomePortfolio24 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-24.jpg'
import HomePortfolio25 from '../../public/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-25-main.jpg'
import overlayRightImage from "../../public/Assets/Assets/For-web/right-border.png";
import overlayLeftImage from "../../public/Assets/Assets/For-web/left-border.png";


const Portfolio = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          autoplay: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: true,
          autoplay: true,
        }
      },
    ]
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: true,
          autoplay: true,
        }
      },
    ]
  };

  const settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: true,
          autoplay: true,
        }
      },
    ]
  };

  return (
    <>
      <section className={styles.portfolio_section}>
        <Container>
          <Row>
            <Col className={styles.portfolioCol}>
              <div className='w-50'>
                <h3 className={styles.lineTitle} >Our Portfolio</h3>
                <h2 className={styles.mainTitle} >Our Latest Project<span className={styles.dot}>.</span></h2>
                <p className={`${styles['Para']} ${styles['colorBlack']}`} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid='true' className='pt-5 p-0'>
          <Slider {...settings}>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                  <div className={`${styles['topLineOne']}`}></div>
                <div className={`${styles.overlay}`}>
                <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                      alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-1.jpg'
                      />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio1}
                  alt='HomePortfolio-1'
                  width='383'
                  height='334'
                />
              </div>
              <div className={`${styles['topLineTwo']}`}></div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-2.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio2}
                  alt='HomePortfolio-2'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-3-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio3}
                  alt='HomePortfolio-3'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-4-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio4}
                  alt='HomePortfolio-4'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-5-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio5}
                  alt='HomePortfolio-5'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-6-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio6}
                  alt='HomePortfolio-6'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-7.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio7}
                  alt='HomePortfolio-7'
                  width='383'
                  height='334'
                />
              </div>
            </div>
          </Slider>

          <Slider {...settings2}>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-8.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio8}
                  alt='HomePortfolio-8'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-9.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio9}
                  alt='HomePortfolio-9'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-10.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio10}
                  alt='HomePortfolio-10'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-11-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio11}
                  alt='HomePortfolio-11'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-12-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio12}
                  alt='HomePortfolio-12'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-13.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio13}
                  alt='HomePortfolio-13'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-14.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio14}
                  alt='HomePortfolio-14'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-15-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio15}
                  alt='HomePortfolio-15'
                  width='383'
                  height='334'
                />
              </div>
            </div>
          </Slider>
          <Slider {...settings3}>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-16.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio16}
                  alt='HomePortfolio-16'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-17.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio17}
                  alt='HomePortfolio-17'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-18-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio18}
                  alt='HomePortfolio-18'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-19.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio19}
                  alt='HomePortfolio-19'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-20.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio20}
                  alt='HomePortfolio-20'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-21-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio21}
                  alt='HomePortfolio-21'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-22.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio22}
                  alt='HomePortfolio-22'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-23-deatil.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio23}
                  alt='HomePortfolio-23'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-24.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio24}
                  alt='HomePortfolio-24'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ position: "relative", padding: "10px" }}>
                      <Image
                        src={overlayRightImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginLeft: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                        }}
                      />
                    </div>
                  <div style={{ display: "flex",
                        justifyContent: "center",
                        color: "#fff",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0", }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For-web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For-web/home-portfolio/Kodaweb-home-portfolio-25-detail.jpg'
                    />
                  </div>
                  <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={overlayLeftImage}
                        alt="overlay right border"
                        width={100}
                        height={100}
                        className={`${styles["overlayBorder"]} ${styles["overlayBorder"]}`}
                        style={{
                          marginRight: "auto",
                          display: "block",
                          transform: "rotate(0deg)",
                          position: "relative",
                        }}
                      />
                    </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src={HomePortfolio25}
                  alt='HomePortfolio-25'
                  width='383'
                  height='334'
                />
              </div>
            </div>
          </Slider>
          <Link href='/work' className={styles.blueButton}>
            See More Designs
          </Link>
          {/* <Button className={styles.blueButton}>See More Designs</Button> */}
        </Container>
      </section>
    </>
  )
}

export default Portfolio