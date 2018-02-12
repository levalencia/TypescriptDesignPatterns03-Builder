define("850b2e71-7a2d-4ce8-9f7c-f694f307b22e_0.0.1", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var strings = ( false)
    ? require('resx-strings/en-us.json')
    : __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"resx-strings\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports.default = strings['_gIErrcTokcw+/VVwa+ReIA'];


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Wrapper_1 = __webpack_require__(18);
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



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SPCoreLibraryStrings_resx_1 = __webpack_require__(0);
var Text = (function () {
    function Text() {
    }
    Text.format = function (s) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        if (s === null) {
            throw new Error(SPCoreLibraryStrings_resx_1.default.isNullValidateError.replace('{0}', 's'));
        }
        if (s === undefined) {
            throw new Error(SPCoreLibraryStrings_resx_1.default.isUndefinedValidateError.replace('{0}', 's'));
        }
        return s.replace(Text.FORMAT_REGEX, function (match) {
            var matchId = parseInt(match.replace(Text.FORMAT_ARGS_REGEX, ''), 10);
            var matchValue = values[matchId];
            if (matchId >= values.length || matchId < 0) {
                matchValue = match;
            }
            if (matchValue === null) {
                matchValue = 'null';
            }
            else if (matchValue === undefined) {
                matchValue = 'undefined';
            }
            return matchValue;
        });
    };
    Text.FORMAT_REGEX = /\{\d+\}/g;
    Text.FORMAT_ARGS_REGEX = /[\{\}]/g;
    return Text;
}());
exports.default = Text;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(1);
var ReactDom = __webpack_require__(5);
var sp_core_library_1 = __webpack_require__(6);
var sp_webpart_base_1 = __webpack_require__(7);
var TypescriptDesignPatterns03Builder_1 = __webpack_require__(8);
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



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(1);
var TypescriptDesignPatterns03Builder_module_scss_1 = __webpack_require__(9);
var MealBuilder_1 = __webpack_require__(15);
var Version_1 = __webpack_require__(23);
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



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
__webpack_require__(10);
var styles = {
    typescriptDesignPatterns03Builder: 'typescriptDesignPatterns03Builder_d115d514',
    container: 'container_d115d514',
    row: 'row_d115d514',
    listItem: 'listItem_d115d514',
    button: 'button_d115d514',
    label: 'label_d115d514',
};
exports.default = styles;
/* tslint:enable */ 



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(11);
var loader = __webpack_require__(13);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".typescriptDesignPatterns03Builder_d115d514 .container_d115d514{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.typescriptDesignPatterns03Builder_d115d514 .row_d115d514{padding:20px}.typescriptDesignPatterns03Builder_d115d514 .listItem_d115d514{max-width:715px;margin:5px auto;box-shadow:0 0 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.typescriptDesignPatterns03Builder_d115d514 .button_d115d514{text-decoration:none;height:32px;min-width:80px;background-color:#0078d7;border-color:#0078d7;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.typescriptDesignPatterns03Builder_d115d514 .button_d115d514 .label_d115d514{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Meal_1 = __webpack_require__(16);
var VegBurger_1 = __webpack_require__(17);
var Coke_1 = __webpack_require__(19);
var ChickenBurger_1 = __webpack_require__(22);
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



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
var Burger_1 = __webpack_require__(2);
var VegBurger = (function (_super) {
    __extends(VegBurger, _super);
    function VegBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VegBurger.prototype.price = function () {
        return 11;
    };
    VegBurger.prototype.name = function () {
        return "Veg Burger";
    };
    return VegBurger;
}(Burger_1.default));
exports.default = VegBurger;



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Wrapper = (function () {
    function Wrapper() {
    }
    Wrapper.prototype.pack = function () {
        return "Wrapper";
    };
    return Wrapper;
}());
exports.default = Wrapper;



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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
var ColdDrink_1 = __webpack_require__(20);
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



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bottle_1 = __webpack_require__(21);
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



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bottle = (function () {
    function Bottle() {
    }
    Bottle.prototype.pack = function () {
        return "Bottle";
    };
    return Bottle;
}());
exports.default = Bottle;



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

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
var Burger_1 = __webpack_require__(2);
var ChickenBurger = (function (_super) {
    __extends(ChickenBurger, _super);
    function ChickenBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChickenBurger.prototype.price = function () {
        return 15;
    };
    ChickenBurger.prototype.name = function () {
        return "Chicken Burger";
    };
    return ChickenBurger;
}(Burger_1.default));
exports.default = ChickenBurger;



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Text_1 = __webpack_require__(3);
var Validate_1 = __webpack_require__(24);
var SPCoreLibraryStrings_resx_1 = __webpack_require__(0);
var Version = (function () {
    function Version(major, minor, patch, revision) {
        this._major = major;
        this._minor = minor;
        this._patch = patch;
        this._revision = revision;
    }
    Version.isValid = function (versionString) {
        return Version.tryParse(versionString) !== undefined;
    };
    Version.parse = function (versionString) {
        var version = Version.tryParse(versionString);
        if (version) {
            return version;
        }
        throw new Error(Text_1.default.format(SPCoreLibraryStrings_resx_1.default.invalidVersionStringError, versionString));
    };
    Version.tryParse = function (versionString) {
        if (versionString) {
            var versionRegex = /^([0-9]+)\.([0-9]+)(?:\.([0-9]+)(?:\.([0-9]+))?)?$/g;
            var regexExecRes = versionRegex.exec(versionString);
            if (regexExecRes) {
                return new Version(parseInt(regexExecRes[1], 10), parseInt(regexExecRes[2], 10), regexExecRes[3] !== undefined ? parseInt(regexExecRes[3], 10) : undefined, regexExecRes[4] !== undefined ? parseInt(regexExecRes[4], 10) : undefined);
            }
        }
        return undefined;
    };
    Version.compare = function (v1, v2) {
        Validate_1.default.isNotNullOrUndefined(v1, 'v1');
        Validate_1.default.isNotNullOrUndefined(v2, 'v2');
        if (v1.major !== v2.major) {
            return v1.major > v2.major ? 1 : -1;
        }
        if (v1.minor !== v2.minor) {
            return v1.minor > v2.minor ? 1 : -1;
        }
        if ((v1.patch || 0) !== (v2.patch || 0)) {
            return (v1.patch || 0) > (v2.patch || 0) ? 1 : -1;
        }
        if ((v1.revision || 0) !== (v2.revision || 0)) {
            return (v1.revision || 0) > (v2.revision || 0) ? 1 : -1;
        }
        return 0;
    };
    Object.defineProperty(Version.prototype, "major", {
        get: function () {
            return this._major;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () {
            return this._minor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "patch", {
        get: function () {
            return this._patch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "revision", {
        get: function () {
            return this._revision;
        },
        enumerable: true,
        configurable: true
    });
    Version.prototype.lessThan = function (compareWith) {
        return Version.compare(this, compareWith) < 0;
    };
    Version.prototype.greaterThan = function (compareWith) {
        return Version.compare(this, compareWith) > 0;
    };
    Version.prototype.equals = function (compareWith) {
        return Version.compare(this, compareWith) === 0;
    };
    Version.prototype.satisfies = function (compareWith) {
        Validate_1.default.isNotNullOrUndefined(compareWith, 'compareWith');
        return this.major === compareWith.major && !this.lessThan(compareWith);
    };
    Version.prototype.toString = function () {
        var str = this.major + "." + this.minor;
        if (this.patch !== undefined) {
            str += "." + this.patch;
            if (this.revision !== undefined) {
                str += "." + this.revision;
            }
        }
        return str;
    };
    return Version;
}());
exports.default = Version;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Text_1 = __webpack_require__(3);
var SPCoreLibraryStrings_resx_1 = __webpack_require__(0);
var Validate = (function () {
    function Validate() {
    }
    Validate.isTrue = function (value, variableName) {
        if (!value) {
            throw new Error(Text_1.default.format(SPCoreLibraryStrings_resx_1.default.isFalseValidateError, variableName));
        }
    };
    Validate.isNotNullOrUndefined = function (value, variableName) {
        if (value === null) {
            throw new Error(Text_1.default.format(SPCoreLibraryStrings_resx_1.default.isNullValidateError, variableName));
        }
        if (value === undefined) {
            throw new Error(Text_1.default.format(SPCoreLibraryStrings_resx_1.default.isUndefinedValidateError, variableName));
        }
    };
    Validate.isNonemptyString = function (value, variableName) {
        Validate.isNotNullOrUndefined(value, variableName);
        if (!value || value && value.length === 0) {
            throw new Error(Text_1.default.format(SPCoreLibraryStrings_resx_1.default.isEmptyStringValidateError, variableName));
        }
    };
    return Validate;
}());
exports.default = Validate;


/***/ })
/******/ ])});;
//# sourceMappingURL=typescript-design-patterns-03-builder-web-part.js.map