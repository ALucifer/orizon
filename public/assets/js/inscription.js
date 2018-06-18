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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/inscription.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/inscription.js":
/*!**********************************!*\
  !*** ./assets/js/inscription.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function userNameValidation(usernameInput) {
    var username = document.getElementById("username");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        username.setCustomValidity(issueArr);
        username.style.borderColor = alertRedInput;
    } else {
        username.setCustomValidity("");
        username.style.borderColor = defaultInput;
    }
}

function passwordValidation(passwordInput) {
    var password = document.getElementById("password");
    var issueArr = [];
    if (!/^.{7,15}$/.test(passwordInput)) {
        issueArr.push("Password must be between 7-15 characters.");
    }
    if (!/\d/.test(passwordInput)) {
        issueArr.push("Must contain at least one number.");
    }
    if (!/[a-z]/.test(passwordInput)) {
        issueArr.push("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
        issueArr.push("Must contain an uppercase letter.");
    }
    if (issueArr.length > 0) {
        password.setCustomValidity(issueArr.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTUzZWZkNDVkMjE1ZjQ0ZDY4ODciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luc2NyaXB0aW9uLmpzIl0sIm5hbWVzIjpbImFsZXJ0UmVkSW5wdXQiLCJkZWZhdWx0SW5wdXQiLCJ1c2VyTmFtZVZhbGlkYXRpb24iLCJ1c2VybmFtZUlucHV0IiwidXNlcm5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXNzdWVBcnIiLCJ0ZXN0IiwicHVzaCIsImxlbmd0aCIsInNldEN1c3RvbVZhbGlkaXR5Iiwic3R5bGUiLCJib3JkZXJDb2xvciIsInBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQSxJQUFJQSxnQkFBZ0IsU0FBcEI7QUFDQSxJQUFJQyxlQUFlLHVCQUFuQjs7QUFFQSxTQUFTQyxrQkFBVCxDQUE0QkMsYUFBNUIsRUFBMkM7QUFDdkMsUUFBSUMsV0FBV0MsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsUUFBSUMsV0FBVyxFQUFmO0FBQ0EsUUFBSSx1Q0FBdUNDLElBQXZDLENBQTRDTCxhQUE1QyxDQUFKLEVBQWdFO0FBQzVESSxpQkFBU0UsSUFBVCxDQUFjLHdCQUFkO0FBQ0g7QUFDRCxRQUFJRixTQUFTRyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCTixpQkFBU08saUJBQVQsQ0FBMkJKLFFBQTNCO0FBQ0FILGlCQUFTUSxLQUFULENBQWVDLFdBQWYsR0FBNkJiLGFBQTdCO0FBQ0gsS0FIRCxNQUdPO0FBQ0hJLGlCQUFTTyxpQkFBVCxDQUEyQixFQUEzQjtBQUNBUCxpQkFBU1EsS0FBVCxDQUFlQyxXQUFmLEdBQTZCWixZQUE3QjtBQUNIO0FBQ0o7O0FBRUQsU0FBU2Esa0JBQVQsQ0FBNEJDLGFBQTVCLEVBQTJDO0FBQ3ZDLFFBQUlDLFdBQVdYLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLFFBQUlDLFdBQVcsRUFBZjtBQUNBLFFBQUksQ0FBQyxZQUFZQyxJQUFaLENBQWlCTyxhQUFqQixDQUFMLEVBQXNDO0FBQ2xDUixpQkFBU0UsSUFBVCxDQUFjLDJDQUFkO0FBQ0g7QUFDRCxRQUFJLENBQUMsS0FBS0QsSUFBTCxDQUFVTyxhQUFWLENBQUwsRUFBK0I7QUFDM0JSLGlCQUFTRSxJQUFULENBQWMsbUNBQWQ7QUFDSDtBQUNELFFBQUksQ0FBQyxRQUFRRCxJQUFSLENBQWFPLGFBQWIsQ0FBTCxFQUFrQztBQUM5QlIsaUJBQVNFLElBQVQsQ0FBYyxrQ0FBZDtBQUNIO0FBQ0QsUUFBSSxDQUFDLFFBQVFELElBQVIsQ0FBYU8sYUFBYixDQUFMLEVBQWtDO0FBQzlCUixpQkFBU0UsSUFBVCxDQUFjLG1DQUFkO0FBQ0g7QUFDRCxRQUFJRixTQUFTRyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCTSxpQkFBU0wsaUJBQVQsQ0FBMkJKLFNBQVNVLElBQVQsQ0FBYyxJQUFkLENBQTNCO0FBQ0FELGlCQUFTSixLQUFULENBQWVDLFdBQWYsR0FBNkJiLGFBQTdCO0FBQ0gsS0FIRCxNQUdPO0FBQ0hnQixpQkFBU0wsaUJBQVQsQ0FBMkIsRUFBM0I7QUFDQUssaUJBQVNKLEtBQVQsQ0FBZUMsV0FBZixHQUE2QlosWUFBN0I7QUFDSDtBQUNKLEMiLCJmaWxlIjoianMvaW5zY3JpcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvaW5zY3JpcHRpb24uanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTUzZWZkNDVkMjE1ZjQ0ZDY4ODciLCJ2YXIgYWxlcnRSZWRJbnB1dCA9IFwiIzhDMTAxMFwiO1xyXG52YXIgZGVmYXVsdElucHV0ID0gXCJyZ2JhKDEwLCAxODAsIDE4MCwgMSlcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZXJOYW1lVmFsaWRhdGlvbih1c2VybmFtZUlucHV0KSB7XHJcbiAgICB2YXIgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpO1xyXG4gICAgdmFyIGlzc3VlQXJyID0gW107XHJcbiAgICBpZiAoL1stIUAjJCVeJiooKV8rfH49YHt9XFxbXFxdOlwiOyc8Pj8sLlxcL10vLnRlc3QodXNlcm5hbWVJbnB1dCkpIHtcclxuICAgICAgICBpc3N1ZUFyci5wdXNoKFwiTm8gc3BlY2lhbCBjaGFyYWN0ZXJzIVwiKTtcclxuICAgIH1cclxuICAgIGlmIChpc3N1ZUFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdXNlcm5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoaXNzdWVBcnIpO1xyXG4gICAgICAgIHVzZXJuYW1lLnN0eWxlLmJvcmRlckNvbG9yID0gYWxlcnRSZWRJbnB1dDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlcm5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XHJcbiAgICAgICAgdXNlcm5hbWUuc3R5bGUuYm9yZGVyQ29sb3IgPSBkZWZhdWx0SW5wdXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhc3N3b3JkVmFsaWRhdGlvbihwYXNzd29yZElucHV0KSB7XHJcbiAgICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xyXG4gICAgdmFyIGlzc3VlQXJyID0gW107XHJcbiAgICBpZiAoIS9eLns3LDE1fSQvLnRlc3QocGFzc3dvcmRJbnB1dCkpIHtcclxuICAgICAgICBpc3N1ZUFyci5wdXNoKFwiUGFzc3dvcmQgbXVzdCBiZSBiZXR3ZWVuIDctMTUgY2hhcmFjdGVycy5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QocGFzc3dvcmRJbnB1dCkpIHtcclxuICAgICAgICBpc3N1ZUFyci5wdXNoKFwiTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBudW1iZXIuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvW2Etel0vLnRlc3QocGFzc3dvcmRJbnB1dCkpIHtcclxuICAgICAgICBpc3N1ZUFyci5wdXNoKFwiTXVzdCBjb250YWluIGEgbG93ZXJjYXNlIGxldHRlci5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdChwYXNzd29yZElucHV0KSkge1xyXG4gICAgICAgIGlzc3VlQXJyLnB1c2goXCJNdXN0IGNvbnRhaW4gYW4gdXBwZXJjYXNlIGxldHRlci5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNzdWVBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHBhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KGlzc3VlQXJyLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgICAgIHBhc3N3b3JkLnN0eWxlLmJvcmRlckNvbG9yID0gYWxlcnRSZWRJbnB1dDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFzc3dvcmQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XHJcbiAgICAgICAgcGFzc3dvcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBkZWZhdWx0SW5wdXQ7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2luc2NyaXB0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==