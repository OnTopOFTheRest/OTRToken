import React from 'react';
import { Twitter, MessageCircle, Instagram, Facebook, Youtube, Video } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://x.com/OnTopOFTheReest'
    },
    {
      name: 'Telegram',
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://t.me/OTRToken'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/otrc0in/'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/profile.php?id=61570861272728'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      url: 'https://www.youtube.com/@OTRToken'
    },
    {
      name: 'TikTok',
      icon: <Video className="w-5 h-5" />,
      url: 'https://www.tiktok.com/@otrtoken?_t=ZG-8t64BeBeeHo&_r=1'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-cyan-300 mb-8">
            Connect with the OTR community
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-8 justify-items-center max-w-[900px] mx-auto">
          {socialLinks.map((social) => (
            <div key={social.name} className="w-[100px]">
              <div className="relative group isolate">
                <div className="absolute -inset-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center gap-2 bg-black/40 p-3 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group h-[90px] w-[100px]"
                >
                  <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {social.icon}
                  </div>
                  <span className="text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {social.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-lg"></div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-black/40 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Get in Touch</h3>
            <p className="text-gray-300 leading-relaxed">
              Join our vibrant community across social media platforms to stay updated with the latest news, 
              announcements, and developments. Follow us, engage with our content, and be part of the OTR 
              Token revolution in gaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;