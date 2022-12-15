import React from 'react'
import Service from '../../components/Services/Services'
import Counter from '../../components/Counter/Counter'
import Testimonials from '../../components/Testimonials/Testimonials'
// import styles from '../../styles/Services.module.css'
import InnerPagesBanner from '../../components/InnerPagesBanner/InnerPagesBanner'
import Skills from '../../components/Skills/Skills'

const Services = () => {
  return (
    <div>
      <InnerPagesBanner
        innerBannerTitle='We Are A Team Of Creative Obsessed With Digital Products!'
        innerBannerpara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.'
        innerBannerSideImage=''
        pageName='services'
      />
      {/* <div className={`${styles['innerPageBannerWrapper']}`}>
        
      </div> */}
      <Service />
      <Skills />
      <Counter />
      <Testimonials />
    </div>
  )
}

export default Services