import * as React from 'react';
import ProductList from './components/ProductList';
import Form from './components/Form';
import Product from './components/Product';
import './style.css';

export default function App() {
  const [products, setProducts] = React.useState([]);

  const fetchData = async () => {
    const result = await fetch('https://fakestoreapi.com/products').then(
      (res) => {
        return res.json();
      }
    );
    setProducts(result);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const postData = async (product: Product) => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      }),
    })
      .then((res) => {
        if (res.status == 200) return res.json();
        else console.log('error');
      })
      .then((res) => {
        setProducts([...products, res]);
      });
  };

  return (
    <div>
      <Form handleAddProd={postData} />
      <ProductList products={products} />
    </div>
  );
}
