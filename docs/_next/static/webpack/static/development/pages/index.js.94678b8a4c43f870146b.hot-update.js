webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardsContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardsContainer.js */ "./components/CardsContainer.js");
/* harmony import */ var _ClosedPack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClosedPack.js */ "./components/ClosedPack.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/App.js";





function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('closed'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      packState = _useState2[0],
      updatePack = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('open'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      buttonState = _useState4[0],
      updateButtonState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      showPack = _useState6[0],
      updateShowPack = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      showCards = _useState8[0],
      updateShowCards = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      isLoading = _useState10[0],
      updateIsLoading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      cardsContainer = _useState12[0],
      updateCardsContainer = _useState12[1];

  var loadPack = function loadPack() {
    console.log('loadPack');
    updateIsLoading(true);
    updateButtonState('');
    updateCardsContainer(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CardsContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      doneLoad: doneLoad,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
    console.log('immediatecardcont', cardsContainer);
  };

  var doneLoad = function doneLoad() {
    console.log('doneLoad');
    updateIsLoading(false);
    updatePack('open');
  };

  var reset = function reset() {
    updateIsLoading(false);
    updatePack('closed');
    console.log(packState);
    updateShowPack(true);
    updateShowCards(false);
    updateCardsContainer('');
    updateButtonState('open');
  };

  var doneAnimation = function doneAnimation(e) {
    console.log('doneAnimation', e.target);
    updateShowCards(true);
    updateButtonState('reset'); // updateShowPack(false)
  };

  console.log('render-app', showCards);

  var button = function button() {
    console.log(buttonState);
    var buttonStyle = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\n      .btn {\n        position: relative;\n        display: block;\n        padding: 0;\n        cursor: pointer;\n        overflow: hidden;\n        min-width: 80px;\n        border-width: 0;\n        outline: none;\n        border-radius: 2px;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n        z-index: 99999;\n        background-color: #2ecc71;\n        color: #ecf0f1;\n        animation: pulse 1s infinite;\n        transition: background-color .3s;\n      }\n      @keyframes pulse\n      {\n           0% {\n                transform: scale(1)\n           }\n           50% {\n                transform: scale(1.1)\n           }\n           100% {\n                transform: scale(1)\n           }\n      }\n\n      .btn:hover, .btn:focus {\n        background-color: #27ae60;\n      }\n\n      .btn > * {\n        position: relative;\n      }\n\n      .btn span {\n        display: block;\n        padding: 12px 24px;\n      }\n\n      .btn:before {\n        content: \"\";\n\n        position: absolute;\n        top: 50%;\n        left: 50%;\n\n        display: block;\n        width: 0;\n        padding-top: 0;\n\n        border-radius: 100%;\n\n        background-color: rgba(236, 240, 241, .3);\n\n        -webkit-transform: translate(-50%, -50%);\n        -moz-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        -o-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n      }\n\n      .btn:active:before {\n        width: 120%;\n        padding-top: 120%;\n\n        transition: width .2s ease-out, padding-top .2s ease-out;\n      }\n      ");
    var resetStyle = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "\n        .btn {\n          top: 0;\n          position: absolute;\n          justify-content: center;\n          align-items: center;\n          margin-top: 10px;\n          animation: none;\n        }\n        ");

    if (buttonState === 'open') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttonRow__button btn",
        onClick: loadPack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, buttonStyle, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "OPEN"));
    } else if (buttonState === 'reset') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttonRow__button btn",
        onClick: reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, buttonStyle, resetStyle, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "RESET"));
    } else {
      return '';
    }
  };

  var displayCards = showCards ? {
    height: '100%',
    width: '100%'
  } : {
    display: 'none'
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1706532751" + " " + "app-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, button(), isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1706532751" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: displayCards,
    className: "jsx-1706532751",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, cardsContainer), showPack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClosedPack_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    packState: packState,
    doneAnimation: doneAnimation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1706532751",
    __self: this
  }, ".app-container.jsx-1706532751{width:100vw;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:lightblue;position:relative;overflow:hidden;}.buttonRow.jsx-1706532751{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-1706532751{height:8px;width:200px;position:relative;overflow:hidden;background-color:#ddd;z-index:999;border:1px solid #eee;}.loading.jsx-1706532751:before{display:block;position:absolute;content:\"\";left:-200px;width:20px;height:8px;background-color:#2980b9;-webkit-animation:loading-jsx-1706532751 2s linear infinite;animation:loading-jsx-1706532751 2s linear infinite;}@-webkit-keyframes loading-jsx-1706532751{from{left:-20px;width:30%;}50%{width:30%;}70%{width:70%;}80%{left:50%;}95%{left:120%;}to{left:100%;}}@keyframes loading-jsx-1706532751{from{left:-20px;width:30%;}50%{width:30%;}70%{width:70%;}80%{left:50%;}95%{left:120%;}to{left:100%;}}@-webkit-keyframes spin-jsx-1706532751{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-1706532751{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSmtCLEFBR3VCLEFBVUQsQUFNQSxBQVNHLEFBV0ksQUFDRixBQUNBLEFBQ0EsQUFDQSxBQUNELEFBSVUsQUFHRSxTQVRWLENBRkEsQUFDQSxBQUVBLEFBQ0QsQ0E5QkgsQUFNRCxBQW1CaUIsQ0FuQ2hCLEVBeUJLLE9BVVksRUFsQlosRUFoQkwsT0F5QkYsU0FSSyxFQVNKLFlBQ0QsRUFUVyxTQVVYLFdBQ2MsRUFWYixFQXlCWixJQWpDRixFQW9DRSxJQTFCSCxRQXBCc0IsR0E2QmtCLFdBVHZDLCtFQW5CeUIsc0JBNkJ6Qiw2RUE1QnVCLHFCQUNILGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvY2pnaWxyb3kvRGVza3RvcC9EZXZlbG9wbWVudC9SZWFjdC9ob2NrZXktY2FyZHMvY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZHNDb250YWluZXIgZnJvbSAnLi9DYXJkc0NvbnRhaW5lci5qcydcbmltcG9ydCBDbG9zZWRQYWNrIGZyb20gJy4vQ2xvc2VkUGFjay5qcydcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSAnc3R5bGVkLWpzeC9zdHlsZSdcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbcGFja1N0YXRlLCB1cGRhdGVQYWNrXSA9IHVzZVN0YXRlKCdjbG9zZWQnKVxuICBjb25zdCBbYnV0dG9uU3RhdGUsIHVwZGF0ZUJ1dHRvblN0YXRlXSA9IHVzZVN0YXRlKCdvcGVuJylcbiAgY29uc3QgW3Nob3dQYWNrLCB1cGRhdGVTaG93UGFja10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc2hvd0NhcmRzLCB1cGRhdGVTaG93Q2FyZHNdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHVwZGF0ZUlzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NhcmRzQ29udGFpbmVyLCB1cGRhdGVDYXJkc0NvbnRhaW5lcl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IGxvYWRQYWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdsb2FkUGFjaycpXG4gICAgdXBkYXRlSXNMb2FkaW5nKHRydWUpXG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoJycpXG4gICAgdXBkYXRlQ2FyZHNDb250YWluZXIoPENhcmRzQ29udGFpbmVyIGRvbmVMb2FkPXtkb25lTG9hZH0vPilcbiAgICBjb25zb2xlLmxvZygnaW1tZWRpYXRlY2FyZGNvbnQnLGNhcmRzQ29udGFpbmVyKVxuICB9XG5cbiAgY29uc3QgZG9uZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RvbmVMb2FkJylcbiAgICB1cGRhdGVJc0xvYWRpbmcoZmFsc2UpXG4gICAgdXBkYXRlUGFjaygnb3BlbicpXG4gIH1cblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICB1cGRhdGVJc0xvYWRpbmcoZmFsc2UpXG4gICAgdXBkYXRlUGFjaygnY2xvc2VkJylcbiAgICBjb25zb2xlLmxvZyhwYWNrU3RhdGUpXG4gICAgdXBkYXRlU2hvd1BhY2sodHJ1ZSlcbiAgICB1cGRhdGVTaG93Q2FyZHMoZmFsc2UpXG4gICAgdXBkYXRlQ2FyZHNDb250YWluZXIoJycpXG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoJ29wZW4nKVxuICB9XG5cbiAgY29uc3QgZG9uZUFuaW1hdGlvbiA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RvbmVBbmltYXRpb24nLGUudGFyZ2V0KVxuICAgIHVwZGF0ZVNob3dDYXJkcyh0cnVlKVxuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCdyZXNldCcpXG4gICAgLy8gdXBkYXRlU2hvd1BhY2soZmFsc2UpXG4gIH1cbiAgY29uc29sZS5sb2coJ3JlbmRlci1hcHAnLHNob3dDYXJkcylcbiAgY29uc3QgYnV0dG9uID0gKCkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coYnV0dG9uU3RhdGUpXG4gICAgbGV0IGJ1dHRvblN0eWxlID0gKFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcbiAgICAgICAgY29sb3I6ICNlY2YwZjE7XG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBwdWxzZVxuICAgICAge1xuICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxuICAgICAgICAgICB9XG4gICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxuICAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5idG46aG92ZXIsIC5idG46Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xuICAgICAgfVxuXG4gICAgICAuYnRuID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmJ0biBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDI0MCwgMjQxLCAuMyk7XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG5cbiAgICAgIC5idG46YWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMjAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTIwJTtcblxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMnMgZWFzZS1vdXQsIHBhZGRpbmctdG9wIC4ycyBlYXNlLW91dDtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICApXG4gICAgbGV0IHJlc2V0U3R5bGUgPSAoXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idG4ge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICApXG4gICAgaWYgKGJ1dHRvblN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd19fYnV0dG9uIGJ0blwiIG9uQ2xpY2s9e2xvYWRQYWNrfSA+e2J1dHRvblN0eWxlfTxzcGFuPk9QRU48L3NwYW4+PC9kaXY+XG4gICAgfSBlbHNlIGlmIChidXR0b25TdGF0ZSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93X19idXR0b24gYnRuXCIgb25DbGljaz17cmVzZXR9ID57YnV0dG9uU3R5bGV9e3Jlc2V0U3R5bGV9PHNwYW4+UkVTRVQ8L3NwYW4+PC9kaXY+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgfVxuICBsZXQgZGlzcGxheUNhcmRzID0gc2hvd0NhcmRzID8ge2hlaWdodDonMTAwJScsd2lkdGg6JzEwMCUnfSA6IHtkaXNwbGF5Oidub25lJ31cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAge2J1dHRvbigpfVxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48L2Rpdj59XG4gICAgICA8ZGl2IHN0eWxlPXtkaXNwbGF5Q2FyZHN9PntjYXJkc0NvbnRhaW5lcn08L2Rpdj5cbiAgICAgIHtzaG93UGFjayAmJiA8Q2xvc2VkUGFjayBwYWNrU3RhdGU9e3BhY2tTdGF0ZX0gZG9uZUFuaW1hdGlvbj17ZG9uZUFuaW1hdGlvbn0vPn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFwcC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvblJvdyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmxvYWRpbmcge1xuICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlXG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmc6YmVmb3Jle1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xuICAgICAgICAgICAgZnJvbSB7bGVmdDogLTIwcHg7IHdpZHRoOiAzMCU7fVxuICAgICAgICAgICAgNTAlIHt3aWR0aDogMzAlO31cbiAgICAgICAgICAgIDcwJSB7d2lkdGg6IDcwJTt9XG4gICAgICAgICAgICA4MCUgeyBsZWZ0OiA1MCU7fVxuICAgICAgICAgICAgOTUlIHtsZWZ0OiAxMjAlO31cbiAgICAgICAgICAgIHRvIHtsZWZ0OiAxMDAlO31cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/App.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.94678b8a4c43f870146b.hot-update.js.map