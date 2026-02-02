import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-10 pb-10">
      <div className="text-center">
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-36 mx-auto cursor-pointer mb-4"
          />
        </Link>

        <div className="w-max flex items-center gap-2 mx-auto text-gray-700 hover:text-[#21AEC0] transition-colors">
          <HiMail className="w-5 h-5 text-[#21AEC0]" />

          <a href="mailto:kojingmoktan92@gmail.com" className="font-medium">kojingmoktan92@gmail.com</a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-[#21AEC0]/20 mx-[10%] mt-6 py-6 text-gray-600">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#21AEC0] font-semibold">Bijaya</span>. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bijaya-dev07"
              className="inline-flex items-center gap-2 hover:text-[#21AEC0] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">GitHub</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bijaya-dev07"
              className="inline-flex items-center gap-2 hover:text-[#21AEC0] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
