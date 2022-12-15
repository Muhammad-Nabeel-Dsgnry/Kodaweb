import { useState } from 'react'
import InnerPagesBanner from '../../components/InnerPagesBanner/InnerPagesBanner' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Work.module.css'
import Button from 'react-bootstrap/Button';
import LogoPortfolio from '../../components/LogoPortfolio/LogoPortfolio'
import BrandingIdentityPortfolio from '../../components/BrandingIdentityPortfolio/BrandingIdentityPortfolio'
import WebsitePortfolio from '../../components/WebsitePortfolio/WebsitePortfolio'
import AppPortfolio from '../../components/AppPortfolio/AppPortfolio'
import ContactForm from '../../components/Contact/Contact'

const Work = () => {

  const [_LogoPortfolio, setLogoPortfolio] = useState(true)
  const [_BrandingIdentityPortfolio, setBrandingIdentityPortfolio] = useState(false)
  const [_WebsitePortfolio, setWebsitePortfolio] = useState(false)
  const [_AppPortfolio, setAppPortfolio] = useState(false)

  const logoDesign_Handler = () => {
    setLogoPortfolio(true)
    setBrandingIdentityPortfolio(false)
    setWebsitePortfolio(false)
    setAppPortfolio(false)
  }

  const branding_Handler = () => {
    setBrandingIdentityPortfolio(true)
    setLogoPortfolio(false)
    setWebsitePortfolio(false)
    setAppPortfolio(false)
  }

  const website_Handler = () => {
    setWebsitePortfolio(true)
    setBrandingIdentityPortfolio(false)
    setLogoPortfolio(false)
    setAppPortfolio(false)
  }

  const app_Handler = () => {
    setAppPortfolio(true)
    setWebsitePortfolio(false)
    setBrandingIdentityPortfolio(false)
    setLogoPortfolio(false)
  }

  return (
    <>
      <InnerPagesBanner
        innerBannerTitle='A Treasure Trove Of Selcted project'
        innerBannerpara='Spotlighting work that shows different facets of our capabilities, design imagination, coding skills, and branding magic.'
        innerBannerBgImage=''
        innerBannerSideImage=''
        pageName='work'
      />
      <section className={styles.workMainSection}>
        <Container>
          <Row>
            <Col>
              <div className='w-100'>
                <h3 className={styles.lineTitle}>Featured Projects</h3>
                <h2 className={styles.mainTitle}>Get Inspired By Our Finest Work<span className={styles.dot}>.</span></h2>
                <p className={`${styles['Para']} ${styles['colorBlack']}`}>From hot coffee and sneakers to healthcare and spaceships, we’ve helped brands of all kinds and businesses of every size grow their online revenue.</p>
              </div>
            </Col>
          </Row>

          <Row>
            <div className='d-flex' style={{gap: '25px'}}>
              <Button
                className={`${styles['pricingTabsBtn']} ${styles['blueButton']}`}
                onClick={logoDesign_Handler}
                btn='Logo btn'
                >
                {_LogoPortfolio ? 'Logo Design' : 'Logo Design'}
              </Button>
              <Button
                className={`${styles['pricingTabsBtn']} ${styles['blueButton']}`}
                onClick={branding_Handler}
                btn='Branding btn'
                >
                {_BrandingIdentityPortfolio ? 'branding & Identity' : 'branding & Identity'}
              </Button>
              <Button
                className={`${styles['pricingTabsBtn']} ${styles['blueButton']}`}
                onClick={website_Handler}
                >
                {_WebsitePortfolio ? 'Website' : 'Website'}
              </Button>
              <Button
                className={`${styles['pricingTabsBtn']} ${styles['blueButton']}`}
                onClick={app_Handler}
                >
                {_AppPortfolio ? 'App Development' : 'App Development'}
              </Button>
            </div>
            
          </Row>
        </Container>
        <Container fluid='true'>
          <Row>
            <div className={styles.pricingContentWrapper}>
              <div>
                {_LogoPortfolio && <LogoPortfolio />}
                {_BrandingIdentityPortfolio && <BrandingIdentityPortfolio />}
                {_WebsitePortfolio && <WebsitePortfolio />}
                {_AppPortfolio && <AppPortfolio />}
              </div>
            </div>
          </Row>
        </Container>

        <ContactForm />
      </section>
    </>
  )
}

export default Work