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

  console.log(user.email);
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
    lineNumber: 43,
    columnNumber: 7
  }, this);
}

_s(Sidebar, "LZeOzJbkSbolRNip8kPldAOKoW0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsInVzZXJDaGF0UmVmIiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJ1c2VDb2xsZWN0aW9uIiwiY2hhdFNuYXBzaG90IiwiY3JlYXRlQ2hhdCIsImlucHV0IiwicHJvbXB0IiwiRW1haWxWYWxpZGF0b3IiLCJjaGF0QWxyZWFkeUV4aXN0cyIsImFkZCIsInVzZXJzIiwicmVjaXBpZW50RW1haWwiLCJkb2NzIiwiZmluZCIsImNoYXQiLCJkYXRhIiwibGVuZ3RoIiwic2lnbk91dCIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsc0JBQ0FDLDhFQUFZLENBQUNDLCtDQUFELENBRFo7QUFBQTtBQUFBLE1BQ1RDLElBRFM7O0FBRWpCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxLQUFqQjtBQUNFLE1BQU1DLFdBQVcsR0FBR0MsNkNBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEtBQXZCLENBQTZCLE9BQTdCLEVBQXNDLGdCQUF0QyxFQUF3RFAsSUFBeEQsYUFBd0RBLElBQXhELHVCQUF3REEsSUFBSSxDQUFFRyxLQUE5RCxDQUFwQjs7QUFIZSx1QkFJTUssb0ZBQWEsQ0FBQ0osV0FBRCxDQUpuQjtBQUFBO0FBQUEsTUFJVkssWUFKVTs7QUFNbkIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FDbEIsa0VBRGtCLENBQXBCO0FBSUEsUUFBSSxDQUFDRCxLQUFMLEVBQVksT0FBTyxJQUFQOztBQUNaLFFBQ0VFLHlEQUFBLENBQXdCRixLQUF4QixLQUNBLENBQUNHLGlCQUFpQixDQUFDSCxLQUFELENBRGxCLElBRUFBLEtBQUssS0FBS1gsSUFBSSxDQUFDRyxLQUhqQixFQUlFO0FBQ0E7QUFDQUUsbURBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJTLEdBQXZCLENBQTJCO0FBQ3pCQyxhQUFLLEVBQUUsQ0FBQ2hCLElBQUksQ0FBQ0csS0FBTixFQUFhUSxLQUFiO0FBRGtCLE9BQTNCO0FBR0Q7QUFDRixHQWhCRDs7QUFrQkksTUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDRyxjQUFEO0FBQUEsV0FDdkIsQ0FBQyxFQUFDUixZQUFELGFBQUNBLFlBQUQsZUFBQ0EsWUFBWSxDQUFFUyxJQUFkLENBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxJQUFEO0FBQUE7O0FBQUEsYUFBVSwwQkFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVlMLEtBQVosQ0FBa0JHLElBQWxCLENBQXVCLFVBQUNuQixJQUFEO0FBQUEsZUFBU0EsSUFBSSxLQUFJaUIsY0FBakI7QUFBQSxPQUF2QixpRkFBeURLLE1BQXpELElBQWtFLENBQTVFO0FBQUEsS0FBeEIsQ0FBRCxDQURzQjtBQUFBLEdBQTFCOztBQUdBLHNCQUNFLHFFQUFDLCtEQUFEO0FBQUEsNEJBQ0UscUVBQUMsNERBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnRUFBRDtBQUFZLGVBQU8sRUFBRTtBQUFBLGlCQUFJdkIsK0NBQUksQ0FBQ3dCLE9BQUwsRUFBSjtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLG9FQUFEO0FBQUEsZ0NBQ0UscUVBQUMsNERBQUQ7QUFBQSxpQ0FDRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVTSxxRUFBQyw0REFBRDtBQUFBLDhCQUNJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLGlFQUFEO0FBQWEsbUJBQVcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVk4sZUFjTSxxRUFBQyxtRUFBRDtBQUFlLGFBQU8sRUFBRWIsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkTixFQXFCSUQsWUFyQkosYUFxQklBLFlBckJKLHVCQXFCSUEsWUFBWSxDQUFFUyxJQUFkLENBQW1CTSxHQUFuQixDQUF1QixVQUFDSixJQUFEO0FBQUEsMEJBQ3JCLHFFQUFDLHVEQUFEO0FBQTZCLFVBQUUsRUFBRUEsSUFBSSxDQUFDSyxFQUF0QztBQUEwQyxhQUFLLEVBQUVMLElBQUksQ0FBQ0MsSUFBTCxHQUFZTDtBQUE3RCxTQUFvQkksSUFBSSxDQUFDSyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBdkIsQ0FyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Qkg7O0dBdkRRNUIsTztVQUNVQyxzRSxFQUdNVSw0RTs7O0tBSmhCWCxPO0FBeURNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MDA5NTUzOTQ3NGI5YjkzMTFkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHt1c2VDb2xsZWN0aW9ufSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnXHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBVc2VyQXZhdGFyLCBJY29uc0NvbnRhaW5lciwgSGVhZGVyLCBTZWFyY2gsIFNlYXJjaElucHV0LCBTaWRlYmFyQnV0dG9uIH0gZnJvbSAnLi4vc3R5bGVzL1NpZGViYXJTdHlsZWQnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5pbXBvcnQgKiBhcyBFbWFpbFZhbGlkYXRvciBmcm9tIFwiZW1haWwtdmFsaWRhdG9yXCJcclxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IENoYXRDb21wb25lbnQgZnJvbSAnLi9DaGF0Q29tcG9uZW50JztcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgY29uc3QgWyB1c2VyXSAgPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcbiAgY29uc29sZS5sb2codXNlci5lbWFpbCk7XHJcbiAgICBjb25zdCB1c2VyQ2hhdFJlZiA9IGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS53aGVyZSgndXNlcnMnLCAnYXJyYXktY29udGFpbnMnLCB1c2VyPy5lbWFpbClcclxuICBjb25zdCBbY2hhdFNuYXBzaG90XSA9IHVzZUNvbGxlY3Rpb24odXNlckNoYXRSZWYpO1xyXG4gXHJcbmNvbnN0IGNyZWF0ZUNoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXQgPSBwcm9tcHQoXHJcbiAgICBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzIGZvciB0aGUgdXNlciB5b3Ugd2lzaCB0byBjaGF0IHdpdGhcIlxyXG4gICk7XHJcblxyXG4gIGlmICghaW5wdXQpIHJldHVybiBudWxsO1xyXG4gIGlmIChcclxuICAgIEVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlKGlucHV0KSAmJlxyXG4gICAgIWNoYXRBbHJlYWR5RXhpc3RzKGlucHV0KSAgJiZcclxuICAgIGlucHV0ICE9PSB1c2VyLmVtYWlsXHJcbiAgKSB7XHJcbiAgICAvL3dlIG5lZWQgdG8gYWRkIGNoYXQgaW4gZGF0YWJhc2VcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5hZGQoe1xyXG4gICAgICB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbiAgICBjb25zdCBjaGF0QWxyZWFkeUV4aXN0cyA9IChyZWNpcGllbnRFbWFpbCkgPT4gXHJcbiAgICAgICAhIWNoYXRTbmFwc2hvdD8uZG9jcy5maW5kKChjaGF0KSA9PiBjaGF0LmRhdGEoKS51c2Vycy5maW5kKCh1c2VyKSA9PnVzZXI9PT0gcmVjaXBpZW50RW1haWwpPy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8VXNlckF2YXRhciBvbkNsaWNrPXsoKT0+YXV0aC5zaWduT3V0KCl9IC8+XHJcbiAgICAgICAgICA8SWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxDaGF0IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxTZWFyY2g+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaElucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGNoYXRlc1wiLz5cclxuICAgICAgICAgICAgPC9TZWFyY2g+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyQnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZUNoYXR9PlxyXG4gICAgICAgICAgU3RhcnQgbmV3IGNoYXRcclxuICAgICAgICAgICAgPC9TaWRlYmFyQnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiBsaXN0IG9mIGNoYXRzIGNvbnRhY3QgKi99XHJcbiAgICAgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2hhdFNuYXBzaG90Py5kb2NzLm1hcCgoY2hhdCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2hhdENvbXBvbmVudCBrZXk9e2NoYXQuaWR9IGlkPXtjaGF0LmlkfSB1c2Vycz17Y2hhdC5kYXRhKCkudXNlcnN9Lz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==