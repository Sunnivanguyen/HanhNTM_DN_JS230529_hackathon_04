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
  const [selecteCart, setSelectedCart] = useState<DishType | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleAddToCart = (cardId: string) => {
    const selectedItem = dishes.find((item: DishType) => item.id === cardId);
    const isInCart = carts.find((item: DishType) => item.id === cardId);

    if (selectedItem) setSelectedCart(selectedItem);
    let quan = selecteCart?.quantity;

    if (selectedItem) {
      if (!isInCart)
        setCarts((prevCarts) => [
          ...prevCarts,
          { ...selectedItem, quantity: 1 },
        ]);
      else if (isInCart && quan) {
        setCarts((prevCarts) => []);
      }
    }
    console.log(carts);
  };

  const handleOpenCart = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleIncrease = (id: string) => {
    const selectedItem = carts.find((item: DishType) => item.id === id);
    const index = carts.findIndex((item: DishType) => item.id === id);
    if (selectedItem)
      setCarts((prevCarts) => prevCarts.splice(index, 1, selectedItem));
  };

  const handleDecrease = (id: string) => {
    const selectedItem = carts.find((item: DishType) => item.id === id);
    const index = carts.findIndex((item: DishType) => item.id === id);
    if (selectedItem)
      setCarts((prevCarts) =>
        prevCarts.splice(index, 1, {
          ...selectedItem,
          quantity: selectedItem.quantity--,
        })
      );
  };

  return (
    <div className="app-container">
      <Header carts={carts} onOpenCart={handleOpenCart} />
      <Menu onAddToCart={handleAddToCart} />
      {isOpen ? (
        <Cart
          carts={carts}
          onOpenCart={handleOpenCart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      ) : null}
    </div>
  );
}

export default App;
