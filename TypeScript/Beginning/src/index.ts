import * as Bikes from "./DefaultModule"; //wildcard import
import Bike from "./DefaultModule";
import { Circle } from "./Shapes";

console.log("Hello world");
let sales = 123_456;

let tuple: [number,string] = [1,"Kishore"];

//Enums are in pascal Case
// enums list are automatically assign values starting from 0
// but if we explicitly assign the values it will change according to it.
enum Size {Small = 4,Medium,Large};
console.log(Size.Medium);

//Functions
function calculate(income = 12):number{
    let x:number = 2;
    if((income || 3) < 2) //if income is undefined then 3 will occupy
        return 1;
    return x;
}

calculate(); //any arguments would pass here will override there or else default value will assign

//Objects
let employee : {
    id: number,
    name: string,//or else we can give name as optional by question mark then we need not to initialize
    retire:(date: Date) => void
} = {
    id: 2,
    name: "Kishore",
    retire: function(date: Date){
        console.log(date);
    }
}

console.log(employee.retire(new Date()));

//Exports and Imports

console.log(new Circle(2));
let bike = new Bike();
let engines = Bikes.engine;
let color = new Bikes.color();
console.log(engines.BS4);