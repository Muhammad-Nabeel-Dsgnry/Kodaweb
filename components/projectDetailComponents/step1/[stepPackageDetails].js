import React from 'react'
import SectionContent from '../sectionContent'
// import OptionalPackage from './optionalPackage'
import { useRouter } from 'next/router'
import { Container, Row, Col, Form, Stack } from 'react-bootstrap'
import styles from '../stepPackageDetails.module.css'

const StepPackageDetails = () => {

  const router = useRouter()
  const data = router.query
  console.log('Data : ', data)

  const props = {
    id: data.id,
    name: data.name,
    title: data.title,
    price: data.price,
    options: data.options,
  }

  if(props.id && props.title && props.name) {
    console.log('data received')
  }
  else {
    console.log('data not received')
  }
  
  // console.log('Props : ', props)

  return (
    <>
        <SectionContent
            contentTitle='Package'
            contentMainTitle='Package Details'
            contentText={`Do you need more than a ${props.name}?`}
            contentColorText=''
        />

        <section>
          <Container className={`${styles['detailsMainContainer']}`}>
            <Row className={`${styles['detailsHeaderRow']}`}>
              <Col lg={5} md={5} xs={5}>
                    <div className={`${styles['detailsTitleCol']}`}>
                      <Form.Check
                          type='radio'
                          name={props.name}
                          label={`${props.name} (${props.title})`}
                          id={props.id}
                      />
                    </div>
                    <div className={`${styles['detailsContentCol']}`}>
                      <p>No thanks. Ill just start with the basics for now.</p>
                    </div>
              </Col>
              <Col lg={2} md={2} xs={2}>
                <div className={`${styles['detailsPriceCol']}`}>
                  <p>From {props.price}</p>
                </div>
              </Col>
            </Row>
            <Row className={`${styles['detailsFooterRow']}`}>
              <Col lg={8} md={8} xs={12}>
                <div className={`${styles['detailsFooterCol']}`}>
                    <p>{props.options}</p>
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
        {/* <OptionalPackage /> */}
    </>
  )
}

export default StepPackageDetails