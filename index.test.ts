import {findCommonElements, findDifferentElements, flat, say, sumOfArray} from "./index";

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

describe('finds all common elements of two arrays', () => {
    it('should find all common elements of two arrays', function () {
        const firstArray = ['b', 3, 4, 76, 'c'];
        const secondArray = ['a', 'b', 4, 76, 21, 'e'];
        const expectedResult = ['b', 4, 76];
        expect(findCommonElements(firstArray,secondArray)).toEqual(expectedResult);
    });
})

describe('finds all different elements of two arrays', () => {
    it('should find all different elements of two arrays', function () {
        const firstArray = ['b', 3, 4, 76, 'c'];
        const secondArray = ['a', 'b', 4, 76, 21, 'e'];
        const expectedResult = ['a', 3, 21, 'c', 'e'];
        expect(findDifferentElements(firstArray,secondArray)).toEqual(expect.arrayContaining(expectedResult));
    });
})