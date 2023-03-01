import * as React from 'react';
import Product from './Product';

interface ProdList {
  products: Product[];
}

const ProductList = ({ products }: ProdList) => {
  return (
    <ul>
      {products.map(
        ({ title, category, price, description, image, rating }, i) => (
          <li key={i}>
            <p className="title">{title}</p>
            <p>{price}</p>
            <p>{category}</p>
            <p>description: {description}</p>
            <img src={image} alt="image"></img>
            <p>
              rate: {rating?.rate} count: {rating?.count}
            </p>
          </li>
        )
      )}
    </ul>
  );
};

export default ProductList;
