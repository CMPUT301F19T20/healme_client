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

/***/ "./src/components/GarminDetails/Intensity.js":
/*!***************************************************!*\
  !*** ./src/components/GarminDetails/Intensity.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_components_customer_details_GarminNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/customer/details/GarminNavbar */ \"./src/components/customer/details/GarminNavbar.js\");\n/* harmony import */ var src_components_customer_charts_GoalBarchart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/customer/charts/GoalBarchart */ \"./src/components/customer/charts/GoalBarchart.js\");\n/* harmony import */ var src_components_customer_details_GarminIntensityGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/customer/details/GarminIntensityGrid */ \"./src/components/customer/details/GarminIntensityGrid.js\");\n/* harmony import */ var src_components_customer_details_GarminIntensityList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/customer/details/GarminIntensityList */ \"./src/components/customer/details/GarminIntensityList.js\");\n/* harmony import */ var _customer_charts_BasicBarChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customer/charts/BasicBarChart */ \"./src/components/customer/charts/BasicBarChart.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Intensity = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('4w'), period1 = ref[0], setPeriod = ref[1];\n    var handlePeriodState = function(period) {\n        setPeriod(period);\n        props.changeState(period);\n    };\n    console.log(props.data);\n    var date = props.data.healthSummary.map(function(row) {\n        return row['calendardate'];\n    });\n    var intenseDuration = props.data.healthSummary.map(function(row) {\n        return row['vigorousintensitydurationinseconds'];\n    });\n    var moderateDuration = props.data.healthSummary.map(function(row) {\n        return row['moderateintensitydurationinseconds'];\n    });\n    console.log(intenseDuration, moderateDuration);\n    var data = [];\n    for(var i = 0; i < date.length; i++){\n        data.push({\n            date: date[i],\n            moderateDuration: moderateDuration[i],\n            intenseDuration: intenseDuration[i]\n        });\n    }\n    data.sort(function(a, b) {\n        return a.date > b.date ? 1 : -1;\n    });\n    var subData = void 0;\n    if (period1 == '7d') {\n        subData = data.slice(0, 7);\n    } else if (period1 == '4w') {\n        subData = data.slice(0, 30);\n    } else {\n        subData = data;\n    }\n    var totalMinutes = [];\n    for(var i1 = 0; i1 < intenseDuration.length; i1++){\n        totalMinutes.push(parseInt((parseInt(moderateDuration[i1]) + parseInt(intenseDuration[i1]) * 2) / 60));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n            lineNumber: 44,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginBottom: '1rem'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_components_customer_details_GarminNavbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    getPeriod: handlePeriodState,\n                    type: 'intensity',\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginBottom: '1rem'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_components_customer_details_GarminIntensityGrid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    data: subData,\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginBottom: '1rem',\n                    width: '80%'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    style: {\n                        margin: 'auto'\n                    },\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_customer_charts_BasicBarChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        data: totalMinutes,\n                        color: '#00A36C',\n                        text: 'Intensity Minutes',\n                        title: 'Intensity Minutes',\n                        date: subData.map(function(row) {\n                            return row.date;\n                        }),\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        },\n                        __self: _this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_components_customer_details_GarminIntensityList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    data: subData,\n                    goal: 20,\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Intensity, \"m/4QA1mVymBp7XjBytPU/0nNtF8=\");\n_c = Intensity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intensity);\nvar _c;\n$RefreshReg$(_c, \"Intensity\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYXJtaW5EZXRhaWxzL0ludGVuc2l0eS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNBO0FBQ047QUFDc0M7QUFDRztBQUNXO0FBQ0E7QUFDekI7OztBQUU1RCxHQUFLLENBQUNTLFNBQVMsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUUxQixHQUFLLENBQXNCVCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsQ0FBSSxNQUFqQ1UsT0FBTSxHQUFjVixHQUFjLEtBQTNCVyxTQUFTLEdBQUlYLEdBQWM7SUFDekMsR0FBSyxDQUFDWSxpQkFBaUIsR0FBRyxRQUFRLENBQVBGLE1BQU0sRUFBSyxDQUFDO1FBQ25DQyxTQUFTLENBQUNELE1BQU07UUFDaEJELEtBQUssQ0FBQ0ksV0FBVyxDQUFDSCxNQUFNO0lBQzVCLENBQUM7SUFFREksT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQ08sSUFBSTtJQUN0QixHQUFLLENBQUNDLElBQUksR0FBR1IsS0FBSyxDQUFDTyxJQUFJLENBQUNFLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7UUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUMsQ0FBYzs7SUFDbkUsR0FBSyxDQUFDQyxlQUFlLEdBQUdaLEtBQUssQ0FBQ08sSUFBSSxDQUFDRSxhQUFhLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHO1FBQUlBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDLENBQW9DOztJQUNwRyxHQUFLLENBQUNFLGdCQUFnQixHQUFHYixLQUFLLENBQUNPLElBQUksQ0FBQ0UsYUFBYSxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztRQUFJQSxNQUFNLENBQU5BLEdBQUcsQ0FBQyxDQUFvQzs7SUFDckdOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxlQUFlLEVBQUNDLGdCQUFnQjtJQUU1QyxHQUFLLENBQUNOLElBQUksR0FBRyxDQUFDLENB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Tl9FLy4vc3JjL2NvbXBvbmVudHMvR2FybWluRGV0YWlscy9JbnRlbnNpdHkuanM/ZWRmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2FybWluTmF2YmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL2N1c3RvbWVyL2RldGFpbHMvR2FybWluTmF2YmFyJztcbmltcG9ydCB7IEdvYWxCYXJDaGFydCB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2N1c3RvbWVyL2NoYXJ0cy9Hb2FsQmFyY2hhcnQnO1xuaW1wb3J0IEdhcm1pbkludGVuc2l0eUdyaWQgZnJvbSAnc3JjL2NvbXBvbmVudHMvY3VzdG9tZXIvZGV0YWlscy9HYXJtaW5JbnRlbnNpdHlHcmlkJztcbmltcG9ydCBHYXJtaW5JbnRlbnNpdHlMaXN0IGZyb20gJ3NyYy9jb21wb25lbnRzL2N1c3RvbWVyL2RldGFpbHMvR2FybWluSW50ZW5zaXR5TGlzdCc7XG5pbXBvcnQgQmFzaWNCYXJDaGFydCBmcm9tICcuLi9jdXN0b21lci9jaGFydHMvQmFzaWNCYXJDaGFydCc7XG5cbmNvbnN0IEludGVuc2l0eSA9IChwcm9wcykgPT4ge1xuICAgIFxuICAgIGNvbnN0IFtwZXJpb2Qsc2V0UGVyaW9kXSA9IHVzZVN0YXRlKCc0dycpXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kU3RhdGUgPSAocGVyaW9kKSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChwZXJpb2QpO1xuICAgICAgICBwcm9wcy5jaGFuZ2VTdGF0ZShwZXJpb2QpO1xuICAgIH07XG4gICAgXG4gICAgY29uc29sZS5sb2cocHJvcHMuZGF0YSlcbiAgICBjb25zdCBkYXRlID0gcHJvcHMuZGF0YS5oZWFsdGhTdW1tYXJ5Lm1hcChyb3cgPT4gcm93WydjYWxlbmRhcmRhdGUnXSk7XG4gICAgY29uc3QgaW50ZW5zZUR1cmF0aW9uID0gcHJvcHMuZGF0YS5oZWFsdGhTdW1tYXJ5Lm1hcChyb3cgPT4gcm93Wyd2aWdvcm91c2ludGVuc2l0eWR1cmF0aW9uaW5zZWNvbmRzJ10pO1xuICAgIGNvbnN0IG1vZGVyYXRlRHVyYXRpb24gPSBwcm9wcy5kYXRhLmhlYWx0aFN1bW1hcnkubWFwKHJvdyA9PiByb3dbJ21vZGVyYXRlaW50ZW5zaXR5ZHVyYXRpb25pbnNlY29uZHMnXSk7XG4gICAgY29uc29sZS5sb2coaW50ZW5zZUR1cmF0aW9uLG1vZGVyYXRlRHVyYXRpb24pXG4gICAgXG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGk9MDtpPGRhdGUubGVuZ3RoO2krKyl7XG4gICAgICAgIGRhdGEucHVzaCh7ZGF0ZTpkYXRlW2ldLG1vZGVyYXRlRHVyYXRpb246bW9kZXJhdGVEdXJhdGlvbltpXSxpbnRlbnNlRHVyYXRpb246aW50ZW5zZUR1cmF0aW9uW2ldfSk7XG4gICAgfVxuICAgIGRhdGEuc29ydCgoYSxiKSA9PiAoYS5kYXRlPmIuZGF0ZSk/MTotMSk7XG4gICAgXG4gICAgbGV0IHN1YkRhdGE7XG4gICAgaWYgKHBlcmlvZD09JzdkJyl7XG4gICAgICAgIHN1YkRhdGEgPSBkYXRhLnNsaWNlKDAsNyk7XG4gICAgfWVsc2UgaWYocGVyaW9kPT0nNHcnKXtcbiAgICAgICAgc3ViRGF0YSA9IGRhdGEuc2xpY2UoMCwzMCk7XG4gICAgfWVsc2V7XG4gICAgICAgIHN1YkRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsTWludXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGk9MDtpPGludGVuc2VEdXJhdGlvbi5sZW5ndGg7aSsrKXtcbiAgICAgICAgdG90YWxNaW51dGVzLnB1c2gocGFyc2VJbnQoKHBhcnNlSW50KG1vZGVyYXRlRHVyYXRpb25baV0pKyhwYXJzZUludChpbnRlbnNlRHVyYXRpb25baV0pKjIpKS82MCkpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTonMXJlbSd9fT5cbiAgICAgICAgICAgICAgICA8R2FybWluTmF2YmFyIGdldFBlcmlvZD17aGFuZGxlUGVyaW9kU3RhdGV9IHR5cGU9eydpbnRlbnNpdHknfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzFyZW0nfX0+XG4gICAgICAgICAgICAgICAgPEdhcm1pbkludGVuc2l0eUdyaWQgZGF0YT17c3ViRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTonMXJlbScsd2lkdGg6JzgwJSd9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOidhdXRvJ319PlxuICAgICAgICAgICAgICAgICAgICA8QmFzaWNCYXJDaGFydCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RvdGFsTWludXRlc30gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17JyMwMEEzNkMnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9eydJbnRlbnNpdHkgTWludXRlcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0ludGVuc2l0eSBNaW51dGVzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3N1YkRhdGEubWFwKHJvdz0+cm93LmRhdGUpfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8R2FybWluSW50ZW5zaXR5TGlzdCBkYXRhPXtzdWJEYXRhfSBnb2FsPXsyMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZW5zaXR5Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJHYXJtaW5OYXZiYXIiLCJHb2FsQmFyQ2hhcnQiLCJHYXJtaW5JbnRlbnNpdHlHcmlkIiwiR2FybWluSW50ZW5zaXR5TGlzdCIsIkJhc2ljQmFyQ2hhcnQiLCJJbnRlbnNpdHkiLCJwcm9wcyIsInBlcmlvZCIsInNldFBlcmlvZCIsImhhbmRsZVBlcmlvZFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImRhdGUiLCJoZWFsdGhTdW1tYXJ5IiwibWFwIiwicm93IiwiaW50ZW5zZUR1cmF0aW9uIiwibW9kZXJhdGVEdXJhdGlvbiIsImkiLCJsZW5ndGgiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic3ViRGF0YSIsInNsaWNlIiwidG90YWxNaW51dGVzIiwicGFyc2VJbnQiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImdldFBlcmlvZCIsInR5cGUiLCJ3aWR0aCIsIm1hcmdpbiIsImNvbG9yIiwidGV4dCIsInRpdGxlIiwiZ29hbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GarminDetails/Intensity.js\n");

/***/ })

});