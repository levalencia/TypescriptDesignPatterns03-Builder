"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Meal = (function () {
    function Meal() {
    }
    Meal.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Meal.prototype.getCost = function () {
        var cost = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            cost += item.price();
        }
        return cost;
    };
    Meal.prototype.showItems = function () {
        var returnStr;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            returnStr += "Item:" + item.name;
            returnStr += ", Packing:" + item.packing().pack();
            returnStr += ", Price: " + item.price();
        }
        return returnStr;
    };
    return Meal;
}());
exports.default = Meal;

//# sourceMappingURL=Meal.js.map
