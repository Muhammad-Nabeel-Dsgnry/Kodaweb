import styles from './AppPortfolio.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const AppPortfolio = () => {

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
                                                data-src='/Assets/Assets/For Web/Group 1.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For Web/Group 1.jpg'
                                        alt='portfolio1'
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
                                                data-src='/Assets/Assets/For Web/Rectangle 152.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For Web/Rectangle 152.jpg'
                                        alt='portfolio1'
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
                                                data-src='/Assets/Assets/For Web/Group 4.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For Web/Group 4.jpg'
                                        alt='portfolio1'
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
                                                data-src='/Assets/Assets/For Web/Rectangle 134.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For Web/Rectangle 134.jpg'
                                        alt='portfolio1'
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
                                                data-src='/Assets/Assets/For Web/Rectangle 135.jpg'
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        className={`${styles['portfolioImage']}`}
                                        src='/Assets/Assets/For Web/Rectangle 135.jpg'
                                        alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 136.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 136.jpg'
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
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Group 3.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 3.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 2.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 2.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 139.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 139.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 140.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 140.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 11.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 11.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 153.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 153.jpg'
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
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Group 15.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 15.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 8.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 8.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 16.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 16.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 6.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 6.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 144.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 144.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 14.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 14.jpg'
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
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Group 10.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 10.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 161.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 161.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 7.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 7.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 164.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 164.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 163.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 163.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 9.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 9.jpg'
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
                                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', alignItems: 'center', height: '100%' }}>
                                        <Image
                                        alt='logo portfolio'
                                            src='/Assets/Assets/For Web/cross.svg'
                                            width='20'
                                            height='20'
                                            data-fancybox="gallery"
                                            data-src='/Assets/Assets/For Web/Rectangle 156.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 156.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 13.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 13.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 159.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 159.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 12.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Group 12.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Rectangle 168.jpg'
                                        />
                                    </div>
                                </div>
                                <Image
                                    className={`${styles['portfolioImage']}`}
                                    src='/Assets/Assets/For Web/Rectangle 168.jpg'
                                    alt='portfolio1'
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
                                            data-src='/Assets/Assets/For Web/Group 5.jpg'
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
                        </div>
                        </Stack>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AppPortfolio