const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
    test('should print the error message if the argument is not a number', () => {
        const expected='Error: the argument must be a number'; 
        const result =fizzBuzz("16");
        expect(expected).toBe(result);
     });
    test('should print 1 if they receive 1', () => {
        const expected=1; 
        const result =fizzBuzz(1);
        expect(expected).toBe(result);
     });
     test('should print Fizz if they receive 3', () => { 
        const expected="Fizz";
        const result = fizzBuzz(3);
        expect(expected).toBe(result);
      });
      test('should print Fizz if they receive a multiple of 3', () => { 
        const expected="Fizz";
        const result = fizzBuzz(6);
        expect(expected).toBe(result);
      });
      test('should print Fizz if they receive 5', () => { 
        const expected="Buzz";
        const result = fizzBuzz(5);
        expect(expected).toBe(result);
      });
      test('should print Fizz if they receive a multiple of 5', () => { 
        const expected="Buzz";
        const result = fizzBuzz(10);
        expect(expected).toBe(result);
      });
      test('should print FizzBuzz if they receive a multiple of 3 and 5', () => { 
        const expected="FizzBuzz";
        const result = fizzBuzz(15);
        expect(expected).toBe(result);
      });
});
