function addMore(){
    var firstNum = 0;

    for(var i = 0; i < arguments.length; i++){
        firstNum += arguments[i];
    }
    return firstNum;

}

describe("addMore", () =>{
    it("Sun of multiple numbers ", () =>{
        expect(addMore(1, 2, 3, 4)).toBe(10);
    })
});

