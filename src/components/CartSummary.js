import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity
} from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function CartSummary() {
  const items = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-summary">
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <p>No items</p>
      ) : (
        <div>
          {items.map(i => (
            <div key={i.id} className="summary-item">
              <img src={i.image} alt={i.name} />
              <div>
                <p>{i.name}</p>
                <p>₹{i.price} x {i.quantity}</p>
                <div className='button-space'>
                  <button onClick={() => dispatch(decreaseQuantity(i.id))}>-</button>
                  <button onClick={() => dispatch(increaseQuantity(i.id))}>+</button>
                </div>
              </div>
            </div>
          ))}
          <p><strong>Total: ₹{total}</strong></p>
          <button onClick={() => nav('/payment')}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSummary;