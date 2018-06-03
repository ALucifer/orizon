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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQ3YWEzYjUyZTM4MTdjMTZkNGUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvdW50ZG93bi5qcyJdLCJuYW1lcyI6WyJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIkNvdW50ZG93biIsIm9wdCIsIm9wdGlvbnMiLCJjb250IiwiZW5kRGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJlbmRDYWxsYmFjayIsIm91dHB1dEZvcm1hdCIsIm91dHB1dFRyYW5zbGF0aW9uIiwid2VlayIsImxhc3RUaWNrIiwiaW50ZXJ2YWxzQnlTaXplIiwiVElNRVNUQU1QX1NFQ09ORCIsIlRJTUVTVEFNUF9NSU5VVEUiLCJUSU1FU1RBTVBfSE9VUiIsIlRJTUVTVEFNUF9EQVkiLCJUSU1FU1RBTVBfV0VFSyIsIlRJTUVTVEFNUF9ZRUFSIiwiZWxlbWVudENsYXNzUHJlZml4IiwiaW50ZXJ2YWwiLCJkaWdpdENvbnRzIiwibG9hZE9wdGlvbnMiLCJnZXREYXRlIiwiZGF0ZSIsIkRhdGUiLCJleHBlY3RlZFZhbHVlcyIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsInByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQiLCJkYXRlT2JqIiwidXNlZEludGVydmFscyIsInVuZGVmaW5lZCIsIm91dHB1dCIsInRpbWVEaWZmIiwiZmlsdGVyIiwiaXRlbSIsInNwbGl0IiwiaW5kZXhPZiIsImdldFRpbWUiLCJub3ciLCJmb3JFYWNoIiwidmFsdWUiLCJNYXRoIiwidHJ1bmMiLCJsZW5ndGgiLCJmaXhDb21wYXRpYmlsaXR5IiwieCIsImlzTmFOIiwiTmFOIiwiZmxvb3IiLCJjZWlsIiwid3JpdGVEYXRhIiwiZGF0YSIsImNvZGUiLCJpbnRlcnZhbE5hbWUiLCJlbGVtZW50IiwiZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lIiwiZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lIiwiaW50ZXJ2YWxEZXNjcmlwdGlvbiIsImRpZ2l0IiwiaW5kZXgiLCJnZXREaWdpdENvbnRDb21tb25DbGFzc05hbWUiLCJnZXREaWdpdENvbnRDbGFzc05hbWUiLCJnZXREaWdpdEVsZW1lbnRTdHJpbmciLCJpbm5lckhUTUwiLCJuZXdEaWdpdCIsImxhc3REaWdpdCIsInVwZGF0ZVZpZXciLCJfbG9vcCIsImdldERpZ2l0Q29udCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9vcHRpb25zIiwiX29wdCIsInN0YXJ0IiwiZW5kRGF0ZURhdGEiLCJzZXRJbnRlcnZhbCIsInN0b3AiLCJjbGVhckludGVydmFsIiwiY2QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFFQSxJQUFJQSxVQUNBLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsU0FBT0EsT0FBT0MsUUFBZCxNQUEyQixRQUEzRCxHQUNNLFVBQVNDLEdBQVQsRUFBYztBQUNaLGtCQUFjQSxHQUFkLDBDQUFjQSxHQUFkO0FBQ0gsQ0FITCxHQUlNLFVBQVNBLEdBQVQsRUFBYztBQUNaLFdBQU9BLE9BQU8sT0FBT0YsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0UsSUFBSUMsV0FBSixLQUFvQkgsTUFBM0QsR0FDRCxRQURDLFVBRU1FLEdBRk4sMENBRU1BLEdBRk4sQ0FBUDtBQUdILENBVFQ7O0FBV0EsU0FBU0UsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDcEI7O0FBRUEsUUFBSUMsVUFBVTtBQUNOQyxjQUFNLElBREE7QUFFTkMsaUJBQVM7QUFDTEMsa0JBQU0sQ0FERDtBQUVMQyxtQkFBTyxDQUZGO0FBR0xDLGlCQUFLLENBSEE7QUFJTEMsa0JBQU0sQ0FKRDtBQUtMQyxvQkFBUSxDQUxIO0FBTUxDLG9CQUFRO0FBTkgsU0FGSDtBQVVOQyxxQkFBYSxJQVZQO0FBV05DLHNCQUFjLGtDQVhSO0FBWU5DLDJCQUFtQjtBQUNmUixrQkFBTSxNQURTO0FBRWZTLGtCQUFNLE9BRlM7QUFHZlAsaUJBQUssS0FIVTtBQUlmQyxrQkFBTSxPQUpTO0FBS2ZDLG9CQUFRLE9BTE87QUFNZkMsb0JBQVE7QUFOTztBQVpiLEtBQWQ7QUFBQSxRQXFCSUssV0FBVyxJQXJCZjtBQUFBLFFBc0JJQyxrQkFBa0IsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixNQUF4QixFQUFnQyxRQUFoQyxFQUEwQyxRQUExQyxDQXRCdEI7QUFBQSxRQXVCSUMsbUJBQW1CLElBdkJ2QjtBQUFBLFFBd0JJQyxtQkFBbUIsS0FBS0QsZ0JBeEI1QjtBQUFBLFFBeUJJRSxpQkFBaUIsS0FBS0QsZ0JBekIxQjtBQUFBLFFBMEJJRSxnQkFBZ0IsS0FBS0QsY0ExQnpCO0FBQUEsUUEyQklFLGlCQUFpQixJQUFJRCxhQTNCekI7QUFBQSxRQTRCSUUsaUJBQWlCLE1BQU1GLGFBNUIzQjtBQUFBLFFBNkJJRyxxQkFBcUIsWUE3QnpCO0FBQUEsUUE4QklDLFdBQVcsSUE5QmY7QUFBQSxRQStCSUMsYUFBYSxFQS9CakI7O0FBaUNBQyxnQkFBWXhCLE9BQVosRUFBcUJELEdBQXJCOztBQUVBOzs7O0FBSUEsYUFBUzBCLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ25CLFlBQ0ksQ0FBQyxPQUFPQSxJQUFQLEtBQWdCLFdBQWhCLEdBQThCLFdBQTlCLEdBQTRDakMsUUFBUWlDLElBQVIsQ0FBN0MsTUFBZ0UsUUFEcEUsRUFFRTtBQUNFLGdCQUFJQSxnQkFBZ0JDLElBQXBCLEVBQTBCO0FBQ3RCLHVCQUFPRCxJQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsb0JBQUlFLGlCQUFpQjtBQUNqQnZCLHlCQUFLLENBRFk7QUFFakJELDJCQUFPLENBRlU7QUFHakJELDBCQUFNLENBSFc7QUFJakJHLDBCQUFNLENBSlc7QUFLakJDLDRCQUFRLENBTFM7QUFNakJDLDRCQUFRO0FBTlMsaUJBQXJCOztBQVNBLHFCQUFLLElBQUlxQixDQUFULElBQWNELGNBQWQsRUFBOEI7QUFDMUIsd0JBQUlBLGVBQWVFLGNBQWYsQ0FBOEJELENBQTlCLEtBQW9DSCxLQUFLSSxjQUFMLENBQW9CRCxDQUFwQixDQUF4QyxFQUFnRTtBQUM1REQsdUNBQWVDLENBQWYsSUFBb0JILEtBQUtHLENBQUwsQ0FBcEI7QUFDSDtBQUNKOztBQUVELHVCQUFPLElBQUlGLElBQUosQ0FDSEMsZUFBZXpCLElBRFosRUFFSHlCLGVBQWV4QixLQUFmLEdBQXVCLENBQXZCLEdBQ013QixlQUFleEIsS0FBZixHQUF1QixDQUQ3QixHQUVNd0IsZUFBZXhCLEtBSmxCLEVBS0h3QixlQUFldkIsR0FMWixFQU1IdUIsZUFBZXRCLElBTlosRUFPSHNCLGVBQWVyQixNQVBaLEVBUUhxQixlQUFlcEIsTUFSWixDQUFQO0FBVUg7QUFDSixTQWhDRCxNQWdDTyxJQUFJLE9BQU9rQixJQUFQLEtBQWdCLFFBQWhCLElBQTRCLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEQsRUFBMEQ7QUFDN0QsbUJBQU8sSUFBSUMsSUFBSixDQUFTRCxJQUFULENBQVA7QUFDSCxTQUZNLE1BRUE7QUFDSCxtQkFBTyxJQUFJQyxJQUFKLEVBQVA7QUFDSDtBQUNKOztBQUVEOzs7O0FBSUEsYUFBU0kseUJBQVQsQ0FBbUNDLE9BQW5DLEVBQTRDO0FBQ3hDLFlBQUlDLGdCQUFnQkMsU0FBcEI7QUFBQSxZQUNJQyxTQUFTLEVBRGI7QUFBQSxZQUVJQyxXQUFXRixTQUZmOztBQUlBRCx3QkFBZ0JuQixnQkFBZ0J1QixNQUFoQixDQUF1QixVQUFTQyxJQUFULEVBQWU7QUFDbEQsbUJBQU90QyxRQUFRVSxZQUFSLENBQXFCNkIsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0NDLE9BQWhDLENBQXdDRixJQUF4QyxNQUFrRCxDQUFDLENBQTFEO0FBQ0gsU0FGZSxDQUFoQjs7QUFJQUYsbUJBQVdKLFFBQVFTLE9BQVIsS0FBb0JkLEtBQUtlLEdBQUwsRUFBL0I7O0FBRUFULHNCQUFjVSxPQUFkLENBQXNCLFVBQVNMLElBQVQsRUFBZTtBQUNqQyxnQkFBSU0sUUFBUVYsU0FBWjtBQUNBLGdCQUFJRSxXQUFXLENBQWYsRUFBa0I7QUFDZCx3QkFBUUUsSUFBUjtBQUNJLHlCQUFLLE1BQUw7QUFDSU0sZ0NBQVFDLEtBQUtDLEtBQUwsQ0FBV1YsV0FBV2hCLGNBQXRCLENBQVI7QUFDQWdCLG9DQUFZUSxRQUFReEIsY0FBcEI7QUFDQTtBQUNKLHlCQUFLLE1BQUw7QUFDSXdCLGdDQUFRQyxLQUFLQyxLQUFMLENBQVdWLFdBQVdqQixjQUF0QixDQUFSO0FBQ0FpQixvQ0FBWVEsUUFBUXpCLGNBQXBCO0FBQ0E7QUFDSix5QkFBSyxLQUFMO0FBQ0l5QixnQ0FBUUMsS0FBS0MsS0FBTCxDQUFXVixXQUFXbEIsYUFBdEIsQ0FBUjtBQUNBa0Isb0NBQVlRLFFBQVExQixhQUFwQjtBQUNBO0FBQ0oseUJBQUssTUFBTDtBQUNJMEIsZ0NBQVFDLEtBQUtDLEtBQUwsQ0FBV1YsV0FBV25CLGNBQXRCLENBQVI7QUFDQW1CLG9DQUFZUSxRQUFRM0IsY0FBcEI7QUFDQTtBQUNKLHlCQUFLLFFBQUw7QUFDSTJCLGdDQUFRQyxLQUFLQyxLQUFMLENBQVdWLFdBQVdwQixnQkFBdEIsQ0FBUjtBQUNBb0Isb0NBQVlRLFFBQVE1QixnQkFBcEI7QUFDQTtBQUNKLHlCQUFLLFFBQUw7QUFDSTRCLGdDQUFRQyxLQUFLQyxLQUFMLENBQVdWLFdBQVdyQixnQkFBdEIsQ0FBUjtBQUNBcUIsb0NBQVlRLFFBQVE3QixnQkFBcEI7QUFDQTtBQXhCUjtBQTBCSCxhQTNCRCxNQTJCTztBQUNINkIsd0JBQVEsSUFBUjtBQUNIO0FBQ0RULG1CQUFPRyxJQUFQLElBQWUsQ0FBQyxDQUFDLEtBQUtNLEtBQU4sRUFBYUcsTUFBYixHQUFzQixDQUF0QixHQUEwQixNQUFNSCxLQUFoQyxHQUF3QyxLQUFLQSxLQUE5QyxFQUFxREwsS0FBckQsQ0FDWCxFQURXLENBQWY7QUFHSCxTQW5DRDs7QUFxQ0EsZUFBT0osTUFBUDtBQUNIOztBQUVELGFBQVNhLGdCQUFULEdBQTRCO0FBQ3hCSCxhQUFLQyxLQUFMLEdBQ0lELEtBQUtDLEtBQUwsSUFDQSxVQUFTRyxDQUFULEVBQVk7QUFDUixnQkFBSUMsTUFBTUQsQ0FBTixDQUFKLEVBQWM7QUFDVix1QkFBT0UsR0FBUDtBQUNIO0FBQ0QsZ0JBQUlGLElBQUksQ0FBUixFQUFXO0FBQ1AsdUJBQU9KLEtBQUtPLEtBQUwsQ0FBV0gsQ0FBWCxDQUFQO0FBQ0g7QUFDRCxtQkFBT0osS0FBS1EsSUFBTCxDQUFVSixDQUFWLENBQVA7QUFDSCxTQVZMO0FBV0g7O0FBRUQsYUFBU0ssU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDckIsWUFBSUMsT0FBTyxpQkFBaUJuQyxrQkFBakIsR0FBc0MsUUFBakQ7QUFBQSxZQUNJb0MsZUFBZXZCLFNBRG5COztBQUdBLGFBQUt1QixZQUFMLElBQXFCRixJQUFyQixFQUEyQjtBQUN2QixnQkFBSUEsS0FBS3pCLGNBQUwsQ0FBb0IyQixZQUFwQixDQUFKLEVBQXVDO0FBQ25DLG9CQUFJQyxVQUNBLGlCQUNBckMsa0JBREEsR0FFQSw2RUFGQSxHQUdBc0MsZ0NBSEEsR0FJQSxHQUpBLEdBS0FDLHlCQUF5QkgsWUFBekIsQ0FMQSxHQU1BLElBUEo7QUFBQSxvQkFRSUksc0JBQ0ksaUJBQ0F4QyxrQkFEQSxHQUVBLHdGQUZBLEdBR0FyQixRQUFRVyxpQkFBUixDQUEwQjhDLFlBQTFCLENBSEEsR0FJQSx5REFiUjtBQWNBRixxQkFBS0UsWUFBTCxFQUFtQmQsT0FBbkIsQ0FBMkIsVUFBU21CLEtBQVQsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQzlDTCwrQkFDSSxpQkFDQU0sNkJBREEsR0FFQSxHQUZBLEdBR0FDLHNCQUFzQkYsS0FBdEIsQ0FIQSxHQUlBLDhDQUpBLEdBS0FHLHNCQUFzQkosS0FBdEIsRUFBNkIsQ0FBN0IsQ0FMQSxHQU1BLDhDQVBKO0FBUUgsaUJBVEQ7O0FBV0FOLHdCQUFRRSxVQUFVLFFBQVYsR0FBcUJHLG1CQUFyQixHQUEyQyxRQUFuRDtBQUNIO0FBQ0o7O0FBRUQ3RCxnQkFBUUMsSUFBUixDQUFha0UsU0FBYixHQUF5QlgsT0FBTyxRQUFoQztBQUNBM0MsbUJBQVcwQyxJQUFYO0FBQ0g7O0FBRUQsYUFBU1cscUJBQVQsQ0FBK0JFLFFBQS9CLEVBQXlDQyxTQUF6QyxFQUFvRDtBQUNoRCxlQUNJLGlCQUNBaEQsa0JBREEsR0FFQSxnRUFGQSxHQUdBQSxrQkFIQSxHQUlBLDhEQUpBLEdBS0FnRCxTQUxBLEdBTUEsZ0dBTkEsR0FPQWhELGtCQVBBLEdBUUEseUJBUkEsR0FTQStDLFFBVEEsR0FVQSwwQ0FWQSxHQVdBL0Msa0JBWEEsR0FZQSxxQkFaQSxHQWFBZ0QsU0FiQSxHQWNBLDBDQWRBLEdBZUFoRCxrQkFmQSxHQWdCQSwwREFoQkEsR0FpQkFBLGtCQWpCQSxHQWtCQSwrREFsQkEsR0FtQkFBLGtCQW5CQSxHQW9CQSw2REFwQkEsR0FxQkErQyxRQXJCQSxHQXNCQSxrR0F2Qko7QUF5Qkg7O0FBRUQsYUFBU0UsVUFBVCxDQUFvQmYsSUFBcEIsRUFBMEI7QUFDdEIsWUFBSWdCLFFBQVEsU0FBU0EsS0FBVCxDQUFlZCxZQUFmLEVBQTZCO0FBQ3JDLGdCQUFJRixLQUFLekIsY0FBTCxDQUFvQjJCLFlBQXBCLENBQUosRUFBdUM7QUFDbkNGLHFCQUFLRSxZQUFMLEVBQW1CZCxPQUFuQixDQUEyQixVQUFTbUIsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUI7QUFDOUMsd0JBQ0lsRCxhQUFhLElBQWIsSUFDQUEsU0FBUzRDLFlBQVQsRUFBdUJNLEtBQXZCLE1BQWtDUixLQUFLRSxZQUFMLEVBQW1CTSxLQUFuQixDQUZ0QyxFQUdFO0FBQ0VTLHFDQUFhZixZQUFiLEVBQTJCTSxLQUEzQixFQUFrQ0ksU0FBbEMsR0FBOENELHNCQUMxQ1gsS0FBS0UsWUFBTCxFQUFtQk0sS0FBbkIsQ0FEMEMsRUFFMUNsRCxTQUFTNEMsWUFBVCxFQUF1Qk0sS0FBdkIsQ0FGMEMsQ0FBOUM7QUFJSDtBQUNKLGlCQVZEO0FBV0g7QUFDSixTQWREOztBQWdCQSxhQUFLLElBQUlOLFlBQVQsSUFBeUJGLElBQXpCLEVBQStCO0FBQzNCZ0Isa0JBQU1kLFlBQU47QUFDSDs7QUFFRDVDLG1CQUFXMEMsSUFBWDtBQUNIOztBQUVELGFBQVNpQixZQUFULENBQXNCZixZQUF0QixFQUFvQ00sS0FBcEMsRUFBMkM7QUFDdkMsWUFBSSxDQUFDeEMsV0FBV2tDLGVBQWUsR0FBZixHQUFxQk0sS0FBaEMsQ0FBTCxFQUE2QztBQUN6Q3hDLHVCQUFXa0MsZUFBZSxHQUFmLEdBQXFCTSxLQUFoQyxJQUF5Q1UsU0FBU0MsYUFBVCxDQUNyQyxNQUNBZCx5QkFBeUJILFlBQXpCLENBREEsR0FFQSxJQUZBLEdBR0FRLHNCQUFzQkYsS0FBdEIsQ0FKcUMsQ0FBekM7QUFNSDs7QUFFRCxlQUFPeEMsV0FBV2tDLGVBQWUsR0FBZixHQUFxQk0sS0FBaEMsQ0FBUDtBQUNIOztBQUVELGFBQVNILHdCQUFULENBQWtDSCxZQUFsQyxFQUFnRDtBQUM1QyxlQUFPcEMscUJBQXFCLGdCQUFyQixHQUF3Q29DLFlBQS9DO0FBQ0g7O0FBRUQsYUFBU0UsOEJBQVQsR0FBMEM7QUFDdEMsZUFBT3RDLHFCQUFxQixlQUE1QjtBQUNIOztBQUVELGFBQVM0QyxxQkFBVCxDQUErQkYsS0FBL0IsRUFBc0M7QUFDbEMsZUFBTzFDLHFCQUFxQixhQUFyQixHQUFxQzBDLEtBQTVDO0FBQ0g7O0FBRUQsYUFBU0MsMkJBQVQsR0FBdUM7QUFDbkMsZUFBTzNDLHFCQUFxQixZQUE1QjtBQUNIOztBQUVELGFBQVNHLFdBQVQsQ0FBcUJtRCxRQUFyQixFQUErQkMsSUFBL0IsRUFBcUM7QUFDakMsYUFBSyxJQUFJL0MsQ0FBVCxJQUFjOEMsUUFBZCxFQUF3QjtBQUNwQixnQkFBSUEsU0FBUzdDLGNBQVQsQ0FBd0JELENBQXhCLEtBQThCK0MsS0FBSzlDLGNBQUwsQ0FBb0JELENBQXBCLENBQWxDLEVBQTBEO0FBQ3RELG9CQUNJOEMsU0FBUzlDLENBQVQsTUFBZ0IsSUFBaEIsSUFDQXBDLFFBQVFrRixTQUFTOUMsQ0FBVCxDQUFSLE1BQXlCLFFBRHpCLElBRUFwQyxRQUFRbUYsS0FBSy9DLENBQUwsQ0FBUixNQUFxQixRQUh6QixFQUlFO0FBQ0VMLGdDQUFZbUQsU0FBUzlDLENBQVQsQ0FBWixFQUF5QitDLEtBQUsvQyxDQUFMLENBQXpCO0FBQ0gsaUJBTkQsTUFNTztBQUNIOEMsNkJBQVM5QyxDQUFULElBQWMrQyxLQUFLL0MsQ0FBTCxDQUFkO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRUQsYUFBU2dELEtBQVQsR0FBaUI7QUFDYixZQUFJM0UsVUFBVWdDLFNBQWQ7QUFBQSxZQUNJNEMsY0FBYzVDLFNBRGxCOztBQUdBYzs7QUFFQTlDLGtCQUFVdUIsUUFBUXpCLFFBQVFFLE9BQWhCLENBQVY7O0FBRUE0RSxzQkFBYy9DLDBCQUEwQjdCLE9BQTFCLENBQWQ7O0FBRUFvRCxrQkFBVXdCLFdBQVY7O0FBRUFqRSxtQkFBV2lFLFdBQVg7O0FBRUEsWUFBSTVFLFFBQVF1QyxPQUFSLE1BQXFCZCxLQUFLZSxHQUFMLEVBQXpCLEVBQXFDO0FBQ2pDLGdCQUFJLE9BQU8xQyxRQUFRUyxXQUFmLEtBQStCLFVBQW5DLEVBQStDO0FBQzNDVCx3QkFBUVMsV0FBUjtBQUNIO0FBQ0osU0FKRCxNQUlPO0FBQ0hhLHVCQUFXeUQsWUFBWSxZQUFXO0FBQzlCVCwyQkFBV3ZDLDBCQUEwQjdCLE9BQTFCLENBQVg7QUFDSCxhQUZVLEVBRVJhLGdCQUZRLENBQVg7QUFHSDtBQUNKOztBQUVELGFBQVNpRSxJQUFULEdBQWdCO0FBQ1osWUFBSTFELGFBQWEsSUFBakIsRUFBdUI7QUFDbkIyRCwwQkFBYzNELFFBQWQ7QUFDSDtBQUNKOztBQUVELFdBQU87QUFDSHVELGVBQU9BLEtBREo7QUFFSEcsY0FBTUE7QUFGSCxLQUFQO0FBSUg7O0FBRUQsSUFBSUUsS0FBSyxJQUFJcEYsU0FBSixDQUFjO0FBQ25CRyxVQUFNd0UsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQURhO0FBRW5CeEUsYUFBVTtBQUNORyxhQUFLLEVBREM7QUFFTkQsZUFBTyxDQUZEO0FBR05ELGNBQU0sSUFIQTtBQUlORyxjQUFNLENBSkE7QUFLTkMsZ0JBQVEsQ0FMRjtBQU1OQyxnQkFBUTtBQU5GLEtBRlM7QUFVbkJHLHVCQUFtQjtBQUNmUixjQUFNLE9BRFM7QUFFZlMsY0FBTSxPQUZTO0FBR2ZQLGFBQUssTUFIVTtBQUlmQyxjQUFNLE9BSlM7QUFLZkMsZ0JBQVEsU0FMTztBQU1mQyxnQkFBUTtBQU5PLEtBVkE7QUFrQm5CQyxpQkFBYSxJQWxCTTtBQW1CbkJDLGtCQUFjO0FBbkJLLENBQWQsQ0FBVDtBQXFCQXdFLEdBQUdMLEtBQUgsRyIsImZpbGUiOiJqcy9jb3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvY291bnRkb3duLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ0N2FhM2I1MmUzODE3YzE2ZDRlIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgX3R5cGVvZiA9XHJcbiAgICB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIlxyXG4gICAgICAgID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbFxyXG4gICAgICAgICAgICAgICAgPyBcInN5bWJvbFwiXHJcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBvYmo7XHJcbiAgICAgICAgfTtcclxuXHJcbmZ1bmN0aW9uIENvdW50ZG93bihvcHQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb250OiBudWxsLFxyXG4gICAgICAgICAgICBlbmREYXRlOiB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAwLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IDAsXHJcbiAgICAgICAgICAgICAgICBkYXk6IDAsXHJcbiAgICAgICAgICAgICAgICBob3VyOiAwLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAwLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVuZENhbGxiYWNrOiBudWxsLFxyXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXQ6IFwieWVhcnx3ZWVrfGRheXxob3VyfG1pbnV0ZXxzZWNvbmRcIixcclxuICAgICAgICAgICAgb3V0cHV0VHJhbnNsYXRpb246IHtcclxuICAgICAgICAgICAgICAgIHllYXI6IFwiUm9reVwiLFxyXG4gICAgICAgICAgICAgICAgd2VlazogXCJUw71kbnlcIixcclxuICAgICAgICAgICAgICAgIGRheTogXCJEbnlcIixcclxuICAgICAgICAgICAgICAgIGhvdXI6IFwiSG9kaW5cIixcclxuICAgICAgICAgICAgICAgIG1pbnV0ZTogXCJNaW51dFwiLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kOiBcIlZ0ZcWZaW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXN0VGljayA9IG51bGwsXHJcbiAgICAgICAgaW50ZXJ2YWxzQnlTaXplID0gW1wieWVhclwiLCBcIndlZWtcIiwgXCJkYXlcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCJdLFxyXG4gICAgICAgIFRJTUVTVEFNUF9TRUNPTkQgPSAxMDAwLFxyXG4gICAgICAgIFRJTUVTVEFNUF9NSU5VVEUgPSA2MCAqIFRJTUVTVEFNUF9TRUNPTkQsXHJcbiAgICAgICAgVElNRVNUQU1QX0hPVVIgPSA2MCAqIFRJTUVTVEFNUF9NSU5VVEUsXHJcbiAgICAgICAgVElNRVNUQU1QX0RBWSA9IDI0ICogVElNRVNUQU1QX0hPVVIsXHJcbiAgICAgICAgVElNRVNUQU1QX1dFRUsgPSA3ICogVElNRVNUQU1QX0RBWSxcclxuICAgICAgICBUSU1FU1RBTVBfWUVBUiA9IDM2NSAqIFRJTUVTVEFNUF9EQVksXHJcbiAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ID0gXCJjb3VudERvd25fXCIsXHJcbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxyXG4gICAgICAgIGRpZ2l0Q29udHMgPSB7fTtcclxuXHJcbiAgICBsb2FkT3B0aW9ucyhvcHRpb25zLCBvcHQpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGRhdGVcclxuICAgICAqIEByZXR1cm5zIHtEYXRlfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXREYXRlKGRhdGUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICh0eXBlb2YgZGF0ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGRhdGUpKSA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV4cGVjdGVkVmFsdWVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheTogMCxcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogMCxcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogMFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGV4cGVjdGVkVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkVmFsdWVzLmhhc093blByb3BlcnR5KGkpICYmIGRhdGUuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXNbaV0gPSBkYXRlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXMueWVhcixcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFZhbHVlcy5tb250aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBleHBlY3RlZFZhbHVlcy5tb250aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBleHBlY3RlZFZhbHVlcy5tb250aCxcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFZhbHVlcy5kYXksXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXMuaG91cixcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFZhbHVlcy5taW51dGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZXMuc2Vjb25kXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZGF0ZU9iaikge1xyXG4gICAgICAgIGxldCB1c2VkSW50ZXJ2YWxzID0gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvdXRwdXQgPSB7fSxcclxuICAgICAgICAgICAgdGltZURpZmYgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHVzZWRJbnRlcnZhbHMgPSBpbnRlcnZhbHNCeVNpemUuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3V0cHV0Rm9ybWF0LnNwbGl0KFwifFwiKS5pbmRleE9mKGl0ZW0pICE9PSAtMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGltZURpZmYgPSBkYXRlT2JqLmdldFRpbWUoKSAtIERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIHVzZWRJbnRlcnZhbHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKHRpbWVEaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInllYXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1lFQVIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9ZRUFSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwid2Vla1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgudHJ1bmModGltZURpZmYgLyBUSU1FU1RBTVBfV0VFSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1dFRUs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkYXlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX0RBWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX0RBWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhvdXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX0hPVVIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9IT1VSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWludXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC50cnVuYyh0aW1lRGlmZiAvIFRJTUVTVEFNUF9NSU5VVEUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiAtPSB2YWx1ZSAqIFRJTUVTVEFNUF9NSU5VVEU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZWNvbmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnRydW5jKHRpbWVEaWZmIC8gVElNRVNUQU1QX1NFQ09ORCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmIC09IHZhbHVlICogVElNRVNUQU1QX1NFQ09ORDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXRbaXRlbV0gPSAoKFwiXCIgKyB2YWx1ZSkubGVuZ3RoIDwgMiA/IFwiMFwiICsgdmFsdWUgOiBcIlwiICsgdmFsdWUpLnNwbGl0KFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpeENvbXBhdGliaWxpdHkoKSB7XHJcbiAgICAgICAgTWF0aC50cnVuYyA9XHJcbiAgICAgICAgICAgIE1hdGgudHJ1bmMgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24oeCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh4KTtcclxuICAgICAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZURhdGEoZGF0YSkge1xyXG4gICAgICAgIGxldCBjb2RlID0gJzxkaXYgY2xhc3M9XCInICsgZWxlbWVudENsYXNzUHJlZml4ICsgJ2NvbnRcIj4nLFxyXG4gICAgICAgICAgICBpbnRlcnZhbE5hbWUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGZvciAoaW50ZXJ2YWxOYW1lIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaW50ZXJ2YWxOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzUHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAnX2ludGVydmFsX2Jhc2ljX2NvbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxEZXNjcmlwdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnZhbF9iYXNpY19jb250X2Rlc2NyaXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub3V0cHV0VHJhbnNsYXRpb25baW50ZXJ2YWxOYW1lXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgIGRhdGFbaW50ZXJ2YWxOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGRpZ2l0LCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgKz1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCInICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERpZ2l0Q29udENsYXNzTmFtZShpbmRleCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREaWdpdEVsZW1lbnRTdHJpbmcoZGlnaXQsIDApICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvZGUgKz0gZWxlbWVudCArIFwiPC9kaXY+XCIgKyBpbnRlcnZhbERlc2NyaXB0aW9uICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ucy5jb250LmlubmVySFRNTCA9IGNvZGUgKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgIGxhc3RUaWNrID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREaWdpdEVsZW1lbnRTdHJpbmcobmV3RGlnaXQsIGxhc3REaWdpdCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiJyArXHJcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXHJcbiAgICAgICAgICAgICdkaWdpdF9sYXN0X3BsYWNlaG9sZGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgK1xyXG4gICAgICAgICAgICBlbGVtZW50Q2xhc3NQcmVmaXggK1xyXG4gICAgICAgICAgICAnZGlnaXRfbGFzdF9wbGFjZWhvbGRlcl9pbm5lclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICtcclxuICAgICAgICAgICAgbGFzdERpZ2l0ICtcclxuICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArXHJcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXHJcbiAgICAgICAgICAgICdkaWdpdF9uZXdfcGxhY2Vob2xkZXJcIj4nICtcclxuICAgICAgICAgICAgbmV3RGlnaXQgK1xyXG4gICAgICAgICAgICAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArXHJcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXHJcbiAgICAgICAgICAgICdkaWdpdF9sYXN0X3JvdGF0ZVwiPicgK1xyXG4gICAgICAgICAgICBsYXN0RGlnaXQgK1xyXG4gICAgICAgICAgICAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArXHJcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzc1ByZWZpeCArXHJcbiAgICAgICAgICAgICdkaWdpdF9uZXdfcm90YXRlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgK1xyXG4gICAgICAgICAgICBlbGVtZW50Q2xhc3NQcmVmaXggK1xyXG4gICAgICAgICAgICAnZGlnaXRfbmV3X3JvdGF0ZWRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgK1xyXG4gICAgICAgICAgICBlbGVtZW50Q2xhc3NQcmVmaXggK1xyXG4gICAgICAgICAgICAnZGlnaXRfbmV3X3JvdGF0ZWRfaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgK1xyXG4gICAgICAgICAgICBuZXdEaWdpdCArXHJcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoZGF0YSkge1xyXG4gICAgICAgIGxldCBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGludGVydmFsTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpbnRlcnZhbE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV0uZm9yRWFjaChmdW5jdGlvbihkaWdpdCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUaWNrICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUaWNrW2ludGVydmFsTmFtZV1baW5kZXhdICE9PSBkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERpZ2l0Q29udChpbnRlcnZhbE5hbWUsIGluZGV4KS5pbm5lckhUTUwgPSBnZXREaWdpdEVsZW1lbnRTdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ludGVydmFsTmFtZV1baW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRpY2tbaW50ZXJ2YWxOYW1lXVtpbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGludGVydmFsTmFtZSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIF9sb29wKGludGVydmFsTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0VGljayA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250KGludGVydmFsTmFtZSwgaW5kZXgpIHtcclxuICAgICAgICBpZiAoIWRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgXCJfXCIgKyBpbmRleF0pIHtcclxuICAgICAgICAgICAgZGlnaXRDb250c1tpbnRlcnZhbE5hbWUgKyBcIl9cIiArIGluZGV4XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICBcIi5cIiArXHJcbiAgICAgICAgICAgICAgICBnZXRJbnRlcnZhbENvbnRDbGFzc05hbWUoaW50ZXJ2YWxOYW1lKSArXHJcbiAgICAgICAgICAgICAgICBcIiAuXCIgK1xyXG4gICAgICAgICAgICAgICAgZ2V0RGlnaXRDb250Q2xhc3NOYW1lKGluZGV4KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRpZ2l0Q29udHNbaW50ZXJ2YWxOYW1lICsgXCJfXCIgKyBpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJ2YWxDb250Q2xhc3NOYW1lKGludGVydmFsTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyBcImludGVydmFsX2NvbnRfXCIgKyBpbnRlcnZhbE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJ2YWxDb250Q29tbW9uQ2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyBcImludGVydmFsX2NvbnRcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREaWdpdENvbnRDbGFzc05hbWUoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudENsYXNzUHJlZml4ICsgXCJkaWdpdF9jb250X1wiICsgaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRDb250Q29tbW9uQ2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50Q2xhc3NQcmVmaXggKyBcImRpZ2l0X2NvbnRcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkT3B0aW9ucyhfb3B0aW9ucywgX29wdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gX29wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKF9vcHRpb25zLmhhc093blByb3BlcnR5KGkpICYmIF9vcHQuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBfb3B0aW9uc1tpXSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIF90eXBlb2YoX29wdGlvbnNbaV0pID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgX3R5cGVvZihfb3B0W2ldKSA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnMoX29wdGlvbnNbaV0sIF9vcHRbaV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfb3B0aW9uc1tpXSA9IF9vcHRbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGVuZERhdGUgPSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGVuZERhdGVEYXRhID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBmaXhDb21wYXRpYmlsaXR5KCk7XHJcblxyXG4gICAgICAgIGVuZERhdGUgPSBnZXREYXRlKG9wdGlvbnMuZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgIGVuZERhdGVEYXRhID0gcHJlcGFyZVRpbWVCeU91dHB1dEZvcm1hdChlbmREYXRlKTtcclxuXHJcbiAgICAgICAgd3JpdGVEYXRhKGVuZERhdGVEYXRhKTtcclxuXHJcbiAgICAgICAgbGFzdFRpY2sgPSBlbmREYXRlRGF0YTtcclxuXHJcbiAgICAgICAgaWYgKGVuZERhdGUuZ2V0VGltZSgpIDw9IERhdGUubm93KCkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmVuZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZW5kQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KHByZXBhcmVUaW1lQnlPdXRwdXRGb3JtYXQoZW5kRGF0ZSkpO1xyXG4gICAgICAgICAgICB9LCBUSU1FU1RBTVBfU0VDT05EKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgICAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgIHN0b3A6IHN0b3BcclxuICAgIH07XHJcbn1cclxuXHJcbmxldCBjZCA9IG5ldyBDb3VudGRvd24oe1xyXG4gICAgY29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIiksXHJcbiAgICBlbmREYXRlOiAge1xyXG4gICAgICAgIGRheTogMTQsXHJcbiAgICAgICAgbW9udGg6IDYsXHJcbiAgICAgICAgeWVhcjogMjAxOCxcclxuICAgICAgICBob3VyOiAwLFxyXG4gICAgICAgIG1pbnV0ZTogMCxcclxuICAgICAgICBzZWNvbmQ6IDAsXHJcbiAgICB9LFxyXG4gICAgb3V0cHV0VHJhbnNsYXRpb246IHtcclxuICAgICAgICB5ZWFyOiBcIlllYXJzXCIsXHJcbiAgICAgICAgd2VlazogXCJXZWVrc1wiLFxyXG4gICAgICAgIGRheTogXCJEYXlzXCIsXHJcbiAgICAgICAgaG91cjogXCJIb3Vyc1wiLFxyXG4gICAgICAgIG1pbnV0ZTogXCJNaW51dGVzXCIsXHJcbiAgICAgICAgc2Vjb25kOiBcIlNlY29uZHNcIlxyXG4gICAgfSxcclxuICAgIGVuZENhbGxiYWNrOiBudWxsLFxyXG4gICAgb3V0cHV0Rm9ybWF0OiBcIndlZWt8ZGF5fGhvdXJ8bWludXRlfHNlY29uZFwiXHJcbn0pO1xyXG5jZC5zdGFydCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY291bnRkb3duLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==