import styles from './OurTeam.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Link from 'next/link';

const OurTeam = () => {
  return (
    <>
        <section className={styles.teamMainSection}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={`${styles['teamContentSection']}`}>
                            <h3 className={styles.lineTitle}>Meet Our Team</h3>
                            <h2 className={styles.mainTitle}>Stronger than a Team, a Family<span className={styles.dot}>.</span></h2>
                            {/* <Link href='#' className={`${styles['blueButton']} ${styles['teamBtn']}`}>
                                Meet the team
                            </Link> */}
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={5} style={{display: 'flex', justifyContent: 'end'}}>
                            <div className={styles.AnimationImgBoxOne}>
                                <Image
                                    className={styles.imgOne}
                                    src='/Assets/Assets/For web/team-6.png'
                                    alt='team one'
                                    width='233'
                                    height='237'
                                />
                                <Image
                                    className={styles.imgTwo}
                                    src='/Assets/Assets/For web/team-13.png'
                                    alt='team one'
                                    width='233'
                                    height='237'
                                />
                            </div>
                            </Col>
                            <Col md={3} className='p-0'>
                            <div className={styles.AnimationImgBoxOne}>
                                <Image
                                    className={styles.imgOne}
                                    src='/Assets/Assets/For web/team-7.png'
                                    alt='team one'
                                    width='173'
                                    height='151'
                                />
                                <Image
                                    className={styles.imgTwo}
                                    src='/Assets/Assets/For web/team-14.png'
                                    alt='team one'
                                    width='173'
                                    height='151'
                                />
                            </div>
                            </Col>
                            <Col md={4} style={{display: 'flex', justifyContent: 'end'}}>
                            <div className={styles.AnimationImgBoxOne}>
                                <Image
                                    className={styles.imgOne}
                                    src='/Assets/Assets/For web/team-5.png'
                                    alt='team one'
                                    width='112'
                                    height='183'
                                />
                                <Image
                                    className={styles.imgTwo}
                                    src='/Assets/Assets/For web/team-12.png'
                                    alt='team one'
                                    width='112'
                                    height='183'
                                />
                            </div>
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col md={4} style={{display: 'flex', justifyContent: 'end'}}>
                                <div className={styles.AnimationImgBoxOne}>
                                    <Image
                                        className={styles.imgOne}
                                        src='/Assets/Assets/For web/team-1.png'
                                        alt='team one'
                                        width='219'
                                        height='222'
                                    />
                                    <Image
                                        className={styles.imgTwo}
                                        src='/Assets/Assets/For web/team-8.png'
                                        alt='team one'
                                        width='219'
                                        height='222'
                                    />
                                </div>
                            </Col>
                            <Col md={2} className='p-0'>
                            <div className={styles.AnimationImgBoxOne}>
                                <Image
                                    className={styles.imgOne}
                                    src='/Assets/Assets/For web/team-2.png'
                                    alt='team one'
                                    width='142'
                                    height='149'
                                />
                                <Image
                                    className={styles.imgTwo}
                                    src='/Assets/Assets/For web/team-9.png'
                                    alt='team one'
                                    width='142'
                                    height='149'
                                />
                            </div>
                            </Col>
                            <Col md={6} className='pl-0' style={{display: 'flex', flexDirection: 'column', justifyContent: 'end'}}>
                            <div >
                                <p>Our team explores, experiments, and finds inspiration everywhere.</p>
                            </div>
                            <div className={styles.AnimationImgBoxOne} style={{display: 'flex', justifyContent: 'end'}}>
                                <Image
                                    className={styles.imgOne}
                                    src='/Assets/Assets/For web/team-4.png'
                                    alt='team one'
                                    width='176'
                                    height='186'
                                />
                                <Image
                                    className={styles.imgTwo}
                                    src='/Assets/Assets/For web/team-11.png'
                                    alt='team one'
                                    width='176'
                                    height='186'
                                />
                            </div>
                            </Col>
                        </Row>
                        <Row style={{justifyContent: 'center'}}>
                            <Col md={3} style={{display: 'flex', alignItems: 'center'}}>
                                <p className={styles.teamScrollDown}>Scroll Down</p>
                            </Col>
                            <Col md={4} style={{display: 'flex', justifyContent: 'end'}} className='pe-0'>
                            <div className={`${styles['AnimationImgBoxOne']}`}>
                                <Image
                                    className={styles.imgOne}
                                    src='/Assets/Assets/For web/team-3.png'
                                    alt='team one'
                                    width='224'
                                    height='247'
                                />
                                <Image
                                    className={styles.imgTwo}
                                    src='/Assets/Assets/For web/team-10.png'
                                    alt='team one'
                                    width='224'
                                    height='247'
                                />
                            </div>
                            </Col>
                            <Col md={4} style={{display: 'flex', alignItems: 'center'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque.Lorem ipsum dolor sit amet, consectetur.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default OurTeam