import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="bg-title">
        <div class="container py-12 mx-auto">
          <div class="lg:flex">
            <div class="w-full -mx-6 lg:w-2/5">
              <div class="px-6">
                <a href="#">
                  <h2 className="text-secondary font-extrabold text-3xl uppercase">
                    Crypto <span className="text-white mb-2">gurudeals</span>
                  </h2>
                </a>

                <p class="max-w-sm mt-2 text-gray-500 ">
                  Join 31,000+ other and never miss out on new tips, tutorials,
                  and more.
                </p>

                <div class="flex mt-6 -mx-2">
                  <a
                    href="#"
                    class="mx-2 text-gray-200 transition-colors duration-300  hover:text-blue-500 text-xl"
                    aria-label="Reddit"
                  >
                    <FaFacebookF/>
                  </a>

                  <a
                    href="#"
                    class="mx-2 text-gray-200 transition-colors duration-300 text-xl
                    hover:text-blue-500 "
                    aria-label="Facebook"
                  >
                   <FaLinkedin/>
                  </a>

                  <a
                    href="#"
                    class="mx-2 text-gray-200 transition-colors duration-300 text-xl
                    hover:text-blue-500 "
                    aria-label="Github"
                  >
                    <FaYoutube/>
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 class="text-white mb-2 uppercase font-bold">
                    Information
                  </h3>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    My Account
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Affiliate Home
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Affiliate Login
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Affiliate Register
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Contact Us
                  </a>
                </div>

                <div>
                  <h3 class="text-white mb-2 uppercase font-bold">Blog</h3>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Tec
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Music
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Videos
                  </a>
                </div>

                <div>
                  <h3 class="text-white mb-2 uppercase font-bold">
                    Company Policy
                  </h3>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Shipping & Returns
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Frequently Asked
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-gray-200 hover:underline"
                  >
                    Terms & Condition
                  </a>
                </div>

                <div>
                  <h3 class="text-white mb-2 uppercase font-bold">Navigation</h3>
                  <span class="block mt-2 text-sm text-gray-200 hover:underline">
                    About Us
                  </span>
                  <span class="block mt-2 text-sm text-gray-200 hover:underline">
                    Clients
                  </span>
                  <span class="block mt-2 text-sm text-gray-200 hover:underline">
                    Blog
                  </span>
                  <span class="block mt-2 text-sm text-gray-200 hover:underline">
                    Brands
                  </span>
                  <span class="block mt-2 text-sm text-gray-200 hover:underline">
                    Careers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr class="h-px my-6 bg-gray-200 border-none " />

          <div>
            <p class="text-center text-gray-500">
              © Brand 2023 - All rights reserved Noyon Podder
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer