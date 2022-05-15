import {flat, say, sumOfArray} from "./index";

describe('usage of closures', function () {
    it('should greet user', function () {
        const sayHelloTo = say('Hello');
        expect(sayHelloTo('Dominik')).toBe('Hello, Dominik!')
    });
})


describe('sum of array', () => {
    it('should return sum of array elements', function () {
        expect(sumOfArray([9, 1, 22, 0, 2])).toBe(34)
    });
})

describe('flat an array', () => {
    it('should flat nested arrays', function () {
        const exampleArray = [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5];
        const exampleOutput = [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5];
expect(flat(exampleArray)).toEqual(exampleOutput)
    });
})