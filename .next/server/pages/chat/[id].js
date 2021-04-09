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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1YML":
/***/ (function(module, exports) {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bZV+");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4rJZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachFile");

/***/ }),

/***/ "9MsW":
/***/ (function(module, exports) {

module.exports = require("email-validator");

/***/ }),

/***/ "9nnq":
/***/ (function(module, exports) {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "G9A8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertEmoticon");

/***/ }),

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Ktyj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return provider; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pNaP");
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

/***/ "PtdR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getRecipientEmail = (users, userLoggedIn) => {
  return users === null || users === void 0 ? void 0 : users.filter(userToFilter => userToFilter !== (userLoggedIn === null || userLoggedIn === void 0 ? void 0 : userLoggedIn.email))[0];
};

/* harmony default export */ __webpack_exports__["a"] = (getRecipientEmail);

/***/ }),

/***/ "UQSI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "bZV+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/Sidebar.js + 2 modules
var Sidebar = __webpack_require__("hAPS");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-firebase-hooks/auth"
var auth_ = __webpack_require__("1YML");

// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__("Ktyj");

// EXTERNAL MODULE: external "@material-ui/icons/AttachFile"
var AttachFile_ = __webpack_require__("4rJZ");
var AttachFile_default = /*#__PURE__*/__webpack_require__.n(AttachFile_);

// EXTERNAL MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_ = __webpack_require__("UQSI");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);

// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__("9nnq");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/Message.js








function Message({
  user,
  message
}) {
  const [userLoggedIn] = Object(auth_["useAuthState"])(firebase["a" /* auth */]); // console.log("i am calling message ",message.message);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TypeOfMessage, {
      children: [" ", message.message, /*#__PURE__*/Object(jsx_runtime_["jsx"])(TimeStamp, {
        children: message.timestamp ? external_moment_default()(message.timestamp).format('LT') : "..."
      })]
    })
  });
}

/* harmony default export */ var components_Message = (Message);
const Container = external_styled_components_default.a.div``;
const MessageElement = external_styled_components_default.a.p`
width:fit-content;
padding:15px;
border-radius:8px;
margin:10px;
min-width:60px;
padding-bottom:20px;
position:relative;
text-align:right;
`;
const Sender = external_styled_components_default()(MessageElement)`
background-color:#dcf0c6;
margin-left:auto;
`;
const Receiver = external_styled_components_default()(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;
const TimeStamp = external_styled_components_default.a.div`
color:gray;
padding:10px;
font-size:9px;
position:absolute;
bottom:0;
text-align:right;
right:0;
`;
// EXTERNAL MODULE: external "@material-ui/icons/InsertEmoticon"
var InsertEmoticon_ = __webpack_require__("G9A8");
var InsertEmoticon_default = /*#__PURE__*/__webpack_require__.n(InsertEmoticon_);

// EXTERNAL MODULE: external "@material-ui/icons/Mic"
var Mic_ = __webpack_require__("iHqE");
var Mic_default = /*#__PURE__*/__webpack_require__.n(Mic_);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: ./utils/getRecipientEmail.js
var getRecipientEmail = __webpack_require__("PtdR");

// EXTERNAL MODULE: external "timeago-react"
var external_timeago_react_ = __webpack_require__("mAUa");
var external_timeago_react_default = /*#__PURE__*/__webpack_require__.n(external_timeago_react_);

// CONCATENATED MODULE: ./components/ChatScreen.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function ChatScreen({
  chat,
  messages
}) {
  var _recipientSnapshot$do, _recipientSnapshot$do2, _recipient$lastSeen, _recipient$lastSeen2;

  const [user] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  const endOfMessageRef = Object(external_react_["useRef"])(null);
  const router = Object(router_["useRouter"])();
  const {
    0: input,
    1: setInput
  } = Object(external_react_["useState"])("");
  const [messagesSnapshot] = Object(firestore_["useCollection"])(firebase["b" /* db */].collection('chats').doc(router.query.id).collection("messages").orderBy("timestamp", "asc")); //  console.log("i am a problem 1 ", messagesSnapshot);

  const [recipientSnapshot] = Object(firestore_["useCollection"])(firebase["b" /* db */].collection('users').where("email", "==", Object(getRecipientEmail["a" /* default */])(chat.users, user)));

  const showMessage = () => {
    //  console.log("i am a problenm2 ", messagesSnapshot);
    if (messagesSnapshot) {
      //  console.log("i am problem 3 ", messagesSnapshot);
      return messagesSnapshot.docs.map(message => {
        var _message$data, _message$data$timesta;

        // console.log(message);
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Message, {
          user: message.data().user,
          message: _objectSpread(_objectSpread({}, message.data()), {}, {
            timestamp: (_message$data = message.data()) === null || _message$data === void 0 ? void 0 : (_message$data$timesta = _message$data.timestamp) === null || _message$data$timesta === void 0 ? void 0 : _message$data$timesta.toDate().getTime()
          })
        }, message.id);
      });
    } else {
      //  console.log(messagesSnapshot);
      console.log(messages);
      return JSON.parse(messages).map(message => {
        /*#__PURE__*/
        Object(jsx_runtime_["jsx"])(components_Message, {
          user: message.user,
          message: message
        }, message.id);
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
    firebase["b" /* db */].collection('users').doc(user.uid).set({
      lastSeen: external_firebase_default.a.firestore.FieldValue.serverTimestamp()
    }, {
      merge: true
    });
    firebase["b" /* db */].collection('chats').doc(router.query.id).collection('messages').add({
      timestamp: external_firebase_default.a.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL
    });
    setInput("");
    ScrollToBottom();
  };

  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  const recipientEmail = Object(getRecipientEmail["a" /* default */])(chat.users, user);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ChatScreen_Container, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Header, {
      children: [recipient ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Avatar"], {
        src: recipient === null || recipient === void 0 ? void 0 : recipient.photoUrl
      }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Avatar"], {
        children: [" ", recipientEmail[0], " "]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderInformation, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
          children: [" ", recipientEmail]
        }), recipientSnapshot ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["Last active:", ' ', recipient !== null && recipient !== void 0 && (_recipient$lastSeen = recipient.lastSeen) !== null && _recipient$lastSeen !== void 0 && _recipient$lastSeen.toDate() ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_timeago_react_default.a, {
            datetime: recipient === null || recipient === void 0 ? void 0 : (_recipient$lastSeen2 = recipient.lastSeen) === null || _recipient$lastSeen2 === void 0 ? void 0 : _recipient$lastSeen2.toDate()
          }) : "Unavailable"]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Loading last active"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderIcons, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["IconButton"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AttachFile_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MoreVert_default.a, {})]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MessageContainer, {
      className: "h-screen p-8 bg-red-100",
      children: [showMessage(), /*#__PURE__*/Object(jsx_runtime_["jsx"])(EndOfMessage, {
        ref: endOfMessageRef
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InputContainer, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(InsertEmoticon_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
        value: input,
        onChange: e => setInput(e.target.value)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        disabled: !input,
        onClick: sendMessage,
        children: "Send"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mic_default.a, {})]
    })]
  });
}

/* harmony default export */ var components_ChatScreen = (ChatScreen);
const ChatScreen_Container = external_styled_components_default.a.div.attrs({
  className: "h-screen"
})``;
const Header = external_styled_components_default.a.div.attrs({
  className: "sticky bg-white z-100 top-0 flex p-2 h-16 items-center border-b-2 border-gray-200"
})``;
const HeaderInformation = external_styled_components_default.a.div.attrs({
  className: "m-2 flex-1"
})``;
const HeaderIcons = external_styled_components_default.a.div.attrs({})``;
const MessageContainer = external_styled_components_default.a.div.attrs({})``;
const InputContainer = external_styled_components_default.a.div.attrs({
  className: "flex items-center p-3 sticky bottom-0 bg-white z-50"
})``;
const Input = external_styled_components_default.a.input.attrs({
  className: "flex-1 outline-none border-none rounded-xl bg-gray-50 p-2 ml-4 mr-4"
})``;
const EndOfMessage = external_styled_components_default.a.div.attrs({
  className: "m-10"
})``;
// CONCATENATED MODULE: ./pages/chat/[id].js



function _id_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _id_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _id_ownKeys(Object(source), true).forEach(function (key) { _id_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _id_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _id_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Chat({
  chat,
  messages
}) {
  const [user] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(_id_Container, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: ["Chat with ", Object(getRecipientEmail["a" /* default */])(chat.users, user)]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sidebar["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChatContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ChatScreen, {
        chat: chat,
        messages: messages
      })
    })]
  });
}

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Chat);
async function getServerSideProps(context) {
  const ref = firebase["b" /* db */].collection("chats").doc(context.query.id);
  const messagesRes = await ref.collection("messages").orderBy("timestamp", "asc").get();
  const messages = messagesRes.docs.map(doc => _id_objectSpread({
    id: doc.id
  }, doc.data())).map(messages => _id_objectSpread(_id_objectSpread({}, messages), {}, {
    timestamp: messages.timestamp.toDate().getTime()
  })); //PREP ThE Chats

  const chatRes = await ref.get();

  const chat = _id_objectSpread({
    id: chatRes.id
  }, chatRes.data());

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat
    }
  };
}
const _id_Container = external_styled_components_default.a.div.attrs({
  className: "flex"
})``;
const ChatContainer = external_styled_components_default.a.div.attrs({
  className: "flex-1 h-full"
})``;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hAPS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-firebase-hooks/auth"
var auth_ = __webpack_require__("1YML");

// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__("9nnq");

// EXTERNAL MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_ = __webpack_require__("UQSI");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/tailwindcss/tailwind.css
var tailwind = __webpack_require__("uXJ4");

// CONCATENATED MODULE: ./styles/SidebarStyled.js



const Container = external_styled_components_default.a.div`
flex:0.45;
border-right:1px solid whitesmoke;
height:100vh;
min-width:300px;
max-width:350px;
/* overflow-y:scroll; */
`;
const Header = external_styled_components_default.a.div.attrs({
  className: "flex sticky top-0 bg-white z-50 justify-between align-middle p-4 h-16 border-b-2 border-gray-200 "
})``;
const UserAvatar = external_styled_components_default()(core_["Avatar"]).attrs({
  className: " cursor-pointer hover:opacity-80"
})`
  /* cursor: pointer; */

  /* :hover {
    opacity: 0.8;
  } */
`;
const IconsContainer = external_styled_components_default.a.div``;
const Search = external_styled_components_default.a.div`
display:flex;
align-items:center;
padding:20px;
border-radius:2px;

`;
const SearchInput = external_styled_components_default.a.input`
outline-width:0;
outline:none;
border:none;
flex:1;
`;
const SidebarButton = external_styled_components_default()(core_["Button"])`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;
// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "email-validator"
var external_email_validator_ = __webpack_require__("9MsW");

// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__("Ktyj");

// EXTERNAL MODULE: ./utils/getRecipientEmail.js
var getRecipientEmail = __webpack_require__("PtdR");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/ChatComponent.js












function ChatComponent({
  id,
  users
}) {
  var _recipientSnapshot$do, _recipientSnapshot$do2;

  const router = Object(router_["useRouter"])(); // console.log(users);

  const [user] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  const [recipientSnapshot] = Object(firestore_["useCollection"])(firebase["b" /* db */].collection("users").where("email", "==", Object(getRecipientEmail["a" /* default */])(users, user)));
  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  const recipientEmail = Object(getRecipientEmail["a" /* default */])(users, user); // console.log(recipientEmail);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ChatComponent_Container, {
    onClick: enterChat,
    children: [recipient ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChatComponent_UserAvatar, {
      src: recipient === null || recipient === void 0 ? void 0 : recipient.photoUrl
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChatComponent_UserAvatar, {
      className: "m-1 mr-2 ",
      children: recipientEmail[0]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: recipientEmail
    })]
  });
}

/* harmony default export */ var components_ChatComponent = (ChatComponent);
const ChatComponent_Container = external_styled_components_default.a.div.attrs({
  className: "flex items-center cursor-pointer p-4 break-words hover:bg-gray-300"
})``;
const ChatComponent_UserAvatar = external_styled_components_default()(core_["Avatar"])``;
// CONCATENATED MODULE: ./components/Sidebar.js















function Sidebar() {
  const [user] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  const userChatRef = firebase["b" /* db */].collection("chats").where('users', 'array-contains', user === null || user === void 0 ? void 0 : user.email);
  const [chatSnapshot] = Object(firestore_["useCollection"])(userChatRef);

  const createChat = () => {
    const input = prompt("Please enter an email address for the user you wish to chat with");
    if (!input) return null;

    if (external_email_validator_["validate"](input) && !chatAlreadyExists(input) && input !== user.email) {
      //we need to add chat in database
      firebase["b" /* db */].collection("chats").add({
        users: [user.email, input]
      });
    }
  };

  const chatAlreadyExists = recipientEmail => !!(chatSnapshot !== null && chatSnapshot !== void 0 && chatSnapshot.docs.find(chat => {
    var _chat$data$users$find;

    return ((_chat$data$users$find = chat.data().users.find(user => user === recipientEmail)) === null || _chat$data$users$find === void 0 ? void 0 : _chat$data$users$find.length) > 0;
  }));

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Header, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(UserAvatar, {
        src: user === null || user === void 0 ? void 0 : user.photoURL,
        onClick: () => firebase["a" /* auth */].signOut()
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(IconsContainer, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Chat_default.a, {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MoreVert_default.a, {})]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Search, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Search_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchInput, {
        placeholder: "Search in chates"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SidebarButton, {
      onClick: createChat,
      children: "Start new chat"
    }), chatSnapshot === null || chatSnapshot === void 0 ? void 0 : chatSnapshot.docs.map(chat => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ChatComponent, {
      id: chat.id,
      users: chat.data().users
    }, chat.id))]
  });
}

/* harmony default export */ var components_Sidebar = __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ "iHqE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mic");

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "mAUa":
/***/ (function(module, exports) {

module.exports = require("timeago-react");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "uXJ4":
/***/ (function(module, exports) {



/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });