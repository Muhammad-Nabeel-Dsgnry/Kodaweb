import React from 'react'
import { WebsitePackages } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const Website = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        WebsitePackages.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default Website