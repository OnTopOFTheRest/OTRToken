import React from 'react';
import { Milestone, ArrowBigRight, Rocket, Gamepad2, Trophy } from 'lucide-react';

const RoadMap = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            RoadMap
          </h2>
          <p className="text-xl text-cyan-300/80 leading-relaxed max-w-3xl mx-auto">
            I am OTR Token, a digital currency designed to revolutionize the way gamers interact with the virtual world. 
            My main mission is to become the preferred payment method on gaming platforms and offer a more integrated 
            and immersive gaming experience.
          </p>
        </div>

        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">1. Launch and Popularization</h3>
              </div>
              <div className="space-y-2 text-gray-300 ml-16">
                <p>• I begin by building a strong community of gamers and developers to adopt me.</p>
                <p>• I promote the benefits I bring: fast transactions, secure payments, and low fees.</p>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Gamepad2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">2. Integration into Gaming Platforms</h3>
              </div>
              <div className="space-y-2 text-gray-300 ml-16">
                <p>• I partner with online gaming platforms so I can be used for purchasing items, skins, and other digital products.</p>
                <p>• I collaborate with developers to integrate directly into their ecosystems, providing my users with a simple and convenient payment solution.</p>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <ArrowBigRight className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">3. Collaboration with Major Games</h3>
              </div>
              <div className="space-y-2 text-gray-300 ml-16">
                <p>• This is my most ambitious goal: to become an official virtual currency in a game as big as GTA.</p>
                <p>• In this context, players will use me to purchase vehicles, properties, weapons, or other items in the virtual world of the game, solidifying my status as a popular currency in the industry.</p>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Trophy className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">4. Becoming a Popular Currency Among Gamers</h3>
              </div>
              <div className="space-y-2 text-gray-300 ml-16">
                <p>• Through these partnerships and my integration into renowned games, I aim to become a standard in the gaming industry.</p>
                <p>• I strive to be recognized not just as a payment method but as a symbol of gaming evolution and financial freedom in the virtual world.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-cyan-300/80 italic">
            I am OTR Token, and this is my journey toward redefining the future of gaming payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;