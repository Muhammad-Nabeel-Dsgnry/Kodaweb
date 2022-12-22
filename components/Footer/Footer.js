import styles from "./Footer.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about',
  },
  {
    title: 'Blogs',
    path: '#',
  },
  {
    title: 'Privacy & Policy',
    path: '#',
  },
  {
    title: 'Terms & Conditions',
    path: '#',
  },
  {
    title: 'Contact Us',
    path: '/contact',
  }
]

const footerWorkLinks = [
  {
    title: 'Logo Design',
    path: '#',
  },
  {
    title: 'Branding',
    path: '#',
  },
  {
    title: 'UX UI Design',
    path: '#',
  },
  {
    title: 'Web development',
    path: '#',
  },
  {
    title: 'App development',
    path: '#',
  },
]

const footerPricingLinks = [
  {
    title: 'All in 1',
    path: '#',
  },
  {
    title: 'Logo & Branding',
    path: '#',
  },
  {
    title: 'Logo Design',
    path: '#',
  },
  {
    title: 'HTML Website',
    path: '#',
  },
  {
    title: 'CMS Website',
    path: '#',
  },
  {
    title: 'App Development',
    path: '#',
  },
  {
    title: 'App & Web Design',
    path: '#',
  },
]

const Footer = () => {
  return <>
    <footer className={styles.footerMainWrapper}>
      <Container>
        <Row>
          <Col lg={3}>
            <Link href='/'>
              <Image
                src='/Assets/Assets/For Web/Logo for footer(2).png'
                width='239'
                height='104'
              />
            </Link>
            <p className={styles.footerPara}>KODAWEB STUDIO is the world’s largest & most secure creative digital service providing agency.</p>
          </Col>
          <Col lg={2} className={styles.footerlinksMainCol}>
            <h5 className="mb-4">Links</h5>
            <div className={styles.footerMenuWrapper}>
              {footerLinks.map(({ title, path }, index) => {
                return (
                  <Link href={path} key={index} >{title}</Link>
                )
              })}
            </div>
          </Col>
          <Col lg={2} className={styles.footerlinksMainCol}>
            <h5 className="mb-4">Our Work</h5>
            <div className={styles.footerMenuWrapper}>
              {footerWorkLinks.map(({ title, path }, index) => {
                return (
                  <Link href={path} key={index} >{title}</Link>
                )
              })}
            </div>
          </Col>
          <Col lg={2} className={styles.footerlinksMainCol}>
            <h5 className="mb-4">Pricing Packages</h5>
            <div className={styles.footerMenuWrapper}>
              {footerPricingLinks.map(({ title, path }, index) => {
                return (
                  <Link href={path} key={index} >{title}</Link>
                )
              })}
            </div>
          </Col>
          <Col lg={3} className={styles.footerlinksMainCol}>
            <h5 className="mb-4">Company Info</h5>
            <div className={`${styles['footerMenuWrapper']} ${styles['footerCompanyInfo']}`}>
              <Link href='mailto:Info@kodawebstudio.com'>
                <Image
                alt='footer icons'
                  className="me-3"
                  src='/Assets/Assets/For Web/message.svg'
                  width='21'
                  height='19'
                />
                <span>Info@kodawebstudio.com</span>
              </Link>
            </div>
            <div className={`${styles['footerMenuWrapper']} ${styles['footerCompanyInfo']}`}>
              <Link href='tel:(+1-870-555-000)'>
                <Image
                alt='footer icons'
                  className="me-3"
                  src='/Assets/Assets/For Web/call.svg'
                  width='21'
                  height='19'
                />
                <span>(+1-870-555-000)</span>
              </Link>
            </div>
            <div className={`${styles['footerMenuWrapper']} ${styles['footerCompanyInfo']}`}>
              <Link href='https://goo.gl/maps/eHVx2XFuBZu1Lk57A' target='_blank' className="d-flex align-items-start">
                <Image
                  alt='footer icons'
                  className="me-3"
                  src='/Assets/Assets/For Web/location.svg'
                  width='21'
                  height='19'
                />
                <span className={`${styles['footerLocation']}`}>#15–7015 Avenue of Americas New York, NY L5S 1T7</span>
              </Link>
            </div>
            <div className={styles.footerSocialLinkWrapper}>
              <Link href='#'>
                <Image
                alt='footer icons'
                  className="me-4 my-4"
                  src='/Assets/Assets/For Web/facebook.svg'
                  width='30'
                  height='30'
                />
              </Link>
              <Link href='#'>
                <Image
                alt='footer icons'
                  className="me-4 my-4"
                  src='/Assets/Assets/For Web/Dribble.svg'
                  width='30'
                  height='30'
                />
              </Link>
              <Link href='#'>
                <Image
                alt='footer icons'
                  className="me-4 my-4"
                  src='/Assets/Assets/For Web/Twitter.svg'
                  width='30'
                  height='30'
                />
              </Link>
              <Link href='#'>
                <Image
                alt='footer icons'
                  className="me-4 my-4"
                  src='/Assets/Assets/For Web/Linked In.svg'
                  width='30'
                  height='30'
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    <section className={styles.copyrightsSection}>
      <Container>
        <Row className='py-4'>
          <Col lg={8} style={{display: 'flex', alignItems: 'center'}}>
            <p className={`${styles['copyrightsSectionPara']}`}>Copyright @2023 KODAWEB STUDIO</p>
          </Col>
          <Col lg={4}>
            <p className={`${styles['copyrightsSectionSubTitle']}`}>EASY AND SECURE PAYMENT</p>
            <div className={styles.paymentImages}>
              <Image
                className="me-2 mt-2"
                src='/Assets/Assets/For Web/JCB.png'
                alt='footer social midea icon'
                width='80'
                height='50'
              />
              <Image
                className="me-2 mt-2"
                src='/Assets/Assets/For Web/Dicover.png'
                alt='footer social midea icon'
                width='80'
                height='50'
              />
              <Image
                className="me-2 mt-2"
                src='/Assets/Assets/For Web/UnionPay.png'
                alt='footer social midea icon'
                width='80'
                height='50'
              />
              <Image
                className="me-2 mt-2"
                src='/Assets/Assets/For Web/VISA.png'
                alt='footer social midea icon'
                width='80'
                height='50'
              />
              <Image
                className="me-2 mt-2"
                src='/Assets/Assets/For Web/MasterCard.png'
                alt='footer social midea icon'
                width='80'
                height='50'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
};

export default Footer;
