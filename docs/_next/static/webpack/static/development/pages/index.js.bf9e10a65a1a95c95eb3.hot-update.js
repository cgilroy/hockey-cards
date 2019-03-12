webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ClosedPack.js":
/*!**********************************!*\
  !*** ./components/ClosedPack.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClosedPack; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/ClosedPack.js";


function ClosedPack(props) {
  var animateStyle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "\n      .animation {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        height: 478px;\n        width: 550px;\n        animation: zoom 0.5s linear forwards, spin 0.4s ease-in forwards;\n        animation-delay: 0.9s, 1.4s;\n      }\n      @keyframes zoom {\n        100% {\n          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n          transform: scale(1.2)\n        }\n      }\n      @keyframes spin {\n        0% {\n          transform: scale(1.2)\n        }\n        100% {\n          transform: scale(1.2) rotate(50deg) translateX(1000px);\n        }\n      }\n      .paper-wrapper {\n        height: 350px;\n        width: 250px;\n        background-image: url('static/wrapper-center.png')\n      }\n      .paper {\n        height: 100%;\n        width: 100%;\n        position: relative;\n      }\n      .corner__blockout {\n        height: 64px;\n        width: 64px;\n        z-index: 3;\n        position: absolute;\n      }\n\n      .corner__blockout-topleft {\n        background-image: -webkit-linear-gradient(\n          45deg,\n          lightblue 0%,\n          lightblue 50%,\n          rgba(0, 0, 0, 0) 50%,\n          rgba(0, 0, 0, 0) 100%\n        );\n      }\n      .corner__blockout-topright {\n        background-image: -webkit-linear-gradient(\n          135deg,\n          lightblue 0%,\n          lightblue 50%,\n          rgba(0, 0, 0, 0) 50%,\n          rgba(0, 0, 0, 0) 100%\n        );\n        right: 0;\n      }\n      .corner__blockout-bottomleft {\n        background-image: -webkit-linear-gradient(\n          -45deg,\n          lightblue 0%,\n          lightblue 50%,\n          rgba(0, 0, 0, 0) 50%,\n          rgba(0, 0, 0, 0) 100%\n        );\n        bottom: 0;\n      }\n      .corner__blockout-bottomright {\n        background-image: -webkit-linear-gradient(\n          225deg,\n          lightblue 0%,\n          lightblue 50%,\n          rgba(0, 0, 0, 0) 50%,\n          rgba(0, 0, 0, 0) 100%\n        );\n        right: 0;\n        bottom: 0;\n      }\n      .corner {\n        height: 64px;\n        width: 64px;\n        position: absolute;\n        z-index: 4;\n      }\n\n      .corner-topleft {\n        left: 0;\n        top: 0;\n        transform: rotate3d(1, 1, 0, 90deg);\n        animation: unfold-corner-topleft 0.3s linear forwards;\n        animation-delay: 0.3s;\n        background-image: url('static/corner-topleft.png')\n      }\n      .corner-topright {\n        right: 0;\n        top: 0;\n        transform: rotate3d(-1, 1, 0, 90deg);\n        animation: unfold-corner-topright 0.3s linear forwards;\n        animation-delay: 0.3s;\n        background-image: url('static/corner-topright.png')\n      }\n      .corner-bottomleft {\n        left: 0;\n        bottom: 0;\n        transform: rotate3d(-1, 1, 0, 90deg);\n        animation: unfold-corner-bottomleft 0.3s linear forwards;\n        animation-delay: 0.3s;\n        background-image: url('static/corner-bottomleft.png');\n      }\n      .corner-bottomright {\n        right: 0;\n        bottom: 0;\n        transform: rotate3d(1, 1, 0, 90deg);\n        animation: unfold-corner-bottomright 0.3s linear forwards;\n        animation-delay: 0.3s;\n        background-image: url('static/corner-bottomright.png');\n      }\n      .corner::before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        z-index: 5;\n      }\n\n      .corner-topleft::before {\n\n      }\n\n      .corner-topright::before {\n\n      }\n      .corner-bottomleft::before {\n\n      }\n\n      .corner-bottomright::before {\n\n      }\n\n      @keyframes unfold-corner-topleft {\n        100% {\n          transform: rotate3d(1, 1, 0, 180deg);\n        }\n      }\n      @keyframes unfold-corner-topright {\n        100% {\n          transform: rotate3d(-1, 1, 0, 180deg);\n        }\n      }\n      @keyframes unfold-corner-bottomleft {\n        100% {\n          transform: rotate3d(-1, 1, 0, 180deg);\n        }\n      }\n      @keyframes unfold-corner-bottomright {\n        100% {\n          transform: rotate3d(1, 1, 0, 180deg);\n        }\n      }\n\n\n      /* top css */\n      .foldup {\n        height: 64px;\n        width: 250px;\n        position: absolute;\n        left: 0;\n        opacity: 1;\n        transform: rotate3d(1, 0, 0, 90deg);\n        z-index: 3;\n      }\n      .top-foldup {\n        top: 0;\n        transform-origin: top;\n        animation: unfold-top 0.3s linear forwards;\n        background: url('static/foldup.png')\n      }\n      .bottom-foldup {\n        bottom: 0;\n        transform-origin: bottom;\n        animation: unfold-bottom 0.3s linear forwards;\n        background: url('static/folddown.png');\n      }\n      .foldup::before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      .top-foldup::before {\n        background: -webkit-linear-gradient(\n          90deg,\n          hsla(0, 0%, 0%, 0.05) 0%,\n          hsla(0, 0%, 0%, 0) 100%\n        );\n      }\n      .bottom-foldup::before {\n        bottom: 0;\n        background: -webkit-linear-gradient(\n          90deg,\n          hsla(0, 0%, 0%, 0.05) 0%,\n          hsla(0, 0%, 0%, 0) 100%\n        );\n      }\n      @keyframes unfold-top {\n        100% {\n          transform: rotate3d(1, 0, 0, 180deg);\n        }\n      }\n      @keyframes unfold-bottom {\n        100% {\n          transform: rotate3d(1, 0, 0, 180deg);\n        }\n      }\n      .foldout {\n        height: 478px;\n        position: absolute;\n        top: -64px;\n      }\n\n      .foldout-left {\n        width: 154px;\n        left: 0;\n        animation: unfold-left 0.3s linear forwards;\n        animation-delay: 0.6s;\n        transform-origin: left;\n        transform: rotate3d(0, 1, 0, 90deg);\n        background-image: url('static/foldout-left.png')\n      }\n      .foldout-right {\n        width: 150px;\n        right: 0;\n        background: white;\n        animation: unfold-right 0.3s linear forwards;\n        animation-delay: 0.6s;\n        transform-origin: right;\n        transform: rotate3d(0, -1, 0, 90deg);\n        background-image: url('static/foldout-right.png')\n      }\n\n      .foldout::before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        z-index: -1;\n      }\n      .foldout-left::before {\n        background: -webkit-linear-gradient(\n          0deg,\n          hsla(0, 0%, 0%, 0.05) 0%,\n          hsla(0, 0%, 0%, 0) 100%\n        );\n      }\n      .foldout-right::before {\n        background: -webkit-linear-gradient(\n          180deg,\n          hsla(0, 0%, 0%, 0.05) 0%,\n          hsla(0, 0%, 0%, 0) 100%\n        );\n      }\n      @keyframes unfold-left {\n        100% {\n          transform: rotate3d(0, 1, 0, 180deg);\n        }\n      }\n      @keyframes unfold-right {\n        0% {\n          transform: rotate3d(0, -1, 0, 90deg);\n        }\n        100% {\n          transform: rotate3d(0, -1, 0, 180deg);\n        }\n      }\n    ");
  var staticStyle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "\n      .animation {\n        display: flex;\n        align-items: center;\n        justify-items: center;\n        position: absolute;\n        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n      }\n      .paper-wrapper {\n        background-image: url('static/wrapper-center.png');\n        height: 350px;\n        width: 250px;\n      }\n      .paper-wrapper::before {\n        content:'';\n        background: -webkit-linear-gradient(\n          90deg,\n          hsla(0, 0%, 0%, 0.5) 0%,\n          hsla(0, 0%, 0%, 0) 2%,\n          hsla(0, 0%, 0%, 0) 100%\n        );\n        height: 100%;\n        width: 100%;\n        position: absolute;\n      }\n      .paper {\n        height: 100%;\n        width: 100%;\n      }\n      .paper {\n        position: relative;\n        /* overflow: hidden; */\n      }\n\n    ");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "paper-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "paper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-foldup foldup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "corner__blockout corner__blockout-topleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "corner__blockout corner__blockout-topright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "corner corner-topleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "corner corner-topright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom-foldup foldup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "corner__blockout corner__blockout-bottomleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "corner__blockout corner__blockout-bottomright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "corner corner-bottomleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "corner corner-bottomright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "foldout foldout-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "foldout foldout-right",
    onAnimationEnd: function onAnimationEnd(e) {
      return props.doneAnimation(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }))), props.packState === 'closed' ? staticStyle : animateStyle);
}

/***/ })

})
//# sourceMappingURL=index.js.bf9e10a65a1a95c95eb3.hot-update.js.map