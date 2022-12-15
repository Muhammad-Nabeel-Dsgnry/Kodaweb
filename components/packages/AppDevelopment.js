import React from 'react'
import { App_DevPackages } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const AppDevelopment = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        App_DevPackages.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default AppDevelopment