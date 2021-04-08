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
/* harmony import */ var C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getRecipientEmail */ "./utils/getRecipientEmail.js");




var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\ChatComponent.js",
    _s = $RefreshSig$();

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
  _s();

  var _recipientSnapshot$do, _recipientSnapshot$do2;

  var id = _ref.id,
      users = _ref.users;
  console.log(users);

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]),
      _useAuthState2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useAuthState, 1),
      user = _useAuthState2[0];

  var _useCollection = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__["useCollection"])(_firebase__WEBPACK_IMPORTED_MODULE_9__["db"].collection("users").where("email", "==", Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_10__["default"])(users, user))),
      _useCollection2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCollection, 1),
      recipientSnapshot = _useCollection2[0];

  var recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  var recipientEmail = Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_10__["default"])(users, user);
  console.log(recipientEmail);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(UserAvatar, {
      src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(UserAvatar, {
      className: "m-1 mr-2 ",
      children: recipientEmail[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: recipientEmail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(ChatComponent, "bww3shcN4FC+YFBLPVqe9p4G0PA=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__["useAuthState"], react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__["useCollection"]];
});

_c = ChatComponent;
/* harmony default export */ __webpack_exports__["default"] = (ChatComponent);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.attrs({
  className: "flex items-center cursor-pointer p-4 break-words hover:bg-gray-300"
})(_templateObject());
_c2 = Container;
var UserAvatar = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Avatar"])(_templateObject2());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkNoYXRDb21wb25lbnQiLCJpZCIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJ1c2VyIiwidXNlQ29sbGVjdGlvbiIsImRiIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiZ2V0UmVjaXBpZW50RW1haWwiLCJyZWNpcGllbnRTbmFwc2hvdCIsInJlY2lwaWVudCIsImRvY3MiLCJkYXRhIiwicmVjaXBpZW50RW1haWwiLCJwaG90b1VSTCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVXNlckF2YXRhciIsIkF2YXRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUFzQztBQUFBOztBQUFBOztBQUFBLE1BQWJDLEVBQWEsUUFBYkEsRUFBYTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBRG9DLHNCQUVyQkcsOEVBQVksQ0FBQ0MsOENBQUQsQ0FGUztBQUFBO0FBQUEsTUFFN0JDLElBRjZCOztBQUFBLHVCQUdWQyxvRkFBYSxDQUFDQyw0Q0FBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsS0FBdkIsQ0FBNkIsT0FBN0IsRUFBcUMsSUFBckMsRUFBNENDLHlFQUFpQixDQUFDVixLQUFELEVBQVFLLElBQVIsQ0FBN0QsQ0FBRCxDQUhIO0FBQUE7QUFBQSxNQUc3Qk0saUJBSDZCOztBQUlwQyxNQUFNQyxTQUFTLEdBQUNELGlCQUFELGFBQUNBLGlCQUFELGdEQUFDQSxpQkFBaUIsQ0FBRUUsSUFBcEIsb0ZBQUMsc0JBQTBCLENBQTFCLENBQUQsMkRBQUMsdUJBQThCQyxJQUE5QixFQUFoQjtBQUNBLE1BQU1DLGNBQWMsR0FBR0wseUVBQWlCLENBQUNWLEtBQUQsRUFBUUssSUFBUixDQUF4QztBQUNBSixTQUFPLENBQUNDLEdBQVIsQ0FBWWEsY0FBWjtBQUNBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSxlQUNHSCxTQUFTLGdCQUNSLHFFQUFDLFVBQUQ7QUFBWSxTQUFHLEVBQUVBLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFFSTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFEsZ0JBR1IscUVBQUMsVUFBRDtBQUFZLGVBQVMsRUFBQyxXQUF0QjtBQUFBLGdCQUFtQ0QsY0FBYyxDQUFDLENBQUQ7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBTUU7QUFBQSxnQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0FqQlFqQixhO1VBRVFLLHNFLEVBQ1dHLDRFOzs7S0FIbkJSLGE7QUFtQk1BLDRFQUFmO0FBR0EsSUFBTW1CLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ2pDQyxXQUFTLEVBQUU7QUFEc0IsQ0FBakIsQ0FBSCxtQkFBZjtNQUFNSixTO0FBR04sSUFBTUssVUFBVSxHQUFHSixpRUFBTSxDQUFDSyx3REFBRCxDQUFULG9CQUFoQjtNQUFNRCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxMzg0MzM3ZDlkMTU0NTdkMzIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCc7XHJcbiBcclxuZnVuY3Rpb24gQ2hhdENvbXBvbmVudCh7IGlkLCB1c2VycyB9KSB7XHJcbiAgY29uc29sZS5sb2codXNlcnMpO1xyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gIGNvbnN0IFtyZWNpcGllbnRTbmFwc2hvdF09dXNlQ29sbGVjdGlvbihkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikud2hlcmUoXCJlbWFpbFwiLFwiPT1cIiAsIGdldFJlY2lwaWVudEVtYWlsKHVzZXJzLCB1c2VyKSkpXHJcbiAgY29uc3QgcmVjaXBpZW50PXJlY2lwaWVudFNuYXBzaG90Py5kb2NzPy5bMF0/LmRhdGEoKVxyXG4gIGNvbnN0IHJlY2lwaWVudEVtYWlsID0gZ2V0UmVjaXBpZW50RW1haWwodXNlcnMsIHVzZXIpXHJcbiAgY29uc29sZS5sb2cocmVjaXBpZW50RW1haWwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICB7cmVjaXBpZW50ID8gKFxyXG4gICAgICAgIDxVc2VyQXZhdGFyIHNyYz17cmVjaXBpZW50Py5waG90b1VSTH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8VXNlckF2YXRhciBjbGFzc05hbWU9XCJtLTEgbXItMiBcIj57cmVjaXBpZW50RW1haWxbMF19PC9Vc2VyQXZhdGFyPlxyXG4gICAgICApfVxyXG4gICAgICA8cD57cmVjaXBpZW50RW1haWx9PC9wPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbXBvbmVudFxyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogXCJmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBwLTQgYnJlYWstd29yZHMgaG92ZXI6YmctZ3JheS0zMDBcIixcclxufSlgYDtcclxuY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpYGA7Il0sInNvdXJjZVJvb3QiOiIifQ==