import { useSelector } from "react-redux";

const NavBar = () => {

  const cartCount = useSelector((state) => state.cart.value);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "black",
      color: "white"
    }}>
      
      <h2>MyShop</h2>

      <div>
        🛒 Cart: <b>{cartCount}</b>
      </div>

    </div>
  );
};

export default NavBar;