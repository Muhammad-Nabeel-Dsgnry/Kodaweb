import React from 'react'
import { PortalPackage } from './pricingData'
import PackagesCard from './PackagesCard'
import styles from './Packages.module.css'

const WebApp = () => {
  return (
    <section className={styles.pricingBoxWrapper}>
      {
        PortalPackage.map((items) => {
          return (
            <PackagesCard key={items.id} item={items} pkgdetails={items.packageDetails} />
          )
        })
      }
    </section>
  )
}

export default WebApp