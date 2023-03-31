import { Autoplay } from "swiper"; // Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const BestSeller = () => {
    const imageData = [
      { image: "https://i.ibb.co/VtTswxc/image-53.png" },
      { image: "https://i.ibb.co/D8z3Gxj/image-52.png" },
      { image: "https://i.ibb.co/19t2TvQ/image-51.png" },
      { image: "https://i.ibb.co/8Pr66CY/image-50.png" },
      { image: "https://i.ibb.co/VtTswxc/image-53.png" },
      { image: "https://i.ibb.co/D8z3Gxj/image-52.png" },
      { image: "https://i.ibb.co/19t2TvQ/image-51.png" },
      { image: "https://i.ibb.co/8Pr66CY/image-50.png" },
      { image: "https://i.ibb.co/VtTswxc/image-53.png" },
      { image: "https://i.ibb.co/D8z3Gxj/image-52.png" },
      { image: "https://i.ibb.co/19t2TvQ/image-51.png" },
      { image: "https://i.ibb.co/8Pr66CY/image-50.png" },
    ];
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="container mx-auto">
        <div className="section-title">
          <h2 className="section-heading">best seller brands</h2>
        </div>

        <Swiper
          autoplay={{
            delay: 2000,
            loop: true,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={50}
          breakpoints={{
            350: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
            654: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
        >
          {imageData.map((data) => {
            return (
              <SwiperSlide>
                <div className="">
                  <img src={data.image} alt="" layout="fill" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default BestSeller