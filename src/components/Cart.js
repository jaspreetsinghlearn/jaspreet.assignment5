import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from '../redux/cartSlice';

function Cart() {
  const items = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-full">
      <h2>Your Cart</h2>
      {items.map(i => (
        <div key={i.id} className="cart-card">
          <img src={i.image} alt={i.name} />
          <div className="cart-info">
            <h3>{i.name}</h3>
            <p>Price: ₹{i.price}</p>
            <div className="qty-control">
              <button onClick={() => dispatch(decreaseQuantity(i.id))}>-</button>
              <span>{i.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(i.id))}>+</button>
            </div>
            <p>Item total: ₹{i.price * i.quantity}</p>
          </div>
          <button onClick={() => dispatch(removeFromCart(i.id))}>
            Remove
          </button>
        </div>
      ))}
      <h3>Grand Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
