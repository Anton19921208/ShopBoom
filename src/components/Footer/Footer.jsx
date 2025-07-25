import footerLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 border-t border-gray-800">
      <div className="container flex flex-col items-center">
        <div className="flex items-center gap-3 mb-3">
          <img src={footerLogo} alt="ShopBoom" className="max-w-[50px]" />
          <span className="text-2xl font-bold">ShopBoom</span>
        </div>
        <p className="text-center text-gray-400 max-w-xl mb-2">
          © {new Date().getFullYear()} ShopBoom. Всі права захищені.
        </p>
        <p className="text-center text-gray-500 text-sm">
          Інтернет-магазин сучасних товарів для вас.
        </p>
      </div>
    </div>
  );
};

export default Footer;
