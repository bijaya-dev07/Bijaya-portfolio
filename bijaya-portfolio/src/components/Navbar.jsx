import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Github from "../ui/Github";
import Button1 from "../ui/Button1";

export default function Navbar() {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add(
          "bg-[#FFF7EC]",
          "bg-opacity-90",
          "backdrop-blur-lg",
          "border-b",
          "border-[#21AEC0]/10",
          "shadow-sm"
        );
        navLinkRef.current.classList.remove(
          "bg-[#FFF7EC]",
          "shadow-sm",
          "border",
          "border-[#21AEC0]/20"
        );
      } else {
        navRef.current.classList.remove(
          "bg-[#FFF7EC]",
          "bg-opacity-90",
          "backdrop-blur-lg",
          "border-b",
          "border-[#21AEC0]/10",
          "shadow-sm"
        );
        navLinkRef.current.classList.add(
          "bg-[#FFF7EC]",
          "shadow-sm",
          "border",
          "border-[#21AEC0]/20"
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"></div>

      <nav
        ref={navRef}
        className="w-full text-bold fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
      >
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-32 cursor-pointer mr-14"
          />
        </Link>

        <ul
          ref={navLinkRef}
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-[#FFF7EC] border border-[#21AEC0]/20 shadow-sm font-medium"
        >
          <li>
            <Link
              className="hover:text-[#21AEC0] transition-colors"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#21AEC0] transition-colors"
              to="/about"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#21AEC0] transition-colors"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#21AEC0] transition-colors"
              to="/work"
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#21AEC0] transition-colors"
              to="/contact"
            >
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/bijaya-dev07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center transform scale-90 md:scale-100 hover:text-[#21AEC0] transition-colors"
          >
            <Github />
          </a>
          <div className="hidden lg:block ml-4">
            <Button1 />
          </div>

          <button
            className="block cursor-pointer md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <FiMenu className="w-6 h-6 text-gray-900 hover:text-[#21AEC0]" />
          </button>
        </div>
        {/* -- ----- mobile menu ------  -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#FFF7EC] text-gray-900 transition duration-500 font-medium backdrop-blur-sm"
        >
          <button
            className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FiX className="w-6 h-6 text-gray-900 hover:text-[#21AEC0]" />
          </button>

          <li>
            <Link to="/" onClick={closeMenu} className="hover:text-[#21AEC0]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu} className="hover:text-[#21AEC0]">
              About me
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu} className="hover:text-[#21AEC0]">
              Services
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={closeMenu} className="hover:text-[#21AEC0]">
              My Work
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className="hover:text-[#21AEC0]">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
