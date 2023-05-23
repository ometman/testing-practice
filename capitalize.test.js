const capFirstChar = require('./capitalize');

test('First character capitalized', () => {
    const string = 'ometman';
    expect(capFirstChar(string)).toMatch('Ometman');
}) 