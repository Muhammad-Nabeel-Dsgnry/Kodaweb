import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Process.module.css'
import Image from 'next/image';

const Process = () => {
    return (
        <>
            <section className={styles.processMainSection}>
                <Container>
                    <Row>
                        <Col>
                            <div className='w-80'>
                                <h3 className={styles.lineTitle}>How we do</h3>
                                <h2 className={styles.mainTitle}>Our Process That Makes Us Unique<span className={styles.dot}>.</span></h2>
                                <p className={styles.Para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col lg={2}>
                            <div className={styles.processContentBoxWrapper}>
                                <div className={styles.processContentBox}>
                                    <Image
                                        src='/Assets/Assets/For Web/Plan.svg'
                                        alt='plan'
                                        width='38'
                                        height='30'
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <div className={styles.processNumberLine}>
                                        <span className={styles.processNumberNormal}></span>
                                        <span className={styles.processNumberHover}>01</span>
                                    </div>
                                    {/* <span className={styles.processNumberDivider}></span> */}
                                </div>
                                <div className={`${styles['processHoverableContentBox1']} ${styles['processHoverableBox1']}`}>
                                    <h6>Plan</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src='/Assets/Assets/For Web/Plan.svg'
                                    alt='plan'
                                    width='38'
                                    height='30'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLineOne}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>02</span>
                                </div>
                                {/* <div className={styles.processNumberLine}>
                                    <span>02</span>
                                </div> */}
                            </div>
                            <div className={`${styles['processHoverableContentBox1']} ${styles['processHoverableBox2']}`}>
                                <h6>Design</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={2}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src='/Assets/Assets/For Web/Plan.svg'
                                    alt='plan'
                                    width='38'
                                    height='30'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLineTwo}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>03</span>
                                </div>
                                {/* <div className={styles.processNumberLine}>
                                    <span>03</span>
                                </div> */}
                            </div>
                            <div className={`${styles['processHoverableContentBox1']} ${styles['processHoverableBox3']}`}>
                                <h6>Develop</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={2}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src='/Assets/Assets/For Web/Plan.svg'
                                    alt='plan'
                                    width='38'
                                    height='30'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLineThree}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>04</span>
                                </div>
                                {/* <div className={styles.processNumberLine}>
                                    <span>04</span>
                                </div> */}
                            </div>
                            <div className={`${styles['processHoverableContentBox2']} ${styles['processHoverableBox4']}`}>
                                <h6>Test</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={2}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src='/Assets/Assets/For Web/Plan.svg'
                                    alt='plan'
                                    width='38'
                                    height='30'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLineFour}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>05</span>
                                </div>
                                {/* <div className={styles.processNumberLine}>
                                    <span>05</span>
                                </div> */}
                            </div>
                            <div className={`${styles['processHoverableContentBox2']} ${styles['processHoverableBox5']}`}>
                                <h6>Deploy</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={2}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src='/Assets/Assets/For Web/Plan.svg'
                                    alt='plan'
                                    width='38'
                                    height='30'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLine}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>06</span>
                                </div>
                                {/* <div className={styles.processNumberLine}>
                                    <span>06</span>
                                </div> */}
                            </div>
                            <div className={`${styles['processHoverableContentBox2']} ${styles['processHoverableBox6']}`}>
                                <h6>Maintain</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col lg={2} className={styles.processHoverableContentBox1}>
                            <h6>Plan</h6>
                        </Col>
                        <Col lg={2} className={styles.processHoverableContentBox1}>
                            <h6>Design</h6>
                        </Col>
                        <Col lg={2} className={styles.processHoverableContentBox1}>
                            <h6>Develop</h6>
                        </Col>
                        <Col lg={2} className={styles.processHoverableContentBox1}>
                            <h6>Test</h6>
                        </Col>
                        <Col lg={2} className={styles.processHoverableContentBox1}>
                            <h6>Deploy</h6>
                        </Col>
                        <Col lg={2} className={styles.processHoverableContentBox1}>
                            <h6>Maintain</h6>
                        </Col>
                    </Row> */}
                </Container>
            </section>
        </>
    )
}

export default Process