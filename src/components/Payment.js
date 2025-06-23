import React from 'react';
import { useSelector } from 'react-redux';

function Payment() {
  const items = useSelector(state => state.cart.cartItems);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="payment-page">
      <div className="payment-box">
        <h2>Payment</h2>
        <p>Total: ₹{total}</p>
        <form>
          <input type="text" placeholder="Card number" required />
          <input type="text" placeholder="MM/YY" required />
          <input type="text" placeholder="CVV" required />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
