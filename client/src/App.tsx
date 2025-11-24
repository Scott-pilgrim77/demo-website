import { useEffect, useRef } from "react";
import "@fontsource/inter";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { NewsCarousel } from "./components/NewsCarousel";
import { FeaturesSection } from "./components/FeaturesSection";
import { StoryTimeline } from "./components/StoryTimeline";
import { TrailerSection } from "./components/TrailerSection";
import { Footer } from "./components/Footer";

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen transition-transform duration-150"
        style={{
          background: 'radial-gradient(circle, rgba(212,165,116,0.4) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      <Navigation />
      
      <main id="home">
        <HeroSection />
        <NewsCarousel />
        <FeaturesSection />
        <StoryTimeline />
        <TrailerSection />
      </main>
      
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}

export default App;
