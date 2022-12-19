import styles from './WhoWeAre.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const WhoWeAre = () => {
    return (
        <>
        <section className={styles.WhoWeAreSection}>
            <Container>
            <Row>
                <Col lg={6}>
                <div className='w-80'>
                    <h3 className={styles.lineTitle}>Who We Are</h3>
                    <h2 className={styles.mainTitle}>DWe Are [Trusted] By First & Best In The World<span className={styles.dot}>.</span></h2>
                    <p className={styles.Para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat,</p>
                </div>
                <Row className={styles.WhoWeAreCounterWrapper} >
                    <Col md={4} className='p-0'>
                        <div className={styles.WhoWeAreCounterBox}>
                            <span className={styles.WhoWeAreCounterBoxDivider}></span>
                            <Image
                                src='/Assets/Assets/For Web/Project-completed-blue.svg'
                                alt='Who We Are icon'
                                width='33'
                                height='40'
                            />
                            <div className={styles.WhoWeAreCounterBoxContent}>
                            <VisibilitySensor partialVisibility>
                                {({ isVisible }) => (
                                    <div style={{ marginBottom: 10, height: 60 }}>
                                    {isVisible ? <CountUp duration={4} end={360} delay={.5} /> : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                                {/* <h2>360</h2> */}
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='p-0'>
                        <div className={styles.WhoWeAreCounterBox}>
                            <Image
                                src='/Assets/Assets/For Web/Satisfied-customer-blue.svg'
                                alt='Who We Are icon'
                                width='33'
                                height='40'
                            />
                            <div className={styles.WhoWeAreCounterBoxContent}>
                            <VisibilitySensor partialVisibility>
                                {({ isVisible }) => (
                                    <div style={{ marginBottom: 10, height: 60 }}>
                                    {isVisible ? <CountUp duration={4} end={890} delay={.5} /> : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                                {/* <h2>360</h2> */}
                                <p>Satisfied Customer</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='p-0'>
                        <div className={styles.WhoWeAreCounterBox}>
                    <span className={styles.WhoWeAreCounterBoxDivider2}></span>
                            <Image
                                src='/Assets/Assets/For Web/national-award-blue.svg'
                                alt='Who We Are icon'
                                width='33'
                                height='40'
                            />
                            <div className={styles.WhoWeAreCounterBoxContent}>
                            <VisibilitySensor partialVisibility>
                                {({ isVisible }) => (
                                    <div style={{ marginBottom: 10, height: 60 }}>
                                    {isVisible ? <CountUp duration={4} end={129} delay={.5} suffix='+' /> : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                                {/* <h2>360</h2> */}
                                <p>National Award</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <div className={styles.WhoWeAreCounterWrapper}>
                    <div className={styles.WhoWeAre}>

                    </div>
                </div> */}
                </Col>
                <Col lg={6}>
                <Image
                    className={styles.WhoWeAreSectionImage}
                    src='/Assets/Assets/For Web/who-we-are.png'
                    alt='who We Are'
                    width='646'
                    height='710'
                    
                />
                </Col>
            </Row>
            </Container>
        </section>
        </>
    )
}

export default WhoWeAre