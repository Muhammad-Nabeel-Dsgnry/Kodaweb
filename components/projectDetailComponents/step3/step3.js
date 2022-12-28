import { Container, Row, Col, Stack } from 'react-bootstrap'
import styles from '../projectDetailComponents.module.css'
import style from './step3.module.css'
import Image from 'next/image'
import Stepper from '../stepper/stepper'
import ProjectBrief from './projectBrief'
import OrderTotal from './orderTotal'
import moneyBack from '../../../public/Assets/Assets/For web/moneyBack.png'

const step3 = (props) => {

    const {stepSubTitle, stepMainTitle, stepPara, isImage, colorText} = props

    return (
        <>
        <section>
            <Container>
            <Row>
                <Stepper />
            </Row>
            <Row className={`${'mt-5'}`}>
            <Col xs={12} lg={7} md={7}>
                <div>
                    <h3 className={`${styles['lineTitle']}`}>{stepSubTitle}</h3>
                    <h2 className={styles.mainTitle}>{stepMainTitle}<span className={colorText ? styles.dot : ''}>{colorText}</span></h2>
                    <p className={`${styles['Para']} ${styles['colorBlack']} ${isImage == 'true' ? 'w-100' : 'w-100'}`}>{stepPara}</p>
                </div>
                </Col>
                {
                isImage == 'true' ?
                    <Col className={`${'d-flex justify-content-end'} ${styles['guaranteeImageWrapper']}`} xs={12} lg={5} md={5}>
                    <Image
                        className={styles.guaranteeImage}
                        src='/Assets/Assets/For Web/moneyBack.png'
                        alt='money back guarantee'
                        width='200'
                        height='180'
                    />
                    </Col> :
                    null
                }
            </Row>
            
            <Row>
            <Stack direction="horizontal" gap={4} className={`${style['projectDetailsWrapper']} ${'align-items-start'}`}>
                <Col lg={8} md={8} xs={12} className={`${style['projectDetailsBox']} ${style['briefBox']}`}>
                    <ProjectBrief />
                </Col>
                <Col lg={4} md={4} xs={12} className={`${style['projectDetailsBox']} ${style['totalBox']}`}>
                    <OrderTotal />
                <section className={`${'d-flex justify-content-center align-items-center'}`}>
                    <div className={`${style['summaryGuaranteeImageBox']}`}>
                        <Image
                            src={moneyBack}
                            alt='guarantee image'
                            width={254}
                            height={230}
                        />
                    </div>
                </section>
                </Col>
            </Stack>
            </Row>
            </Container>
        </section>
        </>
    )
}

export default step3