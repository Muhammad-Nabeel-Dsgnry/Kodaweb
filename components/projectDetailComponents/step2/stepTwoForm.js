import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from '../Forms.module.css'
import Image from 'next/image';
import Link from 'next/link';

const stepTwoForm = () => {
    return (
        <div>
            <Form>
                <Row className={`${styles['formFieldsRow']}`}>
                    <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                        <Form.Group className={`${'mb-3'}`} controlId="formGroupName">
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Name</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type="text" />
                            <Form.Text className={`${styles['formExampleText']}`}>E.g. Ibhrahim</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']}`}>
                        <Form.Group className={`${'mb-3'}`} controlId="formGroupEmail">
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Email</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type="email" />
                            <Form.Text className={`${styles['formExampleText']}`}>We'll hold your data according to our <Link href=''>Privacy Policy</Link>.</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'}`} controlId="formGroupNumber">
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Phone Number</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type="text" />
                            <Form.Text className={`${styles['formExampleText']}`}>We'll hold your data according to our <Link href=''>Privacy Policy</Link></Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={6} xs={12} md={6} className={`${styles['formFieldsCol']} ${'mt-4'}`}>
                        <Form.Group className={`${'mb-3'}`} controlId="formGroupMessage">
                            <Form.Label className={`${styles['formLabel']} ${'mb-3'}`}>Message</Form.Label>
                            <Form.Control size='lg' className={`${styles['formControl']} ${'mb-2'}`} type="text" />
                            <Form.Text className={`${styles['formExampleText']}`}>Tip: Leave blank if you don't want one incorporated.</Form.Text>
                        </Form.Group>
                    </Col> 
                </Row>
            </Form>
        </div>
      )
}

export default stepTwoForm