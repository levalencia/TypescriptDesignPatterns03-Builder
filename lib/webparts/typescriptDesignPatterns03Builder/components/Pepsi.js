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
var Pepsi = (function (_super) {
    __extends(Pepsi, _super);
    function Pepsi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pepsi.prototype.price = function () {
        return 1.5;
    };
    Pepsi.prototype.name = function () {
        return "Pepsi Cola";
    };
    return Pepsi;
}(ColdDrink_1.default));
exports.default = Pepsi;

//# sourceMappingURL=Pepsi.js.map
