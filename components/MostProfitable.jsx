import { FaCartPlus } from 'react-icons/fa';
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

const MostProfitable = () => {
    const profitableProductData = [
      {
        image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
        title: "Razer Kraken  Headset",
      },
      {
        image: "https://i.ibb.co/rGG6s8Z/618e-NUId2l-L-AC-UY218.jpg",
        title: "Turtle Beach Recon 200  ",
      },
      {
        image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
        title: "Razer Kraken  Headset",
      },
      {
        image: "https://i.ibb.co/rGG6s8Z/618e-NUId2l-L-AC-UY218.jpg",
        title: "Turtle Beach Recon 200  ",
      },
      {
        image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
        title: "Razer Kraken  Headset",
      },
      {
        image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
        title: "Razer Kraken  Headset",
      },
      {
        image: "https://i.ibb.co/rGG6s8Z/618e-NUId2l-L-AC-UY218.jpg",
        title: "Turtle Beach Recon 200  ",
      },
      {
        image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
        title: "Razer Kraken  Headset",
      },
      {
        image: "https://i.ibb.co/rGG6s8Z/618e-NUId2l-L-AC-UY218.jpg",
        title: "Turtle Beach Recon 200  ",
      },
      {
        image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
        title: "Razer Kraken  Headset",
      },
    ];

  return (
    <section className="py-20 px-3 bg-[#F4F8FB]">
      <div className="xl:container mx-auto">
        <div className="section-title">
          <h2 className="section-heading">Most Profitable minners</h2>
        </div>
        <Swiper
          navigation={true}
          slidesPerView={5}
          spaceBetween={50}
          breakpoints={{
            350: {
              slidesPerView: 1,
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
          modules={[Navigation]}
          className="mySwiper"
        >
          {profitableProductData.map((product) => {
            return (
              <SwiperSlide className="border w-72 h-52 py-4 px-1 text-center rounded-lg">
                <img src={product.image} alt="" className="w-36 mx-auto" />
                <h3 className="mt-5 text-xl font-bold text-title">
                  {product.title}
                </h3>
                <div className="flex justify-center mt-4">
                  <button className="main-small-button">
                    view details
                    <FaCartPlus className="ml-2" />
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default MostProfitable