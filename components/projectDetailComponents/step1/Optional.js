import { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from '../../../styles/projectDetail.module.css'
// import checkIcon from '../../../public/Assets/Assets/For-web/pkg-details.svg'
import mostPopularIcon from '../../../public/Assets/Assets/For-web/star.png'
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
                        <Col lg={5} md={12} xs={12}>
                            <div className={`${styles['detailsTitleCol']} ${styles['optionalDetailsTitleCol']} ${'d-flex justify-content-between align-items-center'}`}>
                                <Form.Check
                                    type='radio'
                                    name='package details'
                                    label={`${item?.title}`}
                                    id='1'
                                    className={`${styles['packageBriefRadio']}`}
                                />
                                <span className={`${'text-white rounded-pill py-2 px-3 text-nowrap'} ${styles['popularIconWrapper']}`}>
                                    <i className={`${'me-3'}`}>
                                        <Image
                                            src={mostPopularIcon}
                                            width={19}
                                            height={18}
                                        />
                                    </i>
                                    {item?.badgetitle}
                                </span>
                            </div>
                            <div className={`${styles['detailsContentCol']}`}>
                                <p>{item?.content} <span className={`${styles['optionalPackageDiscount']}`}> save{item?.discount}%+</span></p>
                            </div>
                        </Col>
                        <Col lg={2} md={12} xs={12}>
                            <div className={`${styles['detailsPriceCol']}`}>
                                <p>From ${item?.price}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles['detailsFooterRow']} ${'mt-3 w-100'}`}>
                        <Col lg={8} md={8} xs={12} className={`${'ms-4'}`}>
                            <div className={`${styles['detailsFooterCol']} ${'d-flex justify-content-start flex-wrap align-items-center'}`}>
                                {
                                item.options?.map((i, index) => {
                                    return (
                                        <div key={index} className={`${styles['detailsFooterOptionsWrapper']} ${'me-3'}`}>
                                            <span className={`${styles['packageOptionsBox']} ${'d-flex justify-content-center align-items-center'}`}>
                                                <Image
                                                    src='/Assets/Assets/For-web/pkg-details.svg'
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