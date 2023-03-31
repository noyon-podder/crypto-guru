const Experts = () => {
  const expertData = [
    { image: "https://i.ibb.co/VtTswxc/image-53.png"},
    { image: "https://i.ibb.co/D8z3Gxj/image-52.png" },
    { image: "https://i.ibb.co/19t2TvQ/image-51.png" },
    { image: "https://i.ibb.co/8Pr66CY/image-50.png" },
  ];
  return (
    <div>
      <section className="py-10 lg:py-10">
        <div className="container">
          <div class="items-center lg:flex px-2">
            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-6xl font-bold text-title">
                Built by{" "}
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  experts
                </span>
                <br /> and backed by <br />
                investors
              </h2>
            </div>
            <div class="w-full lg:w-1/2 ml-0 lg:ml-20 mt-7 lg:mt-0">
              <div class="lg:max-w-lg ">
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap gap-5 ">
                  {expertData.map((data) => {
                    return (
                      <>
                        <img
                          src={data.image}
                          alt=""
                          className="w-full lg:w-52"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experts;
