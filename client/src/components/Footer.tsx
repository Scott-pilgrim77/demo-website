export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold fantasy-glow mb-4">EIGIS</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Embark on an epic adventure in a world of fantasy, magic, and legendary battles.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">ABOUT SERVER</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">NEWS</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">RULES</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">BONUS</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">COMMUNITY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">DISCORD</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">FORUM</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">SUPPORT</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">CONNECT</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(212,165,116,0.5)]">
                <span className="text-white">F</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">
                <span className="text-white">T</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <span className="text-white">D</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2025 EIGIS. All rights reserved. | Privacy & Cookies | <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
