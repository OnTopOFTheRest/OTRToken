import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 mt-16 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-cyan-400/80 text-sm">
          © {currentYear} OTR-OnTopOfTheRest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;