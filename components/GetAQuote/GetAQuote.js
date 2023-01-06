import modalStyles from './GetAQuote.module.css'
import Link from 'next/link'
import PhoneInput from 'react-phone-number-input'
import styles from '../../components/projectDetailComponents/Forms.module.css'
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const GetAQuote = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [industry, setIndustry] = useState('')

    console.log('phoneNumber', phoneNumber)

    return (

        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Stack direction="horizontal" gap={5} className={`${'justify-content-between'}`}>
                        {/* <Row className={`${styles['formFieldsRow']}`}> */}
                        <div className='w-50 mt-4'>
                            {/* <Col className={`${styles['formFieldsCol']}`}> */}
                                <Form.Group className={`${'mb-3'}`} controlId='formGroupName'>
                                    <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Name</Form.Label>
                                    <Form.Control size='lg' className={`${modalStyles['modalInputFields']} ${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setName(e.target.value)} />
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. Ibhrahim</Form.Text>
                                </Form.Group>
                            {/* </Col> */}
                        </div>
                        <div className='w-50 mt-4'>
                            {/* <Col className={`${styles['formFieldsCol']}`}> */}
                                <Form.Group className={`${'mb-3'}`} controlId='formGroupEmail'>
                                    <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Email</Form.Label>
                                    <Form.Control size='lg' className={`${modalStyles['modalInputFields']} ${styles['formControl']} ${'mb-2'}`} type='email' onChange={(e) => setEmail(e.target.value)} />
                                    <Form.Text className={`${styles['formExampleText']}`}>Well hold your data according to our <Link href='#'>Privacy Policy</Link>.</Form.Text>
                                </Form.Group>
                            {/* </Col> */}
                        </div>
                        {/* </Row> */}
                        </Stack>
                        {/* <Row className={`${styles['formFieldsRow']}`}>
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
                        </Row> */}
                        <Row>
                            <Stack direction="horizontal" gap={5} className={`${'justify-content-between'}`}>
                                <div className='w-50 mt-4'>
                            {/* <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}> */}
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
                                        className={` ${styles['formControl']} ${'mb-2'}`}
                                    />
                                    {/* <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setPhoneNumber(e.target.value)} /> */}
                                    <Form.Text className={`${styles['formExampleText']}`}>Well hold your data according to our <Link href=''>Privacy Policy</Link></Form.Text>
                                </Form.Group>
                            {/* </Col> */}
                            </div>
                            <div className='w-50 mt-4'>
                            {/* <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}> */}
                                <Form.Group className={`${'mb-3'}`} controlId='formGroupindustry'>
                                    <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Select your industry</Form.Label>
                                    <Form.Select size='lg' className={`${modalStyles['modalInputFields']} ${styles['formControl']} ${'mb-2'}`} onChange={(e) => setIndustry(e.target.value)} >
                                        <option></option>
                                        <option value='One'>One</option>
                                        <option value='Two'>Two</option>
                                        <option value='Three'>Three</option>
                                    </Form.Select>
                                    <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you dont want one incorporated.</Form.Text>
                                </Form.Group>
                            {/* </Col> */}
                            </div>
                            </Stack>
                        </Row>
                        <Row>
                            <Col lg={12} xs={12} md={12} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupTargetAudience'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Message</Form.Label>
                                <Form.Control size='lg' className={`${modalStyles['modalInputFields']} ${styles['formControl']} ${'mb-2'}`} as='textarea' rows={4} onChange={(e) => setMessage(e.target.value)}/>
                                <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you dont want one incorporated.</Form.Text>
                            </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                <Link href='#' className={`${modalStyles['blueButton']}`}>
                    Submit
                </Link>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default GetAQuote