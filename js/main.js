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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CombinedCongruentialResult\": () => (/* binding */ CombinedCongruentialResult),\n/* harmony export */   \"CongruentialInput\": () => (/* binding */ CongruentialInput),\n/* harmony export */   \"CongruentialResult\": () => (/* binding */ CongruentialResult),\n/* harmony export */   \"MixedCongruentialResult\": () => (/* binding */ MixedCongruentialResult),\n/* harmony export */   \"SquaredResult\": () => (/* binding */ SquaredResult)\n/* harmony export */ });\n/* harmony import */ var _aux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aux */ \"./src/aux.ts\");\n\nvar SquaredResult = /** @class */ (function () {\n    function SquaredResult(seed) {\n        var preResult = seed * seed;\n        var result = (0,_aux__WEBPACK_IMPORTED_MODULE_0__.getMiddleNumber)(preResult);\n        this.seed = seed;\n        this.generator = preResult;\n        this.numberResult = result;\n        this.numberRandom = result / 1000;\n    }\n    return SquaredResult;\n}());\n\nvar CongruentialInput = /** @class */ (function () {\n    function CongruentialInput(seed, a, c, m) {\n        if (c === void 0) { c = 0; }\n        this.seed = seed;\n        this.a = a;\n        this.c = c;\n        this.m = m;\n    }\n    return CongruentialInput;\n}());\n\nvar CongruentialResult = /** @class */ (function () {\n    function CongruentialResult(input) {\n        var preModResult = ((input.seed * input.a) + input.c);\n        var result = preModResult % input.m;\n        this.seed = input.seed;\n        this.generator = \"(\".concat(input.a, \"(\").concat(input.seed, \")\").concat(input.c !== 0 ? \" + \" + input.c : \"\", \") mod \").concat(input.m, \" = \").concat(preModResult, \" mod \").concat(input.m);\n        this.numberResult = result;\n        this.numberRandom = result / input.m;\n    }\n    return CongruentialResult;\n}());\n\nvar MixedCongruentialResult = /** @class */ (function () {\n    function MixedCongruentialResult() {\n    }\n    return MixedCongruentialResult;\n}());\n\nvar CombinedCongruentialResult = /** @class */ (function () {\n    function CombinedCongruentialResult(inputs, m1) {\n        this.seeds = inputs.map(function (input) { return input.numberResult; });\n        var res = 0;\n        var generatorString = \"\";\n        for (var i = 0; i < inputs.length; i++) {\n            generatorString += \"\".concat(inputs[i].numberResult, \" +\");\n            res += inputs[i].numberResult * Math.pow(-1, i);\n        }\n        this.numberResult = res % (m1 - 1);\n        this.numberRandom = this.numberResult / (m1 - 1);\n    }\n    return CombinedCongruentialResult;\n}());\n\n\n\n//# sourceURL=webpack:///./src/class.ts?");

/***/ }),

/***/ "./src/formulas.ts":
/*!*************************!*\
  !*** ./src/formulas.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"combinedCongruential\": () => (/* binding */ combinedCongruential),\n/* harmony export */   \"linealCongruential\": () => (/* binding */ linealCongruential),\n/* harmony export */   \"middleSquare\": () => (/* binding */ middleSquare),\n/* harmony export */   \"mixedCongruential\": () => (/* binding */ mixedCongruential),\n/* harmony export */   \"multiplicationCongruential\": () => (/* binding */ multiplicationCongruential)\n/* harmony export */ });\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ \"./src/class.ts\");\n/* harmony import */ var _aux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aux */ \"./src/aux.ts\");\n\n\nfunction middleSquare(x0, n) {\n    var results = [];\n    var seed = x0;\n    for (var i = 0; i < n; i++) {\n        var res = new _class__WEBPACK_IMPORTED_MODULE_0__.SquaredResult(seed);\n        seed = res.numberResult;\n        results.push(res);\n    }\n    return results;\n}\nfunction linealCongruential(input, n) {\n    var result = [];\n    for (var i = 0; i < n; i++) {\n        var res = new _class__WEBPACK_IMPORTED_MODULE_0__.CongruentialResult(input);\n        input.seed = res.numberResult;\n        result.push(res);\n    }\n    return result;\n}\nfunction mixedCongruential(input, n) {\n    var result = new _class__WEBPACK_IMPORTED_MODULE_0__.MixedCongruentialResult();\n    result.completesRule1 = (0,_aux__WEBPACK_IMPORTED_MODULE_1__.isPrimeRelative)(input.a, input.m);\n    result.completesRule2 = (0,_aux__WEBPACK_IMPORTED_MODULE_1__.isOnlyMDivisibleByPrime)(input.m, input.a);\n    result.completesRule3 = (0,_aux__WEBPACK_IMPORTED_MODULE_1__.isOnlyMDivisibleByFour)(input.m, input.a);\n    result.result = linealCongruential(input, n);\n    return result;\n}\nfunction multiplicationCongruential(input, n) {\n    var result = [];\n    input.c = 0;\n    for (var i = 0; i < n; i++) {\n        var res = new _class__WEBPACK_IMPORTED_MODULE_0__.CongruentialResult(input);\n        input.seed = res.numberResult;\n        result.push(res);\n    }\n    return result;\n}\nfunction combinedCongruential(inputs, n) {\n    var finalResult = [];\n    var congruentialResults = [];\n    for (var i = 0; i < inputs.length; i++) {\n        congruentialResults.push(multiplicationCongruential(inputs[i], n));\n    }\n    //Loop the second index and then change the first index\n    // Save in an array the results with the same second index\n    for (var i = 0; i < n; i++) {\n        var results = [];\n        for (var j = 0; j < congruentialResults.length; j++) {\n            results.push(congruentialResults[j][i]);\n        }\n        finalResult.push(new _class__WEBPACK_IMPORTED_MODULE_0__.CombinedCongruentialResult(results, inputs[0].m));\n    }\n    return finalResult;\n}\n\n\n//# sourceURL=webpack:///./src/formulas.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ \"./src/class.ts\");\n/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulas */ \"./src/formulas.ts\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.ts\");\n\n\n\nfunction congruentialMultiplicationHandler() {\n    var seed = parseInt(document.getElementById(\"seed\").value);\n    var a = parseInt(document.getElementById(\"a\").value);\n    var c = 0;\n    var m = parseInt(document.getElementById(\"m\").value);\n    var n = parseInt(document.getElementById(\"n\").value);\n    var input = new _class__WEBPACK_IMPORTED_MODULE_0__.CongruentialInput(seed, a, c, m);\n    var results = (0,_formulas__WEBPACK_IMPORTED_MODULE_1__.multiplicationCongruential)(input, n);\n    (0,_view__WEBPACK_IMPORTED_MODULE_2__.paintCongruentialResult)(results);\n}\n//Crear todos los handlers\n// Validar esos numeros aleatorios con pruebas de bondad\n// Hacer bonito el front\nwindow.congruentialMultiplicationHandler = congruentialMultiplicationHandler;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paintCongruentialResult\": () => (/* binding */ paintCongruentialResult),\n/* harmony export */   \"paintSquaredResult\": () => (/* binding */ paintSquaredResult)\n/* harmony export */ });\nfunction paintSquaredResult(results) {\n    results.forEach(function (res) {\n        var element = document.createElement(\"p\");\n        var elementText = document.createTextNode(res.numberResult.toString());\n        element.appendChild(elementText);\n        document.body.appendChild(element);\n    });\n}\nfunction paintCongruentialResult(results) {\n    document.getElementById(\"tableBody\").innerHTML = \"\";\n    var row = document.createElement(\"tr\");\n    var indexCol = document.createElement(\"td\");\n    var indexText = document.createTextNode(\"0\");\n    indexCol.appendChild(indexText);\n    row.appendChild(indexCol);\n    var seedCol = document.createElement(\"td\");\n    var seedText = document.createTextNode(results[0].seed.toString());\n    seedCol.appendChild(seedText);\n    row.appendChild(seedCol);\n    var generatorCol = document.createElement(\"td\");\n    var generatorText = document.createTextNode(\"-\");\n    generatorCol.appendChild(generatorText);\n    row.appendChild(generatorCol);\n    var resultCol = document.createElement(\"td\");\n    var resultText = document.createTextNode(\"-\");\n    resultCol.appendChild(resultText);\n    row.appendChild(resultCol);\n    var randomCol = document.createElement(\"td\");\n    var randomText = document.createTextNode(\"-\");\n    randomCol.appendChild(randomText);\n    row.appendChild(randomCol);\n    document.getElementById(\"tableBody\").appendChild(row);\n    results.forEach(function (res, index) {\n        var row = document.createElement(\"tr\");\n        index += 1;\n        var indexCol = document.createElement(\"td\");\n        var indexText = document.createTextNode(index.toString());\n        indexCol.appendChild(indexText);\n        row.appendChild(indexCol);\n        var seedCol = document.createElement(\"td\");\n        var seedText = document.createTextNode(res.seed.toString());\n        seedCol.appendChild(seedText);\n        row.appendChild(seedCol);\n        var generatorCol = document.createElement(\"td\");\n        var generatorText = document.createTextNode(res.generator);\n        generatorCol.appendChild(generatorText);\n        row.appendChild(generatorCol);\n        var resultCol = document.createElement(\"td\");\n        var resultText = document.createTextNode(res.numberResult.toString());\n        resultCol.appendChild(resultText);\n        row.appendChild(resultCol);\n        var randomCol = document.createElement(\"td\");\n        var randomText = document.createTextNode(res.numberRandom.toString());\n        randomCol.appendChild(randomText);\n        row.appendChild(randomCol);\n        document.getElementById(\"tableBody\").appendChild(row);\n    });\n}\n\n\n//# sourceURL=webpack:///./src/view.ts?");

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