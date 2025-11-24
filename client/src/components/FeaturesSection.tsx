import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'HUNTING GROUNDS',
    description: 'Explore vast hunting territories filled with powerful monsters and epic loot. Challenge yourself in diverse environments.',
    icon: '⚔️'
  },
  {
    id: 2,
    title: 'MASSIVE PVP',
    description: 'Engage in large-scale battles with hundreds of players. Conquer territories and prove your dominance.',
    icon: '🛡️'
  },
  {
    id: 3,
    title: 'EPIC RAIDS',
    description: 'Form alliances and take down legendary bosses. Earn exclusive rewards and powerful equipment.',
    icon: '👑'
  },
  {
    id: 4,
    title: 'CLASS SYSTEM',
    description: 'Choose from diverse character classes, each with unique abilities and playstyles. Master your role.',
    icon: '🎭'
  },
  {
    id: 5,
    title: 'CRAFTING',
    description: 'Create legendary weapons and armor. Gather rare materials and forge the ultimate equipment.',
    icon: '🔨'
  },
  {
    id: 6,
    title: 'GUILDS',
    description: 'Join or create powerful guilds. Collaborate with allies to dominate the realm.',
    icon: '🏰'
  }
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.feature-card'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)'
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
    <section ref={sectionRef} id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 fantasy-glow">
            ABOUT EIGIS - FEATURES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="mb-16 glass-panel fantasy-border p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
                ▶
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">TRAILER: HUNTING GROUNDS - WATCH</h3>
            <p className="text-white/70 text-center max-w-2xl mx-auto">
              Experience the thrill of hunting in breathtaking environments. Watch our latest gameplay trailer.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card glass-panel fantasy-border p-6 group hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
