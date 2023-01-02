import { Container, Row, Col, Stack, ButtonGroup } from 'react-bootstrap'
import styles from '../projectDetailComponents.module.css'
import style from './step3.module.css'
import Image from 'next/image'
import Stepper from '../stepper/stepper'
import ProjectBrief from './projectBrief'
import OrderTotal from './orderTotal'
import moneyBack from '../../../public/Assets/Assets/For web/moneyBack.png'
import GuaranteeIcon from '../../../public/Assets/Assets/For web/tick.svg'
import Link from 'next/link';


const step3 = (props) => {

    const {name, email, phoneNumber, message, paymentMethod} = props

    console.log('secondFormData', props)

    return (
        <>
        <section>
            <Container>
            {/* <Row>
                <Stepper />
            </Row> */}
            <Row className={`${'mt-5'}`}>
            <Col xs={12} lg={7} md={7}>
                <div>
                    <h3 className={`${styles['lineTitle']}`}>Overview</h3>
                    <h2 className={styles.mainTitle}>Summary</h2>
                    {/* <p className={`${styles['Para']} ${styles['colorBlack']}`}>{stepPara}</p> */}
                </div>
                </Col>
                {/* {
                isImage == 'true' ?
                    <Col className={`${'d-flex justify-content-end'} ${styles['guaranteeImageWrapper']}`} xs={12} lg={5} md={5}>
                    <Image
                        className={styles.guaranteeImage}
                        src='/Assets/Assets/For Web/moneyBack.png'
                        alt='money back guarantee'
                        width='200'
                        height='180'
                    />
                    </Col> :
                    null
                } */}
            </Row>
            
            <Row>
            <Stack direction="horizontal" gap={4} className={`${style['projectDetailsWrapper']} ${'align-items-start'}`}>
                <Col lg={8} md={8} xs={12} className={`${style['projectDetailsBox']} ${style['briefBox']}`}>
                    <ProjectBrief name={name} email={email} phoneNumber={phoneNumber} message={message} paymentMethod={paymentMethod} />
                </Col>
                <Col lg={4} md={4} xs={12} className={`${style['projectDetailsBox']} ${style['totalBox']}`}>
                    <OrderTotal />
                <section className={`${'d-flex justify-content-center align-items-center'}`}>
                    <div className={`${style['summaryGuaranteeImageBox']}`}>
                        <Image
                            src={moneyBack}
                            alt='guarantee image'
                            width={254}
                            height={230}
                        />
                    </div>
                </section>
                </Col>
            </Stack>
            </Row>
            </Container>


            <Row className={`${'pb-5'}`}>
            <Col lg={4} md={4} xs={6} className={`${'mb-4'}`}>
            <div className={`${style['stepGuaranteeSec']}`}>
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
            <Col lg={4} md={4} xs={6} className={`${'mb-4'}`}>
            
            </Col> 
              <Col lg={4} md={4} xs={6} className={`${'mb-4 '}`}>
              <ButtonGroup>
                  <Link href='/pricing' className={`${style['blueButton']} ${'me-4'}`}>
                    Cancel
                  </Link>
                    <Link href='' className={`${style['blueButton']}`}>
                      Pay Now
                    </Link>
              </ButtonGroup>
              </Col>
        </Row>
        </section>
        </>
    )
}

export default step3