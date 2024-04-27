import { Link } from 'react-router-dom';
import { Button } from 'shared/lib/ui/Button';

export const Main = () => {
    return (
        <>
            <h1>Главная</h1>{' '}
            <Link to="/vert">
                <Button>Show vertical parallax</Button>
            </Link>
        </>
    );
};
