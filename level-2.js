

//LEVEL 2

//question 1
for(var counter = 15; counter<=25; counter++){
    var number = counter%2;
    if (number === 0)
    console.log(counter);
    else
    console.log();
}

//question 2
function function1(){
    var value = "I am a Function";
    console.log(value)
}
function1();

var innerFunction = function1;
console.log(innerFunction);

function outerFunction(value2){
    console.log(value2);
}

outerFunction(innerFunction);
