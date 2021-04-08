webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ChatComponent.js":
/*!*************************************!*\
  !*** ./components/ChatComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getRecipientEmail */ "./utils/getRecipientEmail.js");


var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\ChatComponent.js";

function _templateObject2() {
  var data = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

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







function ChatComponent(_ref) {
  var id = _ref.id,
      users = _ref.users;
  var recipientEmail = Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_6__["default"])(users, user);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(UserAvatar, {
      className: "m-1 mr-2 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: recipientEmail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

_c = ChatComponent;
/* harmony default export */ __webpack_exports__["default"] = (ChatComponent);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.attrs({
  className: "flex items-center cursor-pointer p-4 break-words hover:bg-gray-300"
})(_templateObject());
_c2 = Container;
var UserAvatar = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"])(_templateObject2());
_c3 = UserAvatar;

var _c, _c2, _c3;

$RefreshReg$(_c, "ChatComponent");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "UserAvatar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkNoYXRDb21wb25lbnQiLCJpZCIsInVzZXJzIiwicmVjaXBpZW50RW1haWwiLCJnZXRSZWNpcGllbnRFbWFpbCIsInVzZXIiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIlVzZXJBdmF0YXIiLCJBdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUFzQztBQUFBLE1BQWJDLEVBQWEsUUFBYkEsRUFBYTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUVwQyxNQUFNQyxjQUFjLEdBQUNDLHdFQUFpQixDQUFDRixLQUFELEVBQU9HLElBQVAsQ0FBdEM7QUFDQSxzQkFBTyxxRUFBQyxTQUFEO0FBQUEsNEJBQ0wscUVBQUMsVUFBRDtBQUFZLGVBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUFFTDtBQUFBLGdCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUlEOztLQVBRSCxhO0FBU01BLDRFQUFmO0FBR0EsSUFBTU0sU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDakNDLFdBQVMsRUFBRTtBQURzQixDQUFqQixDQUFILG1CQUFmO01BQU1KLFM7QUFHTixJQUFNSyxVQUFVLEdBQUdKLGlFQUFNLENBQUNLLHdEQUFELENBQVQsb0JBQWhCO01BQU1ELFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWE5YzFlZTRhNjY5NTFmMjZiMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IGdldFJlY2lwaWVudEVtYWlsIGZyb20gJy4uL3V0aWxzL2dldFJlY2lwaWVudEVtYWlsJztcclxuIFxyXG5mdW5jdGlvbiBDaGF0Q29tcG9uZW50KHsgaWQsIHVzZXJzIH0pIHtcclxuICBcclxuICBjb25zdCByZWNpcGllbnRFbWFpbD1nZXRSZWNpcGllbnRFbWFpbCh1c2Vycyx1c2VyKVxyXG4gIHJldHVybiA8Q29udGFpbmVyPlxyXG4gICAgPFVzZXJBdmF0YXIgY2xhc3NOYW1lPVwibS0xIG1yLTIgXCIvPlxyXG4gICAgPHA+eyByZWNpcGllbnRFbWFpbH08L3A+XHJcbiAgICAgPC9Db250YWluZXI+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29tcG9uZW50XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiBcImZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHAtNCBicmVhay13b3JkcyBob3ZlcjpiZy1ncmF5LTMwMFwiLFxyXG59KWBgO1xyXG5jb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkKEF2YXRhcilgYDsiXSwic291cmNlUm9vdCI6IiJ9