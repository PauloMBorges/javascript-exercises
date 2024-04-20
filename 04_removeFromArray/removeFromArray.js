const removeFromArray = function(array, ...elementsToRemove) {
    
    return array.filter(element => {
        const shouldBeExcluded = elementsToRemove.includes(element); // checks if current element should be excluded
        return !shouldBeExcluded; // if it should not be excluded, includes it in the new array
    });
};

// Do not edit below this line
module.exports = removeFromArray;
