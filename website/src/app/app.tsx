import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import HomePage from './pages/home/home';

const About = React.lazy(() => import('about/Module'));
const ListComponent = React.lazy(async () => await import('about/Module').then(module => ({ default: module.ListComponent })));

export function App() {
    return (
        <React.Suspense fallback={null}>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/about-component" element={<ListComponent />} />
                <Route path="*" element={<>Page NotFound</>} />
            </Routes>
        </React.Suspense>
    );
}

export default App;
