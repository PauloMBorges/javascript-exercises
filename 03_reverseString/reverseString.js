const reverseString = function(str) {
    let splitString = str.split('');

    let reversedString = splitString.reverse().join("");

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
