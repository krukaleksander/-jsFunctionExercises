import {
    compareObjects,
    findCommonElements,
    findDifferentElements,
    findValueAtPath,
    flat,
    say,
    sumOfArray,
    tuplesFrom
} from "./index";

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

describe('function that takes two arrays of items and returns an array of tuples', () => {
    it('should returns an array of tuples made from two input arrays at the same indexes', function () {
        const firstArray = [1,2,3];
        const secondArray = [4,5,6,7];
        const expectedResult = [[1,4], [2,5], [3,6]];
        expect(tuplesFrom(firstArray,secondArray)).toEqual(expectedResult)
    });
    it('should returns an array of tuples made from two input arrays at the same indexes in case first array is longer than second', function () {
        const firstArray = [4,5,6,7];
        const secondArray = [1,2,3];
        const expectedResult = [[4,1], [5,2], [6,3]];
        expect(tuplesFrom(firstArray,secondArray)).toEqual(expectedResult)
    });
})

describe('function which takes a path and object, then returns value at this path', () => {
    it('should returns value at given path', function () {
        const path = ['a', 'b', 'c', 'd'];
        const object = { a: { b: { c: { d: '23' } } } };
        expect(findValueAtPath(path,object)).toBe('23')
    });
    it('should returns undefined if value at path doesn\'t exists, path is deeper', function () {
        const path = ['a', 'b', 'c', 'd', 'e', 'f'];
        const object = { a: { b: { c: { d: '23' } } } };
        expect(findValueAtPath(path,object)).toBe(undefined)
    });
    it('should returns undefined if value at path doesn\'t exists, path is wrong', function () {
        const path = ['a', 'b', 'x', 'd'];
        const object = { a: { b: { c: { d: '23' } } } };
        expect(findValueAtPath(path,object)).toBe(undefined)
    });
})

describe('function which compares 2 objects for equality', () => {
    it('should return true if objects are equal', function () {
        const firstObject = { a: 'b', c: 'd' };
        const secondObject = { c: 'd', a: 'b' };
        expect(compareObjects(firstObject,secondObject)).toBe(true);
    });
    it('should return false if objects have same properties but values are different', function () {
        const firstObject = { a: 'b', c: 'd' };
        const secondObject = { c: 'y', a: 'x' };
        expect(compareObjects(firstObject,secondObject)).toBe(false);
    });
    it('should return false if objects have different properties and values', function () {
        const firstObject = { a: 'c', c: 'a' };
        const secondObject = { c: 'd', a: 'b', q: 's' };
        expect(compareObjects(firstObject,secondObject)).toBe(false);
    });
})