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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "clip-path",
    className: "jsx-535210661",
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
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    height: "350",
    width: "250",
    fill: _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].primaryColor,
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "playerInfo",
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    style: {
      clipPath: 'url(#clip-path)'
    },
    className: "jsx-535210661",
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
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "jsx-535210661",
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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-535210661",
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
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-535210661",
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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "data",
    className: "jsx-535210661",
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
    className: "jsx-535210661",
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
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].teamName.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "logo",
    transform: "translate(88 286)",
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "47px",
    className: "jsx-535210661",
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
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    fill: "#fff",
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "#", props.playerData.number), "\xB7", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-535210661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, props.playerData.position))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "535210661",
    __self: this
  }, "#dataBackground.jsx-535210661{-webkit-filter:drop-shadow(1px 1px 2px rgba(0,0,0,.5));background-position:-140px 0;}#dataBackground.jsx-535210661:hover{-webkit-animation:shine-jsx-535210661 2s ease-in forwards;animation:shine-jsx-535210661 2s ease-in forwards;}#dataBackground.jsx-535210661::after{content:'';position:absolute;pointer-events:none;top:0;left:0;right:0;bottom:0;fill:white;background:radial-gradient(0 0,circle farthest-side,rgba(255,255,255,0) 90%,rgba(255,255,255,.8) 98%,rgba(255,255,255,0) 100%) no-repeat;background:radial-gradient(circle farthest-side at 0 0,rgba(255,255,255,0) 90%,rgba(255,255,255,.8) 98%,rgba(255,255,255,0) 100%) no-repeat;background-position:inherit;}@-webkit-keyframes shine-jsx-535210661{100%{background-position:10px 0;fill:red;}}@keyframes shine-jsx-535210661{100%{background-position:10px 0;fill:red;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9jb21wb25lbnRzL0NhcmRUZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBSWtFLEFBSzFELEFBRWEsQUFXbUIsV0FWWCxnQkFZbkIsRUFYcUIsT0FXcEIsYUFWSyxNQVR3QixBQVNqQixPQUFRLFFBQVUsU0FDbkIsS0FUYixNQVU0SSxrQkFQNUksdUhBUStJLDRJQUNqSCw0QkFDOUIiLCJmaWxlIjoiL1VzZXJzL2NqZ2lscm95L0Rlc2t0b3AvRGV2ZWxvcG1lbnQvUmVhY3QvaG9ja2V5LWNhcmRzL2NvbXBvbmVudHMvQ2FyZFRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlc291cmNlcyBmcm9tICcuL1RlYW1SZXNvdXJjZXMuanMnXG5pbXBvcnQgX0pTWFN0eWxlIGZyb20gJ3N0eWxlZC1qc3gvc3R5bGUnXG5cbmNvbnN0IG91dHB1dENhcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbHRlcj1cInVybCgjZmlsdGVyKVwiIHZpZXdCb3g9XCIwIDAgMjUwIDM1MFwiPlxuICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXJcIiB4PVwiLTIwJVwiIHk9XCItMjAlXCIgd2lkdGg9XCIxNDAlXCIgaGVpZ2h0PVwiMTQwJVwiIGZpbHRlclVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIiBwcmltaXRpdmVVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwibGluZWFyUkdCXCI+XG5cdCAgICA8ZmVUdXJidWxlbmNlIHR5cGU9XCJmcmFjdGFsTm9pc2VcIiBiYXNlRnJlcXVlbmN5PVwiMC41IDAuNVwiIG51bU9jdGF2ZXM9XCIxXCIgc2VlZD1cIjFcIiBzdGl0Y2hUaWxlcz1cIm5vU3RpdGNoXCIgeD1cIjAlXCIgeT1cIjAlXCIgd2lkdGg9XCIyMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHJlc3VsdD1cInR1cmJ1bGVuY2VcIi8+XG5cdCAgICA8ZmVUdXJidWxlbmNlIHR5cGU9XCJ0dXJidWxlbmNlXCIgYmFzZUZyZXF1ZW5jeT1cIjAuMDEgMC4wMVwiIG51bU9jdGF2ZXM9XCI2XCIgc2VlZD1cIjFcIiBzdGl0Y2hUaWxlcz1cInN0aXRjaFwiIHg9XCIwJVwiIHk9XCIwJVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiByZXN1bHQ9XCJ0dXJidWxlbmNlMVwiLz5cblx0ICAgIDxmZUNvbXBvc2l0ZSBpbj1cInR1cmJ1bGVuY2VcIiBpbjI9XCJ0dXJidWxlbmNlMVwiIG9wZXJhdG9yPVwib3ZlclwiIHg9XCIwJVwiIHk9XCIwJVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiByZXN1bHQ9XCJjb21wb3NpdGUyXCIvPlxuXHQgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIxIDAgMCAwIDBcbiAgICAgICAgICAxIDAgMCAwIDBcbiAgICAgICAgICAxIDAgMCAwIDBcbiAgICAgICAgICAxIDAgMCAxIDBcIlxuICAgICAgICAgIHg9XCIwJVwiIHk9XCIwJVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBpbj1cImNvbXBvc2l0ZTJcIiByZXN1bHQ9XCJjb2xvcm1hdHJpeFwiLz5cblx0ICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiY29sb3JtYXRyaXhcIiBvcGVyYXRvcj1cImluXCIgeD1cIjAlXCIgeT1cIjAlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHJlc3VsdD1cImNvbXBvc2l0ZTFcIi8+XG4gICAgICA8L2ZpbHRlcj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwLXBhdGhcIj48cGF0aCBpZD1cImNsaXBQYXRoXCIgZD1cIk0xOTIuNzMsMzQzLjgzYTM5LjExLDM5LjExLDAsMCwxLDM3LjU2LTY4LjYyVjY4YTEyLDEyLDAsMCwwLTEyLTEySDE2LjY5YTEyLDEyLDAsMCwwLTEyLDEyVjMzMS44M2ExMiwxMiwwLDAsMCwxMiwxMlpcIiBzdHlsZT17e2ZpbGw6J25vbmUnLHN0cm9rZTonI2ZmZicsc3Ryb2tlTWl0ZXJMaW1pdDonMTBweCd9fS8+PC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxyZWN0IGhlaWdodD1cIjM1MFwiIHdpZHRoPVwiMjUwXCIgZmlsbD17cmVzb3VyY2VzW3Byb3BzLnBsYXllckRhdGEudGVhbUlEXS5wcmltYXJ5Q29sb3J9Lz5cbiAgICAgIDxnIGlkPVwicGxheWVySW5mb1wiPlxuICAgICAgICA8ZyBzdHlsZT17e2NsaXBQYXRoOid1cmwoI2NsaXAtcGF0aCknfX0+XG4gICAgICAgICAgPGltYWdlXG4gICAgICAgICAgeD1cIjVcIiB5PVwiNTVcIiB3aWR0aD1cIjI1MFwiIGhlaWdodD1cIjI1MFwiXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIHNsaWNlXCJcbiAgICAgICAgICB4bGlua0hyZWY9e3Byb3BzLnBpY1VybH0vPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHJlY3QgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMzAwKVwiIHdpZHRoPVwiMjAwcHhcIiBoZWlnaHQ9XCI3MHB4XCIgc3R5bGU9e3tmaWxsOicjZjdmNWU4J319PlxuICAgICAgICAgICAgPC9yZWN0PlxuICAgICAgICAgICAgPHRleHQgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNSAzMTcpXCIgc3R5bGU9e3tmb250U2l6ZTonMTNweCcsZm9udEZhbWlseTonQXJpYWwtQm9sZE1ULCBBcmlhbCcsZm9udFdlaWdodDonNzAwJyxwb2ludGVyRXZlbnRzOidub25lJ319PlxuICAgICAgICAgICAgICA8dHNwYW4+e3Byb3BzLm1vcmVEYXRhWzBdLmZpcnN0TmFtZS50b1VwcGVyQ2FzZSgpfTwvdHNwYW4+XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBmaWxsPVwiI2U1NGY0YVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNSAzMzUpXCIgc3R5bGU9e3tmb250U2l6ZTonMThweCcsZm9udEZhbWlseTonQXJpYWwtQm9sZE1ULCBBcmlhbCcsZm9udFdlaWdodDonNzAwJyxwb2ludGVyRXZlbnRzOidub25lJ319PlxuICAgICAgICAgICAgICA8dHNwYW4+e3Byb3BzLm1vcmVEYXRhWzBdLmxhc3ROYW1lLnRvVXBwZXJDYXNlKCl9PC90c3Bhbj5cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICA8L2c+XG5cbiAgICAgICAgPC9nPlxuICAgICAgICAgIDxwYXRoIGlkPVwiY2xpcFBhdGgtMlwiIGRhdGEtbmFtZT1cImNsaXBQYXRoXCIgZD1cIk0xOTIuNzMsMzQzLjgzYTM5LjExLDM5LjExLDAsMCwxLDM3LjU2LTY4LjYyVjY4YTEyLDEyLDAsMCwwLTEyLTEySDE2LjY5YTEyLDEyLDAsMCwwLTEyLDEyVjMzMS44M2ExMiwxMiwwLDAsMCwxMiwxMlpcIiBzdHlsZT17e2ZpbGw6J25vbmUnLHN0cm9rZTonI2YzYmM1Micsc3Ryb2tlTWl0ZXJMaW1pdDonMTBweCd9fS8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgaWQ9XCJkYXRhQmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMjQ1LjQ5LDMwOS45NGEzMi44OCwzMi44OCwwLDEsMS05LjE0LTIyLjc1VjY5LjA4cy0uMjQtMjEuNzgtMjItMjEuNzhoLTE5MlM0LjY5LDQ3LjM5LDQuNjksMjkuODdWNi42OUgxNGMwLDE1LjEyLDE1LjI4LDE1LjA5LDE1LjI4LDE1LjA5SDIyNS4zNmMxOS45MSwwLDIwLjEzLDE5Ljg4LDIwLjEzLDE5Ljg4VjMwOS45NFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDonI2Y3ZjVlOCcsc3Ryb2tlOicjMDAwJyxzdHJva2VNaXRlckxpbWl0OicxMHB4J319XG4gICAgICAgICAgLz5cbiAgICAgICAgPGcgaWQ9XCJkYXRhXCI+XG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI1IDM5Ljc0KVwiIHN0eWxlPXt7Zm9udFNpemU6JzE1cHgnLGZvbnRGYW1pbHk6J0FyaWFsLUJvbGRJdGFsaWNNVCwgQXJpYWwnLGZvbnRXZWlnaHQ6JzcwMCcsZm9udFN0eWxlOidpdGFsaWMnLHBvaW50ZXJFdmVudHM6J25vbmUnfX0+XG4gICAgICAgICAgICA8dHNwYW4gdGV4dExlbmd0aD1cIjE5NVwiIHN0eWxlPXt7ZmlsbDonI2U1NGY0YSd9fT57cmVzb3VyY2VzW3Byb3BzLnBsYXllckRhdGEudGVhbUlEXS50ZWFtTmFtZS50b1VwcGVyQ2FzZSgpfTwvdHNwYW4+XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgIDxnIGlkPVwibG9nb1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4OCAyODYpXCI+PHN2ZyBoZWlnaHQ9XCI0N3B4XCI+e3Jlc291cmNlc1twcm9wcy5wbGF5ZXJEYXRhLnRlYW1JRF0ubG9nb308L3N2Zz48L2c+XG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIwIDE1KVwiIHN0eWxlPXt7Zm9udFNpemU6JzEzcHgnLGZvbnRGYW1pbHk6J0FyaWFsLUJvbGRNVCwgQXJpYWwnLGZvbnRXZWlnaHQ6JzcwMCcscG9pbnRlckV2ZW50czonbm9uZSd9fT5cbiAgICAgICAgICAgIDx0c3BhbiBmaWxsPVwiI2ZmZlwiPlxuICAgICAgICAgICAgICA8dHNwYW4+I3twcm9wcy5wbGF5ZXJEYXRhLm51bWJlcn08L3RzcGFuPlxuICAgICAgICAgICAgICAmIzE4MztcbiAgICAgICAgICAgICAgPHRzcGFuPntwcm9wcy5wbGF5ZXJEYXRhLnBvc2l0aW9ufTwvdHNwYW4+XG4gICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjZGF0YUJhY2tncm91bmQge1xuXG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMnB4IHJnYmEoMCwwLDAsLjUpKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAjZGF0YUJhY2tncm91bmQ6aG92ZXIge1xuICAgICAgICAgIGFuaW1hdGlvbjogc2hpbmUgMnMgZWFzZS1pbiBmb3J3YXJkc1xuICAgICAgICB9XG4gICAgICAgICNkYXRhQmFja2dyb3VuZDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6Jyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIHRvcDowOyBsZWZ0OjA7IHJpZ2h0OjA7IGJvdHRvbTogMDtcbiAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMCAwLGNpcmNsZSBmYXJ0aGVzdC1zaWRlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDkwJSxyZ2JhKDI1NSwyNTUsMjU1LC44KSA5OCUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKSBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1zaWRlIGF0IDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwwKSA5MCUscmdiYSgyNTUsMjU1LDI1NSwuOCkgOTglLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSkgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBzaGluZSB7XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDA7XG4gICAgICAgICAgICBmaWxsOiByZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBvdXRwdXRDYXJkXG4iXX0= */\n/*@ sourceURL=/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/CardTemplate.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (outputCard);

/***/ })

})
//# sourceMappingURL=index.js.6b91f882d72ad6bda654.hot-update.js.map