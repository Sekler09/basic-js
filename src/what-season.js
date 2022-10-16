const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  let invalid = Object.keys(date);
  if(!(date instanceof Date) || (!date.getTime) || (invalid.length > 0) ){    
    throw new Error('Invalid date!');
  }

  let seasonsWMonths = {
    'winter': [11,0,1,],
    'spring':[2,3,4], 
    'summer': [5,6,7],
     'autumn':[8,9,10], 
    }
    for(key in seasonsWMonths){
      if(seasonsWMonths[key].indexOf(date.getMonth())!=-1) return key
    }
}

module.exports = {
  getSeason
};
