import {useState} from 'react'
import styles from './Contact.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import InnerPagesBanner from '../InnerPagesBanner/InnerPagesBanner';
import Link from 'next/link';

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <>
      <section className={styles.formSection}>
        <Container>
          <Row>
            <Col lg={7}>
              <div className='w-100'>
                <h3 className={styles.lineTitle} >Let's Talk</h3>
                <h2 className={styles.mainTitle} >Looking For Fresh Ideas?</h2>
                <p className={`${styles['Para']} ${styles['contactSectionPara']}`} >Just say hello. We would love to learn about your goals and brainstorm ideas together.</p>
              </div>
              <Row>
                <Col>
                  <div className='w-75 mt-5'>
                    <div className='mb-4'>
                      <span className={styles.formSectionImageWrapper}>
                        <Image
                          alt='contact icons'
                          className={styles.formSectionIcon}
                          src='/Assets/Assets/For-web/location-icon.svg'
                          width='22'
                          height='30'
                        />
                      </span>
                    </div>
                    <h6 className={styles.formSectionSmTitle}>Our Office:</h6>
                    <Link href='https://goo.gl/maps/eHVx2XFuBZu1Lk57A' target='_blank'>
                    <p className={styles.formSectionPara}>#15–7015 Avenue of Americas New York, NY L5S 1T7</p>
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div className='w-75 mt-5'>
                    <div className='mb-4'>
                      <span className={styles.formSectionImageWrapper}>
                        <Image
                        alt='contact icons'
                          className={styles.formSectionIcon}
                          src='/Assets/Assets/For-web/call-icon.svg'
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
                  <div className={`${'w-75 mt-5'} ${styles.formContactInfoRowTwo}`}>
                    <div className='mb-4'>
                      <span className={styles.formSectionImageWrapper}>
                        <Image
                        alt='contact icons'
                          className={styles.formSectionIcon}
                          src='/Assets/Assets/For-web/mail-icon.svg'
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
            <Col lg={5} className={`${styles['formCol']}`}>
              <form onSubmit={handleSubmit}>
              <InputGroup size="lg" className={styles.formSectionInputGroup}>
                <InputGroup.Text id="inputGroup-sizing-lg" className={`${styles['inputFieldIcon']} ${'align-self-center border-0 bg-transparent'}`}>
                  <Image
                  alt='contact icons'
                    src='/Assets/Assets/For-web/profile.svg'
                    width='25'
                    height='23'
                  />
                </InputGroup.Text>
                <Form.Control
                  className={`${styles['inputTextField']} ${'border-0'}`}
                  value={inputs.name}
                  name={'name'}
                  onChange={handleChange}
                  placeholder='Name'
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <InputGroup size="lg" className={styles.formSectionInputGroup}>
                <InputGroup.Text id="inputGroup-sizing-lg" className={`${styles['inputFieldIcon']} ${'align-self-center border-0 bg-transparent'}`}>
                  <Image
                  alt='contact icons'
                    src='/Assets/Assets/For-web/email.svg'
                    width='25'
                    height='23'
                  />
                </InputGroup.Text>
                <Form.Control
                  className={`${styles['inputTextField']} ${'border-0'}`}
                  value={inputs.email}
                  name={'email'}
                  onChange={handleChange}
                  placeholder='Email'
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <InputGroup size="lg" className={styles.formSectionInputGroup}>
                <InputGroup.Text id="inputGroup-sizing-lg" className={`${styles['inputFieldIcon']} ${'align-self-start border-0 bg-transparent pt-3'}`}>
                  <Image
                  alt='contact icons'
                    src='/Assets/Assets/For-web/message-2.svg'
                    width='25'
                    height='23'
                  />
                </InputGroup.Text>
                <Form.Control
                  className={`${styles['inputTextField']} ${'border-0'}`}
                  value={inputs.message}
                  name={'message'}
                  onChange={handleChange}
                  placeholder='Message'
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  as="textarea" rows={7}
                />
              </InputGroup>
              <Button type='submit' className={` ${styles['blueButton']} ${styles['formSubmitBtn']}`}>Send Message</Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact