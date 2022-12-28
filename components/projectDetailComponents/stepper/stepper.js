import React from 'react'
import styles from './stepper.module.css'
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap'


const stepper = () => {
  return (
    <>
        <section className={`${styles['stepperWrapper']}`}>
            <Container>
                <Row className={`${'justify-content-center'}`}>
                    <Col lg='auto' md='auto' xs='auto'>
                        <span className={`${styles['counterDivider']}`}></span>
                        <div className={`${styles['counterNumberWrapper']} ${styles['counterNumberWrapperOne']}`}>
                            <span>01</span>
                        </div>
                    </Col>
                    <Col lg='auto' md='auto' xs='auto'>
                        <div className={`${styles['counterNumberWrapper']} ${styles['counterNumberWrapperTwo']}`}>
                            <span>02</span>
                        </div>
                    </Col>
                    <Col lg='auto' md='auto' xs='auto'>
                        <div className={`${styles['counterNumberWrapper']} ${styles['counterNumberWrapperThree']}`}>
                            <span>03</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default stepper