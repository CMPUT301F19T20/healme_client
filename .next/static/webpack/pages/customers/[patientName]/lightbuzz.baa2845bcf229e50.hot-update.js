"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/customers/[patientName]/lightbuzz",{

/***/ "./src/components/customer/details/mocapdetails/Metrics.js":
/*!*****************************************************************!*\
  !*** ./src/components/customer/details/mocapdetails/Metrics.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sitToStandCols\": function() { return /* binding */ sitToStandCols; },\n/* harmony export */   \"womenSitToStandData\": function() { return /* binding */ womenSitToStandData; },\n/* harmony export */   \"menSitToStandData\": function() { return /* binding */ menSitToStandData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar sitToStandCols = [\n    {\n        name: 'Age',\n        selector: function(row) {\n            return row.ageRange;\n        },\n        sortable: true,\n        right: true\n    },\n    {\n        name: 'Below Average',\n        selector: function(row) {\n            return row.belowAverage;\n        },\n        sortable: true,\n        right: true\n    },\n    {\n        name: 'Average',\n        selector: function(row) {\n            return row.average;\n        },\n        sortable: true,\n        right: true\n    },\n    {\n        name: 'Above Average',\n        selector: function(row) {\n            return row.aboveAverage;\n        },\n        sortable: true,\n        right: true\n    }, \n];\nvar womenSitToStandData = [\n    {\n        ageRange: '60-64',\n        belowAverage: '<12',\n        average: '12-17',\n        aboveAverage: '>17'\n    },\n    {\n        ageRange: '64-69',\n        belowAverage: '<11',\n        average: '11-16',\n        aboveAverage: '>16'\n    },\n    {\n        ageRange: '70-74',\n        belowAverage: '<10',\n        average: '10-15',\n        aboveAverage: '>15'\n    },\n    {\n        ageRange: '75-79',\n        belowAverage: '<10',\n        average: '10-15',\n        aboveAverage: '>15'\n    },\n    {\n        ageRange: '80-84',\n        belowAverage: '<9',\n        average: '9-14',\n        aboveAverage: '>14'\n    },\n    {\n        ageRange: '85-89',\n        belowAverage: '<8',\n        average: '8-13',\n        aboveAverage: '>13'\n    },\n    {\n        ageRange: '90-94',\n        belowAverage: '<4',\n        average: '4-11',\n        aboveAverage: '>11'\n    }, \n];\nvar menSitToStandData = [\n    {\n        ageRange: '60-64',\n        belowAverage: '<14',\n        average: '14-19',\n        aboveAverage: '>19'\n    },\n    {\n        ageRange: '64-69',\n        belowAverage: '<12',\n        average: '12-18',\n        aboveAverage: '>18'\n    },\n    {\n        ageRange: '70-74',\n        belowAverage: '<12',\n        average: '12-17',\n        aboveAverage: '>17'\n    },\n    {\n        ageRange: '75-79',\n        belowAverage: '<11',\n        average: '11-17',\n        aboveAverage: '>17'\n    },\n    {\n        ageRange: '80-84',\n        belowAverage: '<10',\n        average: '10-15',\n        aboveAverage: '>15'\n    },\n    {\n        ageRange: '85-89',\n        belowAverage: '<8',\n        average: '8-14',\n        aboveAverage: '>14'\n    },\n    {\n        ageRange: '90-94',\n        belowAverage: '<7',\n        average: '7-12',\n        aboveAverage: '>12'\n    }, \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL21vY2FwZGV0YWlscy9NZXRyaWNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxHQUFLLENBQUNBLGNBQWMsR0FBRyxDQUFDO0lBQzNCLENBQUNDO1FBQUFBLElBQUksRUFBQyxDQUFLO1FBQUVDLFFBQVEsRUFBQ0MsUUFBUSxDQUFSQSxHQUFHO1lBQUVBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDQyxRQUFROztRQUFFQyxRQUFRLEVBQUMsSUFBSTtRQUFFQyxLQUFLLEVBQUMsSUFBSTtJQUFBLENBQUM7SUFDbkUsQ0FBQ0w7UUFBQUEsSUFBSSxFQUFDLENBQWU7UUFBRUMsUUFBUSxFQUFDQyxRQUFRLENBQVJBLEdBQUc7WUFBRUEsTUFBTSxDQUFOQSxHQUFHLENBQUNJLFlBQVk7O1FBQUVGLFFBQVEsRUFBQyxJQUFJO1FBQUVDLEtBQUssRUFBQyxJQUFJO0lBQUEsQ0FBQztJQUNqRixDQUFDTDtRQUFBQSxJQUFJLEVBQUMsQ0FBUztRQUFFQyxRQUFRLEVBQUNDLFFBQVEsQ0FBUkEsR0FBRztZQUFFQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0ssT0FBTzs7UUFBRUgsUUFBUSxFQUFDLElBQUk7UUFBRUMsS0FBSyxFQUFDLElBQUk7SUFBQSxDQUFDO0lBQ3RFLENBQUNMO1FBQUFBLElBQUksRUFBQyxDQUFlO1FBQUVDLFFBQVEsRUFBQ0MsUUFBUSxDQUFSQSxHQUFHO1lBQUVBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDTSxZQUFZOztRQUFFSixRQUFRLEVBQUMsSUFBSTtRQUFFQyxLQUFLLEVBQUMsSUFBSTtJQUFBLENBQUM7QUFDckYsQ0FBQztBQUNNLEdBQUssQ0FBQ0ksbUJBQW1CLEdBQUcsQ0FBQztJQUNoQyxDQUFDO1FBQ0dOLFFBQVEsRUFBRSxDQUFPO1FBQ2pCRyxZQUFZLEVBQUUsQ0FBSztRQUNuQkMsT0FBTyxFQUFFLENBQU87UUFDaEJDLFlBQVksRUFBRSxDQUFLO0lBQ3ZCLENBQUM7SUFDRCxDQUFDO1FBQ0dMLFFBQVEsRUFBRSxDQUFPO1FBQ2pCRyxZQUFZLEVBQUUsQ0FBSztRQUNuQkMsT0FBTyxFQUFFLENBQU87UUFDaEJDLFlBQVksRUFBRSxDQUFLO0lBQ3ZCLENBQUM7SUFDRCxDQUFDO1FBQ0dMLFFBQVEsRUFBRSxDQUFPO1FBQ2pCRyxZQUFZLEVBQUUsQ0FBSztRQUNuQkMsT0FBTyxFQUFFLENBQU87UUFDaEJDLFlBQVksRUFBRSxDQUFLO0lBQ3ZCLENBQUM7SUFDRCxDQUFDO1FBQ0dMLFFBQVEsRUFBRSxDQUFPO1FBQ2pCRyxZQUFZLEVBQUUsQ0FBSztRQUNuQkMsT0FBTyxFQUFFLENBQU87UUFDaEJDLFlBQVksRUFBRSxDQUFLO0lBQ3ZCLENBQUM7SUFDRCxDQUFDO1FBQ0dMLFFBQVEsRUFBRSxDQUFPO1FBQ2pCRyxZQUFZLEVBQUUsQ0FBSTtRQUNsQkMsT0FBTyxFQUFFLENBQU07UUFDZkMsWUFBWSxFQUFFLENBQUs7SUFDdkIsQ0FBQztJQUNELENBQUM7UUFDR0wsUUFBUSxFQUFFLENBQU87UUFDakJHLFlBQVksRUFBRSxDQUFJO1FBQ2xCQyxPQUFPLEVBQUUsQ0FBTTtRQUNmQyxZQUFZLEVBQUUsQ0FBSztJQUN2QixDQUFDO0lBQ0QsQ0FBQztRQUNHTCxRQUFRLEVBQUUsQ0FBTztRQUNqQkcsWUFBWSxFQUFFLENBQUk7UUFDbEJDLE9BQU8sRUFBRSxDQUFNO1FBQ2ZDLFlBQVksRUFBRSxDQUFLO0lBQ3ZCLENBQUM7QUFFTCxDQUFDO0FBRU0sR0FBSyxDQUFDRSxpQkFBaUIsR0FBRyxDQUFDO0lBQzlCLENBQUM7UUFDR1AsUUFBUSxFQUFFLENBQU87UUFDakJHLFlBQVksRUFBRSxDQUFLO1FBQ25CQyxPQUFPLEVBQUUsQ0FBTztRQUNoQkMsWUFBWSxFQUFFLENBQUs7SUFDdkIsQ0FBQztJQUNELENBQUM7UUFDR0wsUUFBUSxFQUFFLENBQU87UUFDakJHLFlBQVksRUFBRSxDQUFLO1FBQ25CQyxPQUFPLEVBQUUsQ0FBTztRQUNoQkMsWUFBWSxFQUFFLENBQUs7SUFDdkIsQ0FBQztJQUNELENBQUM7UUFDR0wsUUFBUSxFQUFFLENBQU87UUFDakJHLFlBQVksRUFBRSxDQUFLO1FBQ25CQyxPQUFPLEVBQUUsQ0FBTztRQUNoQkMsWUFBWSxFQUFFLENBQUs7SUFDdkIsQ0FBQztJQUNELENBQUM7UUFDR0wsUUFBUSxFQUFFLENBQU87UUFDakJHLFlBQVksRUFBRSxDQUFLO1FBQ25CQyxPQUFPLEVBQUUsQ0FBTztRQUNoQkMsWUFBWSxFQUFFLENBQUs7SUFDdkIsQ0FBQztJQUNELENBQUM7UUFDR0wsUUFBUSxFQUFFLENBQU87UUFDakJHLFlBQVksRUFBRSxDQUFLO1FBQ25CQyxPQUFPLEVBQUUsQ0FBTztRQUNoQkMsWUFBWSxFQUFFLENBQUs7SUFDdkIsQ0FBQztJQUNELENBQUM7UUFDR0wsUUFBUSxFQUFFLENBQU87UUFDakJHLFlBQVksRUFBRSxDQUFJO1FBQ2xCQyxPQUFPLEVBQUUsQ0FBTTtRQUNmQyxZQUFZLEVBQUUsQ0FBSztJQUN2QixDQUFDO0lBQ0QsQ0FBQztRQUNHTCxRQUFRLEVBQUUsQ0FBTztRQUNqQkcsWUFBWSxFQUFFLENBQUk7UUFDbEJDLE9BQU8sRUFBRSxDQUFNO1FBQ2ZDLFlBQVksRUFBRSxDQUFLO0lBQ3ZCLENBQUM7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2N1c3RvbWVyL2RldGFpbHMvbW9jYXBkZXRhaWxzL01ldHJpY3MuanM/Y2EzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2l0VG9TdGFuZENvbHMgPSBbXG4gICAge25hbWU6J0FnZScsIHNlbGVjdG9yOnJvdz0+cm93LmFnZVJhbmdlLCBzb3J0YWJsZTp0cnVlLCByaWdodDp0cnVlfSxcbiAgICB7bmFtZTonQmVsb3cgQXZlcmFnZScsIHNlbGVjdG9yOnJvdz0+cm93LmJlbG93QXZlcmFnZSwgc29ydGFibGU6dHJ1ZSwgcmlnaHQ6dHJ1ZX0sXG4gICAge25hbWU6J0F2ZXJhZ2UnLCBzZWxlY3Rvcjpyb3c9PnJvdy5hdmVyYWdlLCBzb3J0YWJsZTp0cnVlLCByaWdodDp0cnVlfSxcbiAgICB7bmFtZTonQWJvdmUgQXZlcmFnZScsIHNlbGVjdG9yOnJvdz0+cm93LmFib3ZlQXZlcmFnZSwgc29ydGFibGU6dHJ1ZSwgcmlnaHQ6dHJ1ZX0sXG5dXG5leHBvcnQgY29uc3Qgd29tZW5TaXRUb1N0YW5kRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGFnZVJhbmdlOiAnNjAtNjQnLFxuICAgICAgICBiZWxvd0F2ZXJhZ2U6ICc8MTInLFxuICAgICAgICBhdmVyYWdlOiAnMTItMTcnLFxuICAgICAgICBhYm92ZUF2ZXJhZ2U6ICc+MTcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZVJhbmdlOiAnNjQtNjknLFxuICAgICAgICBiZWxvd0F2ZXJhZ2U6ICc8MTEnLFxuICAgICAgICBhdmVyYWdlOiAnMTEtMTYnLFxuICAgICAgICBhYm92ZUF2ZXJhZ2U6ICc+MTYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZVJhbmdlOiAnNzAtNzQnLFxuICAgICAgICBiZWxvd0F2ZXJhZ2U6ICc8MTAnLFxuICAgICAgICBhdmVyYWdlOiAnMTAtMTUnLFxuICAgICAgICBhYm92ZUF2ZXJhZ2U6ICc+MTUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZVJhbmdlOiAnNzUtNzknLFxuICAgICAgICBiZWxvd0F2ZXJhZ2U6ICc8MTAnLFxuICAgICAgICBhdmVyYWdlOiAnMTAtMTUnLFxuICAgICAgICBhYm92ZUF2ZXJhZ2U6ICc+MTUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZVJhbmdlOiAnODAtODQnLFxuICAgICAgICBiZWxvd0F2ZXJhZ2U6ICc8OScsXG4gICAgICAgIGF2ZXJhZ2U6ICc5LTE0JyxcbiAgICAgICAgYWJvdmVBdmVyYWdlOiAnPjE0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2VSYW5nZTogJzg1LTg5JyxcbiAgICAgICAgYmVsb3dBdmVyYWdlOiAnPDgnLFxuICAgICAgICBhdmVyYWdlOiAnOC0xMycsXG4gICAgICAgIGFib3ZlQXZlcmFnZTogJz4xMydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlUmFuZ2U6ICc5MC05NCcsXG4gICAgICAgIGJlbG93QXZlcmFnZTogJzw0JyxcbiAgICAgICAgYXZlcmFnZTogJzQtMTEnLFxuICAgICAgICBhYm92ZUF2ZXJhZ2U6ICc+MTEnXG4gICAgfSxcblxuXVxuXG5leHBvcnQgY29uc3QgbWVuU2l0VG9TdGFuZERhdGEgPSBbXG4gICAge1xuICAgICAgICBhZ2VSYW5nZTogJzYwLTY0JyxcbiAgICAgICAgYmVsb3dBdmVyYWdlOiAnPDE0JyxcbiAgICAgICAgYXZlcmFnZTogJzE0LTE5JyxcbiAgICAgICAgYWJvdmVBdmVyYWdlOiAnPjE5J1xuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2VSYW5nZTogJzY0LTY5JyxcbiAgICAgICAgYmVsb3dBdmVyYWdlOiAnPDEyJyxcbiAgICAgICAgYXZlcmFnZTogJzEyLTE4JyxcbiAgICAgICAgYWJvdmVBdmVyYWdlOiAnPjE4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2VSYW5nZTogJzcwLTc0JyxcbiAgICAgICAgYmVsb3dBdmVyYWdlOiAnPDEyJyxcbiAgICAgICAgYXZlcmFnZTogJzEyLTE3JyxcbiAgICAgICAgYWJvdmVBdmVyYWdlOiAnPjE3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2VSYW5nZTogJzc1LTc5JyxcbiAgICAgICAgYmVsb3dBdmVyYWdlOiAnPDExJyxcbiAgICAgICAgYXZlcmFnZTogJzExLTE3JyxcbiAgICAgICAgYWJvdmVBdmVyYWdlOiAnPjE3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2VSYW5nZTogJzgwLTg0JyxcbiAgICAgICAgYmVsb3dBdmVyYWdlOiAnPDEwJyxcbiAgICAgICAgYXZlcmFnZTogJzEwLTE1JyxcbiAgICAgICAgYWJvdmVBdmVyYWdlOiAnPjE1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2VSYW5nZTogJzg1LTg5JyxcbiAgICAgICAgYmVsb3dBdmVyYWdlOiAnPDgnLFxuICAgICAgICBhdmVyYWdlOiAnOC0xNCcsXG4gICAgICAgIGFib3ZlQXZlcmFnZTogJz4xNCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlUmFuZ2U6ICc5MC05NCcsXG4gICAgICAgIGJlbG93QXZlcmFnZTogJzw3JyxcbiAgICAgICAgYXZlcmFnZTogJzctMTInLFxuICAgICAgICBhYm92ZUF2ZXJhZ2U6ICc+MTInXG4gICAgfSxcblxuXSJdLCJuYW1lcyI6WyJzaXRUb1N0YW5kQ29scyIsIm5hbWUiLCJzZWxlY3RvciIsInJvdyIsImFnZVJhbmdlIiwic29ydGFibGUiLCJyaWdodCIsImJlbG93QXZlcmFnZSIsImF2ZXJhZ2UiLCJhYm92ZUF2ZXJhZ2UiLCJ3b21lblNpdFRvU3RhbmREYXRhIiwibWVuU2l0VG9TdGFuZERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/customer/details/mocapdetails/Metrics.js\n");

/***/ }),

/***/ "./src/components/customer/details/mocapdetails/SitToStand.js":
/*!********************************************************************!*\
  !*** ./src/components/customer/details/mocapdetails/SitToStand.js ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _GridStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GridStyle */ \"./src/components/customer/details/GridStyle.js\");\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* harmony import */ var _Metrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Metrics */ \"./src/components/customer/details/mocapdetails/Metrics.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar SitToStand = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            sx: {\n                width: '100%'\n            },\n            __source: {\n                fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                container: true,\n                rowSpacing: 1,\n                columnSpacing: {\n                    xs: 1,\n                    sm: 2,\n                    md: 3\n                },\n                __source: {\n                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                        item: true,\n                        xs: 2.4,\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.HeaderItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Total Repetitions\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.DataItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"N/A\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                        item: true,\n                        xs: 2.4,\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.HeaderItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Average seated knee angle\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.DataItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"N/A\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                        item: true,\n                        xs: 2.4,\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.HeaderItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Rests\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.DataItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"N/A\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                        item: true,\n                        xs: 2.4,\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.HeaderItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Flagged for review\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.DataItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"N/A\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                        item: true,\n                        xs: 2.4,\n                        __source: {\n                            fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.HeaderItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"Video\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GridStyle__WEBPACK_IMPORTED_MODULE_2__.DataItem, {\n                                __source: {\n                                    fileName: \"/Users/aeronchen/Desktop/intern_may/admin_dashboard_deploy/client/src/components/customer/details/mocapdetails/SitToStand.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"N/A\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = SitToStand;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SitToStand);\nvar _c;\n$RefreshReg$(_c, \"SitToStand\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9kZXRhaWxzL21vY2FwZGV0YWlscy9TaXRUb1N0YW5kLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQytCO0FBQ1I7QUFDRTtBQUNnQzs7QUFFbEYsR0FBSyxDQUFDVyxVQUFVLEdBQUcsUUFDbkIsR0FEeUIsQ0FBQztJQUN0QixNQUFNLHNFQUNEQyxDQUFHOzs7Ozs7O3VGQUNDUiw4Q0FBRztZQUFDUyxFQUFFLEVBQUUsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLENBQU07WUFBQyxDQUFDOzs7Ozs7OzRGQUNyQmIsK0NBQUk7Z0JBQUNjLFNBQVM7Z0JBQUNDLFVBQVUsRUFBRSxDQUFDO2dCQUFFQyxhQUFhLEVBQUUsQ0FBQztvQkFBQ0MsRUFBRSxFQUFFLENBQUM7b0JBQUVDLEVBQUUsRUFBRSxDQUFDO29CQUFFQyxFQUFFLEVBQUUsQ0FBQztnQkFBQyxDQUFDOzs7Ozs7OzswRkFDaEVuQiwrQ0FBSTt3QkFBQ29CLElBQUk7d0JBQUNILEVBQUUsRUFBRSxHQUFHOzs7Ozs7OztpR0FDYmIsa0RBQVU7Ozs7Ozs7MENBQUMsQ0FBaUI7O2lHQUM1QkMsZ0RBQVE7Ozs7Ozs7MENBQUMsQ0FBRzs7OzswRkFFaEJMLCtDQUFJO3dCQUFDb0IsSUFBSTt3QkFBQ0gsRUFBRSxFQUFFLEdBQUc7Ozs7Ozs7O2lHQUNiYixrREFBVTs7Ozs7OzswQ0FBQyxDQUF5Qjs7aUdBQ3BDQyxnREFBUTs7Ozs7OzswQ0FBQyxDQUFHOzs7OzBGQUVoQkwsK0NBQUk7d0JBQUNvQixJQUFJO3dCQUFDSCxFQUFFLEVBQUUsR0FBRzs7Ozs7Ozs7aUdBQ2JiLGtEQUFVOzs7Ozs7OzBDQUFDLENBQUs7O2lHQUNoQkMsZ0RBQVE7Ozs7Ozs7MENBQUMsQ0FBRzs7OzswRkFFaEJMLCtDQUFJO3dCQUFDb0IsSUFBSTt3QkFBQ0gsRUFBRSxFQUFFLEdBQUc7Ozs7Ozs7O2lHQUNiYixrREFBVTs7Ozs7OzswQ0FBQyxDQUFrQjs7aUdBQzdCQyxnREFBUTs7Ozs7OzswQ0FBQyxDQUFHOzs7OzBGQUVoQkwsK0NBQUk7d0JBQUNvQixJQUFJO3dCQUFDSCxFQUFFLEVBQUUsR0FBRzs7Ozs7Ozs7aUdBQ2JiLGtEQUFVOzs7Ozs7OzBDQUFDLENBQUs7O2lHQUNoQkMsZ0RBQVE7Ozs7Ozs7MENBQUMsQ0FBRzs7Ozs7Ozs7QUFNckMsQ0FBQztLQTdCS0ssVUFBVTtBQStCaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tZXIvZGV0YWlscy9tb2NhcGRldGFpbHMvU2l0VG9TdGFuZC5qcz9lZDM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7R3JpZCwgVHlwb2dyYXBoeSxQYXBlcixCb3h9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQge0hlYWRlckl0ZW0sRGF0YUl0ZW19IGZyb20gJy4uL0dyaWRTdHlsZSc7XG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ3JlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50JztcbmltcG9ydCB7IHNpdFRvU3RhbmRDb2xzLCB3b21lblNpdFRvU3RhbmREYXRhLCBtZW5TaXRUb1N0YW5kRGF0YSB9IGZyb20gJy4vTWV0cmljcyc7XG5cbmNvbnN0IFNpdFRvU3RhbmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgcm93U3BhY2luZz17MX0gY29sdW1uU3BhY2luZz17eyB4czogMSwgc206IDIsIG1kOiAzIH19PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyLjR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckl0ZW0+VG90YWwgUmVwZXRpdGlvbnM8L0hlYWRlckl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUl0ZW0+Ti9BPC9EYXRhSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyLjR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckl0ZW0+QXZlcmFnZSBzZWF0ZWQga25lZSBhbmdsZTwvSGVhZGVySXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhSXRlbT5OL0E8L0RhdGFJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezIuNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVySXRlbT5SZXN0czwvSGVhZGVySXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhSXRlbT5OL0E8L0RhdGFJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezIuNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVySXRlbT5GbGFnZ2VkIGZvciByZXZpZXc8L0hlYWRlckl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUl0ZW0+Ti9BPC9EYXRhSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyLjR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckl0ZW0+VmlkZW88L0hlYWRlckl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUl0ZW0+Ti9BPC9EYXRhSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpdFRvU3RhbmQiXSwibmFtZXMiOlsiUmVhY3QiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlBhcGVyIiwiQm94IiwiSGVhZGVySXRlbSIsIkRhdGFJdGVtIiwiRGF0YVRhYmxlIiwic2l0VG9TdGFuZENvbHMiLCJ3b21lblNpdFRvU3RhbmREYXRhIiwibWVuU2l0VG9TdGFuZERhdGEiLCJTaXRUb1N0YW5kIiwiZGl2Iiwic3giLCJ3aWR0aCIsImNvbnRhaW5lciIsInJvd1NwYWNpbmciLCJjb2x1bW5TcGFjaW5nIiwieHMiLCJzbSIsIm1kIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customer/details/mocapdetails/SitToStand.js\n");

/***/ })

});