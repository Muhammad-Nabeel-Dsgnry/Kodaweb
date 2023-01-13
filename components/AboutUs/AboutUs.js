import React from 'react'
import styles from './AboutUs.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <section className={styles.homeAboutUsSection}>
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              <div className='w-80'>
                <h3 className={styles.lineTitle} >About Us</h3>
                <h2 className={styles.mainTitle} >Dreamit Is The Best IT Agency In World<span className={styles.dot}>.</span></h2>
                <p className={styles.Para} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.</p>
                {/* <Button className={`${styles['homeAboutUsSectionButton']} ${styles['blueButton']}`}>More Details</Button> */}
                <Link href='/about' className={`${styles['homeAboutUsSectionButton']} ${styles['blueButton']}`}>
                  More Details
                </Link>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <Image
                className={styles.homeAboutUsSectionImage}
                src='/Assets/Assets/For-web/Kodaweb-About-Us-Home-Section.png'
                alt='kodaweb-about-us'
                width='646'
                height='632'
              />
              <div className={styles.homeAboutUsExperienceSection}>
                <h2 calssName={styles.AboutUsExperienceTitle}>05+ Year Experience</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutUs