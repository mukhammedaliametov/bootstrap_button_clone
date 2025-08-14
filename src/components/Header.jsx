import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import searchOverlay from "../assets/search_overlay.svg";
import { FaGithub, FaInstagram, FaCaretDown } from "react-icons/fa";
import { FaXTwitter, FaBars } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navItems = [
    { name: "Docs", link: "#" },
    { name: "Examples", link: "#" },
    { name: "Icons", link: "#" },
    { name: "Themes", link: "#" },
    { name: "Blog", link: "#" },
  ];
  return (
    <div className="bg-[#732EF9] sticky top-0 w-full z-999">
      <div className="max-w-[1400px] mx-auto px-[16px] flex items-center justify-between py-[20px] text-white">
        <div
          className="block md:hidden text-[22px] ml-[10px] mr-[25px]"
          onClick={handleClick}
        >
          <FaBars />
        </div>
        <div className="flex items-center gap-[15px]">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
          <nav className="hidden md:flex gap-[15px]">
            {navItems.map((item, index) => {
              return (
                <a key={index} href={item.link} className="font-inter">
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>
        <div className="hidden md:flex items-center justify-between border-1 cursor-pointer rounded-[6px] w-[25%] opacity-[45%] p-[5px]">
          <div className="flex items-center gap-[5px]">
            <FiSearch className="w-[20px]" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-white"
              disabled
            />
          </div>
          <div>
            <img src={searchOverlay} alt="search" />
          </div>
        </div>
        <div className="hidden md:flex items-center cursor-pointer">
          <div className="flex items-center gap-[8px] h-[23px] border-r border-[#ffffff93] pr-[10px] mr-[10px]">
            <FaGithub />
            <FaXTwitter />
            <FaInstagram />
          </div>
          <div className="flex items-center gap-[5px] h-[23px] border-r border-[#ffffff93] pr-[10px] mr-[10px]">
            <p>v5.3</p>
            <FaCaretDown />
          </div>
          <div className="flex items-center gap-[5px]">
            <MdSunny />
            <FaCaretDown />
          </div>
        </div>
        <div className="flex items-center gap-[15px] md:hidden text-[22px]">
          <FiSearch />
          <BsThreeDots />
        </div>
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-[#732EF9] p-[30px] text-white font-inter transition-all duration-300 ${
      nav ? "translate-x-0" : "translate-x-full"
    }`}
        >
          <div className="flex items-center justify-between text-[26px] border-b border-[#ffffff38] mb-[20px] pb-[15px] mt-[-10px]">
            <p>Bootstrap</p>
            <HiOutlineXMark onClick={handleClick} />
          </div>
          <div className="grid grid-cols-2 w-full text-[17px] gap-[10px] border-b border-[#ffffff38] mb-[20px] pb-[20px]">
            {navItems.map((item, index) => {
              return (
                <a href={item.link} key={index}>
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-[15px] border-b border-[#ffffff38] mb-[20px] pb-[20px]">
            <div className="flex items-center gap-[5px] text-[18px]">
              <FaGithub />
              <p>GitHub</p>
            </div>
            <div className="flex items-center gap-[5px] text-[18px]">
              <FaXTwitter />
              <p>X</p>
            </div>
            <div className="flex items-center gap-[5px] text-[18px]">
              <FaInstagram />
              <p>Instagram</p>
            </div>
          </div>
          <div className="flex items-center gap-[5px] text-[18px] border-b border-[#ffffff38] mb-[20px] pb-[20px]">
            <p>Bootstrap v5.3</p>
            <FaCaretDown />
          </div>
          <div className="flex items-center gap-[5px] text-[18px] border-b border-[#ffffff38] mb-[20px] pb-[20px]">
            <MdSunny />
            <p>Toggle Theme</p>
            <FaCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
