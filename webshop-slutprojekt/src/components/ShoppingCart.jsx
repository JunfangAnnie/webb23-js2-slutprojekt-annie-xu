import React from "react";
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ shoppingCartItems, handleEmptyCart }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    handleEmptyCart();
    navigate("/payment-complete");
  };

  if (!shoppingCartItems || shoppingCartItems.length === 0) {
    return (
      <div className="shopping-cart-items">
        <p>Varukorgen är tom</p>
      </div>
    );
  }

  const handleEmptyAndNavigate = () => {
    handleEmptyCart();
    navigate('/');
  };

  const totalPrice = shoppingCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart-items">
      <div>
        {shoppingCartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Pris: {item.price} kr</p>
            <p>Antal: {item.quantity}</p>
          </div>
        ))}
      </div>
      <p>Totalpris: {totalPrice} kr</p>
      <button onClick={handlePurchase}>Slutför ditt köp</button>
      <button onClick={handleEmptyAndNavigate}>Töm varukorgen</button>
    </div>
  );
};

export default ShoppingCart;