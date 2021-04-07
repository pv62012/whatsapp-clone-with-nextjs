module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var better_react_spinkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! better-react-spinkit */ "better-react-spinkit");
/* harmony import */ var better_react_spinkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(better_react_spinkit__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Loading.js";


function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: "100vh",
      display: "grid",
      placeItems: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/images/icon1.jpg",
        alt: "whatsapp",
        height: 200
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(better_react_spinkit__WEBPACK_IMPORTED_MODULE_1__["WanderingCubes"], {
        style: {
          margin: "30px",
          height: "50px",
          width: "50px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: db, auth, provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider", function() { return provider; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: "AIzaSyABq2F_prN_9eKNuOoR-fEmDJrR_bm-MhQ",
  authDomain: "whatsapp-next-7c601.firebaseapp.com",
  projectId: "whatsapp-next-7c601",
  storageBucket: "whatsapp-next-7c601.appspot.com",
  messagingSenderId: "1094392971524",
  appId: "1:1094392971524:web:34a847719072a766279051",
  measurementId: "G-1WLH3BJWX8"
};
const app = !firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();


/***/ }),

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./firebase.js");

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\pages\\login.js";






const signin = () => {
  _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_5__["provider"]).catch(alert);
};

function Login() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LoginContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {
          src: "/images/icon1.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Login);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
display:grid;
place-items:center;
height:100vh;
background-color:whitesmoke;

`;
const LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
padding:80px;
display:flex;
flex-direction:column;
background-color:white;
box-shadow:1px 2px 10px rgba(0,0,0,0.7)
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img`
width:200px;
height:200px;
margin-bottom:20px;
`;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ "react-firebase-hooks/auth");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./pages/Login.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  const [user, loading] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (user) {
      _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection("users").doc(user.uid).set({
        email: user.email,
        lastSeen: firebase__WEBPACK_IMPORTED_MODULE_6___default.a.firestore.FieldValue.serverTimestamp(),
        photoUrl: user.photoURL
      }, {
        merger: true
      });
    }

    return () => {};
  }, [user]);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 22
  }, this);
  if (!user) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 20
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "better-react-spinkit":
/*!***************************************!*\
  !*** external "better-react-spinkit" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("better-react-spinkit");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiZXR0ZXItcmVhY3Qtc3BpbmtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJMb2FkaW5nIiwiaGVpZ2h0IiwiZGlzcGxheSIsInBsYWNlSXRlbXMiLCJtYXJnaW4iLCJ3aWR0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJkYiIsImZpcmVzdG9yZSIsImF1dGgiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25pbiIsInNpZ25JbldpdGhQb3B1cCIsImNhdGNoIiwiYWxlcnQiLCJMb2dpbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkxvZ2luQ29udGFpbmVyIiwiTG9nbyIsImltZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsImxvYWRpbmciLCJ1c2VBdXRoU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwic2V0IiwiZW1haWwiLCJsYXN0U2VlbiIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJwaG90b1VybCIsInBob3RvVVJMIiwibWVyZ2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFjQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBQyxPQUFSO0FBQWlCQyxhQUFPLEVBQUMsTUFBekI7QUFBaUNDLGdCQUFVLEVBQUM7QUFBNUMsS0FBWjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBSyxX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QUVBb0IseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUgsSUFBSixFQUFVO0FBQ1ZuQixrREFBRSxDQUFDdUIsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCTCxJQUFJLENBQUNNLEdBQWhDLEVBQXFDQyxHQUFyQyxDQUF5QztBQUN2Q0MsYUFBSyxFQUFFUixJQUFJLENBQUNRLEtBRDJCO0FBRXZDQyxnQkFBUSxFQUFFaEMsK0NBQVEsQ0FBQ0ssU0FBVCxDQUFtQjRCLFVBQW5CLENBQThCQyxlQUE5QixFQUY2QjtBQUd2Q0MsZ0JBQVEsRUFBQ1osSUFBSSxDQUFDYTtBQUh5QixPQUF6QyxFQUlFO0FBQUNDLGNBQU0sRUFBQztBQUFSLE9BSkY7QUFLQzs7QUFFRCxXQUFPLE1BQU0sQ0FFWixDQUZEO0FBR0QsR0FaUSxFQVlOLENBQUNkLElBQUQsQ0FaTSxDQUFUO0FBYUEsTUFBR0MsT0FBSCxFQUFZLG9CQUFPLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNaLE1BQUcsQ0FBQ0QsSUFBSixFQUFVLG9CQUFPLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNWLHNCQUFPLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRWNGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7XHJcbiAgQ2hhc2luZ0RvdHMsXHJcbiAgQ2lyY2xlLFxyXG4gIEN1YmVHcmlkLFxyXG4gIERvdWJsZUJvdW5jZSxcclxuICBGYWRpbmdDaXJjbGUsXHJcbiAgRm9sZGluZ0N1YmUsXHJcbiAgUHVsc2UsXHJcbiAgUm90YXRpbmdQbGFuZSxcclxuICBUaHJlZUJvdW5jZSxcclxuICBXYW5kZXJpbmdDdWJlcyxcclxuICBXYXZlLFxyXG59IGZyb20gXCJiZXR0ZXItcmVhY3Qtc3BpbmtpdFwiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjEwMHZoXCIsIGRpc3BsYXk6XCJncmlkXCIsIHBsYWNlSXRlbXM6XCJjZW50ZXJcIiB9fT5cclxuICAgICAgPGNlbnRlcj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbjEuanBnXCIgYWx0PVwid2hhdHNhcHBcIiBoZWlnaHQ9ezIwMH0gLz5cclxuICAgICAgICA8V2FuZGVyaW5nQ3ViZXMgc3R5bGU9e3ttYXJnaW46XCIzMHB4XCIsIGhlaWdodDpcIjUwcHhcIiAsIHdpZHRoOlwiNTBweFwiIH19IC8+XHJcbiAgICAgIDwvY2VudGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBQnEyRl9wck5fOWVLTnVPb1ItZkVtREpyUl9ibS1NaFFcIixcclxuICBhdXRoRG9tYWluOiBcIndoYXRzYXBwLW5leHQtN2M2MDEuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcIndoYXRzYXBwLW5leHQtN2M2MDFcIixcclxuICBzdG9yYWdlQnVja2V0OiBcIndoYXRzYXBwLW5leHQtN2M2MDEuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDk0MzkyOTcxNTI0XCIsXHJcbiAgYXBwSWQ6IFwiMToxMDk0MzkyOTcxNTI0OndlYjozNGE4NDc3MTkwNzJhNzY2Mjc5MDUxXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTFXTEgzQkpXWDhcIixcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZmlyZWJhc2UuYXBwKCk7XHJcbmNvbnN0IGRiID0gYXBwLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbmV4cG9ydCB7ZGIsIGF1dGgsIHByb3ZpZGVyfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcblxyXG5jb25zdCBzaWduaW4gPSAoKSA9PiB7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikuY2F0Y2goYWxlcnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxMb2dpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyBzcmM9XCIvaW1hZ2VzL2ljb24xLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtzaWduaW4gfT5TaWduIGluIFdpdGggR29vZ2xlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ2luQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6Z3JpZDtcclxucGxhY2UtaXRlbXM6Y2VudGVyO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuXHJcbmA7XHJcbmNvbnN0IExvZ2luQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxucGFkZGluZzo4MHB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm94LXNoYWRvdzoxcHggMnB4IDEwcHggcmdiYSgwLDAsMCwwLjcpXHJcbmA7XHJcblxyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbndpZHRoOjIwMHB4O1xyXG5oZWlnaHQ6MjAwcHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxuYDsiLCJpbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcikge1xuICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlci51aWQpLnNldCh7XG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGxhc3RTZWVuOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgIHBob3RvVXJsOnVzZXIucGhvdG9VUkxcbiAgICB9LHttZXJnZXI6dHJ1ZX0pOyAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBcbiAgICB9XG4gIH0sIFt1c2VyXSlcbiAgaWYobG9hZGluZykgcmV0dXJuIDxMb2FkaW5nLz5cbiAgaWYoIXVzZXIpIHJldHVybiA8TG9naW4vPlxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmV0dGVyLXJlYWN0LXNwaW5raXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=