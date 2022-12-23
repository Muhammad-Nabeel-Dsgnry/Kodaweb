import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from '../Forms.module.css'
import Image from 'next/image';
import uploadIcon from '../../../public/Assets/Assets/For web/upload.png';

const stepOneForm = () => {
  return (
    <div>
        <Form>
            <Row className={`${styles['formFieldsRow']}`}>
                <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupBusinessName">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Whats your business name?</Form.Label>
                        <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type="text" />
                        <Form.Text className={`${styles['formExampleText']}`}>E.g. Acme</Form.Text>
                    </Form.Group>
                </Col>
                <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupSlogan">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Do you have a business slogan?</Form.Label>
                        <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type="text" />
                        <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                    </Form.Group>
                </Col>
                <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupindustry">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Select your industry</Form.Label>
                        <Form.Select size='lg' className={`${styles['formControl']} ${'mb-2'}`}>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </Form.Select>
                        <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                    </Form.Group>
                </Col>
                <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupLogoType">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please select the logo type?</Form.Label>
                        <Form.Select size='lg' className={`${styles['formControl']} ${'mb-2'}`}>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </Form.Select>
                        <Form.Text className={`${styles['formExampleText']}`}>E.g. Mascot, illustration,Typography etc...</Form.Text>
                    </Form.Group>
                </Col>
                <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupTargetAudience">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Describe what your organisation or product does and its target audience</Form.Label>
                        <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} as="textarea" rows={4} />
                        <Form.Text className={`${styles['formExampleText']}`}>E.g. We sell anvils and other industrial goods to manufacturing companies and hobbyists all over the world.</Form.Text>
                    </Form.Group>
                </Col>
                <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupInspiration">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please mention top 3 competitor or any reference link that describe your inspiration.</Form.Label>
                        <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} as="textarea" rows={4} />
                        <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                    </Form.Group>
                </Col>
                <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupcommunicate">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Is there anything else you would like to communicate to the designers?</Form.Label>
                        <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} as="textarea" rows={4} />
                        <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                    </Form.Group>
                </Col>
                <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupWebsitePages">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Please list down the content pages you will have on your website pages?</Form.Label>
                        <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} as="textarea" rows={4} />
                        <Form.Text className={`${styles['formExampleText']}`}>E.g. About Us, privacy Policy, Home,Contact Us, Product Page, Product Detail,Sign In,Sign Up, Servicec etc...</Form.Text>
                    </Form.Group>
                </Col>
                <Row>
                    <Col lg={4} xs={6} md={4} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'}`} controlId="formGroupPrimaryColor">
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Primary Color</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type='text' />
                            <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={4} xs={6} md={4} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'}`} controlId="formGroupPrimaryColor">
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Primary Color</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type="text" />
                            <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={4} xs={6} md={4} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'}`} controlId="formGroupPrimaryColor">
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Primary Color</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type="text" />
                            <Form.Text className={`${styles['formExampleText']}`}>Pick the colors from above colors picker which help us.</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Col lg={12} xs={12} md={12} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                    <Form.Group className={`${'mb-3'}`} controlId="formGroupFileUpload">
                        <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Do you have any images, sketches or documents that might be helpful?</Form.Label>
                        <div className={`${styles['fileUploadWrapper']} ${'mb-2'}`}>
                            <Image
                                src={uploadIcon}
                                width='49'
                                height='40'
                            />
                            <p>Choose File</p>
                            <Form.Control size='lg' className={`${styles['formControl']} ${styles['formFileUploadBtn']}`} type='file' />
                        </div>
                        <Form.Text className={`${styles['formExampleText']}`}>E.g. Your current logo, fonts, photos, illustrations, content, layout ideas etc.</Form.Text>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default stepOneForm