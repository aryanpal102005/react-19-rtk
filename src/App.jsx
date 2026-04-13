import Navbar from "./Navbar";
import Product from "./Product";

function App() {
  return (
    <div>
      <Navbar />
      <h1 style={{textAlign:"center"}}>Persist and Remove Cart</h1>
      <Product />
    </div>
  );
}

export default App;