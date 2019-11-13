function add(x,y){
    var sum = x + y;
    console.log(sum);
}

function addMultiple(){
    var firstNum = 0;

    for(var i = 0; i < arguments.length; i++){
        firstNum += arguments[i];
    }
    console.log(firstNum);

}



function multiply(x,y){
    var product = x * y;
    console.log(product)
}

function multiplyMultiple(){
    var firstNum = 1;

    for(var i = 0; i < arguments.length; i++){
        firstNum *= arguments[i];

    }
    console.log(firstNum);
}



add(10,3);

addMultiple(1,2,3,4,5);

multiply(5,5);

multiplyMultiple(2,4,6,8,10);



