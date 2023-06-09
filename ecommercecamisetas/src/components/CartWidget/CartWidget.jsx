import { BsCartFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
      <BsCartFill size={30} />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
