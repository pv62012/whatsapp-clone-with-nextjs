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
/* harmony import */ var C_Users_verma_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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



var _jsxFileName = "C:\\Users\\verma\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\components\\Sidebar.js",
    _s = $RefreshSig$();














function Sidebar() {
  _s();

  var _this = this;

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]),
      _useAuthState2 = Object(C_Users_verma_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useAuthState, 1),
      user = _useAuthState2[0];

  var userChatRef = _firebase__WEBPACK_IMPORTED_MODULE_12__["db"].collection("chats").where('users', 'array-contains', user === null || user === void 0 ? void 0 : user.email);

  var _useCollection = Object(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__["useCollection"])(userChatRef),
      _useCollection2 = Object(C_Users_verma_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useCollection, 1),
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
    className: "hidden md:flex md:flex-col",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["UserAvatar"], {
        src: user === null || user === void 0 ? void 0 : user.photoURL,
        onClick: function onClick() {
          return _firebase__WEBPACK_IMPORTED_MODULE_12__["auth"].signOut();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["IconsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["Search"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["SearchInput"], {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["SidebarButton"], {
      onClick: createChat,
      children: "Start new chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SidebarStyled__WEBPACK_IMPORTED_MODULE_8__["ChatUserList"], {
      children: chatSnapshot === null || chatSnapshot === void 0 ? void 0 : chatSnapshot.docs.map(function (chat) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: chat.id,
          users: chat.data().users
        }, chat.id, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, _this);
      })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwidXNlciIsInVzZXJDaGF0UmVmIiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJlbWFpbCIsInVzZUNvbGxlY3Rpb24iLCJjaGF0U25hcHNob3QiLCJjcmVhdGVDaGF0IiwiaW5wdXQiLCJwcm9tcHQiLCJFbWFpbFZhbGlkYXRvciIsImNoYXRBbHJlYWR5RXhpc3RzIiwiYWRkIiwidXNlcnMiLCJyZWNpcGllbnRFbWFpbCIsImRvY3MiLCJmaW5kIiwiY2hhdCIsImRhdGEiLCJsZW5ndGgiLCJwaG90b1VSTCIsInNpZ25PdXQiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLHNCQUNGQyw4RUFBWSxDQUFDQywrQ0FBRCxDQURWO0FBQUE7QUFBQSxNQUNWQyxJQURVOztBQUdmLE1BQU1DLFdBQVcsR0FBR0MsNkNBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEtBQXZCLENBQTZCLE9BQTdCLEVBQXNDLGdCQUF0QyxFQUF3REosSUFBeEQsYUFBd0RBLElBQXhELHVCQUF3REEsSUFBSSxDQUFFSyxLQUE5RCxDQUFwQjs7QUFIZSx1QkFJTUMsb0ZBQWEsQ0FBQ0wsV0FBRCxDQUpuQjtBQUFBO0FBQUEsTUFJVk0sWUFKVTs7QUFNbkIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FDbEIsa0VBRGtCLENBQXBCO0FBSUEsUUFBSSxDQUFDRCxLQUFMLEVBQVksT0FBTyxJQUFQOztBQUNaLFFBQ0VFLHlEQUFBLENBQXdCRixLQUF4QixLQUNBLENBQUNHLGlCQUFpQixDQUFDSCxLQUFELENBRGxCLElBRUFBLEtBQUssS0FBS1QsSUFBSSxDQUFDSyxLQUhqQixFQUlFO0FBQ0E7QUFDQUgsbURBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJVLEdBQXZCLENBQTJCO0FBQ3pCQyxhQUFLLEVBQUUsQ0FBQ2QsSUFBSSxDQUFDSyxLQUFOLEVBQWFJLEtBQWI7QUFEa0IsT0FBM0I7QUFHRDtBQUNGLEdBaEJEOztBQWtCSSxNQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNHLGNBQUQ7QUFBQSxXQUN2QixDQUFDLEVBQUNSLFlBQUQsYUFBQ0EsWUFBRCxlQUFDQSxZQUFZLENBQUVTLElBQWQsQ0FBbUJDLElBQW5CLENBQXdCLFVBQUNDLElBQUQ7QUFBQTs7QUFBQSxhQUFVLDBCQUFBQSxJQUFJLENBQUNDLElBQUwsR0FBWUwsS0FBWixDQUFrQkcsSUFBbEIsQ0FBdUIsVUFBQ2pCLElBQUQ7QUFBQSxlQUFTQSxJQUFJLEtBQUllLGNBQWpCO0FBQUEsT0FBdkIsaUZBQXlESyxNQUF6RCxJQUFrRSxDQUE1RTtBQUFBLEtBQXhCLENBQUQsQ0FEc0I7QUFBQSxHQUExQjs7QUFHQSxzQkFDRSxxRUFBQywrREFBRDtBQUFXLGFBQVMsRUFBQyw0QkFBckI7QUFBQSw0QkFFRSxxRUFBQyw0REFBRDtBQUFBLDhCQUNFLHFFQUFDLGdFQUFEO0FBQVksV0FBRyxFQUFFcEIsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVxQixRQUF2QjtBQUFpQyxlQUFPLEVBQUU7QUFBQSxpQkFBTXRCLCtDQUFJLENBQUN1QixPQUFMLEVBQU47QUFBQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxvRUFBRDtBQUFBLGdDQUNFLHFFQUFDLDREQUFEO0FBQUEsaUNBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBV0UscUVBQUMsNERBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxpRUFBRDtBQUFhLG1CQUFXLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBZUUscUVBQUMsbUVBQUQ7QUFBZSxhQUFPLEVBQUVkLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFrQkUscUVBQUMsa0VBQUQ7QUFBQSxnQkFDR0QsWUFESCxhQUNHQSxZQURILHVCQUNHQSxZQUFZLENBQUVTLElBQWQsQ0FBbUJPLEdBQW5CLENBQXVCLFVBQUNMLElBQUQ7QUFBQSw0QkFDdEIscUVBQUMsdURBQUQ7QUFFRSxZQUFFLEVBQUVBLElBQUksQ0FBQ00sRUFGWDtBQUdFLGVBQUssRUFBRU4sSUFBSSxDQUFDQyxJQUFMLEdBQVlMO0FBSHJCLFdBQ09JLElBQUksQ0FBQ00sRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURzQjtBQUFBLE9BQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCSDs7R0F6RFEzQixPO1VBQ1FDLHNFLEVBR1FRLDRFOzs7S0FKaEJULE87QUEyRE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkMTZjOTliZGQ4N2JhYjIyZDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQge3VzZUNvbGxlY3Rpb259IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSdcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdFwiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBVc2VyQXZhdGFyLFxyXG4gIEljb25zQ29udGFpbmVyLFxyXG4gIEhlYWRlcixcclxuICBTZWFyY2gsXHJcbiAgU2VhcmNoSW5wdXQsXHJcbiAgU2lkZWJhckJ1dHRvbixcclxuICBDaGF0VXNlckxpc3QsXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TaWRlYmFyU3R5bGVkXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCAqIGFzIEVtYWlsVmFsaWRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIlxyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCBDaGF0Q29tcG9uZW50IGZyb20gJy4vQ2hhdENvbXBvbmVudCc7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ2hhdFJlZiA9IGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS53aGVyZSgndXNlcnMnLCAnYXJyYXktY29udGFpbnMnLCB1c2VyPy5lbWFpbClcclxuICBjb25zdCBbY2hhdFNuYXBzaG90XSA9IHVzZUNvbGxlY3Rpb24odXNlckNoYXRSZWYpO1xyXG4gXHJcbmNvbnN0IGNyZWF0ZUNoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXQgPSBwcm9tcHQoXHJcbiAgICBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzIGZvciB0aGUgdXNlciB5b3Ugd2lzaCB0byBjaGF0IHdpdGhcIlxyXG4gICk7XHJcblxyXG4gIGlmICghaW5wdXQpIHJldHVybiBudWxsO1xyXG4gIGlmIChcclxuICAgIEVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlKGlucHV0KSAmJlxyXG4gICAgIWNoYXRBbHJlYWR5RXhpc3RzKGlucHV0KSAgJiZcclxuICAgIGlucHV0ICE9PSB1c2VyLmVtYWlsXHJcbiAgKSB7XHJcbiAgICAvL3dlIG5lZWQgdG8gYWRkIGNoYXQgaW4gZGF0YWJhc2VcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5hZGQoe1xyXG4gICAgICB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbiAgICBjb25zdCBjaGF0QWxyZWFkeUV4aXN0cyA9IChyZWNpcGllbnRFbWFpbCkgPT4gXHJcbiAgICAgICAhIWNoYXRTbmFwc2hvdD8uZG9jcy5maW5kKChjaGF0KSA9PiBjaGF0LmRhdGEoKS51c2Vycy5maW5kKCh1c2VyKSA9PnVzZXI9PT0gcmVjaXBpZW50RW1haWwpPy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IG1kOmZsZXgtY29sXCI+XHJcbiAgICAgICAgey8qIHtjb25zb2xlLmxvZyh1c2VyPy5waG90b1VSTCl9ICovfVxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8VXNlckF2YXRhciBzcmM9e3VzZXI/LnBob3RvVVJMfSBvbkNsaWNrPXsoKSA9PiBhdXRoLnNpZ25PdXQoKX0gLz5cclxuICAgICAgICAgIDxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPENoYXQgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIDxTZWFyY2g+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgPFNlYXJjaElucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGNoYXRlc1wiIC8+XHJcbiAgICAgICAgPC9TZWFyY2g+XHJcbiAgICAgICAgPFNpZGViYXJCdXR0b24gb25DbGljaz17Y3JlYXRlQ2hhdH0+U3RhcnQgbmV3IGNoYXQ8L1NpZGViYXJCdXR0b24+XHJcblxyXG4gICAgICAgIHsvKiBsaXN0IG9mIGNoYXRzIGNvbnRhY3QgKi99XHJcbiAgICAgICAgPENoYXRVc2VyTGlzdD5cclxuICAgICAgICAgIHtjaGF0U25hcHNob3Q/LmRvY3MubWFwKChjaGF0KSA9PiAoXHJcbiAgICAgICAgICAgIDxDaGF0Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAga2V5PXtjaGF0LmlkfVxyXG4gICAgICAgICAgICAgIGlkPXtjaGF0LmlkfVxyXG4gICAgICAgICAgICAgIHVzZXJzPXtjaGF0LmRhdGEoKS51c2Vyc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2hhdFVzZXJMaXN0PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==