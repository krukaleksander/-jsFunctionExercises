import {say, sumOfArray} from "./index";

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