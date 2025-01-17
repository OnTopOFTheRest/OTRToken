import React from 'react';
import { Handshake, Users, Globe, Rocket } from 'lucide-react';

const Collaboration = () => {
  const collaborationItems = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description: "We actively seek partnerships with game developers, platforms, and industry leaders to expand OTR Token's ecosystem."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Our community plays a vital role in shaping the future of OTR Token through active participation and feedback."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Integration",
      description: "Working towards seamless integration across multiple gaming platforms and marketplaces worldwide."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Continuously developing new features and use cases to enhance the gaming experience with OTR Token."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Collaboration
          </h2>
          <p className="text-xl text-cyan-300 mb-8">
            Join forces with OTR Token to shape the future of gaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {collaborationItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/40 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">{item.title}</h3>
                </div>
                <p className="text-gray-300 ml-16">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-black/40 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Become a Partner</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We're always looking for innovative partners who share our vision of revolutionizing the gaming industry. Whether you're a game developer, platform owner, or industry expert, we'd love to explore collaboration opportunities with you.
            </p>
            <div className="flex justify-center">
              <a
                href="https://t.me/OTRToken"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent"
              >
                <span className="absolute inset-0 border-2 border-cyan-500 rounded-lg"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></span>
                <span className="relative text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-lg font-medium">
                  Contact Us for Partnership
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;