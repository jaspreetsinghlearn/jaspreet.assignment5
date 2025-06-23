import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import CartSummary from './CartSummary';

const products = [
  { id: 1, name: 'Nike Shoes', price: 3000, image: 'nike.jpg' },
  { id: 2, name: 'Puma Shoes', price: 2500, image: 'puma.jpg' },
  { id: 3, name: 'Reebok Shoes', price: 2700, image: 'rebok.jpg' },
  { id: 4, name: 'Adidas Shoes', price: 3200, image: 'adidas.jpg' }
];

function ProductList({ search }) {
  const dispatch = useDispatch();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="products">
        {filtered.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => dispatch(addToCart(p))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <CartSummary />
    </div>
  );
}

export default ProductList;
