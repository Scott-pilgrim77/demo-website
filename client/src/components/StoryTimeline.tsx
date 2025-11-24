import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: '16/2/2045',
    title: 'I BUY GAME',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.'
  },
  {
    id: 2,
    date: '16/2/2045',
    title: 'CREATE CHARACTER',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.'
  },
  {
    id: 3,
    date: '20/2/2045',
    title: 'PLAY WITH FRIEND',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.'
  },
  {
    id: 4,
    date: '30/2/2045',
    title: 'END GAME',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.'
  }
];

export function StoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.timeline-item');
      
      items.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        const triggerElement = trigger.vars.trigger;
        if (triggerElement && sectionRef.current?.contains(triggerElement as Node)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="story" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-crimson-900/20 to-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 fantasy-glow">
          OUR STORY
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-20"></div>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-500 to-purple-600 transform -translate-x-1/2"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="timeline-item relative mb-16">
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass-panel fantasy-border p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,53,0.4)]">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{event.description}</p>
                    <p className="text-yellow-400 text-sm font-bold">{event.date}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-blue-900 shadow-[0_0_20px_rgba(255,215,0,0.6)] z-10"></div>
                
                <div className="w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
