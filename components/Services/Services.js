import React from 'react'
import styles from './Services.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Link from 'next/link';
 

const Services = (props) => {

  const { isTwoRows } = props

  return (
    <>
        <section className={styles.home_services_section}>
          <Container>
            <Row>
              <Col className={styles.content_Section}>
                <div className='w-50'>
                  <h3 className={styles.lineTitle}>Our Services</h3>
                  <h2 className={styles.mainTitle}>Design Creative That Generate Result<span className={styles.dot}>.</span></h2>
                  <p className={`${styles['Para']} ${styles['colorBlack']}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.</p>
                </div>
              </Col>
            </Row>
            <Row className={`${styles.cardRow} ${'mt-5'}`}>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-down" data-aos-duration="1000">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/Branding-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>Branding & Identity</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-down" data-aos-duration="1500">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/web-development-blue.svg" width='60' height='60' alt='Kodaweb Web Development' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>Web Development</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-down" data-aos-duration="2000">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/Web-App-blue.svg" width='60' height='60' alt='Kodaweb Web Application' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>Web Application</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-down" data-aos-duration="2500">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/Graphic-blue.svg" width='60' height='60' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>Video Production</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {
              isTwoRows == 'false' ?
              null
              :
            <Row className={`${styles.cardRow} ${'mt-5 pt-4 mb-5'}`}>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-up" data-aos-duration="1000">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/UX-UI-blue.svg" width='60' height='60' alt='Kodaweb UI/UX Designing' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>UI/UX Designing</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-up" data-aos-duration="1500">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/Digital-marketing-blue.svg" width='60' height='60' alt='Kodaweb Digital Marketing' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>Digital Marketing</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-up" data-aos-duration="2000">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/SEO-blue.svg" width='60' height='60' alt='Kodaweb SEO & Content Writing' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>SEO & Content Writing</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-up" data-aos-duration="2500">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/App-Dev-blue.svg" width='60' height='60' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>App Development</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            }
            

            {
              isTwoRows == 'false' ?
              <Link href='/services' className={styles.blueButton}>
                View More
              </Link>
              :
              null
            }
          </Container>
        </section>
    </>
  )
}

export default Services