import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <section>
        <div className="section-title">
          <h2 className="section-heading">from our blog</h2>
        </div>

        <div class="bg-white">
          <div class="container px-3 pt-5 pb-10 mx-auto">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              <div className="border hover:cursor-pointer">
                <img
                  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div class="mt-5 px-3">
                  <h1 class="mt-4 text-xl font-semibold text-title hover:text-secondary cursor-pointer">
                    What do you want to know about UI
                  </h1>

                  <p class="mt-2 text-gray-900 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est asperiores vel, ab animi recusandae nulla veritatis id
                    tempore sapiente
                  </p>

                  <div class="flex items-center justify-between mt-4">
                    <div>
                      <a
                        href="#"
                        class="text-lg font-medium text-gray-700  hover:underline hover:text-gray-500"
                      >
                        Amit Saha
                      </a>

                      <p class="text-sm text-gray-500">March 11, 2023</p>
                    </div>

                    <a
                      href="#"
                      class="inline-block text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="border hover:cursor-pointer">
                <img
                  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div class="mt-5 px-3">
                  <h1 class="mt-4 text-xl font-semibold text-title hover:text-secondary">
                    All the features you want to know
                  </h1>

                  <p class="mt-2 text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est asperiores vel, ab animi recusandae nulla veritatis id
                    tempore sapiente
                  </p>

                  <div class="flex items-center justify-between mt-4">
                    <div>
                      <a
                        href="#"
                        class="text-lg font-medium text-gray-700  hover:underline hover:text-gray-500"
                      >
                        Noyon Podder
                      </a>

                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        February 6, 2023
                      </p>
                    </div>

                    <a
                      href="#"
                      class="inline-block text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="border hover:cursor-pointer">
                <img
                  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  alt=""
                />

                <div class="mt-5 px-3 pb-3">
                  <h1 class="mt-4 text-xl font-semibold text-title hover:text-secondary">
                    Which services you get from Meraki UI
                  </h1>

                  <p class="mt-2 text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est asperiores vel, ab animi recusandae nulla veritatis id
                    tempore sapiente
                  </p>

                  <div class="flex items-center justify-between mt-4">
                    <div>
                      <a
                        href="#"
                        class="text-lg font-medium text-gray-700  hover:underline hover:text-gray-500"
                      >
                        Tom Hank
                      </a>

                      <p class="text-sm text-gray-500">February 19, 2022</p>
                    </div>

                    <a
                      href="#"
                      class="inline-block text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="main-button">
                View All Post <FaArrowRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
