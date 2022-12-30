import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './sectionContent.module.css'

const sectionContent = (props) => {

    const {contentTitle, contentMainTitle, contentText, contentColorText} = props

  return (
    <>
        <section className={`${'mt-5 p-0'}`}>
            <Container>
                <Row>
                    <Col xs={12} lg={8} md={8}>
                    <div>
                        <h3 className={`${styles['lineTitle']}`}>{contentTitle}</h3>
                        <h2 className={styles.mainTitle}>{contentMainTitle}<span className={contentColorText ? styles.dot : ''}>{contentColorText}</span></h2>
                        <p className={`${styles['Para']} ${styles['colorBlack']}`}>{contentText}</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default sectionContent