import { FaGithub, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-600 py-8 md:py-12 text-white">
      <div className="w-[96%] max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
            src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png"
            className="h-8"
            alt="plinkoo Logo"
          /> */}
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Plinko
            </span>
          </Link>
        </div>
        <div>
          <div className="space-y-2">
            <h1 className="text-center text-base md:text-lg">Follow On</h1>
            <div className="flex items-center gap-2 md:gap-3">
              <a href="https://www.namanbhayana.com/" target="_blank">
                <FaGlobe size={24} className="md:w-[30px] md:h-[30px]" />
              </a>
              <a href="https://github.com/naman-bhayana" target="_blank">
                <FaGithub size={24} className="md:w-[30px] md:h-[30px]" />
              </a>
              <a href="https://www.linkedin.com/in/namanbhayana007/" target="_blank">
                <FaLinkedin size={24} className="md:w-[30px] md:h-[30px]" />
              </a>
              <a href="https://x.com/bhayana_naman" target="_blank">
                <FaTwitter size={24} className="md:w-[30px] md:h-[30px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
