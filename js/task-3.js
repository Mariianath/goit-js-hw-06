class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log("Initial value:", builder.getValue()); 

builder.padStart("^");
console.log("Value after padStart:", builder.getValue()); 

builder.padEnd("^");
console.log("Value after padEnd:", builder.getValue()); 

builder.padBoth("=");
console.log("Value after padBoth:", builder.getValue()); 
