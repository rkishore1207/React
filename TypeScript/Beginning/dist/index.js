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
//# sourceMappingURL=index.js.map