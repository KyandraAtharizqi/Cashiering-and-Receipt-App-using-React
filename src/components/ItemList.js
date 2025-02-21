// src/components/ItemList.js
import React, { Component } from 'react';
import itemsData from '../data/items.json';
import Item from '../models/Item';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemId: '',
      quantity: 1,
      items: itemsData.map(item => new Item(item.id, item.name, item.price))
    };
  }

  handleAddItem = () => {
    const { selectedItemId, quantity, items } = this.state;
    const item = items.find(item => item.id === parseInt(selectedItemId));
    if (item) {
      this.props.onAddItem({ ...item, quantity: parseInt(quantity) });
    }
  }

  render() {
    return (
      <div>
        <h2>Add Items</h2>
        <select onChange={(e) => this.setState({ selectedItemId: e.target.value })}>
          <option value="">Select an item</option>
          {this.state.items.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Quantity"
          value={this.state.quantity}
          onChange={(e) => this.setState({ quantity: e.target.value })}
        />
        <button onClick={this.handleAddItem}>Add to Grocery Bag</button>
      </div>
    );
  }
}

export default ItemList;