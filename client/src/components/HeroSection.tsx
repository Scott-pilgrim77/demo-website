import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import { FloatingParticles, MagicEmbers, MagicalSparks } from './ParticleSystem';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HeroScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={60} />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffd700" />
      <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#a855f7" distance={20} />
      
      <Suspense fallback={null}>
        <FloatingParticles count={300} color="#d4a574" size={0.12} speed={0.3} spread={30} />
        <MagicEmbers count={80} />
        <MagicalSparks count={120} />
      </Suspense>
      
      <fog attach="fog" args={['#0a1628', 10, 50]} />
    </>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.6')
    .from(ctaRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.4');

    if (sectionRef.current) {
      gsap.to(canvasRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 300,
        scale: 1.2,
        ease: 'none'
      });

      gsap.to(layer1Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 150,
        ease: 'none'
      });

      gsap.to(layer2Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 250,
        ease: 'none'
      });

      gsap.to(layer3Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 100,
        opacity: 0,
        ease: 'none'
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <div ref={canvasRef} className="absolute inset-0 z-0">
        <Canvas>
          <HeroScene />
        </Canvas>
      </div>

      <div ref={layer1Ref} className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div ref={layer2Ref} className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div ref={layer3Ref} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-12">
          <h1 
            ref={titleRef}
            className="text-7xl md:text-9xl font-bold mb-6 fantasy-glow tracking-wider"
            style={{
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 50%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.5))'
            }}
          >
            EIGIS
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-3xl text-white/90 mb-4"
          >
            INTERNAL BONUS SERVER
          </p>
          <p className="text-lg md:text-xl text-cyan-300">
            GRAND OPENING: FEBRUARY 9TH
          </p>
        </div>
        
        <div ref={ctaRef} className="flex flex-col md:flex-row gap-6 mt-8">
          <button className="glass-panel fantasy-border px-10 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(212,165,116,0.5)]">
            PLAY NOW
          </button>
          <button className="glass-panel fantasy-border px-10 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
            LEARN MORE
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
