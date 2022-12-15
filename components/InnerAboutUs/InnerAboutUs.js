import React from 'react'
import styles from './InnerAboutUs.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';


const InnerAboutUs = () => {
    return (
        <>
            <section className={styles.innerAboutUsSection}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='w-80'>
                                <h3 className={styles.lineTitle}>About Us</h3>
                                <h2 className={styles.mainTitle}>Best Digital Solutiuon Provider Agency<span className={styles.dot}>.</span></h2>
                                <p className={styles.Para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className={styles.innerAboutUsPointsWrapper}>
                                <ul>
                                    <li>
                                        <span>
                                            <Image
                                                src='/Assets/Assets/For Web/accept_1.svg'
                                                width='18'
                                                height='18'
                                                alt='check'
                                            />
                                        </span>
                                        Digital Creative Agency
                                    </li>
                                    <li>
                                        <span>
                                            <Image
                                                src='/Assets/Assets/For Web/accept_1.svg'
                                                width='18'
                                                height='18'
                                                alt='check'
                                            />
                                        </span>
                                        Digital Creative Agency
                                    </li>
                                    <li>
                                        <span>
                                            <Image
                                                src='/Assets/Assets/For Web/accept_1.svg'
                                                width='18'
                                                height='18'
                                                alt='check'
                                            />
                                        </span>
                                        Digital Creative Agency
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className={styles.innerAboutImageOverlapCol}>
                            <Image
                                className={styles.innerAboutImageOne}
                                src='/Assets/Assets/For Web/About Us image 1.jpg'
                                width='455'
                                height='514'
                                alt='About Us image 1'
                            />
                            <Image
                                className={styles.innerAboutImageTwo}
                                src='/Assets/Assets/For Web/About Us image 2.jpg'
                                width='387'
                                height='443'
                                alt='About Us image 2'
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default InnerAboutUs