import React from 'react'
import { logoDesignPackages } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const LogoDesign = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        logoDesignPackages.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default LogoDesign