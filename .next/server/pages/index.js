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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ "react-firebase-hooks/auth");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "react-firebase-hooks/firestore");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Chat */ "@material-ui/icons/Chat");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/SidebarStyled */ "./styles/SidebarStyled.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! email-validator */ "email-validator");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase */ "./firebase.js");

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Sidebar.js";











function Sidebar() {
  const {
    user
  } = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_10__["auth"]);
  const userChatRef = _firebase__WEBPACK_IMPORTED_MODULE_10__["db"].collection('chats').where('users', 'array-contains', user.email);
  const {
    chatSnapshot
  } = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__["useCollection"])(userChatRef);

  const createChat = () => {
    const input = prompt("Please enter an email address for the user you wish to chat with");
    if (!input) return null;

    if (email_validator__WEBPACK_IMPORTED_MODULE_9__["validate"](input) && !chatAlreadyExists(input) && input !== (user === null || user === void 0 ? void 0 : user.email)) {
      //we need to add chat in database
      _firebase__WEBPACK_IMPORTED_MODULE_10__["db"].collection("chats").add({
        users: [user === null || user === void 0 ? void 0 : user.email, input]
      });
    }
  };

  const chatAlreadyExists = recipientEmail => !!(chatSnapshot !== null && chatSnapshot !== void 0 && chatSnapshot.docs.find(chat => {
    var _chat$data$users$find;

    return ((_chat$data$users$find = chat.data().users.find(user => recipientEmail)) === null || _chat$data$users$find === void 0 ? void 0 : _chat$data$users$find.length) > 0;
  }));

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["UserAvatar"], {
        onClick: _firebase__WEBPACK_IMPORTED_MODULE_10__["auth"].signOut()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["IconsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Search"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["SearchInput"], {
        placeholder: "Search in chates"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["SidebarButton"], {
      onClick: createChat,
      children: "Start new chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\pages\\index.js";


function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "WhatsApp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 10
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/SidebarStyled.js":
/*!*********************************!*\
  !*** ./styles/SidebarStyled.js ***!
  \*********************************/
/*! exports provided: Container, Header, UserAvatar, IconsContainer, Search, SearchInput, SidebarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsContainer", function() { return IconsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return SearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarButton", function() { return SidebarButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div``;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"])`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div``;
const Search = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
display:flex;
align-items:center;
padding:20px;
border-radius:2px;

`;
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
outline-width:0;
outline:none;
border:none;
flex:1;
`;
const SidebarButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"])`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/Chat":
/*!******************************************!*\
  !*** external "@material-ui/icons/Chat" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "email-validator":
/*!**********************************!*\
  !*** external "email-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("email-validator");

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

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-firebase-hooks/firestore");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9TaWRlYmFyU3R5bGVkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWwtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJ1c2VyIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsInVzZXJDaGF0UmVmIiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJlbWFpbCIsImNoYXRTbmFwc2hvdCIsInVzZUNvbGxlY3Rpb24iLCJjcmVhdGVDaGF0IiwiaW5wdXQiLCJwcm9tcHQiLCJFbWFpbFZhbGlkYXRvciIsImNoYXRBbHJlYWR5RXhpc3RzIiwiYWRkIiwidXNlcnMiLCJyZWNpcGllbnRFbWFpbCIsImRvY3MiLCJmaW5kIiwiY2hhdCIsImRhdGEiLCJsZW5ndGgiLCJzaWduT3V0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiZmlyZWJhc2UiLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmVzdG9yZSIsInByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiSG9tZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsIlVzZXJBdmF0YXIiLCJBdmF0YXIiLCJJY29uc0NvbnRhaW5lciIsIlNlYXJjaCIsIlNlYXJjaElucHV0IiwiU2lkZWJhckJ1dHRvbiIsIkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7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RUFBN0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhPO0FBWUEsTUFBTUUsVUFBVSxHQUFHSCx3REFBTSxDQUFDSSx3REFBRCxDQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PO0FBUUEsTUFBTUMsY0FBYyxHQUFHTCx3REFBTSxDQUFDQyxHQUFJLEVBQWxDO0FBRUEsTUFBTUssTUFBTSxHQUFHTix3REFBTSxDQUFDQyxHQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PO0FBT0EsTUFBTU0sV0FBVyxHQUFHUCx3REFBTSxDQUFDOUIsS0FBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTE87QUFNQSxNQUFNc0MsYUFBYSxHQUFHUix3REFBTSxDQUFDUyx3REFBRCxDQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLENBSk8sQzs7Ozs7Ozs7Ozs7QUN2Q1AsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHt1c2VDb2xsZWN0aW9ufSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBVc2VyQXZhdGFyLCBJY29uc0NvbnRhaW5lciwgSGVhZGVyLCBTZWFyY2gsIFNlYXJjaElucHV0LCBTaWRlYmFyQnV0dG9uIH0gZnJvbSAnLi4vc3R5bGVzL1NpZGViYXJTdHlsZWQnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5pbXBvcnQgKiBhcyBFbWFpbFZhbGlkYXRvciBmcm9tIFwiZW1haWwtdmFsaWRhdG9yXCJcclxuXHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICAgIGNvbnN0IHVzZXJDaGF0UmVmID0gZGIuY29sbGVjdGlvbignY2hhdHMnKS53aGVyZSgndXNlcnMnLCAnYXJyYXktY29udGFpbnMnLCB1c2VyLmVtYWlsKTtcclxuICAgIGNvbnN0IHsgY2hhdFNuYXBzaG90fSA9IHVzZUNvbGxlY3Rpb24odXNlckNoYXRSZWYpO1xyXG5jb25zdCBjcmVhdGVDaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gcHJvbXB0KFxyXG4gICAgXCJQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzcyBmb3IgdGhlIHVzZXIgeW91IHdpc2ggdG8gY2hhdCB3aXRoXCJcclxuICApO1xyXG5cclxuICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcclxuICBpZiAoRW1haWxWYWxpZGF0b3IudmFsaWRhdGUoaW5wdXQpJiYgIWNoYXRBbHJlYWR5RXhpc3RzKGlucHV0KSAmJiBpbnB1dCE9PXVzZXI/LmVtYWlsKSB7XHJcbiAgICAvL3dlIG5lZWQgdG8gYWRkIGNoYXQgaW4gZGF0YWJhc2VcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5hZGQoe1xyXG4gICAgICB1c2VyczogW3VzZXI/LmVtYWlsLCBpbnB1dF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4gICAgY29uc3QgY2hhdEFscmVhZHlFeGlzdHMgPSAocmVjaXBpZW50RW1haWwpID0+IFxyXG4gICAgICAgISFjaGF0U25hcHNob3Q/LmRvY3MuZmluZCgoY2hhdCkgPT4gY2hhdC5kYXRhKCkudXNlcnMuZmluZCgodXNlcikgPT4gcmVjaXBpZW50RW1haWwpPy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8VXNlckF2YXRhciBvbkNsaWNrPXthdXRoLnNpZ25PdXQoKX0gLz5cclxuICAgICAgICAgIDxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPENoYXQgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPFNlYXJjaD5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gY2hhdGVzXCIvPlxyXG4gICAgICAgICAgICA8L1NlYXJjaD5cclxuICAgICAgICAgICAgPFNpZGViYXJCdXR0b24gb25DbGljaz17Y3JlYXRlQ2hhdH0+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBuZXcgY2hhdFxyXG4gICAgICAgICAgICA8L1NpZGViYXJCdXR0b24+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUFCcTJGX3ByTl85ZUtOdU9vUi1mRW1ESnJSX2JtLU1oUVwiLFxyXG4gIGF1dGhEb21haW46IFwid2hhdHNhcHAtbmV4dC03YzYwMS5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwid2hhdHNhcHAtbmV4dC03YzYwMVwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwid2hhdHNhcHAtbmV4dC03YzYwMS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwOTQzOTI5NzE1MjRcIixcclxuICBhcHBJZDogXCIxOjEwOTQzOTI5NzE1MjQ6d2ViOjM0YTg0NzcxOTA3MmE3NjYyNzkwNTFcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctMVdMSDNCSldYOFwiLFxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBmaXJlYmFzZS5hcHAoKTtcclxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBhcHAuYXV0aCgpO1xyXG5jb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuZXhwb3J0IHtkYiwgYXV0aCwgcHJvdmlkZXJ9IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldoYXRzQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICBcbiAgICAgICAgIDxTaWRlYmFyLz5cbiAgICAgICA8L21haW4+XG4gICAgXG4gICAgICA8Zm9vdGVyID5cbiAgXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpYFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6MjBweDtcclxuYm9yZGVyLXJhZGl1czoycHg7XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbm91dGxpbmUtd2lkdGg6MDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuZmxleDoxO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU2lkZWJhckJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG5gOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=