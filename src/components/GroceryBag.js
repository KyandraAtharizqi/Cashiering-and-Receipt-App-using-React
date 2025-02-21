// src/components/GroceryBag.js
import React from 'react';

class GroceryBag extends React.Component {
  render() {
    const { items, onRemoveItem } = this.props;
    return (
      <div>
        <h2>Grocery Bag</h2>
        <ul className="list-group">
          {items.map((item, index) => {
            const totalItemPrice = item.price * item.quantity;
            return (
              <li key={index} className="list-group-item">
                {item.name} - {item.quantity} x Rp. {item.price.toFixed(2)} - Rp. {totalItemPrice.toFixed(2)}
                <button 
                  className="btn btn-danger btn-sm float-right" 
                  onClick={() => onRemoveItem(item)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GroceryBag;