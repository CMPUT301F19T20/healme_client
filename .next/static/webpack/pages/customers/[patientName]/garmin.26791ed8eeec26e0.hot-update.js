"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/customers/[patientName]/garmin",{

/***/ "./src/components/customer/details/GarminNavbar.js":
/*!*********************************************************!*\
  !*** ./src/components/customer/details/GarminNavbar.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Hiking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Hiking */ \"./node_modules/@mui/icons-material/Hiking.js\");\n/* harmony import */ var _mui_icons_material_AccessAlarm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/AccessAlarm */ \"./node_modules/@mui/icons-material/AccessAlarm.js\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n/* harmony import */ var _mui_icons_material_DirectionsBike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/DirectionsBike */ \"./node_modules/@mui/icons-material/DirectionsBike.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar GarminNavbar = function(props) {\n    var getCurrPeriod = function(period) {\n        props.getPeriod(period);\n    };\n    var icon, text, curr_color;\n    if (props.type == 'steps') {\n        icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Hiking__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 14,\n                columnNumber: 16\n            },\n            __self: _this\n        });\n        text = 'Step Count';\n        curr_color = '#0FB4E4';\n    } else if (props.type == 'intensity') {\n        icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_AccessAlarm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 18,\n                columnNumber: 16\n            },\n            __self: _this\n        });\n        text = 'Intensity Minutes';\n        curr_color = '#00A36C';\n    } else if (props.type == 'activity') {\n        icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_DirectionsBike__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 22,\n                columnNumber: 16\n            },\n            __self: _this\n        });\n        text = 'Activities Tracked';\n        curr_color = '#E49B0F';\n    } else {\n        icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 26,\n                columnNumber: 16\n            },\n            __self: _this\n        });\n        text = 'Heart Rate';\n        curr_color = '#D22B2B';\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n            position: \"static\",\n            sx: {\n                bgcolor: \"inherit\"\n            },\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                sx: {\n                    display: 'flex',\n                    justifyContent: 'space-around'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                    direction: \"row\",\n                    spacing: 5,\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: function() {\n                                return getCurrPeriod('7d');\n                            },\n                            sx: {\n                                ':focus': {\n                                    bgcolor: '#474244',\n                                    color: 'inherit'\n                                },\n                                color: '#474244'\n                            },\n                            __source: {\n                                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"7d\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: function() {\n                                return getCurrPeriod('4w');\n                            },\n                            sx: {\n                                ':focus': {\n                                    bgcolor: '#474244',\n                                    color: 'inherit'\n                                },\n                                color: '#474244'\n                            },\n                            __source: {\n                                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"4w\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: function() {\n                                return getCurrPeriod('1y');\n                            },\n                            sx: {\n                                ':focus': {\n                                    bgcolor: '#474244',\n                                    color: 'inherit'\n                                },\n                                color: '#474244'\n                            },\n                            __source: {\n                                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"1y\"\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_c = GarminNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GarminNavbar);\nvar _c;\n$RefreshReg$(_c, \"GarminNavbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL0dhcm1pbk5hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDNEM7QUFDakM7QUFDVTtBQUNOO0FBQ1k7O0FBRW5FLEdBQUssQ0FBQ1ksWUFBWSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDN0IsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUSxDQUFQQyxNQUFNLEVBQUssQ0FBQztRQUMvQkYsS0FBSyxDQUFDRyxTQUFTLENBQUNELE1BQU07SUFDMUIsQ0FBQztJQUNELEdBQUcsQ0FBQ0UsSUFBSSxFQUFDQyxJQUFJLEVBQUNDLFVBQVU7SUFDeEIsRUFBRSxFQUFFTixLQUFLLENBQUNPLElBQUksSUFBSSxDQUFPLFFBQUMsQ0FBQztRQUN2QkgsSUFBSSx3RUFBSVQsa0VBQVU7Ozs7Ozs7O1FBQ2xCVSxJQUFJLEdBQUcsQ0FBWTtRQUNuQkMsVUFBVSxHQUFHLENBQVM7SUFDMUIsQ0FBQyxNQUFLLEVBQUUsRUFBRU4sS0FBSyxDQUFDTyxJQUFJLElBQUksQ0FBVyxZQUFDLENBQUM7UUFDakNILElBQUksd0VBQUlSLHVFQUFlOzs7Ozs7OztRQUN2QlMsSUFBSSxHQUFHLENBQW1CO1FBQzFCQyxVQUFVLEdBQUcsQ0FBUztJQUMxQixDQUFDLE1BQUssRUFBRSxFQUFDTixLQUFLLENBQUNPLElBQUksSUFBSSxDQUFVLFdBQUMsQ0FBQztRQUMvQkgsSUFBSSx3RUFBSU4sMEVBQWtCOzs7Ozs7OztRQUMxQk8sSUFBSSxHQUFHLENBQW9CO1FBQzNCQyxVQUFVLEdBQUcsQ0FBUztJQUMxQixDQUFDLE1BQUksQ0FBQztRQUNGRixJQUFJLHdFQUFJUCxvRUFBWTs7Ozs7Ozs7UUFDcEJRLElBQUksR0FBRyxDQUFZO1FBQ25CQyxVQUFVLEdBQUcsQ0FBUztJQUMxQixDQUFDO0lBRUQsTUFBTSxzRUFDREUsQ0FBRzs7Ozs7Ozt1RkFDQ25CLGlEQUFNO1lBQUNvQixRQUFRLEVBQUMsQ0FBUTtZQUFDQyxFQUFFLEVBQUUsQ0FBQ0M7Z0JBQUFBLE9BQU8sRUFBQyxDQUFTO1lBQUEsQ0FBQzs7Ozs7OzsyRkFDNUNyQixrREFBTztnQkFBQ29CLEVBQUUsRUFBRSxDQUFDRTtvQkFBQUEsT0FBTyxFQUFDLENBQU07b0JBQUVDLGNBQWMsRUFBQyxDQUFjO2dCQUFBLENBQUM7Ozs7Ozs7Z0dBQ3ZEcEIsZ0RBQUs7b0JBQUNxQixTQUFTLEVBQUMsQ0FBSztvQkFBQ0MsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7OzZGQUM1QnJCLGlEQUFNOzRCQUNIc0IsT0FBTyxFQUFFLFFBQVE7Z0NBQUZmLE1BQU0sQ0FBTkEsYUFBYSxDQUFDLENBQUk7OzRCQUNqQ1MsRUFBRSxFQUFFLENBQUM7Z0NBQ0QsQ0FBUSxTQUFDLENBQUM7b0NBQ05DLE9BQU8sRUFBQyxDQUFTO29DQUNqQk0sS0FBSyxFQUFDLENBQVM7Z0NBQ25CLENBQUM7Z0NBQ0RBLEtBQUssRUFBQyxDQUFTOzRCQUNuQixDQUFDOzs7Ozs7O3NDQUNILENBQUU7OzZGQUNIdkIsaURBQU07NEJBQ0hzQixPQUFPLEVBQUUsUUFBUTtnQ0FBRmYsTUFBTSxDQUFOQSxhQUFhLENBQUMsQ0FBSTs7NEJBQ2pDUyxFQUFFLEVBQUUsQ0FBQztnQ0FDRCxDQUFRLFNBQUMsQ0FBQztvQ0FDTkMsT0FBTyxFQUFDLENBQVM7b0NBQ2pCTSxLQUFLLEVBQUMsQ0FBUztnQ0FDbkIsQ0FBQztnQ0FDREEsS0FBSyxFQUFDLENBQVM7NEJBQ25CLENBQUM7Ozs7Ozs7c0NBQ0osQ0FBRTs7NkZBQ0Z2QixpREFBTTs0QkFDSHNCLE9BQU8sRUFBRSxRQUFRO2dDQUFGZixNQUFNLENBQU5BLGFBQWEsQ0FBQyxDQUFJOzs0QkFDakNTLEVBQUUsRUFBRSxDQUFDO2dDQUNELENBQVEsU0FBQyxDQUFDO29DQUNOQyxPQUFPLEVBQUMsQ0FBUztvQ0FDakJNLEtBQUssRUFBQyxDQUFTO2dDQUNuQixDQUFDO2dDQUNEQSxLQUFLLEVBQUMsQ0FBUzs0QkFDbkIsQ0FBQzs7Ozs7OztzQ0FDSixDQUFFOzs7Ozs7O0FBTzNCLENBQUM7S0FoRUtsQixZQUFZO0FBa0VsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL0dhcm1pbk5hdmJhci5qcz84MDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QXBwQmFyLCBUb29sYmFyLCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5LCBTdGFjaywgQnV0dG9ufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgSGlraW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hpa2luZyc7XG5pbXBvcnQgQWNjZXNzQWxhcm1JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjZXNzQWxhcm0nO1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Zhdm9yaXRlJztcbmltcG9ydCBEaXJlY3Rpb25zQmlrZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EaXJlY3Rpb25zQmlrZSc7XG5cbmNvbnN0IEdhcm1pbk5hdmJhciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGdldEN1cnJQZXJpb2QgPSAocGVyaW9kKSA9PiB7XG4gICAgICAgIHByb3BzLmdldFBlcmlvZChwZXJpb2QpXG4gICAgfTtcbiAgICB2YXIgaWNvbix0ZXh0LGN1cnJfY29sb3I7XG4gICAgaWYgKHByb3BzLnR5cGUgPT0gJ3N0ZXBzJyl7XG4gICAgICAgIGljb24gPSA8SGlraW5nSWNvbiAvPjtcbiAgICAgICAgdGV4dCA9ICdTdGVwIENvdW50JztcbiAgICAgICAgY3Vycl9jb2xvciA9ICcjMEZCNEU0JztcbiAgICB9ZWxzZSBpZiAocHJvcHMudHlwZSA9PSAnaW50ZW5zaXR5Jyl7XG4gICAgICAgIGljb24gPSA8QWNjZXNzQWxhcm1JY29uIC8+O1xuICAgICAgICB0ZXh0ID0gJ0ludGVuc2l0eSBNaW51dGVzJztcbiAgICAgICAgY3Vycl9jb2xvciA9ICcjMDBBMzZDJztcbiAgICB9ZWxzZSBpZihwcm9wcy50eXBlID09ICdhY3Rpdml0eScpe1xuICAgICAgICBpY29uID0gPERpcmVjdGlvbnNCaWtlSWNvbiAvPjtcbiAgICAgICAgdGV4dCA9ICdBY3Rpdml0aWVzIFRyYWNrZWQnO1xuICAgICAgICBjdXJyX2NvbG9yID0gJyNFNDlCMEYnO1xuICAgIH1lbHNle1xuICAgICAgICBpY29uID0gPEZhdm9yaXRlSWNvbiAvPlxuICAgICAgICB0ZXh0ID0gJ0hlYXJ0IFJhdGUnO1xuICAgICAgICBjdXJyX2NvbG9yID0gJyNEMjJCMkInXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnIHN4PXt7Ymdjb2xvcjpcImluaGVyaXRcIn19PlxuICAgICAgICAgICAgICAgIDxUb29sYmFyIHN4PXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidzcGFjZS1hcm91bmQnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249J3Jvdycgc3BhY2luZz17NX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRDdXJyUGVyaW9kKCc3ZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc6Zm9jdXMnOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6JyM0NzQyNDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J2luaGVyaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOicjNDc0MjQ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgPjdkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldEN1cnJQZXJpb2QoJzR3Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzpmb2N1cyc6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjonIzQ3NDI0NCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjonaW5oZXJpdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JyM0NzQyNDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+NHc8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldEN1cnJQZXJpb2QoJzF5Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzpmb2N1cyc6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjonIzQ3NDI0NCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjonaW5oZXJpdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JyM0NzQyNDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID4xeTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FybWluTmF2YmFyXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkFwcEJhciIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIlN0YWNrIiwiQnV0dG9uIiwiSGlraW5nSWNvbiIsIkFjY2Vzc0FsYXJtSWNvbiIsIkZhdm9yaXRlSWNvbiIsIkRpcmVjdGlvbnNCaWtlSWNvbiIsIkdhcm1pbk5hdmJhciIsInByb3BzIiwiZ2V0Q3VyclBlcmlvZCIsInBlcmlvZCIsImdldFBlcmlvZCIsImljb24iLCJ0ZXh0IiwiY3Vycl9jb2xvciIsInR5cGUiLCJkaXYiLCJwb3NpdGlvbiIsInN4IiwiYmdjb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImRpcmVjdGlvbiIsInNwYWNpbmciLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/customer/details/GarminNavbar.js\n");

/***/ })

});