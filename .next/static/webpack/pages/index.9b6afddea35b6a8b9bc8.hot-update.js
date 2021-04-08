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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);




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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
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

  var enterChat = function enterChat() {
    router.push("/chat/".concat(id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    onClick: enterChat,
    children: [recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(UserAvatar, {
      src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(UserAvatar, {
      className: "m-1 mr-2 ",
      children: recipientEmail[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
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

_s(ChatComponent, "Id0G0O7W1JL4v02wZN0uFhMboII=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"], react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__["useAuthState"], react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__["useCollection"]];
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

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "./node_modules/react-firebase-hooks/firestore/dist/index.esm.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/SidebarStyled */ "./styles/SidebarStyled.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _ChatComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ChatComponent */ "./components/ChatComponent.js");



var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Sidebar.js",
    _s = $RefreshSig$();














function Sidebar() {
  _s();

  var _this = this;

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]),
      _useAuthState2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useAuthState, 1),
      user = _useAuthState2[0];

  var userChatRef = _firebase__WEBPACK_IMPORTED_MODULE_12__["db"].collection("chats").where('users', 'array-contains', user === null || user === void 0 ? void 0 : user.email);

  var _useCollection = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__["useCollection"])(userChatRef),
      _useCollection2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useCollection, 1),
      chatSnapshot = _useCollection2[0];

  var createChat = function createChat() {
    var input = prompt("Please enter an email address for the user you wish to chat with");
    if (!input) return null;

    if (email_validator__WEBPACK_IMPORTED_MODULE_10__["validate"](input) && !chatAlreadyExists(input) && input !== user.email) {
      //we need to add chat in database
      _firebase__WEBPACK_IMPORTED_MODULE_12__["db"].collection("chats").add({
        users: [user.email, input]
      });
    }
  };

  var chatAlreadyExists = function chatAlreadyExists(recipientEmail) {
    return !!(chatSnapshot !== null && chatSnapshot !== void 0 && chatSnapshot.docs.find(function (chat) {
      var _chat$data$users$find;

      return ((_chat$data$users$find = chat.data().users.find(function (user) {
        return user === recipientEmail;
      })) === null || _chat$data$users$find === void 0 ? void 0 : _chat$data$users$find.length) > 0;
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["UserAvatar"], {
        src: user === null || user === void 0 ? void 0 : user.photoURL,
        onClick: function onClick() {
          return _firebase__WEBPACK_IMPORTED_MODULE_12__["auth"].signOut();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["IconsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["Search"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["SearchInput"], {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["SidebarButton"], {
      onClick: createChat,
      children: "Start new chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), chatSnapshot === null || chatSnapshot === void 0 ? void 0 : chatSnapshot.docs.map(function (chat) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: chat.id,
        users: chat.data().users
      }, chat.id, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 7
  }, this);
}

_s(Sidebar, "7luWkeeuCoSKy52gQDZfZ5btdwg=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"], react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__["useCollection"]];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOlsiQ2hhdENvbXBvbmVudCIsImlkIiwidXNlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsInVzZXIiLCJ1c2VDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJnZXRSZWNpcGllbnRFbWFpbCIsInJlY2lwaWVudFNuYXBzaG90IiwicmVjaXBpZW50IiwiZG9jcyIsImRhdGEiLCJyZWNpcGllbnRFbWFpbCIsImVudGVyQ2hhdCIsInB1c2giLCJwaG90b1VSTCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVXNlckF2YXRhciIsIkF2YXRhciIsIlNpZGViYXIiLCJ1c2VyQ2hhdFJlZiIsImVtYWlsIiwiY2hhdFNuYXBzaG90IiwiY3JlYXRlQ2hhdCIsImlucHV0IiwicHJvbXB0IiwiRW1haWxWYWxpZGF0b3IiLCJjaGF0QWxyZWFkeUV4aXN0cyIsImFkZCIsImZpbmQiLCJjaGF0IiwibGVuZ3RoIiwic2lnbk91dCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBc0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxFQUFhLFFBQWJBLEVBQWE7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjs7QUFIb0Msc0JBSXJCSyw4RUFBWSxDQUFDQyw4Q0FB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QUFBLGNBREosZUFFSSxxRUFBQyxpRUFBRDtBQUFhLG1CQUFXLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZOLGVBY00scUVBQUMsbUVBQUQ7QUFBZSxhQUFPLEVBQUVULFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZE4sRUFxQklELFlBckJKLGFBcUJJQSxZQXJCSix1QkFxQklBLFlBQVksQ0FBRWhCLElBQWQsQ0FBbUIyQixHQUFuQixDQUF1QixVQUFDSCxJQUFEO0FBQUEsMEJBQ3JCLHFFQUFDLHVEQUFEO0FBQTZCLFVBQUUsRUFBRUEsSUFBSSxDQUFDeEMsRUFBdEM7QUFBMEMsYUFBSyxFQUFFd0MsSUFBSSxDQUFDdkIsSUFBTCxHQUFZaEI7QUFBN0QsU0FBb0J1QyxJQUFJLENBQUN4QyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBdkIsQ0FyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Qkg7O0dBdkRRNkIsTztVQUNRdkIsc0UsRUFHUUcsNEU7OztLQUpoQm9CLE87QUF5RE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjliNmFmZGRlYTM1YjZhOGI5YmM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4gXHJcbmZ1bmN0aW9uIENoYXRDb21wb25lbnQoeyBpZCwgdXNlcnMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zb2xlLmxvZyh1c2Vycyk7XHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpXHJcbiAgY29uc3QgW3JlY2lwaWVudFNuYXBzaG90XT11c2VDb2xsZWN0aW9uKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS53aGVyZShcImVtYWlsXCIsXCI9PVwiICwgZ2V0UmVjaXBpZW50RW1haWwodXNlcnMsIHVzZXIpKSlcclxuICBjb25zdCByZWNpcGllbnQ9cmVjaXBpZW50U25hcHNob3Q/LmRvY3M/LlswXT8uZGF0YSgpXHJcbiAgY29uc3QgcmVjaXBpZW50RW1haWwgPSBnZXRSZWNpcGllbnRFbWFpbCh1c2VycywgdXNlcilcclxuICBjb25zb2xlLmxvZyhyZWNpcGllbnRFbWFpbCk7XHJcbiAgXHJcbiAgIFxyXG4gIGNvbnN0IGVudGVyQ2hhdCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvY2hhdC8ke2lkfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8Q29udGFpbmVyIG9uQ2xpY2s9e2VudGVyQ2hhdH0gPlxyXG4gICAgICB7cmVjaXBpZW50ID8gKFxyXG4gICAgICAgIDxVc2VyQXZhdGFyIHNyYz17cmVjaXBpZW50Py5waG90b1VSTH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8VXNlckF2YXRhciBjbGFzc05hbWU9XCJtLTEgbXItMiBcIj57cmVjaXBpZW50RW1haWxbMF19PC9Vc2VyQXZhdGFyPlxyXG4gICAgICApfVxyXG4gICAgICA8cD57cmVjaXBpZW50RW1haWx9PC9wPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbXBvbmVudFxyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogXCJmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBwLTQgYnJlYWstd29yZHMgaG92ZXI6YmctZ3JheS0zMDBcIixcclxufSlgYDtcclxuY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpYGA7IiwiaW1wb3J0IHsgIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHt1c2VDb2xsZWN0aW9ufSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBVc2VyQXZhdGFyLCBJY29uc0NvbnRhaW5lciwgSGVhZGVyLCBTZWFyY2gsIFNlYXJjaElucHV0LCBTaWRlYmFyQnV0dG9uIH0gZnJvbSAnLi4vc3R5bGVzL1NpZGViYXJTdHlsZWQnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5pbXBvcnQgKiBhcyBFbWFpbFZhbGlkYXRvciBmcm9tIFwiZW1haWwtdmFsaWRhdG9yXCJcclxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgQ2hhdENvbXBvbmVudCBmcm9tICcuL0NoYXRDb21wb25lbnQnO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcblxyXG4gICAgY29uc3QgdXNlckNoYXRSZWYgPSBkYi5jb2xsZWN0aW9uKFwiY2hhdHNcIikud2hlcmUoJ3VzZXJzJywgJ2FycmF5LWNvbnRhaW5zJywgdXNlcj8uZW1haWwpXHJcbiAgY29uc3QgW2NoYXRTbmFwc2hvdF0gPSB1c2VDb2xsZWN0aW9uKHVzZXJDaGF0UmVmKTtcclxuIFxyXG5jb25zdCBjcmVhdGVDaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gcHJvbXB0KFxyXG4gICAgXCJQbGVhc2UgZW50ZXIgYW4gZW1haWwgYWRkcmVzcyBmb3IgdGhlIHVzZXIgeW91IHdpc2ggdG8gY2hhdCB3aXRoXCJcclxuICApO1xyXG5cclxuICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcclxuICBpZiAoXHJcbiAgICBFbWFpbFZhbGlkYXRvci52YWxpZGF0ZShpbnB1dCkgJiZcclxuICAgICFjaGF0QWxyZWFkeUV4aXN0cyhpbnB1dCkgICYmXHJcbiAgICBpbnB1dCAhPT0gdXNlci5lbWFpbFxyXG4gICkge1xyXG4gICAgLy93ZSBuZWVkIHRvIGFkZCBjaGF0IGluIGRhdGFiYXNlXHJcbiAgICBkYi5jb2xsZWN0aW9uKFwiY2hhdHNcIikuYWRkKHtcclxuICAgICAgdXNlcnM6IFt1c2VyLmVtYWlsLCBpbnB1dF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4gICAgY29uc3QgY2hhdEFscmVhZHlFeGlzdHMgPSAocmVjaXBpZW50RW1haWwpID0+IFxyXG4gICAgICAgISFjaGF0U25hcHNob3Q/LmRvY3MuZmluZCgoY2hhdCkgPT4gY2hhdC5kYXRhKCkudXNlcnMuZmluZCgodXNlcikgPT51c2VyPT09IHJlY2lwaWVudEVtYWlsKT8ubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgPFVzZXJBdmF0YXIgc3JjPXt1c2VyPy5waG90b1VSTH0gb25DbGljaz17KCk9PmF1dGguc2lnbk91dCgpfSAvPlxyXG4gICAgICAgICAgPEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8Q2hhdCAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBjaGF0ZXNcIi8+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoPlxyXG4gICAgICAgICAgICA8U2lkZWJhckJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVDaGF0fT5cclxuICAgICAgICAgIFN0YXJ0IG5ldyBjaGF0XHJcbiAgICAgICAgICAgIDwvU2lkZWJhckJ1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICB7LyogbGlzdCBvZiBjaGF0cyBjb250YWN0ICovfVxyXG4gICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYXRTbmFwc2hvdD8uZG9jcy5tYXAoKGNoYXQpID0+IChcclxuICAgICAgICAgICAgPENoYXRDb21wb25lbnQga2V5PXtjaGF0LmlkfSBpZD17Y2hhdC5pZH0gdXNlcnM9e2NoYXQuZGF0YSgpLnVzZXJzfS8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=