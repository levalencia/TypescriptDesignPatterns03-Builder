"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ColdDrink_1 = require("./ColdDrink");
var Coke = (function (_super) {
    __extends(Coke, _super);
    function Coke() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coke.prototype.price = function () {
        return 2.5;
    };
    Coke.prototype.name = function () {
        return "Coca Cola";
    };
    return Coke;
}(ColdDrink_1.default));
exports.default = Coke;

//# sourceMappingURL=Coke.js.map
