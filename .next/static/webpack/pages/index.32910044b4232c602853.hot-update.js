webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/getRecipientEmail.js":
/*!************************************!*\
  !*** ./utils/getRecipientEmail.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var getRecipientEmail = function getRecipientEmail(users, userLoggedIn) {
  users === null || users === void 0 ? void 0 : users.filter(function (userFilter) {
    return userToFilter !== (userLoggedIn === null || userLoggedIn === void 0 ? void 0 : userLoggedIn.email);
  })[0];
};

/* harmony default export */ __webpack_exports__["default"] = (getRecipientEmail);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ2V0UmVjaXBpZW50RW1haWwuanMiXSwibmFtZXMiOlsiZ2V0UmVjaXBpZW50RW1haWwiLCJ1c2VycyIsInVzZXJMb2dnZWRJbiIsImZpbHRlciIsInVzZXJGaWx0ZXIiLCJ1c2VyVG9GaWx0ZXIiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFRQyxZQUFSLEVBQXlCO0FBQy9DRCxPQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBRUUsTUFBUCxDQUFjLFVBQUFDLFVBQVU7QUFBQSxXQUFJQyxZQUFZLE1BQUtILFlBQUwsYUFBS0EsWUFBTCx1QkFBS0EsWUFBWSxDQUFFSSxLQUFuQixDQUFoQjtBQUFBLEdBQXhCLEVBQWtFLENBQWxFO0FBQ0gsQ0FGRDs7QUFJZU4sZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzI5MTAwNDRiNDIzMmM2MDI4NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFJlY2lwaWVudEVtYWlsID0gKHVzZXJzLCB1c2VyTG9nZ2VkSW4pID0+IHtcclxuICAgIHVzZXJzPy5maWx0ZXIodXNlckZpbHRlciA9PiB1c2VyVG9GaWx0ZXIgIT09IHVzZXJMb2dnZWRJbj8uZW1haWwpWzBdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRSZWNpcGllbnRFbWFpbDsiXSwic291cmNlUm9vdCI6IiJ9