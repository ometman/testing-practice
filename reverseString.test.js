const reverseString = require('./reverseString')

test ('reverse of string', () => {
    const string = 'ometman'
 expect(reverseString(string)).toMatch('namtemo')
})