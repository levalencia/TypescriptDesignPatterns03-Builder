"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wrapper_1 = require("./Wrapper");
var Burger = (function () {
    function Burger() {
    }
    Burger.prototype.name = function () {
        throw new Error("Method not implemented.");
    };
    Burger.prototype.packing = function () {
        return new Wrapper_1.default();
    };
    return Burger;
}());
exports.default = Burger;

//# sourceMappingURL=Burger.js.map
