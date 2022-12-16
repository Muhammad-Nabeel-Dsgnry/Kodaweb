import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'
import Button from 'react-bootstrap/Button';


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

// const MenuItem = ({title, path}) => {
//   console.log(title,path)
//   return (
//     <Link href={path} passHref>
//       {title}
//     </Link>
//   )
// }
 
const Header = () => {
  // return <header className={`${styles['header']} ${styles['headerTwo']} `}>Header</header>
  return (
    <Navbar bg="light" expand="lg" className='py-3' id="home">
      <Container>
        <Navbar.Brand href="/">
          <Image
          alt='header logo'
            src='/Assets/Assets/For Web/LogoHeader.png'
            width='235'
            height='60'
          />
          {/* Logo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuLinks.map(({ title, path }, index) => {
              return (
                <Link href={path} key={index} className={styles.navMenu}>{title}</Link>
              )
            })}
          </Nav>
          <Link href='#' className={`${styles['blueButton']} ${styles['navButton']}`}>
            Get A Quote
          </Link>
          {/* <Button className={`${styles['blueButton']} ${styles['navButton']}`}>Start your project</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
