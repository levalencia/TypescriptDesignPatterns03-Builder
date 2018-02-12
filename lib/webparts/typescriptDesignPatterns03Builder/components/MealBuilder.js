"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Meal_1 = require("./Meal");
var VegBurger_1 = require("./VegBurger");
var Coke_1 = require("./Coke");
var ChickenBurger_1 = require("./ChickenBurger");
var MealBuilder = (function () {
    function MealBuilder() {
    }
    MealBuilder.prototype.prepareVegMeal = function () {
        var meal = new Meal_1.default();
        meal.addItem(new VegBurger_1.default());
        meal.addItem(new Coke_1.default());
        return meal;
    };
    MealBuilder.prototype.prepareNonVegMeal = function () {
        var meal = new Meal_1.default();
        meal.addItem(new ChickenBurger_1.default());
        meal.addItem(new Coke_1.default());
        return meal;
    };
    return MealBuilder;
}());
exports.default = MealBuilder;

//# sourceMappingURL=MealBuilder.js.map
