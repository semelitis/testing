import reverseString from "../src/index.js";

let reverseString=new reverseString();

it("corect reverse string", function () {
  let string = "hello";
  expect(reverseString.reverse(string)).toBe("olleh");
});

it(" it isnt a stirng", function () {
  let number = 1;
  let boolean = true;
  expect(reverseString.reverse(number)).toBe(undefined);
  expect(reverseString.reverse(boolean)).toBe(undefined);

});

it("empty string", function () {
  expect(reverseString("")).toBe("");
});