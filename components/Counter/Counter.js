import React from 'react'
import styles from './Counter.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {

  return (
    <>
        <section className={styles.counter_Section}>
          <Container>
            <Row>
              <Col xs={6} md={3} className={styles.counterCol}>
                <Card className={styles.counter_Section__cardWrapper}>
                  <div className={styles.counter_Section__ImageWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/Project completed.svg" width='60' height='60' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.counter_Section__cardBody}>
                    <Card.Title className={styles.counter_Section__cardTitle}>
                    <VisibilitySensor partialVisibility>
                      {({ isVisible }) => (
                        <div style={{ height: 60 }}>
                          {isVisible ? <CountUp duration={4} end={360} delay={.5} /> : null}
                        </div>
                      )}
                    </VisibilitySensor>
                    </Card.Title>
                    <Card.Text className={styles.counter_Section__cardText}>
                      Project Completed
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3} className={styles.counterCol}>
                <Card className={styles.counter_Section__cardWrapper}>
                  <div className={styles.counter_Section__ImageWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/Satisfied Customer.svg" width='60' height='60' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.counter_Section__cardBody}>
                    <Card.Title className={styles.counter_Section__cardTitle}>
                    <VisibilitySensor partialVisibility>
                      {({ isVisible }) => (
                        <div style={{ height: 60 }}>
                          {isVisible ? <CountUp duration={4} end={890} delay={.5} /> : null}
                        </div>
                      )}
                    </VisibilitySensor>
                    </Card.Title>
                    <Card.Text className={styles.counter_Section__cardText}>
                      Satisfied Customer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card className={styles.counter_Section__cardWrapper}>
                  <div className={styles.counter_Section__ImageWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/working hour.svg" width='60' height='60' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.counter_Section__cardBody}>
                    <Card.Title className={styles.counter_Section__cardTitle}>
                    <VisibilitySensor partialVisibility>
                      {({ isVisible }) => (
                        <div style={{ height: 60 }}>
                          {isVisible ? <CountUp duration={4} end={7900} delay={.5} /> : null}
                        </div>
                      )}
                    </VisibilitySensor>
                    </Card.Title>
                    <Card.Text className={styles.counter_Section__cardText}>
                      Working Hours
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card className={styles.counter_Section__cardWrapper}>
                  <div className={styles.counter_Section__ImageWrapper}>
                    <Card.Img variant="top" src="/Assets/Assets/For Web/Paid ads.svg" width='60' height='60' className={styles.serviceCardImage} />
                  </div>
                  <Card.Body className={styles.counter_Section__cardBody}>
                    <Card.Title className={styles.counter_Section__cardTitle}>
                    <VisibilitySensor partialVisibility>
                      {({ isVisible }) => (
                        <div style={{ height: 60 }}>
                          {isVisible ? <CountUp duration={4} end={234} delay={.5} /> : null}
                        </div>
                      )}
                    </VisibilitySensor>
                    </Card.Title>
                    <Card.Text className={styles.counter_Section__cardText}>
                      Paid Advertisement
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  )
}

export default Counter