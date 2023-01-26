import styles from './LogoPortfolio.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import { Fancybox } from "@fancyapps/ui";
import overlayRightImage from '../../public/Assets/Assets/For-web/right-border.png'
import overlayLeftImage from '../../public/Assets/Assets/For-web/left-border.png'
import "@fancyapps/ui/dist/fancybox.css";

const LogoPortfolio = () => {

    return (
        <>
            <section className={styles.logo_portfolio_section}>
                <Container fluid='true' className='p-0'>
                    <Row>
                        <Stack direction="horizontal" gap={0} className={`${'justify-content-between w-100'} ${styles['ourWorkImageRow']}`} data-aos="fade-down" data-aos-duration="1500">
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{ position: 'relative', padding: '10px' }}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)' }}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 1.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 1.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{ position: 'relative', padding: '10px' }}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)' }}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 152.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 152.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 4.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 4.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 134.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 134.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 135.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 135.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 136.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 136.jpg'
                                        alt='portfolio1'
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
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 3.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 3.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 2.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 2.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 139.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 139.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 140.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 140.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 11.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 11.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 153.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 153.jpg'
                                        alt='portfolio1'
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
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 15.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 15.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 8.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 8.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 16.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 16.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 6.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 6.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 144.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 144.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 14.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 14.jpg'
                                        alt='portfolio1'
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
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 10.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 10.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 161.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 161.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 7.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 7.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 164.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 164.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 163.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 163.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 9.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 9.jpg'
                                        alt='portfolio1'
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
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 156.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Rectangle 156.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 13.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For-web/Group 13.jpg'
                                        alt='portfolio1'
                                        width='383'
                                        height='334'
                                    />
                                </div>
                            </div>
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 159.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
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
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 12.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
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
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Rectangle 168.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
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
                            <div className={`${styles['testimonial']}`}>
                                <div className={`${styles['box']}`}>
                                    <div className={`${styles.overlay}`}>
                                        <div style={{position: 'relative', padding: '10px'}}>
                                            <Image
                                                src={overlayRightImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{marginLeft: 'auto', display: 'block', transform: 'rotate(0deg)'}}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
                                            <Image
                                                alt='logo portfolio'
                                                src='/Assets/Assets/For-web/cross.svg'
                                                width='20'
                                                height='20'
                                                data-fancybox="gallery"
                                                data-src='/Assets/Assets/For-web/Group 5.jpg'
                                            />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0', padding: '10px' }}>
                                            <Image
                                                src={overlayLeftImage}
                                                alt='overlay right border'
                                                width={100}
                                                height={100}
                                                className={`${styles['overlayBorder']} ${styles['overlayBorder']}`}
                                                style={{ marginRight: 'auto', display: 'block', transform: 'rotate(0deg)', position: 'relative' }}
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

export default LogoPortfolio