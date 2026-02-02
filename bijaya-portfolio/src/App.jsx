import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import LenisScroll from "./components/LenisScroll";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Work from "./components/Works";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToId = {
      "/": "home",
      "/about": "about",
      "/services": "services",
      "/work": "work",
      "/contact": "contact",
    };

    const id = pathToId[location.pathname] || "home";
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <LenisScroll />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
