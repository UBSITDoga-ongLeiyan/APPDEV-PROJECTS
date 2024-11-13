import React, { useState } from 'react';

const ItemList = ({ items, updateQuantity }) => {
  return (
    <div>
      <h2>Select Items</h2>
      {items.map(item => (
        <div key={item.name}>
          <span>{item.name} (${item.price}): </span>
          <input 
            type="number" 
            min="0" 
            value={item.quantity} 
            onChange={(e) => updateQuantity(item.name, parseInt(e.target.value) || 0)}
          /> 
        </div> 
      ))}
    </div>
  );
};

export default ItemList;
