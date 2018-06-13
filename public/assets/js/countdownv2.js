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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/countdownv2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/countdownv2.js":
/*!**********************************!*\
  !*** ./assets/js/countdownv2.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var target_date = new Date("2018-06-16"); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () {
    getCountdown();
}, 1000);

function getCountdown() {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // format countdown string + set tag value
    countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODNlZTBjYjY2YzQzMDg2ZjQxODEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvdW50ZG93bnYyLmpzIl0sIm5hbWVzIjpbInRhcmdldF9kYXRlIiwiRGF0ZSIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY291bnRkb3duIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvdW50ZG93biIsInNldEludGVydmFsIiwiY3VycmVudF9kYXRlIiwiZ2V0VGltZSIsInNlY29uZHNfbGVmdCIsInBhZCIsInBhcnNlSW50IiwiaW5uZXJIVE1MIiwibiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLElBQUlBLGNBQWMsSUFBSUMsSUFBSixDQUFTLFlBQVQsQ0FBbEIsQyxDQUEwQztBQUMxQyxJQUFJQyxJQUFKLEVBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxPQUExQixDLENBQW1DOztBQUVuQyxJQUFJQyxZQUFZQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWhCLEMsQ0FBa0Q7O0FBRWxEQzs7QUFFQUMsWUFBWSxZQUFZO0FBQUVEO0FBQWlCLENBQTNDLEVBQTZDLElBQTdDOztBQUVBLFNBQVNBLFlBQVQsR0FBdUI7O0FBRW5CO0FBQ0EsUUFBSUUsZUFBZSxJQUFJVixJQUFKLEdBQVdXLE9BQVgsRUFBbkI7QUFDQSxRQUFJQyxlQUFlLENBQUNiLGNBQWNXLFlBQWYsSUFBK0IsSUFBbEQ7O0FBRUFULFdBQU9ZLElBQUtDLFNBQVNGLGVBQWUsS0FBeEIsQ0FBTCxDQUFQO0FBQ0FBLG1CQUFlQSxlQUFlLEtBQTlCOztBQUVBVixZQUFRVyxJQUFLQyxTQUFTRixlQUFlLElBQXhCLENBQUwsQ0FBUjtBQUNBQSxtQkFBZUEsZUFBZSxJQUE5Qjs7QUFFQVQsY0FBVVUsSUFBS0MsU0FBU0YsZUFBZSxFQUF4QixDQUFMLENBQVY7QUFDQVIsY0FBVVMsSUFBS0MsU0FBVUYsZUFBZSxFQUF6QixDQUFMLENBQVY7O0FBRUE7QUFDQVAsY0FBVVUsU0FBVixHQUFzQixXQUFXZCxJQUFYLEdBQWtCLGVBQWxCLEdBQW9DQyxLQUFwQyxHQUE0QyxlQUE1QyxHQUE4REMsT0FBOUQsR0FBd0UsZUFBeEUsR0FBMEZDLE9BQTFGLEdBQW9HLFNBQTFIO0FBQ0g7O0FBRUQsU0FBU1MsR0FBVCxDQUFhRyxDQUFiLEVBQWdCO0FBQ1osV0FBTyxDQUFDQSxJQUFJLEVBQUosR0FBUyxHQUFULEdBQWUsRUFBaEIsSUFBc0JBLENBQTdCO0FBQ0gsQyIsImZpbGUiOiJqcy9jb3VudGRvd252Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9jb3VudGRvd252Mi5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4M2VlMGNiNjZjNDMwODZmNDE4MSIsInZhciB0YXJnZXRfZGF0ZSA9IG5ldyBEYXRlKFwiMjAxOC0wNi0xNlwiKTsgLy8gc2V0IHRoZSBjb3VudGRvd24gZGF0ZVxudmFyIGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzOyAvLyB2YXJpYWJsZXMgZm9yIHRpbWUgdW5pdHNcblxudmFyIGNvdW50ZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlsZXNcIik7IC8vIGdldCB0YWcgZWxlbWVudFxuXG5nZXRDb3VudGRvd24oKTtcblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyBnZXRDb3VudGRvd24oKTsgfSwgMTAwMCk7XG5cbmZ1bmN0aW9uIGdldENvdW50ZG93bigpe1xuXG4gICAgLy8gZmluZCB0aGUgYW1vdW50IG9mIFwic2Vjb25kc1wiIGJldHdlZW4gbm93IGFuZCB0YXJnZXRcbiAgICB2YXIgY3VycmVudF9kYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHNlY29uZHNfbGVmdCA9ICh0YXJnZXRfZGF0ZSAtIGN1cnJlbnRfZGF0ZSkgLyAxMDAwO1xuXG4gICAgZGF5cyA9IHBhZCggcGFyc2VJbnQoc2Vjb25kc19sZWZ0IC8gODY0MDApICk7XG4gICAgc2Vjb25kc19sZWZ0ID0gc2Vjb25kc19sZWZ0ICUgODY0MDA7XG5cbiAgICBob3VycyA9IHBhZCggcGFyc2VJbnQoc2Vjb25kc19sZWZ0IC8gMzYwMCkgKTtcbiAgICBzZWNvbmRzX2xlZnQgPSBzZWNvbmRzX2xlZnQgJSAzNjAwO1xuXG4gICAgbWludXRlcyA9IHBhZCggcGFyc2VJbnQoc2Vjb25kc19sZWZ0IC8gNjApICk7XG4gICAgc2Vjb25kcyA9IHBhZCggcGFyc2VJbnQoIHNlY29uZHNfbGVmdCAlIDYwICkgKTtcblxuICAgIC8vIGZvcm1hdCBjb3VudGRvd24gc3RyaW5nICsgc2V0IHRhZyB2YWx1ZVxuICAgIGNvdW50ZG93bi5pbm5lckhUTUwgPSBcIjxzcGFuPlwiICsgZGF5cyArIFwiPC9zcGFuPjxzcGFuPlwiICsgaG91cnMgKyBcIjwvc3Bhbj48c3Bhbj5cIiArIG1pbnV0ZXMgKyBcIjwvc3Bhbj48c3Bhbj5cIiArIHNlY29uZHMgKyBcIjwvc3Bhbj5cIjtcbn1cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgICByZXR1cm4gKG4gPCAxMCA/ICcwJyA6ICcnKSArIG47XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb3VudGRvd252Mi5qcyJdLCJzb3VyY2VSb290IjoiIn0=