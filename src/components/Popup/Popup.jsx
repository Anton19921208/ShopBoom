import PropTypes from "prop-types";

const Popup = ({ orderPopup, setOrderPopup }) => {
  // Просто не рендеримо нічого, якщо orderPopup відкритий
  return null;
};

Popup.propTypes = {
  orderPopup: PropTypes.any,
  setOrderPopup: PropTypes.func
};

export default Popup;
