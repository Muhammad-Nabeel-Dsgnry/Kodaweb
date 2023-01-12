import React from 'react'
import styles from './Client.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Link from 'next/link';


const Client = () => {
  return (
    <>
        <section className={styles.clients_section}>
          <Container>
            <Row>
              <Col className={styles.content_Section}>
                <div className='w-75'>
                  <h3 className={styles.lineTitle} contentEditable='true'>Our Clients</h3>
                  <h2 className={styles.mainTitle} contentEditable='true'>From Startups To The World’s Largest Companies<span className={styles.dot}>.</span></h2>
                </div>
              </Col>
            </Row>
            <Row className='pt-5'>
              <Col xs={3}>
                <Image src='/Assets/Assets/For-web/CocaCola.png' width='174' height='76' alt='portfolio 1' />
              </Col>
              <Col xs={3}>
                <Image src='/Assets/Assets/For-web/Hyundai.png' width='174' height='76' alt='portfolio 1' />
              </Col>
              <Col xs={3}>
                <Image src='/Assets/Assets/For-web/Apple.png' width='174' height='76' alt='portfolio 1' />
              </Col>
              <Col xs={3}>
                <Image src='/Assets/Assets/For-web/Verizon.png' width='174' height='76' alt='portfolio 1' />
              </Col>
            </Row>
            <Row className='pt-5'>
              <Col xs={3}>
                <Image src='/Assets/Assets/For-web/MicroSoft.png' width='174' height='76' alt='portfolio 1' />
              </Col>
              <Col xs={3}>
                <Image src='/Assets/Assets/For-web/Nestle.png' width='174' height='76' alt='portfolio 1' />
              </Col>
              <Col xs={3}>
                <Image src='/Assets/Assets/For-web/Prada.png' width='174' height='76' alt='portfolio 1' />
              </Col>
              <Col xs={3}>
                <Image src='/Assets/Assets/For-web/wellcare.png' width='174' height='76' alt='portfolio 1' />
              </Col>
            </Row>
          </Container>
        </section>
    </>
  )
}

export default Client