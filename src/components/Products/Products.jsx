import React from "react";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

const API_URL = "http://localhost:5000/api/products";

const Products = ({ onAddToCart, onProductClick }) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Не вдалося отримати товари");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Топові товари для вас
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Товари
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Обирайте найкраще для себе у ShopBoom!
          </p>
        </div>
        {/* Body section */}
        <div>
          {loading && <div className="text-center text-gray-400">Завантаження...</div>}
          {error && <div className="text-center text-red-400">{error}</div>}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {products.map((data) => (
              <div
                key={data._id || data.id}
                className="space-y-3 bg-gray-800 rounded-lg p-4 w-full max-w-xs flex flex-col items-center cursor-pointer hover:shadow-xl hover:scale-105 transition"
                onClick={() => onProductClick(data)}
              >
                <img
                  src={data.image || "https://via.placeholder.com/150x220?text=No+Image"}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div className="w-full text-center">
                  <h3 className="font-semibold">{data.name || data.title}</h3>
                  <p className="text-sm text-gray-400">{data.color || ""}</p>
                  <div className="flex items-center gap-1 justify-center">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating || 5}</span>
                  </div>
                  <div className="font-bold text-lg mt-2 mb-2">{data.price} ₴</div>
                  <button
                    className="bg-primary text-white py-1 px-4 rounded-full hover:bg-primary/80 transition"
                    onClick={e => { e.stopPropagation(); onAddToCart({
                      id: data._id || data.id,
                      img: data.image || "https://via.placeholder.com/150x220?text=No+Image",
                      title: data.name || data.title,
                      price: data.price
                    }); }}
                  >
                    Купити
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Переглянути всі товари
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onProductClick: PropTypes.func.isRequired
};

export default Products;
