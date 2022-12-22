import React from 'react'
import styles from './Skills.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {


  return (
    <>
      <section className={styles.homeAboutUsSection}>
        <Container>
          <Row>
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
                        <Col md={4} xs={12}>
                        <span className={styles.skillName}>UX UI Designing</span>
                        </Col>
                        <Col md={7} xs={12} className={styles.ProgressBarCol}>
                         <ProgressBar now={82}  className={styles['skillsProgress']} /> 
                        </Col>
                        <Col md={1} xs={2}>
                        <span className={styles.skillNumber}>82%</span>
                        </Col>
                      </Row>
                    </div>
                    <div className={`${styles['skillsSection']}`}>
                      <Row>
                        <Col md={4} xs={12}>
                        <span className={styles.skillName}>Web Development</span>
                        </Col>
                        <Col md={7} xs={12} className={styles.ProgressBarCol}>
                         <ProgressBar now={78}  className={styles['skillsProgress']} /> 
                        </Col>
                        <Col md={1} xs={2}>
                        <span className={styles.skillNumber}>78%</span>
                        </Col>
                      </Row>
                    </div>
                    <div className={`${styles['skillsSection']}`}>
                      <Row>
                        <Col md={4} xs={12}>
                        <span className={styles.skillName}>Product Development</span>
                        </Col>
                        <Col md={7} xs={12} className={styles.ProgressBarCol}>
                         <ProgressBar now={80}  className={styles['skillsProgress']} /> 
                        </Col>
                        <Col md={1} xs={2}>
                        <span className={styles.skillNumber}>80%</span>
                        </Col>
                      </Row>
                    </div>
                    <div className={`${styles['skillsSection']}`}>
                      <Row>
                        <Col md={4} xs={12}>
                        <span className={styles.skillName}>Software Development</span>
                        </Col>
                        <Col md={7} xs={12} className={styles.ProgressBarCol}>
                         <ProgressBar now={65}  className={styles['skillsProgress']} /> 
                        </Col>
                        <Col md={1} xs={2}>
                        <span className={styles.skillNumber}>65%</span>
                        </Col>
                      </Row>
                    </div>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <Image
                className={styles.servicesSectionImage}
                src='/Assets/Assets/For Web/Best Skill.jpg'
                alt='best skills'
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