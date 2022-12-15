import React from 'react'
import { Branding_IdentityPackages } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const BrandingIdentity = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        Branding_IdentityPackages.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default BrandingIdentity