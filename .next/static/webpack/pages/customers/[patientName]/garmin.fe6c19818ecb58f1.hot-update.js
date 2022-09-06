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

/***/ "./src/components/customer/details/GarminIntensityGrid.js":
/*!****************************************************************!*\
  !*** ./src/components/customer/details/GarminIntensityGrid.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar HeaderItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper)(function(param) {\n    var theme = param.theme;\n    return _objectSpread({\n        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff'\n    }, theme.typography.body2, {\n        padding: theme.spacing(1),\n        textAlign: 'center',\n        color: theme.palette.text.secondary,\n        fontWeight: 'bold'\n    });\n});\n_c = HeaderItem;\nvar DataItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper)(function(param) {\n    var theme = param.theme;\n    return _objectSpread({\n        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff'\n    }, theme.typography.body2, {\n        padding: theme.spacing(1),\n        textAlign: 'center',\n        color: theme.palette.text.secondary,\n        fontWeight: 'normal'\n    });\n});\n_c1 = DataItem;\nvar GarminIntensityGrid = function(props) {\n    var moderateWeekly = [], intenseWeekly = [];\n    for(var i = 0; i < props.data.length; i += 7){\n        if (i + 7 > props.data.length) {\n            break;\n        }\n        moderateWeekly.push(props.data.slice(i, i + 7).map(function(row) {\n            return parseInt(row.moderateDuration) / 60;\n        }).reduce(function(partialSum, a) {\n            return partialSum + a;\n        }, 0));\n        intenseWeekly.push(props.data.slice(i, i + 7).map(function(row) {\n            return parseInt(row.intenseDuration) / 60;\n        }).reduce(function(partialSum, a) {\n            return partialSum + a;\n        }, 0));\n    }\n    var avgModerate = parseInt(moderateWeekly.reduce(function(partialSum, a) {\n        return partialSum + a;\n    }, 0) / moderateWeekly.length);\n    var avgVigorous = parseInt(intenseWeekly.reduce(function(partialSum, a) {\n        return partialSum + a;\n    }, 0) / intenseWeekly.length);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            sx: {\n                width: '100%'\n            },\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                container: true,\n                rowSpacing: 1,\n                columnSpacing: {\n                    xs: 1,\n                    sm: 2,\n                    md: 3\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                        item: true,\n                        xs: 4,\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Average Weekly Moderate Intensity\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DataItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: [\n                                    avgModerate,\n                                    \" mins\"\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                        item: true,\n                        xs: 4,\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Average Weekly Vigorous Intensity\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DataItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: [\n                                    avgVigorous,\n                                    \" mins\"\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                        item: true,\n                        xs: 4,\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Average Weekly Total Intensity\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DataItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/GarminIntensityGrid.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: [\n                                    avgVigorous + avgModerate * 2,\n                                    \" mins\"\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c2 = GarminIntensityGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GarminIntensityGrid);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HeaderItem\");\n$RefreshReg$(_c1, \"DataItem\");\n$RefreshReg$(_c2, \"GarminIntensityGrid\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL0dhcm1pbkludGVuc2l0eUdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQytCO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsR0FBSyxDQUFDTSxVQUFVLEdBQUdELDREQUFNLENBQUNGLGdEQUFLLEVBQUUsUUFBUTtRQUFMSSxLQUFLLFNBQUxBLEtBQUs7SUFBTyxNQUM3QztRQUFDQyxlQUFlLEVBQUVELEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJLEtBQUssQ0FBTSxRQUFHLENBQVMsV0FBRyxDQUFNO09BQ2hFSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0MsS0FBSztRQUN6QkMsT0FBTyxFQUFFTixLQUFLLENBQUNPLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCQyxTQUFTLEVBQUUsQ0FBUTtRQUNuQkMsS0FBSyxFQUFFVCxLQUFLLENBQUNFLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDQyxTQUFTO1FBQ25DQyxVQUFVLEVBQUMsQ0FBTTs7O0tBTmZiLFVBQVU7QUFRZCxHQUFLLENBQUNjLFFBQVEsR0FBR2YsNERBQU0sQ0FBQ0YsZ0RBQUssRUFBRSxRQUFRO1FBQUxJLEtBQUssU0FBTEEsS0FBSztJQUFPLE1BQzdDO1FBQUdDLGVBQWUsRUFBRUQsS0FBSyxDQUFDRSxPQUFPLENBQUNDLElBQUksS0FBSyxDQUFNLFFBQUcsQ0FBUyxXQUFHLENBQU07T0FDaEVILEtBQUssQ0FBQ0ksVUFBVSxDQUFDQyxLQUFLO1FBQ3pCQyxPQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTyxDQUFDLENBQUM7UUFDeEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxLQUFLLEVBQUVULEtBQUssQ0FBQ0UsT0FBTyxDQUFDUSxJQUFJLENBQUNDLFNBQVM7UUFDbkNDLFVBQVUsRUFBQyxDQUFROzs7TUFOakJDLFFBQVE7QUFTaEIsR0FBSyxDQUFDQyxtQkFBbUIsR0FBRyxRQUFRLENBQVBDLEtB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QztvQ0FBQyxDQUFLOzs7Ozs7Ozs7QUFNbEUsQ0FBQztNQWpDS2pCLG1CQUFtQjtBQW1DekIsK0RBQWVBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL0dhcm1pbkludGVuc2l0eUdyaWQuanM/YmNkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIFR5cG9ncmFwaHksUGFwZXIsQm94fSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuXG5jb25zdCBIZWFkZXJJdGVtID0gc3R5bGVkKFBhcGVyKSgoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnIzFBMjAyNycgOiAnI2ZmZicsXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS5ib2R5MixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgZm9udFdlaWdodDonYm9sZCdcbiAgfSkpO1xuICBjb25zdCBEYXRhSXRlbSA9IHN0eWxlZChQYXBlcikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnIzFBMjAyNycgOiAnI2ZmZicsXG4gICAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJvZHkyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgIGZvbnRXZWlnaHQ6J25vcm1hbCdcbiAgICB9KSk7XG5cbmNvbnN0IEdhcm1pbkludGVuc2l0eUdyaWQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBtb2RlcmF0ZVdlZWtseSA9IFtdLCBpbnRlbnNlV2Vla2x5ID0gW107XG4gICAgZm9yIChsZXQgaT0wO2k8cHJvcHMuZGF0YS5sZW5ndGg7aSs9Nyl7XG4gICAgICAgIGlmICgoaSs3KSA+IHByb3BzLmRhdGEubGVuZ3RoKXtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgbW9kZXJhdGVXZWVrbHkucHVzaChwcm9wcy5kYXRhLnNsaWNlKGksaSs3KS5tYXAocm93ID0+IHBhcnNlSW50KHJvdy5tb2RlcmF0ZUR1cmF0aW9uKS82MCkucmVkdWNlKChwYXJ0aWFsU3VtLGEpID0+IHBhcnRpYWxTdW0rYSwwKSk7XG4gICAgICAgIGludGVuc2VXZWVrbHkucHVzaChwcm9wcy5kYXRhLnNsaWNlKGksaSs3KS5tYXAocm93ID0+IHBhcnNlSW50KHJvdy5pbnRlbnNlRHVyYXRpb24pLzYwKS5yZWR1Y2UoKHBhcnRpYWxTdW0sYSkgPT4gcGFydGlhbFN1bSthLDApKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYXZnTW9kZXJhdGUgPSBwYXJzZUludChtb2RlcmF0ZVdlZWtseS5yZWR1Y2UoKHBhcnRpYWxTdW0sYSkgPT4gcGFydGlhbFN1bSthLDApL21vZGVyYXRlV2Vla2x5Lmxlbmd0aCk7XG4gICAgY29uc3QgYXZnVmlnb3JvdXMgPSBwYXJzZUludChpbnRlbnNlV2Vla2x5LnJlZHVjZSgocGFydGlhbFN1bSxhKSA9PiBwYXJ0aWFsU3VtK2EsMCkvaW50ZW5zZVdlZWtseS5sZW5ndGgpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHJvd1NwYWNpbmc9ezF9IGNvbHVtblNwYWNpbmc9e3sgeHM6IDEsIHNtOiAyLCBtZDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVySXRlbT5BdmVyYWdlIFdlZWtseSBNb2RlcmF0ZSBJbnRlbnNpdHk8L0hlYWRlckl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUl0ZW0+e2F2Z01vZGVyYXRlfSBtaW5zPC9EYXRhSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJJdGVtPkF2ZXJhZ2UgV2Vla2x5IFZpZ29yb3VzIEludGVuc2l0eTwvSGVhZGVySXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhSXRlbT57YXZnVmlnb3JvdXN9IG1pbnM8L0RhdGFJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckl0ZW0+QXZlcmFnZSBXZWVrbHkgVG90YWwgSW50ZW5zaXR5PC9IZWFkZXJJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFJdGVtPnthdmdWaWdvcm91cythdmdNb2RlcmF0ZSoyfSBtaW5zPC9EYXRhSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhcm1pbkludGVuc2l0eUdyaWQiXSwibmFtZXMiOlsiUmVhY3QiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlBhcGVyIiwiQm94Iiwic3R5bGVkIiwiSGVhZGVySXRlbSIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsIm1vZGUiLCJ0eXBvZ3JhcGh5IiwiYm9keTIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwidGV4dCIsInNlY29uZGFyeSIsImZvbnRXZWlnaHQiLCJEYXRhSXRlbSIsIkdhcm1pbkludGVuc2l0eUdyaWQiLCJwcm9wcyIsIm1vZGVyYXRlV2Vla2x5IiwiaW50ZW5zZVdlZWtseSIsImkiLCJkYXRhIiwibGVuZ3RoIiwicHVzaCIsInNsaWNlIiwibWFwIiwicm93IiwicGFyc2VJbnQiLCJtb2RlcmF0ZUR1cmF0aW9uIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJpbnRlbnNlRHVyYXRpb24iLCJhdmdNb2RlcmF0ZSIsImF2Z1ZpZ29yb3VzIiwiZGl2Iiwic3giLCJ3aWR0aCIsImNvbnRhaW5lciIsInJvd1NwYWNpbmciLCJjb2x1bW5TcGFjaW5nIiwieHMiLCJzbSIsIm1kIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customer/details/GarminIntensityGrid.js\n");

/***/ })

});