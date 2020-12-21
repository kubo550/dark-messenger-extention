/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __webpack_require__(/*! ./utils/functions */ "./src/utils/functions.ts");
const addStyle_1 = __webpack_require__(/*! ./utils/addStyle */ "./src/utils/addStyle.ts");
let options = {
    primary: "#0d1b2a",
    secondary: "#a11d33",
    textColor: "#17c3b2",
    angle: 14,
    power: 20,
    bgUrl: "https://i.pinimg.com/originals/7f/ea/17/7fea175e13ba4a4b29672d15b2497367.jpg",
};
const backgroundStyles = ["._1enh", "._5irm", "._3tkv"];
const colorStyles = ["._6-xo", "._58al", "._8slc", "._3q34", "._1ht6", "._2v6o", "._1mf", "._6ynn span"];
const bgPrimary = ["._53ij", "._8rdt", "._4rv3"];
const reStyles = () => {
    const background = functions_1.getBackground(options);
    const reverseBackground = functions_1.getBackground(options, false);
    const color = functions_1.getColor(options);
    const bgImg = functions_1.getBgImg(options);
    const transparent = { background: "transparent" };
    addStyle_1.addStyle("._673w", reverseBackground);
    addStyle_1.addStyle("._1wfr", bgImg);
    addStyle_1.addStyle("._4gd0", transparent);
    addStyle_1.addStyle("._3egs", transparent);
    addStyle_1.addStyle("._58al::placeholder", { color: "pink !important" });
    addStyle_1.addStyle(".timestamp", { color: "pink" });
    addStyle_1.addStyle("._67tu", { ...color, background: options.primary, border: "none" });
    addStyle_1.addStyle("._4_j5", { border: "none" });
    addStyle_1.addStyle("._1t2u", { border: "none" });
    backgroundStyles.forEach(b => addStyle_1.addStyle(b, background));
    colorStyles.forEach(c => addStyle_1.addStyle(c, color));
    bgPrimary.forEach(p => addStyle_1.addStyle(p, { background: options.primary }));
};
reStyles();


/***/ }),

/***/ "./src/utils/addStyle.ts":
/*!*******************************!*\
  !*** ./src/utils/addStyle.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addStyle = (style => {
    const sheet = document.head.appendChild(style).sheet;
    return (selector, css = {}) => {
        const propText = Object.entries(css).reduce((a, c) => `${a + c.join(":")};`, "");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
})(document.createElement("style"));


/***/ }),

/***/ "./src/utils/functions.ts":
/*!********************************!*\
  !*** ./src/utils/functions.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackground = (options, isNormalDir = true) => {
    const { primary, secondary } = options;
    return {
        "background-color": primary,
        "background-image": `linear-gradient(17deg, ${isNormalDir ? primary : secondary} 17%, ${isNormalDir ? secondary : primary} 84%)`,
    };
};
exports.getColor = (options) => {
    const { textColor } = options;
    return {
        color: textColor,
        "font-family": "Verdana, Geneva, Tahoma, sans-serif",
    };
};
exports.getBgImg = (options) => {
    const { bgUrl } = options;
    return {
        "background-image": `url(${bgUrl})`,
        "background-size": "100% 100%",
        "background-position": "center",
    };
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYWRkU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsNkZBQXFFO0FBQ3JFLDBGQUEyQztBQUkzQyxJQUFJLE9BQU8sR0FBb0I7SUFDM0IsT0FBTyxFQUFFLFNBQVM7SUFDbEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxLQUFLLEVBQUUsRUFBRTtJQUNULEtBQUssRUFBRSw4RUFBOEU7Q0FDeEY7QUFFRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxR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Ozs7O0FDTHZCLHFCQUFhLEdBQUcsQ0FBQyxPQUF3QixFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsRUFBRTtJQUMxRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU87SUFDdEMsT0FBTztRQUNILGtCQUFrQixFQUFFLE9BQU87UUFDM0Isa0JBQWtCLEVBQUUsMEJBQTBCLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLFNBQVMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sT0FBTztLQUNuSTtBQUNMLENBQUM7QUFHWSxnQkFBUSxHQUFHLENBQUMsT0FBd0IsRUFBRSxFQUFFO0lBQ2pELE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPO0lBQzdCLE9BQU87UUFDSCxLQUFLLEVBQUUsU0FBUztRQUNoQixhQUFhLEVBQUUscUNBQXFDO0tBQ3ZEO0FBQ0wsQ0FBQyxDQUFDO0FBR1csZ0JBQVEsR0FBRyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtJQUNqRCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTztJQUN6QixPQUFPO1FBQ0gsa0JBQWtCLEVBQUUsT0FBTyxLQUFLLEdBQUc7UUFDbkMsaUJBQWlCLEVBQUUsV0FBVztRQUM5QixxQkFBcUIsRUFBRSxRQUFRO0tBQ2xDO0FBQ0wsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBnZXRCYWNrZ3JvdW5kLCBnZXRDb2xvciwgZ2V0QmdJbWcgfSBmcm9tIFwiLi91dGlscy9mdW5jdGlvbnNcIlxyXG5pbXBvcnQgeyBhZGRTdHlsZSB9IGZyb20gXCIuL3V0aWxzL2FkZFN0eWxlXCJcclxuaW1wb3J0IHsgb3B0aW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4vcG9wdXAvUG9wdXBcIlxyXG5cclxuXHJcbmxldCBvcHRpb25zOiBvcHRpb25JbnRlcmZhY2UgPSB7XHJcbiAgICBwcmltYXJ5OiBcIiMwZDFiMmFcIixcclxuICAgIHNlY29uZGFyeTogXCIjYTExZDMzXCIsXHJcbiAgICB0ZXh0Q29sb3I6IFwiIzE3YzNiMlwiLFxyXG4gICAgYW5nbGU6IDE0LFxyXG4gICAgcG93ZXI6IDIwLFxyXG4gICAgYmdVcmw6IFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzdmL2VhLzE3LzdmZWExNzVlMTNiYTRhNGIyOTY3MmQxNWIyNDk3MzY3LmpwZ1wiLFxyXG59XHJcblxyXG5jb25zdCBiYWNrZ3JvdW5kU3R5bGVzID0gW1wiLl8xZW5oXCIsIFwiLl81aXJtXCIsIFwiLl8zdGt2XCJdXHJcbmNvbnN0IGNvbG9yU3R5bGVzID0gW1wiLl82LXhvXCIsIFwiLl81OGFsXCIsIFwiLl84c2xjXCIsIFwiLl8zcTM0XCIsIFwiLl8xaHQ2XCIsIFwiLl8ydjZvXCIsIFwiLl8xbWZcIiwgXCIuXzZ5bm4gc3BhblwiXVxyXG5jb25zdCBiZ1ByaW1hcnkgPSBbXCIuXzUzaWpcIiwgXCIuXzhyZHRcIiwgXCIuXzRydjNcIl1cclxuXHJcbmNvbnN0IHJlU3R5bGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGdldEJhY2tncm91bmQob3B0aW9ucylcclxuICAgIGNvbnN0IHJldmVyc2VCYWNrZ3JvdW5kID0gZ2V0QmFja2dyb3VuZChvcHRpb25zLCBmYWxzZSlcclxuICAgIGNvbnN0IGNvbG9yID0gZ2V0Q29sb3Iob3B0aW9ucylcclxuICAgIGNvbnN0IGJnSW1nID0gZ2V0QmdJbWcob3B0aW9ucylcclxuICAgIGNvbnN0IHRyYW5zcGFyZW50ID0geyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfVxyXG5cclxuICAgIGFkZFN0eWxlKFwiLl82NzN3XCIsIHJldmVyc2VCYWNrZ3JvdW5kKTtcclxuICAgIGFkZFN0eWxlKFwiLl8xd2ZyXCIsIGJnSW1nKTtcclxuICAgIGFkZFN0eWxlKFwiLl80Z2QwXCIsIHRyYW5zcGFyZW50KTtcclxuICAgIGFkZFN0eWxlKFwiLl8zZWdzXCIsIHRyYW5zcGFyZW50KTtcclxuICAgIGFkZFN0eWxlKFwiLl81OGFsOjpwbGFjZWhvbGRlclwiLCB7IGNvbG9yOiBcInBpbmsgIWltcG9ydGFudFwiIH0pO1xyXG4gICAgYWRkU3R5bGUoXCIudGltZXN0YW1wXCIsIHsgY29sb3I6IFwicGlua1wiIH0pO1xyXG4gICAgYWRkU3R5bGUoXCIuXzY3dHVcIiwgeyAuLi5jb2xvciwgYmFja2dyb3VuZDogb3B0aW9ucy5wcmltYXJ5LCBib3JkZXI6IFwibm9uZVwiIH0pO1xyXG4gICAgYWRkU3R5bGUoXCIuXzRfajVcIiwgeyBib3JkZXI6IFwibm9uZVwiIH0pO1xyXG4gICAgYWRkU3R5bGUoXCIuXzF0MnVcIiwgeyBib3JkZXI6IFwibm9uZVwiIH0pO1xyXG5cclxuICAgIGJhY2tncm91bmRTdHlsZXMuZm9yRWFjaChiID0+IGFkZFN0eWxlKGIsIGJhY2tncm91bmQpKVxyXG4gICAgY29sb3JTdHlsZXMuZm9yRWFjaChjID0+IGFkZFN0eWxlKGMsIGNvbG9yKSlcclxuICAgIGJnUHJpbWFyeS5mb3JFYWNoKHAgPT4gYWRkU3R5bGUocCwgeyBiYWNrZ3JvdW5kOiBvcHRpb25zLnByaW1hcnkgfSkpXHJcbn1cclxucmVTdHlsZXMoKTtcclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjb25zdCBhZGRTdHlsZSA9IChzdHlsZSA9PiB7XHJcbiAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpLnNoZWV0O1xyXG4gICAgcmV0dXJuIChzZWxlY3Rvcjogc3RyaW5nLCBjc3MgPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb3BUZXh0ID0gT2JqZWN0LmVudHJpZXMoY3NzKS5yZWR1Y2UoKGEsIGMpID0+IGAke2EgKyBjLmpvaW4oXCI6XCIpfTtgLCBcIlwiKTtcclxuXHJcbiAgICAgICAgKHNoZWV0IGFzIENTU1N0eWxlU2hlZXQpLmluc2VydFJ1bGUoc2VsZWN0b3IgKyBcIntcIiArIHByb3BUZXh0ICsgXCJ9XCIsIChzaGVldCBhcyBDU1NTdHlsZVNoZWV0KS5jc3NSdWxlcy5sZW5ndGgpXHJcbiAgICB9O1xyXG59KShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpO1xyXG4iLCJpbXBvcnQgeyBvcHRpb25JbnRlcmZhY2UgfSBmcm9tIFwiLi4vcG9wdXAvUG9wdXBcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJhY2tncm91bmQgPSAob3B0aW9uczogb3B0aW9uSW50ZXJmYWNlLCBpc05vcm1hbERpciA9IHRydWUpID0+IHtcclxuICAgIGNvbnN0IHsgcHJpbWFyeSwgc2Vjb25kYXJ5IH0gPSBvcHRpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBwcmltYXJ5LFxyXG4gICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiBgbGluZWFyLWdyYWRpZW50KDE3ZGVnLCAke2lzTm9ybWFsRGlyID8gcHJpbWFyeSA6IHNlY29uZGFyeX0gMTclLCAke2lzTm9ybWFsRGlyID8gc2Vjb25kYXJ5IDogcHJpbWFyeX0gODQlKWAsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29sb3IgPSAob3B0aW9uczogb3B0aW9uSW50ZXJmYWNlKSA9PiB7XHJcbiAgICBjb25zdCB7IHRleHRDb2xvciB9ID0gb3B0aW9uc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb2xvcjogdGV4dENvbG9yLFxyXG4gICAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCZ0ltZyA9IChvcHRpb25zOiBvcHRpb25JbnRlcmZhY2UpID0+IHtcclxuICAgIGNvbnN0IHsgYmdVcmwgfSA9IG9wdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IGB1cmwoJHtiZ1VybH0pYCxcclxuICAgICAgICBcImJhY2tncm91bmQtc2l6ZVwiOiBcIjEwMCUgMTAwJVwiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiOiBcImNlbnRlclwiLFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==