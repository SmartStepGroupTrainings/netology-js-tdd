"use strict";

class Calculator {
    constructor() {
        this.defaultValue = 0;
    }

    add(input) {
        if (this.isEmpty(input)) {
            return this.defaultValue;
        }

        if (this.isSingleNumber(input)) {
            return this.parseSingleNumber(input);
        }

        return this.parseMultipleNumbers(input);
    };

    parseMultipleNumbers(input) {
        let summands = input.split(/[\n,]/);
        return summands.reduce((a, b) =>
            this.parseSingleNumber(a) + this.parseSingleNumber(b));
    }

    isSingleNumber(input) {
        return input.indexOf(',') === -1 && input.indexOf('\n') === -1;
    }

    isEmpty(numbers) {
        return !numbers;
    }

    parseSingleNumber(number) {
        return parseInt(number, 10);
    }
}

module.exports = Calculator;