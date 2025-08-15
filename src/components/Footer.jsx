import React from 'react';
import Logo from '../assets/dark_logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 px-4 md:px-16 z-999">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm font-inter">
        <div>
          <div className="flex items-center mb-3">
            <img src={Logo} alt="" />
            <span className="ml-2 font-semibold">Bootstrap</span>
          </div>
          <p className="mb-2">Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p className="mb-1 text-gray-600">
            Code licensed MIT, docs CC BY 3.0.
          </p>
          <p className="text-gray-600">Currently v5.3.7.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Examples</a></li>
            <li><a href="#">Icons</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Swag Store</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Guides</h4>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#">Getting started</a></li>
            <li><a href="#">Starter template</a></li>
            <li><a href="#">Webpack</a></li>
            <li><a href="#">Parcel</a></li>
            <li><a href="#">Vite</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Projects</h4>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#">Bootstrap 5</a></li>
            <li><a href="#">Bootstrap 4</a></li>
            <li><a href="#">Icons</a></li>
            <li><a href="#">RFS</a></li>
            <li><a href="#">Examples repo</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Community</h4>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#">Issues</a></li>
            <li><a href="#">Discussions</a></li>
            <li><a href="#">Corporate sponsors</a></li>
            <li><a href="#">Open Collective</a></li>
            <li><a href="#">Stack Overflow</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
