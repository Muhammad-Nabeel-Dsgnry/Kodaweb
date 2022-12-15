import React from 'react'
import { Logo_Branding_Identity_Website } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const LogoBrandingIdentityWebsite = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        Logo_Branding_Identity_Website.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default LogoBrandingIdentityWebsite