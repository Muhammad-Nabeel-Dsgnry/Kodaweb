import React from 'react'
import { GoogleAdWordsPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const GoogleAdWords = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        GoogleAdWordsPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default GoogleAdWords