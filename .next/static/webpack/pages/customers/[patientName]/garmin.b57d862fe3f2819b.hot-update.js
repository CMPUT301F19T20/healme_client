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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_components_customer_details_GarminNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/customer/details/GarminNavbar */ \"./src/components/customer/details/GarminNavbar.js\");\n/* harmony import */ var src_components_customer_charts_GoalBarchart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/customer/charts/GoalBarchart */ \"./src/components/customer/charts/GoalBarchart.js\");\n/* harmony import */ var src_components_customer_details_GarminIntensityGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/customer/details/GarminIntensityGrid */ \"./src/components/customer/details/GarminIntensityGrid.js\");\n/* harmony import */ var src_components_customer_details_GarminIntensityList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/customer/details/GarminIntensityList */ \"./src/components/customer/details/GarminIntensityList.js\");\n/* harmony import */ var _customer_charts_BasicBarChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customer/charts/BasicBarChart */ \"./src/components/customer/charts/BasicBarChart.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Intensity = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('4w'), period1 = ref[0], setPeriod = ref[1];\n    var handlePeriodState = function(period) {\n        setPeriod(period);\n        props.changeState(period);\n    };\n    console.log(props.data);\n    var date = props.data.healthSummary.map(function(row) {\n        return row['calendardate'];\n    });\n    var intenseDuration = props.data.healthSummary.map(function(row) {\n        return row['vigorousintensitydurationinseconds'];\n    });\n    var moderateDuration = props.data.healthSummary.map(function(row) {\n        return row['moderateintensitydurationinseconds'];\n    });\n    console.log(intenseDuration, moderateDuration);\n    var data = [];\n    for(var i = 0; i < date.length; i++){\n        data.push({\n            date: date[i],\n            moderateDuration: moderateDuration[i],\n            intenseDuration: intenseDuration[i]\n        });\n    }\n    data.sort(function(a, b) {\n        return a.date > b.date ? 1 : -1;\n    });\n    var subData = void 0;\n    if (period1 == '7d') {\n        subData = data.slice(0, 7);\n    } else if (period1 == '4w') {\n        subData = data.slice(0, 30);\n    } else {\n        subData = data;\n    }\n    var totalMinutes = [];\n    for(var i1 = 0; i1 < intenseDuration.length; i1++){\n        totalMinutes.push(parseInt((parseInt(moderateDuration[i1]) + parseInt(intenseDuration[i1]) * 2) / 60));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n            lineNumber: 44,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginBottom: '1rem'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_components_customer_details_GarminNavbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    getPeriod: handlePeriodState,\n                    type: 'intensity',\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginBottom: '1rem'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_components_customer_details_GarminIntensityGrid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    data: subData,\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginBottom: '1rem'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_customer_charts_BasicBarChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    data: totalMinutes,\n                    color: '#0FB4E4',\n                    text: 'Intensity Minutes',\n                    title: 'Intensity Minutes',\n                    date: subData.map(function(row) {\n                        return row.date;\n                    }),\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_components_customer_details_GarminIntensityList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    data: subData,\n                    goal: 80,\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Intensity.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Intensity, \"m/4QA1mVymBp7XjBytPU/0nNtF8=\");\n_c = Intensity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intensity);\nvar _c;\n$RefreshReg$(_c, \"Intensity\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYXJtaW5EZXRhaWxzL0ludGVuc2l0eS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNBO0FBQ047QUFDc0M7QUFDRztBQUNXO0FBQ0E7QUFDekI7OztBQUU1RCxHQUFLLENBQUNTLFNBQVMsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUUxQixHQUFLLENBQXNCVCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsQ0FBSSxNQUFqQ1UsT0FBTSxHQUFjVixHQUFjLEtBQTNCVyxTQUFTLEdBQUlYLEdBQWM7SUFDekMsR0FBSyxDQUFDWSxpQkFBaUIsR0FBRyxRQUFRLENBQVBGLE1BQU0sRUFBSyxDQUFDO1FBQ25DQyxTQUFTLENBQUNELE1BQU07UUFDaEJELEtBQUssQ0FBQ0ksV0FBVyxDQUFDSCxNQUFNO0lBQzVCLENBQUM7SUFFREksT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQ08sSUFBSTtJQUN0QixHQUFLLENBQUNDLElBQUksR0FBR1IsS0FBSyxDQUFDTyxJQUFJLENBQUNFLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7UUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUMsQ0FBYzs7SUFDbkUsR0FBSyxDQUFDQyxlQUFlLEdBQUdaLEtBQUssQ0FBQ08sSUFBSSxDQUFDRSxhQUFhLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHO1FBQUlBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDLENBQW9DOztJQUNwRyxHQUFLLENBQUNFLGdCQUFnQixHQUFHYixLQUFLLENBQUNPLElBQUksQ0FBQ0UsYUFBYSxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztRQUFJQSxNQUFNLENBQU5BLEdBQUcsQ0FBQyxDQUFvQzs7SUFDckdOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxlQUFlLEVBQUNDLGdCQUFnQjtJQUU1QyxHQUFLLENBQUNOLElBQUksR0FBRyxDQUFDLENBQUM7SUFDZixHQUFHLENBQUUsR0FBRyxDQUFDTyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNOLElBQUksQ0FBQ08sTUFBTSxFQUFDRCxDQUFDLEdBQUcsQ0FBQztRQUM1QlAsSUFBSSxDQUFDUyxJQUFJLENBQUMsQ0FBQ1I7WUFBQUEsSUFBSSxFQUFDQSxJQUFJLENBQUNNLENBQUM7WUFBRUQsZ0JBQWdCLEVBQUNBLGdCQUFnQixDQUFDQyxDQUFDO1lBQUVGLGVBQWUsRUFBQ0EsZUFBZSxDQUFDRSxDQUFDO1FBQUMsQ0FBQztJQUNwRyxDQUFDO0lBQ0RQLElBQUksQ0FBQ1UsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFDQyxDQUFDO1FBQUssTUFBTSxDQUFMRCxDQUFDLENBQUNWLElBQUksR0FBQ1csQ0FBQyxDQUFDWCxJQUFJLEdBQUUsQ0FBQyxJQUFFLENBQUM7O0lBRXZDLEdBQUcsQ0FBQ1ksT0FBTyxHQUFQQSxJQUFJLENBQUpBLENBQU87SUFDWCxFQUFFLEVBQUVuQixPQUFNLElBQUUsQ0FBSSxLQUFDLENBQUM7UUFDZG1CLE9BQU8sR0FBR2IsSUFBSSxDQUFDYyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDNUIsQ0FBQyxNQUFLLEVBQUUsRUFBQ3BCLE9BQU0sSUFBRSxDQUFJLEtBQUMsQ0FBQztRQUNuQm1CLE9BQU8sR0FBR2IsSUFBSSxDQUFDYyxLQUFLLENBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDN0IsQ0FBQyxNQUFJLENBQUM7UUFDRkQsT0FBTyxHQUFHYixJQUFJO0lBQ2xCLENBQUM7SUFFRCxHQUFLLENBQUNlLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDdkIsR0FBRyxDQUFFLEdBQUcsQ0FBQ1IsRUFBQyxHQUFDLENBQUMsRUFBQ0EsRUFBQyxHQUFDRixlQUFlLENBQUNHLE1BQU0sRUFBQ0QsRUFBQyxHQUFHLENBQUM7UUFDdkNRLFlBQVksQ0FBQ04sSUFBSSxDQUFDTyxRQUFRLEVBQUVBLFFBQVEsQ0FBQ1YsZ0JBQWdCLENBQUNDLEVBQUMsS0FBSVMsUUFBUSxDQUFDWCxlQUFlLENBQUNFLEVBQUMsS0FBRyxDQUFDLElBQUcsRUFBRTtJQUNsRyxDQUFDO0lBQ0QsTUFBTSx1RUFDRFUsQ0FBRzs7Ozs7Ozs7aUZBQ0NBLENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsWUFBWSxFQUFDLENBQU07Z0JBQUEsQ0FBQzs7Ozs7OzsrRkFDNUJoQyxvRkFBWTtvQkFBQ2lDLFNBQVMsRUFBRXhCLGlCQUFpQjtvQkFBRXlCLElBQUksRUFBRSxDQUFXOzs7Ozs7Ozs7aUZBRWhFSixDQUFHO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7b0JBQUFBLFlBQVksRUFBQyxDQUFNO2dCQUFBLENBQUM7Ozs7Ozs7K0ZBQzVCOUIsMkZBQW1CO29CQUFDVyxJQUFJLEVBQUVhLE9BQU87Ozs7Ozs7OztpRkFFckNJLENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsWUFBWSxFQUFDLENBQU07Z0JBQUEsQ0FBQzs7Ozs7OzsrRkFDNUI1QixzRUFBYTtvQkFDVlMsSUFBSSxFQUFFZSxZQUFZO29CQUNsQk8sS0FBSyxFQUFFLENBQVM7b0JBQ2hCQyxJQUFJLEVBQUUsQ0FBbUI7b0JBQ3pCQyxLQUFLLEVBQUUsQ0FBbUI7b0JBQzFCdkIsSUFBSSxFQUFFWSxPQUFPLENBQUNWLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHO3dCQUFFQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0gsSUFBSTs7Ozs7Ozs7OztpRkFFdENnQixDQUFHOzs7Ozs7OytGQUNDM0IsMkZBQW1CO29CQUFDVSxJQUFJLEVBQUVhLE9BQU87b0JBQUVZLElBQUksRUFBRSxFQUFFOzs7Ozs7Ozs7OztBQUk1RCxDQUFDO0dBdERLakMsU0FBUztLQUFUQSxTQUFTO0FBd0RmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dhcm1pbkRldGFpbHMvSW50ZW5zaXR5LmpzP2VkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdhcm1pbk5hdmJhciBmcm9tICdzcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL0dhcm1pbk5hdmJhcic7XG5pbXBvcnQgeyBHb2FsQmFyQ2hhcnQgfSBmcm9tICdzcmMvY29tcG9uZW50cy9jdXN0b21lci9jaGFydHMvR29hbEJhcmNoYXJ0JztcbmltcG9ydCBHYXJtaW5JbnRlbnNpdHlHcmlkIGZyb20gJ3NyYy9jb21wb25lbnRzL2N1c3RvbWVyL2RldGFpbHMvR2FybWluSW50ZW5zaXR5R3JpZCc7XG5pbXBvcnQgR2FybWluSW50ZW5zaXR5TGlzdCBmcm9tICdzcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL0dhcm1pbkludGVuc2l0eUxpc3QnO1xuaW1wb3J0IEJhc2ljQmFyQ2hhcnQgZnJvbSAnLi4vY3VzdG9tZXIvY2hhcnRzL0Jhc2ljQmFyQ2hhcnQnO1xuXG5jb25zdCBJbnRlbnNpdHkgPSAocHJvcHMpID0+IHtcbiAgICBcbiAgICBjb25zdCBbcGVyaW9kLHNldFBlcmlvZF0gPSB1c2VTdGF0ZSgnNHcnKVxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZFN0YXRlID0gKHBlcmlvZCkgPT4ge1xuICAgICAgICBzZXRQZXJpb2QocGVyaW9kKTtcbiAgICAgICAgcHJvcHMuY2hhbmdlU3RhdGUocGVyaW9kKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpXG4gICAgY29uc3QgZGF0ZSA9IHByb3BzLmRhdGEuaGVhbHRoU3VtbWFyeS5tYXAocm93ID0+IHJvd1snY2FsZW5kYXJkYXRlJ10pO1xuICAgIGNvbnN0IGludGVuc2VEdXJhdGlvbiA9IHByb3BzLmRhdGEuaGVhbHRoU3VtbWFyeS5tYXAocm93ID0+IHJvd1sndmlnb3JvdXNpbnRlbnNpdHlkdXJhdGlvbmluc2Vjb25kcyddKTtcbiAgICBjb25zdCBtb2RlcmF0ZUR1cmF0aW9uID0gcHJvcHMuZGF0YS5oZWFsdGhTdW1tYXJ5Lm1hcChyb3cgPT4gcm93Wydtb2RlcmF0ZWludGVuc2l0eWR1cmF0aW9uaW5zZWNvbmRzJ10pO1xuICAgIGNvbnNvbGUubG9nKGludGVuc2VEdXJhdGlvbixtb2RlcmF0ZUR1cmF0aW9uKVxuICAgIFxuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpPTA7aTxkYXRlLmxlbmd0aDtpKyspe1xuICAgICAgICBkYXRhLnB1c2goe2RhdGU6ZGF0ZVtpXSxtb2RlcmF0ZUR1cmF0aW9uOm1vZGVyYXRlRHVyYXRpb25baV0saW50ZW5zZUR1cmF0aW9uOmludGVuc2VEdXJhdGlvbltpXX0pO1xuICAgIH1cbiAgICBkYXRhLnNvcnQoKGEsYikgPT4gKGEuZGF0ZT5iLmRhdGUpPzE6LTEpO1xuICAgIFxuICAgIGxldCBzdWJEYXRhO1xuICAgIGlmIChwZXJpb2Q9PSc3ZCcpe1xuICAgICAgICBzdWJEYXRhID0gZGF0YS5zbGljZSgwLDcpO1xuICAgIH1lbHNlIGlmKHBlcmlvZD09JzR3Jyl7XG4gICAgICAgIHN1YkRhdGEgPSBkYXRhLnNsaWNlKDAsMzApO1xuICAgIH1lbHNle1xuICAgICAgICBzdWJEYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbE1pbnV0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpPTA7aTxpbnRlbnNlRHVyYXRpb24ubGVuZ3RoO2krKyl7XG4gICAgICAgIHRvdGFsTWludXRlcy5wdXNoKHBhcnNlSW50KChwYXJzZUludChtb2RlcmF0ZUR1cmF0aW9uW2ldKSsocGFyc2VJbnQoaW50ZW5zZUR1cmF0aW9uW2ldKSoyKSkvNjApKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzFyZW0nfX0+XG4gICAgICAgICAgICAgICAgPEdhcm1pbk5hdmJhciBnZXRQZXJpb2Q9e2hhbmRsZVBlcmlvZFN0YXRlfSB0eXBlPXsnaW50ZW5zaXR5J30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOicxcmVtJ319PlxuICAgICAgICAgICAgICAgIDxHYXJtaW5JbnRlbnNpdHlHcmlkIGRhdGE9e3N1YkRhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzFyZW0nfX0+XG4gICAgICAgICAgICAgICAgPEJhc2ljQmFyQ2hhcnQgXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3RvdGFsTWludXRlc30gXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnIzBGQjRFNCd9IFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXsnSW50ZW5zaXR5IE1pbnV0ZXMnfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0ludGVuc2l0eSBNaW51dGVzJ31cbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17c3ViRGF0YS5tYXAocm93PT5yb3cuZGF0ZSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEdhcm1pbkludGVuc2l0eUxpc3QgZGF0YT17c3ViRGF0YX0gZ29hbD17ODB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVuc2l0eSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiR2FybWluTmF2YmFyIiwiR29hbEJhckNoYXJ0IiwiR2FybWluSW50ZW5zaXR5R3JpZCIsIkdhcm1pbkludGVuc2l0eUxpc3QiLCJCYXNpY0JhckNoYXJ0IiwiSW50ZW5zaXR5IiwicHJvcHMiLCJwZXJpb2QiLCJzZXRQZXJpb2QiLCJoYW5kbGVQZXJpb2RTdGF0ZSIsImNoYW5nZVN0YXRlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkYXRlIiwiaGVhbHRoU3VtbWFyeSIsIm1hcCIsInJvdyIsImludGVuc2VEdXJhdGlvbiIsIm1vZGVyYXRlRHVyYXRpb24iLCJpIiwibGVuZ3RoIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInN1YkRhdGEiLCJzbGljZSIsInRvdGFsTWludXRlcyIsInBhcnNlSW50IiwiZGl2Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJnZXRQZXJpb2QiLCJ0eXBlIiwiY29sb3IiLCJ0ZXh0IiwidGl0bGUiLCJnb2FsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GarminDetails/Intensity.js\n");

/***/ })

});