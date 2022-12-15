import React from 'react'
import { PackagingPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const Packaging = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        PackagingPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default Packaging