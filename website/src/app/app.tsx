import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import HomePage from './pages/home/home';

const About = React.lazy(() => import('about/Module'));

export function App() {
    return (
        <React.Suspense fallback={null}>
            <NavBar />
        
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </React.Suspense>
    );
}

export default App;
