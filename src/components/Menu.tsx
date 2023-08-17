import React from "react";
import dishes from "../models/data";
import MenuItem from "./MenuItem";

const Menu: React.FC<{
  onAddToCart: (id: string) => void;
  isOpen: boolean;
}> = ({ onAddToCart, isOpen }) => {
  return (
    <main className={isOpen ? "narrow" : ""}>
      {dishes.map((dish) => (
        <MenuItem key={dish.id} dish={dish} onAddToCart={onAddToCart} />
      ))}
    </main>
  );
};

export default Menu;
