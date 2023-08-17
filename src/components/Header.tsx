import React from "react";
import { BsFillCartFill } from "react-icons/bs";

type DishType = {
  id: string;
  name: string;
  price: number;
  soldout: boolean;
  image: string;
  quantity: number;
};

const Header: React.FC<{
  carts: DishType[];
  onOpenCart: () => void;
}> = (props) => {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <div className="btn-cart">
        <BsFillCartFill className="icon-cart" onClick={props.onOpenCart} />
        <div className="amount-cart">{props.carts.length}</div>
      </div>
    </header>
  );
};

export default Header;
