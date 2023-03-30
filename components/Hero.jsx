import { FaArrowRight } from "react-icons/fa";
// import heroImage from "../images/hero.png"


const Hero = () => {
  return (
    <section className="bg-[#F4F8FB]">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-extrabold text-title  lg:text-7xl">
                Start{" "}
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  Mining
                </span>
                <br /> Today!
              </h1>

              <p className="mt-7 lg:mt-10 text-gray-600">
                Intrinsicly transition maintainable communities whereas sticky
                initiatives. Authoritatively network covalent paradigms with
                open-source data. Compellingly.
              </p>

              <button className="flex items-center main-button mt-6 lg:mt-9">
                Buy Miners <FaArrowRight className="button-icon" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            {/* <img
              className="w-full h-full lg:max-w-3xl"
              src={heroImage}
              alt="Catalogue-pana.svg"
            /> */}
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero