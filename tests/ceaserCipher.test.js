import { caesarCypher } from "../src";

it("working correctly", function () {
    expect(caesarCypher("a", 5)).toBe("f");
    expect(caesarCypher("z", 1)).toBe("a");
  });
  
it("work for the capital letters too", function () {
    expect(caesarCypher("A", 0)).toBe("A");
    });
  
it(" work in reverse", function () {
    expect(caesarCypher("a", -1)).toBe("z");
  });
  
it("work with shift around alphabet", function () {
    expect(caesarCypher("a", 52)).toBe("a");});
  
it("not shift none letters", function () {
    expect(caesarCypher(".", 10)).toBe(".");
    expect(caesarCypher(" ", 10)).toBe(" ");
});