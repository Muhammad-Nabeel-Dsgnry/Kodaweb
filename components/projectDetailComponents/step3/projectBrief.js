import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from '../Forms.module.css'
import BriefStyle from './projectBrief.module.css'
import Link from 'next/link';

const projectBrief = (props) => {

  const {name, email, phoneNumber, message, paymentMethod, businessName, industry, logoType, colors} = props

  console.log('Project Brief Data', businessName)

  return (
    <>
      <section className={`${BriefStyle['mainSection']}`}>
        <h6 className={`${BriefStyle['mainTitle']}`}>Proect Brief</h6>
        <Form>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupName">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Your business name</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue={businessName} />
                </Form.Group>
            </Col>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupEmail">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Your industry</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue={industry} />
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupName">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Your Logo type</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue={logoType} />
                </Form.Group>
            </Col>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupEmail">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Your selected colors</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue={colors} />
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupName">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Selected time duration</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue="3 Days" />
                </Form.Group>
            </Col>
          </Row>
        </Form>
      </section>

      <section className={`${BriefStyle['briefMainSection']} ${BriefStyle['mainSection']}`}>
        <h6 className={`${BriefStyle['mainTitle']}`}>Personal Information</h6>
        <Form>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupName">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Your name</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue={name} />
                </Form.Group>
            </Col>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupEmail">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Email</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue={email} />
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupName">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Phone Number</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue={phoneNumber} />
                </Form.Group>
            </Col>
            </Row>
        </Form>
      </section>

      <section className={`${BriefStyle['briefMainSection']}`}>
        <h6 className={`${BriefStyle['mainTitle']} ${'mb-4'}`}>Payment Method</h6>
        <Form>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                <Form.Group className={`${'mb-3'}`} controlId="formGroupName">
                    <Form.Label className={`${styles['formLabel']} ${'mb-1'}`}>Your Choise</Form.Label>
                    <Form.Control size='lg' className={`${BriefStyle['readOnlyText']} ${'mb-2'}`} type="text" readOnly plaintext defaultValue={paymentMethod} />
                </Form.Group>
            </Col>
            </Row>
        </Form>
      </section>
    </>
  )
}

export default projectBrief