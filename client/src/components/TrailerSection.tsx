import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TrailerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelector('.trailer-frame'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        rotateY: 45,
        opacity: 0,
        duration: 1.2,
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

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 fantasy-glow">
          WATCH TRAILER
        </h2>
        
        <div className="trailer-frame relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-lg opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
          
          <div className="relative glass-panel fantasy-border rounded-lg overflow-hidden">
            <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>
            
            <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,215,0,0.6)]">
                  <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/80 text-lg">Click to watch epic gameplay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
