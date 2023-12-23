
function sayHello(){
    console.log("Hello world");
}

var variable = sayHello; //Assigning the reference of the function
variable(); //Invoking

//Passing function as a parameter that is callBack function
function greet(variable){
    console.log(variable()); //invoking the reference as function
}

greet(variable); 

//Higher order function
setTimeout(() => console.log("Hello"),2000);

//Functional Composition
//Regular way
let string = "  Kishore  ";
let output = "<div>" + string.trim() + "</div>";

//functional composition
const trim = (str) => str.trim();
const wrappingName = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => toLowerCase(str);

let result = wrappingName(toLowerCase(trim(string))); //functional composition