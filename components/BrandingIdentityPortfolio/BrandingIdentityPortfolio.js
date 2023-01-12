import styles from './BrandingIdentityPortfolio.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import BrandingPortfolio1 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-1.jpg' 
import BrandingPortfolio2 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-2.jpg' 
import BrandingPortfolio3 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-3.jpg' 
import BrandingPortfolio4 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-4.jpg' 
import BrandingPortfolio5 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-5.jpg' 
import BrandingPortfolio6 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-6.jpg' 
import BrandingPortfolio7 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-7.jpg' 
import BrandingPortfolio8 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-8.jpg' 
import BrandingPortfolio9 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-9.jpg' 
import BrandingPortfolio10 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-10.jpg' 
import BrandingPortfolio11 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-11.jpg' 
import BrandingPortfolio12 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-12.jpg' 
import BrandingPortfolio13 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-13.jpg' 
import BrandingPortfolio14 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-14.jpg' 
import BrandingPortfolio15 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-15.jpg' 
import BrandingPortfolio16 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-16.jpg' 
import BrandingPortfolio17 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-17.jpg' 
import BrandingPortfolio18 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-18.jpg' 
import BrandingPortfolio19 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-19.jpg' 
import BrandingPortfolio20 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-20.jpg' 
import BrandingPortfolio21 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-21.jpg' 
import BrandingPortfolio22 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-22.jpg' 
import BrandingPortfolio23 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-23.jpg' 
import BrandingPortfolio24 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-24.jpg' 
import BrandingPortfolio25 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-25.jpg' 
import BrandingPortfolio26 from '../../public/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-26.jpg' 

const BrandingIdentityPortfolio = () => {

    return (
        <>
            <section className={styles.logo_portfolio_section}>
                <Container fluid='true' className='p-0'>
                    <Row>
                        <Stack direction="horizontal" gap={0} className={`${'justify-content-between w-100'} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                            alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src={'/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-1.jpg'}
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    alt='BrandingPortfolio-1'
                                    src={BrandingPortfolio1}
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-2.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    alt='BrandingPortfolio-2'
                                    src={BrandingPortfolio2}
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-3.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    alt='BrandingPortfolio-3'
                                    src={BrandingPortfolio3}
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-4.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    alt='BrandingPortfolio-4'
                                    src={BrandingPortfolio4}
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-5.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    alt='BrandingPortfolio-5'
                                    src={BrandingPortfolio5}
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-6.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    alt='BrandingPortfolio-6'
                                    src={BrandingPortfolio6}
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        </Stack>

                        <Stack direction="horizontal" gap={0} className={`${'justify-content-between w-100'} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                            <Image
                                            alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-7.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        alt='BrandingPortfolio-7'
                                        src={BrandingPortfolio7}
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                            <Image
                                            alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-8.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        alt='BrandingPortfolio-8'
                                        src={BrandingPortfolio8}
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                            <Image
                                            alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-9.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        alt='BrandingPortfolio-9'
                                        src={BrandingPortfolio9}
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                            <Image
                                            alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-10.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        alt='BrandingPortfolio-10'
                                        src={BrandingPortfolio10}
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                            <Image
                                            alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-11.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        alt='BrandingPortfolio-11'
                                        src={BrandingPortfolio11}
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-12.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    alt='BrandingPortfolio-12'
                                    src={BrandingPortfolio12}
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        </Stack>

                        <Stack direction="horizontal" gap={0} className={`${'justify-content-between w-100'} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
                        
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-13.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    alt='BrandingPortfolio-13'
                                    src={BrandingPortfolio13}
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-14.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio14}
                                    alt='BrandingPortfolio-14'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-15.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio15}
                                    alt='BrandingPortfolio-15'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-16.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio16}
                                    alt='BrandingPortfolio-16'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-17.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio17}
                                    alt='BrandingPortfolio-17'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-18.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio18}
                                    alt='BrandingPortfolio-18'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        </Stack>

                        <Stack direction="horizontal" gap={0} className={`${'justify-content-between w-100'} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-19.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio19}
                                    alt='BrandingPortfolio-19'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-20.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio20}
                                    alt='BrandingPortfolio-20'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-21.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio21}
                                    alt='BrandingPortfolio-21'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-22.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio22}
                                    alt='BrandingPortfolio-22'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-23.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio23}
                                    alt='BrandingPortfolio-23'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-24.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio24}
                                    alt='BrandingPortfolio-24'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        </Stack>

                        <Stack direction="horizontal" gap={0} className={`${'justify-content-start'} ${styles['w-660']} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-25.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio25}
                                    alt='BrandingPortfolio-25'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For-web/Branding_Identity_Portfolio/kodaweb-Branding-Identity-Portfolio-26.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={BrandingPortfolio26}
                                    alt='BrandingPortfolio-26'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']} ${styles['mobileHideImageBox']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/Rectangle 159.jpg'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']} ${styles['mobileHideImageBox']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/Group 12.jpg'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']} ${styles['mobileHideImageBox']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/Rectangle 168.jpg'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        <div className={`${styles['testimonial']} ${styles['mobileHideImageBox']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For-web/cross.svg'
                                            width='20'
                                            height='20'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/Group 5.jpg'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        </Stack>




                        {/* <Stack direction="horizontal" gap={0} className='justify-content-between w-100'>
                            <div className="">
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/portfolio11.png'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                    data-fancybox="gallery"
                                    data-src='/Assets/Assets/For-web/one.jpg'
                                />
                                <div className={`${styles['portfolioHover']}`}></div>
                            </div>
                            <div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/portfolio12.png'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                    data-fancybox="gallery"
                                    data-src='/Assets/Assets/For-web/one.jpg'
                                />
                            </div>
                            <div className="">
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/portfolio13.png'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                    data-fancybox="gallery"
                                    data-src='/Assets/Assets/For-web/one.jpg'
                                />
                            </div>
                            <div className="">
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/portfolio14.png'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                    data-fancybox="gallery"
                                    data-src='/Assets/Assets/For-web/one.jpg'
                                />
                            </div>
                            <div className="">
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For-web/portfolio15.png'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                    data-fancybox="gallery"
                                    data-src='/Assets/Assets/For-web/one.jpg'
                                />
                            </div>
                        </Stack> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BrandingIdentityPortfolio