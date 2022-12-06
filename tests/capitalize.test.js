import {capitalize} from '../src/index.js';


//check if the first letter is capilized;
//case tha works
it("it worked", function () {
    let str = "hello";
    expect(capitalize(str)).toBe("Hello");
  });

//check if the string input is a string;  
it("input not a string", function () {
    let number = 1;
    let boolean = true;
  
    expect(capitalize(number)).toBe(undefined);
    expect(capitalize(boolean)).toBe(undefined);
  });
  
//if the first letter is a symbol or number or something that cannot be capitilzed
