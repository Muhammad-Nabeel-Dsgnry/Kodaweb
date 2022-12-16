import React from 'react'
import styles from './Contact.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import InnerPagesBanner from '../InnerPagesBanner/InnerPagesBanner';


const Contact = () => {
  return (
    <>
      <section className={styles.formSection}>
        <Container>
          <Row>
            <Col lg={7}>
              <div className='w-100'>
                <h3 className={styles.lineTitle}>Lets Talk</h3>
                <h2 className={styles.mainTitle}>Have a project you ‘re intrested in discussing with us?</h2>
                <p className={styles.Para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.</p>
              </div>
              <Row>
                <Col>
                  <div className='w-75 mt-5'>
                    <div className='mb-4'>
                      <span className={styles.formSectionImageWrapper}>
                        <Image
                        alt='contact icons'
                          className={styles.formSectionIcon}
                          src='/Assets/Assets/For Web/location(Bold).svg'
                          width='22'
                          height='30'
                        />
                      </span>
                    </div>
                    <h6 className={styles.formSectionSmTitle}>Our Office:</h6>
                    <p className={styles.formSectionPara}>#15–7015 Avenue of Americas New York, NY L5S 1T7</p>
                  </div>
                </Col>
                <Col>
                  <div className='w-75 mt-5'>
                    <div className='mb-4'>
                      <span className={styles.formSectionImageWrapper}>
                        <Image
                        alt='contact icons'
                          className={styles.formSectionIcon}
                          src='/Assets/Assets/For Web/call(Bold).svg'
                          width='22'
                          height='30'
                        />
                      </span>
                    </div>
                    <h6 className={styles.formSectionSmTitle}>Contact Us:</h6>
                    <p className={`${styles['formSectionPara']} ${styles['formSectionContact']}`}>
                      <a className='mb-2' href='tel:+1-870-555-000'>+1-870-555-000</a>
                      <a href='tel:+1-800-505-080'>+1-800-505-080</a>
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className='w-75 mt-5'>
                    <div className='mb-4'>
                      <span className={styles.formSectionImageWrapper}>
                        <Image
                        alt='contact icons'
                          className={styles.formSectionIcon}
                          src='/Assets/Assets/For Web/mail(Bold).svg'
                          width='22'
                          height='30'
                        />
                      </span>
                    </div>
                    <h6 className={styles.formSectionSmTitle}>Mail Us:</h6>
                    <p className={`${styles['formSectionPara']} ${styles['formSectionContact']}`}>
                      <a className='mb-2' href='mailto:Support@logodsgnry.com'>Support@logodsgnry.com</a>
                      <a href='mailto:info@logodsgnry.com'>info@logodsgnry.com</a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <InputGroup size="lg" className={styles.formSectionInputGroup}>
                <InputGroup.Text id="inputGroup-sizing-lg" className={styles.inputFieldIcon}>
                  <Image
                  alt='contact icons'
                    src='/Assets/Assets/For Web/profile.svg'
                    width='25'
                    height='23'
                  />
                </InputGroup.Text>
                <Form.Control
                  className={styles.inputTextField}
                  placeholder='Name'
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <InputGroup size="lg" className={styles.formSectionInputGroup}>
                <InputGroup.Text id="inputGroup-sizing-lg" className={styles.inputFieldIcon}>
                  <Image
                  alt='contact icons'
                    src='/Assets/Assets/For Web/email.svg'
                    width='25'
                    height='23'
                  />
                </InputGroup.Text>
                <Form.Control
                  className={styles.inputTextField}
                  placeholder='Email'
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <InputGroup size="lg" className={styles.formSectionInputGroup}>
                <InputGroup.Text id="inputGroup-sizing-lg" className={styles.inputFieldIcon}>
                  <Image
                  alt='contact icons'
                    src='/Assets/Assets/For Web/message-2.svg'
                    width='25'
                    height='23'
                  />
                </InputGroup.Text>
                <Form.Control
                  className={`${styles['inputTextField']}`}
                  placeholder='Message'
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  as="textarea" rows={9}
                />
              </InputGroup>
              <Button className={` ${styles['blueButton']} ${styles['formSubmitBtn']}`}>Send Message</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact