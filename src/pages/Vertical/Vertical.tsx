import { memo, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import cls from './Vertical.module.scss';
import { ScrollTrigger } from 'gsap/all';
// @ts-expect-error //export library as file
import ScrollSmoother from 'shared/lib/gsap/ScrollSmoother.min.js';

export const Vertical = memo(() => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollSmoother.create({
            wrapper: cls.wrapper,
            content: `.${cls.content}`,
        });
    });

    const wrapper = useRef<HTMLDivElement>(null);
    window.addEventListener('scroll', () => {
        if (wrapper.current) {
            wrapper.current.style.setProperty(
                '--scrollTop',
                `${window.scrollY}px`,
            );
        }
    });

    return (
        <div className={cls.wrapper} ref={wrapper}>
            <div className={cls.content}>
                <header className={cls.main_header}>
                    <div className={cls.layers}>
                        <div className={cls.layer__header}>
                            <div className={cls.layers__caption}>
                                Welcome to Parallax
                            </div>
                            <div className={cls.layers__title}>
                                Fairy Forest
                            </div>
                        </div>
                        <div className={`${cls.layer} ${cls.layers__base}`} />
                        <div className={`${cls.layer} ${cls.layers__middle}`} />
                        <div className={`${cls.layer} ${cls.layers__front}`} />
                    </div>
                </header>

                <article className={cls.main_article}>
                    <div>
                        <h2 className={cls.main_article__header}>
                            To be continued
                        </h2>
                        <p className={cls.main_article__paragraph}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Omnis error provident dignissimos facere.
                            Repellendus tempore autem qui! Quia magnam tempora
                            esse id necessitatibus corrupti mollitia expedita
                            sapiente cum rerum, ut dicta laboriosam!
                        </p>
                    </div>
                    <div className={cls.copy}>Igor Bondarenko</div>
                </article>
            </div>
        </div>
    );
});
