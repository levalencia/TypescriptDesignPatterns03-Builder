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
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var TypescriptDesignPatterns03Builder_1 = require("./components/TypescriptDesignPatterns03Builder");
var TypescriptDesignPatterns03BuilderWebPart = (function (_super) {
    __extends(TypescriptDesignPatterns03BuilderWebPart, _super);
    function TypescriptDesignPatterns03BuilderWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypescriptDesignPatterns03BuilderWebPart.prototype.render = function () {
        var element = React.createElement(TypescriptDesignPatterns03Builder_1.default, {
            description: this.properties.description,
            selectedMeal: this.properties.selectedMeal
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(TypescriptDesignPatterns03BuilderWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    TypescriptDesignPatterns03BuilderWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Header"
                    },
                    groups: [
                        {
                            groupName: "Group",
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneDropdown("meal", {
                                    label: "Select meal",
                                    options: [
                                        { key: "Veg", text: "Veg" },
                                        { key: "Nonveg", text: "Nonveg" }
                                    ],
                                    selectedKey: "Nonveg"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return TypescriptDesignPatterns03BuilderWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = TypescriptDesignPatterns03BuilderWebPart;

//# sourceMappingURL=TypescriptDesignPatterns03BuilderWebPart.js.map
