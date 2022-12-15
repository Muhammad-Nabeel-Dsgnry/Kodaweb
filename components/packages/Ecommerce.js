import React from 'react'
import { E_CommercePackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const Ecommerce = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        E_CommercePackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default Ecommerce