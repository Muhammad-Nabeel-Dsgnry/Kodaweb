import React from 'react'
import { LetterheadStationeryPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const LetterheadStationery = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        LetterheadStationeryPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default LetterheadStationery