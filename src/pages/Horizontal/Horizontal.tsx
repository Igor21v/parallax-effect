import { Link } from 'react-router-dom';
import { Button } from 'shared/ui/Button';

export const Horizontal = () => {
    return (
        <>
            <h1>Горизонтальный параллакс</h1>
            <Link to="/">
                <Button>Show main parallax</Button>
            </Link>
        </>
    );
};
