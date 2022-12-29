import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from '../Forms.module.css'
import Link from 'next/link';
import { useState } from 'react';
import PhoneInput, { formatPhoneNumberIntl } from 'react-phone-number-input'

const StepTwoForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    console.log('phoneNumber', phoneNumber)

    return (
        <div>
            <Form>
                <Row className={`${styles['formFieldsRow']}`}>
                    <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                        <Form.Group className={`${'mb-3'}`} controlId='formGroupName'>
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Name</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setName(e.target.value)} />
                            <Form.Text className={`${styles['formExampleText']}`}>E.g. Ibhrahim</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                        <Form.Group className={`${'mb-3'}`} controlId='formGroupEmail'>
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Email</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='email' onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className={`${styles['formExampleText']}`}>We'll hold your data according to our <Link href=''>Privacy Policy</Link>.</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
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
                                className={`${styles['formControl']} ${'mb-2'}`}
                            />
                            {/* <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setPhoneNumber(e.target.value)} /> */}
                            <Form.Text className={`${styles['formExampleText']}`}>We'll hold your data according to our <Link href=''>Privacy Policy</Link></Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'}`} controlId='formGroupMessage'>
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Message</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setMessage(e.target.value)} />
                            <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                        </Form.Group>
                    </Col> 
                </Row>
            </Form>
        </div>
      )
}

export default StepTwoForm