import { Container, Row, Col, ButtonGroup } from 'react-bootstrap'
import styles from '../projectDetailComponents.module.css'
import Image from 'next/image'
import Stepper from '../stepper/stepper'
import StepOneForm from './stepOneForm'
import StepPackageDetails from './[stepPackageDetails].js'
import TimeDuration from './timeDuration'

const  step1 = (props) => {

  const {stepSubTitle, stepMainTitle, stepPara, isImage, colorText} = props

  return (
    <> 
      <section>
        <Container>
          {/* <Row>
              <Stepper />
          </Row> */}
          {/* <Row className={`${'mt-5'}`}>
          <Col xs={12} lg={7} md={7}>
              <div>
                <h3 className={`${styles['lineTitle']}`}>{stepSubTitle}</h3>
                <h2 className={styles.mainTitle}>{stepMainTitle}<span className={colorText ? styles.dot : ''}>{colorText}</span></h2>
                <p className={`${styles['Para']} ${styles['colorBlack']} ${isImage == 'true' ? 'w-100' : 'w-100'}`}>{stepPara}</p>
              </div>
            </Col>
            {
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
            }
          </Row> */}
          <Row>
            <StepOneForm />
            {/* <StepPackageDetails /> */}
            {/* <TimeDuration /> */}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default step1