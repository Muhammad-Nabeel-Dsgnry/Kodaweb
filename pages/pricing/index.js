import React from 'react'
import InnerPagesBanner from '../../components/InnerPagesBanner/InnerPagesBanner'
import PricingComponent from '../../components/Pricing/Pricing'

const Pricing = () => {
  return (
    <div>
      <InnerPagesBanner
        innerBannerTitle='Choose the right plan for your business'
        innerBannerpara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in.'
        innerBannerBgImage=''
        innerBannerSideImage='yes'
        pageName='pricing'
      />

      <PricingComponent
      pricingSmTitle='Pricing'
      pricingMainTitle='Logo Design'
      pricingShortPara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.'
      colorText=''
      isButton='false'
      isImage='false'
      isInnerPagePricing='false'
      />

      <PricingComponent
      pricingSmTitle='Pricing'
      pricingMainTitle='Branding & Identity'
      pricingShortPara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.'
      colorText=''
      isButton='false'
      isImage='false'
      isInnerPagePricing='false'
      />

      <PricingComponent
      pricingSmTitle='Pricing'
      pricingMainTitle='Website Design'
      pricingShortPara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.'
      colorText=''
      isButton='false'
      isImage='false'
      isInnerPagePricing='false'
      />

      <PricingComponent
      pricingSmTitle='Pricing'
      pricingMainTitle='Digital Marketing & SEO'
      pricingShortPara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in. Vivamus.'
      colorText=''
      isButton='false'
      isImage='false'
      isInnerPagePricing='false'
      />
    </div>
  )
}

export default Pricing