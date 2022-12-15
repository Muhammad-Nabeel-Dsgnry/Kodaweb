import React from 'react'
import { FacebookAdvertsPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const FacebookAdverts = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        FacebookAdvertsPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default FacebookAdverts