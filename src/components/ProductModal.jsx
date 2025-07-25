import React from "react";

const ProductModal = ({ open, product, onClose, onAddToCart }) => {
  if (!open || !product) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 text-white rounded-xl shadow-xl p-8 w-full max-w-md relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-2xl hover:bg-red-600 transition"
          title="Закрити"
        >
          ×
        </button>
        <img
          src={product.image || "https://via.placeholder.com/300x300?text=No+Image"}
          alt={product.name || product.title}
          className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-center">{product.name || product.title}</h2>
        {product.category && (
          <div className="text-primary text-center mb-2">Категорія: {product.category}</div>
        )}
        <div className="text-gray-300 text-center mb-2">{product.description}</div>
        <div className="text-lg font-bold text-center mb-4">{product.price} ₴</div>
        <button
          className="w-full bg-primary text-white py-2 rounded font-semibold text-lg hover:bg-primary/80 transition"
          onClick={() => onAddToCart({
            id: product._id || product.id,
            img: product.image || "https://via.placeholder.com/150x220?text=No+Image",
            title: product.name || product.title,
            price: product.price
          })}
        >
          Купити
        </button>
      </div>
    </div>
  );
};

export default ProductModal; 