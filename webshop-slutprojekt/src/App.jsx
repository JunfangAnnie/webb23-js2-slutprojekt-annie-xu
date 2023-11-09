import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/Style.css';

const App = () => {
  const initialProductItems = [
    {
      id: '1',
      name: 'TIAKI Madagascar',
      price: 165,
      image: './img/tiaki.jpg',
      stock: 10,
    },
    {
      id: '2',
      name: 'TIAKI Fruit',
      price: 129,
      image: './img/tiaki-fruit.jpg',
      stock: 5,
    },
    {
      id: '3',
      name: 'Kattspö 3 i 1',
      price: 29,
      image: './img/kattspo.jpg',
      stock: 10,
    },
    {
      id: '4',
      name: 'KONG Kickeroo',
      price: 75,
      image: './img/kong.jpg',
      stock: 7,
    },
    {
      id: '5',
      name: 'TRIXIE Plyschmöss',
      price: 39,
      image: './img/trixie.jpg',
      stock: 25,
    },
  ];

  const [productItems, setProductItems] = useState(initialProductItems);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const handleBuyClick = (product) => {
    const updatedShoppingCartItems = [...shoppingCartItems];
    const updatedProductItems = [...productItems];

    const existingProduct = updatedShoppingCartItems.find((item) => item.id === product.id);
    const productIndex = updatedProductItems.findIndex((item) => item.id === product.id);

    if (existingProduct && updatedProductItems[productIndex].stock > 0) {
      existingProduct.quantity += 1;
      updatedProductItems[productIndex].stock -= 1;
    } else if (!existingProduct && updatedProductItems[productIndex].stock > 0) {
      updatedShoppingCartItems.push({ ...product, quantity: 1 });
      updatedProductItems[productIndex].stock -= 1;
    } else {
      alert('Denna produkt är tyvärr slutsåld.');
    }

    setShoppingCartItems(updatedShoppingCartItems);
    setProductItems(updatedProductItems);
  };

  const handleEmptyCart = () => {
    console.log("Test")
    setProductItems(initialProductItems)
    setShoppingCartItems([]);
  };

  return (
    <div>
      <Router>
        <Navigation />
        <Nav
          productItems={productItems}
          shoppingCartItems={shoppingCartItems}
          handleBuyClick={handleBuyClick}
          setShoppingCartItems={setShoppingCartItems}
          handleEmptyCart={handleEmptyCart}
        />
      </Router>
    </div>
  );
};

export default App;