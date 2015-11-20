/**
 * Comma number formatter
 * @param {Number} number Number to format
 * @param {String} [separator=','] Value used to separate numbers
 * @returns {String} Comma formatted number
 */
module.exports = function commaNumber (number, separator) {
  separator = typeof separator === 'undefined' ? ',' : ('' + separator);
  negativeFlag = number < 0;

  // Convert to number if it's a non-numeric value
  if (typeof number !== 'number') {
    number = Number(number);
  }

  // NaN => 0
  if (isNaN(number)) {
    number = 0;
  }

  // Return Infinity immediately
  if (!isFinite(number)) {
    return '' + number;
  }

  //Converting number to string
  var strNumber = ('' + number);

  //Removing '-' character if negative number
  if(negativeFlag) {
    strNumber = strNumber.substr(1);
  }

  //Checking if number has a decimal
  var decimalFlag = strNumber.indexOf('.') != -1;

  //Setting reference index and computing nunber of separators
  var referenceIndex = decimalFlag ? strNumber.indexOf('.') : strNumber.length;
  var numberOfSeperators =  decimalFlag ? (Math.floor(referenceIndex/3) == referenceIndex/3 ? referenceIndex/3 - 1 : Math.floor(referenceIndex/3)) : (Math.floor(referenceIndex/3) == referenceIndex/3 ? referenceIndex/3 - 1 : Math.floor(referenceIndex/3));
  for(var i = 1; i <= numberOfSeperators; i++) {
    strNumber = strNumber.substr(0,referenceIndex - 3*i) + separator + strNumber.substr(referenceIndex - 3*i);
  }

  //Checking and adding negative sign
  if(negativeFlag) {
    strNumber = '-' + strNumber;
  }

  return strNumber;
}
