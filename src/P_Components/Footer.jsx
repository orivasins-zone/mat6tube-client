import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center pb-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="text-center">
          <div className="text-xs md:text-base mb-2">
            <Link>Privacy Policy</Link>
            {" - "}
            <Link>Content Removel</Link>
            {" - "}
            <Link>Report Form</Link>
          </div>
          <div className="flex justify-center items-center text-xs">
            <Link className="uppercase text-red-700 font-semibold mr-1">
              mat6tube
            </Link>
            {" - "}
            Made with <FaHeart className="ml-3 text-red-700" />
          </div>
        </div>
        <div className="border-3 border-red-700 w-10 h-10 rounded-full flex items-center justify-center">
          18+
        </div>
      </div>
    </footer>
  );
};

export default Footer;
