import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import InvestmentStrategy from './pages/InvestmentStrategy';
import Media from './pages/Media';
import MediaArticle from './pages/MediaArticle';
import Contact from './pages/Contact';
import InvestorPortal from './pages/InvestorPortal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/investment-strategy" element={<InvestmentStrategy />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:slug" element={<MediaArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investor-portal" element={<InvestorPortal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
