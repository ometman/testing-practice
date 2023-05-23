const capFirstChar = (string) => {
    
const firstChar = string.charAt(0).toUpperCase();
const remainChar = string.slice(1, string.length)
return firstChar.concat(remainChar);
};

module.exports = capFirstChar;
