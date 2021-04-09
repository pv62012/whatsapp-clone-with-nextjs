webpackHotUpdate_N_E("pages/chat/[id]",{

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./firebase.js");




var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Message.js",
    _s = $RefreshSig$();

function _templateObject3() {
  var data = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbackground-color:whitesmoke;\ntext-align:left;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nwidth:fit-content;\npadding:15px;\nborder-radius:8px;\nmargin:10px;\nmin-width:60px;\npadding-bottom:20px;\nposition:relative;\ntext-align:right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function Message(_ref) {
  _s();

  var user = _ref.user,
      message = _ref.message;

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]),
      _useAuthState2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useAuthState, 1),
      userLoggedIn = _useAuthState2[0]; // console.log("i am calling message ",message.message);


  var TypeOfMessage = user === userLoggedIn.email ? sender : Receiver;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
      children: [user, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: [" ", message.message, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(Message, "PnrICOBpRRX4DfC3FXlCTQylEu4=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"]];
});

_c = Message;
/* harmony default export */ __webpack_exports__["default"] = (Message);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
_c2 = Container;
var MessageElement = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p(_templateObject2());
var Sender = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(MessageElement)(_templateObject3());

var _c, _c2;

$RefreshReg$(_c, "Message");
$RefreshReg$(_c2, "Container");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJ1c2VyIiwibWVzc2FnZSIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJ1c2VyTG9nZ2VkSW4iLCJUeXBlT2ZNZXNzYWdlIiwiZW1haWwiLCJzZW5kZXIiLCJSZWNlaXZlciIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIk1lc3NhZ2VFbGVtZW50IiwicCIsIlNlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsT0FBVCxPQUFvQztBQUFBOztBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsc0JBQ1hDLDhFQUFZLENBQUNDLDhDQUFELENBREQ7QUFBQTtBQUFBLE1BQ3pCQyxZQUR5QixzQkFFNUI7OztBQUVKLE1BQU1DLGFBQWEsR0FBR0wsSUFBSSxLQUFLSSxZQUFZLENBQUNFLEtBQXRCLEdBQThCQyxNQUE5QixHQUF1Q0MsUUFBN0Q7QUFDQSxzQkFDSSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0k7QUFBQSxpQkFBS1IsSUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsc0JBQUtDLE9BQU8sQ0FBQ0EsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQVhRRixPO1VBQ2dCRyxzRTs7O0tBRGhCSCxPO0FBYU1BLHNFQUFmO0FBRUEsSUFBTVUsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO01BQU1GLFM7QUFDTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNHLENBQVYsb0JBQXBCO0FBV0EsSUFBTUMsTUFBTSxHQUFHSixpRUFBTSxDQUFDRSxjQUFELENBQVQsb0JBQVoiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC9baWRdLjFiOTA5OTNiNTA1NzdmMzgyOTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmZ1bmN0aW9uIE1lc3NhZ2UoeyB1c2VyLCBtZXNzYWdlIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyTG9nZ2VkSW5dPXVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaSBhbSBjYWxsaW5nIG1lc3NhZ2UgXCIsbWVzc2FnZS5tZXNzYWdlKTtcclxuICAgIFxyXG4gICAgY29uc3QgVHlwZU9mTWVzc2FnZSA9IHVzZXIgPT09IHVzZXJMb2dnZWRJbi5lbWFpbCA/IHNlbmRlciA6IFJlY2VpdmVyO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDU+e3VzZXJ9IDwvaDU+XHJcbiAgICAgICAgICAgIDxwPiB7bWVzc2FnZS5tZXNzYWdlfSA8L3A+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuY29uc3QgTWVzc2FnZUVsZW1lbnQgPSBzdHlsZWQucGBcclxud2lkdGg6Zml0LWNvbnRlbnQ7XHJcbnBhZGRpbmc6MTVweDtcclxuYm9yZGVyLXJhZGl1czo4cHg7XHJcbm1hcmdpbjoxMHB4O1xyXG5taW4td2lkdGg6NjBweDtcclxucGFkZGluZy1ib3R0b206MjBweDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnRleHQtYWxpZ246cmlnaHQ7XHJcbmA7XHJcblxyXG5jb25zdCBTZW5kZXIgPSBzdHlsZWQoTWVzc2FnZUVsZW1lbnQpYFxyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuYDsiXSwic291cmNlUm9vdCI6IiJ9