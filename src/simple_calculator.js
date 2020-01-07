function add(){
    var sum = 0;

    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    
    return sum;
}


function multiply(){
    var product = 1;

    var j = 0;
    while (j < arguments.length){
        product *= arguments[j]
        j++;
    }

    return product;
}

module.exports = {
    add,
    multiply
}

