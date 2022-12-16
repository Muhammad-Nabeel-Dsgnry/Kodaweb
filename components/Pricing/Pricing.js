import React from 'react'
import styles from './Pricing.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import LogoDesign from '../packages/LogoDesign';
import LogoBrandingIdentity from '../packages/LogoBrandingIdentity'
import LogoBrandingIdentityWebsite from '../packages/LogoBrandingIdentityWebsite'
import BrandingIdentity from '../packages/BrandingIdentity';
import Website from '../packages/Website';
import AppDevelopment from '../packages/AppDevelopment';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Mockups from '../packages/Mockups';
import BusinessCard from '../packages/BusinessCard';
import LetterheadStationery from '../packages/LetterheadStationery';
import Packaging from '../packages/Packaging';
import Html from '../packages/Html'
import Cms from '../packages/Cms'
import Ecommerce from '../packages/Ecommerce'
import WebApp from '../packages/WebApp'
import Seo from '../packages/Seo'
import GoogleAdWords from '../packages/GoogleAdWords';
import Retargeting from '../packages/Retargeting';
import FacebookAdverts from '../packages/FacebookAdverts';

const Pricing = (props) => {

  let { pricingSmTitle, pricingMainTitle, colorText, pricingShortPara, isButton, isImage, isInnerPageLogoDesign, isBrandingIdentityPackage, isInnerPagePricing } = props

  const [logoDesign, setLogoDesign] = useState(true)
  const [Branding, setBranding] = useState(false)
  const [Web, setWeb] = useState(false)
  const [App, setApp] = useState(false)
  const [Logo_BrandingIdentity, setLogo_BrandingIdentity] = useState(false)
  const [Logo_BrandingIdentityWeb, setLogo_BrandingIdentityWeb] = useState(false)
  const [_Mockups, set_Mockups] = useState(true)
  const [_BusinessCard, set_BusinessCard] = useState(false)
  const [_LetterheadStationery, set_LetterheadStationery] = useState(false)
  const [_Packaging, set_Packaging] = useState(false)
  const [_Html, set_Html] = useState(true)
  const [_Cms, set_Cms] = useState(false)
  const [_Ecommerce, set__Ecommerce] = useState(false)
  const [_WebApp, set__WebApp] = useState(false)
  const [_Seo, set_Seo] = useState(true)
  const [_GoogleAdWords, set_GoogleAdWords] = useState(false)
  const [_Retargeting, set_Retargeting] = useState(false)
  const [_FacebookAdverts, set_FacebookAdverts] = useState(false)

  const LogoDesignHandler = () => {
    setLogoDesign(true)
    setBranding(false)
    setWeb(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_BusinessCard(false)
    set_LetterheadStationery(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const BrandingIdentityHandler = () => {
    setBranding(true)
    setWeb(false)
    setLogoDesign(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_BusinessCard(false)
    set_LetterheadStationery(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const WebsiteHandler = () => {
    setWeb(true)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_BusinessCard(false)
    set_Mockups(false)
    set_LetterheadStationery(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const AppHandler = () => {
    setApp(true)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_Mockups(false)
    set_BusinessCard(false)
    set_LetterheadStationery(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const Logo_Branding_IdentityHandler = () => {
    setLogo_BrandingIdentity(true)
    setLogoDesign(false)
    setLogo_BrandingIdentityWeb(false)
    set_Mockups(false)
    set_BusinessCard(false)
    set_LetterheadStationery(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const Logo_BrandingIdentityWebHandler = () => {
    setLogo_BrandingIdentityWeb(true)
    setLogoDesign(false)
    setLogo_BrandingIdentity(false)
    set_Mockups(false)
    set_BusinessCard(false)
    set_LetterheadStationery(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const _MockupsHandler = () => {
    set_Mockups(true)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_BusinessCard(false)
    set_LetterheadStationery(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const _BusinessCardHandler = () => {
    set_BusinessCard(true)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_LetterheadStationery(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const _LetterheadStationeryHandler = () => {
    set_LetterheadStationery(true)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_Packaging(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const set_PackagingHandler = () => {
    set_Packaging(true)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_Html(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const set_HtmlHandler = () => {
    set_Html(true)
    set_Packaging(false)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_Cms(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const set_CmsHandler = () => {
    set_Cms(true)
    set_Html(false)
    set_Packaging(false)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set__Ecommerce(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const set_EcommerceHandler = () => {
    set__Ecommerce(true)
    set_Cms(false)
    set_Html(false)
    set_Packaging(false)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set__WebApp(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const set_WebAppHandler = () => {
    set__WebApp(true)
    set__Ecommerce(false)
    set_Cms(false)
    set_Html(false)
    set_Packaging(false)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_Seo(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const set_SeoHandler = () => {
    set_Seo(true)
    set__WebApp(false)
    set__Ecommerce(false)
    set_Cms(false)
    set_Html(false)
    set_Packaging(false)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_GoogleAdWords(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const set_GoogleAdWordsHandler = () => {
    set_GoogleAdWords(true)
    set_Seo(false)
    set__WebApp(false)
    set__Ecommerce(false)
    set_Cms(false)
    set_Html(false)
    set_Packaging(false)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_Retargeting(false)
    set_FacebookAdverts(false)
  }

  const set_RetargetingHandler = () => {
    set_Retargeting(true)
    set_GoogleAdWords(false)
    set_Seo(false)
    set__WebApp(false)
    set__Ecommerce(false)
    set_Cms(false)
    set_Html(false)
    set_Packaging(false)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
    set_FacebookAdverts(false)
  }

  const set_FacebookAdvertsHandler = () => {
    set_FacebookAdverts(true)
    set_Retargeting(false)
    set_GoogleAdWords(false)
    set_Seo(false)
    set__WebApp(false)
    set__Ecommerce(false)
    set_Cms(false)
    set_Html(false)
    set_Packaging(false)
    set_LetterheadStationery(false)
    set_BusinessCard(false)
    set_Mockups(false)
    setWeb(false)
    setLogoDesign(false)
    setBranding(false)
    setApp(false)
    setLogo_BrandingIdentity(false)
    setLogo_BrandingIdentityWeb(false)
  }
  
  return (
    <>
    
      <section className={styles.pricingSection}>
        <Container>
          <Row>
            <Col>
              <div>
                <h3 className={styles.lineTitle}>{pricingSmTitle}</h3>
                {/* <h2 className={styles.mainTitle}>Choose the right plan for your business<span className={styles.dot}>.</span></h2> */}
                {/* <h2 className={styles.mainTitle}>{pricingMainTitle}</h2> */}
                <h2 className={styles.mainTitle}>{pricingMainTitle}<span className={colorText ? styles.dot : ''}>{colorText}</span></h2>
                <p className={`${styles['Para']} ${styles['colorBlack']} ${isImage == 'true' ? 'w-100' : 'w-50'}`}>{pricingShortPara}</p>
              </div>
            </Col>
            {
              isImage == 'true' ?
                <Col className='d-flex justify-content-end'>
                  <Image
                    src='/Assets/Assets/For Web/moneyBack.png'
                    alt='money back guarantee'
                    width='345'
                    height='282'
                  />
                </Col> :
                null
            }
          </Row>

          {/* Logo Design Packages Start */}

            {
              pricingMainTitle == 'Choose the right plan for your business' ? 
              <Row id='logoRow'>
                <div className='d-flex' style={{gap: '25px'}}>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${logoDesign ? 'btnActive' : null}`} onClick={LogoDesignHandler}>
                    {logoDesign ? 'Logo Design' : 'Logo Design'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${Branding ? 'btnActive' : null}`} onClick={BrandingIdentityHandler}>
                    {Branding ? 'Branding Identity' : 'Branding Identity'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${Web ? 'btnActive' : null}`} onClick={WebsiteHandler}>
                    {Web ? 'Website' : 'Website'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${App ? 'btnActive' : null}`} onClick={AppHandler}>
                    {App ? 'App Development' : 'App Development'}
                  </Button>
                </div>
                <div className={styles.pricingContentWrapper}>
                  <div>
                    {logoDesign && <LogoDesign />}
                    {Branding && <BrandingIdentity />}
                    {Web && <Website />}
                    {App && <AppDevelopment />}
                  </div>
                </div>
              </Row>
              :
              null
            }

          {/* Logo Design Packages End */}

          {/* Inner Page Logo Design Packages Start */}

          {
              pricingMainTitle == 'Logo Design' ?
              <Row>
                <div className='d-flex' style={{gap: '25px'}}>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${logoDesign ? 'btnActive' : null}`} onClick={LogoDesignHandler}>
                    {logoDesign ? 'Logo Design' : 'Logo Design'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${Logo_BrandingIdentity ? 'btnActive' : null}`} onClick={Logo_Branding_IdentityHandler}>
                    {Logo_BrandingIdentity ? 'Logo + Branding & Identity' : 'Logo + Branding & Identity'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${Logo_BrandingIdentityWeb ? 'btnActive' : null}`} onClick={Logo_BrandingIdentityWebHandler}>
                    {Logo_BrandingIdentityWeb ? 'Logo + Branding & Identity + Website' : 'Logo + Branding & Identity + Website'}
                  </Button>
                </div>
                <div className={styles.pricingContentWrapper}>
                  <div>
                    {logoDesign && <LogoDesign />}
                    {Logo_BrandingIdentity && <LogoBrandingIdentity />}
                    {Logo_BrandingIdentityWeb && <LogoBrandingIdentityWebsite />}
                  </div>
                </div>
              </Row>
              :
              null
            }

          {/* Inner Page  Logo Design Packages End */}

          {/* Branding & Identity Packages Start */}
          
          {
            pricingMainTitle == 'Branding & Identity' || isInnerPageLogoDesign == 'false' ?
            <Row>
              <div className='d-flex' style={{gap: '25px'}}>
              <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_Mockups ? 'btnActive' : null}`} onClick={_MockupsHandler}>
                {_Mockups ? 'Mockups' : 'Mockups'}
              </Button>
              <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_BusinessCard ? 'btnActive' : null}`} onClick={_BusinessCardHandler}>
                {_BusinessCard ? 'Business card' : 'Business card'}
              </Button>
              <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_LetterheadStationery ? 'btnActive' : null}`} onClick={_LetterheadStationeryHandler}>
                {_LetterheadStationery ? 'Letterhead & Stationery' : 'Letterhead & Stationery'}
              </Button>
              <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_Packaging ? 'btnActive' : null}`} onClick={set_PackagingHandler}>
                {_Packaging ? 'Packaging' : 'Packaging'}
              </Button>
            </div>
            <div className={styles.pricingContentWrapper}>
              <div>
                {_Mockups && <Mockups />}
                {_BusinessCard && <BusinessCard />}
                {_LetterheadStationery && <LetterheadStationery />}
                {_Packaging && <Packaging />}
              </div>
            </div>
            </Row>
            :
            null
          } 

          {/* Branding & Identity Packages End */}

          {/* Website Design Start */}

          {
            pricingMainTitle == 'Website Design' || isInnerPageLogoDesign == 'false' ?
              <Row>
                <div className='d-flex' style={{ gap: '25px' }}>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_Html ? 'btnActive' : null}`} onClick={set_HtmlHandler}>
                    {_Html ? 'HTML' : 'HTML'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_Cms ? 'btnActive' : null}`} onClick={set_CmsHandler}>
                    {_Cms ? 'CMS' : 'CMS'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_Ecommerce ? 'btnActive' : null}`} onClick={set_EcommerceHandler}>
                    {_Ecommerce ? 'E-commerce' : 'E-commerce'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_WebApp ? 'btnActive' : null}`} onClick={set_WebAppHandler}>
                    {_WebApp ? 'Web App' : 'Web App'}
                  </Button>
                </div>
                <div className={styles.pricingContentWrapper}>
                  <div>
                    {_Html && <Html />}
                    {_Cms && <Cms />}
                    {_Ecommerce && <Ecommerce />}
                    {_WebApp && <WebApp />}
                  </div>
                </div>
              </Row>
              :
              null
          }

          {/* Website Design End */}


          {/* Digital Marekting & SEO Start */}

          {
            pricingMainTitle == 'Digital Marketing & SEO' || isInnerPageLogoDesign == 'false' ?
              <Row>
                <div className='d-flex' style={{ gap: '25px' }}>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_Seo ? 'btnActive' : null}`} onClick={set_SeoHandler}>
                    {_Seo ? 'SEO' : 'SEO'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_GoogleAdWords ? 'btnActive' : null}`} onClick={set_GoogleAdWordsHandler}>
                    {_GoogleAdWords ? 'Google AdWords' : 'Google AdWords'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_Retargeting ? 'btnActive' : null}`} onClick={set_RetargetingHandler}>
                    {_Retargeting ? 'Retargeting' : 'Retargeting'}
                  </Button>
                  <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']} ${_FacebookAdverts ? 'btnActive' : null}`} onClick={set_FacebookAdvertsHandler}>
                    {_FacebookAdverts ? 'Facebook Adverts' : 'Facebook Adverts'}
                  </Button>
                </div>
                <div className={styles.pricingContentWrapper}>
                  <div>
                    {_Seo && <Seo />}
                    {_GoogleAdWords && <GoogleAdWords />}
                    {_Retargeting && <Retargeting />}
                    {_FacebookAdverts && <FacebookAdverts />}
                  </div>
                </div>
              </Row>
              :
              null
          }

          {/* Digital Marekting & SEO End */}



          {/* HOME PAGE PRICING START */}
          {/* <Row>
            <div className='d-flex' style={{gap: '25px'}}>
              <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']}`} onClick={LogoDesignHandler}>
                {logoDesign ? 'Logo Design' : 'Logo Design'}
              </Button>
              <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']}`} onClick={BrandingIdentityHandler}>
                {Branding ? 'Branding Identity' : 'Branding Identity'}
              </Button>
              <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']}`} onClick={WebsiteHandler}>
                {Web ? 'Website' : 'Website'}
              </Button>
              <Button className={`${styles['pricingTabsBtn']} ${styles['blueButton']}`} onClick={AppHandler}>
                {App ? 'App Development' : 'App Development'}
              </Button>
            </div>
            <div className={styles.pricingContentWrapper}>
              <div>
                {logoDesign && <LogoDesign />}
                {Branding && <BrandingIdentity />}
                {Web && <Website />}
                {App && <AppDevelopment />}
              </div>
            </div>
          </Row> */}
          {/* HOME PAGE PRICING END */}

          {
            isButton == 'false' ?
              null :
              <Link href='/pricing' className={`${styles['blueButton']} ${'mb-3'}`}>
                View More Prices
              </Link>
          }
        </Container>
      </section>
    </>
  )
}



export default Pricing