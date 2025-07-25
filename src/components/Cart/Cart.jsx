import React from "react";
import PropTypes from "prop-types";

const Cart = ({ cart, onRemove, onChangeQty, onOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">Кошик</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400">Кошик порожній</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-800 mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center py-3 gap-4">
                <img src={item.img} alt={item.title} className="w-14 h-14 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.price} ₴</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-800 rounded text-lg"
                    onClick={() => onChangeQty(item.id, item.qty - 1)}
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>
                  <span className="px-2">{item.qty}</span>
                  <button
                    className="px-2 py-1 bg-gray-800 rounded text-lg"
                    onClick={() => onChangeQty(item.id, item.qty + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="ml-4 text-red-400 hover:text-red-600"
                  onClick={() => onRemove(item.id)}
                  title="Видалити"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Всього:</span>
            <span className="text-xl font-bold">{total} ₴</span>
          </div>
          <button
            className="w-full bg-primary text-white py-2 rounded font-semibold text-lg hover:bg-primary/80 transition"
            onClick={onOrder}
          >
            Оформити замовлення
          </button>
        </>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      qty: PropTypes.number
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onChangeQty: PropTypes.func.isRequired,
  onOrder: PropTypes.func.isRequired
};

export default Cart; 