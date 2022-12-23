import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Process.module.css'
import Image from 'next/image';
import Plan_white from '../../public/Assets/Assets/For web/Plan-white.png';
import Design_white from '../../public/Assets/Assets/For web/Design-white.png';
import Develop_white from '../../public/Assets/Assets/For web/Develop-white.png';
import Test_white from '../../public/Assets/Assets/For web/Test-white.png';
import Deploy_white from '../../public/Assets/Assets/For web/Deploy-white.png';
import Maintain_white from '../../public/Assets/Assets/For web/Maintain-white.png';

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

                    <Row className={`${'mt-5'} ${styles['processBoxesRow']} ${styles['desktopProcessBoxesRow']}`}>
                        <Col lg={2} xs={6} className={`${styles['processBoxes']}`}>
                            <div className={styles.processContentBoxWrapper}>
                                <div className={styles.processContentBox}>
                                    <Image
                                        src={Plan_white}
                                        alt='plan'
                                        width='32'
                                        height='32'
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <div className={styles.processNumberLine}>
                                        <span className={styles.processNumberNormal}></span>
                                        <span className={styles.processNumberHover}>01</span>
                                    </div>
                                </div>
                                <div className={`${styles['processHoverableContentBox1']} ${styles['processHoverableBox1']}`}>
                                    <h6>Plan</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} xs={6} className={`${styles['processBoxes']}`}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src={Design_white}
                                    alt='design'
                                    width='32'
                                    height='32'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLineOne}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>02</span>
                                </div>
                            </div>
                            <div className={`${styles['processHoverableContentBox1']} ${styles['processHoverableBox2']}`}>
                                <h6>Design</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={2} xs={6} className={`${styles['processBoxes']}`}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src={Develop_white}
                                    alt='develop'
                                    width='32'
                                    height='32'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLineTwo}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>03</span>
                                </div>
                            </div>
                            <div className={`${styles['processHoverableContentBox1']} ${styles['processHoverableBox3']}`}>
                                <h6>Develop</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={2} xs={6} className={`${styles['processBoxes']}`}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src={Test_white}
                                    alt='test'
                                    width='32'
                                    height='32'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLineThree}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>04</span>
                                </div>
                            </div>
                            <div className={`${styles['processHoverableContentBox2']} ${styles['processHoverableBox4']}`}>
                                <h6>Test</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={2} xs={6} className={`${styles['processBoxes']}`}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src={Deploy_white}
                                    alt='deploy'
                                    width='32'
                                    height='32'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLineFour}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>05</span>
                                </div>
                            </div>
                            <div className={`${styles['processHoverableContentBox2']} ${styles['processHoverableBox5']}`}>
                                <h6>Deploy</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={2} xs={6} className={`${styles['processBoxes']}`}>
                        <div className={styles.processContentBoxWrapper}>
                            <div className={styles.processContentBox}>
                                <Image
                                    src={Maintain_white}
                                    alt='Maintain'
                                    width='32'
                                    height='32'
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.
                                </p>
                                <div className={styles.processNumberLine}>
                                    <span className={styles.processNumberNormal}></span>
                                    <span className={styles.processNumberHover}>06</span>
                                </div>
                            </div>
                            <div className={`${styles['processHoverableContentBox2']} ${styles['processHoverableBox6']}`}>
                                <h6>Maintain</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Process