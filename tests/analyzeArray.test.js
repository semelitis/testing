import {analyzeArray} from 'src/index.js';

it("tests the average value of the obj", function () {
    let myArray=[1, 2, 3];
    expect(analyzeArray(myArray).average).toBe(2);
  });
  
it("tests min value of the obj", function () {
    let myArray=[1, 2, 3];
    let myArray2=[-5, -2, -10];
    expect(analyzeArray(myArray).minimum).toBe(1);
    expect(analyzeArray(myArray2).minimum).toBe(-10);
  });
  
it("test max value of the object ", function () {
    let myArray=[3, 5, 1];
    let myArray2=[2, 5, 10];
    expect(analyzeArray(myArray).maximum).toBe(5);
    expect(analyzeArray(myArray2).maximum).toBe(10);
  });
  
it("tests length of the obj", function () {
    let myArray=[1, 2, 3];
    expect(analyzeArray(myArray).length).toBe(3);
  });