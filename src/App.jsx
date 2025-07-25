import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import OrderModal from "./components/OrderModal";
import ProductModal from "./components/ProductModal";

const SETTINGS_URL = import.meta.env.VITE_API_URL + "/api/settings";

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);
  const [siteEnabled, setSiteEnabled] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [showToast, setShowToast] = React.useState(false);
  const [orderModalOpen, setOrderModalOpen] = React.useState(false);
  const [orderLoading, setOrderLoading] = React.useState(false);
  const [orderSuccess, setOrderSuccess] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Проверка статуса сайта
  React.useEffect(() => {
    fetch(SETTINGS_URL)
      .then(res => res.json())
      .then(data => setSiteEnabled(data.siteEnabled !== false))
      .catch(() => setSiteEnabled(true))
      .finally(() => setLoading(false));
  }, []);

  // Добавить товар в корзину
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setShowCart(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  // Удалить товар из корзины
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Изменить количество
  const handleChangeQty = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  // Оформить заказ (заглушка)
  const handleOrder = () => {
    setOrderModalOpen(true);
  };
  const handleOrderSubmit = (form) => {
    setOrderLoading(true);
    // Тут можна зробити запит на backend для збереження замовлення
    setTimeout(() => {
      setOrderLoading(false);
      setOrderModalOpen(false);
      setOrderSuccess(true);
      setCart([]);
      setShowCart(false);
      setTimeout(() => setOrderSuccess(false), 2000);
    }, 1200);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-xl">Завантаження...</div>;
  }

  if (!siteEnabled) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-4">Сайт тимчасово недоступний</h1>
        <p className="text-lg text-gray-400 mb-8">Ми проводимо технічне обслуговування. Будь ласка, спробуйте пізніше.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen duration-200">
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} onCartClick={() => setShowCart(true)} />
      {showToast && (
        <div className="fixed top-8 left-1/2 z-[999] -translate-x-1/2 flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in-up">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-pop">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#22c55e"/>
            <path d="M8 12l2 2l4-4" stroke="#fff" strokeWidth="2" fill="none"/>
          </svg>
          <span className="font-semibold">Ваш товар було додано до кошика!</span>
        </div>
      )}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute -top-4 -right-4 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-2xl hover:bg-red-600 transition"
              title="Закрити кошик"
            >
              ×
            </button>
            <Cart
              cart={cart}
              onRemove={handleRemove}
              onChangeQty={handleChangeQty}
              onOrder={handleOrder}
            />
          </div>
          {/* Клік по фону закриває модалку */}
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setShowCart(false)}
          />
        </div>
      )}
      <OrderModal open={orderModalOpen} onClose={() => setOrderModalOpen(false)} onSubmit={handleOrderSubmit} loading={orderLoading} />
      {orderSuccess && (
        <div className="fixed top-8 left-1/2 z-[999] -translate-x-1/2 flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in-up">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-pop">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#f59e42"/>
            <path d="M8 12l2 2l4-4" stroke="#fff" strokeWidth="2" fill="none"/>
          </svg>
          <span className="font-semibold">Замовлення успішно оформлено!</span>
        </div>
      )}
      <Hero />
      <Products
        onAddToCart={handleAddToCart}
        onProductClick={setSelectedProduct}
      />
      <TopProducts onAddToCart={handleAddToCart} />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <ProductModal
        open={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;
