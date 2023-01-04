import styles from './WebsitePortfolio.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import WebsitePortfolio1 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-beglow-main.jpg' 
import WebsitePortfolio2 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-2-main.jpg' 
import WebsitePortfolio3 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-3-main.jpg' 
import WebsitePortfolio4 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-4-main.jpg' 
import WebsitePortfolio5 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-5-main.jpg' 
import WebsitePortfolio6 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-6-main.jpg' 
import WebsitePortfolio7 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-7-main.jpg' 
import WebsitePortfolio8 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-8-main.jpg' 
import WebsitePortfolio9 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-9-main.jpg' 
import WebsitePortfolio10 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-10-main.jpg' 
import WebsitePortfolio11 from '../../public/Assets/Assets/For web/Website-Portfolio/Kodaweb-Web-Portfolio-11-main.jpg' 

const WebsitePortfolio = () => {

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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-11-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio11}
                                    alt='WebsitePortfolio-11'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-3-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio3}
                                    alt='WebsitePortfolio-3'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-5-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio5}
                                    alt='WebsitePortfolio-5'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-6-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio6}
                                    alt='WebsitePortfolio-6'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-7-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio7}
                                    alt='WebsitePortfolio-7'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-beglow-detail-page.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio1}
                                    alt='WebsitePortfolio-1'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        
                        
                        </Stack>

                        <Stack direction="horizontal" gap={0} className={`${'justify-content-start'} ${styles['w-83']} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
                        
                        <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-2-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio2}
                                    alt='WebsitePortfolio-2'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-4-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio4}
                                    alt='WebsitePortfolio-4'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-9-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio9}
                                    alt='WebsitePortfolio-9'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-8-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio8}
                                    alt='WebsitePortfolio-8'
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
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Website-Portfolio/Kodaweb-Web-Portfolio-10-detail.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src={WebsitePortfolio10}
                                    alt='WebsitePortfolio-10'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div>
                        


                        {/* <div className={`${styles['testimonial']}`}>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles.overlay}`}>
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 5.jpg'
                                    alt='portfolio1'
                                    width='383'
                                    height='334'
                                />
                            </div>
                        </div> */}
                        </Stack>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WebsitePortfolio