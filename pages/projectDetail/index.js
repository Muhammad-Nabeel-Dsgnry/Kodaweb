import React from 'react'
import Step1 from '../../components/projectDetailComponents/step1/step1'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/projectDetail.module.css'

const index = () => {
  return (
    <>
    <section className={`${styles['projectDetailsMainWrapper']}`}>
      <Container>
        <Row>
          <Col>
            <Step1
              stepSubTitle='Requirements'
              stepMainTitle='Project Brief'
              stepPara='Fill out the brief so the designers know what you’re looking for.'
              colorText='.'
              isImage='true'
            />
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default index