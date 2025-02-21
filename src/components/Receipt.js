// src/components/Receipt.js
import React from 'react';

class Receipt extends React.Component {
  render() {
    const { transaction, onReset } = this.props;
    const { customerName, items, totalPrice, discount } = transaction;
    const discountedPrice = transaction.calculateDiscountedPrice();

    return (
      <div className="receipt">
        <h2>Receipt</h2>
        <p>Customer Name: {customerName}</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x Rp. {item.price.toFixed(2)} - Rp. {(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Price: Rp. {totalPrice.toFixed(2)}</p>
        <p>Discount: {discount}%</p>
        <p>Total Price After Discount: Rp. {discountedPrice.toFixed(2)}</p>
        <button onClick={onReset} className="btn btn-primary">New Transaction</button>
      </div>
    );
  }
}

export default Receipt;