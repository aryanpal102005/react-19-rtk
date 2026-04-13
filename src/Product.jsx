import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";
import { addItem, removeItem } from "./redux/slice";

const Product = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { items, status } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = (id) => {
    return cartItems.find(item => item.id === id);
  };

  if (status === 'loading') return <h2>Loading...</h2>;

  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>

      {items.map((product) => (
        <div key={product.id} style={{
          border:"1px solid #ccc",
          padding:"10px",
          width:"250px"
        }}>

          <img src={product.thumbnail} style={{width:"100%"}} />

          <h3>{product.title}</h3>
          <p>${product.price}</p>

          {
            isInCart(product.id) ? (
              <button onClick={() => dispatch(removeItem(product.id))}>
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => dispatch(addItem(product))}>
                Add to Cart
              </button>
            )
          }

        </div>
      ))}

    </div>
  );
};

export default Product;