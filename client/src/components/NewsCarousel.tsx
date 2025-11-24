import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NewsCard {
  id: number;
  title: string;
  date: string;
  description: string;
  tag: string;
}

const newsItems: NewsCard[] = [
  {
    id: 1,
    title: 'INTERNAL BONUS SERVER TRIAL',
    date: 'Feb 1 - March 9',
    description: 'Experience exclusive bonus rates and special events during our internal server trial period.',
    tag: 'EVENT'
  },
  {
    id: 2,
    title: 'INTERNAL BONUS SERVER TRIAL',
    date: 'Feb 15 - March 20',
    description: 'Join the adventure with enhanced drop rates and unique rewards for early adopters.',
    tag: 'BONUS'
  },
  {
    id: 3,
    title: 'INTERNAL BONUS SERVER LAUNCH',
    date: 'Feb 9 - Ongoing',
    description: 'Grand opening celebration with massive in-game rewards and exclusive content.',
    tag: 'UPDATE'
  },
  {
    id: 4,
    title: 'EPIC RAID BOSS EVENT',
    date: 'March 1 - March 15',
    description: 'Face legendary raid bosses and earn exclusive legendary equipment and titles.',
    tag: 'RAID'
  },
  {
    id: 5,
    title: 'PVP TOURNAMENT',
    date: 'March 10 - March 25',
    description: 'Compete in the arena for glory and massive rewards. Show your skills in epic battles.',
    tag: 'PVP'
  },
  {
    id: 6,
    title: 'CRAFTING SYSTEM UPDATE',
    date: 'March 20 - Ongoing',
    description: 'New crafting materials and recipes. Create legendary gear with enhanced stats.',
    tag: 'UPDATE'
  }
];

export function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.news-card'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 3;
      return next >= newsItems.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 3;
      return next < 0 ? newsItems.length - 3 : next;
    });
  };

  const visibleItems = newsItems.slice(currentIndex, currentIndex + 3);
  if (visibleItems.length < 3) {
    visibleItems.push(...newsItems.slice(0, 3 - visibleItems.length));
  }

  return (
    <section ref={sectionRef} id="news" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 fantasy-glow">
          LATEST NEWS
        </h2>
        
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-panel fantasy-border flex items-center justify-center hover:bg-white/20 transition-all hover:shadow-[0_0_30px_rgba(212,165,116,0.5)] -translate-x-16"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={carouselRef}>
            {visibleItems.map((news) => (
              <div
                key={news.id}
                className="news-card group relative glass-panel fantasy-border p-6 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,165,116,0.4)] cursor-pointer"
              >
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                    {news.tag}
                  </span>
                </div>
                
                <div className="mt-12 mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-4">{news.date}</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {news.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  <button className="text-yellow-400 hover:text-yellow-300 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    READ MORE 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-panel fantasy-border flex items-center justify-center hover:bg-white/20 transition-all hover:shadow-[0_0_30px_rgba(212,165,116,0.5)] translate-x-16"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(currentIndex / 3) === index
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
