const stringLength = require('./stringLength');

const wrongResults = () => {
    throw new Error('number of characters is wrong');
}

test('the number of characters', () => {
    const str = 'ometmanometman'
    expect(stringLength(str)).toEqual(11);
     expect(stringLength(str)).toBeGreaterThan(0);
   expect(stringLength(str)).toBeLessThan(10);

  
})
