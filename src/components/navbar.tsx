import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};

// Navbar
export const Navbar = ({ hide }: NavbarProps) => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-20 bg-primary",
        isAtBottom || hide ? "mt-0" : "mt-20"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 relative group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img 
              src="/profile.jpeg" 
              alt="Bhavesh" 
              className="w-11 h-11 rounded-full object-cover border-2 border-[#915eff] shadow-[0_0_10px_rgba(145,94,255,0.4)] relative z-10" 
            />
            
            {/* Hover Card */}
            <div className="absolute top-14 left-0 w-[280px] sm:w-[320px] p-4 rounded-xl bg-[#1d1836]/80 backdrop-blur-md border border-[#915eff]/30 shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-50 origin-top-left">
              <h4 className="text-white font-bold text-[14px] sm:text-[15px] leading-snug mb-2">
                🚀 Building AI Solutions for Real-World Problems
              </h4>
              <p className="text-secondary text-[12px] sm:text-[13px] font-medium italic leading-tight">
                AI & Machine Learning Enthusiast | Data Analytics Explorer | Full Stack Developer
              </p>
            </div>
          </div>
          
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Bhavesh&nbsp;<span className="sm:block hidden">| AIML Engineer</span>
          </p>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? "text-white" : "text-secondary",
                "hover:text-white text-[18px] font-medium cursor-pointer"
              )}
              onClick={() => !link.link && setActive(link.title)}
            >
              {link.link ? (
                <a href={link.link} target="_blank" rel="noreferrer noopener">
                  {link.title}
                </a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
            )}
          >
            {/* Nav Links (Mobile) */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    active === link.title ? "text-white" : "text-secondary",
                    "font-poppins font-medium cursor-pointer text-[16px]"
                  )}
                  onClick={() => {
                    setToggle(false);
                    !link.link && setActive(link.title);
                  }}
                >
                  {link.link ? (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
