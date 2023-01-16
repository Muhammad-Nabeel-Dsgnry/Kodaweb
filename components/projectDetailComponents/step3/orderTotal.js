import { Container, Row, Col } from 'react-bootstrap'
import BriefStyle from './projectBrief.module.css'
import { useState, useEffect } from 'react'


const OrderTotal = () => {

  const [summaryData, setSummaryData] = useState({})

  useEffect(() => {
    setSummaryData(JSON.parse(localStorage.getItem('Package-Data')))
    console.log('Summary Data', summaryData)
  }, [])

  let itemPrice = summaryData.price
  let durationPrice = summaryData.timeDurationPrice
  let add = itemPrice + durationPrice
  let percentage = Math.round((add * 13/100)+add)
  let total = percentage + add
  console.log('add', add)
  console.log('percentage', percentage)
  console.log('total', total)

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
              <p className={`${BriefStyle['summaryData']}`}>{summaryData.name}</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Package Type</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>{summaryData.title}</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Item Price</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>{summaryData.price} USD</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>{summaryData.timeDuration}</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>{summaryData.timeDurationPrice} USD</p>
            </Col>
          </Row>
          <Row className={`${'pb-3'}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Tax Amount</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>{percentage} USD</p>
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
              <p className={`${BriefStyle['summaryData']}`}>USD {total}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default OrderTotal