import React from 'react'
import styles from './Skills.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import skillsSideImage from '../../public/Assets/Assets/For-web/Best Skill.jpg'

const Skills = () => {


  return (
    <>
      <section className={styles.homeAboutUsSection}>
        <Container>
          <Row className={`${'position-relative'}`}>
            <Col lg={6} xs={12}>
              <div className='w-80'>
                <h3 className={styles.lineTitle}>Best Skills</h3>
                <h2 className={styles.mainTitle}>Experience Team to Provide Ideas<span className={styles.dot}>.</span></h2>
                <p className={styles.Para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.</p>
              </div>

              <div className={styles.skillsMainWrapper}>
                <div className={styles.skillsContainer}>
                    <div className={`${styles['skillsSection']}`}>
                      <Row>
                        <Col md={3} xs={12}>
                        <span className={styles.skillName}>Branding & Strategy</span>
                        </Col>
                        <Col md={8} xs={10} className={styles.ProgressBarCol}>
                         <ProgressBar now={92}  className={styles['skillsProgress']}/> 
                        </Col>
                        <Col md={1} xs={2}>
                        <span className={styles.skillNumber}>92%</span>
                        </Col>
                      </Row>
                    </div>
                    <div className={`${styles['skillsSection']}`}>
                      <Row>
                        <Col md={3} xs={12}>
                        <span className={styles.skillName}>Web Development</span>
                        </Col>
                        <Col md={8} xs={10} className={styles.ProgressBarCol}>
                         <ProgressBar now={95}  className={styles['skillsProgress']} /> 
                        </Col>
                        <Col md={1} xs={2}>
                        <span className={styles.skillNumber}>95%</span>
                        </Col>
                      </Row>
                    </div>
                    <div className={`${styles['skillsSection']}`}>
                      <Row>
                        <Col md={3} xs={12}>
                        <span className={styles.skillName}>App Development</span>
                        </Col>
                        <Col md={8} xs={10} className={styles.ProgressBarCol}>
                         <ProgressBar now={90}  className={styles['skillsProgress']} /> 
                        </Col>
                        <Col md={1} xs={2}>
                        <span className={styles.skillNumber}>90%</span>
                        </Col>
                      </Row>
                    </div>
                    <div className={`${styles['skillsSection']}`}>
                      <Row>
                        <Col md={3} xs={12}>
                        <span className={styles.skillName}>Digital Marketing</span>
                        </Col>
                        <Col md={8} xs={10} className={styles.ProgressBarCol}>
                         <ProgressBar now={96}  className={styles['skillsProgress']} /> 
                        </Col>
                        <Col md={1} xs={2}>
                        <span className={styles.skillNumber}>96%</span>
                        </Col>
                      </Row>
                    </div>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <Image
                className={styles.servicesSectionImage}
                src={skillsSideImage}
                alt='Kodaweb best skills'
                width='646'
                height='632'
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Skills