function multiplyMore(){
    var firstNum = 1;

    for(var i = 0; i < arguments.length; i++){
        firstNum *= arguments[i];

    }
    return firstNum;
}

describe("multiplyMore", () =>{
    it("finding the sum of 2 number ", () =>{
        expect(multiplyMore(2, 4, 6, 8, 10)).toBe(3840);
    })
});