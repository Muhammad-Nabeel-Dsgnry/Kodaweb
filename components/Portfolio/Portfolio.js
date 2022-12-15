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
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true
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
    rtl: true
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
  };

  return (
    <>
      <section className={styles.portfolio_section}>
        <Container>
          <Row>
            <Col>
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

          {/* <Row>
          <Stack direction="horizontal" gap={0} className='justify-content-between w-100'>          
            <div className={`${styles['testimonial']}`}>
            <div className={`${styles['box']}`}>
              <div className={`${styles.overlay}`}>
                  <div style={{display:'flex',justifyContent:'center', color: '#fff', alignItems:'center', height:'100%'}}>
                  <Image
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
            <div>
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio2.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/gallery.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio3.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio4.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio5.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
          </Stack>
          <Stack direction="horizontal" gap={0} className='justify-content-between w-100'>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio6.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
                <div className={`${styles['portfolioHover']}`}></div>
            </div>
            <div>
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio7.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio8.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio9.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio10.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
          </Stack>
          <Stack direction="horizontal" gap={0} className='justify-content-between w-100'>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio11.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
                <div className={`${styles['portfolioHover']}`}></div>
            </div>
            <div>
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio12.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio13.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio14.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
            <div className="">
            <Image
                  className={`${styles['portfolioImage']}`}
                  src='/Assets/Assets/For Web/portfolio15.png'
                  alt='portfolio1'
                  width='383'
                  height='334'
                  data-fancybox="gallery"
                  data-src='/Assets/Assets/For Web/one.jpg'
                />
            </div>
          </Stack>
            </Row> */}
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