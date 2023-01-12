import { Container, Row, Col, Form, ButtonGroup } from 'react-bootstrap'
// import styles from '../Forms.module.css'
import styles from '../../../styles/projectDetail.module.css'
import Link from 'next/link';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import GuaranteeIcon from '../../../public/Assets/Assets/For-web/tick.svg'
import Image from 'next/image';
import SectionContent from '../sectionContent';
import stripe from '../../../public/Assets/Assets/For-web/Stripe.svg'
import creditCard from '../../../public/Assets/Assets/For-web/credit-debit-card.svg'
import payPal from '../../../public/Assets/Assets/For-web/PayPal.svg'
import select from '../../../public/Assets/Assets/For-web/tick.svg'
import ProjectBrief from '../step3/projectBrief';
import Step1 from '../step1/step1';
import Step3 from '../step3/step3';

const StepTwoForm = (props) => {

  const {businessName, industry, logoType, primaryColor, secondaryColor, ascendColor, timeDuration} = props
  // console.log('step one form data', timeDuration)

    const [isStepOne, setIsStepOne] = useState(true)
    const [isStepTwo, setIsStepTwo] = useState(false)
    const [formOne, setFormOne] = useState(false)
    const [state, setState] = useState('')

    const [BusinessName, setbusinessName] = useState(businessName)
    const [Industry, setIndustry] = useState(industry)
    const [LogoType, setLogoType] = useState(logoType)
    const [Colors, setColors] = useState([primaryColor, secondaryColor, ascendColor])
    const [Duration, setDuration] = useState(timeDuration)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [isSelect, setIsSelect] = useState('')

    
    const stepTwoData = [name, email, phoneNumber, message, isSelect]

    // const [passingData, setPassingData] = useState(stepTwoData)

    // console.log('stepTwoData', stepTwoData)

    const handleChange=(e)=>{
      setIsSelect(e.target.value);
    }

    // const handleStepOne = () => {
    //   setIsStepOne(false)
    //   setIsStepTwo(true)
    // }

    const handleStepOne = () => {
      if(name?.length === 0 || email?.length === 0 || phoneNumber?.length === 0 || message?.length === 0 || isSelect?.length === 0)
      {
          // console.log('phoneNumber', phoneNumber.length)
      }
      else {
          // console.log('Button enable')
          setIsStepOne(false)
          setIsStepTwo(true)
      }
  }

  // const handleBack = () => {
  //   {
  //     isStepTwo == 'false' ? <Step1 /> : null
  //   }
  //   // alert('button clicked')
  // }

    // const sendFormTwoDataHandler = () => {
    //     setState(stepTwoData)
    // }


    // const { stepSubTitle, stepMainTitle, stepPara, isImage, colorText } = props

    return (
        <>
            {/* {
                isStepOne === 'true' ?
                <ProjectBrief name={name} email={email} phoneNumber={phoneNumber} message={message} paymentMethod={isSelect} />
                :
                null
              } */}

              {
                isStepOne ?
                <div>
        <section>
            <Row className={`${'mt-5'}`}>
            <Col xs={12} lg={7} md={7}>
              <div>
                  <h3 className={`${styles['lineTitle']}`}>Personal Detail</h3>
                  <h2 className={styles.mainTitle}>Personal Information.</h2>
                  <p className={`${styles['Para']} ${styles['colorBlack']}`}>Fill out the personal information it’s help us to get in touch with you if we need.</p>
              </div>
              </Col>
            </Row>
            <Form>
                <Row className={`${styles['formFieldsRow']} ${'justify-content-between'}`}>
                    <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                        <Form.Group className={`${'mb-3'}`} controlId='formGroupName'>
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Name</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'} ${name?.length <= 0 ? 'error' : null}`} type='text' onChange={(e) => setName(e.target.value)} />
                            {
                              name?.length <= 0 ?
                              <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Name is required</Form.Text>
                              :
                              <Form.Text className={`${styles['formExampleText']}`}>E.g. Acme</Form.Text>
                            }
                            {/* <Form.Text className={`${styles['formExampleText']}`}>E.g. Ibhrahim</Form.Text> */}
                        </Form.Group>
                    </Col>
                    <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                        <Form.Group className={`${'mb-3'}`} controlId='formGroupEmail'>
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Email</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'} ${email?.length <= 0 ? 'error' : null}`} type='email' onChange={(e) => setEmail(e.target.value)} />
                            {
                              email?.length <= 0 ?
                              <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Email is required</Form.Text>
                              :
                              <Form.Text className={`${styles['formExampleText']}`}>E.g. Acme</Form.Text>
                            }
                            {/* <Form.Text className={`${styles['formExampleText']}`}>We'll hold your data according to our <Link href=''>Privacy Policy</Link>.</Form.Text> */}
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                    <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'} ${styles['phoneNumberInput']}`} controlId='formGroupNumber'>
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Phone Number</Form.Label>
                            <PhoneInput
                                placeholder="0000000"
                                international
                                focusInputOnCountrySelection={false}
                                countryCallingCodeEditable={false}
                                value={phoneNumber}
                                defaultCountry='US'
                                onChange={setPhoneNumber}
                                className={`${styles['formControl']} ${'mb-2'} ${phoneNumber?.length <= 3 ? 'error' : null}`}
                            />
                            {/* <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setPhoneNumber(e.target.value)} /> */}
                            {
                              phoneNumber?.length <= 3 ?
                              <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Phone Number is required</Form.Text>
                              :
                              <Form.Text className={`${styles['formExampleText']}`}>E.g. 0000000</Form.Text>
                            }
                            {/* <Form.Text className={`${styles['formExampleText']}`}>We'll hold your data according to our <Link href=''>Privacy Policy</Link></Form.Text> */}
                        </Form.Group>
                    </Col>
                    <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'}`} controlId='formGroupMessage'>
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Message</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'} ${message?.length <= 0 ? 'error' : null}`} type='text' onChange={(e) => setMessage(e.target.value)} />
                            {
                              message?.length <= 0 ?
                              <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Message is required</Form.Text>
                              :
                              <Form.Text className={`${styles['formExampleText']}`}>E.g. Acme</Form.Text>
                            }
                            {/* <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text> */}
                        </Form.Group>
                    </Col> 
                </Row>
            </Form>
        </section>
        <section>
        <Row className={`${'mt-5'}`}>
          <SectionContent
            contentTitle='Payment Method'
            contentMainTitle='Choose payment method'
            contentText='Select the payment method which is best suit for you.'
          />
        </Row>

        <Row className={`${styles['paymentMethodMainWrapper']}`}>
          <Col lg={4} md={12} xs={12} className={`${'my-2'}`}>
            <div className={`${styles['paymentMethodBoxWrapper']}`}>
              <Form.Check
                inline
                label={
                  <Image
                    src={stripe}
                    alt='stripe'
                    width='200'
                    height='100' 
                    htmlFor='Stript'                      
                    />
                }
                name="paymentMethod"
                type='radio'
                id={`stripe`}
                value='Stripe'
                onChange={handleChange}
                checked={isSelect === 'Stripe'}
                className={`${styles['paymentMethodRadioBtn']} ${isSelect === 'Stripe' ? 'paymentSelected' : ''}`}
              />
              {
                isSelect === 'Stripe' ?
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
          <Col lg={4} md={12} xs={12} className={`${'my-2'}`}>
            <div className={`${styles['paymentMethodBoxWrapper']}`}>
              <Form.Check
                inline
                label={
                  <Image
                    src={creditCard}
                    alt='creditCard'
                    width='200'
                    height='100'
                    htmlFor='creditCard'
                  />
                }
                name="paymentMethod"
                type='radio'
                id={`creditCard`}
                value='Credit/debit Cards'
                checked={isSelect === 'Credit/debit Cards'}
                onChange={handleChange}
                className={`${styles['paymentMethodRadioBtn']} ${isSelect === 'Credit/debit Cards' ? 'paymentSelected' : ''}`}
              />
              {
                isSelect === 'Credit/debit Cards' ?
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
          <Col lg={4} md={12} xs={12} className={`${'my-2'}`}>
            <div className={`${styles['paymentMethodBoxWrapper']}`}>
              <Form.Check
                inline
                label={
                  <Image
                    src={payPal}
                    alt='payPal'
                    width='200'
                    height='100'
                    htmlFor='payPal'
                  />
                }
                name="paymentMethod"
                type='radio'
                id={`payPal`}
                value='payPal'
                checked={isSelect === 'payPal'}
                onChange={handleChange}
                className={`${styles['paymentMethodRadioBtn']} ${isSelect === 'payPal' ? 'paymentSelected' : ''}`}
              />
              {
                isSelect === 'payPal' ?
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
          {
            isSelect.length <= 0 ?
            <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Please Select any payment method</Form.Text>
            :
            // <Form.Text className={`${styles['formExampleText']}`}>E.g. Acme</Form.Text>
            null
          }
        </Row>
        </section>
        <Container>
        <Row className={`${'pb-5'}`}>
            <Col lg={6} md='auto' xs='auto' className={`${'mb-4 d-flex justify-content-start p-0'}`}>
            <div className={`${styles['stepGuaranteeSec']}`}>
                <span>
                    <Image
                    src={GuaranteeIcon}
                    alt='GuaranteeIcon'
                    width='65'
                    height='65'
                    />
                </span>
                <div>
                    <h6>100% money back guarantee</h6>
                    <p>A design you love or your money back</p>
                </div>
            </div>
            </Col>
            {/* <Col lg={4} md={4} xs={6} className={`${'mb-4'}`}>
            
            </Col>  */}
              <Col lg={6} md='auto' xs='auto' className={`${'mb-4 d-flex justify-content-end p-0'}`}>
              <ButtonGroup>
                  <button className={`${styles['blueButton']} ${'me-4'}`}>
                    Back
                  </button>
                    <button href='' className={`${styles['blueButton']} ${
                    name?.length === 0 || email?.length === 0 || phoneNumber?.length === 0 || message?.length === 0 || isSelect?.length === 0 ? 'btnDisable' : null }`
                    }
                    onClick={handleStepOne}>
                      Continue
                    </button>
                    {/* <Link href='' className={`${styles['blueButton']}`} onClick={handleStepOne}>
                      Continue
                    </Link> */}
              </ButtonGroup>
              </Col>
        </Row>
        </Container>
                </div>
        :
        <Step3 name={name} email={email} phoneNumber={phoneNumber} message={message} paymentMethod={isSelect} businessName={BusinessName} industry={Industry} logoType={LogoType} colors={Colors} duration={Duration} />
              }
        </>
      )
}

export default StepTwoForm