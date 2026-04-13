 
const Header = ({ count }) => {
  return (
    <header className="header">
      <div className="logo">MyShop</div>

      <nav className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
      </nav>

      <div className="cart">
        🛒
        <span className="cart-count">{count}</span> {/* ✅ dynamic */}
      </div>
    </header>
  );
};

export default Header;