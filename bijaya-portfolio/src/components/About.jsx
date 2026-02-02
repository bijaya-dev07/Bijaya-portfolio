import { VscVscode, VscFolderLibrary } from "react-icons/vsc";
import { SiCanva } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt, FaCode } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";

export default function About() {
  const tools = [
    { name: "vscode", icon: <VscVscode /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "mongodb", icon: <DiMongodb /> },
    { name: "figma", icon: <IoLogoFigma /> },
    { name: "git", icon: <FaGitAlt /> },
  ];

  const data = [
    {
      name: "Languages",
      icon: <FaCode />,
      description: "HTML, CSS, JavaScript React Js, Next Js",
    },
    {
      name: "Education",
      icon: <GiGraduateCap />,
      description: "BSc. Computer Science student",
    },
    {
      name: "Projects",
      icon: <VscFolderLibrary />,
      description: "Built more than 5 projects",
    },
  ];
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-medium text-gray-600">Introduction</h4>
      <h2 className="text-center text-5xl font-bold text-[#21AEC0]">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src="./assets/b.jpg"
            alt=""
            className="w-64 border-2 border-[#21AEC0]/20 sm:w-80 rounded-3xl max-w-none shadow-xl"
          />

          <div className="bg-[#FFF7EC] w-1/2 aspect-square absolute border border-[#21AEC0] right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-lg flex items-center justify-center">
            <img
              src="./assets/circular-text.png"
              alt=""
              className="w-full animate-spin_slow opacity-100 grayscale brightness-0"
            />
            <FaCode className="text-4xl text-[#21AEC0] absolute" />
          </div>
          {/* SVG filter for gooey blobs used in the tools fill animation */}
          <svg
            style={{ display: "block", height: 0, width: 0 }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="goo-tools">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
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
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-gray-700 leading-relaxed">
            I'm a frontend developer from Nepal, starting my journey in web
            development. I'm passionate about creating clean, responsive UIs and
            learning new technologies to build better user experiences.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((item) => (
              <li key={item.name} className="relative group w-full">
                <div
                  className="absolute inset-0 bg-[#21AEC0] rounded-sm transform translate-x-0.5 translate-y-0.5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5 "
                  aria-hidden
                />

                <div className="relative z-10 bg-white border border-[#21AEC0]/30 rounded-sm p-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="w-7 mt-3 text-[#21AEC0] text-4xl ">
                    {item.icon}
                  </div>
                  <div className="relative inline-block my-4">
                    <h3 className="font-semibold text-gray-800 ">
                      {item.name}
                    </h3>
                    <span className="absolute left-0 -bottom-1 h-0.5 bg-[#21AEC0] w-0 group-hover:w-full transition-all duration-300"></span>
                  </div>
                  <p className="text-gray-600 text-sm ">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-semibold ">Tools i use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="tool-item relative group flex items-center justify-center w-14 sm:w-16 aspect-square border-2 border-[#21AEC0]/30 rounded-lg cursor-pointer text-[#21AEC0] overflow-hidden hover:border-[#21AEC0] transition-colors"
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ filter: "url(#goo-tools)" }}
                  aria-hidden
                >
                  <div className="absolute left-[-5%] w-[34%] h-full bg-[#21AEC0] rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 group-hover:translate-y-0" />
                  <div className="absolute left-[30%] w-[34%] h-full bg-[#21AEC0] rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 delay-75 group-hover:translate-y-0" />
                  <div className="absolute left-[66%] w-[34%] h-full bg-[#21AEC0] rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 delay-150 group-hover:translate-y-0" />
                </div>

                <button className="tool-btn relative z-10">
                  <span className="tool-icon text-2xl sm:text-3xl transition-colors duration-700 group-hover:text-white">
                    {tool.icon}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

