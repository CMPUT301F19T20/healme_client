"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/customers/[patientName]",{

/***/ "./src/components/customer/Collapsible.js":
/*!************************************************!*\
  !*** ./src/components/customer/Collapsible.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Collapsible\": function() { return /* binding */ Collapsible; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Collapsible = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setIsOpen = ref[1];\n    var parentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var color = props.color;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"collapsible\",\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/Collapsible.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"toggle\",\n                style: {\n                    backgroundColor: color\n                },\n                onClick: function() {\n                    return setIsOpen(!isOpen);\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/Collapsible.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: props.label\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"content-parent\",\n                ref: parentRef,\n                style: isOpen ? {\n                    height: parentRef.current.scrollHeight + 'px'\n                } : {\n                    height: '0px'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/Collapsible.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"content\",\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/Collapsible.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: props.children\n                })\n            })\n        ]\n    }));\n};\n_s(Collapsible, \"/gdbTyP/cCzpMuqVeQ5sZZbMWSk=\");\n_c = Collapsible;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collapsible);\nvar _c;\n$RefreshReg$(_c, \"Collapsible\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9Db2xsYXBzaWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEOzs7QUFHaEQsR0FBSyxDQUFDSSxXQUFXLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFFbkMsR0FBSyxDQUFzQkosR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBakNLLE1BQU0sR0FBY0wsR0FBYyxLQUEzQk0sU0FBUyxHQUFJTixHQUFjO0lBRXpDLEdBQUssQ0FBQ08sU0FBUyxHQUFHTiw2Q0FBTTtJQUN4QixHQUFLLENBQUNPLEtBQUssR0FBR0osS0FBSyxDQUFDSSxLQUFLO0lBQ3pCLE1BQU0sdUVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7O2lGQUN2QkMsQ0FBTTtnQkFBQ0QsU0FBUyxFQUFDLENBQVE7Z0JBQUNFLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsZUFBZSxFQUFDTCxLQUFLO2dCQUFBLENBQUM7Z0JBQUVNLE9BQU8sRUFBRSxRQUFRO29CQUFGUixNQUFNLENBQU5BLFNBQVMsRUFBRUQsTUFBTTs7Ozs7Ozs7MEJBQUlELEtBQUssQ0FBQ1csS0FBSzs7aUZBQ3pHTixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7Z0JBQzNCTSxHQUFHLEVBQUVULFNBQVM7Z0JBQ2RLLEtBQUssRUFBRVAsTUFBTSxHQUNULENBQUM7b0JBQ0dZLE1BQU0sRUFBRVYsU0FBUyxDQUFDVyxPQUFPLENBQUNDLFlBQVksR0FBRyxDQUFJO2dCQUNqRCxDQUFDLEdBQ0EsQ0FBQztvQkFDRUYsTUFBTSxFQUFFLENBQUs7Z0JBQ2pCLENBQUM7Ozs7Ozs7K0ZBR0pSLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OzhCQUFFTixLQUFLLENBQUNnQixRQUFROzs7OztBQUl4RCxDQUFDO0dBeEJZakIsV0FBVztLQUFYQSxXQUFXO0FBMEJ4QiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2N1c3RvbWVyL0NvbGxhcHNpYmxlLmpzP2VlZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgY29uc3QgQ29sbGFwc2libGUgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3QgcGFyZW50UmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgY29sb3IgPSBwcm9wcy5jb2xvcjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNpYmxlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZ2dsZVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOmNvbG9yfX0gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT57cHJvcHMubGFiZWx9PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtcGFyZW50XCIgXG4gICAgICAgICAgICAgICAgcmVmPXtwYXJlbnRSZWZ9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXtpc09wZW4gPyBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwYXJlbnRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDp7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNpYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJDb2xsYXBzaWJsZSIsInByb3BzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicGFyZW50UmVmIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm9uQ2xpY2siLCJsYWJlbCIsInJlZiIsImhlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customer/Collapsible.js\n");

/***/ })

});