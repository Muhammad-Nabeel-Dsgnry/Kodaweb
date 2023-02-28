import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import styles from './PackagesCard.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { formData } from '../context/Context';

const PackagesCard = ({ item }) => {

    const { setOptionalPackage } = useContext(formData)
    
    let data = {id: item.id, name: item.name, title: item.title, price:item.price, options: item.options, pricing_group: item.pricing_group}

    const onDataSave = () => {
        // const pkgData = localStorage.setItem('Package-Data', JSON.stringify(item))
        const pkgData = localStorage.setItem('Package-Data', JSON.stringify(data))
        setOptionalPackage(item)
    }

    return (
        <div className={styles.PackagesCardBoxWrapper} data-aos="fade-in" data-aos-duration="2000">
            <div className={styles.PackagesCardBoxHeader}>
                <h2 className={styles.packagesTitle}>{item.title}</h2>
                <h3 className={styles.packagesPrice}>${item.price}</h3>
                <hr className={styles.packagesDivider}></hr>
                <div className={styles.PackagesCardBoxBody}>
                    {
                        item.packageDetails.map((item, key) => {
                            return (
                                <>
                                <span className={`${styles['packagesDetailsWrapper']}`}>
                                    <Image
                                        className={`${styles['packagesDetailsIcon']}`}
                                        src='/Assets/Assets/For-web/accept_1.svg'
                                        width='18'
                                        height='18'
                                        alt='check'
                                    />
                                    <p key={key} className={`${styles['packagesDetailsItem']}`}>{item}</p>
                                </span>
                                </>
                            )
                        })
                    }
                </div>
            <Link href={{pathname: `/projectDetail`}} className={`${styles['blueButton']} ${styles['pricingBoxBtn']}`} onClick={onDataSave}>
                Start Projects
            </Link>
            </div>
            {/* <Button className={`${styles['blueButton']} ${styles['pricingBoxBtn']}`}>Start Projects</Button> */}
        </div>
    )
}

export default PackagesCard