webpackHotUpdate_N_E("pages/chat/[id]",{

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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])(); // console.log(users);

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]),
      _useAuthState2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useAuthState, 1),
      user = _useAuthState2[0];

  var _useCollection = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__["useCollection"])(_firebase__WEBPACK_IMPORTED_MODULE_9__["db"].collection("users").where("email", "==", Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_10__["default"])(users, user))),
      _useCollection2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCollection, 1),
      recipientSnapshot = _useCollection2[0];

  var recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  var recipientEmail = Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_10__["default"])(users, user); // console.log(recipientEmail);

  var enterChat = function enterChat() {
    router.push("/chat/".concat(id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    onClick: enterChat,
    children: [recipient ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [console.log(recipient === null || recipient === void 0 ? void 0 : recipient.photoURL), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(UserAvatar, {
        src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(UserAvatar, {
      className: "m-1 mr-2 ",
      children: recipientEmail[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: recipientEmail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
        lineNumber: 45,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["IconsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["Search"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["SearchInput"], {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["SidebarButton"], {
      onClick: createChat,
      children: "Start new chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), chatSnapshot === null || chatSnapshot === void 0 ? void 0 : chatSnapshot.docs.map(function (chat) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: chat.id,
        users: chat.data().users
      }, chat.id, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOlsiQ2hhdENvbXBvbmVudCIsImlkIiwidXNlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwidXNlciIsInVzZUNvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImdldFJlY2lwaWVudEVtYWlsIiwicmVjaXBpZW50U25hcHNob3QiLCJyZWNpcGllbnQiLCJkb2NzIiwiZGF0YSIsInJlY2lwaWVudEVtYWlsIiwiZW50ZXJDaGF0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJwaG90b1VSTCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVXNlckF2YXRhciIsIkF2YXRhciIsIlNpZGViYXIiLCJ1c2VyQ2hhdFJlZiIsImVtYWlsIiwiY2hhdFNuYXBzaG90IiwiY3JlYXRlQ2hhdCIsImlucHV0IiwicHJvbXB0IiwiRW1haWxWYWxpZGF0b3IiLCJjaGF0QWxyZWFkeUV4aXN0cyIsImFkZCIsImZpbmQiLCJjaGF0IiwibGVuZ3RoIiwic2lnbk91dCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BQXNDO0FBQUE7O0FBQUE7O0FBQUEsTUFBYkMsRUFBYSxRQUFiQSxFQUFhO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEIsQ0FEb0MsQ0FHcEM7O0FBSG9DLHNCQUlyQkMsOEVBQVksQ0FBQ0MsOENBQUQsQ0FKUztBQUFBO0FBQUEsTUFJ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V00scUVBQUMsNERBQUQ7QUFBQSw4QkFDSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyxpRUFBRDtBQUFhLG1CQUFXLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhOLGVBZU0scUVBQUMsbUVBQUQ7QUFBZSxhQUFPLEVBQUVULFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZk4sRUFzQklELFlBdEJKLGFBc0JJQSxZQXRCSix1QkFzQklBLFlBQVksQ0FBRWxCLElBQWQsQ0FBbUI2QixHQUFuQixDQUF1QixVQUFDSCxJQUFEO0FBQUEsMEJBQ3JCLHFFQUFDLHVEQUFEO0FBQTZCLFVBQUUsRUFBRUEsSUFBSSxDQUFDeEMsRUFBdEM7QUFBMEMsYUFBSyxFQUFFd0MsSUFBSSxDQUFDekIsSUFBTCxHQUFZZDtBQUE3RCxTQUFvQnVDLElBQUksQ0FBQ3hDLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcUI7QUFBQSxLQUF2QixDQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCSDs7R0F4RFE2QixPO1VBQ1F6QixzRSxFQUdRRyw0RTs7O0tBSmhCc0IsTztBQTBETUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC9baWRdLjFhZDM3NGQyMGMzN2NiZDY3MGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBnZXRSZWNpcGllbnRFbWFpbCBmcm9tICcuLi91dGlscy9nZXRSZWNpcGllbnRFbWFpbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4gXHJcbmZ1bmN0aW9uIENoYXRDb21wb25lbnQoeyBpZCwgdXNlcnMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyh1c2Vycyk7XHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpXHJcbiAgY29uc3QgW3JlY2lwaWVudFNuYXBzaG90XT11c2VDb2xsZWN0aW9uKGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS53aGVyZShcImVtYWlsXCIsXCI9PVwiICwgZ2V0UmVjaXBpZW50RW1haWwodXNlcnMsIHVzZXIpKSlcclxuICBjb25zdCByZWNpcGllbnQ9cmVjaXBpZW50U25hcHNob3Q/LmRvY3M/LlswXT8uZGF0YSgpXHJcbiAgY29uc3QgcmVjaXBpZW50RW1haWwgPSBnZXRSZWNpcGllbnRFbWFpbCh1c2VycywgdXNlcilcclxuICAvLyBjb25zb2xlLmxvZyhyZWNpcGllbnRFbWFpbCk7XHJcbiAgXHJcbiAgIFxyXG4gIGNvbnN0IGVudGVyQ2hhdCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvY2hhdC8ke2lkfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgb25DbGljaz17ZW50ZXJDaGF0fT5cclxuICAgICAge3JlY2lwaWVudCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2NvbnNvbGUubG9nKHJlY2lwaWVudD8ucGhvdG9VUkwpfVxyXG4gICAgICAgICAgPFVzZXJBdmF0YXIgc3JjPXtyZWNpcGllbnQ/LnBob3RvVVJMfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxVc2VyQXZhdGFyIGNsYXNzTmFtZT1cIm0tMSBtci0yIFwiPntyZWNpcGllbnRFbWFpbFswXX08L1VzZXJBdmF0YXI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxwPntyZWNpcGllbnRFbWFpbH08L3A+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29tcG9uZW50XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiBcImZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHAtNCBicmVhay13b3JkcyBob3ZlcjpiZy1ncmF5LTMwMFwiLFxyXG59KWBgO1xyXG5jb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkKEF2YXRhcilgYDsiLCJpbXBvcnQgeyAgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQge3VzZUNvbGxlY3Rpb259IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSdcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFVzZXJBdmF0YXIsIEljb25zQ29udGFpbmVyLCBIZWFkZXIsIFNlYXJjaCwgU2VhcmNoSW5wdXQsIFNpZGViYXJCdXR0b24gfSBmcm9tICcuLi9zdHlsZXMvU2lkZWJhclN0eWxlZCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCAqIGFzIEVtYWlsVmFsaWRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIlxyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBDaGF0Q29tcG9uZW50IGZyb20gJy4vQ2hhdENvbXBvbmVudCc7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ2hhdFJlZiA9IGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS53aGVyZSgndXNlcnMnLCAnYXJyYXktY29udGFpbnMnLCB1c2VyPy5lbWFpbClcclxuICBjb25zdCBbY2hhdFNuYXBzaG90XSA9IHVzZUNvbGxlY3Rpb24odXNlckNoYXRSZWYpO1xyXG4gXHJcbmNvbnN0IGNyZWF0ZUNoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXQgPSBwcm9tcHQoXHJcbiAgICBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzIGZvciB0aGUgdXNlciB5b3Ugd2lzaCB0byBjaGF0IHdpdGhcIlxyXG4gICk7XHJcblxyXG4gIGlmICghaW5wdXQpIHJldHVybiBudWxsO1xyXG4gIGlmIChcclxuICAgIEVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlKGlucHV0KSAmJlxyXG4gICAgIWNoYXRBbHJlYWR5RXhpc3RzKGlucHV0KSAgJiZcclxuICAgIGlucHV0ICE9PSB1c2VyLmVtYWlsXHJcbiAgKSB7XHJcbiAgICAvL3dlIG5lZWQgdG8gYWRkIGNoYXQgaW4gZGF0YWJhc2VcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5hZGQoe1xyXG4gICAgICB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbiAgICBjb25zdCBjaGF0QWxyZWFkeUV4aXN0cyA9IChyZWNpcGllbnRFbWFpbCkgPT4gXHJcbiAgICAgICAhIWNoYXRTbmFwc2hvdD8uZG9jcy5maW5kKChjaGF0KSA9PiBjaGF0LmRhdGEoKS51c2Vycy5maW5kKCh1c2VyKSA9PnVzZXI9PT0gcmVjaXBpZW50RW1haWwpPy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIHsvKiB7Y29uc29sZS5sb2codXNlcj8ucGhvdG9VUkwpfSAqL31cclxuICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgPFVzZXJBdmF0YXIgc3JjPXt1c2VyPy5waG90b1VSTH0gb25DbGljaz17KCk9PmF1dGguc2lnbk91dCgpfSAvPlxyXG4gICAgICAgICAgPEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8Q2hhdCAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBjaGF0ZXNcIi8+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoPlxyXG4gICAgICAgICAgICA8U2lkZWJhckJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVDaGF0fT5cclxuICAgICAgICAgIFN0YXJ0IG5ldyBjaGF0XHJcbiAgICAgICAgICAgIDwvU2lkZWJhckJ1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICB7LyogbGlzdCBvZiBjaGF0cyBjb250YWN0ICovfVxyXG4gICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYXRTbmFwc2hvdD8uZG9jcy5tYXAoKGNoYXQpID0+IChcclxuICAgICAgICAgICAgPENoYXRDb21wb25lbnQga2V5PXtjaGF0LmlkfSBpZD17Y2hhdC5pZH0gdXNlcnM9e2NoYXQuZGF0YSgpLnVzZXJzfS8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=