import { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from '../../../styles/projectDetail.module.css'
// import checkIcon from '../../../public/Assets/Assets/For web/pkg-details.svg'
import Image from 'next/image'

const Optional = ({item}) => {

  
  // console.log('logo optional maped items : ', item.content)
  // const [optionalPackage, setOptionalPackage] = useState({})
  // useEffect(() => {
  //   setOptionalPackage(JSON.parse(localStorage.getItem('Package-Data')))
  // }, [])

  return (
    <>
        <section>
                <Container className={`${styles['detailsMainContainer']}`}>
                    <Row className={`${styles['detailsHeaderRow']}`}>
                        <Col lg={5} md={5} xs={5}>
                            <div className={`${styles['detailsTitleCol']}`}>
                                <Form.Check
                                    type='radio'
                                    name='package details'
                                    label={`${item?.title}`}
                                    id='1'
                                />
                            </div>
                            <div className={`${styles['detailsContentCol']}`}>
                                <p>{item?.content} <span className={`${styles['optionalPackageDiscount']}`}> save{item?.discount}%+</span></p>
                            </div>
                        </Col>
                        <Col lg={2} md={2} xs={2}>
                            <div className={`${styles['detailsPriceCol']}`}>
                                <p>From ${item?.price}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles['detailsFooterRow']} ${'mt-3 w-100'}`}>
                        <Col lg={8} md={8} xs={12} className={`${'ms-4'}`}>
                            <div className={`${styles['detailsFooterCol']} ${'d-flex justify-content-between align-items-center'}`}>
                                {
                                item.options?.map((i, index) => {
                                    return (
                                        <div key={index} className={`${styles['detailsFooterOptionsWrapper']}`}>
                                            <span className={`${styles['packageOptionsBox']} ${'d-flex justify-content-center align-items-center'}`}>
                                                <Image
                                                    src='/Assets/Assets/For web/pkg-details.svg'
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
    </>
  )
}

export default Optional