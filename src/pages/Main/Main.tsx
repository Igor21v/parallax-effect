import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cls from './Main.module.scss';
import { rain } from 'shared/ui/Rain/rain.js';

export const Main = () => {
    document.addEventListener('mousemove', (e) => {
        Object.assign(document.documentElement, {
            style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
		`,
        });
    });

    const canvas = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        rain(canvas.current);
    }, []);

    return (
        <>
            <div className={cls.logo} />
            <section className={cls.layers}>
                <div className={cls.layers__container}>
                    <div className={`${cls.layers__item} ${cls.layer_1}`} />
                    <div className={`${cls.layers__item} ${cls.layer_2}`} />
                    <div className={`${cls.layers__item} ${cls.layer_3}`}>
                        <div className={cls.hero_content}>
                            <h1>
                                Natural Forest <span>HTML / CSS</span>
                            </h1>
                            <div className={cls.hero_content__p}>
                                Creating a beautiful 3D website with a ‘lens
                                effect’
                            </div>
                            <Link to="/vert">
                                <button className={cls.button_start}>
                                    Show next parallax
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={`${cls.layers__item} ${cls.layer_4}`}>
                        <canvas ref={canvas} />
                    </div>
                    <div className={`${cls.layers__item} ${cls.layer_5}`} />
                    <div className={`${cls.layers__item} ${cls.layer_6}`} />
                </div>
            </section>
        </>
    );
};
