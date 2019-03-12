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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "clip-path",
    className: "jsx-40989611",
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
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    height: "350",
    width: "250",
    fill: _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].primaryColor,
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "playerInfo",
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    style: {
      clipPath: 'url(#clip-path)'
    },
    className: "jsx-40989611",
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
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "jsx-40989611",
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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-40989611",
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
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-40989611",
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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "data",
    className: "jsx-40989611",
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
    className: "jsx-40989611",
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
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, _TeamResources_js__WEBPACK_IMPORTED_MODULE_1__["default"][props.playerData.teamID].teamName.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "logo",
    transform: "translate(88 286)",
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "47px",
    className: "jsx-40989611",
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
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    fill: "#fff",
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "#", props.playerData.number), "\xB7", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    className: "jsx-40989611",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, props.playerData.position))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "40989611",
    __self: this
  }, "#playerInfo.jsx-40989611 image.jsx-40989611{position:relative;display:block;width:150px;height:64px;text-align:center;margin:50px auto;-webkit-filter:drop-shadow(1px 1px 2px rgba(0,0,0,.5));background-position:-140px 0;}#playerInfo.jsx-40989611 image.jsx-40989611:hover{-webkit-animation:shine-jsx-40989611 2s ease-in forwards;animation:shine-jsx-40989611 2s ease-in forwards;}#playerInfo.jsx-40989611 image.jsx-40989611::after{content:'';position:absolute;pointer-events:none;top:0;left:0;right:0;bottom:0;background:radial-gradient(0 0,circle farthest-side,rgba(255,255,255,0) 90%,rgba(255,255,255,.8) 98%,rgba(255,255,255,0) 100%) no-repeat;background:radial-gradient(circle farthest-side at 0 0,rgba(255,255,255,0) 90%,rgba(255,255,255,.8) 98%,rgba(255,255,255,0) 100%) no-repeat;background-position:inherit;}@-webkit-keyframes shine-jsx-40989611{100%{background-position:10px 0;background-color:red;}}@keyframes shine-jsx-40989611{100%{background-position:10px 0;background-color:red;}}text.jsx-40989611{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9jb21wb25lbnRzL0NhcmRUZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBRzZCLEFBWXJCLEFBRWEsQUFVbUIsQUFLTixXQWRMLE9BZEwsS0E2QmYsSUFKQyxFQVZxQixHQWRULFlBQ0MsSUF1QlosQ0FUSyxNQUFPLENBYkssTUFhRyxRQUFVLElBWmIsS0FheUgsWUFaOUgsQUFDMkMsZUFLekQsd0NBSitCLDZCQUMvQix5Q0FVK0ksNElBQ2pILDRCQUM5QiIsImZpbGUiOiIvVXNlcnMvY2pnaWxyb3kvRGVza3RvcC9EZXZlbG9wbWVudC9SZWFjdC9ob2NrZXktY2FyZHMvY29tcG9uZW50cy9DYXJkVGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVzb3VyY2VzIGZyb20gJy4vVGVhbVJlc291cmNlcy5qcydcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSAnc3R5bGVkLWpzeC9zdHlsZSdcblxuY29uc3Qgb3V0cHV0Q2FyZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4oXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsdGVyPVwidXJsKCNmaWx0ZXIpXCIgdmlld0JveD1cIjAgMCAyNTAgMzUwXCI+XG4gICAgPGZpbHRlciBpZD1cImZpbHRlclwiIHg9XCItMjAlXCIgeT1cIi0yMCVcIiB3aWR0aD1cIjE0MCVcIiBoZWlnaHQ9XCIxNDAlXCIgZmlsdGVyVW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiIHByaW1pdGl2ZVVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJsaW5lYXJSR0JcIj5cblx0ICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT1cImZyYWN0YWxOb2lzZVwiIGJhc2VGcmVxdWVuY3k9XCIwLjUgMC41XCIgbnVtT2N0YXZlcz1cIjFcIiBzZWVkPVwiMVwiIHN0aXRjaFRpbGVzPVwibm9TdGl0Y2hcIiB4PVwiMCVcIiB5PVwiMCVcIiB3aWR0aD1cIjIwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgcmVzdWx0PVwidHVyYnVsZW5jZVwiLz5cblx0ICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT1cInR1cmJ1bGVuY2VcIiBiYXNlRnJlcXVlbmN5PVwiMC4wMSAwLjAxXCIgbnVtT2N0YXZlcz1cIjZcIiBzZWVkPVwiMVwiIHN0aXRjaFRpbGVzPVwic3RpdGNoXCIgeD1cIjAlXCIgeT1cIjAlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHJlc3VsdD1cInR1cmJ1bGVuY2UxXCIvPlxuXHQgICAgPGZlQ29tcG9zaXRlIGluPVwidHVyYnVsZW5jZVwiIGluMj1cInR1cmJ1bGVuY2UxXCIgb3BlcmF0b3I9XCJvdmVyXCIgeD1cIjAlXCIgeT1cIjAlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHJlc3VsdD1cImNvbXBvc2l0ZTJcIi8+XG5cdCAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT1cIm1hdHJpeFwiIHZhbHVlcz1cIjEgMCAwIDAgMFxuICAgICAgICAgIDEgMCAwIDAgMFxuICAgICAgICAgIDEgMCAwIDAgMFxuICAgICAgICAgIDEgMCAwIDEgMFwiXG4gICAgICAgICAgeD1cIjAlXCIgeT1cIjAlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGluPVwiY29tcG9zaXRlMlwiIHJlc3VsdD1cImNvbG9ybWF0cml4XCIvPlxuXHQgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJjb2xvcm1hdHJpeFwiIG9wZXJhdG9yPVwiaW5cIiB4PVwiMCVcIiB5PVwiMCVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgcmVzdWx0PVwiY29tcG9zaXRlMVwiLz5cbiAgICAgIDwvZmlsdGVyPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAtcGF0aFwiPjxwYXRoIGlkPVwiY2xpcFBhdGhcIiBkPVwiTTE5Mi43MywzNDMuODNhMzkuMTEsMzkuMTEsMCwwLDEsMzcuNTYtNjguNjJWNjhhMTIsMTIsMCwwLDAtMTItMTJIMTYuNjlhMTIsMTIsMCwwLDAtMTIsMTJWMzMxLjgzYTEyLDEyLDAsMCwwLDEyLDEyWlwiIHN0eWxlPXt7ZmlsbDonbm9uZScsc3Ryb2tlOicjZmZmJyxzdHJva2VNaXRlckxpbWl0OicxMHB4J319Lz48L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgICAgPHJlY3QgaGVpZ2h0PVwiMzUwXCIgd2lkdGg9XCIyNTBcIiBmaWxsPXtyZXNvdXJjZXNbcHJvcHMucGxheWVyRGF0YS50ZWFtSURdLnByaW1hcnlDb2xvcn0vPlxuICAgICAgPGcgaWQ9XCJwbGF5ZXJJbmZvXCI+XG4gICAgICAgIDxnIHN0eWxlPXt7Y2xpcFBhdGg6J3VybCgjY2xpcC1wYXRoKSd9fT5cbiAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICB4PVwiNVwiIHk9XCI1NVwiIHdpZHRoPVwiMjUwXCIgaGVpZ2h0PVwiMjUwXCJcbiAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgc2xpY2VcIlxuICAgICAgICAgIHhsaW5rSHJlZj17cHJvcHMucGljVXJsfS8+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cmVjdCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAzMDApXCIgd2lkdGg9XCIyMDBweFwiIGhlaWdodD1cIjcwcHhcIiBzdHlsZT17e2ZpbGw6JyNmN2Y1ZTgnfX0+XG4gICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICA8dGV4dCAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE1IDMxNylcIiBzdHlsZT17e2ZvbnRTaXplOicxM3B4Jyxmb250RmFtaWx5OidBcmlhbC1Cb2xkTVQsIEFyaWFsJyxmb250V2VpZ2h0Oic3MDAnLHBvaW50ZXJFdmVudHM6J25vbmUnfX0+XG4gICAgICAgICAgICAgIDx0c3Bhbj57cHJvcHMubW9yZURhdGFbMF0uZmlyc3ROYW1lLnRvVXBwZXJDYXNlKCl9PC90c3Bhbj5cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCIjZTU0ZjRhXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE1IDMzNSlcIiBzdHlsZT17e2ZvbnRTaXplOicxOHB4Jyxmb250RmFtaWx5OidBcmlhbC1Cb2xkTVQsIEFyaWFsJyxmb250V2VpZ2h0Oic3MDAnLHBvaW50ZXJFdmVudHM6J25vbmUnfX0+XG4gICAgICAgICAgICAgIDx0c3Bhbj57cHJvcHMubW9yZURhdGFbMF0ubGFzdE5hbWUudG9VcHBlckNhc2UoKX08L3RzcGFuPlxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgIDwvZz5cblxuICAgICAgICA8L2c+XG4gICAgICAgICAgPHBhdGggaWQ9XCJjbGlwUGF0aC0yXCIgZGF0YS1uYW1lPVwiY2xpcFBhdGhcIiBkPVwiTTE5Mi43MywzNDMuODNhMzkuMTEsMzkuMTEsMCwwLDEsMzcuNTYtNjguNjJWNjhhMTIsMTIsMCwwLDAtMTItMTJIMTYuNjlhMTIsMTIsMCwwLDAtMTIsMTJWMzMxLjgzYTEyLDEyLDAsMCwwLDEyLDEyWlwiIHN0eWxlPXt7ZmlsbDonbm9uZScsc3Ryb2tlOicjZjNiYzUyJyxzdHJva2VNaXRlckxpbWl0OicxMHB4J319Lz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBpZD1cImRhdGFCYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgZD1cIk0yNDUuNDksMzA5Ljk0YTMyLjg4LDMyLjg4LDAsMSwxLTkuMTQtMjIuNzVWNjkuMDhzLS4yNC0yMS43OC0yMi0yMS43OGgtMTkyUzQuNjksNDcuMzksNC42OSwyOS44N1Y2LjY5SDE0YzAsMTUuMTIsMTUuMjgsMTUuMDksMTUuMjgsMTUuMDlIMjI1LjM2YzE5LjkxLDAsMjAuMTMsMTkuODgsMjAuMTMsMTkuODhWMzA5Ljk0XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tmaWxsOicjZjdmNWU4JyxzdHJva2U6JyMwMDAnLHN0cm9rZU1pdGVyTGltaXQ6JzEwcHgnfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8ZyBpZD1cImRhdGFcIj5cbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjUgMzkuNzQpXCIgc3R5bGU9e3tmb250U2l6ZTonMTVweCcsZm9udEZhbWlseTonQXJpYWwtQm9sZEl0YWxpY01ULCBBcmlhbCcsZm9udFdlaWdodDonNzAwJyxmb250U3R5bGU6J2l0YWxpYycscG9pbnRlckV2ZW50czonbm9uZSd9fT5cbiAgICAgICAgICAgIDx0c3BhbiB0ZXh0TGVuZ3RoPVwiMTk1XCIgc3R5bGU9e3tmaWxsOicjZTU0ZjRhJ319PntyZXNvdXJjZXNbcHJvcHMucGxheWVyRGF0YS50ZWFtSURdLnRlYW1OYW1lLnRvVXBwZXJDYXNlKCl9PC90c3Bhbj5cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgPGcgaWQ9XCJsb2dvXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDg4IDI4NilcIj48c3ZnIGhlaWdodD1cIjQ3cHhcIj57cmVzb3VyY2VzW3Byb3BzLnBsYXllckRhdGEudGVhbUlEXS5sb2dvfTwvc3ZnPjwvZz5cbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjAgMTUpXCIgc3R5bGU9e3tmb250U2l6ZTonMTNweCcsZm9udEZhbWlseTonQXJpYWwtQm9sZE1ULCBBcmlhbCcsZm9udFdlaWdodDonNzAwJyxwb2ludGVyRXZlbnRzOidub25lJ319PlxuICAgICAgICAgICAgPHRzcGFuIGZpbGw9XCIjZmZmXCI+XG4gICAgICAgICAgICAgIDx0c3Bhbj4je3Byb3BzLnBsYXllckRhdGEubnVtYmVyfTwvdHNwYW4+XG4gICAgICAgICAgICAgICYjMTgzO1xuICAgICAgICAgICAgICA8dHNwYW4+e3Byb3BzLnBsYXllckRhdGEucG9zaXRpb259PC90c3Bhbj5cbiAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNwbGF5ZXJJbmZvIGltYWdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgICAgYmFja2dyb3VuZDogO1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDJweCByZ2JhKDAsMCwwLC41KSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0MHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgI3BsYXllckluZm8gaW1hZ2U6aG92ZXIge1xuICAgICAgICAgIGFuaW1hdGlvbjogc2hpbmUgMnMgZWFzZS1pbiBmb3J3YXJkc1xuICAgICAgICB9XG4gICAgICAgICNwbGF5ZXJJbmZvIGltYWdlOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDonJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgdG9wOjA7IGxlZnQ6MDsgcmlnaHQ6MDsgYm90dG9tOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgwIDAsY2lyY2xlIGZhcnRoZXN0LXNpZGUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgOTAlLHJnYmEoMjU1LDI1NSwyNTUsLjgpIDk4JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LXNpZGUgYXQgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LDApIDkwJSxyZ2JhKDI1NSwyNTUsMjU1LC44KSA5OCUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKSBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHNoaW5lIHtcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZXh0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG91dHB1dENhcmRcbiJdfQ== */\n/*@ sourceURL=/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/CardTemplate.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (outputCard);

/***/ })

})
//# sourceMappingURL=index.js.32ffab0e4825f3a006a8.hot-update.js.map