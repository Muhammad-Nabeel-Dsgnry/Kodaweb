import React from 'react'
import Step1 from '../../components/projectDetailComponents/step1/step1'
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap'
import styles from '../../styles/projectDetail.module.css'
import Image from 'next/image';
import Link from 'next/link';
import GuaranteeIcon from '../../public/Assets/Assets/For web/tick.svg'
import Step2 from '../../components/projectDetailComponents/step2/step2';
import Step3 from '../../components/projectDetailComponents/step3/step3';
import { useState } from 'react';

const Index = () => {

  const [stepOne, setStepOne] = useState(true)
  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)

  const stepOneHandler = () => {
    setStepOne(false)
    setStepTwo(true)
  }
  const stepTwoHandler = () => {
    setStepThree(true)
    setStepTwo(false)
  }
  const backHandler = () => {
    setStepOne(true)
    setStepTwo(false)
  }
  const backHandlerTwo = () => {
    setStepThree(false)
    setStepTwo(true)
  }

  return (
    <>
    <section className={`${styles['projectDetailsMainWrapper']}`}>
      <Container>
        <Row>
          <Col>
          {stepOne ? 
            <Step1
              stepSubTitle='Requirements'
              stepMainTitle='Project Brief'
              stepPara='Fill out the brief so the designers know what you’re looking for.'
              colorText='.'
              isImage='true'
            />
            :
            null
          }
          {
            stepTwo ?
            <Step2
              stepSubTitle='Personal Detail'
              stepMainTitle='Personal Information'
              stepPara='Fill out the personal information it’s help us to get in touch with you if we need.'
              colorText='.'
              isImage='false'
            />
            :
            null
          }
          {
            stepThree ?
            <Step3
              stepSubTitle='Overview'
              stepMainTitle='Summary'
              stepPara=''
              colorText='.'
              isImage='false'
            />
            :
            null
          }
          </Col>
        </Row>

        <Row className={`${'pb-5'}`}>
            <Col lg={4} md={4} xs={6} className={`${'mb-4'}`}>
            <div className={`${styles['stepGuaranteeSec']}`}>
                <span>
                    <Image
                    src={GuaranteeIcon}
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
            {
              stepOne ? 
              <Col lg={4} md={4} xs={6} className={`${'mb-4 '}`}>
              <ButtonGroup>
                  <Link href='' className={`${styles['blueButton']} ${'me-4'}`}>
                    Reset
                  </Link>
                    <Link href='' className={`${styles['blueButton']}`} onClick={stepOneHandler}>
                      Continue
                    </Link>
              </ButtonGroup>
              </Col>
              :
              null
            }
            {
              stepTwo ? 
              <Col lg={4} md={4} xs={6} className={`${'mb-4 '}`}>
              <ButtonGroup>
                  <Link href='' className={`${styles['blueButton']} ${'me-4'}`} onClick={backHandler}>
                    Back
                  </Link>
                    <Link href='' className={`${styles['blueButton']}`} onClick={stepTwoHandler}>
                      Confirm
                    </Link>
              </ButtonGroup>
              </Col>
              :
              null
            }
            {
              stepThree ? 
              <Col lg={4} md={4} xs={6} className={`${'mb-4 '}`}>
              <ButtonGroup>
                  <Link href='' className={`${styles['blueButton']} ${'me-4'}`} onClick={backHandlerTwo}>
                    Back
                  </Link>
                    <Link href='' className={`${styles['blueButton']}`} onClick={stepTwoHandler}>
                      Pay Now
                    </Link>
              </ButtonGroup>
              </Col>
              :
              null
            }
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Index