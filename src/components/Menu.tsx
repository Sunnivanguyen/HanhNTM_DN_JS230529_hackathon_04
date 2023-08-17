import React from "react";
import dishes from "../models/data";
import MenuItem from "./MenuItem";

const Menu: React.FC<{ onAddToCart: (id: string) => void }> = ({
  onAddToCart,
}) => {
  return (
    <main>
      {dishes.map((dish) => (
        <MenuItem key={dish.id} dish={dish} onAddToCart={onAddToCart} />
      ))}
    </main>
  );
};

export default Menu;
