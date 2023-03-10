import modalStyles from "./GetAQuote.module.css";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import styles from "../../components/projectDetailComponents/Forms.module.css";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { industryData } from "../projectDetailComponents/step1/industryData";
import { quoteApiHelper } from "../../api-helpers/api-helpers";

// Phone Field Focus Style
const phoneFocus = {
  ":focus": {
    border: "1px solid #2c35cd",
  },
};

const GetAQuote = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState("");
//   const [industry, setIndustry] = useState("");
const [phoneNumber, setPhoneNumber] = useState('')

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [industryError, setIndustryError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')
  
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
    industry: ''
  });

  const handleChange = (e) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
  }

  const sendRequest = () => {
    {inputs?.name.trim() === '' ? setNameError('Name is required') : setNameError('')}
    {inputs?.email.trim() === '' ? setEmailError('Email is required') : setEmailError('')}
    {phoneNumber?.length <=1 ? setPhoneNumberError('Phone number is required') : setPhoneNumberError('')}
    {
      inputs.name && inputs.email && phoneNumber &&
      quoteApiHelper({...inputs}, phoneNumber)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
    console.log(inputs)
    setInputs({
      name: '',
      email: '',
      message: '',
      industry: ''
    })
    setPhoneNumber('')
  }

  // const useRef = useRef

  // console.log('phoneNumber', phoneNumber)

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h2 className={`${styles["modalTitle"]}`}>Get A Quote</h2>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {/* <Stack direction="horizontal" gap={5} > */}
            <Row className={`${styles["formFieldsRow"]}`}>
              {/* <div className='w-50 mt-4'> */}
              <Col
                lg={6}
                md={12}
                xs={12}
                className={`${styles["formFieldsCol"]}`}
              >
                <Form.Group className={`${"mb-3"}`} controlId="formGroupName">
                  <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                    Name
                  </Form.Label>
                  <Form.Control
                    name={'name'}
                    value={inputs.name}
                    size="lg"
                    className={`${modalStyles["modalInputFields"]} ${
                      styles["formControl"]
                    } ${"mb-2"}`}
                    type="text"
                    // onChange={(e) => setName(e.target.value)}
                    onChange={handleChange}
                  />
                  <Form.Text className={`${styles["formExampleText"]}`}>
                    {
                      !nameError ? 'E.g. Ibhrahim' : <p style={{color: 'red', margin: '0'}}>{nameError}</p>
                    }
                  </Form.Text>
                </Form.Group>
              </Col>
              {/* </div> */}
              {/* <div className='w-50 mt-4'> */}
              <Col
                lg={6}
                md={12}
                xs={12}
                className={`${styles["formFieldsCol"]}`}
              >
                <Form.Group className={`${"mb-3"}`} controlId="formGroupEmail">
                  <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                    Email
                  </Form.Label>
                  <Form.Control
                    name={'email'}
                    value={inputs.email}
                    size="lg"
                    className={`${modalStyles["modalInputFields"]} ${
                      styles["formControl"]
                    } ${"mb-2"}`}
                    type="email"
                    onChange={handleChange}
                  />
                  <Form.Text className={`${styles["formExampleText"]}`}>
                    {
                      !emailError ? `Well hold your data according to our Privacy Policy.` : <p style={{color: 'red', margin: '0'}}>{emailError}</p> 
                    }
                  </Form.Text>
                </Form.Group>
              </Col>
              {/* </div> */}
            </Row>
            {/* </Stack> */}
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
              {/* <Stack direction="horizontal" gap={5} className={`${'justify-content-between'}`}> */}
              {/* <div className='w-50 mt-4'> */}
              <Col
                lg={6}
                xs={12}
                md={12}
                className={`${styles["formFieldsCol"]} ${"mt-4"}`}
              >
                <Form.Group
                  className={`${"mb-3"} ${styles["phoneNumberInput"]}`}
                  controlId="formGroupNumber"
                >
                  <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                    Phone Number
                  </Form.Label>
                  <PhoneInput
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    placeholder="0000000"
                    international
                    focusInputOnCountrySelection={false}
                    countryCallingCodeEditable={false}
                    defaultCountry="US"
                    className={`${styles["formControl"]} ${"mb-2"} ${
                      styles["modalInputFields"]
                    } ${styles["modalPhoneInputFields"]}`}
                    style={phoneFocus}
                  />
                  {/* <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setPhoneNumber(e.target.value)} /> */}
                  <Form.Text className={`${styles["formExampleText"]}`}>
                    {
                      !phoneNumberError ? `Well hold your data according to our Privacy Policy.` : <p style={{color: 'red', margin: '0'}}>{phoneNumberError}</p> 
                    }
                  </Form.Text>
                </Form.Group>
              </Col>
              {/* </div> */}
              {/* <div className='w-50 mt-4'> */}
              <Col
                lg={6}
                xs={12}
                md={12}
                className={`${styles["formFieldsCol"]} ${"mt-4"}`}
              >
                <Form.Group
                  className={`${"mb-3"}`}
                  controlId="formGroupindustry"
                >
                  <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                    Select your industry
                  </Form.Label>
                  <Form.Select
                    name={'industry'}
                    value={inputs.industry}
                    size="lg"
                    className={`${modalStyles["modalInputFields"]} ${
                      styles["formControl"]
                    } ${"mb-2"}`}
                    // onChange={(e) => setIndustry(e.target.value)}
                    onChange={handleChange}
                  >
                    <option defaultValue={"null"}>Select Industry</option>
                    {industryData.map((item) => {
                      return (
                        <option key={item.value} value={item.industry} name={'industry'} >
                          {item.option}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <Form.Text className={`${styles["formExampleText"]}`}>
                    Tip: Leave blank if you dont want one incorporated.
                  </Form.Text>
                </Form.Group>
              </Col>
              {/* </div> */}
              {/* </Stack> */}
            </Row>
            <Row>
              <Col
                lg={12}
                xs={12}
                md={12}
                className={`${styles["formFieldsCol"]} ${"mt-4"}`}
              >
                <Form.Group
                  className={`${"mb-3"}`}
                  controlId="formGroupTargetAudience"
                >
                  <Form.Label className={`${styles["formLabel"]} ${"mb-3"}`}>
                    Message
                  </Form.Label>
                  <Form.Control
                    name={'message'}
                    value={inputs.message}
                    size="lg"
                    className={`${modalStyles["modalInputFields"]} ${
                      styles["formControl"]
                    } ${"mb-2"}`}
                    as="textarea"
                    rows={4}
                    // onChange={(e) => setMessage(e.target.value)}
                    onChange={handleChange}
                  />
                  <Form.Text className={`${styles["formExampleText"]}`}>
                    Tip: Leave blank if you dont want one incorporated.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
        <Button type='submit' className={` ${modalStyles['blueButton']}`}>Submit</Button>
          </form>
        </Modal.Body>

        {/* <Modal.Footer> */}
          {/* <Link href="#" type='' className={`${modalStyles["blueButton"]}`}>
            Submit
          </Link> */}
          {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default GetAQuote;
