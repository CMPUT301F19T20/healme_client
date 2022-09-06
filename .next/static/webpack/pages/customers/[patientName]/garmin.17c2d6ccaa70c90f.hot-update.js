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

/***/ "./src/components/GarminDetails/Activities.js":
/*!****************************************************!*\
  !*** ./src/components/GarminDetails/Activities.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_components_customer_details_GarminNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/customer/details/GarminNavbar */ \"./src/components/customer/details/GarminNavbar.js\");\n/* harmony import */ var _customer_details_PageDataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer/details/PageDataTable */ \"./src/components/customer/details/PageDataTable.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Activities = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('4w'), period1 = ref[0], setPeriod = ref[1];\n    var handlePeriodState = function(period) {\n        setPeriod(period);\n        props.changeState(period);\n    };\n    var date = props.data.healthSummary.map(function(row) {\n        return row['calendardate'];\n    });\n    var activityType = props.data.activitySummary.map(function(row) {\n        return row['activitytype'];\n    });\n    var duration = props.data.activitySummary.map(function(row) {\n        return row['durationinseconds'];\n    });\n    var distance = props.data.activitySummary.map(function(row) {\n        return row['distanceinmeters'];\n    });\n    var activeCal = props.data.calorieSummary.map(function(row) {\n        return row['activekilocalories'];\n    });\n    var bmrCal = props.data.calorieSummary.map(function(row) {\n        return row['bmrkilocalories'];\n    });\n    var data = [];\n    for(var i = 0; i < date.length; i++){\n        data.push({\n            date: date[i],\n            activityType: activityType[i],\n            calorie: parseInt(activeCal[i]) + parseInt(bmrCal[i]),\n            duration: duration[i],\n            distance: distance[i]\n        });\n    }\n    var subData = void 0;\n    if (period1 == '7d') {\n        subData = data.slice(0, 7);\n    } else if (period1 == '4w') {\n        subData = data.slice(0, 30);\n    } else {\n        subData = data;\n    }\n    var activity_cols = [\n        {\n            name: 'Date',\n            selector: function(row) {\n                return row.date;\n            },\n            sortable: true,\n            right: true\n        },\n        {\n            name: 'Activity Type',\n            selector: function(row) {\n                return row.activityType;\n            },\n            sortable: true,\n            right: true\n        },\n        {\n            name: 'Total Calories (kcal)',\n            selector: function(row) {\n                return row.calorie;\n            },\n            sortable: true,\n            right: true\n        },\n        {\n            name: 'Duration (mins)',\n            selector: function(row) {\n                return row.duration;\n            },\n            sortable: true,\n            right: true\n        },\n        {\n            name: 'Distance (m)',\n            selector: function(row) {\n                return row.distance;\n            },\n            sortable: true,\n            right: true\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Activities.js\",\n            lineNumber: 44,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginBottom: '1rem'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Activities.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_components_customer_details_GarminNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    getPeriod: handlePeriodState,\n                    type: 'activity',\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Activities.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginBottom: '1rem'\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Activities.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_customer_details_PageDataTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    cols: activity_cols,\n                    data: subData,\n                    pagination: true,\n                    placeHolderText: 'Activity Type',\n                    filterCol: 'Activity Type',\n                    title: 'Activities List',\n                    __source: {\n                        fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/GarminDetails/Activities.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Activities, \"m/4QA1mVymBp7XjBytPU/0nNtF8=\");\n_c = Activities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activities);\nvar _c;\n$RefreshReg$(_c, \"Activities\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYXJtaW5EZXRhaWxzL0FjdGl2aXRpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBQ2tDO0FBQ1Y7OztBQUc3RCxHQUFLLENBQUNJLFVBQVUsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUMzQixHQUFLLENBQXNCSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsQ0FBSSxNQUFqQ0ssT0FBTSxHQUFjTCxHQUFjLEtBQTNCTSxTQUFTLEdBQUlOLEdBQWM7SUFDekMsR0FBSyxDQUFDTyxpQkFBaUIsR0FBRyxRQUFRLENBQVBGLE1BQU0sRUFBSyxDQUFDO1FBQ25DQyxTQUFTLENBQUNELE1BQU07UUFDaEJELEtBQUssQ0FBQ0ksV0FBVyxDQUFDSCxNQUFNO0lBQzVCLENBQUM7SUFFRCxHQUFLLENBQUNJLElBQUksR0FBR0wsS0FBSyxDQUFDTSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7UUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUMsQ0FBYzs7SUFDbkUsR0FBSyxDQUFDQyxZQUFZLEdBQUdWLEtBQUssQ0FBQ00sSUFBSSxDQUFDSyxlQUFlLENBQUNILEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHO1FBQUlBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDLENBQWM7O0lBQzdFLEdBQUssQ0FBQ0csUUFBUSxHQUFHWixLQUFLLENBQUNNLElBQUksQ0FBQ0ssZUFBZSxDQUFDSCxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztRQUFJQSxNQUFNLENBQU5BLEdBQUcsQ0FBQyxDQUFtQjs7SUFDOUUsR0FBSyxDQUFDSSxRQUFRLEdBQUdiLEtBQUssQ0FBQ00sSUFBSSxDQUFDSyxlQUFlLENBQUNILEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHO1FBQUlBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDLENBQWtCOztJQUM3RSxHQUFLLENBQUNLLFNBQVMsR0FBR2QsS0FBSyxDQUFD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QVksRUFBQyxDQUFNO2dCQUFBLENBQUM7Ozs7Ozs7K0ZBQzVCbEMsb0ZBQVk7b0JBQUNtQyxTQUFTLEVBQUU3QixpQkFBaUI7b0JBQUU4QixJQUFJLEVBQUUsQ0FBVTs7Ozs7Ozs7O2lGQUUvREosQ0FBRztnQkFBQ0MsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxZQUFZLEVBQUMsQ0FBTTtnQkFBQSxDQUFDOzs7Ozs7OytGQUM1QmpDLHVFQUFhO29CQUFDb0MsSUFBSSxFQUFFVixhQUFhO29CQUFFbEIsSUFBSSxFQUFFZ0IsT0FBTztvQkFBRWEsVUFBVSxFQUFFLElBQUk7b0JBQzNEQyxlQUFlLEVBQUUsQ0FBZTtvQkFBRUMsU0FBUyxFQUFFLENBQWU7b0JBQUVDLEtBQUssRUFBRSxDQUFpQjs7Ozs7Ozs7Ozs7QUFLOUcsQ0FBQztHQWpES3ZDLFVBQVU7S0FBVkEsVUFBVTtBQW1EaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FybWluRGV0YWlscy9BY3Rpdml0aWVzLmpzP2MzNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdhcm1pbk5hdmJhciBmcm9tICdzcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL0dhcm1pbk5hdmJhcic7XG5pbXBvcnQgUGFnZURhdGFUYWJsZSBmcm9tICcuLi9jdXN0b21lci9kZXRhaWxzL1BhZ2VEYXRhVGFibGUnO1xuXG5cbmNvbnN0IEFjdGl2aXRpZXMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbcGVyaW9kLHNldFBlcmlvZF0gPSB1c2VTdGF0ZSgnNHcnKVxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZFN0YXRlID0gKHBlcmlvZCkgPT4ge1xuICAgICAgICBzZXRQZXJpb2QocGVyaW9kKTtcbiAgICAgICAgcHJvcHMuY2hhbmdlU3RhdGUocGVyaW9kKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0ZSA9IHByb3BzLmRhdGEuaGVhbHRoU3VtbWFyeS5tYXAocm93ID0+IHJvd1snY2FsZW5kYXJkYXRlJ10pO1xuICAgIGNvbnN0IGFjdGl2aXR5VHlwZSA9IHByb3BzLmRhdGEuYWN0aXZpdHlTdW1tYXJ5Lm1hcChyb3cgPT4gcm93WydhY3Rpdml0eXR5cGUnXSk7XG4gICAgY29uc3QgZHVyYXRpb24gPSBwcm9wcy5kYXRhLmFjdGl2aXR5U3VtbWFyeS5tYXAocm93ID0+IHJvd1snZHVyYXRpb25pbnNlY29uZHMnXSk7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBwcm9wcy5kYXRhLmFjdGl2aXR5U3VtbWFyeS5tYXAocm93ID0+IHJvd1snZGlzdGFuY2Vpbm1ldGVycyddKTtcbiAgICBjb25zdCBhY3RpdmVDYWwgPSBwcm9wcy5kYXRhLmNhbG9yaWVTdW1tYXJ5Lm1hcChyb3cgPT4gcm93WydhY3RpdmVraWxvY2Fsb3JpZXMnXSk7XG4gICAgY29uc3QgYm1yQ2FsID0gcHJvcHMuZGF0YS5jYWxvcmllU3VtbWFyeS5tYXAocm93ID0+IHJvd1snYm1ya2lsb2NhbG9yaWVzJ10pO1xuICAgIFxuXG5cbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChsZXQgaT0wO2k8ZGF0ZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgZGF0YS5wdXNoKHtkYXRlOmRhdGVbaV0sYWN0aXZpdHlUeXBlOmFjdGl2aXR5VHlwZVtpXSxjYWxvcmllOnBhcnNlSW50KGFjdGl2ZUNhbFtpXSkrcGFyc2VJbnQoYm1yQ2FsW2ldKSxkdXJhdGlvbjpkdXJhdGlvbltpXSxkaXN0YW5jZTpkaXN0YW5jZVtpXX0pO1xuICAgIH1cbiAgICBsZXQgc3ViRGF0YTtcbiAgICBpZiAocGVyaW9kPT0nN2QnKXtcbiAgICAgICAgc3ViRGF0YSA9IGRhdGEuc2xpY2UoMCw3KTtcbiAgICB9ZWxzZSBpZihwZXJpb2Q9PSc0dycpe1xuICAgICAgICBzdWJEYXRhID0gZGF0YS5zbGljZSgwLDMwKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgc3ViRGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZpdHlfY29scyA9IFtcbiAgICAgICAge25hbWU6J0RhdGUnLCBzZWxlY3Rvcjpyb3c9PnJvdy5kYXRlLCBzb3J0YWJsZTp0cnVlLCByaWdodDp0cnVlfSxcbiAgICAgICAge25hbWU6J0FjdGl2aXR5IFR5cGUnLCBzZWxlY3Rvcjpyb3c9PnJvdy5hY3Rpdml0eVR5cGUsIHNvcnRhYmxlOnRydWUsIHJpZ2h0OnRydWV9LFxuICAgICAgICB7bmFtZTonVG90YWwgQ2Fsb3JpZXMgKGtjYWwpJywgc2VsZWN0b3I6cm93PT5yb3cuY2Fsb3JpZSwgc29ydGFibGU6dHJ1ZSwgcmlnaHQ6dHJ1ZX0sXG4gICAgICAgIHtuYW1lOidEdXJhdGlvbiAobWlucyknLCBzZWxlY3Rvcjpyb3c9PnJvdy5kdXJhdGlvbiwgc29ydGFibGU6dHJ1ZSwgcmlnaHQ6dHJ1ZX0sXG4gICAgICAgIHtuYW1lOidEaXN0YW5jZSAobSknLCBzZWxlY3Rvcjpyb3c9PnJvdy5kaXN0YW5jZSwgc29ydGFibGU6dHJ1ZSwgcmlnaHQ6dHJ1ZX0sXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzFyZW0nfX0+XG4gICAgICAgICAgICAgICAgPEdhcm1pbk5hdmJhciBnZXRQZXJpb2Q9e2hhbmRsZVBlcmlvZFN0YXRlfSB0eXBlPXsnYWN0aXZpdHknfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzFyZW0nfX0+XG4gICAgICAgICAgICAgICAgPFBhZ2VEYXRhVGFibGUgY29scz17YWN0aXZpdHlfY29sc30gZGF0YT17c3ViRGF0YX0gcGFnaW5hdGlvbj17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUhvbGRlclRleHQ9eydBY3Rpdml0eSBUeXBlJ30gZmlsdGVyQ29sPXsnQWN0aXZpdHkgVHlwZSd9IHRpdGxlPXsnQWN0aXZpdGllcyBMaXN0J30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0aWVzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHYXJtaW5OYXZiYXIiLCJQYWdlRGF0YVRhYmxlIiwiQWN0aXZpdGllcyIsInByb3BzIiwicGVyaW9kIiwic2V0UGVyaW9kIiwiaGFuZGxlUGVyaW9kU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImRhdGUiLCJkYXRhIiwiaGVhbHRoU3VtbWFyeSIsIm1hcCIsInJvdyIsImFjdGl2aXR5VHlwZSIsImFjdGl2aXR5U3VtbWFyeSIsImR1cmF0aW9uIiwiZGlzdGFuY2UiLCJhY3RpdmVDYWwiLCJjYWxvcmllU3VtbWFyeSIsImJtckNhbCIsImkiLCJsZW5ndGgiLCJwdXNoIiwiY2Fsb3JpZSIsInBhcnNlSW50Iiwic3ViRGF0YSIsInNsaWNlIiwiYWN0aXZpdHlfY29scyIsIm5hbWUiLCJzZWxlY3RvciIsInNvcnRhYmxlIiwicmlnaHQiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImdldFBlcmlvZCIsInR5cGUiLCJjb2xzIiwicGFnaW5hdGlvbiIsInBsYWNlSG9sZGVyVGV4dCIsImZpbHRlckNvbCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GarminDetails/Activities.js\n");

/***/ })

});