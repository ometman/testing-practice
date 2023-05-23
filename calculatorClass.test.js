const Calculator = require('./calculatorClass');

const cal = new Calculator();

   describe('the calculator', () => {

    test('adds 2 values a and b', () => {
        const a = 6;
        const b = 7;
        expect(cal.add(a, b)).toEqual(13);
    });

    test('subtract 2 values a and b', () => {
        const a = 15;
        const b = 12;
        expect(cal.subtract(a, b)).toEqual(3);
    });

    test('divide 2 values a and b', () => {
        const a = 12;
        const b = 6;
        expect(cal.divide(a, b)).toEqual(2);
    });

    test('multiply 2 values a and b', () => {
        const a = 6;
        const b = 6;
        expect(cal.multiply(a, b)).toEqual(36);
    });  
}); 