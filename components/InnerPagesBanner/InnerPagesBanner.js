import React from 'react'
import styles from './InnerPagesBanner.module.css'
// import '../../styles/Services.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

const InnerPagesBanner = (props) => {
    let {innerBannerTitle, innerBannerpara, innerBannerSideImage, pageName} = props
    
  return (
    <>
    {
        pageName == 'contact' ? 
        <section className={`${styles['innerBannerMainWrapper']} ${'d-flex align-items-center'} ${pageName == 'contact' ? styles['contactUs-bg-img'] : null}`}>
            <Container>
                <Row>
                    <Col lg={7}>
                    <div className={`${styles['innerBannerContentWrapper']}`}>
                        <h2>{innerBannerTitle}</h2>
                        <p>{innerBannerpara}</p>
                    </div>
                    </Col>
                    <Col lg={5}>
                        {
                        innerBannerSideImage === 'yes' ? 
                        <Image
                            src='/Assets/Assets/For-Web/moneyBackGuarantee.png'
                            alt='kodaweb-banner-image'
                            width='100'
                            height='100'
                        />
                        :
                        null
                        }
                    </Col>
                </Row>
            </Container>
        </section>
        :
        null
    }
    {
        pageName == 'pricing' ? 
        <section className={`${styles['innerBannerMainWrapper']} ${'d-flex align-items-center'} ${pageName == 'pricing' ? styles['pricing-bg-img'] : null}`}>
            <Container>
                <Row>
                    <Col lg={7} style={{display: 'flex', alignItems: 'center'}}>
                    <div className={`${styles['innerBannerContentWrapper']}`}>
                        <h2>{innerBannerTitle}</h2>
                        <p>{innerBannerpara}</p>
                    </div>
                    </Col>
                    <Col lg={5} style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                        {
                        innerBannerSideImage === 'yes' ? 
                        <Image
                            className={`${styles['innerBannerRigtImage']}`}
                            src='/Assets/Assets/For-Web/moneyBackGuarantee.png'
                            alt='kodaweb-banner-image'
                            width='451'
                            height='368'
                        />
                        :
                        null
                        }
                    </Col>
                </Row>
            </Container>
        </section>
        :
        null
    }
    {
        pageName == 'services' ? 
        <section className={`${styles['innerBannerMainWrapper']} ${'d-flex align-items-center'} ${pageName == 'services' ? styles['services-bg-img'] : null}`}>
            <Container>
                <Row>
                    <Col lg={7}>
                    <div className={`${styles['innerBannerContentWrapper']}`}>
                        <h2>{innerBannerTitle}</h2>
                        <p>{innerBannerpara}</p>
                    </div>
                    </Col>
                    <Col lg={5}>
                        {
                        innerBannerSideImage === 'yes' ? 
                        <Image
                            src='/Assets/Assets/For-Web/moneyBackGuarantee.png'
                            alt='kodaweb-banner-image'
                            width='100'
                            height='100'
                        />
                        :
                        null
                        }
                    </Col>
                </Row>
            </Container>
        </section>
        :
        null
    }
    {
        pageName == 'aboutUs' ? 
        <section className={`${styles['innerBannerMainWrapper']} ${'d-flex align-items-center'} ${pageName == 'aboutUs' ? styles['aboutUs-bg-img'] : null}`}>
            <Container>
                <Row>
                    <Col lg={7}>
                    <div className={`${styles['innerBannerContentWrapper']}`}>
                        <h2>{innerBannerTitle}</h2>
                        <p>{innerBannerpara}</p>
                    </div>
                    </Col>
                    <Col lg={5}>
                        {
                        innerBannerSideImage === 'yes' ? 
                        <Image
                            src='/Assets/Assets/For-Web/moneyBackGuarantee.png'
                            alt='kodaweb-banner-image'
                            width='100'
                            height='100'
                        />
                        :
                        null
                        }
                    </Col>
                </Row>
            </Container>
        </section>
        :
        null
    }
    {
        pageName == 'work' ? 
        <section className={`${styles['innerBannerMainWrapper']}  ${pageName == 'work' ? styles['work-bg-img'] : null}`}>
            <Container>
                <Row>
                    <Col lg={7}>
                    <div className={`${styles['innerBannerContentWrapper']} ${styles['workBannerContentWrapper']}`}>
                        <h2>{innerBannerTitle}</h2>
                        <p>{innerBannerpara}</p>
                    </div>
                    </Col>
                    <Col lg={5}>
                        {
                        innerBannerSideImage === 'yes' ? 
                        <Image
                            src='/Assets/Assets/For-Web/moneyBackGuarantee.png'
                            alt='kodaweb-banner-image'
                            width='100'
                            height='100'
                        />
                        :
                        null
                        }
                    </Col>
                </Row>
            </Container>
        </section>
        :
        null
    }
    </>
  )
}

export default InnerPagesBanner