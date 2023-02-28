import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from '../projectDetailComponents.module.css'
import Stepper from '../stepper/stepper'
import Image from 'next/image'
import StepTwoForm from './stepTwoForm'
// import SectionContent from '../sectionContent'
// import stripe from '../../../public/Assets/Assets/For web/Stripe.svg'
// import creditCard from '../../../public/Assets/Assets/For web/credit-debit-card.svg'
// import payPal from '../../../public/Assets/Assets/For web/PayPal.svg'
// import select from '../../../public/Assets/Assets/For web/tick.svg'

const Step2 = (props) => {

  const {businessName, industry, logoType, primaryColor, secondaryColor, ascendColor, timeDuration} = props

  // const [isSelectStripe, setIsSelectStripe] = useState(true)
  // const [isSelectCard, setIsSelectCard] = useState(false)
  // const [isSelectPayPal, setIsSelectPayPal] = useState(false)

  // const { stepSubTitle, stepMainTitle, stepPara, isImage, colorText } = props

  // const stripeHandler = () => {
  //   setIsSelectStripe(true)
  //   setIsSelectCard(false)
  //   setIsSelectPayPal(false)
  // }
  // const cardHandler = () => {
  //   setIsSelectCard(true)
  //   setIsSelectStripe(false)
  //   setIsSelectPayPal(false)
  // }
  // const payPalHandler = () => {
  //   setIsSelectPayPal(true)
  //   setIsSelectCard(false)
  //   setIsSelectStripe(false)
  // }

  return (
    <section>
      <Container>
        {/* <Row>
          <Stepper />
        </Row> */}
        {/* <Row className={`${'mt-5'}`}>
          <Col xs={12} lg={8} md={8}>
            <div>
              <h3 className={`${styles['lineTitle']}`}>{stepSubTitle}</h3>
              <h2 className={styles.mainTitle}>{stepMainTitle}<span className={colorText ? styles.dot : ''}>{colorText}</span></h2>
              <p className={`${styles['Para']} ${styles['colorBlack']} ${isImage == 'true' ? 'w-100' : 'w-100'}`}>{stepPara}</p>
            </div>
          </Col>
          {
            isImage == 'true' ?
              <Col className={`${'d-flex justify-content-end'} ${styles['guaranteeImageWrapper']}`} xs={12} lg={4} md={4}>
                <Image
                  className={styles.guaranteeImage}
                  src='/Assets/Assets/For Web/moneyBack.png'
                  alt='money back guarantee'
                  width='200'
                  height='180'
                />
              </Col> :
              null
          }
        </Row> */}

        <Row>
          <StepTwoForm />
        </Row>
        {/* <Row className={`${'mt-5'}`}>
          <SectionContent
            contentTitle='Payment Method'
            contentMainTitle='Choose payment method'
            contentText='Select the payment method which is best suit for you.'
          />
        </Row>

        <Row className={`${styles['paymentMethodMainWrapper']}`}>
          <Col lg={4} md={4} xs={4}>
            <div className={`${styles['paymentMethodBoxWrapper']}`}>
              <Form.Check
                inline
                label={
                  <Image
                    src={stripe}
                    alt='stripe'
                    width='200'
                    height='100'
                  />
                }
                name="paymentMethod"
                type='radio'
                id={`inline-radio-1`}
                value='Stripe'
                onClick={() => setIsSelectStripe(stripeHandler)}
                className={`${styles['paymentMethodRadioBtn']} ${isSelectStripe ? 'paymentSelected' : ''}`}
              />
              {
                isSelectStripe ?
                  <span className={`${styles['paymentMethodSelectedIcon']}`}>
                    <Image
                      src={select}
                      alt='select'
                      width='38'
                      height='38'
                    />
                  </span>
                  :
                  null
              }
            </div>
          </Col>
          <Col lg={4} md={4} xs={4}>
            <div className={`${styles['paymentMethodBoxWrapper']}`}>
              <Form.Check
                inline
                label={
                  <Image
                    src={creditCard}
                    alt='creditCard'
                    width='200'
                    height='100'
                  />
                }
                name="paymentMethod"
                type='radio'
                id={`inline-radio-2`}
                value='Credit/debit Cards'
                onClick={() => setIsSelectCard(cardHandler)}
                className={`${styles['paymentMethodRadioBtn']} ${isSelectCard ? 'paymentSelected' : ''}`}
              />
              {
                isSelectCard ?
                  <span className={`${styles['paymentMethodSelectedIcon']}`}>
                    <Image
                      src={select}
                      alt='select'
                      width='38'
                      height='38'
                    />
                  </span>
                  :
                  null
              }
            </div>
          </Col>
          <Col lg={4} md={4} xs={4}>
            <div className={`${styles['paymentMethodBoxWrapper']}`}>
              <Form.Check
                inline
                label={
                  <Image
                    src={payPal}
                    alt='payPal'
                    width='200'
                    height='100'
                  />
                }
                name="paymentMethod"
                type='radio'
                id={`inline-radio-3`}
                value='Paypal'
                onClick={() => setIsSelectPayPal(payPalHandler)}
                className={`${styles['paymentMethodRadioBtn']} ${isSelectPayPal ? 'paymentSelected' : ''}`}
              />
              {
                isSelectPayPal ?
                  <span className={`${styles['paymentMethodSelectedIcon']}`}>
                    <Image
                      src={select}
                      alt='select'
                      width='38'
                      height='38'
                    />
                  </span>
                  :
                  null
              }
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}

export default Step2