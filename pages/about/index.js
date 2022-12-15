import React from 'react'
import InnerPagesBanner from '../../components/InnerPagesBanner/InnerPagesBanner' 
import InnerAboutUs from '../../components/InnerAboutUs/InnerAboutUs'
import Process from '../../components/Process/Process'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import OurTeam from '../../components/OurTeam/OurTeam'
import Cta from '../../components/Cta/Cta'

const About = () => {
  return (
    <>
      <InnerPagesBanner
        innerBannerTitle='The Modern Way to Make Succesful Business'
        innerBannerpara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in.'
        innerBannerBgImage=''
        innerBannerSideImage=''
        pageName='aboutUs'
      />
      <InnerAboutUs /> 
      <Process />
      <WhoWeAre />
      <OurTeam />
      <Cta />
    </>
  )
}

export default About