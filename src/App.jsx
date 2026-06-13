import { Toaster } from "@/components/ui/toaster";
import { useEffect } from 'react';
import { HashRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'; // Creations
import Honors from './pages/Honors';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useGlassPointer } from './hooks/useGlassPointer';
// Add page imports here

const NotFound = () => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
    <div className="glass glass-panel max-w-md rounded-lg px-8 py-10 text-center">
      <p className="text-sm font-medium text-muted-foreground mb-3">404</p>
      <h1 className="font-serif text-4xl font-semibold mb-4">Page not found</h1>
      <p className="text-muted-foreground mb-8">
        That page is not part of this portfolio.
      </p>
      <Link
        to="/"
        className="glass glass-primary glass-interactive inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium text-primary-foreground"
      >
        Back to home
      </Link>
    </div>
  </div>
);

const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/creations" element={<Projects />} />
      <Route path="/honors" element={<Honors />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

function App() {
  useGlassPointer();

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <PortfolioRoutes />
      <ScrollToTopButton />
      <Toaster />
    </Router>
  )
}

export default App
