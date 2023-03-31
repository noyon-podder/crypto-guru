import React from "react";

const Hosting = () => {
  return (
    <section className="bg-[#F4F8FB] py-20">
      <div className="container mx-auto">
        <div className="section-title">
          <h2 className="section-heading">hosting partner</h2>
        </div>

        <div class="items-center lg:flex px-2">
          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-full h-full lg:max-w-3xl"
              src="https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_960_720.jpg"
              alt=""
              className="rounded-lg "
            />
          </div>
          <div class="w-full lg:w-1/2 ml-0 lg:ml-20 mt-4 lg:mt-0">
            <div class="lg:max-w-lg ">
              <h1 class="text-3xl text-secondary  lg:text-6xl uppercase font-black">
                Crypto <br />
                <span className="text-title">guru deals</span>
              </h1>

              <p class="mt-5 text-title text-base">
                Progressively iterate equity invested materials before
                client-centric users. Conveniently customize interdependent best
                practices for exceptional niches. Professionally procrastinate
                cross-media channels and resource-leveling vortals. Rapidiously
                reinvent best-of-breed action.Dynamically orchestrate
                best-of-breed total linkage for top-line supply chains. Credibly
                integrate effective processes through team building technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hosting;
