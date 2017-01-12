"use strict";
let assert = require('chai').assert;
let Calculator = require('../src/string-calculator');

describe('String calculator', function () {

    it('should return default value if input is empty', function () {
        let calculator = createCalculator();

        let sum = calculator.add('');

        assert.equal(sum, 0);
    });

    it('should return 1 if input is 1', function () {
        let calculator = createCalculator();

        let sum = calculator.add('1');

        assert.equal(sum, 1);
    });

    it('should return single number if input is that single number', function () {
        let calculator = createCalculator();

        let sum = calculator.add('2');

        assert.equal(sum, 2);
    });

    it('should return sum of two one-digit comma separated values', function () {
        let calculator = createCalculator();

        let sum = calculator.add('1,2');

        assert.equal(sum, 1 + 2);
    });

    it('should return sum of any two comma separated values', function () {
        let calculator = createCalculator();

        let sum = calculator.add('123,456');

        assert.equal(sum, 123 + 456);
    });

    it('should return sum of any amount of comma separated values', function () {
        let calculator = createCalculator();

        let sum = calculator.add('1,2,3,4,5');

        assert.equal(sum, 1 + 2 + 3 + 4 + 5);
    });

    it('should return sum of two numbers separated by new line', function () {
        let calculator = createCalculator();

        let sum = calculator.add('1\n2');

        assert.equal(sum, 1 + 2);
    });

    function createCalculator() {
        return new Calculator();
    }
});