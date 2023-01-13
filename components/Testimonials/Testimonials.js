import React from 'react'
import styles from './Testimonials.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TestimonialSlider from '../slider/TestimonialSlider';



const Testimonials = () => {
  return (
    <>
      <section className={styles.testimonialsSection}>
          <Container>
            <Row>
              <Col className={styles.testimonialsCol}>
              <div className='w-50'>
                <h3 className={styles.lineTitle} >Testimonial</h3>
                <h2 className={styles.mainTitle} >What Our Clients Say<span className={styles.dot}>.</span></h2>
                <p className={styles.Para} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.</p>
              </div>
              </Col>
            </Row>

            <Row className={`${'mt-5'} ${styles.TestimonialSliderRow}`}>
             <TestimonialSlider />
            </Row>
          </Container>
        </section>
    </>
  )
}

export default Testimonials