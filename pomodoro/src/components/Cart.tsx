import React from "react";
import Button from "./Button/Button";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button color="secondary" onClick={onClear}>
        Clear
      </Button>
    </>
  );
};

export default Cart;
