/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aux.ts":
/*!********************!*\
  !*** ./src/aux.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMiddleNumber\": () => (/* binding */ getMiddleNumber),\n/* harmony export */   \"isOnlyMDivisibleByFour\": () => (/* binding */ isOnlyMDivisibleByFour),\n/* harmony export */   \"isOnlyMDivisibleByPrime\": () => (/* binding */ isOnlyMDivisibleByPrime),\n/* harmony export */   \"isPrimeRelative\": () => (/* binding */ isPrimeRelative)\n/* harmony export */ });\nfunction getMiddleNumber(n) {\n    var numberString = n.toString();\n    var middle;\n    var middleNumber;\n    if ((numberString.length % 2) == 0) {\n        middle = (numberString.length - 4) / 2 + 1;\n        middleNumber = parseInt(numberString.substring(middle - 1, middle + 3));\n    }\n    else {\n        middle = Math.ceil((numberString.length - 4) / 2);\n        middleNumber = parseInt(numberString.substring(middle - 1, middle + 3));\n    }\n    return middleNumber;\n}\nfunction isPrimeRelative(a, b) {\n    var gcd = getGCD(a, b);\n    return gcd == 1;\n}\nfunction getGCD(a, b) {\n    if (b == 0) {\n        return a;\n    }\n    else {\n        return getGCD(b, a % b);\n    }\n}\nfunction isOnlyMDivisibleByPrime(m, a) {\n    var isMDivisible = false;\n    var primes = getPrimes(m);\n    primes.forEach(function (prime) {\n        if ((m % prime == 0) && ((a - 1) % prime == 0)) {\n            isMDivisible = true;\n        }\n    });\n    return isMDivisible;\n}\nfunction isOnlyMDivisibleByFour(m, a) {\n    var isMDivisible = false;\n    if ((m % 4 == 0) && ((a - 1) % 4 == 0)) {\n        isMDivisible = true;\n    }\n    ;\n    return isMDivisible;\n}\nfunction getPrimes(n) {\n    var primes = [];\n    for (var i = 2; i <= n; i++) {\n        if (isPrime(i)) {\n            primes.push(i);\n        }\n    }\n    return primes;\n}\nfunction isPrime(n) {\n    var isPrime = true;\n    for (var i = 2; i < n; i++) {\n        if (n % i == 0) {\n            isPrime = false;\n        }\n    }\n    return isPrime;\n}\n\n\n//# sourceURL=webpack:///./src/aux.ts?");

/***/ }),

/***/ "./src/class.ts":
/*!**********************!*\
  !*** ./src/class.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CongruentialResult\": () => (/* binding */ CongruentialResult),\n/* harmony export */   \"MixedCongruentialResult\": () => (/* binding */ MixedCongruentialResult),\n/* harmony export */   \"SquaredResult\": () => (/* binding */ SquaredResult)\n/* harmony export */ });\n/* harmony import */ var _aux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aux */ \"./src/aux.ts\");\n\nvar CongruentialResult = /** @class */ (function () {\n    function CongruentialResult(seed, a, c, m) {\n        var preModResult = ((a * seed) + c);\n        var result = preModResult % m;\n        this.seed = seed;\n        this.generator = \"(\".concat(a, \"(\").concat(seed, \")\").concat(c !== 0 ? \" + \" + c : \"\", \") mod \").concat(m, \" = \").concat(preModResult, \" mod \").concat(m);\n        this.numberResult = result;\n        this.numberRandom = result / m;\n    }\n    return CongruentialResult;\n}());\n\nvar MixedCongruentialResult = /** @class */ (function () {\n    function MixedCongruentialResult() {\n    }\n    return MixedCongruentialResult;\n}());\n\nvar SquaredResult = /** @class */ (function () {\n    function SquaredResult(seed) {\n        var preResult = seed * seed;\n        var result = (0,_aux__WEBPACK_IMPORTED_MODULE_0__.getMiddleNumber)(preResult);\n        this.seed = seed;\n        this.generator = preResult;\n        this.numberResult = result;\n        this.numberRandom = result / 1000;\n    }\n    return SquaredResult;\n}());\n\n\n\n//# sourceURL=webpack:///./src/class.ts?");

/***/ }),

/***/ "./src/formulas.ts":
/*!*************************!*\
  !*** ./src/formulas.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"linealCongruential\": () => (/* binding */ linealCongruential),\n/* harmony export */   \"middleSquare\": () => (/* binding */ middleSquare),\n/* harmony export */   \"mixedCongruential\": () => (/* binding */ mixedCongruential),\n/* harmony export */   \"multiplicationCongruential\": () => (/* binding */ multiplicationCongruential)\n/* harmony export */ });\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ \"./src/class.ts\");\n/* harmony import */ var _aux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aux */ \"./src/aux.ts\");\n\n\nfunction linealCongruential(x0, a, c, m, n) {\n    var result = [];\n    var seed = x0;\n    for (var i = 0; i < n; i++) {\n        var res = new _class__WEBPACK_IMPORTED_MODULE_0__.CongruentialResult(seed, a, c, m);\n        seed = res.numberResult;\n        result.push(res);\n    }\n    return result;\n}\nfunction mixedCongruential(x0, a, c, m, n) {\n    var result = new _class__WEBPACK_IMPORTED_MODULE_0__.MixedCongruentialResult();\n    var seed = x0;\n    result.completesRule1 = (0,_aux__WEBPACK_IMPORTED_MODULE_1__.isPrimeRelative)(a, m);\n    result.completesRule2 = (0,_aux__WEBPACK_IMPORTED_MODULE_1__.isOnlyMDivisibleByPrime)(m, a);\n    result.completesRule3 = (0,_aux__WEBPACK_IMPORTED_MODULE_1__.isOnlyMDivisibleByFour)(m, a);\n    result.result = linealCongruential(seed, a, c, m, n);\n    return result;\n}\nfunction middleSquare(x0, n) {\n    var results = [];\n    var seed = x0;\n    for (var i = 0; i < n; i++) {\n        var res = new _class__WEBPACK_IMPORTED_MODULE_0__.SquaredResult(seed);\n        seed = res.numberResult;\n        results.push(res);\n    }\n    return results;\n}\nfunction multiplicationCongruential(x0, a, m, n) {\n    var result = [];\n    var seed = x0;\n    for (var i = 0; i < n; i++) {\n        var res = new _class__WEBPACK_IMPORTED_MODULE_0__.CongruentialResult(seed, a, 0, m);\n        seed = res.numberResult;\n        result.push(res);\n    }\n    return result;\n}\n\n\n//# sourceURL=webpack:///./src/formulas.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulas */ \"./src/formulas.ts\");\n\nvar results = (0,_formulas__WEBPACK_IMPORTED_MODULE_0__.multiplicationCongruential)(117, 43, 1000, 25);\nconsole.log(results);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;