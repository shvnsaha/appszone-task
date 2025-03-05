import { FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 bg-[#11071f] text-white py-20">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold mb-6">Contact</h3>
        <p className="text-gray-200 my-2">
          I'm currently looking to join a cross-functional team that values
          improving people's lives <br className="hidden md:block" /> through
          accessible design. or have a project in mind? Let's connect
        </p>
        <p className="text-gray-200 mt-4">ibrhaimmemon930@gmail.com</p>
      </div>
      <div className="flex justify-center lg:justify-normal gap-6 mt-6">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="https://wikipedia.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEarthAfrica className="text-2xl" />
        </a>
        <a
          href="https://google.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoogle className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;