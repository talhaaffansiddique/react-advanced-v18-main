import React from "react";

const Product = ({ image, name, price }) => {
  console.log(image, name, price);
  return (
    <article className="product">
      {/* <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>$ {price}</p> */}
      <h4>product name</h4>
    </article>
  );
};

export default Product;
