import React from "react";
import ProductsPage from "./ProductsPage";
import ShoppingCart from "./ShoppingCart";
import PaymentComplete from "./PaymentComplete";
import { Route, Routes } from "react-router-dom";

const isPurchaseComplete = false;

const Nav = ({ productItems, shoppingCartItems, handleBuyClick, setShoppingCartItems }) => {
    const handleEmptyCart = () => {
      setShoppingCartItems([]); 
    };  
return (
<div>
    <Routes>
        <Route path="/" element={<ProductsPage productItems={productItems} handleBuyClick={handleBuyClick} />} />
        <Route path="/shopping-cart" element={<ShoppingCart shoppingCartItems={shoppingCartItems} 
          handleEmptyCart={handleEmptyCart}/>} />
        <Route path="/payment-complete" element={<PaymentComplete isPurchaseComplete={isPurchaseComplete} />} />
    </Routes>
</div>
  );
};

export default Nav;