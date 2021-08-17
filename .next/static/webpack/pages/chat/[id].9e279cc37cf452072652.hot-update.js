webpackHotUpdate_N_E("pages/chat/[id]",{

/***/ "./pages/chat/[id].js":
/*!****************************!*\
  !*** ./pages/chat/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var C_Users_verma_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_verma_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_ChatScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ChatScreen */ "./components/ChatScreen.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/getRecipientEmail */ "./utils/getRecipientEmail.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var _material_ui_icons_MenuOpen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MenuOpen */ "./node_modules/@material-ui/icons/MenuOpen.js");
/* harmony import */ var _material_ui_icons_MenuOpen__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MenuOpen__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\Users\\verma\\Documents\\GitHub\\whatsapp-clone-with-nextjs\\pages\\chat\\[id].js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(C_Users_verma_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_verma_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











function Chat(_ref) {
  _s();

  var chat = _ref.chat,
      messages = _ref.messages;

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__["useAuthState"])(_firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]),
      _useAuthState2 = Object(C_Users_verma_Documents_GitHub_whatsapp_clone_with_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useAuthState, 1),
      user = _useAuthState2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    className: "relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "absolute top-5 right-10 z-50 md:hidden",
      onClick: function onClick() {
        return setOpen(!open);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_MenuOpen__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 20
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: ["Chat with ", Object(_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__["default"])(chat.users, user)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      open: open
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ChatContainer, {
      className: " ".concat(open ? "hidden" : "flex flex-col", " "),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ChatScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chat: chat,
        messages: messages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_s(Chat, "+tzwxFD2rY0wJxdZaw6r1eSt1OQ=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__["useAuthState"]];
});

_c = Chat;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Chat);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.attrs({
  className: "flex h-screen relative"
})(_templateObject());
_c2 = Container;
var ChatContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.attrs({
  className: "flex-1 h-screen"
})(_templateObject2());
_c3 = ChatContainer;

var _c, _c2, _c3;

$RefreshReg$(_c, "Chat");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "ChatContainer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC8uanMiXSwibmFtZXMiOlsiQ2hhdCIsImNoYXQiLCJtZXNzYWdlcyIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJ1c2VyIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImdldFJlY2lwaWVudEVtYWlsIiwidXNlcnMiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIkNoYXRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxPQUFrQztBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsc0JBQ2pCQywrRUFBWSxDQUFDQyw4Q0FBRCxDQURLO0FBQUE7QUFBQSxNQUN2QkMsSUFEdUI7O0FBQUEsa0JBRU5DLHNEQUFRLENBQUMsS0FBRCxDQUZGO0FBQUEsTUFFdkJDLElBRnVCO0FBQUEsTUFFakJDLE9BRmlCOztBQUk5QixzQkFDSSxxRUFBQyxTQUFEO0FBQVcsYUFBUyxFQUFDLFVBQXJCO0FBQUEsNEJBQ007QUFBSyxlQUFTLEVBQUMsd0NBQWY7QUFBd0QsYUFBTyxFQUFFO0FBQUEsZUFBSUEsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBWDtBQUFBLE9BQWpFO0FBQUEsNkJBQ0sscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETixlQUlJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQSxpQ0FBbUJFLHdFQUFpQixDQUFDUixJQUFJLENBQUNTLEtBQU4sRUFBYUwsSUFBYixDQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFPSSxxRUFBQywyREFBRDtBQUFTLFVBQUksRUFBRUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFRSSxxRUFBQyxhQUFEO0FBQWUsZUFBUyxhQUFNQSxJQUFJLEdBQUMsUUFBRCxHQUFVLGVBQXBCLE1BQXhCO0FBQUEsNkJBRUkscUVBQUMsOERBQUQ7QUFBWSxZQUFJLEVBQUVOLElBQWxCO0FBQXdCLGdCQUFRLEVBQUdDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7R0FuQlFGLEk7VUFDUUcsdUU7OztLQURSSCxJOztBQXFCTUEsbUVBQWY7QUE0QkEsSUFBTVcsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDL0JDLFdBQVMsRUFBQztBQURxQixDQUFqQixDQUFILG1CQUFmO01BQU1KLFM7QUFHTixJQUFNSyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUNyQ0MsV0FBUyxFQUFFO0FBRDBCLENBQWpCLENBQUgsb0JBQW5CO01BQU1DLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC9baWRdLjllMjc5Y2MzN2NmNDUyMDcyNjUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2lkZWJhcidcclxuaW1wb3J0IENoYXRTY3JlZW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DaGF0U2NyZWVuJ1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQgZ2V0UmVjaXBpZW50RW1haWwgZnJvbSAnLi4vLi4vdXRpbHMvZ2V0UmVjaXBpZW50RW1haWwnXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXHJcbmltcG9ydCBNZW51T3Blbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnVPcGVuJztcclxuZnVuY3Rpb24gQ2hhdCh7IGNoYXQsIG1lc3NhZ2VzIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyXT11c2VBdXRoU3RhdGUoYXV0aClcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTUgcmlnaHQtMTAgei01MCBtZDpoaWRkZW5cIiBvbkNsaWNrPXsoKT0+c2V0T3Blbighb3Blbil9PlxyXG4gICAgICAgICAgICAgICAgICAgPE1lbnVPcGVuSWNvbi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2hhdCB3aXRoIHsgZ2V0UmVjaXBpZW50RW1haWwoY2hhdC51c2VycywgdXNlcil9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U2lkZWJhciBvcGVuPXtvcGVufSAvPlxyXG4gICAgICAgICAgICA8Q2hhdENvbnRhaW5lciBjbGFzc05hbWU9e2AgJHtvcGVuP1wiaGlkZGVuXCI6XCJmbGV4IGZsZXgtY29sXCJ9IGB9ID5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDaGF0U2NyZWVuIGNoYXQ9e2NoYXR9IG1lc3NhZ2VzPXsgbWVzc2FnZXN9Lz5cclxuICAgICAgICAgICAgPC9DaGF0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlZiA9IGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5kb2MoY29udGV4dC5xdWVyeS5pZCk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXNSZXMgPSBhd2FpdCByZWYuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpLm9yZGVyQnkoXCJ0aW1lc3RhbXBcIiwgXCJhc2NcIikuZ2V0KCk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBtZXNzYWdlc1Jlcy5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgIH0pKS5tYXAobWVzc2FnZXMgPT4gKHtcclxuICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICB0aW1lc3RhbXA6IG1lc3NhZ2VzLnRpbWVzdGFtcC50b0RhdGUoKS5nZXRUaW1lKClcclxuICAgIH0pKTtcclxuXHJcbiAgICAvL1BSRVAgVGhFIENoYXRzXHJcbiAgICBjb25zdCBjaGF0UmVzID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gICAgY29uc3QgY2hhdCA9IHtcclxuICAgICAgICBpZDogY2hhdFJlcy5pZCxcclxuICAgICAgICAuLi5jaGF0UmVzLmRhdGEoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZXNzYWdlczogSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpLFxyXG4gICAgICAgICAgICBjaGF0OmNoYXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7IFxyXG4gICAgY2xhc3NOYW1lOlwiZmxleCBoLXNjcmVlbiByZWxhdGl2ZVwiXHJcbn0pYGA7XHJcbmNvbnN0IENoYXRDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6IFwiZmxleC0xIGgtc2NyZWVuXCIsXHJcbn0pYGA7Il0sInNvdXJjZVJvb3QiOiIifQ==