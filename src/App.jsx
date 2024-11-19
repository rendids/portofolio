import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/utils/Navbar';
import Index from './pages';
import Portofolio from './pages/portof';
import Footer from './components/utils/Footer';
import NotFound from './pages/errors/404';
import About from './pages/about';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />} /> {/* Use ErrorLayout for 404 */}
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Index />
                        <Footer />
                    </>
                } />
                <Route path="/portofolio" element={
                    <>
                        <Navbar />
                        <Portofolio />
                        <Footer />
                    </>
                } />
                <Route path="/about" element={
                    <>
                        <Navbar />
                        <About />
                        <Footer />
                    </>
                } />
            </Routes>
        </Router>
    );
}

export default App;