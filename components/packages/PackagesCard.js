import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from './PackagesCard.module.css'

const PackagesCard = ({ item }) => {
    return (
        <div className={styles.PackagesCardBoxWrapper} data-aos="fade-in" data-aos-duration="2000">
            <div className={styles.PackagesCardBoxHeader}>
                <h2 className={styles.packagesTitle}>{item.title}</h2>
                <h3 className={styles.packagesPrice}>{item.price}</h3>
                <hr className={styles.packagesDivider}></hr>
                <div className={styles.PackagesCardBoxBody}>
                    {
                        item.packageDetails.map((item, key) => {
                            return (
                                <p key={key}>{item}</p>
                            )
                        })
                    }
                </div>
            </div>
            <Button className={`${styles['blueButton']} ${styles['pricingBoxBtn']}`}>Start Projects</Button>
        </div>
    )
}

export default PackagesCard