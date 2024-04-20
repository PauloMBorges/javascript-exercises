function isNotNumber(value) {
    return typeof value !== 'number';
}

const sumAll = function(startValue, finishValue) {

    if (startValue > finishValue) {
        let aux = startValue;
        startValue = finishValue;
        finishValue = aux;
    }

    if (startValue < 0 || finishValue < 0 ||
        isNotNumber(startValue) || isNotNumber(finishValue)) {
        return "ERROR";
    }

    let result = 0;

    for(let i = startValue; i <= finishValue; i++) {
        result += i;
    }

    return result;

};



// Do not edit below this line
module.exports = sumAll;
