import { memo, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import cls from './Vertical.module.scss';
import { ScrollTrigger } from 'gsap/all';
// @ts-ignore
import ScrollSmoother from 'shared/lib/gsap/ScrollSmoother.min.js';

interface verticalProps {}

export const Vertical = memo((props: verticalProps) => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollSmoother.create({
            wrapper: `.${cls.wrapper}`,
            content: `.${cls.content}`,
        });
    });

    return (
        <div className={cls.wrapper}>
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
                        <div
                            className={`${cls.layer} ${cls.layers__middle}`}
                        ></div>
                        <div
                            className={`${cls.layer} ${cls.layers__front}`}
                        ></div>
                    </div>
                </header>

                <article className={cls.main_article}>
                    <div className={cls.main_article__content}>
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
