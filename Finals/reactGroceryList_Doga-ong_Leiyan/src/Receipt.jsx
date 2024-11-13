import React, { useState } from 'react';

const Receipt = ({ receipt }) => {
  return (
    <div>
      <h2>Receipt</h2>
      <ul>
        {receipt.boughtItems.map(item => (
          <li key={item.name}>
            {item.name}: {item.quantity} x ${item.price} = ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${receipt.total.toFixed(2)}</p>
      <p>Paid: ${receipt.paymentAmount.toFixed(2)}</p>
      <p>Change: ${(receipt.change).toFixed(2)}</p>
    </div>
  );
};

export default Receipt;
