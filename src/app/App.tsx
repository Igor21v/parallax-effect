import { Horizontal } from 'pages/Horizontal';
import { Vertical } from 'pages/Vertical';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Vertical />,
    },
    {
        path: 'hor',
        element: <Horizontal />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
