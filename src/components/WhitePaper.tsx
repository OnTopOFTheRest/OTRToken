import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface WhitePaperProps {
  onBack: () => void;
}

const WhitePaper: React.FC<WhitePaperProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1117]/95 backdrop-blur-md overflow-y-auto">
      <div className="max-w-4xl mx-auto relative">
        {/* Logo */}
        <div className="absolute -top-12 right-0 w-24 h-24 md:w-32 md:h-32">
          <div className="relative w-full h-full group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://i.ibb.co/54XRNGh/photo-2024-12-26-00-54-19-2.jpg" 
              alt="OTR Logo" 
              className="w-full h-full object-cover rounded-full border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex items-center mb-8 group">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group relative"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ArrowLeft className="w-6 h-6 relative" />
            </div>
            <span className="relative text-lg font-semibold">Back</span>
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          OTR Token Whitepaper
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Executive Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            The OTR Token is a cutting-edge digital currency designed to seamlessly integrate into the gaming industry, providing players and developers with a secure, efficient, and decentralized payment solution. Focused on popular gaming platforms like Grand Theft Auto (GTA), OTR Token aims to revolutionize the gaming ecosystem by enabling faster transactions, lower fees, and an improved user experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            The gaming industry is plagued by traditional payment systems that suffer from high transaction fees, slow processing times, and limited interoperability across platforms. These challenges hinder developers' revenue potential and detract from the overall gamer experience. OTR Token seeks to address these issues by offering a blockchain-based payment system tailored specifically for gaming.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Seamless Integration: OTR Token is designed to integrate effortlessly into existing gaming platforms.</li>
            <li>Blockchain Security: Every transaction is recorded on a secure and decentralized blockchain.</li>
            <li>Fast and Low-Cost Transactions: Near-instant transactions with minimal fees.</li>
            <li>Universal Gaming Currency: Unified payment method across various gaming platforms.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">NFT Rewards System</h2>
          <p className="text-gray-300 mb-4">The OTR Token offers a unique opportunity for users to earn exclusive NFTs by investing in the future of technology.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tier: 'Diamond',
                investment: '100,000 OTR',
                reward: '300 NFTs',
                slots: '25',
                distribution: '7,500 NFTs',
                gradient: 'from-blue-400 to-purple-400'
              },
              {
                tier: 'Platinum',
                investment: '50,000 OTR',
                reward: '150 NFTs',
                slots: '50',
                distribution: '7,500 NFTs',
                gradient: 'from-gray-300 to-gray-100'
              },
              {
                tier: 'Gold',
                investment: '25,000 OTR',
                reward: '50 NFTs',
                slots: '100',
                distribution: '5,000 NFTs',
                gradient: 'from-yellow-400 to-yellow-300'
              },
              {
                tier: 'Silver',
                investment: '10,000 OTR',
                reward: '25 NFTs',
                slots: '200',
                distribution: '5,000 NFTs',
                gradient: 'from-gray-400 to-gray-300'
              }
            ].map((tier) => (
              <div key={tier.tier} className="bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                  {tier.tier}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Minimum Investment: {tier.investment}</li>
                  <li>Reward: {tier.reward}</li>
                  <li>Available Slots: {tier.slots}</li>
                  <li>Total Distribution: {tier.distribution}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Tokenomics</h2>
          <p className="text-gray-300 mb-4">Total Supply: 1,000,000,000 OTR Tokens</p>
          <div className="space-y-2 text-gray-300">
            <p>40% - Public Sale</p>
            <p>25% - NFT Rewards System</p>
            <p>20% - Development Fund</p>
            <p>10% - Marketing and Partnerships</p>
            <p>5% - Founders and Team</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Roadmap</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">1. Launch and Popularization</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Begin by building a strong community of gamers and developers to adopt OTR.</li>
                <li>Promote the benefits: fast transactions, secure payments, and low fees.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">2. Integration into Gaming Platforms</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Partner with online gaming platforms for item purchases, skins, and digital products.</li>
                <li>Collaborate with developers for direct ecosystem integration.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">3. Collaboration with Major Games</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Become an official virtual currency in major games like GTA.</li>
                <li>Enable in-game purchases for vehicles, properties, weapons, and items.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">4. Industry Standard</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Establish OTR as a standard in the gaming industry.</li>
                <li>Become recognized as a symbol of gaming evolution and financial freedom.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhitePaper;