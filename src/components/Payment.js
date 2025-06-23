import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [paymentMode, setPaymentMode] = useState('card');
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="payment-page">
      
      <div className="payment-top-bar">
        <button className="top-btn">Total: ₹{total}</button>
        <button className="top-btn" onClick={() => navigate('/')}>
          Go Back to Shopping
        </button>
      </div>

      <div className="payment-box">
        <h2>Choose Payment Method</h2>

      
        <div className="payment-method">
          <label className="radio-option">
            <input
              type="radio"
              value="card"
              checked={paymentMode === 'card'}
              onChange={() => setPaymentMode('card')}
            />
            <span>Credit Card</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              value="cod"
              checked={paymentMode === 'cod'}
              onChange={() => setPaymentMode('cod')}
            />
            <span>Cash on Delivery</span>
          </label>
        </div>

      
        {paymentMode === 'card' && (
          <form className="card-form">
            <label>
              Enter your card number
              <input type="text" placeholder="1234 5678 9012 3456" required />
            </label>

            <label>
              Enter Expiry (MM/YY)
              <input type="text" placeholder="MM/YY" required />
            </label>

            <label>
              Enter your CVV
              <input type="text" placeholder="CVV" required />
            </label>

            <p className="total-display">Total: ₹{total}</p>
            <button type="submit">Complete Payment</button>
          </form>
        )}

        
        {paymentMode === 'cod' && (
          <div className="cod-box">
            <p>You selected <strong>Cash on Delivery</strong>.</p>
            <p>Total Amount: ₹{total}</p>
            <button>Place Order</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
