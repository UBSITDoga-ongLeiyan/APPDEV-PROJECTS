import React, { useState } from 'react';
import ItemList from './ItemList';
import Checkout from './Checkout';
import Receipt from './Receipt';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    { name: 'Grapes', price: 3, quantity: 0 },
    { name: 'Oranges', price: 2, quantity: 0 },
    { name: 'Kiwis', price: 4, quantity: 0 },
    { name: 'Bananas', price: 1, quantity: 0 },
    { name: 'Cucumbers', price: 1.5, quantity: 0 },
    { name: 'Mangos', price: 3.5, quantity: 0 },
    { name: 'Pineapple', price: 1, quantity: 0 },
    { name: 'Apple', price: 2, quantity: 0 },
    { name: 'Melon', price: 1, quantity: 0 }
  ]);

  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(0);
  const [receipt, setReceipt] = useState(null);

  const updateQuantity = (name, quantity) => {
    setItems(items.map(item => 
      item.name === name ? { ...item, quantity } : item
    ));
  };

  const calculateTotal = () => {
    const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const handleCheckout = (paymentAmount) => {
    setPayment(paymentAmount);
    const change = paymentAmount - total;
    const boughtItems = items.filter(item => item.quantity > 0);
    setReceipt({ boughtItems, total, paymentAmount, change });
  };

  return (
    <div className="container">
      <h1>Grocery Checkout App</h1>
      <ItemList items={items} updateQuantity={updateQuantity} />
      <Checkout total={total} calculateTotal={calculateTotal} handleCheckout={handleCheckout} />
      {receipt && <Receipt receipt={receipt} />} 
    </div> 
  );
};

export default App;
