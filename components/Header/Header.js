import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import LogoHeader from '../../public/Assets/Assets/For-web/LogoHeader.png';
import GetAQuote from '../GetAQuote/GetAQuote';
import { useState } from 'react';

const menuLinks = [
  {
    title: 'Services',
    path: '/services'
  },
  {
    title: 'Pricing',
    path: '/pricing'
  },
  {
    title: 'Our Work',
    path: '/work'
  },
  {
    title: 'About Us',
    path: '/about'
  },
  {
    title: 'Contact Us',
    path: '/contact'
  },
]
 
const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isToggle, setIsToggle] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const route = useRouter()

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const hadnleActive = () => {
    setIsActive(true)
    setIsToggle(false)
  }
  

  // return <header className={`${styles['header']} ${styles['headerTwo']} `}>Header</header>
  return (
    <Navbar bg="light" expand="lg" className='py-3 pe-md-3' id="home" fixed="top">
      <Container className={`${'p-0'} ${styles['navBarContainer']}`}>
        <Navbar.Brand>
          <Link href='/'>
            <Image
              className={`${styles['headerMobileLogoBlack']} ${isToggle ? !isActive ? 'whiteLogo' : '' : ''}`}
              alt='Kodaweb header logo'
              src={LogoHeader}
              width='235'
              height='60'
            />
          </Link>
          {/* Logo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className={`${isActive ? 'hideCollapse' : null}`}>
          <Nav className="ms-auto">
            {menuLinks.map(({ title, path }, index) => {
              return (
                <Link href={path} key={index} className={`${styles['navMenu']} ${route.pathname == path ? 'active' : null}`} onClick={hadnleActive}>{title}</Link>
              )
            })}
          </Nav>
          <Link href='#' className={`${styles['blueButton']} ${styles['navButton']}`} onClick={() => setIsOpen(true)}>
            Get A Quote
          </Link>
          <GetAQuote show={isOpen} onHide={() => setIsOpen(false)} />
          {isToggle ?
          <>
            <div className={`${styles['mobileSocialIconsWrapper']} mt-5`}>
            <Image
              className="me-5 my-4"
              src='/Assets/Assets/For-web/facebook.svg'
              alt="banner social media icon"
              width='30'
              height='30'
            />
            <Image
              className="me-5 my-4"
              src='/Assets/Assets/For-web/Dribble.svg'
              alt="banner social media icon"
              width='30'
              height='30'
            />
            <Image
              className="me-5 my-4"
              src='/Assets/Assets/For-web/Twitter.svg'
              alt="banner social media icon"
              width='30'
              height='30'
            />
            <Image
              className="me-5 my-4"
              src='/Assets/Assets/For-web/Linked In.svg'
              alt="banner social media icon"
              width='30'
              height='30'
            />
            </div>
            <div className='text-white'>
              <h2 className={`${styles['mobileTitle']}`}>KODAWEB STUDIO</h2>
              <Link href='https://goo.gl/maps/eHVx2XFuBZu1Lk57A' target='_blank' className="d-flex align-items-start">
              <span className={`w-100 text-white fs-5`}>#15–7015 Avenue of Americas New York, NY L5S 1T7</span>
              </Link>
            </div>
          </>
          :
          null
          }
          {/* <Button className={`${styles['blueButton']} ${styles['navButton']}`}>Start your project</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
