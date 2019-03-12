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
var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/CardTemplate.js";



var outputCard = function outputCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 250 350",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.1 0.1",
    numOctaves: "10",
    seed: "4",
    stitchTiles: "stitch",
    x: "0%",
    y: "0%",
    width: "100%",
    height: "100%",
    result: "turbulence2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0.6",
    x: "0%",
    y: "0%",
    width: "100%",
    height: "100%",
    in: "turbulence2",
    result: "colormatrix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "clip-path",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "card-template"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    filter: "url(#filter)",
    height: "350",
    width: "250",
    fill: _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].primaryColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "playerInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    style: {
      clipPath: 'url(#clip-path)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    x: "5",
    y: "55",
    width: "250",
    height: "250",
    preserveAspectRatio: "xMidYMid slice",
    xlinkHref: props.picUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    transform: "translate(0 300)",
    width: "200px",
    height: "70px",
    style: {
      fill: '#f7f5e8'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    transform: "translate(15 315)",
    style: {
      fontSize: '13px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.moreData[0].firstName.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    transform: "translate(15 330)",
    style: {
      fontSize: '18px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.moreData[0].lastName.toUpperCase())))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "clipPath-2",
    "data-name": "clipPath",
    d: "M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z",
    style: {
      fill: 'none',
      stroke: '#fff',
      strokeMiterLimit: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    transform: "translate(25 39.74)",
    style: {
      fontSize: '15px',
      fontFamily: 'Arial-BoldItalicMT, Arial',
      fontWeight: '700',
      fontStyle: 'italic'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    textLength: "195",
    style: {
      fill: '#f4520b'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].teamName.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "logo",
    transform: "translate(88 286)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "47px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].logo)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    transform: "translate(20 15)",
    style: {
      fontSize: '13px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "#", props.playerData.number), "\xB7", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, props.playerData.position))))));
};

/* harmony default export */ __webpack_exports__["default"] = (outputCard);

/***/ })

})
//# sourceMappingURL=index.js.df8dacdc76a076d0e9e1.hot-update.js.map