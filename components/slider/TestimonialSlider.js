import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './TestimonialSlider.module.css';

const TestimonialSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.slicknext}
        style={
          {
            ...style,
            'display': 'block',
            'top': '-40%',
            'position': 'absolute',
            'right': '20px',
          }
        }
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.slickprev}
        style={
          {
            ...style,
            'display': 'block',
            'top': '-40%',
            'position': 'absolute',
            'left': '87%'
          }
        }
        onClick={onClick}
      />
    );
  }

  return (
    <div className={styles.testimonialsMainContainer} id='testimonialsId'>
      <Slider {...settings}>
        <div className={styles.testimonialsBox}>
          <div className={styles.testimonialsInnerBox}>
            <div className={styles.testimonialsBoxHeader}>
              <Image
                src='/Assets/Assets/For Web/testimonail profile 1.jpg'
                alt='client image'
                width='100'
                height='100'
              />
              <div className={styles.testimonialsBoxInfo}>
                <h3>Alan X</h3>
                <p>CEO of DIGILOG</p>
              </div>
            </div>
            <div className={styles.testimonialsBoxBody}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className='d-flex'>
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialsBox}>
          <div className={styles.testimonialsInnerBox}>
            <div className={styles.testimonialsBoxHeader}>
              <Image
                src='/Assets/Assets/For Web/testimonail profile 2.jpg'
                alt='client image'
                width='100'
                height='100'
              />
              <div className={styles.testimonialsBoxInfo}>
                <h3>Alan X</h3>
                <p>CEO of DIGILOG</p>
              </div>
            </div>
            <div className={styles.testimonialsBoxBody}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className='d-flex'>
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialsBox}>
          <div className={styles.testimonialsInnerBox}>
            <div className={styles.testimonialsBoxHeader}>
              <Image
                src='/Assets/Assets/For Web/testimonail profile 1.jpg'
                alt='client image'
                width='100'
                height='100'
              />
              <div className={styles.testimonialsBoxInfo}>
                <h3>Alan X</h3>
                <p>CEO of DIGILOG</p>
              </div>
            </div>
            <div className={styles.testimonialsBoxBody}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className='d-flex'>
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
                <Image
                  src='/Assets/Assets/For Web/star.svg'
                  alt='client-rating'
                  width='23'
                  height='23'
                  className='me-2'
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default TestimonialSlider