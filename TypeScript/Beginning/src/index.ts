console.log("Hello world");
let sales = 123_456;

let tuple: [number,string] = [1,"Kishore"];

//Enums are in pascal Case
// enums list are automatically assign values starting from 0
// but if we explicitly assign the values it will change according to it.
enum Size {Small = 4,Medium,Large};
console.log(Size.Medium);