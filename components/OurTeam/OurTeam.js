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
                    <Col md={5}>
                        <div className={`${styles['teamContentSection']}`}>
                            <h3 className={styles.lineTitle}>Meet Our Team</h3>
                            <h2 className={styles.mainTitle}>Stronger than a Team, a Family<span className={styles.dot}>.</span></h2>
                            <Link href='#' className={`${styles['blueButton']} ${styles['teamBtn']}`}>
                                Meet the team
                            </Link>
                        </div>
                    </Col>
                    <Col md={7}>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default OurTeam