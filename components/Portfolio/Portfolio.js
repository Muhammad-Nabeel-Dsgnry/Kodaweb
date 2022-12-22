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
          slidesToShow: 2,
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
          slidesToShow: 2,
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
          slidesToShow: 2,
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
                <h3 className={styles.lineTitle}>Our Portfolio</h3>
                <h2 className={styles.mainTitle}>Our Latest Project<span className={styles.dot}>.</span></h2>
                <p className={`${styles['Para']} ${styles['colorBlack']}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid='true' className='pt-5 p-0'>
          <Slider {...settings}>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio1.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio2.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio3.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio4.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio5.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio6.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio7.png'
                  alt='portfolio1'
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
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio1.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio2.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio3.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio4.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio5.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio6.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio7.png'
                  alt='portfolio1'
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
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio1.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio2.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio3.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio4.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio5.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio6.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                />
              </div>
            </div>
            <div className={`${styles['testimonial']}`}>
              <div className={`${styles['box']}`}>
                <div className={`${styles.overlay}`}>
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                    <Image
                    alt='portfolio'
                      src='/Assets/Assets/For Web/cross.svg'
                      width='20'
                      height='20'
                      data-fancybox="gallery"
                      data-src='/Assets/Assets/For Web/one.jpg'
                    />
                  </div>
                </div>
                <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio7.png'
                  alt='portfolio1'
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