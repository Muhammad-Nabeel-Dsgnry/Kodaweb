import styles from './Cta.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const Cta = () => {
  return (
    <>
        <section className={styles.CtaMainWrapper}>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h2>Ready to discuss your project<span className={`${styles['dot']} ${styles['dot__blink']}`}>?</span></h2>
                        <Link href='/contact' className={styles.ctaButton}>
                            Contact Us
                        </Link>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Cta