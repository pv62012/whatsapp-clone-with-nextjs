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
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "react-firebase-hooks/firestore");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
/* harmony import */ var _material_ui_icons_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/InsertEmoticon */ "@material-ui/icons/InsertEmoticon");
/* harmony import */ var _material_ui_icons_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Mic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Mic */ "@material-ui/icons/Mic");
/* harmony import */ var _material_ui_icons_Mic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/getRecipientEmail */ "./utils/getRecipientEmail.js");
/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! timeago-react */ "timeago-react");
/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(timeago_react__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\ChatScreen.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function ChatScreen({
  chat,
  messages
}) {
  var _recipientSnapshot$do, _recipientSnapshot$do2, _recipient$lastSeen, _recipient$lastSeen2;

  const [user] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]);
  const endOfMessageRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const [messagesSnapshot] = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__["useCollection"])(_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('chats').doc(router.query.id).collection("messages").orderBy("timestamp", "asc")); //  console.log("i am a problem 1 ", messagesSnapshot);

  const [recipientSnapshot] = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__["useCollection"])(_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('users').where("email", "==", Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_14__["default"])(chat.users, user)));

  const showMessage = () => {
    //  console.log("i am a problenm2 ", messagesSnapshot);
    if (messagesSnapshot) {
      //  console.log("i am problem 3 ", messagesSnapshot);
      return messagesSnapshot.docs.map(message => {
        var _message$data, _message$data$timesta;

        // console.log(message);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Message__WEBPACK_IMPORTED_MODULE_10__["default"], {
          user: message.data().user,
          message: _objectSpread(_objectSpread({}, message.data()), {}, {
            timestamp: (_message$data = message.data()) === null || _message$data === void 0 ? void 0 : (_message$data$timesta = _message$data.timestamp) === null || _message$data$timesta === void 0 ? void 0 : _message$data$timesta.toDate().getTime()
          })
        }, message.id, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 23
        }, this);
      });
    } else {
      //  console.log(messagesSnapshot);
      console.log(messages);
      return JSON.parse(messages).map(message => {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Message__WEBPACK_IMPORTED_MODULE_10__["default"], {
          user: message.user,
          message: message
        }, message.id, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 18
        }, this);
      });
    }
  };

  const ScrollToBottom = () => {
    endOfMessageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const sendMessage = e => {
    e.preventDefault();
    _firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('users').doc(user.uid).set({
      lastSeen: firebase__WEBPACK_IMPORTED_MODULE_13___default.a.firestore.FieldValue.serverTimestamp()
    }, {
      merge: true
    });
    _firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('chats').doc(router.query.id).collection('messages').add({
      timestamp: firebase__WEBPACK_IMPORTED_MODULE_13___default.a.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL
    });
    setInput("");
    ScrollToBottom();
  };

  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  const recipientEmail = Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_14__["default"])(chat.users, user);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: [recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: recipient === null || recipient === void 0 ? void 0 : recipient.photoUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 24
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        children: [" ", recipientEmail[0], " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 63
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderInformation, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: [" ", recipientEmail]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), recipientSnapshot ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Last active:", ' ', recipient !== null && recipient !== void 0 && (_recipient$lastSeen = recipient.lastSeen) !== null && _recipient$lastSeen !== void 0 && _recipient$lastSeen.toDate() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(timeago_react__WEBPACK_IMPORTED_MODULE_15___default.a, {
            datetime: recipient === null || recipient === void 0 ? void 0 : (_recipient$lastSeen2 = recipient.lastSeen) === null || _recipient$lastSeen2 === void 0 ? void 0 : _recipient$lastSeen2.toDate()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 37
          }, this) : "Unavailable"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 30
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Loading last active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderIcons, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MessageContainer, {
      className: "h-screen p-8 bg-red-100",
      children: [showMessage(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EndOfMessage, {
        ref: endOfMessageRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
        value: input,
        onChange: e => setInput(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        disabled: !input,
        onClick: sendMessage,
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Mic__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ChatScreen);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "h-screen"
})``;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "sticky bg-white z-100 top-0 flex p-2 h-16 items-center border-b-2 border-gray-200"
})``;
const HeaderInformation = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "m-2 flex-1"
})``;
const HeaderIcons = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({})``;
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({})``;
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "flex items-center p-3 sticky bottom-0 bg-white z-50"
})``;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.input.attrs({
  className: "flex-1 outline-none border-none rounded-xl bg-gray-50 p-2 ml-4 mr-4"
})``;
const EndOfMessage = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "m-10"
})``;

/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ "react-firebase-hooks/auth");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Message.js";






function Message({
  user,
  message
}) {
  const [userLoggedIn] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]); // console.log("i am calling message ",message.message);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TypeOfMessage, {
      children: [" ", message.message, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TimeStamp, {
        children: message.timestamp ? moment__WEBPACK_IMPORTED_MODULE_5___default()(message.timestamp).format('LT') : "..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Message);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div``;
const MessageElement = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p`
width:fit-content;
padding:15px;
border-radius:8px;
margin:10px;
min-width:60px;
padding-bottom:20px;
position:relative;
text-align:right;
`;
const Sender = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MessageElement)`
background-color:#dcf0c6;
margin-left:auto;
`;
const Receiver = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;
const TimeStamp = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
color:gray;
padding:10px;
font-size:9px;
position:absolute;
bottom:0;
text-align:right;
right:0;
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
        lineNumber: 45,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["IconsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["Search"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["SearchInput"], {
        placeholder: "Search in chates"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_7__["SidebarButton"], {
      onClick: createChat,
      children: "Start new chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), chatSnapshot === null || chatSnapshot === void 0 ? void 0 : chatSnapshot.docs.map(chat => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: chat.id,
      users: chat.data().users
    }, chat.id, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChatContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChatScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        chat: chat,
        messages: messages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
  className: "flex-1 h-full"
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



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
flex:0.45;
border-right:1px solid whitesmoke;
height:100vh;
min-width:300px;
max-width:350px;
/* overflow-y:scroll; */
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs({
  className: "flex sticky top-0 bg-white z-50 justify-between align-middle p-4 h-16 border-b-2 border-gray-200 "
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

/***/ "@material-ui/icons/InsertEmoticon":
/*!****************************************************!*\
  !*** external "@material-ui/icons/InsertEmoticon" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertEmoticon");

/***/ }),

/***/ "@material-ui/icons/Mic":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Mic" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mic");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ }),

/***/ "timeago-react":
/*!********************************!*\
  !*** external "timeago-react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("timeago-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdFNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXQvLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9TaWRlYmFyU3R5bGVkLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldFJlY2lwaWVudEVtYWlsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0F0dGFjaEZpbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnNlcnRFbW90aWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWwtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGltZWFnby1yZWFjdFwiIl0sIm5hbWVzIjpbIkNoYXRDb21wb25lbnQiLCJpZCIsInVzZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJyZWNpcGllbnRTbmFwc2hvdCIsInVzZUNvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImdldFJlY2lwaWVudEVtYWlsIiwicmVjaXBpZW50IiwiZG9jcyIsImRhdGEiLCJyZWNpcGllbnRFbWFpbCIsImVudGVyQ2hhdCIsInB1c2giLCJwaG90b1VybCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVXNlckF2YXRhciIsIkF2YXRhciIsIkNoYXRTY3JlZW4iLCJjaGF0IiwibWVzc2FnZXMiLCJlbmRPZk1lc3NhZ2VSZWYiLCJ1c2VSZWYiLCJpbnB1dCIsInNldElucHV0IiwidXNlU3RhdGUiLCJtZXNzYWdlc1NuYXBzaG90IiwiZG9jIiwicXVlcnkiLCJvcmRlckJ5Iiwic2hvd01lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlIiwidGltZXN0YW1wIiwidG9EYXRlIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJTY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVpZCIsInNldCIsImxhc3RTZWVuIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwibWVyZ2UiLCJhZGQiLCJlbWFpbCIsInBob3RvVVJMIiwidGFyZ2V0IiwidmFsdWUiLCJIZWFkZXIiLCJIZWFkZXJJbmZvcm1hdGlvbiIsIkhlYWRlckljb25zIiwiTWVzc2FnZUNvbnRhaW5lciIsIklucHV0Q29udGFpbmVyIiwiSW5wdXQiLCJFbmRPZk1lc3NhZ2UiLCJNZXNzYWdlIiwidXNlckxvZ2dlZEluIiwiVHlwZU9mTWVzc2FnZSIsIlNlbmRlciIsIlJlY2VpdmVyIiwibW9tZW50IiwiZm9ybWF0IiwiTWVzc2FnZUVsZW1lbnQiLCJwIiwiVGltZVN0YW1wIiwiU2lkZWJhciIsInVzZXJDaGF0UmVmIiwiY2hhdFNuYXBzaG90IiwiY3JlYXRlQ2hhdCIsInByb21wdCIsIkVtYWlsVmFsaWRhdG9yIiwiY2hhdEFscmVhZHlFeGlzdHMiLCJmaW5kIiwibGVuZ3RoIiwic2lnbk91dCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwicHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJDaGF0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlZiIsIm1lc3NhZ2VzUmVzIiwiZ2V0IiwiY2hhdFJlcyIsInByb3BzIiwic3RyaW5naWZ5IiwiQ2hhdENvbnRhaW5lciIsIkljb25zQ29udGFpbmVyIiwiU2VhcmNoIiwiU2VhcmNoSW5wdXQiLCJTaWRlYmFyQnV0dG9uIiwiQnV0dG9uIiwiZmlsdGVyIiwidXNlclRvRmlsdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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QUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PO0FBT0EsTUFBTW9HLFdBQVcsR0FBR3JHLHdEQUFNLENBQUNXLEtBQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxPO0FBTUEsTUFBTTJGLGFBQWEsR0FBR3RHLHdEQUFNLENBQUN1Ryx3REFBRCxDQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLENBSk8sQzs7Ozs7Ozs7Ozs7O0FDekNQO0FBQUEsTUFBTWhILGlCQUFpQixHQUFHLENBQUNYLEtBQUQsRUFBUTZFLFlBQVIsS0FBeUI7QUFFaEQsU0FBTzdFLEtBQVAsYUFBT0EsS0FBUCx1QkFBT0EsS0FBSyxDQUFFNEgsTUFBUCxDQUFjQyxZQUFZLElBQUlBLFlBQVksTUFBS2hELFlBQUwsYUFBS0EsWUFBTCx1QkFBS0EsWUFBWSxDQUFFWixLQUFuQixDQUExQyxFQUFvRSxDQUFwRSxDQUFQO0FBQ0YsQ0FIRDs7QUFLZXRELGdGQUFmLEU7Ozs7Ozs7Ozs7O0FDTEEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoicGFnZXMvY2hhdC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jaGF0L1tpZF0uanNcIik7XG4iLCJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4gXHJcbmZ1bmN0aW9uIENoYXRDb21wb25lbnQoeyBpZCwgdXNlcnMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyh1c2Vycyk7XHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpXHJcbiAgY29uc3QgW3JlY2lwaWVudFNuYXBzaG90XT11c2VDb2xsZWN0aW9uKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS53aGVyZShcImVtYWlsXCIsXCI9PVwiICwgZ2V0UmVjaXBpZW50RW1haWwodXNlcnMsIHVzZXIpKSlcclxuICBjb25zdCByZWNpcGllbnQ9cmVjaXBpZW50U25hcHNob3Q/LmRvY3M/LlswXT8uZGF0YSgpXHJcbiAgY29uc3QgcmVjaXBpZW50RW1haWwgPSBnZXRSZWNpcGllbnRFbWFpbCh1c2VycywgdXNlcilcclxuICAvLyBjb25zb2xlLmxvZyhyZWNpcGllbnRFbWFpbCk7XHJcbiAgXHJcbiAgIFxyXG4gIGNvbnN0IGVudGVyQ2hhdCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvY2hhdC8ke2lkfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8Q29udGFpbmVyIG9uQ2xpY2s9e2VudGVyQ2hhdH0gPlxyXG4gICAgICB7cmVjaXBpZW50ID8gKFxyXG4gICAgICAgIDxVc2VyQXZhdGFyIHNyYz17cmVjaXBpZW50Py5waG90b1VybH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8VXNlckF2YXRhciBjbGFzc05hbWU9XCJtLTEgbXItMiBcIj57cmVjaXBpZW50RW1haWxbMF19PC9Vc2VyQXZhdGFyPlxyXG4gICAgICApfVxyXG4gICAgICA8cD57cmVjaXBpZW50RW1haWx9PC9wPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbXBvbmVudFxyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogXCJmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBwLTQgYnJlYWstd29yZHMgaG92ZXI6YmctZ3JheS0zMDBcIixcclxufSlgYDtcclxuY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpYGA7IiwiaW1wb3J0IHsgQXZhdGFyLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0F0dGFjaEZpbGUnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnXHJcbmltcG9ydCBJbnNlcnRFbW90aWNvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc2VydEVtb3RpY29uJ1xyXG5pbXBvcnQgTWljSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWljJ1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCdcclxuaW1wb3J0IFRpbWVBZ28gZnJvbSAndGltZWFnby1yZWFjdCc7XHJcbmZ1bmN0aW9uIENoYXRTY3JlZW4oeyBjaGF0LCBtZXNzYWdlcyB9KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gICAgY29uc3QgZW5kT2ZNZXNzYWdlUmVmPXVzZVJlZihudWxsKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbWVzc2FnZXNTbmFwc2hvdF09dXNlQ29sbGVjdGlvbihkYi5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyhyb3V0ZXIucXVlcnkuaWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlc1wiKS5vcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiYXNjXCIpKVxyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImkgYW0gYSBwcm9ibGVtIDEgXCIsIG1lc3NhZ2VzU25hcHNob3QpO1xyXG4gICAgY29uc3QgW3JlY2lwaWVudFNuYXBzaG90XT11c2VDb2xsZWN0aW9uKGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykud2hlcmUoXCJlbWFpbFwiLFwiPT1cIiwgZ2V0UmVjaXBpZW50RW1haWwoY2hhdC51c2VycywgdXNlcikpKVxyXG4gICAgXHJcbiAgICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJpIGFtIGEgcHJvYmxlbm0yIFwiLCBtZXNzYWdlc1NuYXBzaG90KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobWVzc2FnZXNTbmFwc2hvdCkge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImkgYW0gcHJvYmxlbSAzIFwiLCBtZXNzYWdlc1NuYXBzaG90KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlc1NuYXBzaG90LmRvY3MubWFwKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIDxNZXNzYWdlIGtleT17bWVzc2FnZS5pZH0gdXNlcj17bWVzc2FnZS5kYXRhKCkudXNlcn1cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm1lc3NhZ2UuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG1lc3NhZ2UuZGF0YSgpPy50aW1lc3RhbXA/LnRvRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKG1lc3NhZ2VzU25hcHNob3QpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShtZXNzYWdlcykubWFwKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e21lc3NhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcj17bWVzc2FnZS51c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xyXG4gICAgICAgIGVuZE9mTWVzc2FnZVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgICAgIGJsb2NrOlwic3RhcnRcIlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgICBsYXN0U2VlbjogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgfSwgeyBtZXJnZTogdHJ1ZSB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ2NoYXRzJykuZG9jKHJvdXRlci5xdWVyeS5pZCkuY29sbGVjdGlvbignbWVzc2FnZXMnKS5hZGQoe1xyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBpbnB1dCxcclxuICAgICAgICAgICAgdXNlcjogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldElucHV0KFwiXCIpO1xyXG4gICAgICAgIFNjcm9sbFRvQm90dG9tKClcclxuICAgIH1cclxuICAgIGNvbnN0IHJlY2lwaWVudD1yZWNpcGllbnRTbmFwc2hvdD8uZG9jcz8uWzBdPy5kYXRhKClcclxuICAgIGNvbnN0IHJlY2lwaWVudEVtYWlsPWdldFJlY2lwaWVudEVtYWlsKGNoYXQudXNlcnMsIHVzZXIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICB7cmVjaXBpZW50ID8gPEF2YXRhciBzcmM9e3JlY2lwaWVudD8ucGhvdG9Vcmx9IC8+IDogPEF2YXRhciA+IHtyZWNpcGllbnRFbWFpbFswXX0gPC9BdmF0YXI+fVxyXG4gICAgICAgICAgPEhlYWRlckluZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4ge3JlY2lwaWVudEVtYWlsfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNpcGllbnRTbmFwc2hvdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICggPHA+TGFzdCBhY3RpdmU6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudD8ubGFzdFNlZW4/LnRvRGF0ZSgpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZUFnbyBkYXRldGltZT17cmVjaXBpZW50Py5sYXN0U2Vlbj8udG9EYXRlKCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6IFwiVW5hdmFpbGFibGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9hZGluZyBsYXN0IGFjdGl2ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0hlYWRlckluZm9ybWF0aW9uPlxyXG4gICAgICAgICAgPEhlYWRlckljb25zPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8QXR0YWNoRmlsZUljb24gLz5cclxuICAgICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvSGVhZGVySWNvbnM+XHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPE1lc3NhZ2VDb250YWluZXIgY2xhc3NOYW1lPVwiaC1zY3JlZW4gcC04IGJnLXJlZC0xMDBcIj5cclxuICAgICAgICAgIHtzaG93TWVzc2FnZSgpfVxyXG4gICAgICAgICAgey8qIDxNZXNzYWdlLz4gKi99XHJcbiAgICAgICAgICA8RW5kT2ZNZXNzYWdlIHJlZj17ZW5kT2ZNZXNzYWdlUmVmfSAvPlxyXG4gICAgICAgIDwvTWVzc2FnZUNvbnRhaW5lcj5cclxuICAgICAgICA8SW5wdXRDb250YWluZXI+XHJcbiAgICAgICAgICA8SW5zZXJ0RW1vdGljb25JY29uIC8+XHJcbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFpbnB1dH0gb25DbGljaz17c2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxNaWNJY29uIC8+XHJcbiAgICAgICAgPC9JbnB1dENvbnRhaW5lcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0U2NyZWVuXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICAgIGNsYXNzTmFtZTpcImgtc2NyZWVuXCJcclxufSlgYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gICAgY2xhc3NOYW1lOlwic3RpY2t5IGJnLXdoaXRlIHotMTAwIHRvcC0wIGZsZXggcC0yIGgtMTYgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMjAwXCJcclxufSlgYFxyXG5jb25zdCBIZWFkZXJJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG5jbGFzc05hbWU6XCJtLTIgZmxleC0xXCIgXHJcbn0pYGA7XHJcbmNvbnN0IEhlYWRlckljb25zID0gc3R5bGVkLmRpdi5hdHRycyh7fSlgYDtcclxuY29uc3QgTWVzc2FnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gICAgXHJcbn0pYGA7XHJcbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcblxyXG4gICAgIGNsYXNzTmFtZTpcImZsZXggaXRlbXMtY2VudGVyIHAtMyBzdGlja3kgYm90dG9tLTAgYmctd2hpdGUgei01MFwiLFxyXG59KWBgO1xyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dC5hdHRycyh7XHJcbiAgICBjbGFzc05hbWU6XCJmbGV4LTEgb3V0bGluZS1ub25lIGJvcmRlci1ub25lIHJvdW5kZWQteGwgYmctZ3JheS01MCBwLTIgbWwtNCBtci00XCIsXHJcbn0pYGA7XHJcblxyXG5jb25zdCBFbmRPZk1lc3NhZ2UgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICAgIGNsYXNzTmFtZTpcIm0tMTBcIlxyXG59KWBgOyIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmZ1bmN0aW9uIE1lc3NhZ2UoeyB1c2VyLCBtZXNzYWdlIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyTG9nZ2VkSW5dPXVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaSBhbSBjYWxsaW5nIG1lc3NhZ2UgXCIsbWVzc2FnZS5tZXNzYWdlKTtcclxuICAgIFxyXG4gICAgY29uc3QgVHlwZU9mTWVzc2FnZSA9IHVzZXIgPT09IHVzZXJMb2dnZWRJbi5lbWFpbCA/IFNlbmRlciA6IFJlY2VpdmVyO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VHlwZU9mTWVzc2FnZT4ge21lc3NhZ2UubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDxUaW1lU3RhbXA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnRpbWVzdGFtcD8gbW9tZW50KG1lc3NhZ2UudGltZXN0YW1wKS5mb3JtYXQoJ0xUJyk6XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvVGltZVN0YW1wPlxyXG4gICAgICAgICAgICA8L1R5cGVPZk1lc3NhZ2U+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcblxyXG5jb25zdCBNZXNzYWdlRWxlbWVudCA9IHN0eWxlZC5wYFxyXG53aWR0aDpmaXQtY29udGVudDtcclxucGFkZGluZzoxNXB4O1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxubWFyZ2luOjEwcHg7XHJcbm1pbi13aWR0aDo2MHB4O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxudGV4dC1hbGlnbjpyaWdodDtcclxuYDtcclxuXHJcbmNvbnN0IFNlbmRlciA9IHN0eWxlZChNZXNzYWdlRWxlbWVudClgXHJcbmJhY2tncm91bmQtY29sb3I6I2RjZjBjNjtcclxubWFyZ2luLWxlZnQ6YXV0bztcclxuYDtcclxuXHJcbmNvbnN0IFJlY2VpdmVyID0gc3R5bGVkKE1lc3NhZ2VFbGVtZW50KWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmA7XHJcbmNvbnN0IFRpbWVTdGFtcCA9IHN0eWxlZC5kaXZgXHJcbmNvbG9yOmdyYXk7XHJcbnBhZGRpbmc6MTBweDtcclxuZm9udC1zaXplOjlweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbTowO1xyXG50ZXh0LWFsaWduOnJpZ2h0O1xyXG5yaWdodDowO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyAgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQge3VzZUNvbGxlY3Rpb259IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSdcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFVzZXJBdmF0YXIsIEljb25zQ29udGFpbmVyLCBIZWFkZXIsIFNlYXJjaCwgU2VhcmNoSW5wdXQsIFNpZGViYXJCdXR0b24gfSBmcm9tICcuLi9zdHlsZXMvU2lkZWJhclN0eWxlZCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCAqIGFzIEVtYWlsVmFsaWRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIlxyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBDaGF0Q29tcG9uZW50IGZyb20gJy4vQ2hhdENvbXBvbmVudCc7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ2hhdFJlZiA9IGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS53aGVyZSgndXNlcnMnLCAnYXJyYXktY29udGFpbnMnLCB1c2VyPy5lbWFpbClcclxuICBjb25zdCBbY2hhdFNuYXBzaG90XSA9IHVzZUNvbGxlY3Rpb24odXNlckNoYXRSZWYpO1xyXG4gXHJcbmNvbnN0IGNyZWF0ZUNoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXQgPSBwcm9tcHQoXHJcbiAgICBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzIGZvciB0aGUgdXNlciB5b3Ugd2lzaCB0byBjaGF0IHdpdGhcIlxyXG4gICk7XHJcblxyXG4gIGlmICghaW5wdXQpIHJldHVybiBudWxsO1xyXG4gIGlmIChcclxuICAgIEVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlKGlucHV0KSAmJlxyXG4gICAgIWNoYXRBbHJlYWR5RXhpc3RzKGlucHV0KSAgJiZcclxuICAgIGlucHV0ICE9PSB1c2VyLmVtYWlsXHJcbiAgKSB7XHJcbiAgICAvL3dlIG5lZWQgdG8gYWRkIGNoYXQgaW4gZGF0YWJhc2VcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5hZGQoe1xyXG4gICAgICB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbiAgICBjb25zdCBjaGF0QWxyZWFkeUV4aXN0cyA9IChyZWNpcGllbnRFbWFpbCkgPT4gXHJcbiAgICAgICAhIWNoYXRTbmFwc2hvdD8uZG9jcy5maW5kKChjaGF0KSA9PiBjaGF0LmRhdGEoKS51c2Vycy5maW5kKCh1c2VyKSA9PnVzZXI9PT0gcmVjaXBpZW50RW1haWwpPy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIHsvKiB7Y29uc29sZS5sb2codXNlcj8ucGhvdG9VUkwpfSAqL31cclxuICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgPFVzZXJBdmF0YXIgc3JjPXt1c2VyPy5waG90b1VSTH0gb25DbGljaz17KCk9PmF1dGguc2lnbk91dCgpfSAvPlxyXG4gICAgICAgICAgPEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8Q2hhdCAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBjaGF0ZXNcIi8+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoPlxyXG4gICAgICAgICAgICA8U2lkZWJhckJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVDaGF0fT5cclxuICAgICAgICAgIFN0YXJ0IG5ldyBjaGF0XHJcbiAgICAgICAgICAgIDwvU2lkZWJhckJ1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICB7LyogbGlzdCBvZiBjaGF0cyBjb250YWN0ICovfVxyXG4gICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYXRTbmFwc2hvdD8uZG9jcy5tYXAoKGNoYXQpID0+IChcclxuICAgICAgICAgICAgPENoYXRDb21wb25lbnQga2V5PXtjaGF0LmlkfSBpZD17Y2hhdC5pZH0gdXNlcnM9e2NoYXQuZGF0YSgpLnVzZXJzfS8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QUJxMkZfcHJOXzllS051T29SLWZFbURKclJfYm0tTWhRXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA5NDM5Mjk3MTUyNFwiLFxyXG4gIGFwcElkOiBcIjE6MTA5NDM5Mjk3MTUyNDp3ZWI6MzRhODQ3NzE5MDcyYTc2NjI3OTA1MVwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0xV0xIM0JKV1g4XCIsXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xyXG5jb25zdCBkYiA9IGFwcC5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5leHBvcnQge2RiLCBhdXRoLCBwcm92aWRlcn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xyXG5pbXBvcnQgQ2hhdFNjcmVlbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXRTY3JlZW4nXHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnXHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi8uLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcclxuZnVuY3Rpb24gQ2hhdCh7IGNoYXQsIG1lc3NhZ2VzIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyXT11c2VBdXRoU3RhdGUoYXV0aClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2hhdCB3aXRoIHsgZ2V0UmVjaXBpZW50RW1haWwoY2hhdC51c2VycywgdXNlcil9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICA8Q2hhdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDaGF0U2NyZWVuIGNoYXQ9e2NoYXR9IG1lc3NhZ2VzPXsgbWVzc2FnZXN9Lz5cclxuICAgICAgICAgICAgPC9DaGF0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlZiA9IGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5kb2MoY29udGV4dC5xdWVyeS5pZCk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXNSZXMgPSBhd2FpdCByZWYuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpLm9yZGVyQnkoXCJ0aW1lc3RhbXBcIiwgXCJhc2NcIikuZ2V0KCk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBtZXNzYWdlc1Jlcy5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgIH0pKS5tYXAobWVzc2FnZXMgPT4gKHtcclxuICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICB0aW1lc3RhbXA6IG1lc3NhZ2VzLnRpbWVzdGFtcC50b0RhdGUoKS5nZXRUaW1lKClcclxuICAgIH0pKTtcclxuXHJcbiAgICAvL1BSRVAgVGhFIENoYXRzXHJcbiAgICBjb25zdCBjaGF0UmVzID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gICAgY29uc3QgY2hhdCA9IHtcclxuICAgICAgICBpZDogY2hhdFJlcy5pZCxcclxuICAgICAgICAuLi5jaGF0UmVzLmRhdGEoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZXNzYWdlczogSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpLFxyXG4gICAgICAgICAgICBjaGF0OmNoYXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7IFxyXG4gICAgY2xhc3NOYW1lOlwiZmxleFwiXHJcbn0pYGA7XHJcbmNvbnN0IENoYXRDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6IFwiZmxleC0xIGgtZnVsbFwiLFxyXG59KWBgOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9ufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuZmxleDowLjQ1O1xyXG5ib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbmhlaWdodDoxMDB2aDtcclxubWluLXdpZHRoOjMwMHB4O1xyXG5tYXgtd2lkdGg6MzUwcHg7XHJcbi8qIG92ZXJmbG93LXk6c2Nyb2xsOyAqL1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOlxyXG4gICAgXCJmbGV4IHN0aWNreSB0b3AtMCBiZy13aGl0ZSB6LTUwIGp1c3RpZnktYmV0d2VlbiBhbGlnbi1taWRkbGUgcC00IGgtMTYgYm9yZGVyLWItMiBib3JkZXItZ3JheS0yMDAgXCIsXHJcbn0pYGA7XHJcbmV4cG9ydCBjb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkKEF2YXRhcikuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTpcIiBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwXCJcclxufSlgXHJcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xyXG5cclxuICAvKiA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2ggPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzoyMHB4O1xyXG5ib3JkZXItcmFkaXVzOjJweDtcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxub3V0bGluZS13aWR0aDowO1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5mbGV4OjE7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbmA7IiwiY29uc3QgZ2V0UmVjaXBpZW50RW1haWwgPSAodXNlcnMsIHVzZXJMb2dnZWRJbikgPT4ge1xyXG4gICBcclxuICAgcmV0dXJuIHVzZXJzPy5maWx0ZXIodXNlclRvRmlsdGVyID0+IHVzZXJUb0ZpbHRlciAhPT0gdXNlckxvZ2dlZEluPy5lbWFpbClbMF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmVjaXBpZW50RW1haWw7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0F0dGFjaEZpbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc2VydEVtb3RpY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRpbWVhZ28tcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==