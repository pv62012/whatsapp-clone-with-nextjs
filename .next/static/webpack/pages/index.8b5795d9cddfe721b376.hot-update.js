webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _ChatComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ChatComponent */ "./components/ChatComponent.js");



var _jsxFileName = "C:\\Users\\Wait for magic\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Sidebar.js",
    _s = $RefreshSig$();















function Sidebar() {
  _s();

  var _this = this;

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]),
      _useAuthState2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useAuthState, 1),
      user = _useAuthState2[0];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  var userChatRef = _firebase__WEBPACK_IMPORTED_MODULE_13__["db"].collection("chats").where('users', 'array-contains', user === null || user === void 0 ? void 0 : user.email);

  var _useCollection = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__["useCollection"])(userChatRef),
      _useCollection2 = Object(C_Users_Wait_for_magic_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useCollection, 1),
      chatSnapshot = _useCollection2[0];

  var createChat = function createChat() {
    var input = prompt("Please enter an email address for the user you wish to chat with");
    if (!input) return null;

    if (email_validator__WEBPACK_IMPORTED_MODULE_10__["validate"](input) && !chatAlreadyExists(input) && input !== user.email) {
      //we need to add chat in database
      _firebase__WEBPACK_IMPORTED_MODULE_13__["db"].collection("chats").add({
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
          return _firebase__WEBPACK_IMPORTED_MODULE_13__["auth"].signOut();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["IconsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["Search"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["SearchInput"], {
        placeholder: "Search in chates"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["SidebarButton"], {
      onClick: createChat,
      children: "Start new chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), chatSnapshot === null || chatSnapshot === void 0 ? void 0 : chatSnapshot.docs.map(function (chat) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatComponent__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: chat.id,
        users: chat.data().users
      }, chat.id, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }, this);
}

_s(Sidebar, "QK7usMPzLHaknaAx5ELeKUBdXIY=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"], next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"], react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__["useCollection"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwidXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXJDaGF0UmVmIiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJlbWFpbCIsInVzZUNvbGxlY3Rpb24iLCJjaGF0U25hcHNob3QiLCJjcmVhdGVDaGF0IiwiaW5wdXQiLCJwcm9tcHQiLCJFbWFpbFZhbGlkYXRvciIsImNoYXRBbHJlYWR5RXhpc3RzIiwiYWRkIiwidXNlcnMiLCJyZWNpcGllbnRFbWFpbCIsImRvY3MiLCJmaW5kIiwiY2hhdCIsImRhdGEiLCJsZW5ndGgiLCJwaG90b1VSTCIsInNpZ25PdXQiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxzQkFDRkMsOEVBQVksQ0FBQ0MsK0NBQUQsQ0FEVjtBQUFBO0FBQUEsTUFDVkMsSUFEVTs7QUFFakIsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUVFLE1BQU1DLFdBQVcsR0FBR0MsNkNBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEtBQXZCLENBQTZCLE9BQTdCLEVBQXNDLGdCQUF0QyxFQUF3RE4sSUFBeEQsYUFBd0RBLElBQXhELHVCQUF3REEsSUFBSSxDQUFFTyxLQUE5RCxDQUFwQjs7QUFKZSx1QkFLTUMsb0ZBQWEsQ0FBQ0wsV0FBRCxDQUxuQjtBQUFBO0FBQUEsTUFLVk0sWUFMVTs7QUFPbkIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FDbEIsa0VBRGtCLENBQXBCO0FBSUEsUUFBSSxDQUFDRCxLQUFMLEVBQVksT0FBTyxJQUFQOztBQUNaLFFBQ0VFLHlEQUFBLENBQXdCRixLQUF4QixLQUNBLENBQUNHLGlCQUFpQixDQUFDSCxLQUFELENBRGxCLElBRUFBLEtBQUssS0FBS1gsSUFBSSxDQUFDTyxLQUhqQixFQUlFO0FBQ0E7QUFDQUgsbURBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJVLEdBQXZCLENBQTJCO0FBQ3pCQyxhQUFLLEVBQUUsQ0FBQ2hCLElBQUksQ0FBQ08sS0FBTixFQUFhSSxLQUFiO0FBRGtCLE9BQTNCO0FBR0Q7QUFDRixHQWhCRDs7QUFrQkksTUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDRyxjQUFEO0FBQUEsV0FDdkIsQ0FBQyxFQUFDUixZQUFELGFBQUNBLFlBQUQsZUFBQ0EsWUFBWSxDQUFFUyxJQUFkLENBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxJQUFEO0FBQUE7O0FBQUEsYUFBVSwwQkFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVlMLEtBQVosQ0FBa0JHLElBQWxCLENBQXVCLFVBQUNuQixJQUFEO0FBQUEsZUFBU0EsSUFBSSxLQUFJaUIsY0FBakI7QUFBQSxPQUF2QixpRkFBeURLLE1BQXpELElBQWtFLENBQTVFO0FBQUEsS0FBeEIsQ0FBRCxDQURzQjtBQUFBLEdBQTFCOztBQUdBLHNCQUNFLHFFQUFDLCtEQUFEO0FBQUEsNEJBQ0UscUVBQUMsNERBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnRUFBRDtBQUFZLFdBQUcsRUFBRXRCLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFdUIsUUFBdkI7QUFBaUMsZUFBTyxFQUFFO0FBQUEsaUJBQUl4QiwrQ0FBSSxDQUFDeUIsT0FBTCxFQUFKO0FBQUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsb0VBQUQ7QUFBQSxnQ0FDRSxxRUFBQyw0REFBRDtBQUFBLGlDQUNFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVNLHFFQUFDLDREQUFEO0FBQUEsOEJBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsaUVBQUQ7QUFBYSxtQkFBVyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWTixlQWNNLHFFQUFDLG1FQUFEO0FBQWUsYUFBTyxFQUFFZCxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWROLEVBcUJJRCxZQXJCSixhQXFCSUEsWUFyQkosdUJBcUJJQSxZQUFZLENBQUVTLElBQWQsQ0FBbUJPLEdBQW5CLENBQXVCLFVBQUNMLElBQUQ7QUFBQSwwQkFDckIscUVBQUMsdURBQUQ7QUFBNkIsVUFBRSxFQUFFQSxJQUFJLENBQUNNLEVBQXRDO0FBQTBDLGFBQUssRUFBRU4sSUFBSSxDQUFDQyxJQUFMLEdBQVlMO0FBQTdELFNBQW9CSSxJQUFJLENBQUNNLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcUI7QUFBQSxLQUF2QixDQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCSDs7R0F4RFE3QixPO1VBQ1FDLHNFLEVBQ0FJLHNELEVBR1FNLDRFOzs7S0FMaEJYLE87QUEwRE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhiNTc5NWQ5Y2RkZmU3MjFiMzc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQge3VzZUNvbGxlY3Rpb259IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSdcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFVzZXJBdmF0YXIsIEljb25zQ29udGFpbmVyLCBIZWFkZXIsIFNlYXJjaCwgU2VhcmNoSW5wdXQsIFNpZGViYXJCdXR0b24gfSBmcm9tICcuLi9zdHlsZXMvU2lkZWJhclN0eWxlZCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCAqIGFzIEVtYWlsVmFsaWRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIlxyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IENoYXRDb21wb25lbnQgZnJvbSAnLi9DaGF0Q29tcG9uZW50JztcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJDaGF0UmVmID0gZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLndoZXJlKCd1c2VycycsICdhcnJheS1jb250YWlucycsIHVzZXI/LmVtYWlsKVxyXG4gIGNvbnN0IFtjaGF0U25hcHNob3RdID0gdXNlQ29sbGVjdGlvbih1c2VyQ2hhdFJlZik7XHJcbiBcclxuY29uc3QgY3JlYXRlQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBpbnB1dCA9IHByb21wdChcclxuICAgIFwiUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MgZm9yIHRoZSB1c2VyIHlvdSB3aXNoIHRvIGNoYXQgd2l0aFwiXHJcbiAgKTtcclxuXHJcbiAgaWYgKCFpbnB1dCkgcmV0dXJuIG51bGw7XHJcbiAgaWYgKFxyXG4gICAgRW1haWxWYWxpZGF0b3IudmFsaWRhdGUoaW5wdXQpICYmXHJcbiAgICAhY2hhdEFscmVhZHlFeGlzdHMoaW5wdXQpICAmJlxyXG4gICAgaW5wdXQgIT09IHVzZXIuZW1haWxcclxuICApIHtcclxuICAgIC8vd2UgbmVlZCB0byBhZGQgY2hhdCBpbiBkYXRhYmFzZVxyXG4gICAgZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLmFkZCh7XHJcbiAgICAgIHVzZXJzOiBbdXNlci5lbWFpbCwgaW5wdXRdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuICAgIGNvbnN0IGNoYXRBbHJlYWR5RXhpc3RzID0gKHJlY2lwaWVudEVtYWlsKSA9PiBcclxuICAgICAgICEhY2hhdFNuYXBzaG90Py5kb2NzLmZpbmQoKGNoYXQpID0+IGNoYXQuZGF0YSgpLnVzZXJzLmZpbmQoKHVzZXIpID0+dXNlcj09PSByZWNpcGllbnRFbWFpbCk/Lmxlbmd0aCA+IDApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgIDxVc2VyQXZhdGFyIHNyYz17dXNlcj8ucGhvdG9VUkx9IG9uQ2xpY2s9eygpPT5hdXRoLnNpZ25PdXQoKX0gLz5cclxuICAgICAgICAgIDxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPENoYXQgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPFNlYXJjaD5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gY2hhdGVzXCIvPlxyXG4gICAgICAgICAgICA8L1NlYXJjaD5cclxuICAgICAgICAgICAgPFNpZGViYXJCdXR0b24gb25DbGljaz17Y3JlYXRlQ2hhdH0+XHJcbiAgICAgICAgICBTdGFydCBuZXcgY2hhdFxyXG4gICAgICAgICAgICA8L1NpZGViYXJCdXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIGxpc3Qgb2YgY2hhdHMgY29udGFjdCAqL31cclxuICAgICBcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjaGF0U25hcHNob3Q/LmRvY3MubWFwKChjaGF0KSA9PiAoXHJcbiAgICAgICAgICAgIDxDaGF0Q29tcG9uZW50IGtleT17Y2hhdC5pZH0gaWQ9e2NoYXQuaWR9IHVzZXJzPXtjaGF0LmRhdGEoKS51c2Vyc30vPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9