import React from 'react'
import { MockupsPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const Mockups = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        MockupsPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default Mockups