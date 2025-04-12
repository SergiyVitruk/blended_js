function filterArray(number, value) {
    const finalArray = [];

    for (i = 0; i <= number.length - 1; i++) {
        if (number[i] > value) {
            finalArray.push(number[i]);
        }
    }
    return finalArray; 
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
