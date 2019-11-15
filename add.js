function add(x,y){
    var sum = x + y;
    return sum;
}

describe("add", () =>{
    it("Sum of 2 numbers ", () =>{
        expect(add(-1,-1)).toBe(-2);
    })
});