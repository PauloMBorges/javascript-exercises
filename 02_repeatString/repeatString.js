const repeatString = function(str, times) {
    let repeatString = "";
    
    if(times < 0) {
        repeatString = "ERROR";
    }

    for(let i = 0; i < times; i++) {
        repeatString += str;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
