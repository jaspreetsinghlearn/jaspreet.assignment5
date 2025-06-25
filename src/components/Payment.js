import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [paymentMode, setPaymentMode] = useState('card');
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="payment-wrapper">
      {/*Top Bar */}
      <div className="payment-top-bar">
        <button className="top-btn">Total: ₹{total}</button>
        <button className="top-btn" onClick={() => navigate('/')}>
          Go Back to Shopping
        </button>
      </div>

      {/* Two Column Layout */}
      <div className="payment-row">
        {/* Left Column: Cart Items */}
        <div className="cart-column">
          <h2>Your Cart</h2>
          {cartItems.map(item => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p className="item-name">{item.name}</p>
                <p className="item-detail">₹{item.price} x {item.quantity}</p>
                <p className="item-total">Total: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Payment Form */}
        <div className="form-column">
          <h2>Payment Method</h2>

          <div className="payment-options">
            <label className="radio-label">
              <input
                type="radio"
                value="card"
                checked={paymentMode === 'card'}
                onChange={() => setPaymentMode('card')}
              />
              <span>Credit Card</span>
            </label>
            <label className="radio-label">
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
                Card Number
                <input type="text" placeholder="1234 5678 9012 3456" required />
              </label>
              <label>
                Expiry (MM/YY)
                <input type="text" placeholder="MM/YY" required />
              </label>
              <label>
                CVV
                <input type="text" placeholder="CVV" required />
              </label>
              <p className="form-total">Total: ₹{total}</p>
              <button type="submit">Complete Payment</button>
            </form>
          )}

          {paymentMode === 'cod' && (
            <div className="cod-box">
              <p><strong>Cash on Delivery</strong> selected.</p>
              <p>You will pay ₹{total} on delivery.</p>
              <button>Place Order</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
