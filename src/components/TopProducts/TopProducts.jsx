import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Кежуал одяг",
    price: 1100,
    description:
      "Зручний та стильний вибір для кожного дня.",
  },
  {
    id: 2,
    img: Img2,
    title: "Сорочка з принтом",
    price: 950,
    description:
      "Яскравий акцент у вашому гардеробі.",
  },
  {
    id: 3,
    img: Img3,
    title: "Жіноча сорочка",
    price: 1300,
    description:
      "Сучасний дизайн та якість ShopBoom.",
  },
];
const TopProducts = ({ onAddToCart }) => {
  return (
    <div>
      <div className="container">
        {/* Заголовок секції */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Топові товари для вас
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Найкращі товари
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Обирайте якість та стиль разом з ShopBoom!
          </p>
        </div>
        {/* Основна секція */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-gray-800 hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              key={data.id}
            >
              {/* секція зображення */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* секція деталей */}
              <div className="p-4 text-center">
                {/* зірковий рейтинг */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-400 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <div className="font-bold text-lg mt-2 mb-2">{data.price} ₴</div>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => onAddToCart(data)}
                >
                  Купити
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TopProducts.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

export default TopProducts;
