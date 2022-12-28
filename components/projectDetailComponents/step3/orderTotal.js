import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BriefStyle from './projectBrief.module.css'

const orderTotal = () => {
  return (
    <>
      <section>
        <h6 className={`${BriefStyle['mainTitle']}`}>Package Summary</h6>
        
          <hr className={`${BriefStyle['horizontalDivider']}`}/>
        <Container>
          <Row className={`${'pt-2'}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Service Type</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>LOGO Design</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Package Type</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>Essential</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Item Price</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>USD39</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>3 Days Duration</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>USD30</p>
            </Col>
          </Row>
          <Row className={`${'pb-3'}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Tax Amount</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>0.00 USD</p>
            </Col>
          </Row>
        </Container>
        <hr className={`${BriefStyle['horizontalDivider']}`}/>
        <Container>
          <Row>
          <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Total (USD)</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>USD69</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default orderTotal