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
var React = require("react");
var TypescriptDesignPatterns03Builder_module_scss_1 = require("./TypescriptDesignPatterns03Builder.module.scss");
var MealBuilder_1 = require("./MealBuilder");
var Version_1 = require("@microsoft/sp-core-library/lib/Version");
var TypescriptDesignPatterns03Builder = (function (_super) {
    __extends(TypescriptDesignPatterns03Builder, _super);
    function TypescriptDesignPatterns03Builder(props, state) {
        var _this = _super.call(this, props) || this;
        _this.setMeal(props.selectedMeal);
        _this.mealBuilder = new MealBuilder_1.default();
        return _this;
    }
    TypescriptDesignPatterns03Builder.prototype.render = function () {
        return (React.createElement("div", { className: TypescriptDesignPatterns03Builder_module_scss_1.default.typescriptDesignPatterns03Builder },
            React.createElement("div", { className: TypescriptDesignPatterns03Builder_module_scss_1.default.container },
                React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + TypescriptDesignPatterns03Builder_module_scss_1.default.row },
                    React.createElement("div", { className: "ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1" },
                        React.createElement("span", { className: "ms-font-xl ms-fontColor-white" }, "Welcome to Burger Company!"),
                        React.createElement("p", { className: "ms-font-l ms-fontColor-white" }, "You have selected the following."),
                        React.createElement("span", { className: TypescriptDesignPatterns03Builder_module_scss_1.default.label }, this.meal.showItems()))))));
    };
    Object.defineProperty(TypescriptDesignPatterns03Builder.prototype, "dataVersion", {
        get: function () {
            return Version_1.default.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    TypescriptDesignPatterns03Builder.prototype.setMeal = function (selectedMeal) {
        if (selectedMeal === "VegMeal") {
            this.meal = this.mealBuilder.prepareVegMeal();
        }
        if (selectedMeal === "NonVegMeal") {
            this.meal = this.mealBuilder.prepareNonVegMeal();
        }
    };
    return TypescriptDesignPatterns03Builder;
}(React.Component));
exports.default = TypescriptDesignPatterns03Builder;

//# sourceMappingURL=TypescriptDesignPatterns03Builder.js.map
