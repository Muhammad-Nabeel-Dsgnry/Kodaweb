import { Container, Row, Col, Form, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import styles from '../../../styles/projectDetail.module.css'
import Image from 'next/image';
import uploadIcon from '../../../public/Assets/Assets/For web/upload.png';
import { SketchPicker } from 'react-color';
import { useState } from 'react';
import SectionContent from '../sectionContent';
import {Logo_Design_Duration, Logo_Branding_Identity_Duration} from './DurationData'
import GuaranteeIcon from '../../../public/Assets/Assets/For web/tick.svg'
import Link from 'next/link';
import ProjectBrief from '../step3/projectBrief';
import Step2 from '../step2/step2';

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

    const handleStepOne = () => {
        setIsStepOne(false)
      }

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

    const [duration, setDuration] = useState('')


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
                                <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setBusinessName(e.target.value)} />
                                <Form.Text className={`${styles['formExampleText']}`}>E.g. Acme</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupSlogan'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Do you have a business slogan?</Form.Label>
                                <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' onChange={(e) => setBusinessSlogan(e.target.value)} />
                                <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupindustry'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Select your industry</Form.Label>
                                <Form.Select size='lg' className={`${styles['formControl']} ${'mb-2'}`} onChange={(e) => setIndustry(e.target.value)} >
                                    <option></option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Form.Select>
                                <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupLogoType'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please select the logo type?</Form.Label>
                                <Form.Select size='lg' className={`${styles['formControl']} ${'mb-2'}`} onChange={(e) => setLogoType(e.target.value)}>
                                    <option></option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Form.Select>
                                <Form.Text className={`${styles['formExampleText']}`}>E.g. Mascot, illustration,Typography etc...</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupTargetAudience'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Describe what your organisation or product does and its target audience</Form.Label>
                                <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} as='textarea' rows={4} onChange={(e) => setProductDescription(e.target.value)} />
                                <Form.Text className={`${styles['formExampleText']}`}>E.g. We sell anvils and other industrial goods to manufacturing companies and hobbyists all.</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupInspiration'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please mention top 3 competitor or any reference link that describe your inspiration.</Form.Label>
                                <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} as='textarea' rows={4} onChange={(e) => setCompetitor(e.target.value)} />
                                <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupcommunicate'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Is there anything else you would like to communicate to the designers?</Form.Label>
                                <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} as='textarea' rows={4} onChange={(e) => setCommunicate(e.target.value)} />
                                <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col lg={5} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupWebsitePages'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please list down the content pages you will have on your website pages?</Form.Label>
                                <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} as='textarea' rows={4} onChange={(e) => setContentPages(e.target.value)} />
                                <Form.Text className={`${styles['formExampleText']}`}>E.g. About Us, privacy Policy, Home,Contact Us, Product Page, Product Detail,Sign In etc....</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={`${'justify-content-between'}`}>
                        <Col lg={4} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupPrimaryColor'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Primary Color</Form.Label>
                                <div className={`${styles['colorPickerWrapper']}`}>
                                    <div className={`${'primaryColorSelectionBox'} ${styles['colorBoxDiv']}`} onClick={() => setPrimarypallet(!primarypallet)}></div>
                                    <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'} ${styles['colorField']}`} type='text' value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
                                    {primarypallet &&
                                        <SketchPicker
                                            styles={pickerStyles}
                                            color={primaryColor}
                                            onChange={prColor => setPrimaryColor(prColor.hex)}
                                        />
                                    }
                                </div>
                                <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col lg={4} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupPrimaryColor'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Secondary Color</Form.Label>
                                <div className={`${styles['colorPickerWrapper']}`}>
                                    <div className={`${'secondaryColorSelectionBox'} ${styles['colorBoxDiv']}`} onClick={() => setSecondarypallet(!secondarypallet)}></div>
                                    <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'} ${styles['colorField']}`} type='text' value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
                                    {secondarypallet &&
                                        <SketchPicker
                                            styles={pickerStyles}
                                            color={secondaryColor}
                                            onChange={scColor => setSecondaryColor(scColor.hex)}
                                        />
                                    }
                                </div>
                                <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col lg={4} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                            <Form.Group className={`${'mb-3'}`} controlId='formGroupPrimaryColor'>
                                <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Ascend Color</Form.Label>
                                <div className={`${styles['colorPickerWrapper']}`}>
                                    <div className={`${'ascendColorSelectionBox'} ${styles['colorBoxDiv']}`} onClick={() => setAscendpallet(!ascendpallet)}></div>
                                    <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'} ${styles['colorField']}`} type='text' value={ascendColor} onChange={(e) => setAscendColor(e.target.value)} />
                                    {ascendpallet &&
                                        <SketchPicker
                                            styles={pickerStyles}
                                            color={ascendColor}
                                            onChange={asColor => setAscendColor(asColor.hex)}
                                        />
                                    }
                                </div>
                                <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text>
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
                    contentText={`Do you need more than a logo?`}
                    contentColorText=''
                />
                <Container className={`${styles['detailsMainContainer']}`}>
                    <Row className={`${styles['detailsHeaderRow']}`}>
                        <Col lg={5} md={5} xs={5}>
                            <div className={`${styles['detailsTitleCol']}`}>
                                <Form.Check
                                    type='radio'
                                    name='name'
                                    label={`label`}
                                    id='1'
                                />
                            </div>
                            <div className={`${styles['detailsContentCol']}`}>
                                <p>No thanks. I'll just start with the basics for now.</p>
                            </div>
                        </Col>
                        <Col lg={2} md={2} xs={2}>
                            <div className={`${styles['detailsPriceCol']}`}>
                                <p>From $80</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles['detailsFooterRow']}`}>
                        <Col lg={8} md={8} xs={12}>
                            <div className={`${styles['detailsFooterCol']}`}>
                                <p>options</p>
                                {/* {
                      props.options.map((i, index) => {
                        return <div key={index}>
                            <Stack direction='horizontal'>
                              <p>{i}</p>
                            </Stack>
                          </div>
                        
                      })
                    } */}
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
                                                        onChange={(e) => setDuration(e.target.value)}
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
                  <Link href='' className={`${styles['blueButton']} ${'me-4'}`}>
                    Reset
                  </Link>
                    <Link href='' className={`${styles['blueButton']}`} onClick={handleStepOne}>
                      Continue
                    </Link>
              </ButtonGroup>
              </Col>
        </Row>
        </section>
        :
        <Step2 businessName={businessName}  industry={industry} logoType={logoType} primaryColor={primaryColor} secondaryColor={secondaryColor} ascendColor={ascendColor} />
                            }
        

        </>
    )
}

export default StepOneForm