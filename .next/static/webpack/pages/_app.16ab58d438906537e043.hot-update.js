webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
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

/***/ }),

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
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login */ "./pages/Login.js");
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
  if (!user) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
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
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsic2lnbmluIiwiYXV0aCIsInNpZ25JbldpdGhQb3B1cCIsInByb3ZpZGVyIiwiYWxlcnQiLCJMb2dpbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkxvZ2luQ29udGFpbmVyIiwiTG9nbyIsImltZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlQXV0aFN0YXRlIiwidXNlciIsImxvYWRpbmciLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJlbWFpbCIsImxhc3RTZWVuIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwicGhvdG9VcmwiLCJwaG90b1VSTCIsIm1lcmdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQkMsZ0RBQUksQ0FBQ0MsZUFBTCxDQUFxQkMsa0RBQXJCLFdBQXFDQyxLQUFyQztBQUNILENBRkQ7O0FBSUEsU0FBU0MsS0FBVCxHQUFpQjtBQUNiLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsU0FBRDtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSxxRUFBQyxjQUFEO0FBQUEsZ0NBQ0kscUVBQUMsSUFBRDtBQUFNLGFBQUcsRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyx3REFBRDtBQUFRLGlCQUFPLEVBQUMsVUFBaEI7QUFBMkIsaUJBQU8sRUFBRUwsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O0tBZFFLLEs7QUFnQk1BLG9FQUFmO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO01BQU1GLFM7QUFPTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQXBCO01BQU1DLGM7QUFTTixJQUFNQyxJQUFJLEdBQUdILHlEQUFNLENBQUNJLEdBQVYsb0JBQVY7TUFBTUQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNFLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLHNCQUNmQyw4RUFBWSxDQUFDZCw4Q0FBRCxDQURHO0FBQUE7QUFBQSxNQUNoQ2UsSUFEZ0M7QUFBQSxNQUMxQkMsT0FEMEI7O0FBR3ZDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixJQUFKLEVBQVU7QUFDVkcsa0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCTCxJQUFJLENBQUNNLEdBQWhDLEVBQXFDQyxHQUFyQyxDQUF5QztBQUN2Q0MsYUFBSyxFQUFFUixJQUFJLENBQUNRLEtBRDJCO0FBRXZDQyxnQkFBUSxFQUFFQyxnREFBUSxDQUFDQyxTQUFULENBQW1CQyxVQUFuQixDQUE4QkMsZUFBOUIsRUFGNkI7QUFHdkNDLGdCQUFRLEVBQUNkLElBQUksQ0FBQ2U7QUFIeUIsT0FBekMsRUFJRTtBQUFDQyxjQUFNLEVBQUM7QUFBUixPQUpGO0FBS0M7O0FBRUQsV0FBTyxZQUFNLENBRVosQ0FGRDtBQUdELEdBWlEsRUFZTixDQUFDaEIsSUFBRCxDQVpNLENBQVQ7QUFhQSxNQUFHQyxPQUFILEVBQVksb0JBQU8scUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1osTUFBRyxDQUFDRCxJQUFKLEVBQVUsb0JBQU8scUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1Ysc0JBQU8scUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FuQlFGLEs7VUFDaUJHLHNFOzs7S0FEakJILEs7QUFxQk1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTZhYjU4ZDQzODkwNjUzN2UwNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcblxyXG5jb25zdCBzaWduaW4gPSAoKSA9PiB7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikuY2F0Y2goYWxlcnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxMb2dpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyBzcmM9XCIvaW1hZ2VzL2ljb24xLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtzaWduaW4gfT5TaWduIGluIFdpdGggR29vZ2xlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ2luQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6Z3JpZDtcclxucGxhY2UtaXRlbXM6Y2VudGVyO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuXHJcbmA7XHJcbmNvbnN0IExvZ2luQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxucGFkZGluZzo4MHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzoxcHggMnB4IDEwcHggcmdiYSgwLDAsMCwwLjcpXHJcbmA7XHJcblxyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbndpZHRoOjIwMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxuYDsiLCJpbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIudWlkKS5zZXQoe1xuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBsYXN0U2VlbjogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXG4gICAgICBwaG90b1VybDp1c2VyLnBob3RvVVJMXG4gICAgfSx7bWVyZ2VyOnRydWV9KTsgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgXG4gICAgfVxuICB9LCBbdXNlcl0pXG4gIGlmKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZy8+XG4gIGlmKCF1c2VyKSByZXR1cm4gPExvZ2luLz5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=