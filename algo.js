function Algo() {}

Algo.prototype.reverse = function(str) {
  
  return (
    str
  .split('')
  .reverse()
  .join('')
)
};


  // TODO: convert string to an array
  // TODO: reverse substrings in array
  // TODO: convert array back into a string


Algo.prototype.isPalindrome = function(str) {
  // var reversedString = str
  //   .split('')
  //   .reverse()
  //   .join('');

  // if (reversedString === str) {
  //   return true;
  // } else {
  //   return false;
  // }

  return this.reverse(str) === str;
};

Algo.prototype.capitalize = function(str) {

return str 
  .split(' ')
  .map(word => {
    // for each word, we convert the first character to upper case
    return word.substring(0, 1).toUpperCase() + word.substring(1)
  })
  .join(' ');

};

module.exports = Algo;
