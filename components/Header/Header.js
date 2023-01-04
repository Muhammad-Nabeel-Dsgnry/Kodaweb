import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import LogoHeader from '../../public/Assets/Assets/For web/LogoHeader.png';
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

  const route = useRouter()


  

  // return <header className={`${styles['header']} ${styles['headerTwo']} `}>Header</header>
  return (
    <Navbar bg="light" expand="lg" className='py-3 pe-md-3' id="home" fixed="top">
      <Container className={`${'p-0'} ${styles['navBarContainer']}`}>
        <Navbar.Brand>
          <Link href='/'>
            <Image
              className={`${styles['headerMobileLogoBlack']}`}
              alt='Kodaweb header logo'
              src={LogoHeader}
              width='235'
              height='60'
            />
          </Link>
          {/* Logo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuLinks.map(({ title, path }, index) => {
              return (
                <Link href={path} key={index} className={`${styles['navMenu']} ${route.pathname == path ? 'active' : null} ${route.pathname == path ? 'hide' : null}`}>{title}</Link>
              )
            })}
          </Nav>
          <Link href='#' className={`${styles['blueButton']} ${styles['navButton']}`} onClick={() => setIsOpen(true)}>
            Get A Quote
          </Link>
          <GetAQuote show={isOpen} onHide={() => setIsOpen(false)} />
          {/* <Button className={`${styles['blueButton']} ${styles['navButton']}`}>Start your project</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
