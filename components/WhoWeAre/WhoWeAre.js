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
                    <h2 className={styles.mainTitle}>We Are [Trusted] By First & Best In The World<span className={styles.dot}>.</span></h2>
                    <p className={styles.Para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat,</p>
                </div>
                <Row className={styles.WhoWeAreCounterWrapper} >
                    <Col md={'auto'} xs={'auto'} className='p-0'>
                        <div className={styles.WhoWeAreCounterBox}>
                            <span className={styles.WhoWeAreCounterBoxDivider}></span>
                            <Image
                                src='/Assets/Assets/For-web/Project-completed-blue.svg'
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
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={'auto'} xs={'auto'} className='p-0'>
                        <div className={styles.WhoWeAreCounterBox}>
                            <Image
                                src='/Assets/Assets/For-web/Satisfied-customer-blue.svg'
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
                                <p>Satisfied Customer</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={'auto'} xs={'auto'} className='p-0'>
                        <div className={styles.WhoWeAreCounterBox}>
                    <span className={styles.WhoWeAreCounterBoxDivider2}></span>
                            <Image
                                src='/Assets/Assets/For-web/national-award-blue.svg'
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
                                <p>National Award</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Col>
                <Col lg={6}>
                <Image
                    className={styles.WhoWeAreSectionImage}
                    src='/Assets/Assets/For-web/who-we-are.png'
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