import{ useSelector } from "react-redux";           
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartCount = useSelector((state) => state.cart.value);
  console.log(selector);

  return (

<div class="cart">
  <Link to="/cart">
    🛒
    <span class="cart-count">{cartCount}</span>
  </Link>
</div>
)
export default AddToCart; 