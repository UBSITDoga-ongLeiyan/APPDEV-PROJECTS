import React, { useState } from 'react';

const Checkout = ({ total, calculateTotal, handleCheckout }) => {
  const [payment, setPayment] = useState('');

  const handlePayment = () => {
    const paymentAmount = parseFloat(payment);
    if (!isNaN(paymentAmount) && paymentAmount >= total) {
      handleCheckout(paymentAmount);
    } else {
      alert("Payment must be equal to or greater than the total amount.");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={calculateTotal}>Calculate Total</button>
      <p>Total: ${total.toFixed(2)}</p>
      <input 
        type="number" 
        value={payment} 
        onChange={(e) => setPayment(e.target.value)} 
        placeholder="Enter payment amount"
      />
      <button onClick={handlePayment}>Pay</button> <hr />
    </div>
  );
};

export default Checkout;
