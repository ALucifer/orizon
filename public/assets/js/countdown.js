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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/countdown.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/countdown.js":
/*!********************************!*\
  !*** ./assets/js/countdown.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function Countdown(opt) {
    "use strict";

    var options = {
        cont: null,
        endDate: {
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        },
        endCallback: null,
        outputFormat: "year|week|day|hour|minute|second",
        outputTranslation: {
            year: "Roky",
            week: "Týdny",
            day: "Dny",
            hour: "Hodin",
            minute: "Minut",
            second: "Vteřin"
        }
    },
        lastTick = null,
        intervalsBySize = ["year", "week", "day", "hour", "minute", "second"],
        TIMESTAMP_SECOND = 1000,
        TIMESTAMP_MINUTE = 60 * TIMESTAMP_SECOND,
        TIMESTAMP_HOUR = 60 * TIMESTAMP_MINUTE,
        TIMESTAMP_DAY = 24 * TIMESTAMP_HOUR,
        TIMESTAMP_WEEK = 7 * TIMESTAMP_DAY,
        TIMESTAMP_YEAR = 365 * TIMESTAMP_DAY,
        elementClassPrefix = "countDown_",
        interval = null,
        digitConts = {};

    loadOptions(options, opt);

    /**
     * @param date
     * @returns {Date}
     */
    function getDate(date) {
        if ((typeof date === "undefined" ? "undefined" : _typeof(date)) === "object") {
            if (date instanceof Date) {
                return date;
            } else {
                var expectedValues = {
                    day: 0,
                    month: 0,
                    year: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                };

                for (var i in expectedValues) {
                    if (expectedValues.hasOwnProperty(i) && date.hasOwnProperty(i)) {
                        expectedValues[i] = date[i];
                    }
                }

                return new Date(expectedValues.year, expectedValues.month > 0 ? expectedValues.month - 1 : expectedValues.month, expectedValues.day, expectedValues.hour, expectedValues.minute, expectedValues.second);
            }
        } else if (typeof date === "number" || typeof date === "string") {
            return new Date(date);
        } else {
            return new Date();
        }
    }

    /**
     * @param {Date} dateObj
     * @return {object}
     */
    function prepareTimeByOutputFormat(dateObj) {
        var usedIntervals = undefined,
            output = {},
            timeDiff = undefined;

        usedIntervals = intervalsBySize.filter(function (item) {
            return options.outputFormat.split("|").indexOf(item) !== -1;
        });

        timeDiff = dateObj.getTime() - Date.now();

        usedIntervals.forEach(function (item) {
            var value = undefined;
            if (timeDiff > 0) {
                switch (item) {
                    case "year":
                        value = Math.trunc(timeDiff / TIMESTAMP_YEAR);
                        timeDiff -= value * TIMESTAMP_YEAR;
                        break;
                    case "week":
                        value = Math.trunc(timeDiff / TIMESTAMP_WEEK);
                        timeDiff -= value * TIMESTAMP_WEEK;
                        break;
                    case "day":
                        value = Math.trunc(timeDiff / TIMESTAMP_DAY);
                        timeDiff -= value * TIMESTAMP_DAY;
                        break;
                    case "hour":
                        value = Math.trunc(timeDiff / TIMESTAMP_HOUR);
                        timeDiff -= value * TIMESTAMP_HOUR;
                        break;
                    case "minute":
                        value = Math.trunc(timeDiff / TIMESTAMP_MINUTE);
                        timeDiff -= value * TIMESTAMP_MINUTE;
                        break;
                    case "second":
                        value = Math.trunc(timeDiff / TIMESTAMP_SECOND);
                        timeDiff -= value * TIMESTAMP_SECOND;
                        break;
                }
            } else {
                value = "00";
            }
            output[item] = (("" + value).length < 2 ? "0" + value : "" + value).split("");
        });

        return output;
    }

    function fixCompatibility() {
        Math.trunc = Math.trunc || function (x) {
            if (isNaN(x)) {
                return NaN;
            }
            if (x > 0) {
                return Math.floor(x);
            }
            return Math.ceil(x);
        };
    }

    function writeData(data) {
        var code = '<div class="' + elementClassPrefix + 'cont">',
            intervalName = undefined;

        for (intervalName in data) {
            if (data.hasOwnProperty(intervalName)) {
                var element = '<div class="' + elementClassPrefix + '_interval_basic_cont">\n                                       <div class="' + getIntervalContCommonClassName() + " " + getIntervalContClassName(intervalName) + '">',
                    intervalDescription = '<div class="' + elementClassPrefix + 'interval_basic_cont_description">\n                                                   ' + options.outputTranslation[intervalName] + "\n                                               </div>";
                data[intervalName].forEach(function (digit, index) {
                    element += '<div class="' + getDigitContCommonClassName() + " " + getDigitContClassName(index) + '">\n                                        ' + getDigitElementString(digit, 0) + "\n                                    </div>";
                });

                code += element + "</div>" + intervalDescription + "</div>";
            }
        }

        options.cont.innerHTML = code + "</div>";
        lastTick = data;
    }

    function getDigitElementString(newDigit, lastDigit) {
        return '<div class="' + elementClassPrefix + 'digit_last_placeholder">\n                        <div class="' + elementClassPrefix + 'digit_last_placeholder_inner">\n                            ' + lastDigit + '\n                        </div>\n                    </div>\n                    <div class="' + elementClassPrefix + 'digit_new_placeholder">' + newDigit + '</div>\n                    <div class="' + elementClassPrefix + 'digit_last_rotate">' + lastDigit + '</div>\n                    <div class="' + elementClassPrefix + 'digit_new_rotate">\n                        <div class="' + elementClassPrefix + 'digit_new_rotated">\n                            <div class="' + elementClassPrefix + 'digit_new_rotated_inner">\n                                ' + newDigit + "\n                            </div>\n                        </div>\n                    </div>";
    }

    function updateView(data) {
        var _loop = function _loop(intervalName) {
            if (data.hasOwnProperty(intervalName)) {
                data[intervalName].forEach(function (digit, index) {
                    if (lastTick !== null && lastTick[intervalName][index] !== data[intervalName][index]) {
                        getDigitCont(intervalName, index).innerHTML = getDigitElementString(data[intervalName][index], lastTick[intervalName][index]);
                    }
                });
            }
        };

        for (var intervalName in data) {
            _loop(intervalName);
        }

        lastTick = data;
    }

    function getDigitCont(intervalName, index) {
        if (!digitConts[intervalName + "_" + index]) {
            digitConts[intervalName + "_" + index] = document.querySelector("." + getIntervalContClassName(intervalName) + " ." + getDigitContClassName(index));
        }

        return digitConts[intervalName + "_" + index];
    }

    function getIntervalContClassName(intervalName) {
        return elementClassPrefix + "interval_cont_" + intervalName;
    }

    function getIntervalContCommonClassName() {
        return elementClassPrefix + "interval_cont";
    }

    function getDigitContClassName(index) {
        return elementClassPrefix + "digit_cont_" + index;
    }

    function getDigitContCommonClassName() {
        return elementClassPrefix + "digit_cont";
    }

    function loadOptions(_options, _opt) {
        for (var i in _options) {
            if (_options.hasOwnProperty(i) && _opt.hasOwnProperty(i)) {
                if (_options[i] !== null && _typeof(_options[i]) === "object" && _typeof(_opt[i]) === "object") {
                    loadOptions(_options[i], _opt[i]);
                } else {
                    _options[i] = _opt[i];
                }
            }
        }
    }

    function start() {
        var endDate = undefined,
            endDateData = undefined;

        fixCompatibility();

        endDate = getDate(options.endDate);

        endDateData = prepareTimeByOutputFormat(endDate);

        writeData(endDateData);

        lastTick = endDateData;

        if (endDate.getTime() <= Date.now()) {
            if (typeof options.endCallback === "function") {
                options.endCallback();
            }
        } else {
            interval = setInterval(function () {
                updateView(prepareTimeByOutputFormat(endDate));
            }, TIMESTAMP_SECOND);
        }
    }

    function stop() {
        if (interval !== null) {
            clearInterval(interval);
        }
    }

    return {
        start: start,
        stop: stop
    };
}

var cd = new Countdown({
    cont: document.querySelector(".container"),
    endDate: {
        day: 14,
        month: 6,
        year: 2018,
        hour: 0,
        minute: 0,
        second: 0
    },
    outputTranslation: {
        year: "Years",
        week: "Weeks",
        day: "Days",
        hour: "Hours",
        minute: "Minutes",
        second: "Seconds"
    },
    endCallback: null,
    outputFormat: "week|day|hour|minute|second"
});
cd.start();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTI0Y2NiNWQ2OWQ0YzkxM2VjM2YiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvdW50ZG93bi5qcyJdLCJuYW1lcyI6WyJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIkNvdW50ZG93biIsIm9wdCIsIm9wdGlvbnMiLCJjb250IiwiZW5kRGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJlbmRDYWxsYmFjayIsIm91dHB1dEZvcm1hdCIsIm91dHB1dFRyYW5zbGF0aW9uIiwid2VlayIsImxhc3RUaWNrIiwiaW50ZXJ2YWxzQnlTaXplIiwiVElNRVNUQU1QX1NFQ09ORCIsIlRJTUVTVEFNUF9NSU5VVEUiLCJUSU1FU1RBTVBfSE9VUiIsIlRJTUVTVEFNUF9EQVkiLCJUSU1FU1RBTVBfV0VFSyIsIlRJTUVTVEFNUF9ZRUFSIiwiZWxlbWVudENsYXNzUHJlZml4IiwiaW50ZXJ2YWwiLCJkaWdpdENvbnRzIiwibG9hZE9wdGlvbnMiLCJnZXREYXRlIiwiZGF0ZSIsIkRhdGUiLCJleHBlY3RlZFZhbHVlcyIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsInByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQiLCJkYXRlT2JqIiwidXNlZEludGVydmFscyIsInVuZGVmaW5lZCIsIm91dHB1dCIsInRpbWVEaWZmIiwiZmlsdGVyIiwiaXRlbSIsInNwbGl0IiwiaW5kZXhPZiIsImdldFRpbWUiLCJub3ciLCJmb3JFYWNoIiwidmFsdWUiLCJNYXRoIiwidHJ1bmMiLCJsZW5ndGgiLCJmaXhDb21wYXRpYmlsaXR5IiwieCIsImlzTmFOIiwiTmFOIiwiZmxvb3IiLCJjZWlsIiwid3JpdGVEYXRhIiwiZGF0YSIsImNvZGUiLCJpbnRlcnZhbE5hbWUiLCJlbGVtZW50IiwiZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lIiwiaW50ZXJ2YWxEZXNjcmlwdGlvbiIsImRpZ2l0IiwiaW5kZXgiLCJnZXREaWdpdENvbnRDb21tb25DbGFzc05hbWUiLCJnZXREaWdpdENvbnRDbGFzc05hbWUiLCJnZXREaWdpdEVsZW1lbnRTdHJpbmciLCJpbm5lckhUTUwiLCJuZXdEaWdpdCIsImxhc3REaWdpdCIsInVwZGF0ZVZpZXciLCJfbG9vcCIsImdldERpZ2l0Q29udCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9vcHRpb25zIiwiX29wdCIsInN0YXJ0IiwiZW5kRGF0ZURhdGEiLCJzZXRJbnRlcnZhbCIsInN0b3AiLCJjbGVhckludGVydmFsIiwiY2QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFFQSxJQUFJQSxVQUNBLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsU0FBT0EsT0FBT0MsUUFBZCxNQUEyQixRQUEzRCxHQUNNLFVBQVNDLEdBQVQsRUFBYztBQUNaLGtCQUFjQSxHQUFkLDBDQUFjQSxHQUFkO0FBQ0gsQ0FITCxHQUlNLFVBQVNBLEdBQVQsRUFBYztBQUNaLFdBQU9BLE9BQU8sT0FBT0YsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0UsSUFBSUMsV0FBSixLQUFvQkgsTUFBM0QsR0FDRCxRQURDLFVBRU1F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dUI7QUFDbkIyRCwwQkFBYzNELFFBQWQ7QUFDSDtBQUNKOztBQUVELFdBQU87QUFDSHVELGVBQU9BLEtBREo7QUFFSEcsY0FBTUE7QUFGSCxLQUFQO0FBSUg7O0FBRUQsSUFBSUUsS0FBSyxJQUFJcEYsU0FBSixDQUFjO0FBQ25CRyxVQUFNd0UsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQURhO0FBRW5CeEUsYUFBVTtBQUNORyxhQUFLLEVBREM7QUFFTkQsZUFBTyxDQUZEO0FBR05ELGNBQU0sSUFIQTtBQUlORyxjQUFNLENBSkE7QUFLTkMsZ0JBQVEsQ0FMRjtBQU1OQyxnQkFBUTtBQU5GLEtBRlM7QUFVbkJHLHVCQUFtQjtBQUNmUixjQUFNLE9BRFM7QUFFZlMsY0FBTSxPQUZTO0FBR2ZQLGFBQUssTUFIVTtBQUlmQyxjQUFNLE9BSlM7QUFLZkMsZ0JBQVEsU0FMTztBQU1mQyxnQkFBUTtBQU5PLEtBVkE7QUFrQm5CQyxpQkFBYSxJQWxCTTtBQW1CbkJDLGtCQUFjO0FBbkJLLENBQWQsQ0FBVDtBQXFCQXdFLEdBQUdMLEtBQUgsRyIsImZpbGUiOiJqcy9jb3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvY291bnRkb3duLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEyNGNjYjVkNjlkNGM5MTNlYzNmIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmxldCBfdHlwZW9mID1cbiAgICB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIlxuICAgICAgICA/IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sXG4gICAgICAgICAgICAgICAgPyBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgOiB0eXBlb2Ygb2JqO1xuICAgICAgICB9O1xuXG5mdW5jdGlvbiBDb3VudGRvd24ob3B0KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnQ6IG51bGwsXG4gICAgICAgICAgICBlbmREYXRlOiB7XG4gICAgICAgICAgICAgICAgeWVhcjogMCxcbiAgICAgICAgICAgICAgICBtb250aDogMCxcbiAgICAgICAgICAgICAgICBkYXk6IDAsXG4gICAgICAgICAgICAgICAgaG91cjogMCxcbiAgICAgICAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXQ6IFwieWVhcnx3ZWVrfGRheXxob3VyfG1pbnV0ZXxzZWNvbmRcIixcbiAgICAgICAgICAgIG91dHB1dFRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgeWVhcjogXCJSb2t5XCIsXG4gICAgICAgICAgICAgICAgd2VlazogXCJUw71kbnlcIixcbiAgICAgICAgICAgICAgICBkYXk6IFwiRG55XCIsXG4gICAgICAgICAgICAgICAgaG91cjogXCJIb2RpblwiLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogXCJNaW51dFwiLFxuICAgICAgICAgICAgICAgIHNlY29uZDogXCJWdGXFmWluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFzdFRpY2sgPSBudWxsLFxuICAgICAgICBpbnRlcnZhbHNCeVNpemUgPSBbXCJ5ZWFyXCIsIFwid2Vla1wiLCBcImRheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIl0sXG4gICAgICAgIFRJTUVTVEFNUF9TRUNPTkQgPSAxMDAwLFxuICAgICAgICBUSU1FU1RBTVBfTUlOVVRFID0gNjAgKiBUSU1FU1RBTVBfU0VDT05ELFxuICAgICAgICBUSU1FU1RBTVBfSE9VUiA9IDYwICogVElNRVNUQU1QX01JTlVURSxcbiAgICAgICAgVElNRVNUQU1QX0RBWSA9IDI0ICogVElNRVNUQU1QX0hPVVIsXG4gICAgICAgIFRJTUVTVEFNUF9XRUVLID0gNyAqIFRJTUVTVEFNUF9EQVksXG4gICAgICAgIFRJTUVTVEFNUF9ZRUFSID0gMzY1ICogVElNRVNUQU1QX0RBWSxcbiAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ID0gXCJjb3VudERvd25fXCIsXG4gICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgZGlnaXRDb250cyA9IHt9O1xuXG4gICAgbG9hZE9wdGlvbnMob3B0aW9ucywgb3B0KTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHJldHVybnMge0RhdGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZShkYXRlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICh0eXBlb2YgZGF0ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGRhdGUpKSA9PT0gXCJvYmplY3RcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZXhwZWN0ZWRWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRheTogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IDAsXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiAwXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkVmFsdWVzLmhhc093blByb3BlcnR5KGkpICYmIGRhdGUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkVmFsdWVzW2ldID0gZGF0ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXMueWVhcixcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXMubW9udGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGV4cGVjdGVkVmFsdWVzLm1vbnRoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBleHBlY3RlZFZhbHVlcy5tb250aCxcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXMuZGF5LFxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFZhbHVlcy5ob3VyLFxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFZhbHVlcy5taW51dGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkVmFsdWVzLnNlY29uZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZGF0ZU9iaikge1xuICAgICAgICBsZXQgdXNlZEludGVydmFscyA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG91dHB1dCA9IHt9LFxuICAgICAgICAgICAgdGltZURpZmYgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdXNlZEludGVydmFscyA9IGludGVydmFsc0J5U2l6ZS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3V0cHV0Rm9ybWF0LnNwbGl0KFwifFwiKS5pbmRleE9mKGl0ZW0pICE9PSAtMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGltZURpZmYgPSBkYXRlT2JqLmdldFRpbWUoKSAtIERhdGUubm93KCk7XG5cbiAgICAgICAgdXNlZEludGVydmFscy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0aW1lRGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9ZRUFSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1lFQVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIndlZWtcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9XRUVLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1dFRUs7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX0RBWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9EQVk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhvdXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9IT1VSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX0hPVVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1pbnV0ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX01JTlVURSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9NSU5VVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlY29uZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1NFQ09ORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9TRUNPTkQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwMFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0W2l0ZW1dID0gKChcIlwiICsgdmFsdWUpLmxlbmd0aCA8IDIgPyBcIjBcIiArIHZhbHVlIDogXCJcIiArIHZhbHVlKS5zcGxpdChcbiAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeENvbXBhdGliaWxpdHkoKSB7XG4gICAgICAgIE1hdGgudHJ1bmMgPVxuICAgICAgICAgICAgTWF0aC50cnVuYyB8fFxuICAgICAgICAgICAgZnVuY3Rpb24oeCkge1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwoeCk7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyaXRlRGF0YShkYXRhKSB7XG4gICAgICAgIGxldCBjb2RlID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2NvbnRcIj4nLFxuICAgICAgICAgICAgaW50ZXJ2YWxOYW1lID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAoaW50ZXJ2YWxOYW1lIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGludGVydmFsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9XG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiJyArXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXG4gICAgICAgICAgICAgICAgICAgICdfaW50ZXJ2YWxfYmFzaWNfY29udFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICtcbiAgICAgICAgICAgICAgICAgICAgZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lKCkgK1xuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgIGdldEludGVydmFsQ29udENsYXNzTmFtZShpbnRlcnZhbE5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgJ1wiPicsXG4gICAgICAgICAgICAgICAgICAgIGludGVydmFsRGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJ2YWxfYmFzaWNfY29udF9kZXNjcmlwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vdXRwdXRUcmFuc2xhdGlvbltpbnRlcnZhbE5hbWVdICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbihkaWdpdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCArPVxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERpZ2l0Q29udENvbW1vbkNsYXNzTmFtZSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERpZ2l0Q29udENsYXNzTmFtZShpbmRleCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERpZ2l0RWxlbWVudFN0cmluZyhkaWdpdCwgMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvZGUgKz0gZWxlbWVudCArIFwiPC9kaXY+XCIgKyBpbnRlcnZhbERlc2NyaXB0aW9uICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY29udC5pbm5lckhUTUwgPSBjb2RlICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgbGFzdFRpY2sgPSBkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0RWxlbWVudFN0cmluZyhuZXdEaWdpdCwgbGFzdERpZ2l0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ICtcbiAgICAgICAgICAgICdkaWdpdF9sYXN0X3BsYWNlaG9sZGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ICtcbiAgICAgICAgICAgICdkaWdpdF9sYXN0X3BsYWNlaG9sZGVyX2lubmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgK1xuICAgICAgICAgICAgbGFzdERpZ2l0ICtcbiAgICAgICAgICAgICdcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ICtcbiAgICAgICAgICAgICdkaWdpdF9uZXdfcGxhY2Vob2xkZXJcIj4nICtcbiAgICAgICAgICAgIG5ld0RpZ2l0ICtcbiAgICAgICAgICAgICc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICtcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXG4gICAgICAgICAgICAnZGlnaXRfbGFzdF9yb3RhdGVcIj4nICtcbiAgICAgICAgICAgIGxhc3REaWdpdCArXG4gICAgICAgICAgICAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArXG4gICAgICAgICAgICBlbGVtZW50Q2xhc3NQcmVmaXggK1xuICAgICAgICAgICAgJ2RpZ2l0X25ld19yb3RhdGVcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArXG4gICAgICAgICAgICBlbGVtZW50Q2xhc3NQcmVmaXggK1xuICAgICAgICAgICAgJ2RpZ2l0X25ld19yb3RhdGVkXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICtcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXG4gICAgICAgICAgICAnZGlnaXRfbmV3X3JvdGF0ZWRfaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgK1xuICAgICAgICAgICAgbmV3RGlnaXQgK1xuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoZGF0YSkge1xuICAgICAgICBsZXQgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpbnRlcnZhbE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGludGVydmFsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbihkaWdpdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRpY2sgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUaWNrW2ludGVydmFsTmFtZV1baW5kZXhdICE9PSBkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGlnaXRDb250KGludGVydmFsTmFtZSwgaW5kZXgpLmlubmVySFRNTCA9IGdldERpZ2l0RWxlbWVudFN0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUaWNrW2ludGVydmFsTmFtZV1baW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaW50ZXJ2YWxOYW1lIGluIGRhdGEpIHtcbiAgICAgICAgICAgIF9sb29wKGludGVydmFsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0VGljayA9IGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250KGludGVydmFsTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCFkaWdpdENvbnRzW2ludGVydmFsTmFtZSArIFwiX1wiICsgaW5kZXhdKSB7XG4gICAgICAgICAgICBkaWdpdENvbnRzW2ludGVydmFsTmFtZSArIFwiX1wiICsgaW5kZXhdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBcIi5cIiArXG4gICAgICAgICAgICAgICAgZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkgK1xuICAgICAgICAgICAgICAgIFwiIC5cIiArXG4gICAgICAgICAgICAgICAgZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaWdpdENvbnRzW2ludGVydmFsTmFtZSArIFwiX1wiICsgaW5kZXhdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEludGVydmFsQ29udENsYXNzTmFtZShpbnRlcnZhbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArIFwiaW50ZXJ2YWxfY29udF9cIiArIGludGVydmFsTmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnRlcnZhbENvbnRDb21tb25DbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyBcImludGVydmFsX2NvbnRcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArIFwiZGlnaXRfY29udF9cIiArIGluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZ2l0Q29udENvbW1vbkNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDbGFzc1ByZWZpeCArIFwiZGlnaXRfY29udFwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRPcHRpb25zKF9vcHRpb25zLCBfb3B0KSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gX29wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBfb3B0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBfb3B0aW9uc1tpXSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBfdHlwZW9mKF9vcHRpb25zW2ldKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgICAgICBfdHlwZW9mKF9vcHRbaV0pID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRPcHRpb25zKF9vcHRpb25zW2ldLCBfb3B0W2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfb3B0aW9uc1tpXSA9IF9vcHRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGxldCBlbmREYXRlID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgZW5kRGF0ZURhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZml4Q29tcGF0aWJpbGl0eSgpO1xuXG4gICAgICAgIGVuZERhdGUgPSBnZXREYXRlKG9wdGlvbnMuZW5kRGF0ZSk7XG5cbiAgICAgICAgZW5kRGF0ZURhdGEgPSBwcmVwYXJlVGltZUJ5T3V0cHV0Rm9ybWF0KGVuZERhdGUpO1xuXG4gICAgICAgIHdyaXRlRGF0YShlbmREYXRlRGF0YSk7XG5cbiAgICAgICAgbGFzdFRpY2sgPSBlbmREYXRlRGF0YTtcblxuICAgICAgICBpZiAoZW5kRGF0ZS5nZXRUaW1lKCkgPD0gRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmVuZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVuZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcocHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChlbmREYXRlKSk7XG4gICAgICAgICAgICB9LCBUSU1FU1RBTVBfU0VDT05EKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHN0b3A6IHN0b3BcbiAgICB9O1xufVxuXG5sZXQgY2QgPSBuZXcgQ291bnRkb3duKHtcbiAgICBjb250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKSxcbiAgICBlbmREYXRlOiAge1xuICAgICAgICBkYXk6IDE0LFxuICAgICAgICBtb250aDogNixcbiAgICAgICAgeWVhcjogMjAxOCxcbiAgICAgICAgaG91cjogMCxcbiAgICAgICAgbWludXRlOiAwLFxuICAgICAgICBzZWNvbmQ6IDAsXG4gICAgfSxcbiAgICBvdXRwdXRUcmFuc2xhdGlvbjoge1xuICAgICAgICB5ZWFyOiBcIlllYXJzXCIsXG4gICAgICAgIHdlZWs6IFwiV2Vla3NcIixcbiAgICAgICAgZGF5OiBcIkRheXNcIixcbiAgICAgICAgaG91cjogXCJIb3Vyc1wiLFxuICAgICAgICBtaW51dGU6IFwiTWludXRlc1wiLFxuICAgICAgICBzZWNvbmQ6IFwiU2Vjb25kc1wiXG4gICAgfSxcbiAgICBlbmRDYWxsYmFjazogbnVsbCxcbiAgICBvdXRwdXRGb3JtYXQ6IFwid2Vla3xkYXl8aG91cnxtaW51dGV8c2Vjb25kXCJcbn0pO1xuY2Quc3RhcnQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb3VudGRvd24uanMiXSwic291cmNlUm9vdCI6IiJ9