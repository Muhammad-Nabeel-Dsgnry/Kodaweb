import React from 'react'
import styles from './Services.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Image from 'next/image';
import Link from 'next/link';
// import BrandingIcon from '../../public/Assets/Assets/For-web/Branding-icon.png'
// import WebDevelopmentIcon from '../../public/Assets/Assets/For-Web/web-dev-icon.png'
// import WebApplicationIcon from '../../public/Assets/Assets/For-Web/web-app-icon.png'
// import GraphicIcon from '../../public/Assets/Assets/For-Web/video-production-icon.png'
// import UiUxIcon from '../../public/Assets/Assets/For-Web/Ui-icon.png'
// import DigitalMarketingIcon from '../../public/Assets/Assets/For-Web/Digital-marketing-icon.png'
// import Seo_ContentWritingIcon from '../../public/Assets/Assets/For-Web/Seo-icon.png'
// import AppDevelopmentIcon from '../../public/Assets/Assets/For-Web/app-dev-icon.png'
 

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
            <Row className={`${styles.cardRow} ${'mt-5'} ${styles['desktopScreenServicesSection']}`}>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-down" data-aos-duration="1000">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For-web/Branding-blue-2.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                    {/* <Image src={BrandingIcon} width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} /> */}
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
                    <Card.Img variant="top" src="/Assets/Assets/For-web/web-development-blue-2.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                    {/* <Image src={WebDevelopmentIcon} width='60' height='60' alt='Kodaweb Web Development' className={styles.serviceCardImage} /> */}
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
                    <Card.Img variant="top" src="/Assets/Assets/For-web/App-Dev-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                    {/* <Image src={WebApplicationIcon} width='60' height='60' alt='Kodaweb Web Application' className={styles.serviceCardImage} /> */}
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>App Development</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-down" data-aos-duration="2500">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For-web/UX-UI-blue-2.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                    {/* <Image src={GraphicIcon} width='60' height='60' alt='Kodaweb Graphic Designing' className={styles.serviceCardImage} /> */}
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>UI/UX Designing</Card.Title>
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
            <Row className={`${styles.cardRow} ${'mt-5 pt-4 mb-5'} ${styles['desktopScreenServicesSection']}`}>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-up" data-aos-duration="1000">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For-web/Graphic-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                    {/* <Image src={UiUxIcon} width='60' height='60' alt='Kodaweb UI/UX Designing' className={styles.serviceCardImage} /> */}
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>Video Production</Card.Title>
                    <Card.Text className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={`${styles.cardCol}`}>
                <Card className={styles.cardWrapper} data-aos="fade-up" data-aos-duration="1500">
                  <div className={styles.imageBoxWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For-web/Digital-marketing-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                    {/* <Image src={DigitalMarketingIcon} width='60' height='60' alt='Kodaweb Digital Marketing' className={styles.serviceCardImage} /> */}
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
                    <Card.Img variant="top" src="/Assets/Assets/For-web/SEO-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                    {/* <Image src={Seo_ContentWritingIcon} width='60' height='60' alt='Kodaweb SEO & Content Writing' className={styles.serviceCardImage} /> */}
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
                    <Card.Img variant="top" src="/Assets/Assets/For-web/Web-App-blue-2.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                    {/* <Image src={AppDevelopmentIcon} width='60' height='60' alt='Kodaweb App Development' className={styles.serviceCardImage} /> */}
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>Animation</Card.Title>
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
              <Link href='/services' className={`${styles['blueButton']} ${styles['desktopScreenServicesSection']}`}>
                View More
              </Link>
              :
              null
            }
          </Container>
        </section>


        {/* SECTION FOR MOBILE SCREENS */}

        <section className={`${styles['mobileScreenServicesSection']}`}>
          <Container>
            <Row className={`${styles.cardRow}`}>
                <Col className={`${styles.cardCol}`}>
                  <Card className={styles.cardWrapper} >
                    <div className={styles.imageBoxWrapper}>
                      <Card.Img variant="top" src="/Assets/Assets/For-web/Branding-blue-2.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                      {/* <Image src={BrandingIcon} width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} /> */}
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
                  <Card className={styles.cardWrapper} >
                    <div className={styles.imageBoxWrapper}>
                      <Card.Img variant="top" src="/Assets/Assets/For-web/web-development-blue-2.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                      {/* <Image src={WebDevelopmentIcon} width='60' height='60' alt='Kodaweb Web Development' className={styles.serviceCardImage} /> */}
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
                  <Card className={styles.cardWrapper} >
                    <div className={styles.imageBoxWrapper}>
                      <Card.Img variant="top" src="/Assets/Assets/For-web/App-Dev-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                      {/* <Image src={WebApplicationIcon} width='60' height='60' alt='Kodaweb Web Application' className={styles.serviceCardImage} /> */}
                    </div>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>App Development</Card.Title>
                      <Card.Text className={styles.cardText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={`${styles.cardCol}`}>
                  <Card className={styles.cardWrapper} >
                    <div className={styles.imageBoxWrapper}>
                      <Card.Img variant="top" src="/Assets/Assets/For-web/UX-UI-blue-2.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                      {/* <Image src={GraphicIcon} width='60' height='60' alt='Kodaweb Graphic Designing' className={styles.serviceCardImage} /> */}
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
                  <Card className={styles.cardWrapper} >
                    <div className={styles.imageBoxWrapper}>
                      <Card.Img variant="top" src="/Assets/Assets/For-web/Graphic-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                      {/* <Image src={UiUxIcon} width='60' height='60' alt='Kodaweb UI/UX Designing' className={styles.serviceCardImage} /> */}
                    </div>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Video Production</Card.Title>
                      <Card.Text className={styles.cardText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={`${styles.cardCol}`}>
                  <Card className={styles.cardWrapper} >
                    <div className={styles.imageBoxWrapper}>
                      <Card.Img variant="top" src="/Assets/Assets/For-web/Digital-marketing-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                      {/* <Image src={DigitalMarketingIcon} width='60' height='60' alt='Kodaweb Digital Marketing' className={styles.serviceCardImage} /> */}
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
                  <Card className={styles.cardWrapper} >
                    <div className={styles.imageBoxWrapper}>
                      <Card.Img variant="top" src="/Assets/Assets/For-web/SEO-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                      {/* <Image src={Seo_ContentWritingIcon} width='60' height='60' alt='Kodaweb SEO & Content Writing' className={styles.serviceCardImage} /> */}
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
                  <Card className={styles.cardWrapper} >
                    <div className={styles.imageBoxWrapper}>
                      <Card.Img variant="top" src="/Assets/Assets/For-web/App-Dev-blue.svg" width='60' height='60' alt='Kodaweb Branding & Identity' className={styles.serviceCardImage} />
                      {/* <Image src={AppDevelopmentIcon} width='60' height='60' alt='Kodaweb App Development' className={styles.serviceCardImage} /> */}
                    </div>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Animation</Card.Title>
                      <Card.Text className={styles.cardText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet,
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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

        {/* SECTION FOR MOBILE SCREENS */}
    </>
  )
}

export default Services