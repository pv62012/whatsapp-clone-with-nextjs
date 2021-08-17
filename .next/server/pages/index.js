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

/***/ "./components/ChatComponent.js":
/*!*************************************!*\
  !*** ./components/ChatComponent.js ***!
  \*************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getRecipientEmail */ "./utils/getRecipientEmail.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\verma\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\ChatComponent.js";










function ChatComponent({
  id,
  users
}) {
  var _recipientSnapshot$do, _recipientSnapshot$do2;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])(); // console.log(users);

  const [user] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]);
  const [recipientSnapshot] = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__["useCollection"])(_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection("users").where("email", "==", Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_8__["default"])(users, user)));
  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  const recipientEmail = Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_8__["default"])(users, user); // console.log(recipientEmail);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    onClick: enterChat,
    children: [recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserAvatar, {
      src: recipient === null || recipient === void 0 ? void 0 : recipient.photoUrl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserAvatar, {
      className: "m-1 mr-2 ",
      children: recipientEmail[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: recipientEmail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ChatComponent);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "flex items-center cursor-pointer p-4 break-words hover:bg-gray-300"
})`

`;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"])`
margin-right:10px;
`;

/***/ }),

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
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _ChatComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChatComponent */ "./components/ChatComponent.js");

var _jsxFileName = "C:\\Users\\verma\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Sidebar.js";













function Sidebar({
  open
}) {
  const [user] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_11__["auth"]);
  const userChatRef = _firebase__WEBPACK_IMPORTED_MODULE_11__["db"].collection("chats").where('users', 'array-contains', user === null || user === void 0 ? void 0 : user.email);
  const [chatSnapshot] = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__["useCollection"])(userChatRef);

  const createChat = () => {
    const input = prompt("Please enter an email address for the user you wish to chat with");
    if (!input) return null;

    if (email_validator__WEBPACK_IMPORTED_MODULE_9__["validate"](input) && !chatAlreadyExists(input) && input !== user.email) {
      //we need to add chat in database
      _firebase__WEBPACK_IMPORTED_MODULE_11__["db"].collection("chats").add({
        users: [user.email, input]
      });
    }
  };

  const chatAlreadyExists = recipientEmail => !!(chatSnapshot !== null && chatSnapshot !== void 0 && chatSnapshot.docs.find(chat => {
    var _chat$data$users$find;

    return ((_chat$data$users$find = chat.data().users.find(user => user === recipientEmail)) === null || _chat$data$users$find === void 0 ? void 0 : _chat$data$users$find.length) > 0;
  }));

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    className: ` ${open ? "flex" : "hidden"} flex-col md:flex md:flex-col"`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["UserAvatar"], {
        src: user === null || user === void 0 ? void 0 : user.photoURL,
        onClick: () => _firebase__WEBPACK_IMPORTED_MODULE_11__["auth"].signOut()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["IconsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Search"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["SearchInput"], {
        placeholder: "Search in chates"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["SidebarButton"], {
      onClick: createChat,
      children: "Start new chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["ChatUserList"], {
      children: chatSnapshot === null || chatSnapshot === void 0 ? void 0 : chatSnapshot.docs.map(chat => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: chat.id,
        users: chat.data().users
      }, chat.id, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

var _jsxFileName = "C:\\Users\\verma\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\pages\\index.js";


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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        open: true
      }, void 0, false, {
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
/*! exports provided: Container, Header, UserAvatar, IconsContainer, Search, SearchInput, SidebarButton, ChatUserList */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUserList", function() { return ChatUserList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
border-right:1px solid whitesmoke;
height:100vh;
min-width:300px;
max-width:350px;
overflow-y:hidden;

`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs({
  className: "flex flex-1 sticky top-0 bg-white z-50 align-middle p-4 h-16 border-b-2 border-gray-200 "
})`
display:flex;
width:100%;
justify-content:space-between;
`;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"]).attrs({
  className: " cursor-pointer hover:opacity-80"
})`
  /* cursor: pointer; */

  /* :hover {
    opacity: 0.8;
  } */
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
const ChatUserList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
height:100%;
overflow-y:scroll;
`;

/***/ }),

/***/ "./utils/getRecipientEmail.js":
/*!************************************!*\
  !*** ./utils/getRecipientEmail.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getRecipientEmail = (users, userLoggedIn) => {
  return users === null || users === void 0 ? void 0 : users.filter(userToFilter => userToFilter !== (userLoggedIn === null || userLoggedIn === void 0 ? void 0 : userLoggedIn.email))[0];
};

/* harmony default export */ __webpack_exports__["default"] = (getRecipientEmail);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2lkZWJhclN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNoYXRDb21wb25lbnQiLCJpZCIsInVzZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJyZWNpcGllbnRTbmFwc2hvdCIsInVzZUNvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImdldFJlY2lwaWVudEVtYWlsIiwicmVjaXBpZW50IiwiZG9jcyIsImRhdGEiLCJyZWNpcGllbnRFbWFpbCIsImVudGVyQ2hhdCIsInB1c2giLCJwaG90b1VybCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVXNlckF2YXRhciIsIkF2YXRhciIsIlNpZGViYXIiLCJvcGVuIiwidXNlckNoYXRSZWYiLCJlbWFpbCIsImNoYXRTbmFwc2hvdCIsImNyZWF0ZUNoYXQiLCJpbnB1dCIsInByb21wdCIsIkVtYWlsVmFsaWRhdG9yIiwiY2hhdEFscmVhZHlFeGlzdHMiLCJhZGQiLCJmaW5kIiwiY2hhdCIsImxlbmd0aCIsInBob3RvVVJMIiwic2lnbk91dCIsIm1hcCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImZpcmViYXNlIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJmaXJlc3RvcmUiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIkhvbWUiLCJIZWFkZXIiLCJJY29uc0NvbnRhaW5lciIsIlNlYXJjaCIsIlNlYXJjaElucHV0IiwiU2lkZWJhckJ1dHRvbiIsIkJ1dHRvbiIsIkNoYXRVc2VyTGlzdCIsInVzZXJMb2dnZWRJbiIsImZpbHRlciIsInVzZXJUb0ZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7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UixLQUF5QjtBQUVoRCxTQUFPbEUsS0FBUCxhQUFPQSxLQUFQLHVCQUFPQSxLQUFLLENBQUVtRSxNQUFQLENBQWNDLFlBQVksSUFBSUEsWUFBWSxNQUFLRixZQUFMLGFBQUtBLFlBQUwsdUJBQUtBLFlBQVksQ0FBRXJDLEtBQW5CLENBQTFDLEVBQW9FLENBQXBFLENBQVA7QUFDRixDQUhEOztBQUtlbEIsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUNMQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4gXHJcbmZ1bmN0aW9uIENoYXRDb21wb25lbnQoeyBpZCwgdXNlcnMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyh1c2Vycyk7XHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpXHJcbiAgY29uc3QgW3JlY2lwaWVudFNuYXBzaG90XT11c2VDb2xsZWN0aW9uKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS53aGVyZShcImVtYWlsXCIsXCI9PVwiICwgZ2V0UmVjaXBpZW50RW1haWwodXNlcnMsIHVzZXIpKSlcclxuICBjb25zdCByZWNpcGllbnQ9cmVjaXBpZW50U25hcHNob3Q/LmRvY3M/LlswXT8uZGF0YSgpXHJcbiAgY29uc3QgcmVjaXBpZW50RW1haWwgPSBnZXRSZWNpcGllbnRFbWFpbCh1c2VycywgdXNlcilcclxuICAvLyBjb25zb2xlLmxvZyhyZWNpcGllbnRFbWFpbCk7XHJcbiAgXHJcbiAgIFxyXG4gIGNvbnN0IGVudGVyQ2hhdCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvY2hhdC8ke2lkfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8Q29udGFpbmVyIG9uQ2xpY2s9e2VudGVyQ2hhdH0gPlxyXG4gICAgICB7cmVjaXBpZW50ID8gKFxyXG4gICAgICAgIDxVc2VyQXZhdGFyIHNyYz17cmVjaXBpZW50Py5waG90b1VybH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8VXNlckF2YXRhciBjbGFzc05hbWU9XCJtLTEgbXItMiBcIj57cmVjaXBpZW50RW1haWxbMF19PC9Vc2VyQXZhdGFyPlxyXG4gICAgICApfVxyXG4gICAgICA8cD57cmVjaXBpZW50RW1haWx9PC9wPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbXBvbmVudFxyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogXCJmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBwLTQgYnJlYWstd29yZHMgaG92ZXI6YmctZ3JheS0zMDBcIixcclxufSlgXHJcblxyXG5gO1xyXG5jb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkKEF2YXRhcilgXHJcbm1hcmdpbi1yaWdodDoxMHB4O1xyXG5gOyIsImltcG9ydCB7ICBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7dXNlQ29sbGVjdGlvbn0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIFVzZXJBdmF0YXIsXHJcbiAgSWNvbnNDb250YWluZXIsXHJcbiAgSGVhZGVyLFxyXG4gIFNlYXJjaCxcclxuICBTZWFyY2hJbnB1dCxcclxuICBTaWRlYmFyQnV0dG9uLFxyXG4gIENoYXRVc2VyTGlzdCxcclxufSBmcm9tIFwiLi4vc3R5bGVzL1NpZGViYXJTdHlsZWRcIjtcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcclxuaW1wb3J0ICogYXMgRW1haWxWYWxpZGF0b3IgZnJvbSBcImVtYWlsLXZhbGlkYXRvclwiXHJcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IENoYXRDb21wb25lbnQgZnJvbSAnLi9DaGF0Q29tcG9uZW50JztcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoe29wZW59KSB7XHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJDaGF0UmVmID0gZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLndoZXJlKCd1c2VycycsICdhcnJheS1jb250YWlucycsIHVzZXI/LmVtYWlsKVxyXG4gIGNvbnN0IFtjaGF0U25hcHNob3RdID0gdXNlQ29sbGVjdGlvbih1c2VyQ2hhdFJlZik7XHJcbiBcclxuY29uc3QgY3JlYXRlQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBpbnB1dCA9IHByb21wdChcclxuICAgIFwiUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MgZm9yIHRoZSB1c2VyIHlvdSB3aXNoIHRvIGNoYXQgd2l0aFwiXHJcbiAgKTtcclxuXHJcbiAgaWYgKCFpbnB1dCkgcmV0dXJuIG51bGw7XHJcbiAgaWYgKFxyXG4gICAgRW1haWxWYWxpZGF0b3IudmFsaWRhdGUoaW5wdXQpICYmXHJcbiAgICAhY2hhdEFscmVhZHlFeGlzdHMoaW5wdXQpICAmJlxyXG4gICAgaW5wdXQgIT09IHVzZXIuZW1haWxcclxuICApIHtcclxuICAgIC8vd2UgbmVlZCB0byBhZGQgY2hhdCBpbiBkYXRhYmFzZVxyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLmFkZCh7XHJcbiAgICAgIHVzZXJzOiBbdXNlci5lbWFpbCwgaW5wdXRdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuICAgIGNvbnN0IGNoYXRBbHJlYWR5RXhpc3RzID0gKHJlY2lwaWVudEVtYWlsKSA9PiBcclxuICAgICAgICEhY2hhdFNuYXBzaG90Py5kb2NzLmZpbmQoKGNoYXQpID0+IGNoYXQuZGF0YSgpLnVzZXJzLmZpbmQoKHVzZXIpID0+dXNlcj09PSByZWNpcGllbnRFbWFpbCk/Lmxlbmd0aCA+IDApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtgICR7b3Blbj9cImZsZXhcIjpcImhpZGRlblwiIH0gZmxleC1jb2wgbWQ6ZmxleCBtZDpmbGV4LWNvbFwiYH0+XHJcbiAgICAgICAgey8qIHtjb25zb2xlLmxvZyh1c2VyPy5waG90b1VSTCl9ICovfVxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8VXNlckF2YXRhciBzcmM9e3VzZXI/LnBob3RvVVJMfSBvbkNsaWNrPXsoKSA9PiBhdXRoLnNpZ25PdXQoKX0gLz5cclxuICAgICAgICAgIDxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPENoYXQgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIDxTZWFyY2g+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgPFNlYXJjaElucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGNoYXRlc1wiIC8+XHJcbiAgICAgICAgPC9TZWFyY2g+XHJcbiAgICAgICAgPFNpZGViYXJCdXR0b24gb25DbGljaz17Y3JlYXRlQ2hhdH0+U3RhcnQgbmV3IGNoYXQ8L1NpZGViYXJCdXR0b24+XHJcblxyXG4gICAgICAgIHsvKiBsaXN0IG9mIGNoYXRzIGNvbnRhY3QgKi99XHJcbiAgICAgICAgPENoYXRVc2VyTGlzdD5cclxuICAgICAgICAgIHtjaGF0U25hcHNob3Q/LmRvY3MubWFwKChjaGF0KSA9PiAoXHJcbiAgICAgICAgICAgIDxDaGF0Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAga2V5PXtjaGF0LmlkfVxyXG4gICAgICAgICAgICAgIGlkPXtjaGF0LmlkfVxyXG4gICAgICAgICAgICAgIHVzZXJzPXtjaGF0LmRhdGEoKS51c2Vyc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2hhdFVzZXJMaXN0PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBQnEyRl9wck5fOWVLTnVPb1ItZkVtREpyUl9ibS1NaFFcIixcclxuICBhdXRoRG9tYWluOiBcIndoYXRzYXBwLW5leHQtN2M2MDEuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcIndoYXRzYXBwLW5leHQtN2M2MDFcIixcclxuICBzdG9yYWdlQnVja2V0OiBcIndoYXRzYXBwLW5leHQtN2M2MDEuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDk0MzkyOTcxNTI0XCIsXHJcbiAgYXBwSWQ6IFwiMToxMDk0MzkyOTcxNTI0OndlYjozNGE4NDc3MTkwNzJhNzY2Mjc5MDUxXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTFXTEgzQkpXWDhcIixcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZmlyZWJhc2UuYXBwKCk7XHJcbmNvbnN0IGRiID0gYXBwLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbmV4cG9ydCB7ZGIsIGF1dGgsIHByb3ZpZGVyfSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPldoYXRzQXBwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4+XHJcbiAgIFxyXG4gICAgICAgICA8U2lkZWJhciBvcGVuPXt0cnVlfS8+XHJcbiAgICAgICA8L21haW4+XHJcbiAgICBcclxuICAgICAgPGZvb3RlciA+XHJcbiAgXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG5oZWlnaHQ6MTAwdmg7XHJcbm1pbi13aWR0aDozMDBweDtcclxubWF4LXdpZHRoOjM1MHB4O1xyXG5vdmVyZmxvdy15OmhpZGRlbjtcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6XHJcbiAgICBcImZsZXggZmxleC0xIHN0aWNreSB0b3AtMCBiZy13aGl0ZSB6LTUwIGFsaWduLW1pZGRsZSBwLTQgaC0xNiBib3JkZXItYi0yIGJvcmRlci1ncmF5LTIwMCBcIixcclxufSlgXHJcbmRpc3BsYXk6ZmxleDtcclxud2lkdGg6MTAwJTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkKEF2YXRhcikuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTpcIiBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwXCJcclxufSlgXHJcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xyXG5cclxuICAvKiA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2ggPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzoyMHB4O1xyXG5ib3JkZXItcmFkaXVzOjJweDtcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxub3V0bGluZS13aWR0aDowO1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5mbGV4OjE7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDaGF0VXNlckxpc3QgPSBzdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTAwJTtcclxub3ZlcmZsb3cteTpzY3JvbGw7XHJcbmA7IiwiY29uc3QgZ2V0UmVjaXBpZW50RW1haWwgPSAodXNlcnMsIHVzZXJMb2dnZWRJbikgPT4ge1xyXG4gICBcclxuICAgcmV0dXJuIHVzZXJzPy5maWx0ZXIodXNlclRvRmlsdGVyID0+IHVzZXJUb0ZpbHRlciAhPT0gdXNlckxvZ2dlZEluPy5lbWFpbClbMF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmVjaXBpZW50RW1haWw7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==