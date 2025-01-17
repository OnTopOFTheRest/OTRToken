import React from 'react';
import { Zap, Shield, DollarSign, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About OTR Token
          </h2>
          <p className="text-xl text-cyan-300 mb-8">
            Revolutionizing the Gaming Ecosystem with Blockchain Technology
          </p>
        </div>

        {/* Main Description */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
            <p className="text-gray-300 leading-relaxed">
              OTR Token is a next-generation digital currency built to transform the gaming industry by providing secure, efficient, and decentralized payment solutions. With a focus on seamless integration, OTR Token aims to empower both gamers and developers by creating a more streamlined and cost-effective in-game economy. Through leveraging blockchain technology, OTR Token offers a transparent, fast, and low-cost alternative to traditional payment systems, eliminating many of the barriers faced by both players and developers today.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              At OTR Token, our mission is to build a unified, decentralized payment system that facilitates smoother in-game transactions and enhances the overall gaming experience. We are committed to reducing transaction costs, increasing transaction speed, and improving user engagement, all while creating a trusted and transparent environment within the gaming ecosystem. By offering a digital currency that is easy to use, secure, and scalable, we are helping to shape the future of gaming.
            </p>
          </div>
        </div>

        {/* Why OTR Token */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Why OTR Token?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Seamless Integration",
                description: "OTR Token is designed to integrate easily with popular gaming platforms, providing a frictionless experience for both developers and players."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Blockchain Security",
                description: "With blockchain technology at its core, every transaction made with OTR Token is fully transparent, secure, and immutable, offering peace of mind to users."
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Cost Efficiency",
                description: "Traditional payment methods often come with high fees and long processing times. OTR Token drastically reduces transaction costs and offers near-instant processing."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Universal Gaming Currency",
                description: "OTR Token aims to be the currency of choice for gaming transactions across multiple platforms, enabling gamers to purchase assets, skins, and upgrades with ease."
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-cyan-400">{feature.title}</h4>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              Our vision is to establish OTR Token as the go-to cryptocurrency for gamers and developers alike. We believe that the future of gaming lies in a decentralized ecosystem where players are empowered through seamless and secure transactions, and developers have the tools they need to create dynamic, engaging experiences without being hindered by high costs and inefficient payment systems.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-black/40 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Team</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                OTR Token is backed by a diverse team of blockchain experts, passionate gamers, and fintech professionals who are dedicated to pushing the boundaries of technology in the gaming space. Our team brings together years of experience in blockchain development, game design, and financial technology, ensuring that OTR Token is built to meet the evolving needs of the gaming industry.
              </p>
              <p className="leading-relaxed">
                We are also committed to working closely with strategic partners and the global gaming community to ensure widespread adoption of OTR Token and help shape the future of gaming payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;