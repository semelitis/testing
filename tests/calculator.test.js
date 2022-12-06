import calculator from '../src/index.js'

let calculator=new calculator();

//add
it("add should be correct and for negatives", function () {
    let number1=1;
    let number2=2;
    expect(calc.add(number1, number2)).toBe(3);
    let number3=-1;
    let number4=-2;
    expect(calculator.add(number3,number4)).toBe(-3);
});

//subtract
it("subtract should be correct and for negatives", function () {
    let number1=10;
    let number2=5;
    expect(calculator.subtract(10, 5)).toBe(5);
    expect(calculator.subtract(number2,number1)).toBe(-5);
});

it("sub should work with negative numbers", function () {
    let number1=5;
    let number2=-10;
    expect(calculator.subtract(number1, number2)).toBe(15);
});


//divide
it("division should be correct", function () {
    let number1=4;
    let number2=2;
    expect(calculator.divide(number1, number2)).toBe(2);
    let number3=10;
    let number4=-2;
    expect(calculator.divide(number3, number4)).toBe(-5);
});

it("division should return undefined if either value is zero", function () {
    let number1=3
    let zero=0;
    expect(calculator.divide(zero, number1)).toBe(undefined);
    expect(calculator.divide(number1, zero)).toBe(undefined);
});


//multiply

it("multoply  should be correct and wit negatives", function () {
    let number1=2;
    let number2=4;
    let number3=-5;
    let number4=-10;
    expect(calculator.multiply(number1, number2)).toBe(8);
    expect(calculator.multiply(number3, number4)).toBe(50);
    expect(calculator.multiply(number2,number4)).toBe(-40);
});