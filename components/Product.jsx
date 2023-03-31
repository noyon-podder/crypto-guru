import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";// Import Swiper styles
import "swiper/css";

const Product = () => {
  const product = [
    {
      image: "https://i.ibb.co/nmpRtb0/71-FLs-WWm-E8-L-AC-UY218.png",
      title: "Rolex",
    },
    {
      image: "https://i.ibb.co/9rsSKv1/61x-Jh-XAP-L-AC-SX569.jpg",
      title: "Samsung",
    },
    {
      image: "https://i.ibb.co/XpcNbLf/61uvr1c-YEi-L-AC-UY218.png",
      title: "Apple",
    },
    {
      image: "https://i.ibb.co/rw7kKqY/61c1-QC4l-F-L-AC-UY218.png",
      title: "Nokia",
    },
    {
      image: "https://i.ibb.co/nmpRtb0/71-FLs-WWm-E8-L-AC-UY218.png",
      title: "Rolex",
    },
    {
      image: "https://i.ibb.co/vLCj3pk/610-Pe9-IL51-L-AC-UY218.png",
      title: "Samsung",
    },
    {
      image: "https://i.ibb.co/XpcNbLf/61uvr1c-YEi-L-AC-UY218.png",
      title: "Apple",
    },
    {
      image: "https://i.ibb.co/rw7kKqY/61c1-QC4l-F-L-AC-UY218.png",
      title: "Nokia",
    },
  ];
;
  return (
    <section className="py-14">
      <div className="xl:container xl:mx-auto">
        <div className="section-title text-center">
          <h2 className="section-heading">SHOP by brand</h2>
        </div>

        {/* swiper slider part start here   */}
        <div className="flex items-center">
          <Swiper
            autoplay={{
              delay: 2000,
              loop: true,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            spaceBetween={50}
            breakpoints={{
              350:{
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
            {product.map((data) => {
              return (
                <SwiperSlide>
                  <div className="border w-48 h-60 py-4 text-center rounded-lg hover:bg-primary">
                    <img
                      src={data.image}
                      alt=""
                      className="w-36 mx-auto"
                      layout="fill"
                    />
                    <p className="font-medium mt-2">{data.title}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Product;
