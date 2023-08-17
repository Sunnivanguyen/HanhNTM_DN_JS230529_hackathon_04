import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

type DishType = {
  id: string;
  name: string;
  price: number;
  soldout: boolean;
  image: string;
  quantity: number;
};

const Cart: React.FC<{
  carts: DishType[];
  onOpenCart: () => void;
  handleIncrease: (id: string) => void;
  handleDecrease: (id: string) => void;
  handleDelete: (id: string) => void;
}> = ({ carts, onOpenCart, handleIncrease, handleDecrease, handleDelete }) => {
  const totalPrice = carts.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <div className="cart">
        {carts.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.price}</p>
            <div className="amount-control">
              <AiOutlinePlus onClick={() => handleIncrease(item.id)} />
              <em>{item.quantity}</em>
              <AiOutlineMinus onClick={() => handleDecrease(item.id)} />
            </div>
            <AiFillDelete onClick={() => handleDelete(item.id)} />
          </div>
        ))}
      </div>
      <footer className="footer-cart">
        <div>{totalPrice}</div>
        <button onClick={onOpenCart}>Close</button>
      </footer>
    </div>
  );
};

export default Cart;
