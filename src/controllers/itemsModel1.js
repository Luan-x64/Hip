// itemsModel.js

// Simulação de um modelo de lista de itens
const itemsModel = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 3' }
    ],
    getItems: function() {
        
      return this.items;
    },
    addItem: function(name) {
        console.log('add')
      const newItem = { id: this.items.length + 1, name };
      this.items.push(newItem);
      console.log('add')
      return newItem;
    },
    removeItem: function(id) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  };
  
  module.exports = itemsModel;
  