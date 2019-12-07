let calculatorTest = require("../calculator");

let add = calculatorTest.add;
let multiply = calculatorTest.multiply;

describe("addition calculator", () => {
    it("adds two numbers together", () => {
        expect(add(1,2)).toBe(3);
    }) 

    it("add multiple numbers together", () =>{
        expect(add(1,2,3,4)).toBe(10);
    })
});

describe("multiplication calculator", () =>{
    it("multiplies two numbers", () =>{
        expect(multiply(2,2)).toBe(4);
    })

    it("multiplies multiple numbers", () =>{
        expect(multiply(1,2,3,4)).toBe(24);
    })
});