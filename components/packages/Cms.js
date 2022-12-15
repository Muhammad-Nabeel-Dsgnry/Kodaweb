import React from 'react'
import { CmsPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const Cms = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        CmsPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default Cms