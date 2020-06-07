//LEVEL 1//

//question 1
var name ="name";

//question 2
var person =
    {
        gender: "male",
        age: 30
    };

//question 3
var outOfStock = true;
if (outOfStock === true)
    console.log("Out of stock");
else
    console.log("In stock");

//question 4
var numbers = [1,2,3,4,5];
for( var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//question 5
for(var counter = 15; counter<=25; counter++){
    console.log(counter);
}

//question 6
for(var counter = 15; counter<=25; counter++){
    if(counter === 20)
    console.log(counter);
    else
    console.log();
}

//question 7
var people = [
    //first object
    {
        name: "Theo",
        age: 30,
        male: true
    },
    //second object
    {
        name: "Thea",
        age: 1,
        male: false
    }
];
for( var loop = 0; loop < people.length; loop++){
console.log(people[loop].age);
console.log(people[loop].male);
}

//question 8
function whatIDontLike(unlikes){
    console.log("I don´t like" + unlikes);
}
whatIDontLike(" sweets");

//question 9
function subtract(number1,number2){
    var difference = number1 - number2;
    console.log(difference);
}
subtract(10,5);

//question 10
var emptyArray = [];

function accepts(argument){
    emptyArray = argument;
    console.log(emptyArray);
}
accepts(1000);









