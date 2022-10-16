const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value ) {
    if(value === undefined) {
      this.chain.push(`()`)
      return this}
    this.chain.push(`( ` + String(value) + ` )`)
    return this
  },
  removeLink(position ) {
    if(isNaN(position) || position <=0 || position > this.chain.length){
      this.chain = []
      throw new Error('You can\'t remove incorrect link!');

    }
    this.chain.splice(position-1 , 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let chainStr = this.chain.join("~~")
    this.chain = []
    return chainStr 
  }
};

module.exports = {
  chainMaker
};
