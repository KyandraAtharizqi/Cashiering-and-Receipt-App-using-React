import React, { Component } from 'react';
import GroceryBag from './GroceryBag';
import ItemList from './ItemList';
import Receipt from './Receipt';
import Transaction from '../models/Transaction';
import '../styles/App.css'; // Ensure the correct import path for the CSS file

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: new Transaction(''),
      showReceipt: false
    };
  }

  handleAddItem = (item) => {
    const { transaction } = this.state;
    transaction.addItem(item);
    this.setState({ transaction });
  }

  handleRemoveItem = (itemToRemove) => {
    const { transaction } = this.state;
    transaction.removeItem(itemToRemove);
    this.setState({ transaction });
  }

  handleFinalizeTransaction = () => {
    this.setState({ showReceipt: true });
  }

  handleReset = () => {
    this.setState({
      transaction: new Transaction(''),
      showReceipt: false
    });
  }

  render() {
    const { transaction, showReceipt } = this.state;
    const discountedPrice = transaction.calculateDiscountedPrice();

    return (
      <div className="container">
        <h1 className="text-center mb-4">SISTEM KASIR TOKO ANGKASAJAYAHENDRATAMA</h1>
        <input
          type="text"
          placeholder="Customer Name"
          value={transaction.customerName}
          onChange={(e) => {
            transaction.customerName = e.target.value;
            this.setState({ transaction });
          }}
        />
        <ItemList onAddItem={this.handleAddItem} />
        <h1>--------------------------------------------------------------------------------</h1>
        <GroceryBag
          items={transaction.items}
          onRemoveItem={this.handleRemoveItem}
        />
        <div className="pricing-section">
          <h2>Total Price: Rp. {transaction.totalPrice.toFixed(2)}</h2>
          <h1>--------------------------------------------------------------------------------</h1>
          <h2 className="mt-4">Discount %</h2>
          <input
            type="number"
            placeholder="Discount (%)"
            value={transaction.discount}
            onChange={(e) => {
              transaction.discount = parseFloat(e.target.value) || 0;
              this.setState({ transaction });
            }}
          />
          <h2 className="text-center mb-4">Discounted Price: Rp. {discountedPrice.toFixed(2)}</h2>
          <button className="finalize-button btn btn-danger mt-4" onClick={this.handleFinalizeTransaction}>Finalize Transaction</button>
        </div>
        {showReceipt && (
          <Receipt
            transaction={transaction}
            onReset={this.handleReset}
          />
        )}
      </div>
    );
  }
}

export default App;
