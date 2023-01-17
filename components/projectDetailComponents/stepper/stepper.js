import React from 'react'
import styles from './stepper.module.css'
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap'


const stepper = (props) => {
    const {isStepperTrue, isStepperOneTrue, isStepperTwoTrue, isStepperThreeTrue} = props
    console.log('isStepperTrue : ', isStepperTrue)
  return (
    <>
        <section className={`${styles['stepperWrapper']}`}>
            <Container>
                <div>
                    <Col lg='auto' md='auto' xs='auto'>
                        <div className={`${styles['stepperBar']}`}></div>
                    </Col>
                </div>
                <Row className={`${'justify-content-center position-absolute start-0 end-0'}`}>
                    <Col lg='auto' md='auto' xs='auto'>
                        <span className={`${styles['counterDivider']}`}></span>
                        <div className={`${styles['counterNumberWrapper']} ${styles['counterNumberWrapperOne']}`}>
                            <span className={`${isStepperOneTrue === 'true' || isStepperTwoTrue === 'true' ? styles['active'] : null}`}>01</span>
                        </div>
                    </Col>
                    <Col lg='auto' md='auto' xs='auto'>
                        <div className={`${styles['counterNumberWrapper']} ${styles['counterNumberWrapperTwo']}`}>
                            <span className={`${isStepperTwoTrue === 'true' ? styles['active'] : null}`}>02</span>
                        </div>
                    </Col>
                    <Col lg='auto' md='auto' xs='auto'>
                        <div className={`${styles['counterNumberWrapper']} ${styles['counterNumberWrapperThree']}`}>
                            <span className={`${isStepperThreeTrue === 'true' ? styles['active'] : null}`}>03</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default stepper