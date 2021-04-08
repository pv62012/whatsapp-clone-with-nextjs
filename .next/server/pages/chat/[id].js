module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/chat/[id].js");
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

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\ChatComponent.js";










function ChatComponent({
  id,
  users
}) {
  var _recipientSnapshot$do, _recipientSnapshot$do2;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  console.log(users);
  const [user] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]);
  const [recipientSnapshot] = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__["useCollection"])(_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection("users").where("email", "==", Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_8__["default"])(users, user)));
  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  const recipientEmail = Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_8__["default"])(users, user);
  console.log(recipientEmail);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    onClick: enterChat,
    children: [recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserAvatar, {
      src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL
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
})``;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"])``;

/***/ }),

/***/ "./components/ChatScreen.js":
/*!**********************************!*\
  !*** ./components/ChatScreen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ "react-firebase-hooks/auth");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AttachFile */ "@material-ui/icons/AttachFile");
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\ChatScreen.js";









function ChatScreen({
  chat,
  messages
}) {
  const [user] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderInformation, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: " RecipientEmail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Last Seen"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderIcons, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ChatScreen);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "m-2"
})``;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "position-sticky bg-white z-100 top-0 flex p-2 h-16 items-center border-b-2 border-gray-200"
})``;
const HeaderInformation = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "m-2 flex-1"
})``;
const HeaderIcons = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({})``;

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

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Sidebar.js";













function Sidebar() {
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["UserAvatar"], {
        src: user === null || user === void 0 ? void 0 : user.photoURL,
        onClick: () => _firebase__WEBPACK_IMPORTED_MODULE_11__["auth"].signOut()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["IconsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Search"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["SearchInput"], {
        placeholder: "Search in chates"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["SidebarButton"], {
      onClick: createChat,
      children: "Start new chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), chatSnapshot === null || chatSnapshot === void 0 ? void 0 : chatSnapshot.docs.map(chat => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: chat.id,
      users: chat.data().users
    }, chat.id, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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

/***/ "./pages/chat/[id].js":
/*!****************************!*\
  !*** ./pages/chat/[id].js ***!
  \****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_ChatScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ChatScreen */ "./components/ChatScreen.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/getRecipientEmail */ "./utils/getRecipientEmail.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ "react-firebase-hooks/auth");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\pages\\chat\\[id].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Chat({
  chat,
  messages
}) {
  const [user] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Chat with ", Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_7__["default"])(chat.users, user)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChatContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChatScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        chat: chat,
        messages: messages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Chat);
async function getServerSideProps(context) {
  const ref = _firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection("chats").doc(context.query.id);
  const messagesRes = await ref.collection("messages").orderBy("timestamp", "asc").get();
  const messages = messagesRes.docs.map(doc => _objectSpread({
    id: doc.id
  }, doc.data())).map(messages => _objectSpread(_objectSpread({}, messages), {}, {
    timestamp: messages.timestamp.toDate().getTime()
  })); //PREP ThE Chats

  const chatRes = await ref.get();

  const chat = _objectSpread({
    id: chatRes.id
  }, chatRes.data());

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat
    }
  };
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.attrs({
  className: "flex"
})``;
const ChatContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.attrs({
  className: "flex-1 overflow-scroll h-screen"
})``;

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
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div``;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs({
  className: "flex sticky top-0 bg-white z-1 justify-between align-middle p-4 h-20 border-b-2 border-gray-200 "
})``;
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

/***/ "@material-ui/icons/AttachFile":
/*!************************************************!*\
  !*** external "@material-ui/icons/AttachFile" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachFile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdFNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hhdC8uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1NpZGViYXJTdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0UmVjaXBpZW50RW1haWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXR0YWNoRmlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNoYXRDb21wb25lbnQiLCJpZCIsInVzZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwicmVjaXBpZW50U25hcHNob3QiLCJ1c2VDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJnZXRSZWNpcGllbnRFbWFpbCIsInJlY2lwaWVudCIsImRvY3MiLCJkYXRhIiwicmVjaXBpZW50RW1haWwiLCJlbnRlckNoYXQiLCJwdXNoIiwicGhvdG9VUkwiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIlVzZXJBdmF0YXIiLCJBdmF0YXIiLCJDaGF0U2NyZWVuIiwiY2hhdCIsIm1lc3NhZ2VzIiwiSGVhZGVyIiwiSGVhZGVySW5mb3JtYXRpb24iLCJIZWFkZXJJY29ucyIsIlNpZGViYXIiLCJ1c2VyQ2hhdFJlZiIsImVtYWlsIiwiY2hhdFNuYXBzaG90IiwiY3JlYXRlQ2hhdCIsImlucHV0IiwicHJvbXB0IiwiRW1haWxWYWxpZGF0b3IiLCJjaGF0QWxyZWFkeUV4aXN0cyIsImFkZCIsImZpbmQiLCJsZW5ndGgiLCJzaWduT3V0IiwibWFwIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiZmlyZWJhc2UiLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmVzdG9yZSIsInByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiQ2hhdCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZWYiLCJkb2MiLCJxdWVyeSIsIm1lc3NhZ2VzUmVzIiwib3JkZXJCeSIsImdldCIsInRpbWVzdGFtcCIsInRvRGF0ZSIsImdldFRpbWUiLCJjaGF0UmVzIiwicHJvcHMiLCJKU09OIiwic3RyaW5naWZ5IiwiQ2hhdENvbnRhaW5lciIsIkljb25zQ29udGFpbmVyIiwiU2VhcmNoIiwiU2VhcmNoSW5wdXQiLCJTaWRlYmFyQnV0dG9uIiwiQnV0dG9uIiwidXNlckxvZ2dlZEluIiwiZmlsdGVyIiwidXNlclRvRmlsdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCO0FBQUVDLElBQUY7QUFBTUM7QUFBTixDQUF2QixFQUFzQztBQUFBOztBQUNwQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLFNBQU8sQ0FBQ0Ms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QSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9jaGF0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NoYXQvW2lkXS5qc1wiKTtcbiIsImltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IGdldFJlY2lwaWVudEVtYWlsIGZyb20gJy4uL3V0aWxzL2dldFJlY2lwaWVudEVtYWlsJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbiBcclxuZnVuY3Rpb24gQ2hhdENvbXBvbmVudCh7IGlkLCB1c2VycyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVzZXJzKTtcclxuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcclxuICBjb25zdCBbcmVjaXBpZW50U25hcHNob3RdPXVzZUNvbGxlY3Rpb24oZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLndoZXJlKFwiZW1haWxcIixcIj09XCIgLCBnZXRSZWNpcGllbnRFbWFpbCh1c2VycywgdXNlcikpKVxyXG4gIGNvbnN0IHJlY2lwaWVudD1yZWNpcGllbnRTbmFwc2hvdD8uZG9jcz8uWzBdPy5kYXRhKClcclxuICBjb25zdCByZWNpcGllbnRFbWFpbCA9IGdldFJlY2lwaWVudEVtYWlsKHVzZXJzLCB1c2VyKVxyXG4gIGNvbnNvbGUubG9nKHJlY2lwaWVudEVtYWlsKTtcclxuICBcclxuICAgXHJcbiAgY29uc3QgZW50ZXJDaGF0ID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYC9jaGF0LyR7aWR9YCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxDb250YWluZXIgb25DbGljaz17ZW50ZXJDaGF0fSA+XHJcbiAgICAgIHtyZWNpcGllbnQgPyAoXHJcbiAgICAgICAgPFVzZXJBdmF0YXIgc3JjPXtyZWNpcGllbnQ/LnBob3RvVVJMfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxVc2VyQXZhdGFyIGNsYXNzTmFtZT1cIm0tMSBtci0yIFwiPntyZWNpcGllbnRFbWFpbFswXX08L1VzZXJBdmF0YXI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxwPntyZWNpcGllbnRFbWFpbH08L3A+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29tcG9uZW50XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiBcImZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHAtNCBicmVhay13b3JkcyBob3ZlcjpiZy1ncmF5LTMwMFwiLFxyXG59KWBgO1xyXG5jb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkKEF2YXRhcilgYDsiLCJpbXBvcnQgeyBBdmF0YXIsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0F0dGFjaEZpbGUnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiO1xyXG5mdW5jdGlvbiBDaGF0U2NyZWVuKHtjaGF0LCBtZXNzYWdlc30gKSB7XHJcbiAgICBjb25zdCBbdXNlcl09dXNlQXV0aFN0YXRlKGF1dGgpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVySW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPiBSZWNpcGllbnRFbWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBTZWVuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXJJbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJJY29ucz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF0dGFjaEZpbGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlVmVydEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvSGVhZGVySWNvbnM+XHJcbiAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRTY3JlZW5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gICAgY2xhc3NOYW1lOlwibS0yXCJcclxufSlgYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gICAgY2xhc3NOYW1lOlwicG9zaXRpb24tc3RpY2t5IGJnLXdoaXRlIHotMTAwIHRvcC0wIGZsZXggcC0yIGgtMTYgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMjAwXCJcclxufSlgYFxyXG5jb25zdCBIZWFkZXJJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG5jbGFzc05hbWU6XCJtLTIgZmxleC0xXCIgXHJcbn0pYGA7XHJcbmNvbnN0IEhlYWRlckljb25zID0gc3R5bGVkLmRpdi5hdHRycyh7fSlgYDtcclxuIiwiaW1wb3J0IHsgIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHt1c2VDb2xsZWN0aW9ufSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBVc2VyQXZhdGFyLCBJY29uc0NvbnRhaW5lciwgSGVhZGVyLCBTZWFyY2gsIFNlYXJjaElucHV0LCBTaWRlYmFyQnV0dG9uIH0gZnJvbSAnLi4vc3R5bGVzL1NpZGViYXJTdHlsZWQnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5pbXBvcnQgKiBhcyBFbWFpbFZhbGlkYXRvciBmcm9tIFwiZW1haWwtdmFsaWRhdG9yXCJcclxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgQ2hhdENvbXBvbmVudCBmcm9tICcuL0NoYXRDb21wb25lbnQnO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcblxyXG4gICAgY29uc3QgdXNlckNoYXRSZWYgPSBkYi5jb2xsZWN0aW9uKFwiY2hhdHNcIikud2hlcmUoJ3VzZXJzJywgJ2FycmF5LWNvbnRhaW5zJywgdXNlcj8uZW1haWwpXHJcbiAgY29uc3QgW2NoYXRTbmFwc2hvdF0gPSB1c2VDb2xsZWN0aW9uKHVzZXJDaGF0UmVmKTtcclxuIFxyXG5jb25zdCBjcmVhdGVDaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gcHJvbXB0KFxyXG4gICAgXCJQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzcyBmb3IgdGhlIHVzZXIgeW91IHdpc2ggdG8gY2hhdCB3aXRoXCJcclxuICApO1xyXG5cclxuICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcclxuICBpZiAoXHJcbiAgICBFbWFpbFZhbGlkYXRvci52YWxpZGF0ZShpbnB1dCkgJiZcclxuICAgICFjaGF0QWxyZWFkeUV4aXN0cyhpbnB1dCkgICYmXHJcbiAgICBpbnB1dCAhPT0gdXNlci5lbWFpbFxyXG4gICkge1xyXG4gICAgLy93ZSBuZWVkIHRvIGFkZCBjaGF0IGluIGRhdGFiYXNlXHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhdHNcIikuYWRkKHtcclxuICAgICAgdXNlcnM6IFt1c2VyLmVtYWlsLCBpbnB1dF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4gICAgY29uc3QgY2hhdEFscmVhZHlFeGlzdHMgPSAocmVjaXBpZW50RW1haWwpID0+IFxyXG4gICAgICAgISFjaGF0U25hcHNob3Q/LmRvY3MuZmluZCgoY2hhdCkgPT4gY2hhdC5kYXRhKCkudXNlcnMuZmluZCgodXNlcikgPT51c2VyPT09IHJlY2lwaWVudEVtYWlsKT8ubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgPFVzZXJBdmF0YXIgc3JjPXt1c2VyPy5waG90b1VSTH0gb25DbGljaz17KCk9PmF1dGguc2lnbk91dCgpfSAvPlxyXG4gICAgICAgICAgPEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8Q2hhdCAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBjaGF0ZXNcIi8+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoPlxyXG4gICAgICAgICAgICA8U2lkZWJhckJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVDaGF0fT5cclxuICAgICAgICAgIFN0YXJ0IG5ldyBjaGF0XHJcbiAgICAgICAgICAgIDwvU2lkZWJhckJ1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICB7LyogbGlzdCBvZiBjaGF0cyBjb250YWN0ICovfVxyXG4gICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYXRTbmFwc2hvdD8uZG9jcy5tYXAoKGNoYXQpID0+IChcclxuICAgICAgICAgICAgPENoYXRDb21wb25lbnQga2V5PXtjaGF0LmlkfSBpZD17Y2hhdC5pZH0gdXNlcnM9e2NoYXQuZGF0YSgpLnVzZXJzfS8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QUJxMkZfcHJOXzllS051T29SLWZFbURKclJfYm0tTWhRXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA5NDM5Mjk3MTUyNFwiLFxyXG4gIGFwcElkOiBcIjE6MTA5NDM5Mjk3MTUyNDp3ZWI6MzRhODQ3NzE5MDcyYTc2NjI3OTA1MVwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0xV0xIM0JKV1g4XCIsXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xyXG5jb25zdCBkYiA9IGFwcC5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5leHBvcnQge2RiLCBhdXRoLCBwcm92aWRlcn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xyXG5pbXBvcnQgQ2hhdFNjcmVlbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXRTY3JlZW4nXHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnXHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi8uLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcclxuZnVuY3Rpb24gQ2hhdCh7IGNoYXQsIG1lc3NhZ2VzIH0pIHtcclxuICAgIFxyXG4gICAgY29uc3QgW3VzZXJdPXVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5DaGF0IHdpdGggeyBnZXRSZWNpcGllbnRFbWFpbChjaGF0LnVzZXJzLCB1c2VyKX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgIDxDaGF0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENoYXRTY3JlZW4gY2hhdD17Y2hhdH0gbWVzc2FnZXM9eyBtZXNzYWdlc30vPlxyXG4gICAgICAgICAgICA8L0NoYXRDb250YWluZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcmVmID0gZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLmRvYyhjb250ZXh0LnF1ZXJ5LmlkKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlc1JlcyA9IGF3YWl0IHJlZi5jb2xsZWN0aW9uKFwibWVzc2FnZXNcIikub3JkZXJCeShcInRpbWVzdGFtcFwiLCBcImFzY1wiKS5nZXQoKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlcyA9IG1lc3NhZ2VzUmVzLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgfSkpLm1hcChtZXNzYWdlcyA9PiAoe1xyXG4gICAgICAgIC4uLm1lc3NhZ2VzLFxyXG4gICAgICAgIHRpbWVzdGFtcDogbWVzc2FnZXMudGltZXN0YW1wLnRvRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgfSkpO1xyXG5cclxuICAgIC8vUFJFUCBUaEUgQ2hhdHNcclxuICAgIGNvbnN0IGNoYXRSZXMgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbiAgICBjb25zdCBjaGF0ID0ge1xyXG4gICAgICAgIGlkOiBjaGF0UmVzLmlkLFxyXG4gICAgICAgIC4uLmNoYXRSZXMuZGF0YSgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBKU09OLnN0cmluZ2lmeShtZXNzYWdlcyksXHJcbiAgICAgICAgICAgIGNoYXQ6Y2hhdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHsgXHJcbiAgICBjbGFzc05hbWU6XCJmbGV4XCJcclxufSlgYDtcclxuY29uc3QgQ2hhdENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogXCJmbGV4LTEgb3ZlcmZsb3ctc2Nyb2xsIGgtc2NyZWVuXCIsXHJcbn0pYGA7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6XHJcbiAgICBcImZsZXggc3RpY2t5IHRvcC0wIGJnLXdoaXRlIHotMSBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tbWlkZGxlIHAtNCBoLTIwIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMjAwIFwiLFxyXG59KWBgO1xyXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpLmF0dHJzKHtcclxuICBjbGFzc05hbWU6XCIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MFwiXHJcbn0pYFxyXG4gIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cclxuXHJcbiAgLyogOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9ICovXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6MjBweDtcclxuYm9yZGVyLXJhZGl1czoycHg7XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbm91dGxpbmUtd2lkdGg6MDtcclxub3V0bGluZTpub25lO1xyXG5ib3JkZXI6bm9uZTtcclxuZmxleDoxO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU2lkZWJhckJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG5gOyIsImNvbnN0IGdldFJlY2lwaWVudEVtYWlsID0gKHVzZXJzLCB1c2VyTG9nZ2VkSW4pID0+IHtcclxuICAgXHJcbiAgIHJldHVybiB1c2Vycz8uZmlsdGVyKHVzZXJUb0ZpbHRlciA9PiB1c2VyVG9GaWx0ZXIgIT09IHVzZXJMb2dnZWRJbj8uZW1haWwpWzBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFJlY2lwaWVudEVtYWlsOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BdHRhY2hGaWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=