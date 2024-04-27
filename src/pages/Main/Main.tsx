import { Link } from 'react-router-dom';
import { Button } from 'shared/lib/ui/Button';
import cls from './Main.module.scss';
document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
        style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
		`,
    });
});

export const Main = () => {
    return (
        <>
            <h1>Главная</h1>{' '}
            <Link to="/vert">
                <Button>Show vertical parallax</Button>
            </Link>
            <div className={cls.logo}></div>
            <section className={cls.layers}>
                <div className={cls.layers__container}>
                    <div className={`${cls.layers__item} ${cls.layer_1}`}></div>
                    <div className={`${cls.layers__item} ${cls.layer_2}`}></div>
                    <div className={`${cls.layers__item} ${cls.layer_3}`}>
                        <div className={cls.hero_content}>
                            <h1>
                                Natural Forest <span>HTML / CSS</span>
                            </h1>
                            <div className={cls.hero_content__p}>
                                Creating a beautiful 3D website with a ‘lens
                                effect’
                            </div>
                            <button className={cls.button_start}>
                                Start Learning
                            </button>
                        </div>
                    </div>
                    <div className={`${cls.layers__item} ${cls.layer_4}`}>
                        <canvas className="rain"></canvas>
                    </div>
                    <div className={`${cls.layers__item} ${cls.layer_5}`}></div>
                    <div className={`${cls.layers__item} ${cls.layer_6}`}></div>
                </div>
            </section>
        </>
    );
};
