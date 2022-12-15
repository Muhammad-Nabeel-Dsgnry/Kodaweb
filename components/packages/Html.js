import React from 'react'
import { HtmlPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const Html = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        HtmlPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default Html