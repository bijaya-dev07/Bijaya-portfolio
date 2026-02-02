import Button from "../ui/Button";
import Button1 from "../ui/Button1";
import Pattern from "../ui/Pattern";

export default function Hero() {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Pattern />
      </div>

      <div className="relative z-10 lg:mt-16 flex flex-col items-center justify-center gap-4 w-full ">
        <img
          src="./assets/ccb.png"
          alt="Bijaya Tamang"
          className=" w-42 h-42 object-cover"
        />
        <h3 className="flex font-semibold  items-end gap-2 text-xl md:text-3xl text-gray-800">
          Hi! I&apos;m <span className="text-[#21AEC0] bricolage-grotesque-semi-bold">Bijaya Tamang</span>
          <img src="./assets/work-from-home.png" alt="" className="w-7 mb-1" />
        </h3>
        <h1 className="text-3xl font-bold bricolage-grotesque-semi-bold sm:text-6xl lg:text-[65px] text-gray-900 leading-tight">
          Front-end <span className="text-[#21AEC0]">Web Developer.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          I turn ideas into clean, responsive, and user-focused interfaces using
          today’s web technologies, building experiences that feel smooth and
          intuitive.{" "}
        </p>

        <div className="flex flex-row items-center gap-4 sm:gap-8 mt-4 flex-wrap">
          <Button />
        </div>
      </div>
    </div>
  );
}
