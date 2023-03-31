import { FaCartPlus } from "react-icons/fa";

const ProductCard = () => {
  const productCardData = [
    {
      image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
      title: "Razer Kraken  Headset",
    },
    {
      image: "https://i.ibb.co/rGG6s8Z/618e-NUId2l-L-AC-UY218.jpg",
      title: "Turtle Beach Recon 200 Gen ",
    },
    {
      image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
      title: "Razer Kraken  Headset",
    },
    {
      image: "https://i.ibb.co/rGG6s8Z/618e-NUId2l-L-AC-UY218.jpg",
      title: "Turtle Beach Recon 200 Gen ",
    },
    {
      image: "https://i.ibb.co/y4jXb29/71-BKQh-Fz-Dm-L-AC-UY218.jpg",
      title: "Razer Kraken  Headset",
    },
  ];

  return <div>
    <div className="container mx-auto px-3 mt-10">
    <div className="flex gap-4 flex-wrap">
        {
            productCardData.map(product => {
                return (
                  <div className="border w-72 py-4 px-1 text-center rounded-lg">
                    <img src={product.image} alt="" className="w-36 mx-auto" />
                    <h3 className="mt-5 text-xl font-bold text-title">
                      {product.title}
                    </h3>
                    <div className="flex justify-center mt-4">
                      <button className="main-small-button">
                        view details
                        <FaCartPlus className="ml-2"/>
                      </button>
                    </div>
                  </div>
                );
            })
        }
    </div>
    </div>
  </div>;
};

export default ProductCard;
