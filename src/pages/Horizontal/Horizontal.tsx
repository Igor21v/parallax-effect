import { useEffect, useRef } from 'react';
import gsap from 'gsap';
/* import Swiper from 'swiper'; */
import logoSrc from 'pages/Horizontal/img/logo.svg';
// @ts-expect-error TODO
import videoSrc from 'pages/Horizontal/media/background.mp4';
import './Horizontal.css';
import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

/* import { Swiper } from 'shared/lib/swiper/swiper-bundle.min.js'; */

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
                /*          on: {
                slideChange: function () {
                    console.log('eee');
                },
            }, */
            },
            [],
        );

        console.log('sw ' + swiper.mousewheel.enabled);

        swiper.on('slideChange', function () {
            console.log('333');
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
                console.log('444 ' + video.current);
                video.current?.classList.add('change');
            })
            .on('slideChangeTransitionEnd', function () {
                console.log('555');
                video.current?.classList.remove('change');
            });
    }, []);

    return (
        <>
            <div className="top-line">
                <div className="container container-top">
                    <div>
                        <div className="logo">
                            <img src={logoSrc} alt="Alt" />
                        </div>
                    </div>
                    <div>
                        <ul className="main-mnu">
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

            <div className="swiper slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide">
                        <div className="slide__content">
                            <h2>Abstract</h2>
                            <p>Designing for the future</p>
                            <button>Join Us</button>
                        </div>
                    </div>
                    <div className="swiper-slide slide">
                        <div className="slide__content">
                            <h2>Design</h2>
                            <p>Designing for the future</p>
                            <button>Join Us</button>
                        </div>
                    </div>
                    <div className="swiper-slide slide">
                        <div className="slide__content">
                            <h2>Future</h2>
                            <p>Designing for the future</p>
                            <button>Join Us</button>
                        </div>
                    </div>
                    <div className="swiper-slide slide">
                        <div className="slide__content">
                            <h2>Forever</h2>
                            <p>Designing for the future</p>
                            <button>Join Us</button>
                        </div>
                    </div>
                </div>

                <div className="slider-bottom">
                    <div className="slider-pagination">
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="slider-navigation">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>

            <video
                src={videoSrc}
                className="video-background"
                muted
                ref={video}
            ></video>
        </>
    );
};
