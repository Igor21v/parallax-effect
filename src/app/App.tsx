import { Vertical } from 'pages/Vertical';
window.addEventListener('scroll', (e) => {
    document.documentElement.style.setProperty(
        '--scrollTop',
        `${window.scrollY}px`,
    );
});

function App() {
    return <Vertical />;
}

export default App;
