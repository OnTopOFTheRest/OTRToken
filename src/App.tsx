import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NFTRewards from './components/NFTRewards';
import RoadMap from './components/RoadMap';
import About from './components/About';
import Contact from './components/Contact';
import WhitePaper from './components/WhitePaper';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showWhitePaper, setShowWhitePaper] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1117] text-cyan-400 overflow-x-hidden">
      <div className="cyber-lines"></div>
      <div className="ambient-light"></div>
      <div className="fixed w-full z-50">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      
      {/* CoinGecko Price Marquee */}
      <div className="pt-20 px-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-black/40 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300 overflow-hidden">
            <gecko-coin-price-marquee-widget 
              locale="ro" 
              dark-mode="true" 
              outlined="true" 
              coin-ids="" 
              initial-currency="usd"
            ></gecko-coin-price-marquee-widget>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        {showWhitePaper ? (
          <WhitePaper onBack={() => setShowWhitePaper(false)} />
        ) : (
          <>
            {activeSection === 'home' && <Home setShowWhitePaper={setShowWhitePaper} />}
            {activeSection === 'nft' && <NFTRewards />}
            {activeSection === 'roadmap' && <RoadMap />}
            {activeSection === 'about' && <About />}
            {activeSection === 'contact' && <Contact />}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;