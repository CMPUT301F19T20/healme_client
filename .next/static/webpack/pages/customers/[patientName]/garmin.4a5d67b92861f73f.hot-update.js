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

/***/ "./src/components/customer/charts/BasicBarChart.js":
/*!*********************************************************!*\
  !*** ./src/components/customer/charts/BasicBarChart.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar BasicBarChart = function(props) {\n    var Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function() {\n        return __webpack_require__.e(/*! import() */ \"node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\"));\n    }, {\n        loadableGenerated: {\n            webpack: function() {\n                return [\n                    /*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")\n                ];\n            },\n            modules: [\n                \"../components/customer/charts/BasicBarChart.js -> \" + \"react-apexcharts\"\n            ]\n        },\n        ssr: false\n    });\n    var data = props.data;\n    var date = props.date;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/charts/BasicBarChart.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Chart, {\n            type: \"bar\",\n            height: 300,\n            series: [\n                {\n                    name: props.title,\n                    data: data\n                }\n            ],\n            options: {\n                chart: {\n                    type: 'bar'\n                },\n                plotOptions: {\n                    bar: {\n                        columnWidth: '40%',\n                        horizontal: false,\n                        endingShape: 'rounded'\n                    }\n                },\n                title: {\n                    text: 'Daily ' + props.title,\n                    align: 'left',\n                    style: {\n                        fontSize: '20px',\n                        fontWeight: 'bold',\n                        color: '#263238'\n                    }\n                },\n                colors: [\n                    props.color\n                ],\n                dataLabels: {\n                    enabled: true,\n                    style: {\n                        colors: [\n                            '#1B1212'\n                        ]\n                    }\n                },\n                xaxis: {\n                    categories: date\n                },\n                yaxis: {\n                    title: {\n                        text: props.text\n                    }\n                },\n                fill: {\n                    opacity: 1\n                }\n            },\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/charts/BasicBarChart.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            },\n            __self: _this\n        })\n    }));\n};\n_c = BasicBarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicBarChart);\nvar _c;\n$RefreshReg$(_c, \"BasicBarChart\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9jaGFydHMvQmFzaWNCYXJDaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDUzs7QUFFbEMsR0FBSyxDQUFDRSxhQUFhLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztJQUM5QixHQUFLLENBQUNDLEtBQUssR0FBR0gsbURBQU8sQ0FBQyxRQUFRO1FBQUZJLE1BQU0sQ0FBTkEsK09BQXlCOzs7Ozs7Ozs7Ozs7UUFBS0MsR0FBRyxFQUFFLEtBQUs7O0lBQ3BFLEdBQUssQ0FBQ0MsSUFBSSxHQUFHSixLQUFLLENBQUNJLElBQUk7SUFDdkIsR0FBSyxDQUFDQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ0ssSUFBSTtJQUN2QixNQUFNLHNFQUNEQyxDQUFHOzs7Ozs7O3VGQUNDTCxLQUFLO1lBQ05NLElBQUksRUFBQyxDQUFLO1lBQ1ZDLE1BQU0sRUFBRSxHQUFHO1lBQ1hDLE1BQU0sRUFBRSxDQUFDO2dCQUFBLENBQUM7b0JBQ05DLElBQUksRUFBQ1YsS0FBSyxDQUFDVyxLQUFLO29CQUNoQlAsSUFBSSxFQUFDQSxJQUFJO2dCQUNiLENBQUM7WUFBQSxDQUFDO1lBQ0ZRLE9BQU8sRUFBRSxDQUFDO2dCQUNOQyxLQUFLLEVBQUMsQ0FBQztvQkFDSE4sSUFBSSxFQUFDLENBQUs7Z0JBQ2QsQ0FBQztnQkFDRE8sV0FBVyxFQUFFLENBQUM7b0JBQ1ZDLEdBQUcsRUFBRSxDQUFDO3dCQUNOQyxXQUFXLEVBQUUsQ0FBSzt3QkFDbEJDLFVBQVUsRUFBQyxLQUFLO3dCQUNoQkMsV0FBVyxFQUFDLENBQVM7b0JBQ3JCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRFAsS0FBSyxFQUFDLENBQUM7b0JBQ0hRLElBQUksRUFBQyxDQUFRLFVBQUNuQixLQUFLLENBQUNXLEtBQUs7b0JBQ3pCUyxLQUFLLEVBQUMsQ0FBTTtvQkFDWkMsS0FBSyxFQUFDLENBQUM7d0JBQ0hDLFFBQVEsRUFBRyxDQUFNO3dCQUNqQkMsVUFBVSxFQUFHLENBQU07d0JBQ25CQyxLQUFLLEVBQUcsQ0FBUztvQkFDckIsQ0FBQztnQkFDTCxDQUFDO2dCQUNEQyxNQUFNLEVBQUUsQ0FBQ3pCO29CQUFBQSxLQUFLLENBQUN3QixLQUFLO2dCQUFBLENBQUM7Z0JBQ3JCRSxVQUFVLEVBQUUsQ0FBQztvQkFDVEMsT0FBTyxFQUFFLElBQUk7b0JBQ2JOLEtBQUssRUFBQyxDQUFDO3dCQUNISSxNQUFNLEVBQUMsQ0FBQzs0QkFBQSxDQUFTO3dCQUFBLENBQUM7b0JBQ3RCLENBQUM7Z0JBRUwsQ0FBQztnQkFDREcsS0FBSyxFQUFDLENBQUM7b0JBQ0hDLFVBQVUsRUFBQ3hCLElBQUk7Z0JBQ25CLENBQUM7Z0JBQ0R5QixLQUFLLEVBQUMsQ0FBQztvQkFDSG5CLEtBQUssRUFBQyxDQUFDO3dCQUNIUSxJQUFJLEVBQUNuQixLQUFLLENBQUNtQixJQUFJO29CQUNuQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0RZLElBQUksRUFBQyxDQUFDO29CQUNGQyxPQUFPLEVBQUMsQ0FBQztnQkFDYixDQUFDO1lBRUwsQ0FBQzs7Ozs7Ozs7O0FBSWIsQ0FBQztLQXpES2pDLGFBQWE7QUEyRG5CLCtEQUFlQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2N1c3RvbWVyL2NoYXJ0cy9CYXNpY0JhckNoYXJ0LmpzP2ZmMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgQmFzaWNCYXJDaGFydCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwgeyBzc3I6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xuICAgIGNvbnN0IGRhdGUgPSBwcm9wcy5kYXRlXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgdHlwZT1cImJhclwiXG4gICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgIHNlcmllcz17W3tcbiAgICAgICAgICAgICAgICBuYW1lOnByb3BzLnRpdGxlLFxuICAgICAgICAgICAgICAgIGRhdGE6ZGF0YSxcbiAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGNoYXJ0OntcbiAgICAgICAgICAgICAgICAgICAgdHlwZTonYmFyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnNDAlJyxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZW5kaW5nU2hhcGU6J3JvdW5kZWQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpdGxlOntcbiAgICAgICAgICAgICAgICAgICAgdGV4dDonRGFpbHkgJytwcm9wcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246J2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogICcjMjYzMjM4J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbcHJvcHMuY29sb3JdLFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOlsnIzFCMTIxMiddXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczp7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6ZGF0ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlheGlzOntcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpwcm9wcy50ZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGw6e1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjFcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQmFyQ2hhcnQiXSwibmFtZXMiOlsiUmVhY3QiLCJkeW5hbWljIiwiQmFzaWNCYXJDaGFydCIsInByb3BzIiwiQ2hhcnQiLCJpbXBvcnQiLCJzc3IiLCJkYXRhIiwiZGF0ZSIsImRpdiIsInR5cGUiLCJoZWlnaHQiLCJzZXJpZXMiLCJuYW1lIiwidGl0bGUiLCJvcHRpb25zIiwiY2hhcnQiLCJwbG90T3B0aW9ucyIsImJhciIsImNvbHVtbldpZHRoIiwiaG9yaXpvbnRhbCIsImVuZGluZ1NoYXBlIiwidGV4dCIsImFsaWduIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImNvbG9ycyIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJmaWxsIiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customer/charts/BasicBarChart.js\n");

/***/ })

});