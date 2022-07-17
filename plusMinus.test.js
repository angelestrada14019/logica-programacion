const {numberPositives,numberZeros,numberNegatives,numberBetween,lengthBetween,ratios}=require("./plusMinus")
let arr = [-4, 3, -9, 0, 4, 1];

describe('Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. and round 6 decimals', () => {
    test('should number is positive', () => { 
        const expected=true;
        const result = numberPositives(5);
        expect(expected).toBe(result);
     });
     test('should number is negative', () => { 
        const expected=true;
        const result = numberNegatives(-5);
        expect(expected).toBe(result);
     });
     test('should number is zero', () => { 
        const expected=true;
        const result = numberZeros(0);
        expect(expected).toBe(result);
     });
     test('length of array between 0 to 100', () => { 
        const expected=true;
        const result = lengthBetween(3);
        expect(expected).toBe(result);
     });
     test('number between -100 to 100', () => { 
        const expected=true;
        const result = numberBetween(-3);
        expect(expected).toBe(result);
     });
     test('should ratios of numbers negatives, positives and zeros, round to 6 decimals', () => { 
        const expected="0.500000\n0.333333\n0.166667";
        const result = ratios(arr);
        expect(expected).toBe(result);
     });
});
