function multiply(x,y){
    var product = x * y;
    return product;
}

describe("multiply", () =>{
    it("Product of 2 numbers ", () =>{
        expect(multiply(2, 3)).toBe(6);
    })
});