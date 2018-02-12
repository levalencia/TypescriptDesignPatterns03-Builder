"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bottle_1 = require("./Bottle");
var ColdDrink = (function () {
    function ColdDrink() {
    }
    ColdDrink.prototype.name = function () {
        throw new Error("Method not implemented.");
    };
    ColdDrink.prototype.packing = function () {
        return new Bottle_1.default();
    };
    return ColdDrink;
}());
exports.default = ColdDrink;

//# sourceMappingURL=ColdDrink.js.map
