import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isSubnameVisible, setIsSubnameVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setIsConnected(true);
          setWalletAddress(accounts[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      
      if (!ethereum) {
        window.open('https://metamask.io/download/', '_blank');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setIsConnected(true);
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSubname = () => {
    setIsSubnameVisible(!isSubnameVisible);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'nft', label: 'NFT Rewards' },
    { id: 'roadmap', label: 'RoadMap' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="bg-[#0d1117]/90 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={toggleSubname}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://i.ibb.co/pwMLYdH/IMG-20241228-095613-945.jpg"
                alt="OTR Logo"
                className="relative h-12 w-12 rounded-full border-2 border-cyan-500 group-hover:border-cyan-300 transition-all duration-300"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:text-shadow-glow transition-all duration-300">
                OTR
              </h1>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isSubnameVisible ? 'h-6 opacity-100' : 'h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-cyan-300 glitch">OnTopOfTheRest</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 transform hover:scale-110 overflow-hidden ${
                    activeSection === item.id
                      ? 'text-cyan-400 border-b-2 border-cyan-500 neon-border'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
              ))}
              <button 
                onClick={connectWallet}
                className="group relative flex items-center px-4 py-2 overflow-hidden rounded-lg bg-transparent"
              >
                <span className="absolute inset-0 border-2 border-cyan-500 rounded-lg"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></span>
                <Wallet className="w-4 h-4 mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="relative text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                  {isConnected ? formatAddress(walletAddress) : 'Connect Wallet'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0d1117]/95 backdrop-blur-md cyber-gradient">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-cyan-400 bg-cyan-900/20 neon-border'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-900/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={connectWallet}
            className="group relative w-full flex items-center justify-center px-4 py-2 overflow-hidden rounded-lg bg-transparent"
          >
            <span className="absolute inset-0 border-2 border-cyan-500 rounded-lg"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <Wallet className="w-4 h-4 mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            <span className="relative text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
              {isConnected ? formatAddress(walletAddress) : 'Connect Wallet'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;