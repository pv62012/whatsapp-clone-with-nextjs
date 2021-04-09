webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/Login.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "./pages/login.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]),
      _useAuthState2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useAuthState, 2),
      user = _useAuthState2[0],
      loading = _useAuthState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    if (user) {
      _firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("users").doc(user.uid).set({
        email: user.email,
        lastSeen: firebase__WEBPACK_IMPORTED_MODULE_8__["default"].firestore.FieldValue.serverTimestamp(),
        photoUrl: user.photoURL
      }, {
        merger: true
      });
    }

    return function () {};
  }, [user]);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 22
  }, this);
  if (!user) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_login__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 20
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, this);
}

_s(MyApp, "CDxTn76UQ/Bz2q+GhFWw/SAktuI=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"]];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./firebase.js");


var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\pages\\login.js";

function _templateObject3() {
  var data = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nwidth:200px;\nheight:200px;\nmargin-bottom:20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\npadding:80px;\ndisplay:flex;\nflex-direction:column;\nbackground-color:white;\nbox-shadow:1px 2px 10px rgba(0,0,0,0.7)\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay:grid;\nplace-items:center;\nheight:100vh;\nbackground-color:whitesmoke;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var signin = function signin() {
  _firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_6__["provider"])["catch"](alert);
};

function Login() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LoginContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Logo, {
          src: "/images/icon1.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          variant: "outlined",
          onClick: signin,
          children: "Sign in With Google"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c2 = Container;
var LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
_c3 = LoginContainer;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject3());
_c4 = Logo;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Login");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "LoginContainer");
$RefreshReg$(_c4, "Logo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwidXNlciIsImxvYWRpbmciLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJlbWFpbCIsImxhc3RTZWVuIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwicGhvdG9VcmwiLCJwaG90b1VSTCIsIm1lcmdlciIsInNpZ25pbiIsInNpZ25JbldpdGhQb3B1cCIsInByb3ZpZGVyIiwiYWxlcnQiLCJMb2dpbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkxvZ2luQ29udGFpbmVyIiwiTG9nbyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsc0JBQ2ZDLDhFQUFZLENBQUNDLDhDQUFELENBREc7QUFBQTtBQUFBLE1BQ2hDQyxJQURnQztBQUFBLE1BQzFCQyxPQUQwQjs7QUFHdkNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLElBQUosRUFBVTtBQUNWRyxrREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJMLElBQUksQ0FBQ00sR0FBaEMsRUFBcUNDLEdBQXJDLENBQXlDO0FBQ3ZDQyxhQUFLLEVBQUVSLElBQUksQ0FBQ1EsS0FEMkI7QUFFdkNDLGdCQUFRLEVBQUVDLGdEQUFRLENBQUNDLFNBQVQsQ0FBbUJDLFVBQW5CLENBQThCQyxlQUE5QixFQUY2QjtBQUd2Q0MsZ0JBQVEsRUFBQ2QsSUFBSSxDQUFDZTtBQUh5QixPQUF6QyxFQUlFO0FBQUNDLGNBQU0sRUFBQztBQUFSLE9BSkY7QUFLQzs7QUFFRCxXQUFPLFlBQU0sQ0FFWixDQUZEO0FBR0QsR0FaUSxFQVlOLENBQUNoQixJQUFELENBWk0sQ0FBVDtBQWFBLE1BQUdDLE9BQUgsRUFBWSxvQkFBTyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWixNQUFHLENBQUNELElBQUosRUFBVSxvQkFBTyxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDVixzQkFBTyxxRUFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQW5CUUYsSztVQUNpQkcsc0U7OztLQURqQkgsSztBQXFCTUEsb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNc0IsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQmxCLGdEQUFJLENBQUNtQixlQUFMLENBQXFCQyxrREFBckIsV0FBcUNDLEtBQXJDO0FBQ0gsQ0FGRDs7QUFJQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2Isc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxTQUFEO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJLHFFQUFDLGNBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxJQUFEO0FBQU0sYUFBRyxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLHdEQUFEO0FBQVEsaUJBQU8sRUFBQyxVQUFoQjtBQUEyQixpQkFBTyxFQUFFSixNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7S0FkUUksSztBQWdCTUEsb0VBQWY7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7TUFBTUYsUztBQU9OLElBQU1HLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBcEI7TUFBTUMsYztBQVNOLElBQU1DLElBQUksR0FBR0gseURBQU0sQ0FBQ0ksR0FBVixvQkFBVjtNQUFNRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDMxZmIwYWE0NGVkOTMxYWNjMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZyc7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcikge1xuICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlci51aWQpLnNldCh7XG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGxhc3RTZWVuOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgIHBob3RvVXJsOnVzZXIucGhvdG9VUkxcbiAgICB9LHttZXJnZXI6dHJ1ZX0pOyAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBcbiAgICB9XG4gIH0sIFt1c2VyXSlcbiAgaWYobG9hZGluZykgcmV0dXJuIDxMb2FkaW5nLz5cbiAgaWYoIXVzZXIpIHJldHVybiA8TG9naW4vPlxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi9maXJlYmFzZSdcclxuXHJcbmNvbnN0IHNpZ25pbiA9ICgpID0+IHtcclxuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKS5jYXRjaChhbGVydClcclxufVxyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPExvZ2luQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIHNyYz1cIi9pbWFnZXMvaWNvbjEuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e3NpZ25pbiB9PlNpZ24gaW4gV2l0aCBHb29nbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTG9naW5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpncmlkO1xyXG5wbGFjZS1pdGVtczpjZW50ZXI7XHJcbmhlaWdodDoxMDB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG5cclxuYDtcclxuY29uc3QgTG9naW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjgwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3gtc2hhZG93OjFweCAycHggMTBweCByZ2JhKDAsMCwwLDAuNylcclxuYDtcclxuXHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmltZ2Bcclxud2lkdGg6MjAwcHg7XHJcbmhlaWdodDoyMDBweDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=