import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SectionContent from '../sectionContent'
import {Logo_Design_Duration, Logo_Branding_Identity_Duration} from './DurationData'
import styles from './timeDuration.module.css'

const timeDuration = () => {

    const [duration, setDuration] = useState('')
    // console.log('duration', duration)

  return (
    <>
        <section>
            <SectionContent
                contentTitle= 'Time Duration'
                contentMainTitle = 'Duration'
                contentText = 'How long do you want your contest to run for?'
                contentColorText = ''
            />
        </section>
        <section>
            <Container className='mt-3'>
                <Row>
                    <h6 className={`${styles['durationsTitle']}`}>Select your time duration</h6>
                    <Col lg={6} md={6} xs={12} className={`${styles['timeDurationCol']}`}>
                    <div className={`${styles['timeDurationMainWrapper']}`}>
                        {Logo_Design_Duration.map((item, index) => {
                            return(
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
    </>
  )
}

export default timeDuration