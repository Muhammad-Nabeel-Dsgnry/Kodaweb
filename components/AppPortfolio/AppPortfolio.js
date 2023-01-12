import styles from './AppPortfolio.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import MobileAppPortfolio1 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-2-mian.jpg' 
import MobileAppPortfolio2 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-4-mian.jpg' 
import MobileAppPortfolio3 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-1-mian.jpg' 
import MobileAppPortfolio4 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-3-mian.jpg' 
import MobileAppPortfolio5 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-5-mian.jpg' 
import MobileAppPortfolio6 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-6-mian.jpg' 
import MobileAppPortfolio7 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-7-mian.jpg' 
import MobileAppPortfolio8 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-9-mian.jpg' 
import MobileAppPortfolio9 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-8-mian.jpg' 
import MobileAppPortfolio10 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-10-mian.jpg' 
import MobileAppPortfolio11 from '../../public/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-11-mian.jpg'

const AppPortfolio = () => {

    return (
        <>
            <section className={styles.logo_portfolio_section}>
                <Container fluid='true' className='p-0'>
                    <Row>
                    <Stack direction="horizontal" gap={0} className={`${'justify-content-start w-100 flex-xs-wrap '} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
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
                                                data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-2-detail.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src={MobileAppPortfolio1}
                                        alt='MobilePortfolio-1'
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
                                                data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-4-detail.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src={MobileAppPortfolio2}
                                        alt='MobilePortfolio-2'
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
                                                data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-1-detail.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src={MobileAppPortfolio3}
                                        alt='MobilePortfolio-3'
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
                                                data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-3-detail.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src={MobileAppPortfolio4}
                                        alt='MobilePortfolio-4'
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
                                                data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-5-detail.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src={MobileAppPortfolio5}
                                        alt='MobilePortfolio-5'
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
                                            data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-6-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={MobileAppPortfolio6}
                                    alt='MobilePortfolio-6'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        </Stack>

                        <Stack direction="horizontal" gap={0} className={`${'justify-content-start flex-xs-wrap'} ${styles['w-83']} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
                        
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
                                            data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-7-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={MobileAppPortfolio7}
                                    alt='MobilePortfolio-7'
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
                                            data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-9-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={MobileAppPortfolio8}
                                    alt='MobilePortfolio-8'
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
                                            data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-8-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={MobileAppPortfolio9}
                                    alt='MobilePortfolio-9'
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
                                            data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-10-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={MobileAppPortfolio10}
                                    alt='MobilePortfolio-10'
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
                                            data-src='/Assets/Assets/For-web/Mobile_App_Portfolio/Kodaweb-Mobile-Portfolio-11-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={MobileAppPortfolio11}
                                    alt='MobilePortfolio-11'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        </Stack>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AppPortfolio