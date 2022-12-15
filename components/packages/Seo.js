import React from 'react'
import { SeoPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const Seo = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        SeoPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default Seo