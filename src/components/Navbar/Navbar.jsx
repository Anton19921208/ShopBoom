import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import PropTypes from "prop-types";

const Menu = [
  {
    id: 1,
    name: "Головна",
    link: "/#",
  },
  {
    id: 2,
    name: "Товари",
    link: "#products",
  },
  {
    id: 3,
    name: "Про нас",
    link: "#about",
  },
  {
    id: 4,
    name: "Контакти",
    link: "#contact",
  },
];

const Navbar = ({ cartCount = 0, onCartClick }) => {
  return (
    <div className="shadow-md bg-gray-900 text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              ShopBoom
            </a>
          </div>

          {/* search bar и корзина */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Пошук"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-700 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary bg-gray-800 text-white"
              />
              <IoMdSearch className="text-gray-400 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Cart icon */}
            <button
              className="relative flex items-center justify-center"
              onClick={onCartClick}
              title="Відкрити кошик"
            >
              <FaCartShopping className="text-2xl text-white drop-shadow-sm cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full px-2 text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-2 bg-gray-800/80 rounded-xl px-6 py-2 shadow-lg">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-5 py-2 rounded-lg font-medium text-white transition-all duration-200 hover:bg-primary/80 hover:text-white focus:bg-primary/90 focus:text-white active:scale-95 shadow-sm"
                style={{ position: 'relative' }}
              >
                {data.name}
                {/* Підсвічування активного пункту (якщо потрібно) */}
                {/* <span className="absolute left-0 bottom-0 w-full h-1 bg-primary rounded-b-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number,
  onCartClick: PropTypes.func.isRequired
};

export default Navbar;
