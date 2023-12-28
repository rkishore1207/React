"use strict";
console.log("Hello world");
let sales = 123456;
let tuple = [1, "Kishore"];
var Size;
(function (Size) {
    Size[Size["Small"] = 4] = "Small";
    Size[Size["Medium"] = 5] = "Medium";
    Size[Size["Large"] = 6] = "Large";
})(Size || (Size = {}));
;
console.log(Size.Medium);
function calculate(income = 12) {
    let x = 2;
    if ((income || 3) < 2)
        return 1;
    return x;
}
calculate();
let employee = {
    id: 2,
    name: "Kishore",
    retire: function (date) {
        console.log(date);
    }
};
console.log(employee.retire(new Date()));
//# sourceMappingURL=index.js.map