import {sumOfArray} from "./index";


describe('sum of array', () => {
    it('should return sum of array elements', function () {
        expect(sumOfArray([9, 1, 22, 0, 2])).toBe(34)
    });
})