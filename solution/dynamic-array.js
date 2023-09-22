class DynamicArray {
  constructor(capacity = 4) {
    this.length = 0;
    this.capacity = capacity;
    this.data = new Array(capacity);
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {

    for (let i = this.length; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.length++;
    this.data[0] = val;
  }

}


module.exports = DynamicArray;
