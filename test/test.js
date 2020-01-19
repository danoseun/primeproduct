var assert = chai.assert;

describe('generateprimenumbers', function() {
	it('The array should start with two elements in it', function() {
		let arr = [2,3];

		assert.equal(arr.length, 2);
    });

    it('The result should be nine elements in the array', function() {

		assert.deepEqual(generatePrimeNumbers(5), [4, 6, 10, 6, 9, 15, 10, 15, 25]);
    });

    it('The result should include 15', function() {

		assert.include(generatePrimeNumbers(5), 15);
    });

    it('The length of the resultant array be 100', function() {

		assert.lengthOf(generatePrimeNumbers(29), 100);
    });

    it('The length of the resultant array be 9', function() {

		assert.lengthOf(generatePrimeNumbers(5), 9);
    });

    it('The length of the resultant array be 49', function() {

		assert.lengthOf(generatePrimeNumbers(17), 49);
    });

    it('The length of the resultant array be 81', function() {

		assert.lengthOf(generatePrimeNumbers(25), 81);
    });

    it('The length of the resultant array be 625', function() {

		assert.lengthOf(generatePrimeNumbers(99), 625);
    });

    it('The length of the resultant array be 4', function() {

		assert.lengthOf(generatePrimeNumbers(2), 4);
    });

    it('The length of the resultant array be 225', function() {

		assert.lengthOf(generatePrimeNumbers(50),225);
    });
});