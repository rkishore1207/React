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