import { FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#102542] py-6">
      <div className="xl:container xl:mx-auto">
        <div className="flex items-center">
          <div className="flex items-center mr-8 text-white">
            <FaPhoneAlt />
            <span className="ml-2">+880 1752441505</span>
          </div>
          <div className="flex items-center mr-8 text-white">
            <FaPhoneAlt />
            <span className="ml-2">+880 1869525490</span>
          </div>
          <div className="flex items-center mr-8 text-white">
            <FaEnvelopeOpen />
            <span className="ml-2">noyon.podder7@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
