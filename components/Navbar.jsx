import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="xl:container xl:mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 pb-4 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="" className="font-medium text-base text-[#102542]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="" className="font-medium text-base text-[#102542]">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="" className="font-medium text-base text-[#102542]">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="" className="font-medium text-base text-[#102542]">
                  FAQS
                </Link>
              </li>
              <li>
                <Link href="" className="font-medium text-base text-[#102542]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="" className="font-medium text-base text-[#102542]">
                  Contact Us
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <img
                    src={
                      "https://www.pngmart.com/files/17/USA-Flag-Transparent-PNG.png"
                    }
                    alt=""
                    width={20}
                    height={17}
                  />
                  <span className="ml-1 text-base text-[#102542] font-medium">
                    US
                  </span>
                </div>
                <div className="">
                  <button className=" small-button login mr-3  ">Login</button>
                  <button className="small-button signup">Signup</button>
                </div>
              </li>
            </ul>
          </div>
          <div className="logo">
            <h2 className="uppercase md:text-3xl sm:text-2xl py-4 lg:mb-0 text-[#F45D02] font-extrabold">
              crypto <span className="text-[#102542]">guru deals</span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="" className="font-medium text-base text-[#102542]">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="font-medium text-base text-[#102542]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="" className="font-medium text-base text-[#102542]">
                Who we are
              </Link>
            </li>
            <li>
              <Link href="" className="font-medium text-base text-[#102542]">
                FAQS
              </Link>
            </li>
            <li>
              <Link href="" className="font-medium text-base text-[#102542]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="" className="font-medium text-base text-[#102542]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center mr-6">
            <div className="flex items-center">
              <img
                src={
                  "https://www.pngmart.com/files/17/USA-Flag-Transparent-PNG.png"
                }
                alt=""
                width={20}
                height={17}
              />
              <span className="ml-1 text-base text-[#102542] font-medium">
                US
              </span>
            </div>
            <FaSearch className="ml-4 font-normal cursor-pointer" />
            <FaShoppingCart className="ml-4 font-normal cursor-pointer" />
            <div className="ml-4 hidden lg:block">
              <button className=" small-button login mr-3  ">Login</button>
              <button className="small-button signup">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
