import React from 'react'
import { BusinessCardPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const BusinessCard = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        BusinessCardPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default BusinessCard