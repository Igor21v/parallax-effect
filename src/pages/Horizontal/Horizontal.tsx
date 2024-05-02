import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logoSrc from 'pages/Horizontal/img/logo.svg';
// @ts-expect-error TODO
import videoSrc from 'pages/Horizontal/media/background.mp4';
import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import cls from './Horizontal.module.scss';
import { Link } from 'react-router-dom';

export const Horizontal = () => {
    const video = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const swiper = new Swiper(
            '.swiper',
            {
                speed: 1600,
                mousewheel: {},
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                },
                modules: [Navigation, Pagination, Mousewheel],
            },
            [],
        );

        console.log('sw ' + swiper.mousewheel.enabled);

        swiper.on('slideChange', function () {
            if (video.current) {
                gsap.to(video.current, 1.6, {
                    currentTime:
                        (video.current.duration / (swiper.slides.length - 1)) *
                        swiper.realIndex,
                    ease: 'power2.easeOut',
                });
            }
        });
        swiper
            .on('slideChangeTransitionStart', function () {
                video.current?.classList.add('change');
            })
            .on('slideChangeTransitionEnd', function () {
                video.current?.classList.remove('change');
            });
    }, []);

    return (
        <div className={cls.wrapper}>
            <div className={cls['top-line']}>
                <div className={`${cls.container} ${cls['container-top']}`}>
                    <div>
                        <div className={cls.logo}>
                            <img src={logoSrc} alt="Alt" />
                        </div>
                    </div>
                    <div>
                        <ul className={cls['main-mnu']}>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">News</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`swiper ${cls.slider}`}>
                <div className="swiper-wrapper">
                    <div className={`swiper-slide ${cls.slide}`}>
                        <div className={cls.slide__content}>
                            <h2>Abstract</h2>
                            <p>Designing for the future</p>
                            <Link to="/">
                                <button>Show next</button>
                            </Link>
                        </div>
                    </div>
                    <div className={`swiper-slide ${cls.slide}`}>
                        <div className={cls.slide__content}>
                            <h2>Design</h2>
                            <p>Designing for the future</p>
                            <Link to="/">
                                <button>Show next</button>
                            </Link>
                        </div>
                    </div>
                    <div className={`swiper-slide ${cls.slide}`}>
                        <div className={cls.slide__content}>
                            <h2>Future</h2>
                            <p>Designing for the future</p>
                            <Link to="/">
                                <button>Show next</button>
                            </Link>
                        </div>
                    </div>
                    <div className={`swiper-slide ${cls.slide}`}>
                        <div className={cls.slide__content}>
                            <h2>Forever</h2>
                            <p>Designing for the future</p>
                            <Link to="/">
                                <button>Show next</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="slider-bottom">
                    <div className="slider-pagination">
                        <div className="swiper-pagination" />
                    </div>
                    <div className={cls['slider-navigation']}>
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                </div>
            </div>

            <video
                src={videoSrc}
                className={cls['video-background']}
                muted
                ref={video}
            ></video>
        </div>
    );
};
