class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log("Initial items:", storage.getItems()); 

storage.addItem("Droid");
console.log("Items after adding 'Droid':", storage.getItems()); 
storage.removeItem("Prolonger");
console.log("Items after removing 'Prolonger':", storage.getItems()); 
