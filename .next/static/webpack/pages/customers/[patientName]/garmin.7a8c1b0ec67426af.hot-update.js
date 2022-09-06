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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Hiking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Hiking */ \"./node_modules/@mui/icons-material/Hiking.js\");\n/* harmony import */ var _mui_icons_material_AccessAlarm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/AccessAlarm */ \"./node_modules/@mui/icons-material/AccessAlarm.js\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n/* harmony import */ var _mui_icons_material_DirectionsBike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/DirectionsBike */ \"./node_modules/@mui/icons-material/DirectionsBike.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar GarminNavbar = function(props) {\n    var getCurrPeriod = function(period) {\n        props.getPeriod(period);\n    };\n    var icon, text, curr_color;\n    if (props.type == 'steps') {\n        icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Hiking__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 14,\n                columnNumber: 16\n            },\n            __self: _this\n        });\n        text = 'Step Count';\n        curr_color = '#0FB4E4';\n    } else if (props.type == 'intensity') {\n        icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_AccessAlarm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 18,\n                columnNumber: 16\n            },\n            __self: _this\n        });\n        text = 'Intensity Minutes';\n        curr_color = '#00A36C';\n    } else if (props.type == 'activity') {\n        icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_DirectionsBike__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 22,\n                columnNumber: 16\n            },\n            __self: _this\n        });\n        text = 'Activities Tracked';\n        curr_color = '#E49B0F';\n    } else {\n        icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 26,\n                columnNumber: 16\n            },\n            __self: _this\n        });\n        text = 'Heart Rate';\n        curr_color = '#D22B2B';\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n            position: \"static\",\n            sx: {\n                bgcolor: \"inherit\"\n            },\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                sx: {\n                    display: 'flex',\n                    justifyContent: 'space-around'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                    direction: \"row\",\n                    spacing: 5,\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            style: {\n                                alignItems: 'center'\n                            },\n                            __source: {\n                                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                style: {\n                                    color: '#474244'\n                                },\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: \"Select Period:\"\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: function() {\n                                return getCurrPeriod('7d');\n                            },\n                            sx: {\n                                ':focus': {\n                                    bgcolor: '#474244',\n                                    color: 'inherit'\n                                },\n                                color: '#474244'\n                            },\n                            __source: {\n                                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"7d\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: function() {\n                                return getCurrPeriod('4w');\n                            },\n                            sx: {\n                                ':focus': {\n                                    bgcolor: '#474244',\n                                    color: 'inherit'\n                                },\n                                color: '#474244'\n                            },\n                            __source: {\n                                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"4w\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: function() {\n                                return getCurrPeriod('1y');\n                            },\n                            sx: {\n                                ':focus': {\n                                    bgcolor: '#474244',\n                                    color: 'inherit'\n                                },\n                                color: '#474244'\n                            },\n                            __source: {\n                                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminNavbar.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"1y\"\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_c = GarminNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GarminNavbar);\nvar _c;\n$RefreshReg$(_c, \"GarminNavbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL0dhcm1pbk5hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDNEM7QUFDakM7QUFDVTtBQUNOO0FBQ1k7O0FBRW5FLEdBQUssQ0FBQ1ksWUFBWSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDN0IsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUSxDQUFQQyxNQUFNLEVBQUssQ0FBQztRQUMvQkYsS0FBSyxDQUFDRyxTQUFTLENBQUNELE1BQU07SUFDMUIsQ0FBQztJQUNELEdBQUcsQ0FBQ0UsSUFBSSxFQUFDQyxJQUFJLEVBQUNDLFVBQVU7SUFDeEIsRUFBRSxFQUFFTixLQUFLLENBQUNPLElBQUksSUFBSSxDQUFPLFFBQUMsQ0FBQztRQUN2QkgsSUFBSSx3RUFBSVQsa0VBQVU7Ozs7Ozs7O1FBQ2xCVSxJQUFJLEdBQUcsQ0FBWTtRQUNuQkMsVUFBVSxHQUFHLENBQVM7SUFDMUIsQ0FBQyxNQUFLLEVBQUUsRUFBRU4sS0FBSyxDQUFDTyxJQUFJLElBQUksQ0FBVyxZQUFDLENBQUM7UUFDakNILElBQUksd0VBQUlSLHVFQUFlOzs7Ozs7OztRQUN2QlMsSUFBSSxHQUFHLENBQW1CO1FBQzFCQyxVQUFVLEdBQUcsQ0FBUztJQUMxQixDQUFDLE1BQUssRUFBRSxFQUFDTixLQUFLLENBQUNPLElBQUksSUFBSSxDQUFVLFdBQUMsQ0FBQztRQUMvQkgsSUFBSSx3RUFBSU4sMEVBQWtCOzs7Ozs7OztRQUMxQk8sSUFBSSxHQUFHLENBQW9CO1FBQzNCQyxVQUFVLEdBQUcsQ0FBUztJQUMxQixDQUFDLE1BQUksQ0FBQztRQUNGRixJQUFJLHdFQUFJUCxvRUFBWTs7Ozs7Ozs7UUFDcEJRLElBQUksR0FBRyxDQUFZO1FBQ25CQyxVQUFVLEdBQUcsQ0FBUztJQUMxQixDQUFDO0lBRUQsTUFBTSxzRUFDREUsQ0FBRzs7Ozs7Ozt1RkFDQ25CLGlEQUFNO1lBQUNvQixRQUFRLEVBQUMsQ0FBUTtZQUFDQyxFQUFFLEVBQUUsQ0FBQ0M7Z0JBQUFBLE9BQU8sRUFBQyxDQUFTO1lBQUEsQ0FBQzs7Ozs7OzsyRkFDNUNyQixrREFBTztnQkFBQ29CLEVBQUUsRUFBRSxDQUFDRTtvQkFBQUEsT0FBTyxFQUFDLENBQU07b0JBQUVDLGNBQWMsRUFBQyxDQUFjO2dCQUFBLENBQUM7Ozs7Ozs7Z0dBQ3ZEcEIsZ0RBQUs7b0JBQUNxQixTQUFTLEVBQUMsQ0FBSztvQkFBQ0MsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7OzZGQUM1QlAsQ0FBRzs0QkFBQ1EsS0FBSyxFQUFFLENBQUNDO2dDQUFBQSxVQUFVLEVBQUMsQ0FBUTs0QkFBQSxDQUFDOzs7Ozs7OzJHQUM1QkMsQ0FBRTtnQ0FBQ0YsS0FBSyxFQUFFLENBQUNHO29DQUFBQSxLQUFLLEVBQUMsQ0FBUztnQ0FBQSxDQUFDOzs7Ozs7OzBDQUFFLENBQWM7Ozs2RkFFL0N6QixpREFBTTs0QkFDSDBCLE9BQU8sRUFBRSxRQUFRO2dDQUFGbkIsTUFBTSxDQUFOQSxhQUFhLENBQUMsQ0FBSTs7NEJBQ2pDUyxFQUFFLEVBQUUsQ0FBQztnQ0FDRCxDQUFRLFNBQUMsQ0FBQztvQ0FDTkMsT0FBTyxFQUFDLENBQVM7b0NBQ2pCUSxLQUFLLEVBQUMsQ0FBUztnQ0FDbkIsQ0FBQztnQ0FDREEsS0FBSyxFQUFDLENBQVM7NEJBQ25CLENBQUM7Ozs7Ozs7c0NBQ0gsQ0FBRTs7NkZBQ0h6QixpREFBTTs0QkFDSDBCLE9BQU8sRUFBRSxRQUFRO2dDQUFGbkIsTUFBTSxDQUFOQSxhQUFhLENBQUMsQ0FBSTs7NEJBQ2pDUyxFQUFFLEVBQUUsQ0FBQztnQ0FDRCxDQUFRLFNBQUMsQ0FBQztvQ0FDTkMsT0FBTyxFQUFDLENBQVM7b0NBQ2pCUSxLQUFLLEVBQUMsQ0FBUztnQ0FDbkIsQ0FBQztnQ0FDREEsS0FBSyxFQUFDLENBQVM7NEJBQ25CLENBQUM7Ozs7Ozs7c0NBQ0osQ0FBRTs7NkZBQ0Z6QixpREFBTTs0QkFDSDBCLE9BQU8sRUFBRSxRQUFRO2dDQUFGbkIsTUFBTSxDQUFOQSxhQUFhLENBQUMsQ0FBSTs7NEJBQ2pDUyxFQUFFLEVBQUUsQ0FBQztnQ0FDRCxDQUFRLFNBQUMsQ0FBQztvQ0FDTkMsT0FBTyxFQUFDLENBQVM7b0NBQ2pCUSxLQUFLLEVBQUMsQ0FBUztnQ0FDbkIsQ0FBQztnQ0FDREEsS0FBSyxFQUFDLENBQVM7NEJBQ25CLENBQUM7Ozs7Ozs7c0NBQ0osQ0FBRTs7Ozs7OztBQU8zQixDQUFDO0tBbkVLcEIsWUFBWTtBQXFFbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tZXIvZGV0YWlscy9HYXJtaW5OYXZiYXIuanM/ODAwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0FwcEJhciwgVG9vbGJhciwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSwgU3RhY2ssIEJ1dHRvbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IEhpa2luZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9IaWtpbmcnO1xuaW1wb3J0IEFjY2Vzc0FsYXJtSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY2Vzc0FsYXJtJztcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYXZvcml0ZSc7XG5pbXBvcnQgRGlyZWN0aW9uc0Jpa2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGlyZWN0aW9uc0Jpa2UnO1xuXG5jb25zdCBHYXJtaW5OYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBnZXRDdXJyUGVyaW9kID0gKHBlcmlvZCkgPT4ge1xuICAgICAgICBwcm9wcy5nZXRQZXJpb2QocGVyaW9kKVxuICAgIH07XG4gICAgdmFyIGljb24sdGV4dCxjdXJyX2NvbG9yO1xuICAgIGlmIChwcm9wcy50eXBlID09ICdzdGVwcycpe1xuICAgICAgICBpY29uID0gPEhpa2luZ0ljb24gLz47XG4gICAgICAgIHRleHQgPSAnU3RlcCBDb3VudCc7XG4gICAgICAgIGN1cnJfY29sb3IgPSAnIzBGQjRFNCc7XG4gICAgfWVsc2UgaWYgKHByb3BzLnR5cGUgPT0gJ2ludGVuc2l0eScpe1xuICAgICAgICBpY29uID0gPEFjY2Vzc0FsYXJtSWNvbiAvPjtcbiAgICAgICAgdGV4dCA9ICdJbnRlbnNpdHkgTWludXRlcyc7XG4gICAgICAgIGN1cnJfY29sb3IgPSAnIzAwQTM2Qyc7XG4gICAgfWVsc2UgaWYocHJvcHMudHlwZSA9PSAnYWN0aXZpdHknKXtcbiAgICAgICAgaWNvbiA9IDxEaXJlY3Rpb25zQmlrZUljb24gLz47XG4gICAgICAgIHRleHQgPSAnQWN0aXZpdGllcyBUcmFja2VkJztcbiAgICAgICAgY3Vycl9jb2xvciA9ICcjRTQ5QjBGJztcbiAgICB9ZWxzZXtcbiAgICAgICAgaWNvbiA9IDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgdGV4dCA9ICdIZWFydCBSYXRlJztcbiAgICAgICAgY3Vycl9jb2xvciA9ICcjRDIyQjJCJ1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj0nc3RhdGljJyBzeD17e2JnY29sb3I6XCJpbmhlcml0XCJ9fT5cbiAgICAgICAgICAgICAgICA8VG9vbGJhciBzeD17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYXJvdW5kJ319PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2FsaWduSXRlbXM6J2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tjb2xvcjonIzQ3NDI0NCd9fT5TZWxlY3QgUGVyaW9kOjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldEN1cnJQZXJpb2QoJzdkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzpmb2N1cyc6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjonIzQ3NDI0NCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjonaW5oZXJpdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JyM0NzQyNDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICA+N2Q8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0Q3VyclBlcmlvZCgnNHcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnOmZvY3VzJzp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOicjNDc0MjQ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidpbmhlcml0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjonIzQ3NDI0NCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID40dzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0Q3VyclBlcmlvZCgnMXknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnOmZvY3VzJzp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOicjNDc0MjQ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidpbmhlcml0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjonIzQ3NDI0NCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjF5PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXJtaW5OYXZiYXJcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQXBwQmFyIiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJUeXBvZ3JhcGh5IiwiU3RhY2siLCJCdXR0b24iLCJIaWtpbmdJY29uIiwiQWNjZXNzQWxhcm1JY29uIiwiRmF2b3JpdGVJY29uIiwiRGlyZWN0aW9uc0Jpa2VJY29uIiwiR2FybWluTmF2YmFyIiwicHJvcHMiLCJnZXRDdXJyUGVyaW9kIiwicGVyaW9kIiwiZ2V0UGVyaW9kIiwiaWNvbiIsInRleHQiLCJjdXJyX2NvbG9yIiwidHlwZSIsImRpdiIsInBvc2l0aW9uIiwic3giLCJiZ2NvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZGlyZWN0aW9uIiwic3BhY2luZyIsInN0eWxlIiwiYWxpZ25JdGVtcyIsImg0IiwiY29sb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/customer/details/GarminNavbar.js\n");

/***/ })

});