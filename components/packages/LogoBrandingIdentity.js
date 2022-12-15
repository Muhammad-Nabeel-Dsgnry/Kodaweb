import React from 'react'
import { Logo_Branding_Identity } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const LogoBrandingIdentity = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        Logo_Branding_Identity.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default LogoBrandingIdentity