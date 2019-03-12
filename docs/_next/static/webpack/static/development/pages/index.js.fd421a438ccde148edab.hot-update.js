webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CardTemplate.js":
/*!************************************!*\
  !*** ./components/CardTemplate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamResources.js */ "./components/TeamResources.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/CardTemplate.js";




var outputCard = function outputCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    filter: "url(#filter)",
    viewBox: "0 0 250 350",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
    id: "filter",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "140%",
    filterUnits: "objectBoundingBox",
    primitiveUnits: "userSpaceOnUse",
    "color-interpolation-filters": "linearRGB",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.5 0.5",
    numOctaves: "1",
    seed: "1",
    stitchTiles: "noStitch",
    x: "0%",
    y: "0%",
    width: "200%",
    height: "100%",
    result: "turbulence",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feTurbulence", {
    type: "turbulence",
    baseFrequency: "0.01 0.01",
    numOctaves: "6",
    seed: "1",
    stitchTiles: "stitch",
    x: "0%",
    y: "0%",
    width: "100%",
    height: "100%",
    result: "turbulence1",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
    in: "turbulence",
    in2: "turbulence1",
    operator: "over",
    x: "0%",
    y: "0%",
    width: "100%",
    height: "100%",
    result: "composite2",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
    type: "matrix",
    values: "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 1 0",
    x: "0%",
    y: "0%",
    width: "100%",
    height: "100%",
    in: "composite2",
    result: "colormatrix",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
    in: "SourceGraphic",
    in2: "colormatrix",
    operator: "in",
    x: "0%",
    y: "0%",
    width: "100%",
    height: "100%",
    result: "composite1",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "clip-path",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "clipPath",
    d: "M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z",
    style: {
      fill: 'none',
      stroke: '#fff',
      strokeMiterLimit: '10px'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    height: "350",
    width: "250",
    fill: _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].primaryColor,
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "playerInfo",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    style: {
      clipPath: 'url(#clip-path)'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    x: "5",
    y: "55",
    width: "250",
    height: "250",
    preserveAspectRatio: "xMidYMid slice",
    xlinkHref: props.picUrl,
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    transform: "translate(0 300)",
    width: "200px",
    height: "70px",
    style: {
      fill: '#f7f5e8'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    transform: "translate(15 317)",
    style: {
      fontSize: '13px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700',
      pointerEvents: 'none'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.moreData[0].firstName.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    fill: "#e54f4a",
    transform: "translate(15 335)",
    style: {
      fontSize: '18px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700',
      pointerEvents: 'none'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.moreData[0].lastName.toUpperCase())))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "clipPath-2",
    "data-name": "clipPath",
    d: "M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z",
    style: {
      fill: 'none',
      stroke: '#f3bc52',
      strokeMiterLimit: '10px'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "dataBackground",
    d: "M245.49,309.94a32.88,32.88,0,1,1-9.14-22.75V69.08s-.24-21.78-22-21.78h-192S4.69,47.39,4.69,29.87V6.69H14c0,15.12,15.28,15.09,15.28,15.09H225.36c19.91,0,20.13,19.88,20.13,19.88V309.94",
    style: {
      fill: '#f7f5e8',
      stroke: '#000',
      strokeMiterLimit: '10px'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "data",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    transform: "translate(25 39.74)",
    style: {
      fontSize: '15px',
      fontFamily: 'Arial-BoldItalicMT, Arial',
      fontWeight: '700',
      fontStyle: 'italic',
      pointerEvents: 'none'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    textLength: "195",
    style: {
      fill: '#e54f4a'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].teamName.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "logo",
    transform: "translate(88 286)",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "47px",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].logo)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    transform: "translate(20 15)",
    style: {
      fontSize: '13px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700',
      pointerEvents: 'none'
    },
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    fill: "#fff",
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "#", props.playerData.number), "\xB7", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-648849091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, props.playerData.position))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "648849091",
    __self: this
  }, "#dataBackground.jsx-648849091{-webkit-filter:drop-shadow(1px 1px 2px rgba(0,0,0,.5));background-position:-140px 0;}#dataBackground.jsx-648849091:hover{-webkit-animation:shine-jsx-648849091 2s ease-in forwards;animation:shine-jsx-648849091 2s ease-in forwards;}#dataBackground.jsx-648849091::after{content:'';position:absolute;pointer-events:none;top:0;left:0;right:0;bottom:0;background:radial-gradient(0 0,circle farthest-side,rgba(255,255,255,0) 90%,rgba(255,255,255,.8) 98%,rgba(255,255,255,0) 100%) no-repeat;background:radial-gradient(circle farthest-side at 0 0,rgba(255,255,255,0) 90%,rgba(255,255,255,.8) 98%,rgba(255,255,255,0) 100%) no-repeat;background-position:inherit;}@-webkit-keyframes shine-jsx-648849091{100%{background-position:10px 0;background-color:red;}}@keyframes shine-jsx-648849091{100%{background-position:10px 0;background-color:red;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9jb21wb25lbnRzL0NhcmRUZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBSXVCLEFBQzJDLEFBSzFELEFBRWEsQUFVbUIsV0FUWCxnQkFXbkIsRUFWcUIsbUJBVXBCLENBVEssTUFUd0IsQUFTakIsT0FBUSxRQUFVLFNBQzRHLEtBVDVJLHdCQUdBLDRHQU8rSSw0SUFDakgsNEJBQzlCIiwiZmlsZSI6Ii9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9jb21wb25lbnRzL0NhcmRUZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCByZXNvdXJjZXMgZnJvbSAnLi9UZWFtUmVzb3VyY2VzLmpzJ1xuaW1wb3J0IF9KU1hTdHlsZSBmcm9tICdzdHlsZWQtanN4L3N0eWxlJ1xuXG5jb25zdCBvdXRwdXRDYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybihcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcilcIiB2aWV3Qm94PVwiMCAwIDI1MCAzNTBcIj5cbiAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyXCIgeD1cIi0yMCVcIiB5PVwiLTIwJVwiIHdpZHRoPVwiMTQwJVwiIGhlaWdodD1cIjE0MCVcIiBmaWx0ZXJVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCIgcHJpbWl0aXZlVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cImxpbmVhclJHQlwiPlxuXHQgICAgPGZlVHVyYnVsZW5jZSB0eXBlPVwiZnJhY3RhbE5vaXNlXCIgYmFzZUZyZXF1ZW5jeT1cIjAuNSAwLjVcIiBudW1PY3RhdmVzPVwiMVwiIHNlZWQ9XCIxXCIgc3RpdGNoVGlsZXM9XCJub1N0aXRjaFwiIHg9XCIwJVwiIHk9XCIwJVwiIHdpZHRoPVwiMjAwJVwiIGhlaWdodD1cIjEwMCVcIiByZXN1bHQ9XCJ0dXJidWxlbmNlXCIvPlxuXHQgICAgPGZlVHVyYnVsZW5jZSB0eXBlPVwidHVyYnVsZW5jZVwiIGJhc2VGcmVxdWVuY3k9XCIwLjAxIDAuMDFcIiBudW1PY3RhdmVzPVwiNlwiIHNlZWQ9XCIxXCIgc3RpdGNoVGlsZXM9XCJzdGl0Y2hcIiB4PVwiMCVcIiB5PVwiMCVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgcmVzdWx0PVwidHVyYnVsZW5jZTFcIi8+XG5cdCAgICA8ZmVDb21wb3NpdGUgaW49XCJ0dXJidWxlbmNlXCIgaW4yPVwidHVyYnVsZW5jZTFcIiBvcGVyYXRvcj1cIm92ZXJcIiB4PVwiMCVcIiB5PVwiMCVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgcmVzdWx0PVwiY29tcG9zaXRlMlwiLz5cblx0ICAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiMSAwIDAgMCAwXG4gICAgICAgICAgMSAwIDAgMCAwXG4gICAgICAgICAgMSAwIDAgMCAwXG4gICAgICAgICAgMSAwIDAgMSAwXCJcbiAgICAgICAgICB4PVwiMCVcIiB5PVwiMCVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgaW49XCJjb21wb3NpdGUyXCIgcmVzdWx0PVwiY29sb3JtYXRyaXhcIi8+XG5cdCAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImNvbG9ybWF0cml4XCIgb3BlcmF0b3I9XCJpblwiIHg9XCIwJVwiIHk9XCIwJVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiByZXN1bHQ9XCJjb21wb3NpdGUxXCIvPlxuICAgICAgPC9maWx0ZXI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcC1wYXRoXCI+PHBhdGggaWQ9XCJjbGlwUGF0aFwiIGQ9XCJNMTkyLjczLDM0My44M2EzOS4xMSwzOS4xMSwwLDAsMSwzNy41Ni02OC42MlY2OGExMiwxMiwwLDAsMC0xMi0xMkgxNi42OWExMiwxMiwwLDAsMC0xMiwxMlYzMzEuODNhMTIsMTIsMCwwLDAsMTIsMTJaXCIgc3R5bGU9e3tmaWxsOidub25lJyxzdHJva2U6JyNmZmYnLHN0cm9rZU1pdGVyTGltaXQ6JzEwcHgnfX0vPjwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8cmVjdCBoZWlnaHQ9XCIzNTBcIiB3aWR0aD1cIjI1MFwiIGZpbGw9e3Jlc291cmNlc1twcm9wcy5wbGF5ZXJEYXRhLnRlYW1JRF0ucHJpbWFyeUNvbG9yfS8+XG4gICAgICA8ZyBpZD1cInBsYXllckluZm9cIj5cbiAgICAgICAgPGcgc3R5bGU9e3tjbGlwUGF0aDondXJsKCNjbGlwLXBhdGgpJ319PlxuICAgICAgICAgIDxpbWFnZVxuICAgICAgICAgIHg9XCI1XCIgeT1cIjU1XCIgd2lkdGg9XCIyNTBcIiBoZWlnaHQ9XCIyNTBcIlxuICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBzbGljZVwiXG4gICAgICAgICAgeGxpbmtIcmVmPXtwcm9wcy5waWNVcmx9Lz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxyZWN0IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDMwMClcIiB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiNzBweFwiIHN0eWxlPXt7ZmlsbDonI2Y3ZjVlOCd9fT5cbiAgICAgICAgICAgIDwvcmVjdD5cbiAgICAgICAgICAgIDx0ZXh0ICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTUgMzE3KVwiIHN0eWxlPXt7Zm9udFNpemU6JzEzcHgnLGZvbnRGYW1pbHk6J0FyaWFsLUJvbGRNVCwgQXJpYWwnLGZvbnRXZWlnaHQ6JzcwMCcscG9pbnRlckV2ZW50czonbm9uZSd9fT5cbiAgICAgICAgICAgICAgPHRzcGFuPntwcm9wcy5tb3JlRGF0YVswXS5maXJzdE5hbWUudG9VcHBlckNhc2UoKX08L3RzcGFuPlxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgZmlsbD1cIiNlNTRmNGFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTUgMzM1KVwiIHN0eWxlPXt7Zm9udFNpemU6JzE4cHgnLGZvbnRGYW1pbHk6J0FyaWFsLUJvbGRNVCwgQXJpYWwnLGZvbnRXZWlnaHQ6JzcwMCcscG9pbnRlckV2ZW50czonbm9uZSd9fT5cbiAgICAgICAgICAgICAgPHRzcGFuPntwcm9wcy5tb3JlRGF0YVswXS5sYXN0TmFtZS50b1VwcGVyQ2FzZSgpfTwvdHNwYW4+XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgPC9nPlxuXG4gICAgICAgIDwvZz5cbiAgICAgICAgICA8cGF0aCBpZD1cImNsaXBQYXRoLTJcIiBkYXRhLW5hbWU9XCJjbGlwUGF0aFwiIGQ9XCJNMTkyLjczLDM0My44M2EzOS4xMSwzOS4xMSwwLDAsMSwzNy41Ni02OC42MlY2OGExMiwxMiwwLDAsMC0xMi0xMkgxNi42OWExMiwxMiwwLDAsMC0xMiwxMlYzMzEuODNhMTIsMTIsMCwwLDAsMTIsMTJaXCIgc3R5bGU9e3tmaWxsOidub25lJyxzdHJva2U6JyNmM2JjNTInLHN0cm9rZU1pdGVyTGltaXQ6JzEwcHgnfX0vPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGlkPVwiZGF0YUJhY2tncm91bmRcIlxuICAgICAgICAgICAgICBkPVwiTTI0NS40OSwzMDkuOTRhMzIuODgsMzIuODgsMCwxLDEtOS4xNC0yMi43NVY2OS4wOHMtLjI0LTIxLjc4LTIyLTIxLjc4aC0xOTJTNC42OSw0Ny4zOSw0LjY5LDI5Ljg3VjYuNjlIMTRjMCwxNS4xMiwxNS4yOCwxNS4wOSwxNS4yOCwxNS4wOUgyMjUuMzZjMTkuOTEsMCwyMC4xMywxOS44OCwyMC4xMywxOS44OFYzMDkuOTRcIlxuICAgICAgICAgICAgICBzdHlsZT17e2ZpbGw6JyNmN2Y1ZTgnLHN0cm9rZTonIzAwMCcsc3Ryb2tlTWl0ZXJMaW1pdDonMTBweCd9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDxnIGlkPVwiZGF0YVwiPlxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNSAzOS43NClcIiBzdHlsZT17e2ZvbnRTaXplOicxNXB4Jyxmb250RmFtaWx5OidBcmlhbC1Cb2xkSXRhbGljTVQsIEFyaWFsJyxmb250V2VpZ2h0Oic3MDAnLGZvbnRTdHlsZTonaXRhbGljJyxwb2ludGVyRXZlbnRzOidub25lJ319PlxuICAgICAgICAgICAgPHRzcGFuIHRleHRMZW5ndGg9XCIxOTVcIiBzdHlsZT17e2ZpbGw6JyNlNTRmNGEnfX0+e3Jlc291cmNlc1twcm9wcy5wbGF5ZXJEYXRhLnRlYW1JRF0udGVhbU5hbWUudG9VcHBlckNhc2UoKX08L3RzcGFuPlxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICA8ZyBpZD1cImxvZ29cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODggMjg2KVwiPjxzdmcgaGVpZ2h0PVwiNDdweFwiPntyZXNvdXJjZXNbcHJvcHMucGxheWVyRGF0YS50ZWFtSURdLmxvZ299PC9zdmc+PC9nPlxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMCAxNSlcIiBzdHlsZT17e2ZvbnRTaXplOicxM3B4Jyxmb250RmFtaWx5OidBcmlhbC1Cb2xkTVQsIEFyaWFsJyxmb250V2VpZ2h0Oic3MDAnLHBvaW50ZXJFdmVudHM6J25vbmUnfX0+XG4gICAgICAgICAgICA8dHNwYW4gZmlsbD1cIiNmZmZcIj5cbiAgICAgICAgICAgICAgPHRzcGFuPiN7cHJvcHMucGxheWVyRGF0YS5udW1iZXJ9PC90c3Bhbj5cbiAgICAgICAgICAgICAgJiMxODM7XG4gICAgICAgICAgICAgIDx0c3Bhbj57cHJvcHMucGxheWVyRGF0YS5wb3NpdGlvbn08L3RzcGFuPlxuICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI2RhdGFCYWNrZ3JvdW5kIHtcblxuICAgICAgICAgIGJhY2tncm91bmQ6IDtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAycHggcmdiYSgwLDAsMCwuNSkpO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDBweCAwO1xuICAgICAgICB9XG4gICAgICAgICNkYXRhQmFja2dyb3VuZDpob3ZlciB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzaGluZSAycyBlYXNlLWluIGZvcndhcmRzXG4gICAgICAgIH1cbiAgICAgICAgI2RhdGFCYWNrZ3JvdW5kOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDonJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgdG9wOjA7IGxlZnQ6MDsgcmlnaHQ6MDsgYm90dG9tOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgwIDAsY2lyY2xlIGZhcnRoZXN0LXNpZGUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgOTAlLHJnYmEoMjU1LDI1NSwyNTUsLjgpIDk4JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LXNpZGUgYXQgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LDApIDkwJSxyZ2JhKDI1NSwyNTUsMjU1LC44KSA5OCUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKSBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHNoaW5lIHtcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG91dHB1dENhcmRcbiJdfQ== */\n/*@ sourceURL=/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/CardTemplate.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (outputCard);

/***/ })

})
//# sourceMappingURL=index.js.fd421a438ccde148edab.hot-update.js.map