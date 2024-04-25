import { Vertical } from 'pages/Vertical';
window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty(
        '--scrollTop',
        `${window.scrollY}px`,
    );
});

function App() {
    return <Vertical />;
}

export default App;
