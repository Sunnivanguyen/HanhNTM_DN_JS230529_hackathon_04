import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { useState } from "react";
import dishes from "./models/data";

function App() {
  type DishType = {
    id: string;
    name: string;
    price: number;
    soldout: boolean;
    image: string;
    quantity: number;
  };

  const [carts, setCarts] = useState<DishType[] | []>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleAddToCart = (cardId: string) => {
    const selectedItem = dishes.find((item: DishType) => item.id === cardId);
    const isInCart = carts.find((item: DishType) => item.id === cardId);

    if (selectedItem) {
      if (!isInCart)
        setCarts((prevCarts) => [
          ...prevCarts,
          { ...selectedItem, quantity: 1 },
        ]);
      else {
        setCarts((prevCarts) =>
          prevCarts.map((item: DishType) =>
            item.id === cardId ? { ...item, quantity: item.quantity++ } : item
          )
        );
      }
    }
  };

  const handleOpenCart = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleIncrease = (id: string) => {
    setCarts((prevCarts) =>
      prevCarts.map((item: DishType) =>
        item.id === id ? { ...item, quantity: item.quantity++ } : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setCarts((prevCarts) =>
      prevCarts.map((item: DishType) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity-- }
          : item
      )
    );
  };

  const handleDelete = (id: string) => {
    setCarts((prevCarts) =>
      prevCarts.filter((item: DishType) => item.id !== id)
    );
  };

  return (
    <div className="app-container">
      <Header carts={carts} onOpenCart={handleOpenCart} />
      <Menu onAddToCart={handleAddToCart} isOpen={isOpen} />
      {isOpen ? (
        <Cart
          carts={carts}
          onOpenCart={handleOpenCart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleDelete={handleDelete}
        />
      ) : null}
    </div>
  );
}

export default App;
