import React from 'react'
import { BiEnvelopeOpen, BiMessageRounded, BiPhoneCall, BiSupport, IconName } from "react-icons/bi";
const Contact = () => {
  return (
    <section className="py-10 lg:py-20 bg-[#F4F8FB]">
      <div className="container mx-auto">
        <div className="section-title">
          <h2 className="section-heading">get in touch with us</h2>

          <div class="">
            <div class="flex flex-col items-center py-3 lg:h-[36rem] lg:flex-row">
              <div class="flex mt-8 lg:w-1/2 lg:justify-center lg:mt-0 ">
                <div class="w-full max-w-md bg-white rounded-lg">
                  <div class="px-6 py-8 ">
                    <h2 class="text-2xl font-bold text-title ">
                      Tell us about your inquiry and we’ll get back to you
                      shortly.
                    </h2>

                    <form className="w-full">
                      <div class="mt-4">
                        <label
                          htmlFor=""
                          className="font-semibold text-title text-lg "
                        >
                          Company Name
                        </label>
                        <input
                          class="block w-full mt-3 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400  focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                          type="text"
                          placeholder="Company Name"
                          aria-label="Email address"
                        />
                        <label
                          htmlFor=""
                          className="font-semibold text-title text-lg mt-1 block"
                        >
                          Email Address
                        </label>
                        <input
                          class="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                          type="text"
                          placeholder="Email Address"
                          aria-label="Password"
                        />
                        <label
                          htmlFor=""
                          className="font-semibold text-title text-lg mt-1 mb-2 block"
                        >
                          Message
                        </label>
                        <textarea
                          class="peer block min-h-[auto] w-full  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                          placeholder="Brief info about your inquiry.
"
                        ></textarea>
                      </div>

                      <div class="flex items-center justify-center mt-4">
                        <button className="main-button">submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* another div  */}
              <div class="lg:w-1/2">
                <div className="flex gap-x-5 border-b py-6">
                  <BiEnvelopeOpen className="text-4xl font-thin text-secondary mt-1" />
                  <div>
                    <h2 className="text-title text-2xl font-bold">Email us</h2>
                    <span className="text-title ">noyon.podder7@gmail.com</span>
                  </div>
                </div>
                <div className="flex gap-x-5 border-b py-6">
                  <BiSupport className="text-4xl font-thin text-secondary mt-1" />
                  <div>
                    <h2 className="text-title text-2xl font-bold">
                      Chat with an agent
                    </h2>
                    <span className="text-title ">
                      Hello, sir! How can I help you?{" "}
                    </span>
                  </div>
                </div>
                <div className="flex gap-x-5 border-b py-6">
                  <BiMessageRounded className="text-4xl font-thin text-secondary mt-1" />
                  <div>
                    <h2 className="text-title text-2xl font-bold">Whatsapp</h2>
                    <span className="text-title ">+880 1752441505</span>
                  </div>
                </div>
                <div className="flex gap-x-5 border-b py-6">
                  <BiPhoneCall className="text-4xl font-thin text-secondary mt-1" />
                  <div>
                    <h2 className="text-title text-2xl font-bold">Call us</h2>
                    <span className="text-title ">+880 1752441505</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact