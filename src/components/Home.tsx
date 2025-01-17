import React, { useEffect, useRef } from 'react';
import OTRChart from './Chart';
import Collaboration from './Collaboration';
import CubeLoader from './CubeLoader';

interface HomeProps {
  setShowWhitePaper: (show: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ setShowWhitePaper }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <div className="text-center relative z-10 max-w-4xl mx-auto mb-12">
        <div className="relative inline-block">
          <h1 
            ref={titleRef}
            className="welcome-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 opacity-0"
          >
            <span className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="welcome-word">Welcome</span>
              <span className="welcome-word">to</span>
              <span className="welcome-word bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
                OTR
              </span>
            </span>
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 blur-xl -z-10"></div>
        </div>
        <p className="subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-300/90 mb-8 opacity-0">
          Revolutionizing In-Game Transactions
        </p>

        {/* CoinGecko Converter */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black/40 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
              <gecko-coin-converter-widget 
                locale="ro" 
                dark-mode="true" 
                outlined="true" 
                initial-currency="usd"
                background-color="#0d1117"
                text-color="#06b6d4"
              ></gecko-coin-converter-widget>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-16">
          {/* Left Cube Loader */}
          <div className="hidden sm:block">
            <CubeLoader />
          </div>

          {/* WhitePaper Button */}
          <div className="relative group transition-all duration-300 hover:scale-105">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <button 
              onClick={() => setShowWhitePaper(true)}
              className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-lg leading-none flex items-center"
            >
              <span className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                WhitePaper
              </span>
            </button>
          </div>

          {/* Buy OTR Button */}
          <div className="relative group transition-all duration-300 hover:scale-105">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <a 
              href="https://www.geckoterminal.com/bsc/pools/0x41d71462fa4ac035686c6de5dba7559bfba1b7e0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg leading-none flex items-center overflow-hidden"
            >
              <span className="relative z-10 text-lg font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                BUY OTR
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </a>
          </div>

          {/* Right Cube Loader */}
          <div className="hidden sm:block">
            <CubeLoader />
          </div>
        </div>

        {/* Live Price Chart */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Live OTR/WBNB Price
          </h2>
          <OTRChart />
        </div>

        {/* CoinGecko Heatmap */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Market Heatmap
          </h2>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black/40 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
              <gecko-coin-heatmap-widget 
                locale="ro" 
                background-color="#0d1117" 
                text-color="#06b6d4" 
                dark-mode="true" 
                outlined="true" 
                top="100"
              ></gecko-coin-heatmap-widget>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <Collaboration />
      </div>
    </div>
  );
};

export default Home;