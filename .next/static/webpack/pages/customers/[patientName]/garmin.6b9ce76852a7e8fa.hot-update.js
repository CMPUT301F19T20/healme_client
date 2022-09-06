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

/***/ "./src/components/customer/charts/GarminHRLineChart.js":
/*!*************************************************************!*\
  !*** ./src/components/customer/charts/GarminHRLineChart.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar GarminHRLineChart = function(props) {\n    var Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function() {\n        return __webpack_require__.e(/*! import() */ \"node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\"));\n    }, {\n        loadableGenerated: {\n            webpack: function() {\n                return [\n                    /*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")\n                ];\n            },\n            modules: [\n                \"../components/customer/charts/GarminHRLineChart.js -> \" + \"react-apexcharts\"\n            ]\n        },\n        ssr: false\n    });\n    var avgRestHr = props.data.map(function(row) {\n        return row.restHR;\n    });\n    var avgHighHr = props.data.map(function(row) {\n        return row.highHR;\n    });\n    var date = props.data.map(function(row) {\n        return row.date;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/charts/GarminHRLineChart.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Chart, {\n            type: \"line\",\n            height: 300,\n            series: [\n                {\n                    name: 'Resting HR',\n                    data: avgRestHr\n                },\n                {\n                    name: 'Max HR',\n                    data: avgHighHr\n                }, \n            ],\n            options: {\n                chart: {\n                    type: 'line',\n                    zoom: {\n                        enabled: false\n                    }\n                },\n                colors: [\n                    '#0F90E4',\n                    '#E40F2F'\n                ],\n                title: {\n                    text: 'Heart Rate Summary',\n                    align: 'left',\n                    style: {\n                        fontSize: '20px',\n                        fontWeight: 'bold',\n                        color: '#263238'\n                    }\n                },\n                dataLabels: {\n                    enabled: true,\n                    style: {\n                        colors: [\n                            '#1B1212'\n                        ]\n                    }\n                },\n                xaxis: {\n                    categories: date\n                },\n                yaxis: {\n                    title: {\n                        text: 'BPM'\n                    }\n                }\n            },\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/charts/GarminHRLineChart.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            },\n            __self: _this\n        })\n    }));\n};\n_c = GarminHRLineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GarminHRLineChart);\nvar _c;\n$RefreshReg$(_c, \"GarminHRLineChart\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9jaGFydHMvR2FybWluSFJMaW5lQ2hhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ1M7O0FBRWxDLEdBQUssQ0FBQ0UsaUJBQWlCLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztJQUNsQyxHQUFLLENBQUNDLEtBQUssR0FBR0gsbURBQU8sQ0FBQyxRQUFRO1FBQUZJLE1BQU0sQ0FBTkEsK09BQXlCOzs7Ozs7Ozs7Ozs7UUFBS0MsR0FBRyxFQUFFLEtBQUs7O0lBQ3BFLEdBQUssQ0FBQ0MsU0FBUyxHQUFHSixLQUFLLENBQUNLLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7UUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUNDLE1BQU07O0lBQ2xELEdBQUssQ0FBQ0MsU0FBUyxHQUFHVCxLQUFLLENBQUNLLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7UUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUNHLE1BQU07O0lBQ2xELEdBQUssQ0FBQ0MsSUFBSSxHQUFHWCxLQUFLLENBQUNLLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7UUFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUNJLElBQUk7O0lBQzNDLE1BQU0sc0VBQ0RDLENBQUc7Ozs7Ozs7dUZBQ0NYLEtBQUs7WUFDTlksSUFBSSxFQUFDLENBQU07WUFDWEMsTUFBTSxFQUFFLEdBQUc7WUFDWEMsTUFBTSxFQUFFLENBQUM7Z0JBQUEsQ0FBQztvQkFDTkMsSUFBSSxFQUFFLENBQVk7b0JBQ2xCWCxJQUFJLEVBQUNELFNBQVM7Z0JBQ2xCLENBQUM7Z0JBQ0QsQ0FBQztvQkFDR1ksSUFBSSxFQUFDLENBQVE7b0JBQ2JYLElBQUksRUFBQ0ksU0FBUztnQkFDbEIsQ0FBQztZQUNELENBQUM7WUFDRFEsT0FBTyxFQUFFLENBQUM7Z0JBQ05DLEtBQUssRUFBQyxDQUFDO29CQUNITCxJQUFJLEVBQUMsQ0FBTTtvQkFDWE0sSUFBSSxFQUFDLENBQUM7d0JBQ0ZDLE9BQU8sRUFBQyxLQUFLO29CQUNqQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0RDLE1BQU0sRUFBRSxDQUFDO29CQUFBLENBQVM7b0JBQUMsQ0FBUztnQkFBQSxDQUFDO2dCQUM3QkMsS0FBSyxFQUFFLENBQUM7b0JBQ0pDLElBQUksRUFBRSxDQUFvQjtvQkFDMUJDLEtBQUssRUFBRSxDQUFNO29CQUNiQyxLQUFLLEVBQUMsQ0FBQzt3QkFDSEMsUUFBUSxFQUFHLENBQU07d0JBQ2pCQyxVQUFVLEVBQUcsQ0FBTTt3QkFDbkJDLEtBQUssRUFBRyxDQUFTO29CQUNyQixDQUFDO2dCQUNMLENBQUM7Z0JBRURDLFVBQVUsRUFBRSxDQUFDO29CQUNUVCxPQUFPLEVBQUUsSUFBSTtvQkFDYkssS0FBSyxFQUFDLENBQUM7d0JBQ0hKLE1BQU0sRUFBQyxDQUFDOzRCQUFBLENBQVM7d0JBQUEsQ0FBQztvQkFDdEIsQ0FBQztnQkFFTCxDQUFDO2dCQUNEUyxLQUFLLEVBQUMsQ0FBQztvQkFDSEMsVUFBVSxFQUFDcEIsSUFBSTtnQkFDbkIsQ0FBQztnQkFDRHFCLEtBQUssRUFBQyxDQUFDO29CQUNIVixLQUFLLEVBQUMsQ0FBQzt3QkFDSEMsSUFBSSxFQUFDLENBQUs7b0JBQ2QsQ0FBQztnQkFDTCxDQUFDO1lBRUwsQ0FBQzs7Ozs7Ozs7O0FBSWIsQ0FBQztLQXpES3hCLGlCQUFpQjtBQTJEdkIsK0RBQWVBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9jaGFydHMvR2FybWluSFJMaW5lQ2hhcnQuanM/YzU3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5jb25zdCBHYXJtaW5IUkxpbmVDaGFydCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwgeyBzc3I6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGF2Z1Jlc3RIciA9IHByb3BzLmRhdGEubWFwKHJvdyA9PiByb3cucmVzdEhSKTtcbiAgICBjb25zdCBhdmdIaWdoSHIgPSBwcm9wcy5kYXRhLm1hcChyb3cgPT4gcm93LmhpZ2hIUilcbiAgICBjb25zdCBkYXRlID0gcHJvcHMuZGF0YS5tYXAocm93ID0+IHJvdy5kYXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICB0eXBlPVwibGluZVwiXG4gICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgIHNlcmllcz17W3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmVzdGluZyBIUicsXG4gICAgICAgICAgICAgICAgZGF0YTphdmdSZXN0SHIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6J01heCBIUicsXG4gICAgICAgICAgICAgICAgZGF0YTphdmdIaWdoSHIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBjaGFydDp7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6J2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICB6b29tOntcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyMwRjkwRTQnLCcjRTQwRjJGJ10sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0hlYXJ0IFJhdGUgU3VtbWFyeScsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAgJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgJyMyNjMyMzgnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczpbJyMxQjEyMTInXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6e1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOmRhdGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczp7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6J0JQTSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhcm1pbkhSTGluZUNoYXJ0Il0sIm5hbWVzIjpbIlJlYWN0IiwiZHluYW1pYyIsIkdhcm1pbkhSTGluZUNoYXJ0IiwicHJvcHMiLCJDaGFydCIsImltcG9ydCIsInNzciIsImF2Z1Jlc3RIciIsImRhdGEiLCJtYXAiLCJyb3ciLCJyZXN0SFIiLCJhdmdIaWdoSHIiLCJoaWdoSFIiLCJkYXRlIiwiZGl2IiwidHlwZSIsImhlaWdodCIsInNlcmllcyIsIm5hbWUiLCJvcHRpb25zIiwiY2hhcnQiLCJ6b29tIiwiZW5hYmxlZCIsImNvbG9ycyIsInRpdGxlIiwidGV4dCIsImFsaWduIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImRhdGFMYWJlbHMiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJ5YXhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customer/charts/GarminHRLineChart.js\n");

/***/ })

});