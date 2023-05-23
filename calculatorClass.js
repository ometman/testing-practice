class Calculator {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }

    add(a, b){
        return a+b;
    }

     subtract(a, b){
        return a-b;
    }

    divide(a, b){
        return a/b;
    }

    multiply(a, b){
        return a*b;
    }  
}

module.exports = Calculator;

// const results = new Calculator();

// console.log(results.add(5, 7));
// console.log(results.subtract(5, 7));
// console.log(results.multiply(5, 7));
// console.log(results.divide(5, 7));