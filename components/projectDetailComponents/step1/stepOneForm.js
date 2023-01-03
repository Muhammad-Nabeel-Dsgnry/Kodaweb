import { Container, Row, Col, Form, Dropdown, DropdownButton, ButtonGroup, Stack } from 'react-bootstrap'
import styles from '../../../styles/projectDetail.module.css'
import Image from 'next/image';
import uploadIcon from '../../../public/Assets/Assets/For web/upload.png';
import { SketchPicker } from 'react-color';
import { useState, useEffect } from 'react';
import SectionContent from '../sectionContent';
import {Logo_Design_Duration, Logo_Branding_Identity_Duration} from './DurationData'
import GuaranteeIcon from '../../../public/Assets/Assets/For web/tick.svg'
import Link from 'next/link';
import ProjectBrief from '../step3/projectBrief';
import Step2 from '../step2/step2';
import checkIcon from '../../../public/Assets/Assets/For Web/pkg-details.svg'

const StepOneForm = () => {

    const [isStepOne, setIsStepOne] = useState(true)
    // const [isStepTwo, setIsStepTwo] = useState(false)

    const [businessName, setBusinessName] = useState('')
    const [businessSlogan, setBusinessSlogan] = useState('')
    const [industry, setIndustry] = useState('')
    const [logoType, setLogoType] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [competitor, setCompetitor] = useState('')
    const [communicate, setCommunicate] = useState('')
    const [contentPages, setContentPages] = useState('')

    const [primaryColor, setPrimaryColor] = useState('#FF0000')
    const [primarypallet, setPrimarypallet] = useState(false)
    // console.log('primaryColor', primaryColor)

    const [secondaryColor, setSecondaryColor] = useState('#57C070 ')
    const [secondarypallet, setSecondarypallet] = useState(false)

    const [ascendColor, setAscendColor] = useState('#0066FF')
    const [ascendpallet, setAscendpallet] = useState(false)

    const [packageDetails, setPackageDetails] = useState({})
    const [timeDuration, setTimeDuration] = useState('')
    const handleChange = (e) => {
        setTimeDuration(e.target.value)
        localStorage.setItem('Package-Data', JSON.stringify({timeDuration: e.target.value, ...packageDetails}))
    }
    // console.log('Time Duration', timeDuration)

    let stepOneFormData = {
        businessName,
        businessSlogan,
        industry,
        logoType,
        productDescription,
        competitor,
        communicate,
        contentPages,
        colors: [primaryColor, secondaryColor, ascendColor]
    }
    console.log(stepOneFormData)


    const pickerStyles = {
        default: {
            picker: {
                position: 'absolute',
                bottom: '30px',
                left: '100px'
            }
        }
    }


    // const [logoPackage, setLogoPackage] = useState(JSON.parse(localStorage.getItem('Package-Data')))
    // const [isDisabled, setIsDisabled] = useState('')
    //     {
    //         logoPackage.name.includes('Logo') ? setIsDisabled('disabled') : null
    //     }
    //     console.log('Logo Package', logoPackage.name)
    //     console.log('isDisabled', isDisabled)

    useEffect(() => {
        setPackageDetails(JSON.parse(localStorage.getItem('Package-Data')))
        console.log('package details', packageDetails.name)
    }, [])

    // const [isValid, setIsValid] = useState(false);
    
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    //     // setIsStepOne(false)
    // };

    const handleStepOne = () => {
        if(businessName?.length === 0 || businessSlogan?.length === 0 || industry?.length === 0 || logoType?.length === 0 || productDescription?.length === 0 || competitor?.length === 0 || communicate?.length === 0
            || contentPages?.length === 0 || primaryColor?.length === 0 || secondaryColor?.length === 0 || ascendColor?.length === 0)
        {
            console.log('Button disale')
        }
        else {
            console.log('Button enable')
            setIsStepOne(false)
        }
    }

    const resetFields = () => {
        setBusinessName('')
    }


    return (
        <>
            {
                isStepOne ?
            <section>
            <div>
                {/* COLOR PICKER STYLE START */}
                <style jsx>
                    {`
            .primaryColorSelectionBox {
                background-color: ${primaryColor};
                width: 50px;
                height: 50px;
                border-radius: 4px
                }
            .secondaryColorSelectionBox {
                background-color: ${secondaryColor};
                width: 50px;
                height: 50px;
                border-radius: 4px
                }
            .ascendColorSelectionBox {
                background-color: ${ascendColor};
                width: 50px;
                height: 50px;
                border-radius: 4px
                }
                .hide {
                    display: none
                }
                
            `}
                </style>
                {/* COLOR PICKER STYLE END */}

                    
            {/* <section className='hide'>
                <ProjectBrief businessName={businessName}  industry={industry} logoType={logoType} primaryColor={primaryColor} secondaryColor={secondaryColor} ascendColor={ascendColor} />
            </section> */}
                   <Container>
                    <Row>

                   <Col xs={12} lg={7} md={7}>
              <div>
                <h3 className={`${styles['lineTitle']}`}>Requirements</h3>
                <h2 className={styles.mainTitle}>Project Brief</h2>
                <p className={`${styles['Para']} ${styles['colorBlack']}`}>Fill out the brief so the designers know what you’re looking for.</p>
              </div>
            </Col>
            
                <Col className={`${'d-flex justify-content-end'} ${styles['guaranteeImageWrapper']}`} xs={12} lg={5} md={5}>
                  <Image
                    className={styles.guaranteeImage}
                    src='/Assets/Assets/For Web/moneyBack.png'
                    alt='money back guarantee'
                    width='200'
                    height='180'
                  />
                </Col>
                    </Row>
                    </Container> 
                <Form>
                    <Row className={`${styles['formFieldsRow']} ${'justify-content-between'}`}>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupBusinessName'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Whats your business name?</Form.Label>
                                <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${businessName?.length <= 0 ? 'error' : null}`} type='text' onChange={(e) => setBusinessName(e.target.value)} />
                                {   
                                    businessName?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Business Name is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. Acme</Form.Text>
                                }
                            </Form.Group>
                        </Col>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupSlogan'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Do you have a business slogan?</Form.Label>
                                <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${businessSlogan?.length <= 0 ? 'error' : null}`} type='text' onChange={(e) => setBusinessSlogan(e.target.value)} />
                                {
                                    businessSlogan?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Business Slogan is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. slogan</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupindustry'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Select your industry</Form.Label>
                                <Form.Select size='lg' className={`${styles['formControl']} ${'mb-2'} ${industry?.length <= 0 ? 'error' : null}`} onChange={(e) => setIndustry(e.target.value)} >
                                    <option></option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Form.Select>
                                {
                                    industry?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Industry is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. one</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupLogoType'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please select the logo type?</Form.Label>
                                <Form.Select size='lg' className={`${styles['formControl']} ${'mb-2'} ${logoType?.length <= 0 ? 'error' : null}`} onChange={(e) => setLogoType(e.target.value)} >
                                    <option></option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Form.Select>
                                {
                                    logoType?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Logo Type is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. two</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>E.g. Mascot, illustration,Typography etc...</Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupTargetAudience'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Describe what your organisation or product does and its target audience</Form.Label>
                                <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${productDescription?.length <= 0 ? 'error' : null}`} as='textarea' rows={4} onChange={(e) => setProductDescription(e.target.value)} />
                                {
                                    productDescription?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Product Description is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. Describe what you want.</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>E.g. We sell anvils and other industrial goods to manufacturing companies and hobbyists all.</Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupInspiration'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please mention top 3 competitor or any reference link that describe your inspiration.</Form.Label>
                                <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${competitor?.length <= 0 ? 'error' : null}`} as='textarea' rows={4} onChange={(e) => setCompetitor(e.target.value)} />
                                {
                                    competitor?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Reference links is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. top 3 competitor or any reference link.</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupcommunicate'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Is there anything else you would like to communicate to the designers?</Form.Label>
                                <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${communicate?.length <= 0 ? 'error' : null}`} as='textarea' rows={4} onChange={(e) => setCommunicate(e.target.value)} />
                                {
                                    communicate?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Communication Message is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. communicate to the designers.</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupWebsitePages'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please list down the content pages you will have on your website pages?</Form.Label>
                                <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${contentPages?.length <= 0 ? 'error' : null}`} as='textarea' rows={4} onChange={(e) => setContentPages(e.target.value)} />
                                {
                                    contentPages?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Website Reference link is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. About Us, privacy Policy, Home,Contact Us, Product Page, Product Detail,Sign In etc....</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>E.g. About Us, privacy Policy, Home,Contact Us, Product Page, Product Detail,Sign In etc....</Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                        <Col lg={4} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupPrimaryColor'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Primary Color</Form.Label>
                                <div className={`${styles['colorPickerWrapper']}`}>
                                    <div className={`${'primaryColorSelectionBox'} ${styles['colorBoxDiv']}`} onClick={() => setPrimarypallet(!primarypallet)}></div>
                                    <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${styles['colorField']} ${primaryColor?.length <= 0 ? 'error' : null}`} type='text' value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
                                    {primarypallet &&
                                        <SketchPicker
                                            styles={pickerStyles}
                                            color={primaryColor}
                                            onChange={prColor => setPrimaryColor(prColor.hex)}
                                        />
                                    }
                                </div>
                                {
                                    primaryColor?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Primary Color is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. #000</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col lg={4} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupPrimaryColor'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Secondary Color</Form.Label>
                                <div className={`${styles['colorPickerWrapper']}`}>
                                    <div className={`${'secondaryColorSelectionBox'} ${styles['colorBoxDiv']}`} onClick={() => setSecondarypallet(!secondarypallet)}></div>
                                    <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${styles['colorField']} ${secondaryColor?.length <= 0 ? 'error' : null}`} type='text' value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
                                    {secondarypallet &&
                                        <SketchPicker
                                            styles={pickerStyles}
                                            color={secondaryColor}
                                            onChange={scColor => setSecondaryColor(scColor.hex)}
                                        />
                                    }
                                </div>
                                {
                                    secondaryColor?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Secondary Color is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. #000</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col lg={4} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupPrimaryColor'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Ascend Color</Form.Label>
                                <div className={`${styles['colorPickerWrapper']}`}>
                                    <div className={`${'ascendColorSelectionBox'} ${styles['colorBoxDiv']}`} onClick={() => setAscendpallet(!ascendpallet)}></div>
                                    <Form.Control required size='lg' className={`${styles['formControl']} ${'mb-2'} ${styles['colorField']} ${ascendColor?.length <= 0 ? 'error' : null}`} type='text' value={ascendColor} onChange={(e) => setAscendColor(e.target.value)} />
                                    {ascendpallet &&
                                        <SketchPicker
                                            styles={pickerStyles}
                                            color={ascendColor}
                                            onChange={asColor => setAscendColor(asColor.hex)}
                                        />
                                    }
                                </div>
                                {
                                    ascendColor?.length <= 0 ?
                                    <Form.Text className={`${styles['formExampleText']} ${styles['errorField']}`}>Ascend Color is required</Form.Text>
                                    :
                                    <Form.Text className={`${styles['formExampleText']}`}>E.g. #000</Form.Text>
                                }
                                {/* <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col lg={12} xs={12} md={12} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'}`} controlId='formGroupFileUpload'>
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Do you have any images, sketches or documents that might be helpful?</Form.Label>
                            <div className={`${styles['fileUploadWrapper']} ${'mb-2'}`}>
                                <Image
                                    src={uploadIcon}
                                    alt='image upload'
                                    width='49'
                                    height='40'
                                />
                                <p>Choose File</p>
                                <Form.Control size='lg' className={`${styles['formControl']} ${styles['formFileUploadBtn']}`} type='file' />
                            </div>
                            <Form.Text className={`${styles['formExampleText']} ${styles['formTextCenter']}`}>E.g. Your current logo, fonts, photos, illustrations, content, layout ideas etc.</Form.Text>
                        </Form.Group>
                    </Col>
                </Form>
            </div>
            {/* Package section start */}
            <section>
                <SectionContent
                    contentTitle='Package'
                    contentMainTitle='Package Details'
                    contentText={`Do you need more than a ${packageDetails?.name}?`}
                    contentColorText=''
                />
                <Container className={`${styles['detailsMainContainer']}`}>
                    <Row className={`${styles['detailsHeaderRow']}`}>
                        <Col lg={5} md={5} xs={5}>
                            <div className={`${styles['detailsTitleCol']}`}>
                                <Form.Check
                                    type='radio'
                                    name='package details'
                                    label={`${packageDetails?.name} (${packageDetails?.title})`}
                                    id='1'
                                />
                            </div>
                            <div className={`${styles['detailsContentCol']}`}>
                                <p>No thanks. I'll just start with the basics for now.</p>
                            </div>
                        </Col>
                        <Col lg={2} md={2} xs={2}>
                            <div className={`${styles['detailsPriceCol']}`}>
                                <p>From {packageDetails?.price}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles['detailsFooterRow']} ${'mt-3 w-75'}`}>
                        <Col lg={8} md={8} xs={12} className={`${'ms-4'}`}>
                            <div className={`${styles['detailsFooterCol']} ${'d-flex justify-content-between align-items-center'}`}>
                                {/* <p>{packageDetails?.options}</p> */}
                                {
                                packageDetails.options?.map((i, index) => {
                                    return (
                                        <div className={`${styles['detailsFooterOptionsWrapper']}`}>
                                            <span className={`${styles['packageOptionsBox']} ${'d-flex justify-content-center align-items-center'}`}>
                                                <Image
                                                    src={checkIcon}
                                                    alt='package options'
                                                    width='18'
                                                    height='15'
                                                />
                                                <li className={`${styles['packageOptions']}`} key={index}>{i}</li>
                                            </span>
                                        </div>
                                    ) 
                                })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Package section end */}

            {/* TIME DURATION SECTION START */}
            <section>
                <SectionContent
                    contentTitle='Time Duration'
                    contentMainTitle='Duration'
                    contentText='How long do you want your contest to run for?'
                    contentColorText=''
                />
            </section>
            <section>
                <Container className='mt-3'>
                    <Row>
                        <h6 className={`${styles['durationsTitle']}`}>Select your time duration</h6>
                        <Col lg={6} md={6} xs={12} className={`${styles['timeDurationCol']}`}>
                            <div className={`${styles['timeDurationMainWrapper']}`}>
                                {Logo_Design_Duration.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className={`${styles['timeDurationContentWrapper']}`}>
                                                <div className={`${styles['timeDurationContent']}`}>
                                                    <Form.Check
                                                        type='radio'
                                                        name='time duration'
                                                        label={`${item.time}`}
                                                        id={`${item.id}`}
                                                        onChange={handleChange}
                                                        value={`${item.time}`}
                                                    />
                                                </div>
                                                <div className={`${styles['timeDurationPrice']} ${styles['timeDurationContent']}`}>
                                                    <p>{item.price}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* TIME DURATION SECTION END */}
                            
                            
            <Row className={`${'pb-5'}`}>
            <Col lg={4} md={4} xs={6} className={`${'mb-4'}`}>
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
            <Col lg={4} md={4} xs={6} className={`${'mb-4'}`}>
            
            </Col> 
              <Col lg={4} md={4} xs={6} className={`${'mb-4 '}`}>
              <ButtonGroup>
                  <Link href='' className={`${styles['blueButton']} ${'me-4'}`} onClick={resetFields}>
                    Reset
                  </Link>
                 <Link href='' className={`${styles['blueButton']} ${
                    businessName.length === 0 || businessSlogan.length === 0 || industry.length === 0 || logoType.length === 0 || productDescription.length === 0 || competitor.length === 0 || communicate.length === 0
                    || contentPages.length === 0 || primaryColor.length === 0 || secondaryColor.length === 0 || ascendColor.length === 0 ? 'btnDisable' : null
                    }`
                }
                    onClick={handleStepOne} type='submit'>
                      Continue
                    </Link>
                    {/* <Link href='' className={`${styles['blueButton']}`} onClick={handleStepOne} type='submit'>
                      Continue
                    </Link> */}
              </ButtonGroup>
              </Col>
        </Row>
        </section>
        :
        <Step2 businessName={businessName}  industry={industry} logoType={logoType} primaryColor={primaryColor} secondaryColor={secondaryColor} ascendColor={ascendColor} timeDuration={timeDuration} />
                            }
        

        </>
    )
}

export default StepOneForm