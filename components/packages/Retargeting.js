import React from 'react'
import { RetargetingPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const Retargeting = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        RetargetingPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default Retargeting