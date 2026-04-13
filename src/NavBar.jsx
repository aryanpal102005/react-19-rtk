import { useSelector } from "react-redux";

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"10px",
      background:"#333",
      color:"#fff"
    }}>
      <h2>My Shop</h2>
      <h3>Cart: {cartItems.length}</h3>
    </div>
  );
};

export default Navbar;