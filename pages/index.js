import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/Banner'
import Services from '../components/Services/Services';
import Client from '../components/Client/Client';
import Counter from '../components/Counter/Counter';
import Portfolio from '../components/Portfolio/Portfolio';
import Pricing from '../components/Pricing/Pricing';
import Testimonials from '../components/Testimonials/Testimonials';
import AboutUs from '../components/AboutUs/AboutUs';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kodaweb</title>
        <meta name="description" content="Kodaweb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.homeBannerWrapper}>
          <Banner
            h1Text='Creative Digital Agency'
            paraText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus semper accumsan massa, ut pulvinar augue aliquet non.'
            classses={styles['home-banner']}
          />
        </div>
      
        <Services
          isTwoRows='false'
        />
        <Client />
        <Counter />
        <Portfolio />
        <Pricing
          pricingSmTitle='Pricing'
          pricingMainTitle='Choose the right plan for your business'
          pricingShortPara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.'
          colorText='.'
          isButton='true'
          isImage='true'
        />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
    </div>
  )
}