import { FaLaptopCode } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { IoLogoFigma } from "react-icons/io5";
import { GiPaintBrush } from "react-icons/gi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { cloneElement } from "react";

export default function Services() {
  const services = [
    {
      name: "Web design",
      icon: <FaLaptopCode />,
      description:
        "Build responsive, accessible websites using React, Tailwind and modern frontend tooling.",
      link: "#",
    },
    {
      name: "Mobile app",
      icon: <MdPhoneIphone />,
      description:
        "Develop cross-platform mobile apps with smooth performance and native-like UX.",
      link: "#",
    },
    {
      name: "UI/ UX design",
      icon: <IoLogoFigma />,
      description:
        "Design user-centered interfaces, prototypes and design systems in Figma.",
      link: "#",
    },
    {
      name: "Graphics design",
      icon: <GiPaintBrush />,
      description:
        "Create branding, illustrations and marketing assets for web and print.",
      link: "#",
    },
  ];
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-medium text-gray-600">What i offer</h4>
      <h2 className="text-center text-5xl font-bold text-[#21AEC0]">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 leading-relaxed">
        I offer frontend development services focused on building responsive,
        user-friendly, and visually appealing web interfaces. Using modern
        technologies, I create clean UI designs, optimize performance, and
        ensure seamless experiences across all devices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        {services.map((service) => (
          <div key={service.name} className="relative group w-full h-full">
            {/* Dynamic Shadow Background */}
            <div
              className="absolute inset-0 bg-[#21AEC0] rounded-sm transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              aria-hidden
            />

            {/* Main Card */}
            <div className="relative h-full z-10 bg-white border border-[#21AEC0]/30 rounded-sm px-6 py-6 transition-all duration-300 cursor-pointer flex flex-col">
              <div className="w-14 h-14 rounded-full relative overflow-hidden flex items-center justify-center border border-[#21AEC0]/30 text-2xl shadow-sm mb-4 shrink-0">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ filter: "url(#goo-services)" }}
                  aria-hidden
                >
                  <div className="absolute left-[-5%] w-[34%] h-full bg-[#21AEC0] rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 group-hover:translate-y-0" />
                  <div className="absolute left-[30%] w-[34%] h-full bg-[#21AEC0] rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 delay-75 group-hover:translate-y-0" />
                  <div className="absolute left-[66%] w-[34%] h-full bg-[#21AEC0] rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 delay-150 group-hover:translate-y-0" />
                </div>
                <div className="relative z-10">
                  {cloneElement(service.icon, {
                    className:
                      "w-6 h-6 text-[#21AEC0] transition-colors duration-700 group-hover:text-white",
                  })}
                </div>
              </div>
              <h3 className="text-xl mb-2 text-gray-900 font-bold">
                {service.name}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* SVG filter for gooey blobs used in the icon fill animation */}
      <svg
        style={{ display: "block", height: 0, width: 0 }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo-services">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
