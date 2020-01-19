function generatePrimeNumbers(n) {
    let array = [2, 3];
    let result = [];
    let arrayCopy;
    for (var i = 5; i <= n; i += 2) {
        if (array.every(function (p) { return i % p; })) {
            array.push(i);
        }
    }
    arrayCopy = array.slice();
    for (let i = 0; i < array.length; i++) {
        //console.log('i',i);
        for (let j = 0; j < arrayCopy.length; j++) {
            //console.log('j',j);
            result.push(array[i] * arrayCopy[j]);
        }
    }
    return result;
}
    //  console.log(generatePrimeNumbers(29));