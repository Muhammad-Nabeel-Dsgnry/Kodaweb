import React from 'react'
import ContactForm from '../../components/Contact/Contact'
import Clients from '../../components/Client/Client'
import InnerPagesBanner from '../../components/InnerPagesBanner/InnerPagesBanner'

const Contact = () => {
  return (
    <div>
      <InnerPagesBanner
        innerBannerTitle='Get Any Consultations ? Contact With Us?'
        innerBannerpara='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque viverra erat, eu egestas nisl mattis in.'
        innerBannerBgImage=''
        innerBannerSideImage=''
        pageName='contact'
      />
      <ContactForm />
      <Clients />
    </div>
  )
}

export default Contact