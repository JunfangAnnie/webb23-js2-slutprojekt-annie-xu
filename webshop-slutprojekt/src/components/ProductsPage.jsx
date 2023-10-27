import React from "react";

const ProductsPage = ({ productItems, handleBuyClick }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card" key={productItem.id}>
          <div>
            <img 
              className="product-image"
              src={productItem.image} 
              alt={productItem.name}
            />
          </div>

          <div>
            <h3 className="product.name">{productItem.name}</h3>
          </div>
          <div className="product-price">{productItem.price} kr</div>
          <div className="product-in-stock">Lagersaldo: {productItem.stock} st</div> 
          <div className="buy">
            <button className="buy-btn" onClick={() => handleBuyClick(productItem)}>Köp</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;