import React from "react";
type DishType = {
  id: string;
  name: string;
  price: number;
  soldout: boolean;
  image: string;
  quantity: number;
};

const MenuItem: React.FC<{
  dish: DishType;
  onAddToCart: (id: string) => void;
}> = ({ dish, onAddToCart }) => {
  return (
    <div className="item-container">
      <img src={dish.image} alt={dish.name} />
      <em>{dish.name.toUpperCase()}</em>
      <p>{dish.price}</p>
      <button className="btn-add__cart" onClick={() => onAddToCart(dish.id)}>
        Add To Cart
      </button>
    </div>
  );
};

export default MenuItem;
