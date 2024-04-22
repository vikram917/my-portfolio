import React from 'react';

const Footer = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <div className="footer-content p-2 text-sm md:text-lg xl:text-xl text-gray-400 font-semibold">
          <p>Vikram &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
  );
};

export default Footer;