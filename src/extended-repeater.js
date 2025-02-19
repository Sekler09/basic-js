const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let res = [];
  let add = []
  if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
if(!String(options.addition)) options.addition='';
  for(let i = 0; i< options.additionRepeatTimes;i++){
    add.push(options.addition=== null? String(options.addition) : options.addition)
  }
    console.log(add, res)
  add = add.join(options.additionSeparator || '|' );
  if(!options.repeatTimes) options.repeatTimes = 1;
  for(let i = 0; i< options.repeatTimes;i++){
    res.push(str+add)
      console.log(res)
  }
  return res.join(options.separator || '+')
}


module.exports = {
  repeater
};
