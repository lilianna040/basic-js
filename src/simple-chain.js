const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value); 
    return this; 
  },
  removeLink(position) {
    console.log(position)
    if (!isNaN(position) && position<=this.arr.length && position>0) {
      this.arr.splice(position - 1, 1);
      return this;
    } 
    else {
      this.arr=[]; 
      throw new Error();
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let newArr='';
    for (let i of this.arr) {newArr += '( '+i+' )~~';}
    this.arr=[];
    return newArr.slice(0,-2);
  }

};
module.exports = chainMaker;
