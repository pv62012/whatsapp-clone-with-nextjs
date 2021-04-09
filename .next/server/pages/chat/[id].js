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
})`

`;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"])`
margin-right:10px;
`;

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

  console.log(messages);
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
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map(message => {
        var _message$data, _message$data$timesta;

        return (
          /*#__PURE__*/
          // console.log(message);
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Message__WEBPACK_IMPORTED_MODULE_10__["default"], {
            user: message.data().user,
            message: _objectSpread(_objectSpread({}, message.data()), {}, {
              timestamp: (_message$data = message.data()) === null || _message$data === void 0 ? void 0 : (_message$data$timesta = _message$data.timestamp) === null || _message$data$timesta === void 0 ? void 0 : _message$data$timesta.toDate().getTime()
            })
          }, message.id, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 16
          }, this)
        );
      });
    } else {
      //  console.log(messagesSnapshot);
      console.log(messages);
      return JSON.parse(messages).map(message => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Message__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: message.user,
        message: message
      }, message.id, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 18
      }, this));
    }
  };

  const scrollToBottom = () => {
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
    scrollToBottom();
  };

  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  const recipientEmail = Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_14__["default"])(chat.users, user);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: [recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: recipient === null || recipient === void 0 ? void 0 : recipient.photoUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 24
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        children: [" ", recipientEmail[0], " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 63
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderInformation, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: [" ", recipientEmail]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this), recipientSnapshot ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Last active:", ' ', recipient !== null && recipient !== void 0 && (_recipient$lastSeen = recipient.lastSeen) !== null && _recipient$lastSeen !== void 0 && _recipient$lastSeen.toDate() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(timeago_react__WEBPACK_IMPORTED_MODULE_15___default.a, {
            datetime: recipient === null || recipient === void 0 ? void 0 : (_recipient$lastSeen2 = recipient.lastSeen) === null || _recipient$lastSeen2 === void 0 ? void 0 : _recipient$lastSeen2.toDate()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 37
          }, this) : "Unavailable"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 30
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Loading last active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderIcons, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MessageContainer, {
      className: "h-screen p-8 bg-red-100",
      children: [showMessage(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EndOfMessage, {
        ref: endOfMessageRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
        value: input,
        onChange: e => setInput(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        disabled: !input,
        onClick: sendMessage,
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Mic__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ChatScreen);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "h-full overflow-hidden"
})``;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "sticky bg-white z-50 top-0 flex p-2 h-16 items-center border-b-2 border-gray-200"
})``;
const HeaderInformation = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "m-2 flex-1"
})``;
const HeaderIcons = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({})``;
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "overflow-y-scroll "
})`
height:90vh;
`;
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({
  className: "flex items-center p-3 sticky bottom-0 bg-white z-50"
})``;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.input.attrs({
  className: "flex-1 outline-none border-none rounded-xl bg-gray-50 p-2 ml-4 mr-4"
})``;
const EndOfMessage = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.attrs({})`
margin-bottom:100px;
`;

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
  className: "flex h-screen"
})``;
const ChatContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.attrs({
  className: "flex-1 h-screen"
})``;

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
flex:0.45;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdFNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXQvLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9TaWRlYmFyU3R5bGVkLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldFJlY2lwaWVudEVtYWlsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0F0dGFjaEZpbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnNlcnRFbW90aWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWwtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGltZWFnby1yZWFjdFwiIl0sIm5hbWVzIjpbIkNoYXRDb21wb25lbnQiLCJpZCIsInVzZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJyZWNpcGllbnRTbmFwc2hvdCIsInVzZUNvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImdldFJlY2lwaWVudEVtYWlsIiwicmVjaXBpZW50IiwiZG9jcyIsImRhdGEiLCJyZWNpcGllbnRFbWFpbCIsImVudGVyQ2hhdCIsInB1c2giLCJwaG90b1VybCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVXNlckF2YXRhciIsIkF2YXRhciIsIkNoYXRTY3JlZW4iLCJjaGF0IiwibWVzc2FnZXMiLCJjb25zb2xlIiwibG9nIiwiZW5kT2ZNZXNzYWdlUmVmIiwidXNlUmVmIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwibWVzc2FnZXNTbmFwc2hvdCIsImRvYyIsInF1ZXJ5Iiwib3JkZXJCeSIsInNob3dNZXNzYWdlIiwibWFwIiwibWVzc2FnZSIsInRpbWVzdGFtcCIsInRvRGF0ZSIsImdldFRpbWUiLCJKU09OIiwicGFyc2UiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVpZCIsInNldCIsImxhc3RTZWVuIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwibWVyZ2UiLCJhZGQiLCJlbWFpbCIsInBob3RvVVJMIiwidGFyZ2V0IiwidmFsdWUiLCJIZWFkZXIiLCJIZWFkZXJJbmZvcm1hdGlvbiIsIkhlYWRlckljb25zIiwiTWVzc2FnZUNvbnRhaW5lciIsIklucHV0Q29udGFpbmVyIiwiSW5wdXQiLCJFbmRPZk1lc3NhZ2UiLCJNZXNzYWdlIiwidXNlckxvZ2dlZEluIiwiVHlwZU9mTWVzc2FnZSIsIlNlbmRlciIsIlJlY2VpdmVyIiwibW9tZW50IiwiZm9ybWF0IiwiTWVzc2FnZUVsZW1lbnQiLCJwIiwiVGltZVN0YW1wIiwiU2lkZWJhciIsInVzZXJDaGF0UmVmIiwiY2hhdFNuYXBzaG90IiwiY3JlYXRlQ2hhdCIsInByb21wdCIsIkVtYWlsVmFsaWRhdG9yIiwiY2hhdEFscmVhZHlFeGlzdHMiLCJmaW5kIiwibGVuZ3RoIiwic2lnbk91dCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwicHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJDaGF0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlZiIsIm1lc3NhZ2VzUmVzIiwiZ2V0IiwiY2hhdFJlcyIsInByb3BzIiwic3RyaW5naWZ5IiwiQ2hhdENvbnRhaW5lciIsIkljb25zQ29udGFpbmVyIiwiU2VhcmNoIiwiU2VhcmNoSW5wdXQiLCJTaWRlYmFyQnV0dG9uIiwiQnV0dG9uIiwiQ2hhdFVzZXJMaXN0IiwiZmlsdGVyIiwidXNlclRvRmlsdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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Ozs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2NoYXQvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2hhdC9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgZ2V0UmVjaXBpZW50RW1haWwgZnJvbSAnLi4vdXRpbHMvZ2V0UmVjaXBpZW50RW1haWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuIFxyXG5mdW5jdGlvbiBDaGF0Q29tcG9uZW50KHsgaWQsIHVzZXJzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2codXNlcnMpO1xyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gIGNvbnN0IFtyZWNpcGllbnRTbmFwc2hvdF09dXNlQ29sbGVjdGlvbihkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikud2hlcmUoXCJlbWFpbFwiLFwiPT1cIiAsIGdldFJlY2lwaWVudEVtYWlsKHVzZXJzLCB1c2VyKSkpXHJcbiAgY29uc3QgcmVjaXBpZW50PXJlY2lwaWVudFNuYXBzaG90Py5kb2NzPy5bMF0/LmRhdGEoKVxyXG4gIGNvbnN0IHJlY2lwaWVudEVtYWlsID0gZ2V0UmVjaXBpZW50RW1haWwodXNlcnMsIHVzZXIpXHJcbiAgLy8gY29uc29sZS5sb2cocmVjaXBpZW50RW1haWwpO1xyXG4gIFxyXG4gICBcclxuICBjb25zdCBlbnRlckNoYXQgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgL2NoYXQvJHtpZH1gKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPENvbnRhaW5lciBvbkNsaWNrPXtlbnRlckNoYXR9ID5cclxuICAgICAge3JlY2lwaWVudCA/IChcclxuICAgICAgICA8VXNlckF2YXRhciBzcmM9e3JlY2lwaWVudD8ucGhvdG9Vcmx9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFVzZXJBdmF0YXIgY2xhc3NOYW1lPVwibS0xIG1yLTIgXCI+e3JlY2lwaWVudEVtYWlsWzBdfTwvVXNlckF2YXRhcj5cclxuICAgICAgKX1cclxuICAgICAgPHA+e3JlY2lwaWVudEVtYWlsfTwvcD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRDb21wb25lbnRcclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6IFwiZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcC00IGJyZWFrLXdvcmRzIGhvdmVyOmJnLWdyYXktMzAwXCIsXHJcbn0pYFxyXG5cclxuYDtcclxuY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpYFxyXG5tYXJnaW4tcmlnaHQ6MTBweDtcclxuYDsiLCJpbXBvcnQgeyBBdmF0YXIsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCBBdHRhY2hGaWxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXR0YWNoRmlsZSdcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnXHJcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSdcclxuaW1wb3J0IEluc2VydEVtb3RpY29uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zZXJ0RW1vdGljb24nXHJcbmltcG9ydCBNaWNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NaWMnXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcclxuaW1wb3J0IGdldFJlY2lwaWVudEVtYWlsIGZyb20gJy4uL3V0aWxzL2dldFJlY2lwaWVudEVtYWlsJ1xyXG5pbXBvcnQgVGltZUFnbyBmcm9tICd0aW1lYWdvLXJlYWN0JztcclxuZnVuY3Rpb24gQ2hhdFNjcmVlbih7IGNoYXQsIG1lc3NhZ2VzIH0pIHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzKTtcclxuICAgIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gICAgY29uc3QgZW5kT2ZNZXNzYWdlUmVmPXVzZVJlZihudWxsKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbWVzc2FnZXNTbmFwc2hvdF09dXNlQ29sbGVjdGlvbihkYi5jb2xsZWN0aW9uKCdjaGF0cycpLmRvYyhyb3V0ZXIucXVlcnkuaWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlc1wiKS5vcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiYXNjXCIpKVxyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImkgYW0gYSBwcm9ibGVtIDEgXCIsIG1lc3NhZ2VzU25hcHNob3QpO1xyXG4gICAgY29uc3QgW3JlY2lwaWVudFNuYXBzaG90XT11c2VDb2xsZWN0aW9uKGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykud2hlcmUoXCJlbWFpbFwiLFwiPT1cIiwgZ2V0UmVjaXBpZW50RW1haWwoY2hhdC51c2VycywgdXNlcikpKVxyXG4gICAgXHJcbiAgICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VzU25hcHNob3QpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzU25hcHNob3QuZG9jcy5tYXAoKG1lc3NhZ2UpID0+KCBcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICA8TWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IHVzZXI9e21lc3NhZ2UuZGF0YSgpLnVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5tZXNzYWdlLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBtZXNzYWdlLmRhdGEoKT8udGltZXN0YW1wPy50b0RhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhtZXNzYWdlc1NuYXBzaG90KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobWVzc2FnZXMpLm1hcCgobWVzc2FnZSkgPT4oIFxyXG4gICAgICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI9e21lc3NhZ2UudXNlcn1cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgICAgICBlbmRPZk1lc3NhZ2VSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICBibG9jazpcInN0YXJ0XCIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgIGxhc3RTZWVuOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICB9LCB7IG1lcmdlOiB0cnVlIH1cclxuICAgICAgICApXHJcbiAgICAgICAgZGIuY29sbGVjdGlvbignY2hhdHMnKS5kb2Mocm91dGVyLnF1ZXJ5LmlkKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLmFkZCh7XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGlucHV0LFxyXG4gICAgICAgICAgICB1c2VyOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBwaG90b1VSTDogdXNlci5waG90b1VSTFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oKVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVjaXBpZW50PXJlY2lwaWVudFNuYXBzaG90Py5kb2NzPy5bMF0/LmRhdGEoKVxyXG4gICAgY29uc3QgcmVjaXBpZW50RW1haWw9Z2V0UmVjaXBpZW50RW1haWwoY2hhdC51c2VycywgdXNlcilcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgIHtyZWNpcGllbnQgPyA8QXZhdGFyIHNyYz17cmVjaXBpZW50Py5waG90b1VybH0gLz4gOiA8QXZhdGFyID4ge3JlY2lwaWVudEVtYWlsWzBdfSA8L0F2YXRhcj59XHJcbiAgICAgICAgICA8SGVhZGVySW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPiB7cmVjaXBpZW50RW1haWx9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudFNuYXBzaG90ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKCA8cD5MYXN0IGFjdGl2ZTp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50Py5sYXN0U2Vlbj8udG9EYXRlKCkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lQWdvIGRhdGV0aW1lPXtyZWNpcGllbnQ/Lmxhc3RTZWVuPy50b0RhdGUoKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogXCJVbmF2YWlsYWJsZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nIGxhc3QgYWN0aXZlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvSGVhZGVySW5mb3JtYXRpb24+XHJcbiAgICAgICAgICA8SGVhZGVySWNvbnM+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxBdHRhY2hGaWxlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9IZWFkZXJJY29ucz5cclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICA8TWVzc2FnZUNvbnRhaW5lciBjbGFzc05hbWU9XCJoLXNjcmVlbiBwLTggYmctcmVkLTEwMFwiPlxyXG4gICAgICAgICAge3Nob3dNZXNzYWdlKCl9XHJcbiAgICAgICAgICB7LyogPE1lc3NhZ2UvPiAqL31cclxuICAgICAgICAgIDxFbmRPZk1lc3NhZ2UgcmVmPXtlbmRPZk1lc3NhZ2VSZWZ9IC8+XHJcbiAgICAgICAgPC9NZXNzYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICAgIDxJbnNlcnRFbW90aWNvbkljb24gLz5cclxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlucHV0fSBvbkNsaWNrPXtzZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPE1pY0ljb24gLz5cclxuICAgICAgICA8L0lucHV0Q29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRTY3JlZW5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gICAgY2xhc3NOYW1lOlwiaC1mdWxsIG92ZXJmbG93LWhpZGRlblwiXHJcbn0pYGA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICAgIGNsYXNzTmFtZTpcInN0aWNreSBiZy13aGl0ZSB6LTUwIHRvcC0wIGZsZXggcC0yIGgtMTYgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMjAwXCJcclxufSlgYFxyXG5jb25zdCBIZWFkZXJJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG5jbGFzc05hbWU6XCJtLTIgZmxleC0xXCIgXHJcbn0pYGA7XHJcbmNvbnN0IEhlYWRlckljb25zID0gc3R5bGVkLmRpdi5hdHRycyh7fSlgYDtcclxuY29uc3QgTWVzc2FnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gICAgY2xhc3NOYW1lOlwib3ZlcmZsb3cteS1zY3JvbGwgXCJcclxufSlgXHJcbmhlaWdodDo5MHZoO1xyXG5gO1xyXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG5cclxuICAgICBjbGFzc05hbWU6XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTMgc3RpY2t5IGJvdHRvbS0wIGJnLXdoaXRlIHotNTBcIixcclxufSlgYDtcclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQuYXR0cnMoe1xyXG4gICAgY2xhc3NOYW1lOlwiZmxleC0xIG91dGxpbmUtbm9uZSBib3JkZXItbm9uZSByb3VuZGVkLXhsIGJnLWdyYXktNTAgcC0yIG1sLTQgbXItNFwiLFxyXG59KWBgO1xyXG5cclxuY29uc3QgRW5kT2ZNZXNzYWdlID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgXHJcbn0pYFxyXG5tYXJnaW4tYm90dG9tOjEwMHB4O1xyXG5gOyIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmZ1bmN0aW9uIE1lc3NhZ2UoeyB1c2VyLCBtZXNzYWdlIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyTG9nZ2VkSW5dPXVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaSBhbSBjYWxsaW5nIG1lc3NhZ2UgXCIsbWVzc2FnZS5tZXNzYWdlKTtcclxuICAgIFxyXG4gICAgY29uc3QgVHlwZU9mTWVzc2FnZSA9IHVzZXIgPT09IHVzZXJMb2dnZWRJbi5lbWFpbCA/IFNlbmRlciA6IFJlY2VpdmVyO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VHlwZU9mTWVzc2FnZT4ge21lc3NhZ2UubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDxUaW1lU3RhbXA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnRpbWVzdGFtcD8gbW9tZW50KG1lc3NhZ2UudGltZXN0YW1wKS5mb3JtYXQoJ0xUJyk6XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvVGltZVN0YW1wPlxyXG4gICAgICAgICAgICA8L1R5cGVPZk1lc3NhZ2U+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcblxyXG5jb25zdCBNZXNzYWdlRWxlbWVudCA9IHN0eWxlZC5wYFxyXG53aWR0aDpmaXQtY29udGVudDtcclxucGFkZGluZzoxNXB4O1xyXG5ib3JkZXItcmFkaXVzOjhweDtcclxubWFyZ2luOjEwcHg7XHJcbm1pbi13aWR0aDo2MHB4O1xyXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxudGV4dC1hbGlnbjpyaWdodDtcclxuYDtcclxuXHJcbmNvbnN0IFNlbmRlciA9IHN0eWxlZChNZXNzYWdlRWxlbWVudClgXHJcbmJhY2tncm91bmQtY29sb3I6I2RjZjBjNjtcclxubWFyZ2luLWxlZnQ6YXV0bztcclxuYDtcclxuXHJcbmNvbnN0IFJlY2VpdmVyID0gc3R5bGVkKE1lc3NhZ2VFbGVtZW50KWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmA7XHJcbmNvbnN0IFRpbWVTdGFtcCA9IHN0eWxlZC5kaXZgXHJcbmNvbG9yOmdyYXk7XHJcbnBhZGRpbmc6MTBweDtcclxuZm9udC1zaXplOjlweDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbTowO1xyXG50ZXh0LWFsaWduOnJpZ2h0O1xyXG5yaWdodDowO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyAgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQge3VzZUNvbGxlY3Rpb259IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSdcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBVc2VyQXZhdGFyLFxyXG4gIEljb25zQ29udGFpbmVyLFxyXG4gIEhlYWRlcixcclxuICBTZWFyY2gsXHJcbiAgU2VhcmNoSW5wdXQsXHJcbiAgU2lkZWJhckJ1dHRvbixcclxuICBDaGF0VXNlckxpc3QsXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TaWRlYmFyU3R5bGVkXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCAqIGFzIEVtYWlsVmFsaWRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIlxyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBDaGF0Q29tcG9uZW50IGZyb20gJy4vQ2hhdENvbXBvbmVudCc7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ2hhdFJlZiA9IGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS53aGVyZSgndXNlcnMnLCAnYXJyYXktY29udGFpbnMnLCB1c2VyPy5lbWFpbClcclxuICBjb25zdCBbY2hhdFNuYXBzaG90XSA9IHVzZUNvbGxlY3Rpb24odXNlckNoYXRSZWYpO1xyXG4gXHJcbmNvbnN0IGNyZWF0ZUNoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXQgPSBwcm9tcHQoXHJcbiAgICBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzIGZvciB0aGUgdXNlciB5b3Ugd2lzaCB0byBjaGF0IHdpdGhcIlxyXG4gICk7XHJcblxyXG4gIGlmICghaW5wdXQpIHJldHVybiBudWxsO1xyXG4gIGlmIChcclxuICAgIEVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlKGlucHV0KSAmJlxyXG4gICAgIWNoYXRBbHJlYWR5RXhpc3RzKGlucHV0KSAgJiZcclxuICAgIGlucHV0ICE9PSB1c2VyLmVtYWlsXHJcbiAgKSB7XHJcbiAgICAvL3dlIG5lZWQgdG8gYWRkIGNoYXQgaW4gZGF0YWJhc2VcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5hZGQoe1xyXG4gICAgICB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbiAgICBjb25zdCBjaGF0QWxyZWFkeUV4aXN0cyA9IChyZWNpcGllbnRFbWFpbCkgPT4gXHJcbiAgICAgICAhIWNoYXRTbmFwc2hvdD8uZG9jcy5maW5kKChjaGF0KSA9PiBjaGF0LmRhdGEoKS51c2Vycy5maW5kKCh1c2VyKSA9PnVzZXI9PT0gcmVjaXBpZW50RW1haWwpPy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIHsvKiB7Y29uc29sZS5sb2codXNlcj8ucGhvdG9VUkwpfSAqL31cclxuICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgPFVzZXJBdmF0YXIgc3JjPXt1c2VyPy5waG90b1VSTH0gb25DbGljaz17KCkgPT4gYXV0aC5zaWduT3V0KCl9IC8+XHJcbiAgICAgICAgICA8SWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxDaGF0IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uc0NvbnRhaW5lcj5cclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICA8U2VhcmNoPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgIDxTZWFyY2hJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBjaGF0ZXNcIiAvPlxyXG4gICAgICAgIDwvU2VhcmNoPlxyXG4gICAgICAgIDxTaWRlYmFyQnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZUNoYXR9PlN0YXJ0IG5ldyBjaGF0PC9TaWRlYmFyQnV0dG9uPlxyXG5cclxuICAgICAgICB7LyogbGlzdCBvZiBjaGF0cyBjb250YWN0ICovfVxyXG4gICAgICAgIDxDaGF0VXNlckxpc3Q+XHJcbiAgICAgICAgICB7Y2hhdFNuYXBzaG90Py5kb2NzLm1hcCgoY2hhdCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2hhdENvbXBvbmVudFxyXG4gICAgICAgICAgICAgIGtleT17Y2hhdC5pZH1cclxuICAgICAgICAgICAgICBpZD17Y2hhdC5pZH1cclxuICAgICAgICAgICAgICB1c2Vycz17Y2hhdC5kYXRhKCkudXNlcnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0NoYXRVc2VyTGlzdD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QUJxMkZfcHJOXzllS051T29SLWZFbURKclJfYm0tTWhRXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ3aGF0c2FwcC1uZXh0LTdjNjAxLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA5NDM5Mjk3MTUyNFwiLFxyXG4gIGFwcElkOiBcIjE6MTA5NDM5Mjk3MTUyNDp3ZWI6MzRhODQ3NzE5MDcyYTc2NjI3OTA1MVwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0xV0xIM0JKV1g4XCIsXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xyXG5jb25zdCBkYiA9IGFwcC5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5leHBvcnQge2RiLCBhdXRoLCBwcm92aWRlcn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xyXG5pbXBvcnQgQ2hhdFNjcmVlbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXRTY3JlZW4nXHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnXHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi8uLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcclxuZnVuY3Rpb24gQ2hhdCh7IGNoYXQsIG1lc3NhZ2VzIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyXT11c2VBdXRoU3RhdGUoYXV0aClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2hhdCB3aXRoIHsgZ2V0UmVjaXBpZW50RW1haWwoY2hhdC51c2VycywgdXNlcil9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICA8Q2hhdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDaGF0U2NyZWVuIGNoYXQ9e2NoYXR9IG1lc3NhZ2VzPXsgbWVzc2FnZXN9Lz5cclxuICAgICAgICAgICAgPC9DaGF0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlZiA9IGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5kb2MoY29udGV4dC5xdWVyeS5pZCk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXNSZXMgPSBhd2FpdCByZWYuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpLm9yZGVyQnkoXCJ0aW1lc3RhbXBcIiwgXCJhc2NcIikuZ2V0KCk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBtZXNzYWdlc1Jlcy5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgIH0pKS5tYXAobWVzc2FnZXMgPT4gKHtcclxuICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICB0aW1lc3RhbXA6IG1lc3NhZ2VzLnRpbWVzdGFtcC50b0RhdGUoKS5nZXRUaW1lKClcclxuICAgIH0pKTtcclxuXHJcbiAgICAvL1BSRVAgVGhFIENoYXRzXHJcbiAgICBjb25zdCBjaGF0UmVzID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gICAgY29uc3QgY2hhdCA9IHtcclxuICAgICAgICBpZDogY2hhdFJlcy5pZCxcclxuICAgICAgICAuLi5jaGF0UmVzLmRhdGEoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZXNzYWdlczogSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpLFxyXG4gICAgICAgICAgICBjaGF0OmNoYXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7IFxyXG4gICAgY2xhc3NOYW1lOlwiZmxleCBoLXNjcmVlblwiXHJcbn0pYGA7XHJcbmNvbnN0IENoYXRDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6IFwiZmxleC0xIGgtc2NyZWVuXCIsXHJcbn0pYGA7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b259IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5mbGV4OjAuNDU7XHJcbmJvcmRlci1yaWdodDoxcHggc29saWQgd2hpdGVzbW9rZTtcclxuaGVpZ2h0OjEwMHZoO1xyXG5taW4td2lkdGg6MzAwcHg7XHJcbm1heC13aWR0aDozNTBweDtcclxub3ZlcmZsb3cteTpoaWRkZW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6XHJcbiAgICBcImZsZXggZmxleC0xIHN0aWNreSB0b3AtMCBiZy13aGl0ZSB6LTUwIGFsaWduLW1pZGRsZSBwLTQgaC0xNiBib3JkZXItYi0yIGJvcmRlci1ncmF5LTIwMCBcIixcclxufSlgXHJcbmRpc3BsYXk6ZmxleDtcclxud2lkdGg6MTAwJTtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkKEF2YXRhcikuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTpcIiBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwXCJcclxufSlgXHJcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xyXG5cclxuICAvKiA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2ggPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzoyMHB4O1xyXG5ib3JkZXItcmFkaXVzOjJweDtcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxub3V0bGluZS13aWR0aDowO1xyXG5vdXRsaW5lOm5vbmU7XHJcbmJvcmRlcjpub25lO1xyXG5mbGV4OjE7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDaGF0VXNlckxpc3QgPSBzdHlsZWQuZGl2YFxyXG5oZWlnaHQ6MTAwJTtcclxub3ZlcmZsb3cteTpzY3JvbGw7XHJcbmA7IiwiY29uc3QgZ2V0UmVjaXBpZW50RW1haWwgPSAodXNlcnMsIHVzZXJMb2dnZWRJbikgPT4ge1xyXG4gICBcclxuICAgcmV0dXJuIHVzZXJzPy5maWx0ZXIodXNlclRvRmlsdGVyID0+IHVzZXJUb0ZpbHRlciAhPT0gdXNlckxvZ2dlZEluPy5lbWFpbClbMF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmVjaXBpZW50RW1haWw7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0F0dGFjaEZpbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc2VydEVtb3RpY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRpbWVhZ28tcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==