import { Container, Row, Col } from 'react-bootstrap'
import BriefStyle from './projectBrief.module.css'
import { useState, useEffect, useContext } from 'react'
import { formData } from '../../context/Context'

const OrderTotal = () => {

  const { optionalPackage, t_duration, t_durationPrice } = useContext(formData)
  console.log('console from order total component : ', optionalPackage)
  // const [summaryData, setSummaryData] = useState({})
  // useEffect(() => {
  //   setSummaryData(JSON.parse(localStorage.getItem('Package-Data')))
  //   console.log('Summary Data', summaryData)
  // }, [])

  let itemPrice = optionalPackage?.price
  let durationPrice = t_durationPrice
  let add = itemPrice + durationPrice
  let percentage = Math.round((add * 13/100)+add)
  let total = percentage + add

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
              <p className={`${BriefStyle['summaryData']}`}>{optionalPackage?.name}</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Package Type</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>{optionalPackage?.title}</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>Item Price</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>{optionalPackage?.price} USD</p>
            </Col>
          </Row>
          <Row className={`${''}`}>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-start'}`}>
              <p className={`${BriefStyle['summaryTitle']}`}>{t_duration}</p>
            </Col>
            <Col lg={6} md={6} xs={6} className={`${'p-0 d-flex flex-column align-items-end'}`}>
              <p className={`${BriefStyle['summaryData']}`}>{t_durationPrice} USD</p>
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