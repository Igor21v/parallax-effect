import { Horizontal } from 'pages/Horizontal';
import { Main } from 'pages/Main';
import { Vertical } from 'pages/Vertical';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: 'hor',
        element: <Horizontal />,
    },
    {
        path: 'vert',
        element: <Vertical />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
