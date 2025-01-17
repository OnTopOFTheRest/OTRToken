import React from 'react';
import { Diamond, Award, Medal, CircleDollarSign } from 'lucide-react';

const NFTRewards = () => {
  const tiers = [
    {
      name: 'Diamond',
      icon: <Diamond className="w-8 h-8" />,
      investment: '100,000 OTR',
      reward: '300 NFTs',
      slots: '25',
      distribution: '7,500 NFTs',
      gradient: 'from-blue-400 to-purple-400'
    },
    {
      name: 'Platinum',
      icon: <Award className="w-8 h-8" />,
      investment: '50,000 OTR',
      reward: '150 NFTs',
      slots: '50',
      distribution: '7,500 NFTs',
      gradient: 'from-gray-300 to-gray-100'
    },
    {
      name: 'Gold',
      icon: <Medal className="w-8 h-8" />,
      investment: '25,000 OTR',
      reward: '50 NFTs',
      slots: '100',
      distribution: '5,000 NFTs',
      gradient: 'from-yellow-400 to-yellow-300'
    },
    {
      name: 'Silver',
      icon: <CircleDollarSign className="w-8 h-8" />,
      investment: '10,000 OTR',
      reward: '25 NFTs',
      slots: '200',
      distribution: '5,000 NFTs',
      gradient: 'from-gray-400 to-gray-300'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            NFT Rewards System
          </h2>
          <p className="text-xl text-cyan-300 mb-8">
            Earn exclusive NFTs by investing in the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/40 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${tier.gradient} p-3 rounded-lg text-black`}>
                    {tier.icon}
                  </div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                    {tier.name}
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-cyan-300 text-sm mb-1">Minimum Investment:</p>
                    <p className="text-xl font-bold text-white">{tier.investment}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300 text-sm mb-1">Reward:</p>
                    <p className="text-xl font-bold text-white">{tier.reward}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300 text-sm mb-1">Available Slots:</p>
                    <p className="text-xl font-bold text-white">{tier.slots}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300 text-sm mb-1">Total Distribution:</p>
                    <p className="text-xl font-bold text-white">{tier.distribution}</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a
                    href="https://www.geckoterminal.com/bsc/pools/0x41d71462fa4ac035686c6de5dba7559bfba1b7e0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full text-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg leading-none overflow-hidden"
                  >
                    <span className="relative z-10 text-lg font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                      BUY OTR
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTRewards;