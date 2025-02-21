// src/models/Transaction.js
class Transaction {
    constructor(customerName, items = [], discount = 0) {
      this.customerName = customerName;
      this.items = items;
      this.discount = discount;
      this.totalPrice = this.calculateTotalPrice();
    }
  
    calculateTotalPrice() {
      return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  
    calculateDiscountedPrice() {
      return this.totalPrice - (this.totalPrice * (this.discount / 100));
    }
  
    addItem(item) {
      this.items.push(item);
      this.totalPrice = this.calculateTotalPrice();
    }
  
    removeItem(itemToRemove) {
      this.items = this.items.filter(item => item !== itemToRemove);
      this.totalPrice = this.calculateTotalPrice();
    }
  }
  
  export default Transaction;