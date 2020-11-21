((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

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
    updateIsLoading(true);
    updateButtonState('');
    updateCardsContainer(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CardsContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      doneLoad: doneLoad,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  };

  var doneLoad = function doneLoad() {
    updateIsLoading(false);
    updatePack('open');
  };

  var reset = function reset() {
    updateIsLoading(false);
    updatePack('closed');
    updateShowPack(true);
    updateShowCards(false);
    updateCardsContainer('');
    updateButtonState('open');
  };

  var doneAnimation = function doneAnimation(e) {
    updateShowCards(true);
    updateButtonState('reset'); // updateShowPack(false)
  };

  var button = function button() {
    var buttonStyle = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "\n      .btn {\n        position: relative;\n        display: block;\n        padding: 0;\n        cursor: pointer;\n        overflow: hidden;\n        min-width: 80px;\n        border-width: 0;\n        outline: none;\n        border-radius: 2px;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n        z-index: 99999;\n        background-color: #2ecc71;\n        color: #ecf0f1;\n        animation: pulse 1s infinite;\n        transition: background-color .3s;\n      }\n      @keyframes pulse\n      {\n           0% {\n                transform: scale(1)\n           }\n           50% {\n                transform: scale(1.1)\n           }\n           100% {\n                transform: scale(1)\n           }\n      }\n\n      .btn:hover, .btn:focus {\n        background-color: #27ae60;\n      }\n\n      .btn > * {\n        position: relative;\n      }\n\n      .btn span {\n        display: block;\n        padding: 12px 24px;\n      }\n\n      .btn:before {\n        content: \"\";\n\n        position: absolute;\n        top: 50%;\n        left: 50%;\n\n        display: block;\n        width: 0;\n        padding-top: 0;\n\n        border-radius: 100%;\n\n        background-color: rgba(236, 240, 241, .3);\n\n        -webkit-transform: translate(-50%, -50%);\n        -moz-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        -o-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n      }\n\n      .btn:active:before {\n        width: 120%;\n        padding-top: 120%;\n\n        transition: width .2s ease-out, padding-top .2s ease-out;\n      }\n      ");
    var resetStyle = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "\n        .btn {\n          top: 0;\n          position: absolute;\n          justify-content: center;\n          align-items: center;\n          margin-top: 10px;\n          animation: none;\n        }\n        ");

    if (buttonState === 'open') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttonRow__button btn",
        onClick: loadPack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, buttonStyle, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "OPEN"));
    } else if (buttonState === 'reset') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttonRow__button btn",
        onClick: reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, buttonStyle, resetStyle, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
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
      lineNumber: 139
    },
    __self: this
  }, button(), isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1706532751" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: displayCards,
    className: "jsx-1706532751",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, cardsContainer), showPack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClosedPack_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    packState: packState,
    doneAnimation: doneAnimation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1706532751",
    __self: this
  }, ".app-container.jsx-1706532751{width:100vw;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:lightblue;position:relative;overflow:hidden;}.buttonRow.jsx-1706532751{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-1706532751{height:8px;width:200px;position:relative;overflow:hidden;background-color:#ddd;z-index:999;border:1px solid #eee;}.loading.jsx-1706532751:before{display:block;position:absolute;content:\"\";left:-200px;width:20px;height:8px;background-color:#2980b9;-webkit-animation:loading-jsx-1706532751 2s linear infinite;animation:loading-jsx-1706532751 2s linear infinite;}@-webkit-keyframes loading-jsx-1706532751{from{left:-20px;width:30%;}50%{width:30%;}70%{width:70%;}80%{left:50%;}95%{left:120%;}to{left:100%;}}@keyframes loading-jsx-1706532751{from{left:-20px;width:30%;}50%{width:30%;}70%{width:70%;}80%{left:50%;}95%{left:120%;}to{left:100%;}}@-webkit-keyframes spin-jsx-1706532751{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-1706532751{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSWtCLEFBR3VCLEFBVUQsQUFNQSxBQVNHLEFBV0ksQUFDRixBQUNBLEFBQ0EsQUFDQSxBQUNELEFBSVUsQUFHRSxTQVRWLENBRkEsQUFDQSxBQUVBLEFBQ0QsQ0E5QkgsQUFNRCxBQW1CaUIsQ0FuQ2hCLEVBeUJLLE9BVVksRUFsQlosRUFoQkwsT0F5QkYsU0FSSyxFQVNKLFlBQ0QsRUFUVyxTQVVYLFdBQ2MsRUFWYixFQXlCWixJQWpDRixFQW9DRSxJQTFCSCxRQXBCc0IsR0E2QmtCLFdBVHZDLCtFQW5CeUIsc0JBNkJ6Qiw2RUE1QnVCLHFCQUNILGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvY2pnaWxyb3kvRGVza3RvcC9EZXZlbG9wbWVudC9SZWFjdC9ob2NrZXktY2FyZHMvY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZHNDb250YWluZXIgZnJvbSAnLi9DYXJkc0NvbnRhaW5lci5qcydcbmltcG9ydCBDbG9zZWRQYWNrIGZyb20gJy4vQ2xvc2VkUGFjay5qcydcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSAnc3R5bGVkLWpzeC9zdHlsZSdcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbcGFja1N0YXRlLCB1cGRhdGVQYWNrXSA9IHVzZVN0YXRlKCdjbG9zZWQnKVxuICBjb25zdCBbYnV0dG9uU3RhdGUsIHVwZGF0ZUJ1dHRvblN0YXRlXSA9IHVzZVN0YXRlKCdvcGVuJylcbiAgY29uc3QgW3Nob3dQYWNrLCB1cGRhdGVTaG93UGFja10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc2hvd0NhcmRzLCB1cGRhdGVTaG93Q2FyZHNdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHVwZGF0ZUlzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NhcmRzQ29udGFpbmVyLCB1cGRhdGVDYXJkc0NvbnRhaW5lcl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IGxvYWRQYWNrID0gKCkgPT4ge1xuICAgIHVwZGF0ZUlzTG9hZGluZyh0cnVlKVxuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCcnKVxuICAgIHVwZGF0ZUNhcmRzQ29udGFpbmVyKDxDYXJkc0NvbnRhaW5lciBkb25lTG9hZD17ZG9uZUxvYWR9Lz4pXG4gIH1cblxuICBjb25zdCBkb25lTG9hZCA9ICgpID0+IHtcbiAgICB1cGRhdGVJc0xvYWRpbmcoZmFsc2UpXG4gICAgdXBkYXRlUGFjaygnb3BlbicpXG4gIH1cblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICB1cGRhdGVJc0xvYWRpbmcoZmFsc2UpXG4gICAgdXBkYXRlUGFjaygnY2xvc2VkJylcbiAgICB1cGRhdGVTaG93UGFjayh0cnVlKVxuICAgIHVwZGF0ZVNob3dDYXJkcyhmYWxzZSlcbiAgICB1cGRhdGVDYXJkc0NvbnRhaW5lcignJylcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgnb3BlbicpXG4gIH1cblxuICBjb25zdCBkb25lQW5pbWF0aW9uID0gKGUpID0+IHtcbiAgICB1cGRhdGVTaG93Q2FyZHModHJ1ZSlcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgncmVzZXQnKVxuICAgIC8vIHVwZGF0ZVNob3dQYWNrKGZhbHNlKVxuICB9XG4gIGNvbnN0IGJ1dHRvbiA9ICgpID0+IHtcblxuICAgIGxldCBidXR0b25TdHlsZSA9IChcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5idG4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIC42KTtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XG4gICAgICAgIGNvbG9yOiAjZWNmMGYxO1xuICAgICAgICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgcHVsc2VcbiAgICAgIHtcbiAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcbiAgICAgICAgICAgfVxuICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxuICAgICAgICAgICB9XG4gICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcbiAgICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuOmhvdmVyLCAuYnRuOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcbiAgICAgIH1cblxuICAgICAgLmJ0biA+ICoge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5idG4gc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC5idG46YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG5cbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDAsIDI0MSwgLjMpO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAuYnRuOmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTIwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEyMCU7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2Utb3V0LCBwYWRkaW5nLXRvcCAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgKVxuICAgIGxldCByZXNldFN0eWxlID0gKFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgKVxuICAgIGlmIChidXR0b25TdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dfX2J1dHRvbiBidG5cIiBvbkNsaWNrPXtsb2FkUGFja30gPntidXR0b25TdHlsZX08c3Bhbj5PUEVOPC9zcGFuPjwvZGl2PlxuICAgIH0gZWxzZSBpZiAoYnV0dG9uU3RhdGUgPT09ICdyZXNldCcpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd19fYnV0dG9uIGJ0blwiIG9uQ2xpY2s9e3Jlc2V0fSA+e2J1dHRvblN0eWxlfXtyZXNldFN0eWxlfTxzcGFuPlJFU0VUPC9zcGFuPjwvZGl2PlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gIH1cbiAgbGV0IGRpc3BsYXlDYXJkcyA9IHNob3dDYXJkcyA/IHtoZWlnaHQ6JzEwMCUnLHdpZHRoOicxMDAlJ30gOiB7ZGlzcGxheTonbm9uZSd9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgIHtidXR0b24oKX1cbiAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PC9kaXY+fVxuICAgICAgPGRpdiBzdHlsZT17ZGlzcGxheUNhcmRzfT57Y2FyZHNDb250YWluZXJ9PC9kaXY+XG4gICAgICB7c2hvd1BhY2sgJiYgPENsb3NlZFBhY2sgcGFja1N0YXRlPXtwYWNrU3RhdGV9IGRvbmVBbmltYXRpb249e2RvbmVBbmltYXRpb259Lz59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hcHAtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25Sb3cge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2FkaW5nIHtcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZVxuICAgICAgICB9XG4gICAgICAgIC5sb2FkaW5nOmJlZm9yZXtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBsZWZ0OiAtMjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcbiAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICAgICAgICAgIGZyb20ge2xlZnQ6IC0yMHB4OyB3aWR0aDogMzAlO31cbiAgICAgICAgICAgIDUwJSB7d2lkdGg6IDMwJTt9XG4gICAgICAgICAgICA3MCUge3dpZHRoOiA3MCU7fVxuICAgICAgICAgICAgODAlIHsgbGVmdDogNTAlO31cbiAgICAgICAgICAgIDk1JSB7bGVmdDogMTIwJTt9XG4gICAgICAgICAgICB0byB7bGVmdDogMTAwJTt9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/App.js */"));
}

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TeamResources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamResources.js */ "./components/TeamResources.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CardTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardTemplate.js */ "./components/CardTemplate.js");

var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/Card.js";



var LogoEDM = function LogoEDM(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#0038A8",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.56 14.148a.41.41 0 1 0-.41.412.41.41 0 0 0 .41-.412m-.735 0a.323.323 0 1 1 .646 0 .323.323 0 0 1-.645 0",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.317 14.384l-.093-.2a.14.14 0 0 0-.047-.27h-.198v.47h.087v-.19h.063l.09.19h.097zm-.14-.28h-.11V14h.11a.05.05 0 0 1 .052.053.05.05 0 0 1-.052.05",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M12.445.384c.913 1.432 1.325 1.96 1.325 2.76 0 .963-.81 1.742-1.77 1.742s-1.772-.78-1.772-1.74c0-.803.412-1.33 1.325-2.762a7.63 7.63 0 1 0 .892 0",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M12 14.936a6.935 6.935 0 0 0 1.785-13.64c.157.197.68.92.68 1.85 0 1.343-1.104 2.436-2.464 2.436S9.536 4.488 9.536 3.145c0-.93.524-1.65.68-1.848A6.937 6.937 0 0 0 12 14.937",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M13.443 8.832h-.497v.795a.29.29 0 0 1-.577 0V8.614h.576v-.75h-.577v-.586a.288.288 0 0 1 .576 0v.364h.497V5.96H11.34v1.03a.37.37 0 0 1 .37.368v2.346a.21.21 0 0 1-.212.21v4.25c0 .305-.16.443-.234.492a6.01 6.01 0 0 0 1.632-.02s.547-.108.547-.59V8.83z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M11.34 8.832h-.498v.873a.21.21 0 0 1-.42 0V7.2c0-.115.095-.21.21-.21V5.96h-1.08v1.03c.115 0 .21.095.21.21v2.504a.21.21 0 0 1-.21.21v3.703c0 .31-.17.41-.25.44a5.89 5.89 0 0 0 1.54.532s.498.074.498-.426V8.832z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M9.393 13.617V9.915a.21.21 0 0 1-.21-.21V7.2a.21.21 0 0 1 .21-.21V5.96H8.31v1.03a.21.21 0 0 1 .212.21v2.504a.21.21 0 0 1-.21.21v2.522c0 .527-.27.61-.412.618.334.325.71.61 1.12.85-.002 0 .373.143.373-.287m8.353-5.974V6.51a.55.55 0 0 0-.548-.55h-.648a.55.55 0 0 0-.55.55v1.514c0 .08.05.19.11.244l.867.775c.06.054.11.164.11.244v.335a.294.294 0 0 1-.59 0v-.79H16v4.317c1.076-1 1.745-2.398 1.745-3.946V8.98c0-.08-.048-.19-.108-.244l-.867-.775a.37.37 0 0 1-.11-.243v-.515a.213.213 0 0 1 .427 0v.44h.66z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M8.153 12.437V6.51a.55.55 0 0 0-.55-.55h-.8a.55.55 0 0 0-.55.55v2.694c0 1.35.51 2.585 1.352 3.54.165.216.548.277.548-.307m7.479-2.733V8.477c0-.21-.235-.307-.235-.307s.235-.097.235-.307V6.51a.55.55 0 0 0-.55-.55h-1.48v1.03a.21.21 0 0 1 .21.21v2.504a.21.21 0 0 1-.21.21v4.13a.683.683 0 0 1-.203.493 5.928 5.928 0 0 0 1.115-.388s.254-.124.254-.586v-3.65a.295.295 0 0 1-.297-.295v-.917a.227.227 0 0 1 .454 0v4.908c0 .14-.02.257-.048.354.293-.162.57-.35.828-.56 0 0 .137-.113.137-.65v-2.84a.21.21 0 0 1-.213-.21",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M7.203 6.99a.29.29 0 0 0-.29.29v2.346a.29.29 0 0 0 .58 0V7.28a.29.29 0 0 0-.29-.29m7.519.873a.25.25 0 0 0 .25-.25V7.24a.25.25 0 0 0-.25-.25.25.25 0 0 0-.25.25v.373c0 .138.112.25.25.25",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#D14414",
    d: "M13.29 3.17c0-.904-.784-1.387-1.29-2.648-.506 1.262-1.29 1.744-1.29 2.648 0 .617.51 1.22 1.29 1.22s1.29-.603 1.29-1.22",
    __self: this
  }));
};

LogoEDM.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};



var Card = function Card(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-238855524" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CardTemplate_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    picUrl: props.picUrl,
    playerData: props.playerData,
    moreData: props.moreData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "238855524",
    __self: this
  }, ".card.jsx-238855524{height:350px;width:250px;font-family:sans-serif;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1);transition:all 0.3s cubic-bezier(.25,.8,.25,1);-webkit-touch-callout:none;-webkit-user-select:none;}.card__playerPic.jsx-238855524{width:100%;min-height:300px;overflow:hidden;position:relative;}.card__playerPic--gradient.jsx-238855524{z-index:999;height:100%;width:100%;position:absolute;top:0;background:linear-gradient(to top,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 20%);}img.jsx-238855524{object-fit:cover;object-position:center;width:100%;height:100%;}.card__playerInfoBanner.jsx-238855524{text-transform:uppercase;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:100%;}.card__logo.jsx-238855524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:65px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:0;z-index:9999;}.card__playerInfoBanner.jsx-238855524 span.jsx-238855524{padding:5px 0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;}.card__playerInfo.jsx-238855524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;height:100%;z-index:99999;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;text-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2tCLEFBR3dCLEFBYUYsQUFNQSxBQU9NLEFBTVEsQUFNWixBQVNDLEFBTUQsV0F2Q0ksQ0FNTixDQW5CQyxDQStDTSxHQXJCSyxPQU5aLENBbkJZLEFBK0JWLEdBbEJHLE9BT0UsS0FNUCxJQVpPLElBYmdELEdBMEJ0RCxFQU5QLE1BQzhFLEdBUHJGLENBYUEsV0FTYSxBQWVJLFdBZEgsWUFDVSxFQVBPLFFBZWhCLE1BN0NHLGdCQUNFLEVBa0RQLFVBL0JnRixDQWdDL0UsS0FsREMsT0FtREMsY0FDSSxhQVByQixlQVRxQixHQVNwQixlQVJVLE9BcENjLENBNEJaLENBU0csVUFSZixHQVNBLHlCQWNjLFlBQ3VELDBCQXBEcEIsd0NBcURqRCw4REFwRDZCLDJCQUNGLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvY2pnaWxyb3kvRGVza3RvcC9EZXZlbG9wbWVudC9SZWFjdC9ob2NrZXktY2FyZHMvY29tcG9uZW50cy9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXNvdXJjZXMgZnJvbSAnLi9UZWFtUmVzb3VyY2VzLmpzJ1xuaW1wb3J0IExvZ29FRE0gZnJvbSAnLi4vc3RhdGljL2xvZ29zL05ITC1pY29ucy1FRE0uc3ZnJztcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSAnc3R5bGVkLWpzeC9zdHlsZSdcbmltcG9ydCBDYXJkVGVtcGxhdGUgZnJvbSAnLi9DYXJkVGVtcGxhdGUuanMnXG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPENhcmRUZW1wbGF0ZSBwaWNVcmw9e3Byb3BzLnBpY1VybH0gcGxheWVyRGF0YT17cHJvcHMucGxheWVyRGF0YX0gbW9yZURhdGE9e3Byb3BzLm1vcmVEYXRhfS8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkX19wbGF5ZXJQaWMge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkX19wbGF5ZXJQaWMtLWdyYWRpZW50IHtcbiAgICAgICAgICB6LWluZGV4Ojk5OTtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDIwJSk7ICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkX19wbGF5ZXJJbmZvQmFubmVye1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkX19sb2dvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkX19wbGF5ZXJJbmZvQmFubmVyIHNwYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyXG4gICAgICAgIH1cbiAgICAgICAgLmNhcmRfX3BsYXllckluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXX0= */\n/*@ sourceURL=/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/Card.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/CardTemplate.js":
/*!************************************!*\
  !*** ./components/CardTemplate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TeamResources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamResources.js */ "./components/TeamResources.js");

var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/CardTemplate.js";



var outputCard = function outputCard(props) {
  var _React$createElement, _React$createElement2;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 250 350",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("filter", {
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("feTurbulence", {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("feTurbulence", {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("feComposite", {
    in: "turbulence",
    in2: "turbulence1",
    operator: "over",
    x: "0%",
    y: "0%",
    width: "100%",
    height: "100%",
    result: "composite2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("feColorMatrix", {
    type: "matrix",
    values: "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 1 0",
    x: "0%",
    y: "0%",
    width: "100%",
    height: "100%",
    in: "composite2",
    result: "colormatrix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("feComposite", {
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
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clip-path",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z",
    style: {
      fill: 'none',
      stroke: '#fff',
      strokeMiterLimit: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    filter: "url(#filter)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    height: "350",
    width: "250",
    filter: "url(#filter)",
    fill: _TeamResources_js__WEBPACK_IMPORTED_MODULE_2__["default"][props.playerData.teamID].primaryColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "playerInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    style: {
      clipPath: "url(#clip-path)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("image", {
    x: "5",
    y: "55",
    width: "250",
    height: "250",
    preserveAspectRatio: "xMidYMid slice",
    xlinkHref: props.picUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    transform: "translate(0 300)",
    width: "200px",
    height: "70px",
    style: {
      fill: '#f7f5e8'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    transform: "translate(15 317)",
    style: {
      fontSize: '13px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700',
      pointerEvents: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.moreData[0].firstName.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    fill: "#e54f4a",
    transform: "translate(15 335)",
    style: {
      fontSize: '18px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700',
      pointerEvents: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.moreData[0].lastName.toUpperCase())))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", (_React$createElement = {
    id: "clipPath-2",
    dataName: "clipPath",
    style: {
      clipPath: "url(#clip-path)"
    },
    d: "M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "style", {
    fill: 'none',
    stroke: '#f3bc52',
    strokeMiterLimit: '10px'
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 41
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", (_React$createElement2 = {
    id: "dataBackground",
    style: {
      clipPath: "url(#clip-path)"
    },
    d: "M245.49,309.94a32.88,32.88,0,1,1-9.14-22.75V69.08s-.24-21.78-22-21.78h-192S4.69,47.39,4.69,29.87V6.69H14c0,15.12,15.28,15.09,15.28,15.09H225.36c19.91,0,20.13,19.88,20.13,19.88V309.94"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "style", {
    fill: '#f7f5e8',
    stroke: '#000',
    strokeMiterLimit: '10px'
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 42
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "__self", this), _React$createElement2)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    transform: "translate(25 39.74)",
    style: {
      fontSize: '15px',
      fontFamily: 'Arial-BoldItalicMT, Arial',
      fontWeight: '700',
      fontStyle: 'italic',
      pointerEvents: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
    textLength: "195",
    style: {
      fill: '#e54f4a'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, _TeamResources_js__WEBPACK_IMPORTED_MODULE_2__["default"][props.playerData.teamID].teamName.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "logo",
    transform: "translate(88 286)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    height: "47px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, _TeamResources_js__WEBPACK_IMPORTED_MODULE_2__["default"][props.playerData.teamID].logo)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    transform: "translate(20 15)",
    style: {
      fontSize: '15px',
      fontFamily: 'Arial-BoldMT, Arial',
      fontWeight: '700',
      pointerEvents: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "#", props.playerData.number), "\xB7", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, props.playerData.position)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (outputCard);

/***/ }),

/***/ "./components/CardsContainer.js":
/*!**************************************!*\
  !*** ./components/CardsContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card.js */ "./components/Card.js");
/* harmony import */ var _Deck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Deck.js */ "./components/Deck.js");
/* harmony import */ var _ClosedPack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClosedPack.js */ "./components/ClosedPack.js");
/* harmony import */ var _PlayerPicker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlayerPicker.js */ "./components/PlayerPicker.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/CardsContainer.js";






 // const url = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+props.thirdStar.id+".jpg"

var CardsContainer = function CardsContainer(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      cards = _useState2[0],
      updateCards = _useState2[1];

  var teamID = 14;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      animatePackOpen = _useState4[0],
      updateAnimatePackOpen = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var teamUrls = "https://statsapi.web.nhl.com/api/v1/teams/"; //+teamID+"/roster"

    var playerData = [];
    fetch(teamUrls).then(function (teamResults) {
      return teamResults.json();
    }).then(function (teamJSON) {
      return teamJSON.teams.map(function (team) {
        return team.id;
      });
    }).then(function (teamIDArray) {
      var teamRosterPromises = [];
      teamIDArray.map(function (id) {
        teamRosterPromises.push(fetch("https://statsapi.web.nhl.com/api/v1/teams/" + id + "/roster").then(function (results) {
          return results.json();
        }).then(function (json) {
          return json.roster.map(function (player) {
            player.teamID = id;
            return player;
          });
        }));
      });

      _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(teamRosterPromises).then(function (rosterArray) {
        var _ref;

        var playerList = (_ref = []).concat.apply(_ref, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rosterArray));

        updateCards(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PlayerPicker_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          playerList: playerList,
          doneLoad: props.doneLoad,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }));
      });
    });
  }, []);

  var openPack = function openPack() {
    updatePackOpen(true);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      width: '100%',
      height: "100%",
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, cards);
};

/* harmony default export */ __webpack_exports__["default"] = (CardsContainer);

/***/ }),

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

/***/ }),

/***/ "./components/Deck.js":
/*!****************************!*\
  !*** ./components/Deck.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Deck; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_with_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-with-gesture */ "./node_modules/react-with-gesture/dist/react-with-gesture.es.js");
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card.js */ "./components/Card.js");




var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/Deck.js";



 // import './styles.css'

function Deck(props) {
  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  var to = function to(i) {
    return {
      x: 0,
      y: i * -1,
      scale: 1,
      rot: -1 + Math.random() * 2,
      delay: 0
    };
  };

  var from = function from(i) {
    return {
      x: 0,
      rot: 0,
      scale: 1,
      y: i * -1
    };
  }; // This is being used down there in the view, it interpolates rotation and scale into a css transform


  var trans = function trans(r, s) {
    return "perspective(1500px) rotateX(30deg) rotateY(".concat(r / 10, "deg) rotateZ(").concat(r, "deg) scale(").concat(s, ")");
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(function () {
    return new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a();
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 1),
      gone = _useState2[0]; // The set flags all the cards that are flicked out


  var _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSprings"])(props.cards.length, function (i) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, to(i), {
      from: from(i)
    });
  }),
      _useSprings2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useSprings, 2),
      springs = _useSprings2[0],
      set = _useSprings2[1]; // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity


  var bind = Object(react_with_gesture__WEBPACK_IMPORTED_MODULE_6__["useGesture"])(function (_ref) {
    var _ref$args = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref.args, 1),
        index = _ref$args[0],
        down = _ref.down,
        _ref$delta = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref.delta, 1),
        xDelta = _ref$delta[0],
        distance = _ref.distance,
        _ref$direction = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref.direction, 1),
        xDir = _ref$direction[0],
        velocity = _ref.velocity;

    var trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out

    var dir = xDir < 0 ? -1 : 1; // Direction should either point left or right

    if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

    set(function (i) {
      if (index !== i) return; // We're only interested in changing spring-data for the current spring

      var isGone = gone.has(index);
      var x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero

      var rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster

      var scale = down ? 1.1 : 1; // Active cards lift up a bit

      return {
        x: x,
        rot: rot,
        scale: scale,
        delay: undefined,
        config: {
          friction: 50,
          tension: down ? 800 : isGone ? 200 : 500
        }
      };
    });
    if (!down && gone.size === props.cards.length) setTimeout(function () {
      gone.clear() || set(function (i) {
        return to(i);
      }); // props.nextPageFunc()
    }, 400);
  });
  var cardStyle = {
    position: 'absolute',
    width: '100%',
    willChange: 'transform',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  var divStyle = {
    backgroundColor: 'white',
    width: '100vh',
    maxWidth: '300px',
    height: '100vh',
    maxHeight: '300px',
    willChange: 'transform',
    borderRadius: '10px',
    margin: '10px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    overflow: 'hidden' // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)

  };
  return springs.map(function (_ref2, i) {
    var x = _ref2.x,
        y = _ref2.y,
        rot = _ref2.rot,
        scale = _ref2.scale;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      className: "card",
      key: i,
      style: {
        transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["interpolate"])([x, y], function (x, y) {
          return "translate3d(".concat(x, "px,").concat(y, "px,0)");
        }),
        position: 'absolute',
        width: '100%',
        willChange: 'transform',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(i), {
      style: {
        transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["interpolate"])([rot, scale], trans),
        backgroundColor: 'white',
        width: '250px',
        height: '350px',
        willChange: 'transform',
        borderRadius: '2px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        overflow: 'hidden'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      picUrl: props.cards[i].src,
      playerData: props.playerData[i],
      moreData: props.moreData[i],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })));
  });
}

/***/ }),

/***/ "./components/PlayerPicker.js":
/*!************************************!*\
  !*** ./components/PlayerPicker.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Deck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Deck.js */ "./components/Deck.js");


var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/PlayerPicker.js";




var PlayerPicker = function PlayerPicker(props) {
  var outputPlayers = [];

  while (outputPlayers.length < 10) {
    var r = Math.floor(Math.random() * (props.playerList.length - 1)) + 1;
    if (outputPlayers.indexOf(r) === -1) outputPlayers.push(r);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  var defaultImg = function defaultImg(image) {
    image.src = 'static/skater.jpg';
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var picPromises = [];
    var playerData = [];
    var playerPromises = [];
    outputPlayers.map(function (index) {
      // let actionShot = "https://nhl.bamcontent.com/images/actionshots/" + player.person.id + ".jpg"
      // let headShot = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+player.person.id+".jpg"
      var name = props.playerList[index].person.fullName;
      var position = props.playerList[index].position.abbreviation;
      var number = props.playerList[index].jerseyNumber;
      var teamID = props.playerList[index].teamID;
      playerData.push({
        name: name,
        position: position,
        number: number,
        teamID: teamID
      });
      picPromises.push(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        var img = new Image();

        img.onload = function () {
          return resolve(img);
        };

        img.onerror = function () {
          return defaultImg(img);
        };

        img.src = "https://cms.nhl.bamgrid.com/images/actionshots/" + props.playerList[index].person.id + ".jpg";
      }));
      playerPromises.push(fetch('https://statsapi.web.nhl.com' + props.playerList[index].person.link).then(function (response) {
        return response.json();
      }).then(function (json) {
        return json.people;
      }));
    });

    _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(picPromises).then(function (cards) {
      _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(playerPromises).then(function (json) {
        setCards(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Deck_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          cards: cards,
          playerData: playerData,
          moreData: json,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }));
        props.doneLoad();
      });
    });
  }, []);
  return cards;
};

/* harmony default export */ __webpack_exports__["default"] = (PlayerPicker);

/***/ }),

/***/ "./components/TeamResources.js":
/*!*************************************!*\
  !*** ./components/TeamResources.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/TeamResources.js";


var LogoNJD = function LogoNJD(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.465 12.688a.32.32 0 0 0 0 .64.32.32 0 0 0 0-.64zm0 .572a.25.25 0 0 1-.25-.25c0-.14.11-.252.25-.252s.25.11.25.25a.25.25 0 0 1-.25.252z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.596 12.935a.108.108 0 0 0-.108-.108h-.154v.364h.068v-.146h.05l.068.147h.076l-.072-.153a.112.112 0 0 0 .072-.102zm-.11.04h-.085v-.08h.087a.04.04 0 0 1 .04.04.04.04 0 0 1-.04.04zm2.051-10.76c0-1.375-1.262-1.977-2.532-1.93 0 0 .524.507.524.882 0 .2-.15.413-.567.413h-1.88c-.422 0-.674-.145-.674-.39 0-.398.626-.864.626-.864s-1.27.077-2.123.744a6.65 6.65 0 0 0-6.466 10.06.68.68 0 0 1-.34.088c-.466 0-.47-1.032-.47-1.032s-1.174 1.37-1.174 3.2c0 1.126.476 2.095.476 2.095s1.317-1.587 3.97-1.587c0 0-1.26-.505-1.26-1.115 0 0 .007-.064.05-.145a6.65 6.65 0 0 0 10.037-8.538c.64-.102 1.8-.54 1.8-1.88z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M17.57.58s.245.23.245.587-.278.7-.853.7h-1.88c-.73 0-.96-.375-.96-.676 0-.3.17-.462.17-.462s-1.845.36-1.845 1.86c0 1.262 1.41 1.258 1.41 1.258h.413L13.12 6.89l-1.75-2.216C11.262 4.537 10.836 4 10.202 4c-.88 0-1.265.99-1.396 1.335l-1.858 4.913s.688-.25 1.6-.25c.768 0 1.414.154 1.414.154l.86-2.277 1.095 1.984-.774.81c-.51.532-1.572.237-2.596.237-1.91 0-1.727.596-2.44.596-.507 0-.638-.614-.638-.614s-.722 1.192-.722 2.495c0 .846.298 1.59.298 1.59s1.488-1.27 2.99-1.27c0 0-.67-.32-.67-.928 0-.173.228-.727.967-.727 1.143 0 1.62.68 3 .68 1.934 0 3.007-1.198 3.385-2.196l2.53-6.688s2.004.004 2.004-1.63C19.252.713 17.57.58 17.57.58z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#FFF",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.202 3.715c.354 0 .882.136 1.393.782l1.436 1.82.828-2.186s-1.694-.014-1.694-1.543c0-.333.073-.618.196-.86-.076-.003-.152-.006-.23-.006a5.952 5.952 0 0 0-5.43 8.383l1.842-4.87c.38-1.007.938-1.518 1.66-1.518zm4.782 6.92c-.436 1.15-1.623 2.38-3.65 2.38-1.38 0-1.917-.633-2.897-.676a5.95 5.95 0 0 0 8.815-7.695l-2.268 5.99z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.937 10.472l.63-.658-.694-1.26-.732 1.935s-.755-.207-1.592-.207c-.65 0-1.24.146-1.626.27.048.087.098.172.15.256.3-.105.744-.188 1.476-.188 1.053 0 2.006.25 2.39-.15z",
    __self: this
  })));
};

LogoNJD.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoNYI = function LogoNYI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#003893",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.404 13.737a.41.41 0 1 0 0 .822.41.41 0 0 0 0-.823zm0 .735a.323.323 0 1 1 0-.647.323.323 0 0 1 0 .647z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.573 14.053a.14.14 0 0 0-.14-.14h-.198v.47h.09v-.19h.062l.09.19h.096l-.093-.198a.14.14 0 0 0 .093-.132zm-.14.05h-.108V14h.11c.028 0 .05.023.05.052s-.022.052-.05.052z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12 .59C7.746.59 4.298 3.906 4.298 8S7.746 15.41 12 15.41s7.702-3.317 7.702-7.41S16.254.59 12 .59z",
    fill: "#f95602",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.205 7.562c-.008-.122-.015-.244-.03-.364h.004c-.22-1.813-1.163-3.41-2.548-4.522A7.41 7.41 0 0 0 12 1.064c-.958 0-1.87.18-2.708.505a7.3 7.3 0 0 0-1.916 1.1C5.786 3.94 4.77 5.856 4.77 8c0 3.83 3.237 6.936 7.23 6.936S19.23 11.83 19.23 8c0-.147-.008-.294-.017-.44",
    fill: "#003893",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.29 11.92l.986-.234c.088-.02.16-.08.2-.163l.612-1.304.542-1.154.38-.813.19-.4.387-.824 2.044-4.352a6.952 6.952 0 0 0-.467-.344l-1.28 2.6-1.538-3.31a.11.11 0 0 0-.1-.065h-2.668a.11.11 0 0 0-.11.11v2.168L9.29 1.568a7.3 7.3 0 0 0-1.916 1.1v4.036c0 .062.05.11.11.11H9c.06 0 .11-.05.11-.11V4.9l1.116 1.86a.11.11 0 0 0 .096.056h1.698a.11.11 0 0 0 .11-.11v-3.5l1.748 3.762-.21.424-1.227 2.498-.21.427a.296.296 0 0 1-.227.163l-3.32.457a.115.115 0 0 0-.073.043.114.114 0 0 0-.02.084l.2 1.327a.114.114 0 0 0 .137.093l.33-.078",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#f95602",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.165 10.057l-.643-.328-.08.16.647.33zm.255-.542l-.634-.324-.08.163.638.324zm-.845.105l.64.327.077-.162-.638-.325zm-2.319 2.547l-.058-.367a.05.05 0 0 0-.037-.04l-.645-.157a.05.05 0 0 0-.06.035l-.195.766-.34 1.326a.05.05 0 0 0 .033.06l.38.123a.053.053 0 0 0 .04-.004.047.047 0 0 0 .022-.032l.1-.388.52.17.074.47a.05.05 0 0 0 .032.04l.397.13a.05.05 0 0 0 .047-.01.05.05 0 0 0 .017-.046l-.328-2.077z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.672 7.392c-.445-.07-1 .225-1.39.018-.447-.014-.97.016-1.366-.194-.26-.04-.535-.038-.77-.132-.126.236-.27-.077-.42-.03a.216.216 0 0 0-.147.233c-.048.244-.344.102-.497.204-.28.16-.436-.242-.704-.238-.184-.05-.4-.027-.503.16-.157.04-.237-.166-.416-.1-.123-.077.057-.13.01-.223-.102-.112-.292-.194-.436-.1-.026.19.18.356.07.558-.106.02-.1-.134-.19-.17-.102-.05-.107.075-.162.124-.2-.01-.158-.232-.222-.354-.232-.036-.418.106-.61.19-.134.103-.046.322-.16.43-.09-.07-.082-.198-.17-.278-.076-.05-.166-.085-.26-.053-.085.02-.11.093-.127.168.002.045.047.08.096.067.056.014.1.08.074.138-.03.04-.05.122-.12.107-.075-.072-.183-.174-.29-.13-.045.04 0 .095 0 .138-.05.165.07.26.16.376.03.13.043.316-.055.41-.133.026-.167.173-.18.284.032.112.155.104.2.197.024.077-.06.135-.127.178.026.127.057.252.09.377a.554.554 0 0 1 .227-.054c.045.023.075.063.075.108.044.085.134.17.236.12.104-.044.197-.186.308-.128v1.279l.34.485c.083.123.138.093.138-.012V9.76c.178-.004.38.015.544-.05.325.022.713.112.995-.073.25-.045.48-.13.75-.128.182-.015.34.066.512.054.267-.302.646.056.962-.136.245-.125.454.094.717.054.165-.002.415-.186.558.034.12.06.29.037.393-.04.063-.23.33-.14.504-.194.116-.025.343-.143.497-.133l.03-.065.632.32.076-.16-.628-.32.752-1.533zm1.072.154c.18-.237.638.046.697-.32.07-.19.286-.12.42-.213.04-.07-.03-.12-.045-.183.175-.19.41-.323.6-.52.134-.132.344-.102.517-.105.08-.05.197-.12.215-.214l-.023-.03a1.66 1.66 0 0 0-.74.083c-.255.23-.536.396-.842.488-.21.266-.644.39-.954.497l-.388.825c.196-.052.456-.192.544-.306z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M7.67 10.63l-.69-.622c-.266-.24-.452-.03-.452.125v.643c0 .123.04.195.097.27l.625.814c.035.046.05.092.05.146v.09c0 .073-.065.067-.115.022l-.135-.115c-.05-.037-.045-.114-.045-.18v-.083c0-.044-.047-.123-.094-.16l-.31-.287c-.05-.045-.072-.007-.072.114v.372a.65.65 0 0 0 .21.424l.715.644c.174.155.323.004.323-.354v-.41a.95.95 0 0 0-.197-.548l-.526-.685s-.048-.06-.048-.142v-.07s.02-.104.102-.03l.134.12a.19.19 0 0 1 .058.14v.097c0 .057.015.1.067.147l.252.226c.105.096.157.027.157-.057v-.385a.354.354 0 0 0-.106-.265zm1.167 2.66l-.38-.225v-1.887c0-.02-.01-.042-.028-.054l-.355-.21c-.02-.01-.043-.01-.062 0s-.033.032-.033.055v2.23c0 .022.012.043.03.054l.764.453a.06.06 0 0 0 .062 0 .06.06 0 0 0 .03-.054v-.31a.064.064 0 0 0-.03-.053zm4.908-1.478l-.992.197a.063.063 0 0 0-.05.06v2.23c0 .018.01.035.022.047s.032.017.05.014l.97-.173c.478-.085.478-.372.478-.434v-1.75s0-.286-.478-.19zm1.707-.666a.05.05 0 0 0-.048-.003l-.894.437a.047.047 0 0 0-.027.044v2.245c0 .017.008.032.022.04s.03.012.047.005l.894-.403a.047.047 0 0 0 .03-.045v-.317a.05.05 0 0 0-.023-.042.05.05 0 0 0-.047-.004l-.376.17a.05.05 0 0 1-.07-.045v-.426c0-.02.013-.037.03-.046l.456-.205a.047.047 0 0 0 .03-.045v-.32a.054.054 0 0 0-.023-.04.048.048 0 0 0-.048-.003l-.373.183c-.016.007-.033.006-.048-.003s-.023-.024-.023-.042v-.454a.05.05 0 0 1 .028-.045l.46-.225a.05.05 0 0 0 .027-.045v-.328a.047.047 0 0 0-.023-.04zm1.078.73s.28-.21.28-.59V10.7c0-.313-.2-.342-.428-.185l-.745.514a.048.048 0 0 0-.02.04v2.22c0 .02.01.035.025.044s.035.007.05-.003l.38-.257a.047.047 0 0 0 .022-.04v-.856l.078-.055.416.545a.05.05 0 0 0 .067.01l.277-.187c.01-.008.02-.02.02-.033a.044.044 0 0 0-.01-.038l-.412-.544zm1.044-2.566l-.48.53c-.124.14-.15.287-.15.457v.226c0 .158.03.3.235.344l.263.06c.085.02.132.042.132.103v.06c0 .092-.02.114-.06.153s-.13.132-.13.016v-.1c0-.082-.034-.082-.087-.03l-.304.313c-.036.032-.052.07-.052.135v.2c0 .357.185.428.373.18l.455-.602a.975.975 0 0 0 .188-.637c0-.17-.146-.24-.25-.26l-.223-.038c-.08-.015-.1-.07-.1-.146v-.12c0-.038 0-.135.063-.202l.045-.046c.047-.048.08-.047.08.04v.174c0 .036.02.057.053.023l.278-.287c.047-.05.053-.125.053-.177v-.29c0-.303-.207-.275-.383-.08zm-3.144.3c-.563 0-1.018.153-1.018.343v.564c0 .19.455.343 1.017.343.56 0 1.016-.153 1.016-.343v-.564c0-.19-.457-.343-1.017-.343zm-.18-.804c.218.166.254-.15.43-.17.11-.024.204.073.274.153.264.112.582.037.796-.14.23-.1.524-.06.758-.16.156-.103.307-.226.527-.19.652-.224 1.584-.546 2.262-.784-.008-.12.015-.197 0-.317l-.27.05c-.093.343-.488.115-.654.36-.213.012-.444.03-.557.243-.068.02-.166.02-.192-.062.046-.195-.274-.264-.127-.473-.01-.09-.116-.1-.184-.07-.142.05-.152.203-.17.327-.192.035-.21-.303-.42-.224a.886.886 0 0 1-.794.244c-.548-.042-.73.67-1.196.82-.2.032-.503-.084-.722-.162l-.38.813.222-.056c.147-.035.263-.133.397-.204zm-1.872 3.228l-.354-.042c-.018-.002-.034.003-.048.015s-.02.03-.02.047v1.238l-.654-1.356c-.003-.006-.01-.01-.013-.015a.064.064 0 0 0-.037-.02l-.514-.06a.062.062 0 0 0-.07.06v2.366c0 .03.02.058.052.062l.354.05a.064.064 0 0 0 .05-.016.064.064 0 0 0 .02-.047V12.88l.773 1.507a.063.063 0 0 0 .058.034l.396-.022a.062.062 0 0 0 .058-.062v-2.24a.06.06 0 0 0-.054-.062z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.537 12.31l-.355.07v1.5l.377-.068c.186-.033.186-.244.186-.244V12.46s0-.193-.21-.15zm2.733-1.24l-.153.108a.045.045 0 0 0-.02.04v.395c0 .02.01.035.025.044a.05.05 0 0 0 .05-.003l.108-.074a.287.287 0 0 0 .104-.214v-.23c0-.067-.05-.108-.113-.065zm-6.332 2.113l-.14-.89-.198.78zM6.376 9.76v-.483l-.478-.42v.934c.146-.038.326.012.478-.03z",
    fill: "#003893",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ellipse", {
    cx: "14.429",
    cy: "9.954",
    rx: "1.017",
    ry: ".343",
    fill: "#FFF",
    __self: this
  }));
};

LogoNYI.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoNYR = function LogoNYR(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M15.96.335l-.577.56-.574-.56H9.19l-.575.56-.576-.56H4.028l1.2 2.13v10.348c0 .21 0 1.834 1.964 1.834h3.106c1.115 0 1.658 1.02 1.658 1.02h.09s.543-1.02 1.658-1.02h3.107c1.962 0 1.962-1.625 1.962-1.834V2.465l1.2-2.13H15.96z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M18.674 2.438l1.13-2.004H16l-.617.6-.615-.6H9.232l-.615.6L8 .434H4.2l1.13 2.004v10.374c0 .52.182 1.733 1.863 1.733h3.106c.997 0 1.55.767 1.703 1.01.15-.243.705-1.01 1.702-1.01h3.107c1.68 0 1.862-1.212 1.862-1.733V2.438z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M18.793 14.283a.384.384 0 1 0 .002.768.384.384 0 0 0-.002-.767zm0 .685a.3.3 0 1 1 0-.603.3.3 0 0 1 0 .603z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M18.95 14.578a.13.13 0 0 0-.128-.13h-.186v.438h.082v-.178h.06l.083.178h.09l-.085-.186a.128.128 0 0 0 .086-.122zm-.128.048h-.104v-.096h.104c.025 0 .047.02.047.048s-.022.048-.048.048zM16.186.893l-.803.78-.8-.78H9.418l-.803.78-.803-.78H4.98l.805 1.427v10.493c0 .582.244 1.275 1.406 1.275h3.106c.79 0 1.352.443 1.703.797.35-.354.913-.797 1.702-.797h3.107c1.16 0 1.403-.693 1.403-1.275V2.32l.806-1.43h-2.832z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M10.934 5.48l6.937 5.025V5.48z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6.13 4.773h11.74v.283H6.13zm0 8.039c0 .825.566.932 1.062.932h3.105c.707 0 1.28.37 1.703.712.425-.34.996-.712 1.703-.712h1.125l-8.698-6.3v5.368zm0-5.952l9.503 6.884h.404L6.13 6.568zm3.595-1.38l8.146 5.9v-.29l-7.74-5.61zm3.359 5.593l.687.498.2-.275-.406-.294.325-.447.405.295.2-.277-.405-.293.324-.448.404.294.202-.276-.688-.498zm-3.441-5.12l-.635-.46-1.25 1.724.282.204.56-.77.156.113-.264.984.28.204.268-.996a.42.42 0 0 0 .502-.143l.195-.27a.42.42 0 0 0-.094-.587zm5.56 6.655l.268-.998a.42.42 0 0 0 .503-.143l.195-.27a.422.422 0 0 0-.094-.588l-.637-.46-1.248 1.722.28.204.56-.77.155.112-.264.986.283.204zM11.625 7.39l-1.247 1.723.28.203.75-1.034-.297 1.363.283.203 1.248-1.724-.28-.203-.75 1.035.297-1.362zm-2.662.7l.28.202.355-.285.47.34-.16.426.28.203.776-2.065-.282-.202-1.72 1.38zm4.641.732l-.234-.17a.422.422 0 0 0-.59.093l-.754 1.04a.42.42 0 0 0 .095.59l.236.17c.06.044.128.07.197.078l-.006.062.15.108.668-.922-.55-.395-.17.235.267.192-.21.293a.145.145 0 0 1-.204.032l-.12-.087a.145.145 0 0 1-.032-.203L13.024 9a.145.145 0 0 1 .203-.03l.12.086c.065.047.08.138.032.203l-.167.228.28.203.204-.28a.42.42 0 0 0-.093-.588zm3.516 2.548a.574.574 0 0 0-.802.128c-.338.467.314 1.033.137 1.278a.257.257 0 0 1-.416-.3l.08-.112-.282-.204-.076.107a.6.6 0 0 0 .135.843.6.6 0 0 0 .842-.135c.335-.462-.317-1.03-.136-1.278a.225.225 0 0 1 .316-.05.227.227 0 0 1 .053.318l-.068.093.28.203.065-.087a.576.576 0 0 0-.13-.804zM8.798 4.078h-.5v-.553h.5v-.34h-.5v-.552h.5V2.29h-.85v2.13h.85zm6.325-.611h.193l.363.952h.347l-.37-.965a.422.422 0 0 0 .325-.41v-.332a.422.422 0 0 0-.422-.422h-.785v2.13h.348v-.953zm-8.536-.325l.56 1.277h.346V2.29h-.347v1.28l-.56-1.28H6.24v2.13h.347zm7.177 1.278h.29a.422.422 0 0 0 .423-.422V2.713a.422.422 0 0 0-.422-.422h-.29a.422.422 0 0 0-.423.423v1.285c0 .232.19.42.422.42zm2.994-.882l.156-.25.498 1.13h.348l-.643-1.456.418-.67h-.347l-.43.69v-.69h-.348v2.127h.348zm-4.412.882h.347v-.882l.46-1.247h-.348l-.285.776-.286-.775h-.346l.458 1.248zm-2.456 0l.182-1.116.183 1.115h.415l.348-2.13h-.348l-.208 1.274-.207-1.273H9.89l-.207 1.274-.208-1.273h-.347l.347 2.13z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.834 4.078h.148c.08 0 .146-.065.146-.146V2.778a.146.146 0 0 0-.146-.146h-.148a.145.145 0 0 0-.145.146v1.154c0 .08.064.146.144.146zm-3.661 3.985l.28-.74-.62.495zm-.787-1.875l-.297-.215-.29.4.296.215a.147.147 0 0 0 .204-.033l.118-.163a.147.147 0 0 0-.032-.204zm6.249-3.208v-.202a.146.146 0 0 0-.146-.146h-.366v.493h.365a.146.146 0 0 0 .145-.146zm.095 8.232l.117-.164a.146.146 0 0 0-.03-.203l-.297-.215-.29.4.296.214a.147.147 0 0 0 .204-.032z",
    fill: "#0038A8",
    __self: this
  }));
};

LogoNYR.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoPHI = function LogoPHI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.06 2.087H3.566v.543c0 .84.328 1.628.89 2.2h-.89v.543c0 .84.328 1.628.89 2.2h-.89v.542c0 .84.328 1.63.89 2.2h-.89v.543c0 1.684 1.29 3.055 2.874 3.055h2.665l1.81-3.06a5.393 5.393 0 0 0 4.145 1.982 5.38 5.38 0 0 0 5.374-5.375 5.38 5.38 0 0 0-5.373-5.373z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.044 11.587a.376.376 0 0 0 0 .752.376.376 0 0 0 0-.753zm0 .67a.296.296 0 1 1 .003-.59.296.296 0 0 1-.003.59z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.198 11.875a.127.127 0 0 0-.127-.127h-.18v.43h.08v-.176h.06l.08.176h.088l-.085-.182a.127.127 0 0 0 .085-.12zm-.127.047h-.1v-.093h.1c.027 0 .048.02.048.045s-.02.047-.047.047z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M15.063 2.267H3.74v.357c0 .994.48 1.872 1.2 2.388h-1.2v.358c0 .994.48 1.87 1.2 2.388h-1.2v.357c0 .996.48 1.873 1.2 2.387h-1.2v.36c0 1.583 1.21 2.872 2.694 2.872h2.562l1.89-3.196a5.194 5.194 0 0 0 4.177 2.117 5.2 5.2 0 0 0 5.194-5.195 5.198 5.198 0 0 0-5.194-5.193z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.063 2.624H4.203c0 1.39 1.046 2.515 2.334 2.515h4.09c.065 0 .117.05.117.115a.116.116 0 0 1-.116.115H4.203c0 1.388 1.046 2.515 2.334 2.515h2.467a.115.115 0 0 1 0 .23h-4.8c0 1.39 1.045 2.514 2.333 2.514h.843c.064 0 .116.052.116.116a.117.117 0 0 1-.116.115H4.203c0 1.39 1.046 2.515 2.334 2.515h2.256l4.216-7.127a2.386 2.386 0 1 1-.332 1.262l-1.596 2.698a4.837 4.837 0 1 0 3.98-7.584z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    fill: "#F74902",
    cx: "15.063",
    cy: "7.46",
    r: "1.373",
    __self: this
  }));
};

LogoPHI.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoPIT = function LogoPIT(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.943 5.957l.357.118-.002.23c-.19-.007-.343-.043-.343.513 0 .415.08.55.08.666 0 .2-.018.247-.642.247 0 0-.098-.118-.44-.25 0 0-.006-.032-.02-.09l2.643-4.597h-.8c.06-.114 0-.303-.148-.452-.17-.168-.39-.22-.494-.118-.047.047-.062.118-.048.198l-.328.345c.008-.052.026-.326-.49-.474-.155-.307-.286-.692-.595-.692-.253 0-.472.192-.472.192s-.943-.88-1.86-.88c-.8 0-1.898.783-2.383.783-.516 0-.973-1.25-1.698-1.25-.392 0-.852.313-1.348.616-.496.3-.588.67-.71.97-.08.2-.333.47-.63.762H4.29l4.643 8.074a.52.52 0 0 1-.1.01H5.37l-.64 1.15h4.1a.823.823 0 0 0 .53-.232l.066-.07 2.01 3.494 1.856-3.23h1.566v-.325h-.376l-.066-.21h.057l.272-.125c0-.313-.377-.753-.377-.753l-.062-.35.515-.895 2.4-.886c.425-.157.473-.777.473-.777s.392.184.606-.293c0 0 .434.14.67.14.203 0 .49-.11.49-.418 0 0 .313-.19.417-.512l-2.827-.937-.103.31z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#DBCEA5",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.36 8.963c0-.05-.735-.244-1.024-.355-.266.104.078.157.078.5 0 .203-.1.44-.1.44l-.146.043s-.293.54-.48.46c-.27.474-.378.582-.805.582a.666.666 0 0 1-.363-.106l-.93 1.014 1.84 3.203 1.586-2.755h-1.14c0-.294.187-.535.187-.535 0-.468.288-.566.503-.586.454-.04.64 0 .64-.223 0-.157-.014-.343-.014-.343h.168c0-.61-.172-.76-.172-1.07 0-.12.172-.17.172-.267zm.73 1.157l.356-.62-.398.195zm1.195-6.302L15.2 3.63c-.432.073-.82-.146-.93-.204-.11-.056.01-.298.01-.298s-.03-.052-.098-.1h-.452c-.085.076-.105.194-.036.266.48.498.866 1.033 1.173 1.548l.502-.527-.085-.497zm-2.058 7.802l.097-.167h-.16zm3.957-8.59l-.064.07c.263.312.154.63.154.63 0 .24-.127.235-.127.235 0 .56-.293.46-.293.46 0 .735-.81.438-.81.438a1.07 1.07 0 0 1-.332-.097l-.55.612c.357.692.57 1.307.684 1.69l2.322-4.04h-.984zM9.91 9.256c-.15-.358-.084-.44-.084-.44s-.476-.39-.335-.877c0 0-1.225-1.778-1.225-2.832 0-.545.264-.492.264-.938 0-.366-.25-.64-.43-.64-.207 0-.85.425-1.79.98l.356-.817-.856.88s-.167-.86.294-1.32l.228-.224H4.696L9.16 10.79a.748.748 0 0 0 .21-.14l.703-.71a1.958 1.958 0 0 1-.164-.686z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.543 11.662h.155l.067-.21h-.34z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M13.597 11.453l-.12.21h.492l.058-.21zm5.393-4.819l-.122.17.315.104-.044-.224zm-1.205-.399l-.116.17.81.27-.004-.212z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ellipse", {
    transform: "rotate(-103.455 18.965 7.227)",
    fill: "#FFF",
    cx: "18.966",
    cy: "7.228",
    rx: ".105",
    ry: ".188",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ellipse", {
    transform: "rotate(142.064 12.4 11.14)",
    fill: "#FFF",
    cx: "12.398",
    cy: "11.139",
    rx: ".188",
    ry: ".105",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M9.47 10.753a1.02 1.02 0 0 1-.64.268h-.022l-.39.865h.41a.68.68 0 0 0 .424-.188l1.138-1.24-.26-.37-.66.666zm-4.497 1.132h.558l.48-.864h-.557zm9.17-.432l-.09.32h-.888l-.117-.32h-.168l-.1.32h-.3l-.182-.32h-.096a.95.95 0 0 0-.206.425h2.75v-.105h-.348l-.103-.32h-.152zm3.264-5.133l.152.05.18-.266.843.28.01.328.166.055.19-.263.283.094.07.35.116.038a.997.997 0 0 0 .306-.336l-2.61-.864-.034.1.33.11-.005.324zm-5.5 1.633l2.39-2.51c-.874-1.214-2.148-2.307-3.3-2.307-1.025 0-1.718.755-1.718 1.554 0 1.44 1.292 2.558 2.627 3.263zm.665.317c.806.347 1.55.53 1.94.53.36 0 .852-.1.852-.88 0-.512-.277-1.233-.722-1.96l-2.07 2.31zM6.103 3.442c-.167.188-.188.732-.188.732l1.36-1.17-.545 1.002s.92-.418 1.004-.627c0 0-.19-.46-.607-.88 0 0-.856.754-1.024.942zm1.871-1.569c0-.148.21-.297.235-.368 0 0-.136-.183-.327-.09-.03.416-.136.614-.183.867.156.13.104-.196.328-.196.075 0 .184.093.184.2 0 .125-.068.19-.068.19l.157-.012s.068-.067.068-.2c0-.305-.394-.31-.394-.39zm7.543 2.485l-3.844 4.04c-.14.146.23.402.36.253l3.68-4.107c.135-.15-.054-.327-.196-.185zM10.72 8.723s.058-.21-.106-.21c-.336 0-.658.278-.658.42 0 .075.03.14.03.14s.438-.42.735-.35zm.66-.009c0-.146-.128-.17-.266-.17s-.21.093-.21.15c0 .152.154.317.222.317.038.002.253-.117.253-.296zm.208.05c-.085 0-.133.102-.133.277 0 .06.072.103.114.103.027 0 .092-.064.092-.262 0-.06-.02-.116-.074-.116zm.31.17c-.146 0-.093.325-.093.433 0 .106-.04.16-.04.16.03.055.025.206.123.206.056 0 .137-.084.137-.294 0-.317.005-.506-.127-.506zm.252.084l-.02.193.13.022.034-.11c-.036-.02-.067-.125-.144-.104zm-2.062.302c.072.83.57 1.182.57 1.182l.098-.05s-.25-.476-.524-1.358l-.144.226zm.344-.336c.218.892.485 1.413.597 1.442 0 0 .075-.13.075-.9 0 0-.19-.808-.673-.542zm.866.336c.04.913-.106.897-.106 1.037 0 .227.388-.063.388-.64 0-.68-.282-.397-.282-.397zM9.696 7.905c-.258.357.165.73.165.73s.156.01.242-.076c0 0-.133-.488-.406-.655zm.618.33c0-.052-.073-.046-.073-.425 0-.3-.338-.188-.338-.028s.275.357.275.474c0 0 .137.05.137-.02zm.269-.198c0-.604-.207-.5-.207-.283 0 .242.136.353.207.283zm.199-.441c-.075.166-.02.412-.02.582 0 .176.116.17.17.14-.066-.134.116-.595-.15-.722zm.268.09c-.034.215.034.598.034.598s.14.06.187-.014c-.01-.076-.01-.247-.01-.348 0-.258-.21-.236-.21-.236zm.385.199c-.053.334.062.51.062.51.042-.024.073-.008.073-.29 0-.283-.135-.22-.135-.22zM16.5 2.89c.238-.12-.01-.432-.18-.335-.708.46-.783 1.16-.783 1.16s.063.104.233.076c0 0 .378-.727.73-.9zm-.552.907s.017.084.123.084c.202 0 .61-.432.61-.784 0-.072-.107-.075-.107-.075-.373.242-.625.777-.625.777zm.932-.839c.254 0 .453-.262.453-.317 0-.054-.056-.092-.155-.092s-.362.284-.362.364c0 .017.012.046.065.046zm-1.416 1.267s.073-.054.194-.047c-.076-.24-.212-.182-.212-.182-.054.08.018.23.018.23zm.959.63c.088-.38-.302-.777-.302-.777-.274-.02-.282.076-.282.076s.196.7.585.7zm-.097-.899s.092.59.358.59c.025-.09-.083-.59-.358-.59zm.234-.206s.154.44.317.44c0 0 .062-.293-.214-.53-.086 0-.102.09-.102.09zm.602.115c0-.213-.34-.59-.34-.59l-.083.165.328.494s.094.047.094-.07zm-.265-.725l.31.54s-.01-.308-.242-.59c0 0-.068-.007-.068.05zm-1.794.362s-.385-.203-.688-.29l-.02.063s.167.254.708.227zm.179-.089c.028.012.114-.077.055-.116-.07-.046-.61-.345-.776-.392-.09.094-.04.15-.04.15l.762.358zm.13-.247c.043.023.113-.116.068-.146a5.813 5.813 0 0 0-.828-.48c-.074.1-.05.187-.05.187l.81.44zm.208-.322c0-.14-.607-.607-.702-.607s-.138.117-.138.117l.77.55c.025.018.07-.044.07-.06zm.198-.18l-.564-.646c-.075-.085-.205.076-.205.076l.637.625c.06.056.162-.026.13-.056zm.152-.241l-.475-.645c-.12 0-.145.103-.145.103l.516.55c.066.07.103-.007.103-.007zm.006-.343l-.15-.32c-.014-.03-.118-.026-.118.035 0 .046.108.285.268.285z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.282 14.426a.316.316 0 1 0-.632 0 .316.316 0 0 0 .632 0zm-.565 0a.248.248 0 0 1 .497 0c0 .14-.11.25-.25.25a.248.248 0 0 1-.247-.25z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.096 14.607l-.07-.153a.11.11 0 0 0 .07-.102c0-.06-.05-.106-.108-.106h-.152v.36h.068v-.146h.05l.067.147h.076zm-.11-.215h-.083v-.078h.084a.04.04 0 0 1 .04.04.04.04 0 0 1-.04.038z",
    __self: this
  }));
};

LogoPIT.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoBOS = function LogoBOS(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    __self: this
  }, ".bos-bg", "{", "fill:#111", "}", ".bos-fg", "{", "fill:#fcb514", "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "reg",
    className: "bos-bg",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.147 14.56a.41.41 0 1 0 .003-.824.41.41 0 0 0-.003.823zm0-.735a.322.322 0 1 1 .004.644.322.322 0 0 1-.003-.645z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.067 14.192h.063l.09.19h.098l-.094-.2a.14.14 0 0 0-.046-.27h-.2v.47h.09v-.19zm0-.19h.11a.05.05 0 0 1 .05.05.05.05 0 0 1-.05.052h-.11V14z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "bos-fg",
    d: "M12 16a8 8 0 0 0 0-16 8 8 0 0 0 0 16z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "bos-bg",
    d: "M12 15.702A7.7 7.7 0 0 0 19.702 8 7.702 7.702 0 1 0 12 15.702z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "bos-fg",
    d: "M16.935 3.68a6.355 6.355 0 0 0-.615-.612L14.986 4.4l.624.605 1.325-1.324zm-4.5-2.222A6.275 6.275 0 0 0 12 1.44a6.3 6.3 0 0 0-.435.017v2.108h.87V1.458zM8.32 3.707l-.64-.64c-.22.19-.423.396-.614.614L8.32 4.936V3.707zm-.638 9.227l.64-.64v-1.23L7.068 12.32c.19.217.395.423.614.614zm1.192-5.368H5.458c-.01.143-.017.288-.017.434s.008.29.018.435h3.416v-.87zM15.23 8l.446.435h2.867c.01-.144.017-.29.017-.435s-.007-.29-.016-.434h-2.867L15.23 8zm-.244 3.6l1.333 1.334c.218-.19.423-.396.613-.614l-1.324-1.324-.624.605zm-3.421 2.942c.145.01.29.017.435.017a6.3 6.3 0 0 0 .435-.018v-2.106h-.87v2.106z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "bos-fg",
    d: "M9.21 10.36l-.553.537v1.2h5.336l1.35-1.312V8.58L14.747 8l.596-.58V5.214L13.993 3.9H8.657v1.203l.554.538v4.72z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M11.208 12.436H8.686l-.728.728c.918.72 2.032 1.2 3.25 1.347v-2.074zm2.922 0h-1.337v2.074a6.532 6.532 0 0 0 3.25-1.347L14.73 11.85l-.6.586zm-5.256-2.43V8.792H5.49a6.524 6.524 0 0 0 1.347 3.25l2.037-2.036zm0-4.011L6.837 3.958a6.533 6.533 0 0 0-1.347 3.25h3.384V5.995zM14.73 4.15l1.312-1.313a6.53 6.53 0 0 0-3.25-1.346v2.076h1.336l.6.584zm.95 4.643v1.766l1.483 1.482a6.535 6.535 0 0 0 1.348-3.25h-2.83zm-4.472-5.228V1.49a6.523 6.523 0 0 0-3.25 1.347l.73.73h2.52zm4.472 3.643h2.83a6.53 6.53 0 0 0-1.347-3.25L15.68 5.442v1.766z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "bos-bg",
    d: "M8.935 11.015v.807h4.946l1.186-1.154v-1.97L14.35 8l.715-.697v-1.97L13.88 4.18H8.935v.805l.554.538v4.954l-.555.538z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "bos-fg",
    d: "M13.795 10.14V9.105l-.543-.53h-2.58v2.092h2.58l.543-.527zm0-3.245V5.86l-.543-.528h-2.58v2.09h2.58l.543-.527z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "bos-bg",
    d: "M13.518 5.98l-.38-.37h-2.187v1.535h2.19l.378-.368V5.98zm0 3.243l-.38-.368h-2.187v1.534h2.19l.378-.368v-.8z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M13.18 6.636V6.12l-.178-.173h-1.715v.862h1.715zm0 3.244v-.516l-.178-.173h-1.715v.863h1.715z",
    __self: this
  }));
};

LogoBOS.defaultProps = {
  id: "Layer_2",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoBUF = function LogoBUF(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    __self: this
  }, ".buf-silver", "{", "fill:#adafaa", "}", ".buf-bg", "{", "fill:#002654", "}", ".buf-fg", "{", "fill:#fcb514", "}", ".buf-st3", "{", "fill:#fff", "}", ".buf-st4", "{", "fill:#cf0a2c", "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-silver",
    d: "M20 8c0-4.41-3.59-8-8-8S4 3.59 4 8s3.59 8 8 8 8-3.59 8-8z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-bg",
    d: "M12 .1C7.644.1 4.1 3.644 4.1 8s3.544 7.9 7.9 7.9 7.9-3.544 7.9-7.9S16.356.1 12 .1z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-silver",
    d: "M12 .862C8.064.862 4.862 4.064 4.862 8S8.064 15.138 12 15.138 19.138 11.936 19.138 8 15.936.862 12 .862z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "reg",
    className: "buf-bg",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.994 13.928a.374.374 0 1 0 0 .75.374.374 0 0 0 0-.75zm0 .67a.294.294 0 1 1 0-.59.294.294 0 0 1 0 .59z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.147 14.216a.127.127 0 0 0-.127-.127h-.18v.427h.08v-.174h.058l.08.174h.09l-.085-.18a.128.128 0 0 0 .084-.12zm-.127.046h-.1v-.093h.1c.026 0 .047.02.047.046 0 .025-.02.046-.047.046z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-bg",
    d: "M12 10.112a51.815 51.815 0 0 0 4.95-4.273h-.034c-.604 0-.743-.69-.93-.69-.076.006-.36.096-.532.17.113.04.22 0 .353.086.173-.016.303.068.303.282 0 .213-.047.496-.453.496-.555 0-.57-.544-.947-.544-.115 0-.514.174-.85.174-.426 0-.698-.31-1.06-.31-.14 0-.175.122-.175.185 0 .162.2.218.2.394a.18.18 0 0 1-.096.16c.05.037.094.084.094.16 0 .03-.01.056-.02.08.077-.06.146-.106.225-.106.253 0 .366.43.366.595 0 .267-.252.292-.474.292-.207 0-.662.192-.85.192-.187 0-.466-.16-.497-.36-.074.097-.217.163-.395.163-.196 0-.572-.217-.79-.217-.17.016-.476-.007-.476-.408 0-.024.004-.045.01-.065-.25.13-.592.02-.592.02-.422.21-.482-.023-.48-.112-.09.067-.2.197-.35.197-.244 0-.305-.243-.448-.377-.057-.06-.208-.117-.287-.205-.135-.135-.263-.36-.72-.726-.127-.1-.235-.463-.235-.79 0-.607.092-1.223 1.193-1.503 1.125-.284.912-1.722 3.01-1.722.592 0 1.08.112 1.57.29-.134-.068-.194-.142-.167-.24.025-.09.1-.263 1.822.21 1.04.287 1.858.56 1.783.835-.09.326-.708-.034-1.973-.38-.506-.14-.915-.233-1.198-.322.878.355 1.83.89 3.46 1.357.57.147.937.16.937.458a.19.19 0 0 1-.064.143c.326-.022.443.404-.26.404-.397 0-.685-.155-.685-.367a.24.24 0 0 1 .13-.216 2.97 2.97 0 0 0-.537-.103c.025.088.055.2.055.34 0 .272-.062.398-.085.553.12-.022.24-.08.334-.08.403 0 .174.59.672.652.19.036.185.174.185.174.187-.036.316-.022.316.354 0 .024 0 .047-.002.07.46-.467.712-.743.72-.753a.208.208 0 0 1 .164-.07C17.002 2.46 14.672.962 12 .962S6.998 2.46 5.807 4.66a.212.212 0 0 1 .163.07c.026.03 2.34 2.584 6.03 5.382zm.564-2.4c2.1-.777 2.905-1.194 3.013-.902.106.288-1.014.887-2.743 1.526-1.035.383-1.22.174-1.273.028-.067-.184-.008-.278 1.004-.652zm5.809-2.695a1.07 1.07 0 0 1-.3.716c-.028.03-2.292 2.53-5.384 4.892.16.118.357.26.547.395a.18.18 0 0 1 .027-.07c.07-.11.262-.153.44-.042.27.172.28.43.228.726a.237.237 0 0 1 .188.126s.092-.01.174.12c0 0 .097-.008.175.122 0 0 .09-.013.174.12 0 0 .096-.007.175.122 0 0 .095-.01.174.12 0 0 .094-.01.175.122 0 0 .094-.01.174.12 0 0 .09-.01.175.122.003 0 .007-.002.01 0 .12.02.2.126.217.272.158-.144.315-.227.518-.1a.46.46 0 0 1 .167.564 7.028 7.028 0 0 0 1.94-8.447zm-3.313 8.249s-.098.01-.176-.12c0 0-.092.01-.175-.122 0 0-.096.008-.176-.12 0 0-.096.008-.175-.122 0 0-.095.01-.176-.12 0 0-.095.01-.175-.12 0 0-.092.01-.176-.12-.004-.002-.008 0-.012 0l-.025-.006c-.013.34.092.68.545.967.414.26.7.207.928.056a.282.282 0 0 1-.038-.052s-.09.01-.173-.122z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-bg",
    d: "M11.265 6.078c-.232 0-.325.183-.328.22 0 .042.035.093.04.15 0 0 .092-.093.197-.093.203 0 .38.33.436.51.02-.084.04-.196.04-.343 0-.275-.2-.444-.385-.444zM7.735 12.9c.203-.128.36-.045.518.1.017-.147.096-.254.216-.274.003 0 .007.002.01 0 .084-.13.176-.12.176-.12.08-.13.175-.12.175-.12.082-.132.176-.122.176-.122.08-.13.175-.12.175-.12.08-.13.176-.122.176-.122.083-.133.175-.12.175-.12.08-.13.176-.122.176-.122.083-.13.174-.12.174-.12a.24.24 0 0 1 .163-.124c.008-.002.017-.002.025-.003-.052-.296-.043-.554.23-.726.176-.11.368-.07.438.04a.195.195 0 0 1 .027.072c.19-.136.387-.278.548-.396-3.092-2.362-5.356-4.86-5.383-4.89a1.07 1.07 0 0 1-.3-.716 7.025 7.025 0 0 0 1.942 8.445.46.46 0 0 1 .166-.563zm2.255-.36c-.08.13-.174.12-.174.12-.08.13-.175.12-.175.12-.078.132-.174.122-.174.122-.08.13-.175.12-.175.12-.08.134-.174.122-.174.122-.078.13-.175.12-.175.12-.08.132-.173.122-.173.122a.282.282 0 0 1-.038.05c.228.152.513.206.928-.055.453-.285.557-.625.545-.966l-.025.006c-.004 0-.008-.002-.012 0-.084.132-.175.12-.175.12z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-bg",
    d: "M13.985 13.827c-.83-.523-.83-1.254-.734-1.82-.39-.26-.903-.614-1.25-.867-.347.252-.86.607-1.25.868.094.565.093 1.296-.735 1.82-1.015.64-1.634.02-1.838-.148a.48.48 0 0 1-.205.087c1.142.8 2.53 1.27 4.028 1.27s2.886-.47 4.028-1.27a.493.493 0 0 1-.205-.087c-.204.167-.822.787-1.838.147zM9.937 5.7c-.13 0-.17.125-.17.166 0 .296.225.177.36.358.047-.124-.076-.176-.076-.312 0-.04.017-.07.017-.098 0-.072-.063-.114-.13-.114z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-bg",
    d: "M12.8 5.43c.386 0 .655.31 1.06.31.342 0 .712-.175.85-.175.43 0 .425.544.947.544.268 0 .378-.123.378-.42 0-.2-.12-.206-.228-.206-.04 0-.095-.064-.22-.064-.14 0-.26-.06-.292-.098.105-.08.598-.247.687-.247.28 0 .342.69.935.69.158 0 .32-.042.32-.35 0-.24-.045-.312-.163-.294-.09.02-.17.03-.17.03.045-.088.028-.164-.105-.19-.556-.087-.337-.652-.66-.652-.113 0-.416.154-.416.045 0-.115.09-.296.09-.593 0-.197-.077-.42-.077-.42.283 0 .686.106.868.183-.116.02-.285.062-.285.216 0 .162.268.29.61.29.556 0 .496-.25.292-.25-.21 0-.288-.02-.318-.035.097-.036.27-.04.27-.185 0-.244-.323-.232-.88-.385-2.49-.684-3.57-1.746-5.276-1.746-2.074 0-1.807 1.418-2.993 1.72-1.05.264-1.137.826-1.137 1.427 0 .324.108.653.206.73.245.21.414.348.727.733.057.064.22.135.288.203.142.142.2.355.395.355.173 0 .296-.244.53-.308-.056.054-.107.117-.107.192 0 .172.196.128.4.032.456.12.618-.01.74-.16.025-.028.02-.07-.006-.098-.148-.137-.368-.06-.368-.39 0-.065.058-.242.246-.242.107 0 .247.087.197.252-.032.104.077.178.077.258 0 .296-.223.315-.223.502 0 .338.248.346.393.333.232 0 .627.216.796.216.212 0 .373-.1.373-.23 0-.103-.207-.525-.38-.525-.094 0-.166.118-.22.118-.04 0-.06-.014-.064-.02.05-.082-.028-.133-.028-.23 0-.068.126-.296.403-.296.222 0 .46.2.46.52 0 .283-.082.473-.082.54 0 .17.267.32.428.32.176 0 .616-.19.85-.19.25 0 .398-.04.398-.217 0-.158-.11-.52-.29-.52-.16 0-.393.358-.69.358a.37.37 0 0 1 .088-.127c.19-.094.32-.173.32-.28 0-.095-.127-.128-.197-.187.13-.013.197-.043.197-.136 0-.134-.2-.192-.2-.395.002-.13.088-.26.253-.26zm3.424 7.534c-.212-.134-.375.02-.563.216l.007-.028c.03-.18-.033-.332-.15-.352-.013-.003-.027.002-.04.004-.062-.16-.175-.12-.175-.12-.058-.16-.175-.12-.175-.12-.062-.16-.175-.122-.175-.122-.057-.16-.175-.12-.175-.12-.064-.163-.175-.122-.175-.122-.06-.16-.175-.12-.175-.12-.057-.16-.175-.122-.175-.122-.062-.164-.176-.12-.176-.12-.026-.07-.072-.117-.132-.127a.155.155 0 0 0-.112.026c.064-.324.09-.6-.17-.765-.135-.085-.284-.06-.333.018-.06.095.056.177.1.235.176.222-.746 1.69.595 2.537 1.023.645 1.58-.015 1.794-.178.103.082.32.22.488-.046.133-.207.098-.457-.084-.572zm-.823.47c-.254.21-.583.337-1.098.012-.543-.343-.614-.764-.57-1.168.026.037.06.06.103.068.014.003.028-.002.042-.004.06.16.174.12.174.12.06.16.176.12.176.12.062.16.175.122.175.122.058.16.176.12.176.12.064.163.175.122.175.122.06.16.176.12.176.12.057.16.175.122.175.122.063.163.177.12.177.12.025.066.068.112.124.125zm-5.427.329c1.34-.846.42-2.315.594-2.537.046-.058.162-.14.102-.235-.048-.076-.198-.102-.334-.016-.26.164-.234.44-.17.765a.158.158 0 0 0-.112-.026c-.06.01-.105.057-.132.126 0 0-.114-.043-.176.12 0 0-.118-.037-.175.122 0 0-.115-.038-.174.12 0 0-.11-.04-.175.122 0 0-.117-.038-.174.12 0 0-.113-.037-.175.122 0 0-.116-.038-.174.12 0 0-.113-.04-.174.12-.014 0-.028-.005-.042-.003-.115.02-.18.17-.148.352 0 .01.004.02.005.028-.188-.195-.35-.35-.563-.216-.182.114-.217.365-.085.574.167.268.384.13.488.047.218.16.773.82 1.796.176zm.293-1.485c.044.404-.026.826-.57 1.168-.513.325-.843.198-1.098-.013.055-.013.098-.06.123-.125 0 0 .114.043.176-.12 0 0 .117.036.174-.122 0 0 .116.038.175-.12 0 0 .11.04.174-.122 0 0 .118.038.175-.12 0 0 .112.037.174-.122 0 0 .118.038.175-.12 0 0 .112.04.173-.12.014 0 .028.005.042.003a.152.152 0 0 0 .102-.067z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-bg",
    d: "M11.437 10.627c-.273.2-.592.43-.878.63l.128.698c.415-.273.917-.62 1.312-.91.395.29.897.637 1.312.91l.13-.698c-.286-.2-.605-.43-.878-.63 3.127-2.377 5.426-4.914 5.453-4.944a1 1 0 0 0 .27-.843c-.01-.098-.116-.148-.2-.06-.027.03-2.365 2.61-6.087 5.427C8.277 7.39 5.94 4.81 5.914 4.78c-.085-.088-.19-.038-.2.06a.998.998 0 0 0 .27.843c.027.03 2.326 2.567 5.453 4.944z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-bg",
    d: "M12.808 8.265c1.322-.49 2.782-1.2 2.698-1.43-.07-.187-1.107.28-2.915.947-.843.312-1.01.41-.957.555.037.103.198.29 1.175-.072zm3.142-5.839c.053-.19-.8-.485-1.73-.74-1.27-.35-1.732-.32-1.73-.26.004.18.49.265 1.582.566 1.19.327 1.82.65 1.88.434z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-fg",
    d: "M12 .2A7.8 7.8 0 1 0 19.8 8 7.8 7.8 0 0 0 12 .2zm0 15.038A7.24 7.24 0 1 1 12 .763a7.24 7.24 0 0 1 0 14.475z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-fg",
    d: "M13.848 12.272c.028.005.057-.008.083-.034.023.197.136.17.176.12.023.198.135.17.175.122.024.197.136.17.176.12.022.197.135.17.175.122.023.196.136.168.176.12.023.198.135.17.175.122.023.197.136.17.176.12.022.197.135.17.175.122.008.084.042.146.092.155.07.013.147-.085.17-.22s-.015-.25-.086-.263c-.028-.005-.057.008-.083.033-.023-.197-.135-.17-.175-.12-.022-.197-.135-.17-.175-.122-.022-.196-.135-.168-.175-.12-.022-.198-.135-.17-.175-.122-.022-.196-.135-.168-.175-.12-.023-.198-.135-.17-.175-.122-.022-.197-.135-.17-.175-.12-.022-.198-.135-.17-.175-.122-.007-.084-.04-.146-.09-.155-.072-.012-.148.087-.17.22-.024.134.015.252.085.265zm-5.27 1.088c.05-.01.084-.07.092-.155.04.048.153.076.175-.12.04.047.152.075.175-.122.04.048.153.075.175-.12.04.047.153.075.175-.122.04.05.153.077.175-.12.04.047.153.076.175-.12.04.047.152.075.175-.122.04.048.153.076.175-.12.026.024.056.037.083.033.07-.01.11-.13.086-.263-.024-.134-.1-.232-.17-.22-.05.01-.085.07-.092.155-.04-.048-.153-.076-.175.12-.04-.047-.153-.075-.175.122-.04-.048-.153-.076-.175.12-.04-.047-.153-.075-.175.122-.04-.047-.153-.076-.175.12-.04-.047-.153-.075-.175.122-.04-.047-.153-.075-.175.12-.04-.047-.153-.075-.175.122-.026-.026-.055-.04-.083-.033-.07.012-.11.13-.086.264.02.134.097.232.168.22z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-fg",
    d: "M16.184 13.028c-.44-.278-.737 1.23-1.922.482-1.307-.824-.025-2.086-.64-2.474-.105-.066-.207-.04-.23-.006-.02.036.046.08.1.148.227.288-.742 1.69.574 2.52 1.126.71 1.674-.256 1.767-.198.075.048.26.24.412-.003.136-.216.045-.402-.06-.47zm-5.674-1.85c.052-.067.12-.112.097-.148-.022-.034-.124-.06-.23.006-.613.388.67 1.65-.638 2.474-1.186.748-1.483-.76-1.923-.482-.106.067-.198.253-.06.47.152.242.335.05.41.002.094-.058.642.908 1.768.198 1.315-.83.346-2.232.574-2.52z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-st3",
    d: "M18.212 4.85c-.012-.077-.07-.018-.07-.018S15.798 7.438 12 10.302c-3.797-2.864-6.142-5.47-6.142-5.47s-.058-.06-.07.02c0 0-.085.43.252.78 0 0 2.327 2.584 5.523 4.996-.3.22-.606.442-.92.663l.1.538c.43-.284.85-.577 1.257-.875.408.298.828.592 1.258.875l.1-.537c-.315-.22-.622-.442-.92-.662 3.194-2.412 5.522-4.996 5.522-4.996.337-.35.252-.78.252-.78z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-st3",
    d: "M7.14 5.25c.48.38.623.626.734.736.094.093.186.102.288.204.15.15.198.333.34.333.15 0 .312-.323.63-.323.215 0-.13.143-.13.283 0 .12.262-.044.32-.044.095 0 .466.165.684-.13-.1-.098-.39-.058-.39-.444 0-.106.09-.318.322-.318.187 0 .328.164.27.35-.02.06.08.13.08.236 0 .324-.223.36-.223.502 0 .286.202.264.313.257.26 0 .664.217.8.217.167 0 .3-.072.3-.155s-.196-.45-.304-.45c-.062 0-.128.118-.222.118-.104 0-.164-.065-.127-.13.02-.037-.04-.097-.04-.194 0-.12.164-.374.48-.374.263 0 .537.228.537.595 0 .306-.083.482-.083.542 0 .113.214.245.35.245s.65-.192.816-.192.356.012.356-.14-.105-.444-.216-.444-.365.36-.69.36c-.04 0-.082-.01-.082-.063 0-.055.087-.18.132-.206s.284-.128.284-.215c0-.05-.22-.11-.22-.206 0-.1.22-.02.22-.116 0-.086-.2-.165-.2-.395 0-.166.114-.337.327-.337.413 0 .672.31 1.06.31.33 0 .69-.175.85-.175.482 0 .47.544.947.544.223 0 .3-.084.3-.345 0-.142-.068-.13-.15-.13s-.096-.062-.22-.062c-.18 0-.38-.094-.38-.186 0-.096.676-.312.774-.312.347 0 .38.69.935.69.14 0 .245-.03.245-.275s-.04-.223-.084-.217-.27.07-.27-.002c0-.07.107-.14-.02-.162-.59-.098-.42-.65-.65-.65-.11 0-.49.207-.49-.03 0-.132.09-.31.09-.594 0-.312-.177-.497-.005-.497.375 0 1.032.192 1.032.284 0 .066-.37.028-.37.193 0 .098.212.216.535.216s.453-.1.292-.1-.41-.005-.41-.116c0-.112.287-.062.287-.18 0-.172-.292-.16-.826-.31-2.66-.758-3.584-1.744-5.254-1.744-2.055 0-1.726 1.4-2.974 1.717-.987.252-1.078.756-1.078 1.357 0 .337.114.622.177.672zm.945.52c-.11 0-.082-.077-.082-.077.143-.193.07-.653.247-.653.1 0-.043.102-.043.22 0 .135.197.096.197.252 0 .1-.16.258-.32.258zm.425.653s-.082-.06-.082-.102c0-.097.166-.125.166-.095 0 .083-.084.198-.084.198zm.134-1.778c0 .068-.14.23-.227.23-.067 0-.174-.26-.174-.282s.03-.066.13-.066c.097 0 .27.05.27.118zm-.8-1.033c.394 0 .6.233.6.487s-.215.44-.452.44c-.15 0-.196-.128-.196-.192 0-.088.13-.165.13-.27 0-.128-.157-.217-.315-.217-.266 0-.446.23-.446.117 0-.135.27-.365.68-.365zm4.773 4.242c-.676.25-.95.354-.913.458.02.057.16.222 1.078-.117.914-.34 2.715-1.164 2.652-1.332-.03-.083-1.303.43-2.817.99zm1.475-5.934c1.115.306 1.758.59 1.786.486s-.858-.423-1.677-.648c-.817-.225-1.667-.336-1.64-.31.086.082.416.165 1.532.47z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "buf-st4",
    d: "M8.212 5.467c-.027 0-.052.045-.052.06 0 .018.042.076.074.076.018 0 .04-.008.04-.024 0-.066-.002-.113-.062-.113z",
    __self: this
  }));
};

LogoBUF.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoMTL = function LogoMTL(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    __self: this
  }, ".mtl-st0", "{", "fill:#af1e2d", "}", ".mtl-st1", "{", "fill:#fff", "}", ".mtl-st2", "{", "fill:#192168", "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "reg",
    className: "mtl-st2",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20.233 12.332a.384.384 0 1 0 0 .77.384.384 0 0 0 0-.77zm0 .686a.302.302 0 1 1-.002-.604.302.302 0 0 1 .003.604z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20.39 12.627a.13.13 0 0 0-.13-.13h-.186v.438h.083v-.18h.06l.083.18h.09l-.087-.186a.13.13 0 0 0 .088-.123zm-.13.048h-.103v-.096h.103c.027 0 .048.02.048.047s-.02.048-.048.048z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "mtl-st2",
    d: "M18.94 7.873l1.425-1.497-.688-3.168-3.036-.9-.31.288c-1.024-.338-3.216-.742-4.682-.74-4.98.01-8.768 2.742-8.782 6.112-.016 3.535 3.413 6.176 8.825 6.176 3.79 0 7.67-2.02 9.31-3.17l-2.06-3.1z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "mtl-st1",
    d: "M18.406 8.202s-2.15 1.468-4.52 1.91V5.947c2.573.324 4.098 2.006 4.098 2.006L19.7 6.18l-.55-2.485-2.345-.686-.297.323c-.95-.372-2.914-.854-5.088-.854-4.354 0-7.91 2.467-7.917 5.51-.006 2.966 3.012 5.533 7.884 5.533 4.5 0 7.75-2.145 8.767-2.72l-1.748-2.6zm-7.427-.785V5.71c.594-.028 1.255.002 1.723.058v1.65H10.98zm1.722 1.13v1.717a10.53 10.53 0 0 1-1.724.036V8.546h1.724zM9.742 5.81v4.372c-.718 0-3.008-.842-3.008-2.168 0-1.64 2.34-2.093 3.008-2.203z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "mtl-st1",
    d: "M9.113 9.42V6.573c-.82.24-1.743.704-1.743 1.44 0 .505.778 1.114 1.743 1.407zm8.173-1.28a6.582 6.582 0 0 0-2.766-1.45v2.63a12.375 12.375 0 0 0 2.766-1.18zm-5.844-1.223h.805V6.25l-.805-.032zm-.018 2.155h.828v.7h-.828z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "mtl-st0",
    d: "M18.28 8.82c-2.812 1.65-4.686 1.972-6.97 1.95-3.21-.03-5.038-1.314-5.038-2.844 0-1.38 1.677-2.694 5.104-2.694 2.306 0 5.085.618 6.57 2.082l1.235-1.26-.42-2-1.822-.532-.33.374c-1-.4-2.69-.954-5.286-.954-3.92 0-7.356 2.264-7.356 5.004 0 2.862 2.993 5.106 7.24 5.106 4.308 0 6.836-1.623 8.296-2.39l-1.22-1.843z",
    __self: this
  }));
};

LogoMTL.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoOTT = function LogoOTT(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.9 5.91l-1.533-2.097-.498.23s-.333-.126-.906-.202l.36-.362v-.824h-.254c.443-.72-.256-1.465 1.022-2.334H9.79c-2.495.84-1.874 5.522-1.874 5.522l.478-.18s-.298.624-.172 1.094c0 0-.328.712.07 1.392l-.235.332.05 1.524c-.332.58-1.59.265-1.707.916-.05.275-.714.505-.714.505-.698 2.08 4.616 2.47 5.49 3.75A5.005 5.005 0 1 0 14.9 5.91z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.016 2.433L9.77.847c-1.752.748-1.518 4.338-1.518 4.338l1.782-2.587h1.644c.284-.563-.063-1.46.566-1.845h-2.17l-.058 1.68zm-.543 10.745c.718.16 1.678.77 1.678.77-.07-.255-.274-.5-.274-.5a4.98 4.98 0 0 1-1.93-1.13l-1.84-1.012s1.097.006 1-.805c-.476.35-1.388.214-1.388.59 0 .413.724.833 2.148 1.737l-2.203-1.01.132-.144-.152-.295c-.016.113-.575.115-.575.492 0 1.33 4.703 1.825 5.566 3.082.102-.653-1.184-1.275-2.16-1.774zm5.734-2.424s.475.41.475.55c0 .142-.995.73-.995.73.334-.462.604-.685.604-.884 0-.197-.352-.25-.447-.628-.36.58-.378.953-.378.953l.177 1.214-.482-.06c-1.01 1.01-.898 2.117-.898 2.117.635-1.837 2.783-1.863 2.783-3.598-.162-.13-.838-.396-.838-.396z",
    fill: "#CE1126",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M13.246 10.815l.302-.146-.33-1.283.133-.394.906-.348.263.112-.037-.412s-.26-.25-.56-.25c-.293 0-.41.21-.81.697 0 0-.232-.606-1.173-.606-.796 0-1.75.37-1.75.37-.17.23-.147.72 1 .633l-.162.753.636.09s-.81 1.788-.365 2.218c.42.407.855.844 1.005.844.592 0 .965-.154 1.038-.228.033-.033.056-.106.056-.2 0-.33-.33-.367-.588-.367-.558 0-.76.194-.76.194l.107-.36c.07-.265 1.195-.126 1.195-.126l-.026-.35-.225.034-.473-.073-1.115.03-.055-.042 1.33-.235.29.06.25-.063-.136-.12-.145.056-.027-.295-.793-.132.625-.217.39.155z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M14.388 9.116l-.252.048c-.104.42-.4.246-.447.145l-.12.433.2.652.165.358-.286.24.22.25.078.182.323-1.063.26-.426c.047-.073-.21-.582-.21-.582l.068-.238zm-2.454 4.661l.71.485.186-.645-.62-.09z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.465 14.472a.295.295 0 0 0 0 .592.297.297 0 0 0 0-.592zm0 .528a.232.232 0 1 1 0-.463.232.232 0 0 1 0 .463z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.586 14.7a.1.1 0 0 0-.1-.102h-.143v.338h.062V14.8h.046l.065.137h.07l-.067-.143a.1.1 0 0 0 .068-.095zm-.1.036h-.08v-.074h.08c.02 0 .036.017.036.037s-.015.036-.037.036z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#BF910C",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.633 8.022l-1.44-.824-2.877.98s1.066-.277 1.85-.277c.855 0 1.004.46 1.004.46s.264-.475.662-.475c.48 0 .814.28.814.28l-.013-.143zM11.55 3.87l.24-.256h-1.25l-1.044.842.924-1.083h1.517V2.93h-1.65l-1.474 2 .07.343S9.696 3.87 11.55 3.87z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.582 11.396c0-.97.236-1.976.236-1.976s-1.44.1-1.185-1.116c0 0-.314.256-.6.145 0 0 .542-.145.542-.735l.14.43 3.742-1.494 1.473 1.28-.033-.575c-.165.06-.52-.184-.52-.184l.055-.044s.24.123.453.035l-.033-.567-1.62-2.253-.368.138s-.793-.335-1.562-.335c-1.175 0-2.638 1.162-2.638 2.446l.787.057 2.15-1.595-2.16 2.113s-.19-.373-.466-.373c-.19 0-.48.226-.48.78 0 .436.213.65.213.65l-.252.34c.185 2.73-.124 3.01-.685 2.854l1.096.53c0-1.913-.07-2.494.116-2.494.308 0 .276 1.9.357 2.795 0 0 .79.917 2.362 1.067 0 0-1.12-.713-1.12-1.918zm3.561.412l-.184.49.284.046zm1.237-5.232v1.622a3.186 3.186 0 0 1 1.183 2.477 3.197 3.197 0 0 1-2.115 3.005c-.52.85-.376 1.352-.31 1.497a4.573 4.573 0 0 0 3.8-4.502 4.57 4.57 0 0 0-2.557-4.1z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.61 7.04l-.11-.068c-.755.142-.626-.116-.81-.116.072-.07.006-.21.198-.403l-.017-.023c-.467.278-.195.45-.517.617l.012.027c.385-.13.244.34 1.246-.033z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.11 6.558l-.06-.025c-.545.255-.543.007-.652.04.056-.093-.107-.207.26-.56l-.004-.036c-.64.425-.334.59-.535.793l.018.025c.218-.14.234.255.973-.237zm-1.48.825s-.066-.062-.144-.093c-.428.044-.365-.125-.513-.118.132-.102-.01-.184.095-.287l-.018-.022c-.384.216-.152.354-.376.446l.01.026c.217-.065.19.286.947.047zM9.243 7.17c.223.557-.176.946-.337.946s-.26-.202-.26-.202.12.396.366.396.71-.586.23-1.14z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.578 6.073l-.04-.013c-.425.226-.453.053-.517.07.046-.09-.145-.115.13-.467l-.012-.064c-.597.528-.17.545-.427.76l.03.012c.23-.188.185.2.838-.3zM10.26 4.627c-1.453.72-1.4 1.727-1.4 1.727l.475.022.895-.585c-.637.176-1.663.098.03-1.163zm3.316 1.543c-.78.213-.842-.928-.623-1.166-.86.55.195 1.854.623 1.165zm.486.527l-.043.024c.453.49.455.15.614.29l.02-.036c-.128-.198.054-.38-.36-.81l-.003.043c.233.304.128.467.197.593-.11-.05-.13.152-.425-.103z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.21 6.558l.02-.024c-.133-.226.125-.276-.23-.785l-.015.065c.16.336.023.407.06.484-.06-.017-.115.102-.313-.132l-.034.012c.315.508.385.193.512.378zm3.04 4.499c-.055.276-.28.018-.407.666.098.02.184-.2.31-.176.128.025.126.26.223.28.125-.648-.18-.494-.127-.77z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "17.25",
    cy: "10.675",
    r: ".237",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.384 13.69c.063.077.27-.036.352.063.082.1-.07.28-.006.357.51-.42.174-.495.392-.675-.22.18-.228-.164-.738.256zm1.516-1.362c-.145.243-.27-.076-.605.493.085.05.24-.126.35-.06s.032.285.117.336c.335-.57-.006-.525.137-.768z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.877 13.296c.075.064.26-.083.356 0 .1.084-.02.288.057.353.43-.503.086-.52.27-.733-.184.213-.253-.123-.683.38zm.947-3.729c.138.646.358.384.418.66-.06-.276.25-.127.112-.772-.097.02-.09.256-.217.282-.125.028-.216-.19-.313-.17zm-.549-1.063c.34.566.464.246.61.487-.147-.24.194-.2-.146-.766-.085.05-.004.27-.114.338s-.266-.11-.35-.058z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.594 9.013c.242.614.418.32.52.582-.103-.263.227-.166-.016-.78-.092.036-.047.268-.167.314-.118.047-.243-.153-.336-.117zm.539 2.677c-.1.265-.28-.027-.51.59.092.035.214-.166.335-.12.12.045.08.276.172.31.23-.617-.096-.515.003-.78zm-.573-3.255c-.184-.214.16-.23-.27-.732-.075.064.042.27-.056.353-.1.084-.282-.064-.357 0 .43.5.5.165.682.38zm-.522-.603c.157-.206-.612-.47-.612-.47s.454.676.612.47zM14.77 14.02c.05.087.272.015.334.128s-.12.262-.074.35c.58-.315.266-.453.514-.588-.248.134-.19-.205-.773.11z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.164 14.49s.813.018.736-.23c-.078-.246-.736.23-.736.23zM10.27 8.805l1.264.177c.042.212.37.412.6.09l.346.1-.278.218.533.073.21-.41-1.205-.49-1.47.242z",
    __self: this
  }));
};

LogoOTT.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoTOR = function LogoTOR(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#002868",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.714 11.31l2.165-1.143-.317-.393a.79.79 0 0 1-.134-.62l.964-3.713-3.06-.46-1.843 1.11.922-3.953h-.626c-.194 0-.478-.103-.628-.228L12 .104 9.84 1.91c-.15.124-.432.227-.627.227h-.626l.92 3.954-1.84-1.11-3.06.46.965 3.713c.05.19-.01.47-.134.62l-.316.393 2.164 1.144c.307.162.44.553.293.868l-.536 1.156h4.103v2.56h1.706v-2.56h4.104l-.534-1.156a.67.67 0 0 1 .29-.867z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.536 13.648a.37.37 0 1 0 0 .74.37.37 0 0 0 0-.74zm0 .662a.29.29 0 1 1 0-.58.29.29 0 0 1 0 .58z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.688 13.934a.127.127 0 0 0-.125-.126h-.18v.423h.08v-.17h.057l.08.17h.088l-.083-.18a.126.126 0 0 0 .083-.116zm-.125.045h-.1v-.094h.1c.025 0 .046.02.046.047s-.02.046-.047.046z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9.968 9.654l.084.67h.365l-.177-1.41h-.365l-.21.6-.21-.6H9.09l-.177 1.41h.365l.084-.67.303.67zm1.054-.739l-.45 1.408h.364l.07-.222h.535l.072.223h.365l-.45-1.408h-.505zm3.594.867h.3v-.327h-.3v-.213h.442l-.074-.327h-.733v1.408h.764l.073-.327h-.47zm-1.356-.867v1.408h.762l.075-.327h-.472v-1.08zm-1.127 0v1.408h.365v-.44h.124c.268 0 .484-.158.484-.483s-.217-.484-.484-.484h-.49zm.98-1.068l.475.706h.384V7.145h-.365v.705l-.474-.705h-.385v1.408h.365zm1.263.706h.364V7.51h.286v-.365h-.855l-.08.366h.286zM7.44 7.51h.287v1.043h.364V7.51h.287v-.365H7.52zm2.96.452h.024l.254.59h.365l-.268-.62s.233-.068.233-.303c0-.327-.217-.485-.484-.485h-.488v1.408h.365v-.59zm5.425-.852a.737.737 0 0 0-.733.738c0 .407.33.738.733.738a.739.739 0 1 0-.001-1.478zM11.89 8.587c.404 0 .732-.33.732-.738a.736.736 0 0 0-.733-.74.737.737 0 0 0-.735.74c0 .406.33.737.734.737zM9.91 7.85a.736.736 0 0 0-.733-.74.736.736 0 0 0-.733.74c0 .406.33.737.733.737.405 0 .733-.33.733-.738zm1.795 2.836l-.45 1.41h.365l.07-.223h.536l.07.222h.365l-.45-1.41h-.505zm-1.025.868h.3v-.327h-.3v-.214h.44l-.073-.327h-.733v1.41h.762l.074-.33h-.47zm2.89-.541l-.072-.327h-.732v1.41h.364v-.542h.3v-.327h-.3v-.214zm-3.83-.327h-.366v1.41h.762l.073-.33h-.47zm4.3.426c0-.083.147-.115.22-.115.126 0 .22.02.284.036v-.36a1.572 1.572 0 0 0-.283-.02c-.268 0-.583.1-.583.46 0 .44.584.373.584.556 0 .082-.145.114-.22.114-.19 0-.31-.046-.363-.06v.363c.052.016.172.042.364.042.27 0 .586-.1.586-.462 0-.44-.585-.373-.585-.556z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#002868",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ellipse", {
    cx: "9.176",
    cy: "7.849",
    rx: ".369",
    ry: ".374",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.644 7.63a.157.157 0 0 0-.157-.158h-.085v.314h.085c.086 0 .157-.07.157-.157zm1.854 1.612v.314h.085a.157.157 0 0 0 0-.314h-.085zm-.703 2.303h.326l-.162-.51z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ellipse", {
    cx: "15.825",
    cy: "7.848",
    rx: ".368",
    ry: ".374",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "11.889",
    cy: "7.848",
    r: ".374",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.112 9.774h.326l-.163-.51z",
    __self: this
  })));
};

LogoTOR.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoCAR = function LogoCAR(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    __self: this
  }, ".car-silver", "{", "fill:#a4a9ad", "}", ".car-fg", "{", "fill:#111", "}", ".car-high", "{", "fill:#ce1126", "}", ".car-st4", "{", "fill:#fff", "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "reg",
    className: "car-fg",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.52 11.093a.42.42 0 0 0 0 .837.42.42 0 0 0 0-.837zm0 .747a.327.327 0 0 1-.328-.328.328.328 0 1 1 .328.328z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.69 11.414a.142.142 0 0 0-.14-.142h-.203v.478h.09v-.193h.064l.092.193h.1l-.095-.202a.142.142 0 0 0 .094-.134zm-.14.052h-.112v-.104h.112c.028 0 .052.023.052.052 0 .03-.024.052-.052.052z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "car-silver",
    d: "M22.005 5.487c-.275-1.92-1.953-2.517-2.962-2.704l.863-.567s-4.51-.98-10.34.863C4.238 4.76 1.55 7.4 1.996 10.512c.275 1.92 1.953 2.518 2.962 2.704l-.863.567s4.51.98 10.34-.862c5.328-1.684 8.015-4.322 7.57-7.435z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "car-st4",
    d: "M21.737 5.57c-.364-2.537-3.5-2.58-3.5-2.58l.906-.595s-4.28-.695-9.537.965c-4.642 1.466-7.8 3.88-7.343 7.067.364 2.54 3.5 2.58 3.5 2.58l-.906.597s4.28.695 9.537-.965c4.642-1.467 7.8-3.88 7.343-7.07z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "car-high",
    d: "M21.25 5.725c-.464-3.24-5.484-2.553-8.08-1.734-1.39.44-2.297.885-2.297.885 4.706-1.684 8.004-.482 8.004-.482-1.562-.11-3.03.396-3.03.396s1.578.317 1.787 1.78c.277 1.932-1.368 4.144-6.438 5.745-2.764.873-5.09 1.01-5.09 1.01s3.28.483 8.232-1.08c4.582-1.447 7.305-3.782 6.912-6.52z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "car-high",
    d: "M12.006 9.88c1.406-.443 2.602-1.104 3.244-1.737.355-.35.542-.69.5-.98a.537.537 0 0 0-.14-.29c-.49-.53-2.138-.525-4.025.07-2.184.692-3.86 1.91-3.744 2.718.117.813 1.982.91 4.166.22z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "car-fg",
    d: "M11.817 8.998c.912-.287 1.615-.775 1.57-1.088s-.82-.332-1.732-.045c-.912.29-1.615.775-1.57 1.088.044.313.82.333 1.732.045z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "car-fg",
    d: "M5.124 11.607c1.562.11 3.03-.396 3.03-.396s-1.577-.317-1.787-1.78c-.277-1.932 1.368-4.144 6.438-5.746 2.765-.873 5.09-1.01 5.09-1.01s-3.28-.484-8.232 1.08C5.08 5.202 2.358 7.537 2.75 10.274c.464 3.24 5.485 2.554 8.08 1.734 1.388-.438 2.297-.884 2.297-.884-4.705 1.685-8.003.483-8.003.483z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "car-fg",
    d: "M11.29 5.73c-1.74.55-2.65 1.245-2.966 1.975L7.692 9.17s.768-1.377 3.875-2.357c2.342-.74 3.773-.553 4.042.06.075.085.125.18.14.292.042.29-.145.63-.5.98-.587.823-1.707 1.71-2.69 2.31.785-.247 4.31-1.92 4.054-3.704-.238-1.656-2.298-1.976-5.324-1.02z",
    __self: this
  }));
};

LogoCAR.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoFLA = function LogoFLA(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#002654",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.14 15.63a.238.238 0 0 0 .237-.238.238.238 0 0 0-.477 0c0 .132.107.24.24.24m0-.428a.188.188 0 1 1 0 .376.188.188 0 0 1 0-.376",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.092 15.418h.036l.053.11h.057l-.054-.115a.08.08 0 0 0-.027-.157h-.116v.272h.052v-.11zm0-.11h.063c.017 0 .03.013.03.03s-.014.028-.03.028h-.063v-.06z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#002654",
    d: "M19.708 7.76a.2.2 0 0 0-.117-.122l-.3-.095.122-.21a.208.208 0 0 0 .008-.17l-.238-.505a.198.198 0 0 0-.11-.093l-.457-.12.08-.185a.136.136 0 0 0-.02-.133l-.43-.49a.217.217 0 0 0-.132-.064l-.468-.025.05-.156a.122.122 0 0 0-.04-.125l-.55-.432a.35.35 0 0 0-.226-.06l-.596.09a.116.116 0 0 0-.083.07l-.188.6c-.293-.403-.62-.35-.684-.334a.732.732 0 0 0-.212-.407l.304-.042.025-.112-.436.06a1.37 1.37 0 0 0-.16-.103l.176-.195a.88.88 0 0 1-.092-.14l.63-.155.026-.115-.703.175c-.052-.118-.077-.218-.077-.218l.375.07c-.086-.084-.12-.246-.13-.422l.683-.266.028-.126-.71.276c.002-.32.07-.646.07-.646l-.108-.085.77-1.66-1.182.033L13.734 1s-.478-.296-1.44-.45L12 .273l-.293.277c-.963.154-1.44.45-1.44.45l-.873.123L8.21 1.09l.772 1.66-.108.084s.07.327.07.646l-.71-.277.027.125.683.266c-.008.176-.043.337-.13.423l.376-.07s-.027.1-.08.217l-.7-.176.025.115.63.156a.842.842 0 0 1-.09.14l.174.194c-.06.033-.112.07-.158.105l-.438-.062.026.113.304.043c-.313.32-.2.66-.2.66a.954.954 0 0 0-.624.31l-.262-.826a.115.115 0 0 0-.082-.07l-.596-.092a.343.343 0 0 0-.226.06l-.55.432a.124.124 0 0 0-.038.125l.05.156-.47.025a.21.21 0 0 0-.13.065l-.43.49a.138.138 0 0 0-.02.133l.08.186-.456.12a.196.196 0 0 0-.11.092l-.24.505a.208.208 0 0 0 .008.17l.122.21-.3.095a.197.197 0 0 0-.117.12l-.13.464a.13.13 0 0 0 .01.087l.6 1.027s.076.1.427.123c.39.45.985.533.985.533s-.302-.325-.457-.69c.12-.01.52-.042.705-.042.222 0 .382.145 1.047-.018l.218.03c.325.453.96.405 1.772.84v-.126l.13.025s.414.525.7 1.06c0 0-.106 1.368.47 1.77 0 0 .06.062.007.24-.06.19-.068.364-.15.47s-.098.377.044.493c0 0 0 .065.06.108 0 0 .026-.053.032-.086 0 0 .025 0 .047-.008 0 0 .02.037.097.063 0 0 .004.06.057.1 0 0 .026-.056.033-.086 0 0 .08.006.133-.058 0 0 .014.008.04.013 0 0 .01.05.06.102 0 0 .03-.055.036-.096 0 0 .075-.002.115-.056 0 0 .012.002.025 0 0 0 .014.05.057.096 0 0 .033-.068.044-.118 0 0 .114-.034.114-.12s-.057-.347-.057-.347l.068.097s.06-.15-.095-.332c-.04-.29-.142-.477-.142-.477s.093-.093.112-.134c0 0 .113.518.385 1l-.122.622s-.092.13-.18.324c0 0-.187.102-.18.312l.085-.08s-.12.28.01.43c0 0-.018.103.06.17 0 0 .02-.055.032-.094 0 0 .025.007.04-.01 0 0 .056.066.108.097 0 0 0 .09.06.14 0 0 .025-.06.035-.104 0 0 .042.01.074-.023 0 0 .042.026.083.035 0 0 .002.052.058.107 0 0 .026-.063.034-.102 0 0 .075-.004.102-.045l.048.003s.01.062.057.104c0 0 .027-.06.036-.114 0 0 .17-.024.17-.213 0-.392.05-.682.05-.754 0 0 .272.22.604.22.63 0 1.356-.51 1.356-1.67 0-.164.023-.367.023-.367l-.053.042.037-.35-.062.048-.032-.27-.063.035-.045-.19-.056.027-.06-.18-.048.038-.072-.2-.078.116-.1-.152-.035.234-.074-.038-.01.245-.082-.032.005.227-.065-.016.102.307-.066-.003.1.206s.105.314.105.73c0 .467-.31.758-.688.758-.323 0-.615-.34-.615-.34s.013-.354.107-.507c.096-.15.448-.68.51-.952s.352-.433.304-1.577l.6-.838.235-.013v.09c.812-.434 1.645-.417 1.97-.87l.22-.03c.664.162.824.02 1.046.02.186 0 .585.03.704.04-.155.366-.457.69-.457.69s.596-.082.985-.532c.35-.024.427-.123.427-.123l.598-1.028a.125.125 0 0 0 .012-.087l-.132-.46z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.76 12.26s.068.357.185.627c0 0-.007-.434-.028-.897l-.158.27zm-.92-8.316l.19.21s-.048.037-.104.1l.123.048c.02-.02.044-.027.063-.02.033.015.042.07.02.123-.02.054-.066.086-.1.072-.024-.01-.035-.042-.03-.08l-.146-.055a.617.617 0 0 0-.098.23l.292.073c.012-.017.027-.027.044-.027.036 0 .065.047.065.104 0 .06-.028.105-.064.105-.03 0-.056-.033-.063-.08l-.276-.067a.65.65 0 0 0 .067.273l.25.035c.004-.017.014-.03.027-.034.034-.015.08.017.103.07.022.053.014.107-.02.12-.026.014-.062-.007-.086-.044l-.18-.025c.096.09.23.14.402.14.362 0 .6-.165.6-.165v-.075a3.088 3.088 0 0 1-.543-.602l-.482-.473-.055.044zm.39 1.436c.07.49.257.642.257.642s-.042-.165.043-.64c-.065-.066-.282-.057-.3 0m.58.013c0-.04-.15-.09-.155-.05-.016.175.06.302.06.302s.094-.164.094-.252m.031-.008c0 .088.064.215.064.215s.068-.07.068-.22c0-.038-.132-.04-.132.005m1.244-.311l-.18.025c-.025.038-.06.058-.088.046-.033-.014-.04-.068-.018-.122.022-.053.067-.084.1-.07.015.006.023.02.028.035l.25-.036a.635.635 0 0 0 .067-.273l-.277.07c-.007.045-.032.078-.062.078-.036 0-.065-.047-.065-.105 0-.058.028-.104.064-.104.017 0 .032.01.043.026l.293-.072a.574.574 0 0 0-.098-.23l-.144.055c.004.036-.007.068-.03.078-.034.014-.08-.02-.102-.072-.02-.053-.013-.108.02-.122.02-.008.044 0 .064.02l.123-.05a.853.853 0 0 0-.104-.1l.19-.21-.057-.044-.48.473s-.22.332-.544.602l-.004.076s.24.165.603.165c.172 0 .307-.05.404-.14m-.608.305c.085.477.042.642.042.642s.186-.15.258-.64c-.02-.057-.235-.066-.3 0m-.125-.036c-.005-.04-.155.01-.155.05 0 .088.094.25.094.25s.077-.126.06-.3m-.184.041c0-.045-.134-.043-.134-.006 0 .15.067.222.067.222s.067-.127.067-.215m-1.927-.946l-.998-.248-.046.098 1.026.255a.748.748 0 0 1 .02-.105m-.007.428l-.755-.103.114.125.675.094a.738.738 0 0 1-.035-.115m.173-.821l-1.335-.522v.114l1.282.5a1.39 1.39 0 0 1 .052-.093M9.16 2.617l-.184-.32.23.033-.245-.277.072-.1.522.23.05-.073s-.566-.243-1.116-.696l.596 1.258.076-.055zm5.864-.32l-.184.32.075.055.596-1.258c-.55.454-1.115.696-1.115.696l.05.073.522-.23.07.1-.245.278.232-.033zm-3.992.885a.33.33 0 0 0 .25-.08l-.02-.08a.237.237 0 0 1-.226.104c-.13-.01-.225-.11-.216-.22a.19.19 0 0 1 .028-.082l-.072-.016a.224.224 0 0 0-.028.092c-.01.142.116.268.284.282M13.25 2.9a.224.224 0 0 0-.027-.092l-.073.016a.18.18 0 0 1 .03.082c.008.11-.09.21-.217.22a.24.24 0 0 1-.226-.104l-.02.08c.06.057.15.088.25.08.17-.014.297-.14.284-.282m2.951 3.792c.17.442-.053 1.13-.053 1.13s.77-.595.616-1.632c-.454.157-.564.502-.564.502m1.509.226c-.476.167-.6.425-.6.425.086.61-.197 1.07-.197 1.07s.905-.467.797-1.495m.25 1.102c.028.585-.29 1.088-.29 1.088s.892-.38.936-1.432c-.458.072-.646.345-.646.345m-2.987-.306c0 .662.234.896.234.896s-.06-.45.27-1.222c-.49 0-.504.258-.504.327m3.479 1.231c-.02.396-.316.79-.386.877.66-.198.953-.802.967-1.11-.2.002-.528.15-.58.233M7.798 6.692s-.11-.346-.564-.502c-.155 1.038.617 1.63.617 1.63S7.63 7.136 7.8 6.693m-.91.65s-.124-.258-.6-.425c-.108 1.028.797 1.495.797 1.495s-.282-.46-.197-1.07m-.85.677s-.187-.272-.645-.344c.044 1.052.937 1.432.937 1.432s-.32-.503-.29-1.087m2.482-.631c.33.77.27 1.222.27 1.222s.235-.234.235-.896c-.002-.07-.016-.327-.506-.327M4.967 8.714c.014.31.305.912.967 1.11-.07-.086-.368-.48-.386-.877-.052-.082-.38-.23-.58-.233",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#BF910C",
    d: "M15.414 5.487l-1.45 1.153.078-.234 1.092-1.138s-.05-.3-.328-.432l-.2.027-1.13 1.244c-.207 1.036-.428 1.398-.616 1.523l-.018-.126s-.16.26-.293.378l-.077-.18-.21.285-.084-.187-.18.29-.178-.287-.084.187-.21-.286-.075.18c-.135-.116-.295-.377-.295-.377l-.017.126c-.187-.125-.408-.487-.616-1.523l-1.13-1.244.003.077 1.013 1.325.164.39L9.35 5.7l-.093.173.935 1.324-1.06-.857-.093.13.458.592-.17.006.272.378-.13.01.435.755-.196-.978.838 1.61.088-.318.413.844.107-.25.438.732.078-.233.327.535.327-.535.078.233.437-.732.11.25.412-.844.088.32.84-1.612-.195.98.435-.755-.132-.012.272-.378-.17-.006.607-.558.474.16.254-.856-.424-.32zm-5.241-4.185l-.513.485.17.06z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#BF910C",
    d: "M14.866 4.39a1.229 1.229 0 0 1-.057-.1l-1.203.3a.83.83 0 0 1-.024.308l.943-.13.34-.377zm.068-.748l-1.474.576a.8.8 0 0 1 .128.27l1.176-.293c-.097-.223-.114-.407-.114-.407l.31.06a.896.896 0 0 1-.026-.206M9.927 2.48l1.446.32.098.27.204.032-.28.2.404.275-.023.04-.304-.117-.108.117.343.265-.03.04-.25-.118-.25.218.133.085.692.25.693-.25.195-.148-.203-.188-.358.148-.03-.04.412-.303-.102-.102-.382.14-.023-.038.404-.274-.28-.2.203-.032.097-.27 1.306-.29v.094l-.312.14-.186.405-.702.228.203.208-.117.086.287.228.056.044s.116.063.23.187l1.544-.602c.006-.297.058-.64.058-.64l-.313-.236.11-.195-.313.045.283-.32-.356.157-.81-1.273c-.603-.3-1.356-.4-1.356-.4L12 .446l-.152.144.12-.028.204.203c.52.1.67.218.67.218s-.304-.028-.498-.028c-.26 0-.344.034-.344.075v.21c0 .123.094.21.094.21l-.14.31.14.19-.032 1.02.11.125L12 3.39l-.17-.296.108-.125-.078-.974-.22-.187.19-.313-.173-.312-.28.328.078.11-.156.576.265.436-.07.085-.22-.24-1.19-.094-.04-.132.255-.21-.083-.105-.36.25.07.29zm.281 2.195a.84.84 0 0 0 .022.196l.187.027a.824.824 0 0 1-.023-.308l-.177-.044a.784.784 0 0 0-.01.13",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#BF910C",
    d: "M9.748 3.578l-.117-.42.398-.398.257.156.218.554.25.085v.094s-.195.15-.352.4l.21.082a.944.944 0 0 1 .23-.187l.054-.044.287-.227-.116-.086.203-.208-.7-.23-.188-.405-.313-.14-.155-.01-.475.507.218.437.093.038zm.792.64l-.19-.075c-.05.09-.09.19-.115.3l.178.043a.776.776 0 0 1 .128-.268m5.566 2.476c.152-.498.733-.624.733-.624.07.357.04.665-.04.926a.692.692 0 0 0 .156-.07l.592-1.55-.49-.407-.397.06-.19.604.064.148s.2-.012.392.03c0 0 .042.275 0 .445 0 0-.03-.218-.074-.317-.34.032-.81.48-.81.715 0 .135.084.235.125.276a.937.937 0 0 0-.06-.236m1.427-.196s.164-.015.394.057c0 0 .008.308-.032.442 0 0-.02-.196-.055-.322-.318-.013-.798.326-.8.61.194-.357.744-.49.744-.49.047.297.02.55-.048.766.056 0 .144-.02.144-.02l.687-1.334-.408-.45-.388.032-.276.617.037.093zm.967.72s.253.047.393.107c0 0-.034.252-.096.435 0 0-.013-.2-.035-.34-.245-.057-.93.29-.93.556 0 .082.02.136.033.162a1.36 1.36 0 0 0 0-.143c.25-.384.832-.424.832-.424 0 .308-.062.563-.157.775.08 0 .148-.038.148-.038l.597-1.047-.222-.496-.392-.037-.186.39.015.1zm.734.585L19 8.187l.008.103s.136.025.323.105c0 0-.044.262-.148.43 0 0 .038-.152-.01-.3-.45-.08-.845.313-.845.41 0 .043.016.08.025.1a.64.64 0 0 0 .01-.115c.298-.322.765-.296.765-.296-.018.29-.104.518-.224.7.155-.023.197-.056.197-.056l.59-1.013-.11-.396-.344-.057zm-3.7.677l-.063-.143s-.082.027-.167.003c-.032.338.026.52.026.52s-.338-.186-.428-.822l-.042-.027-.092-.154-.228.258.144-.02-.762.866.14.374.177.244.33-.16-.218-.217.513.063-.218-.28.56.166.35-.134L15.4 8.9l.283.012-.11-.17.37.092-.407-.355zM7.713 6.23s-.284-.268-.572-.307c0 0-.28.463.038.994a1.905 1.905 0 0 1-.017-.847s.58.126.733.624a.93.93 0 0 0-.06.232c.266-.17.328-.414.328-.414l-.41-1.326-.686-.07-.128.078.207.506s.36.124.57.53m-1.002.64s-.353-.23-.575-.214c0 0-.15.477.107.856a1.673 1.673 0 0 1-.034-.716s.58.14.76.518c.083-.095.104-.222.104-.222-.13-.047-.17-.117-.17-.117l-.44-1.128-.522.023-.09.124.206.46s.363.054.654.416m-.874.74s-.338-.187-.588-.187c0 0-.11.492.167.827a1.91 1.91 0 0 1-.12-.68s.582.04.832.425a1.565 1.565 0 0 0 0 .137c.032-.03.086-.092.086-.146 0-.12-.028-.304-.028-.304-.15-.012-.185-.054-.185-.054l-.486-.916-.476.118-.056.117.187.312s.342.005.664.35m-.2 1.311c0 .052.007.105.02.16a.118.118 0 0 0 .048-.1c0-.034-.016-.194-.024-.27a1.744 1.744 0 0 1-.155-.23c-.275-.008-.343-.103-.343-.103l-.34-.606-.29.1-.045.12.208.332s.418.028.66.285c0 0-.234-.1-.57-.1-.04.21.103.714.293.816a1.406 1.406 0 0 1-.225-.7s.467-.026.764.296m3.82-.806l-.228-.258-.092.156-.042.027c-.09.636-.427.822-.427.822s.06-.188.023-.534l-.606.65.527-.038-.128.192.472-.062-.156.2.576.234.32-.28.22-.456-.604-.675.144.02zM12.95 9.7l-.542.665-.082-.202-.326.398-.25-.397-.09.202-.576-.666.332.596-.503-.353.515.613-.384-.177.48.52-.256-.05.43.517-.118-.012.42.522.42-.522-.117.012.43-.518-.258.05 1.15-1.556-.615.56zm-1.743 3.555l.064.278-.575.263v.077l.108.04.075-.093.032.123.134.02.052-.124.062.085.145-.025.006-.14.092.088.104-.06-.19-.667zm1.027 1.615l-.626.22v.067l.083.067.087-.1.01.152.127.016.065-.125.04.13.134-.01.033-.12.078.088.104-.052.005-.973-.162.238z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#BF910C",
    d: "M7.347 6.316l-.067-.04c-.03.405.083 1 .41 1.312-.188-.28-.312-.48-.343-1.272m-1.015.694c.017.405.246.98.606 1.25-.218-.257-.414-.44-.538-1.222l-.068-.028zm-.792.76l-.07-.017c.06.4.323.992.71 1.223-.243-.232-.432-.44-.64-1.206m3.447-.08l-.073-.093c.03.133-.03.753-.082.89a2.36 2.36 0 0 0 .155-.798M5.09 8.796l-.07-.014c.12.366.385.803.785.956-.266-.177-.4-.258-.715-.942m11.273-2.222l-.056.062c.03.497.05.738-.1 1.04.286-.35.18-.947.156-1.102m.907.668l-.06.055c-.03.498-.046.718-.23 1 .324-.314.294-.898.29-1.055m.484 1.77c.345-.29.352-.896.358-1.052l-.065.05c-.064.495-.09.735-.293 1.002M15.015 7.69c-.007.108.028.47.156.795-.053-.136-.112-.756-.082-.89l-.073.094zm3.105 2.085c.358-.19.48-.723.514-.86l-.066.033c-.15.424-.218.63-.448.827",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#BF910C",
    d: "M16.72 8.57c.085-.12.252-.407.302-.79a1.68 1.68 0 0 0 .012-.297c-.178-.11-.228-.35-.228-.35a.754.754 0 0 1-.062.02 2.045 2.045 0 0 1-.76.908.033.033 0 0 1-.01.007l.004-.008c.022-.054.146-.387.187-.748.008-.074.013-.15.012-.224a1.318 1.318 0 0 1-.333-.307l-.145.33-.458-.147-.313.253-.118.465.073.126c0-.03-.003-.06-.003-.092 0-.278.23-.443.73-.416a3.36 3.36 0 0 0-.29.905l.033.026.212-.038.094.21.738.643c.19.167.724.146.724.146l.264-.076.154-.193.112.02a2.414 2.414 0 0 0 .187-.55l-.024-.13c-.117-.132-.166-.138-.156-.5-.078.16-.178.293-.284.405-.238.25-.51.39-.634.445l-.072.03s.02-.025.05-.07M7.28 8.572c.03.043.05.067.05.067s-.026-.01-.07-.03a2.073 2.073 0 0 1-.634-.445 1.59 1.59 0 0 1-.284-.405c.01.362-.04.368-.157.5l-.023.13a2.284 2.284 0 0 0 .186.55l.112-.018.154.192.264.077s.532.022.723-.145l.74-.642.094-.21.21.037.033-.026a3.39 3.39 0 0 0-.29-.905c.503-.027.73.137.73.415v.092l.072-.125-.118-.465-.314-.253-.457.147-.144-.328c-.093.114-.2.23-.332.307 0 .073.004.148.012.223.04.36.165.693.186.748l.003.01-.01-.008a2.045 2.045 0 0 1-.575-.567c-.067-.1-.13-.214-.183-.34a.744.744 0 0 1-.062-.02s-.05.238-.228.35c-.005.103 0 .2.012.295.05.383.216.67.3.792",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M11.145 12.29l.164.106z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#BF910C",
    d: "M11.377 11.732l-.273-.354.062.357-.193-.09.166.308-.213-.07.173.3-.15-.05.243.69.087.016.13-.198.16-.562-.193-.348zm1.73-.774l-.69.85.156.264h-.198l.132.27-.165.007.222.452-.087.05-.21.7.124.04.593-1.067c0-.002.23-1.312.124-1.567m1.177 2.793l-.024-.204-.06.313-.075-.254-.017.406-.054-.155-.028.202c-.066.12-.144.214-.227.288-.35.315-.783.267-.783.267l.086.053c.23.026.512-.055.757-.25.235-.19.438-.485.53-.897l-.105.23zm-.745-8.737c-.19.385-.692.4-.692.4l-.025.127s-.058.497-.468.687c0 0 .153-.258.058-.712 0 0-.015.157-.152.295l-.077-.2s-.03.062-.08.11c0 0-.077-.067-.103-.12-.025.053-.103.12-.103.12-.05-.048-.08-.11-.08-.11l-.077.2a.516.516 0 0 1-.152-.295c-.096.454.057.712.057.712-.41-.19-.467-.687-.467-.687l-.023-.128s-.504-.015-.694-.4l-.195-.026c.065.168.162.26.162.26a.958.958 0 0 0 .367.452l.236.748-.05.117-.163-.29-.04.157-.095-.17c.105.475.247.925.392 1.12l.102-.145s.09.274.235.42l.144-.163.153.26.127-.188.166.28.167-.28.128.188.152-.26.143.162c.145-.146.234-.42.234-.42l.102.146c.145-.196.287-.646.393-1.12l.04-.21 1.053-1.16-.873.123z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.506 2.72l.22-.24.6-.126-.226-.188-.476-.654-.078.11.155.576-.263.437zm1.684.998l.094-.04.28-.576-.32-.436-.18.1.305.39zm-.966 2.712l-.04-.156-.162.29-.062-.15-.148.18.327-.935.155-.142.016-.093-.436.14-.05-.024s-.058.498-.468.688c0 0 .153-.258.058-.712 0 0-.015.157-.152.295l-.078-.2s-.03.063-.08.112c0 0-.077-.068-.103-.12-.024.052-.102.12-.102.12-.05-.05-.08-.112-.08-.112l-.078.2a.516.516 0 0 1-.152-.295c-.096.454.057.712.057.712-.41-.19-.467-.687-.467-.687l-.05.024-.437-.14.017.093.156.14.326.937-.15-.18-.01.03-.05.118-.164-.29-.04.158-.094-.17c.105.475.247.925.392 1.12l.102-.145s.09.274.235.42l.144-.163.153.26.127-.188.166.28.167-.28.128.188.152-.26.143.162c.145-.146.234-.42.234-.42l.102.146c.145-.196.287-.646.393-1.12l-.096.17z",
    fill: "#002654",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#FFF",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.247 3.554l.047.063.335-.024.25-.366-.134-.156-.25.398zm.67-1.169l.203-.023.024-.172-.617-.436-.06.094.49.405zm-.21 4.941l-.53.5.065-.567s-.168.35-.416.62l-.035-.148s-.178.267-.284.328l-.068-.146-.19.23-.074-.12-.174.243-.172-.243-.072.12-.192-.23-.068.146c-.107-.062-.286-.328-.286-.328l-.036.148c-.248-.27-.416-.62-.416-.62l.066.565-.53-.5.343.858-.928-.95.838 1.61.088-.32.413.845.107-.25.438.732.078-.233.327.535.327-.535.078.233.437-.732.11.25.412-.844.088.32.84-1.612-.928.95.343-.856zm-2.603 4.052l.23.53-.102-.04.09.253-.144-.05.13.326-.163-.107.133.55.13-.198.16-.562-.19-.348zm1.469.692h-.198l.132.27-.165.008.22.453-.085.05-.21.7.124.042-.003-.22.076-.07-.025-.197.092-.076-.04-.133.134-.05-.06-.184.103-.06-.07-.175.128-.03-.11-.19.18-.017-.116-.21.177-.008-.14-.306.14.048.25-.756-.69.85zm1.287 2.347l-.09.014.03-.08c-.35.314-.783.266-.783.266l.086.053c.232.024.512-.057.757-.253M11.655 7.06c0-.056-.11-.205-.198-.583 0 0-.074.21-.018.525.013.078.215.1.215.057m.172-.002c0-.1-.06-.16-.06-.16s-.056.08-.056.16c0 .03.116.028.116 0m.098-.153s-.05.073-.057.16c0 .026.116.023.116-.002-.004-.114-.06-.158-.06-.158m.639.098c.056-.315-.02-.525-.02-.525-.087.378-.196.527-.196.582 0 .04.2.02.216-.058m-.388.056c0 .028.115.03.115 0 0-.08-.056-.16-.056-.16s-.06.06-.06.16m-.04.007c-.006-.087-.056-.16-.056-.16s-.054.044-.06.158c0 .026.116.03.116.002",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.176 7.234s.09.274.235.42l.144-.163.153.262.127-.19.166.282.167-.28.128.188.152-.26.143.162c.145-.146.234-.42.234-.42l.102.146c.145-.196.287-.646.393-1.12l-.096.17-.04-.157-.162.29-.062-.15-.148.18c.03.316.03.67-.48.67-.102 0-.332-.03-.332-.03s-.23.028-.328.028c-.51 0-.514-.352-.482-.667l-.148-.18-.012.03-.05.118-.163-.288-.04.158-.095-.17c.105.475.247.925.392 1.12l.102-.146z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#CE1126",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.67 4.456c.075 0 .2.12.2.222 0 .034-.018.045-.018.045l.075.074.073-.272.073.27.075-.073s-.02-.01-.02-.045c0-.1.127-.222.2-.222.057 0 .067.04.067.04.068-.068.165-.22.165-.22l-.56.217-.562-.215s.097.15.166.22c0 0 .01-.04.067-.04M12 5.12c-.037.088-.206.162-.206.162l.024.014s.09-.046.182.005c.093-.05.182-.004.182-.004l.025-.014S12.04 5.208 12 5.12m.355 1.107s.153-.258.058-.712c0 0-.015.157-.152.295l-.077-.2s-.03.062-.08.11c0 0-.077-.067-.103-.12-.025.053-.103.12-.103.12-.05-.048-.08-.11-.08-.11l-.077.2a.516.516 0 0 1-.152-.295c-.096.454.057.712.057.712-.41-.19-.467-.687-.467-.687l-.05.024c.08.528.215 1.092.215 1.092s.005-.172.144-.446c0 0 .057.385.188.69 0 0 .026-.05.086-.11 0 0 .055.04.09.085 0 0 .032-.043.067-.078 0 0 .062.04.083.078.02-.038.084-.078.084-.078a.737.737 0 0 1 .066.078c.036-.045.09-.085.09-.085.06.06.086.11.086.11.13-.306.188-.69.188-.69.14.274.145.446.145.446s.132-.563.214-1.092l-.05-.024s-.058.497-.47.687m-1.13-3.287c0-.013 0-.025-.004-.037l-.302-.064a.125.125 0 0 0-.035.072c-.006.077.065.145.16.153.094.007.175-.048.182-.125m1.554-.036a.15.15 0 0 0-.005.037c.008.077.09.132.183.125.095-.008.165-.076.16-.153a.124.124 0 0 0-.035-.073l-.304.063zm3.96 5.707l.112.2.688.11.112.02c.027-.058.06-.127.088-.206a4.642 4.642 0 0 0-.365-.57c-.238.25-.51.39-.634.446m-.761-.55a3.35 3.35 0 0 0 .185-.748c-.058-.023-.117-.047-.18-.07 0 0-.064.517-.04.802l.034.017zm.58-.565a2.045 2.045 0 0 1-.575.567l.608.28.127.23c.085-.123.252-.41.302-.793a3.68 3.68 0 0 0-.46-.285m-.105.949l-.437-.186c-.08-.034-.12-.005-.09.064l.058.128.378.324.142.04c.067.017.1-.022.072-.085l-.123-.284zM7.44 7.495a3.473 3.473 0 0 0-.46.284c.05.383.217.67.302.79l.126-.227.608-.28a2.045 2.045 0 0 1-.576-.568m.617.55c.023-.285-.042-.8-.042-.8-.062.022-.12.045-.18.068.042.36.166.693.187.748l.035-.016zm-1.797.69c.03.08.06.148.088.205l.112-.018.688-.11.112-.2a2.1 2.1 0 0 1-.634-.447c-.22.304-.324.487-.366.57m1.72-.477l-.436.187-.122.284c-.028.063.004.1.072.083l.14-.037.38-.324.056-.13c.032-.07-.008-.097-.09-.063m6.15 4.681l.012-.4-.09.115-.032-.622-.134.434.092-.133v.513l.113-.148z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.43 12.518l-.095.095.022-.344-.11.087.016-.224-.09.1-.06-.254.005.484.07-.085.006.18.087-.103-.037.64.122-.097-.024.537.06-.188.048-.52-.08.066zm-.27.538l-.073.078-.043-.2-.023.364.077-.08-.002.206.077-.073.01.17.064-.334-.084.076z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#002654",
    d: "M11.956 6.578l.044.14.045-.14.026-.417.11-.377-.18.21-.18-.21.11.378z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.14 3.024c.022.002.044-.013.046-.033s-.017-.038-.04-.04-.046.013-.048.033.016.04.04.04m1.912-.02c.024 0 .042-.02.04-.04 0-.02-.022-.036-.047-.034s-.043.02-.04.042.022.035.047.032",
    fill: "#FFF",
    __self: this
  }));
};

LogoFLA.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoTBL = function LogoTBL(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#002868",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20.076 7.28c0-1.638-1.02-3.253-2.825-4.245l-.69.55c1.233.777 1.96 1.938 1.96 3.257 0 3.076-3.8 5.862-8.03 5.862-.436 0-.86-.03-1.272-.093L7.79 13.67a9.23 9.23 0 0 0 2.958.467c5.022 0 9.328-3.39 9.328-6.855",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.688 8.425l-2.583.505 5.73-4.71-2.667.358L19.354.465l-6.037 1.59a9.484 9.484 0 0 0-.24-.004c-4.947 0-9.152 3.363-9.152 6.91 0 1.74.938 3.126 2.39 4.023l-2.23 2.552 9.603-7.11zm-9.074.012c0-3.182 3.98-5.863 8.033-5.863h.083L8.812 6.957l2.253-.356-4.438 4.293 1.8-.325-1.257 1.437c-1.528-.724-2.556-1.97-2.556-3.568M17.7 12.076h.1v.3h.036v-.3h.104v-.036h-.24zm.433.237l-.086-.273h-.058v.336h.035v-.286l.09.286h.036l.09-.286v.286h.037v-.336h-.058z",
    __self: this
  })));
};

LogoTBL.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoWSH = function LogoWSH(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CF0A2C",
    d: "M6.77 5.588l.48-.35.48.35-.184-.564.48-.348h-.592L7.25 4.11l-.184.566h-.592l.48.348zm3.11 0l.478-.35.48.35-.183-.564.48-.348h-.593l-.184-.565-.182.566h-.594l.48.348zm3.108 0l.48-.35.48.35-.183-.564.48-.348h-.594l-.182-.565-.184.566h-.593l.48.348zm-7.398.746l-.035.56h.193l.54-.702H6.13l-.41.548.037-.548H5.56l-.41.548h-.004l.042-.548h-.17l-.04.702h.19zm.4.56h.17l.138-.157h.404l.016.157h.187l-.07-.702H6.64l-.648.702zm.703-.273h-.29l.27-.304.02.305zM7.857 6.4c.054-.14-.02-.226-.226-.226-.162 0-.34.064-.408.227-.117.283.446.144.38.3-.02.052-.09.108-.22.108-.126 0-.166-.05-.14-.134h-.158c-.062.15.028.238.232.238.238 0 .398-.086.458-.23.128-.31-.453-.127-.377-.31.026-.062.11-.095.176-.095.11 0 .158.033.126.124h.157zm.149.494l.125-.3h.383l-.125.3h.157l.29-.702H8.68l-.12.286h-.382l.118-.286H8.14l-.29.702zm.91 0l.29-.702H9.05l-.29.702zm.357 0l.228-.548h.003l.18.548h.212l.29-.702h-.142l-.223.538h-.002l-.173-.538h-.222l-.29.702zm1.789-.476c.068-.164-.057-.244-.27-.244a.61.61 0 0 0-.576.367c-.105.255.024.372.286.372.102 0 .264-.02.38-.062l.137-.327h-.38l-.044.108h.224l-.055.135a.735.735 0 0 1-.206.032c-.217 0-.234-.127-.18-.257a.414.414 0 0 1 .392-.258c.077 0 .163.038.127.136h.162zm.193.476h.158l.242-.587h.268l.048-.115h-.692l-.047.115h.268zm.917.018a.57.57 0 0 0 .562-.37c.103-.245.003-.368-.256-.368s-.46.123-.562.368c-.103.247-.003.37.256.37zm-.093-.37c.067-.165.198-.254.35-.254.152 0 .21.09.14.254-.067.166-.197.255-.35.255-.153 0-.21-.09-.14-.255zm1.371.188l-.175-.538h-.22l-.29.702h.14l.228-.548.18.548h.213l.29-.702h-.14l-.225.538z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#041E41",
    d: "M22.264 10.192c0 .12.1.22.22.22s.22-.1.22-.22a.22.22 0 0 0-.44 0zm.39 0a.17.17 0 0 1-.17.172.172.172 0 1 1 .172-.172z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#041E41",
    d: "M22.394 10.317h.047v-.102h.034l.048.102h.052l-.05-.106a.074.074 0 0 0-.024-.142h-.105v.25zm.046-.203h.06c.015 0 .026.012.026.027a.027.027 0 0 1-.027.028h-.06v-.054z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CF0A2C",
    d: "M17.687 12.277h-1.672l-.55.674h1.673z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#041E41",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M3.736 8.19h.877l.222-.536h-.903c-1.065 0-2.194.642-2.52 1.432-.2.478.09.887.658.887h1.176c.51 0 1.133-.49 1.133-.49l-.55-.233s-.25.188-.52.188H2.184c-.14 0-.2-.137-.125-.316.21-.515.962-.93 1.676-.93zm3.456 1.783l.542-1.31c.23-.557-.12-1.01-.786-1.01h-1.72l-.224.538H6.87c.397 0 .276.294.276.294H5.803c-.534 0-.928.245-1.053.55-.215.52.1.938.703.938h.68c.246 0 .455-.14.455-.14l-.06.14h.664zm7.682-2.319l-.223.537h2.09c.398 0 .276.294.276.294h-1.343c-.534 0-.928.245-1.054.55-.216.52.1.938.702.938h.68c.246 0 .456-.14.456-.14l-.058.14h.662l.543-1.308c.23-.558-.12-1.01-.785-1.01h-1.946zm3.156 2.319l2.133-5.148H19.5l-2.132 5.148zm-5.034-2.319h-.662l-.223.537h.663zm-.961 2.319l.617-1.49h-.662l-.617 1.49zm7.208-1.785c-.205.494.06.895.594.895h1.345c.1 0 .145.08.104.178-.04.1-.153.18-.25.18h-2.46l-.224.534h2.47c.458 0 .874-.104 1.052-.533.204-.492-.062-.893-.594-.893h-1.346c-.098 0-.145-.08-.104-.178a.298.298 0 0 1 .25-.178h2.18l.223-.537h-2.188c-.458 0-.913.197-1.052.533zm-7.97 1.182l.71-1.716h-1.566c-1.23 0-2.166.766-2.557 1.71l-.815 1.97h.663l.77-1.857c.294-.71.94-1.285 1.966-1.285h.656l-.416 1.004c-.055.133-.208.242-.34.242H8.81l-.223.535h1.832c.33 0 .665-.15.85-.602z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.76 10.72c-.218.532-.21 1.265.02 1.634l1.31 2.096.86-1.25-1.593-1.324c-.168-.14-.216-.47-.105-.734l4.085-9.865h-.663l-2.642 6.38h-.785l-.223.536h.786l-1.05 2.528z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.496 9.02c-.115 0-.246.093-.294.208s.007.21.122.21h1.01c.147 0 .332-.106.386-.235l.108-.263s-.19.08-.4.08h-.932zm-9.871 0c-.115 0-.247.093-.294.208s.008.21.123.21h1.01c.147 0 .332-.106.386-.235l.108-.263s-.19.08-.402.08h-.93z",
    fill: "#FFF",
    __self: this
  }));
};

LogoWSH.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoCHI = function LogoCHI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.674 10.715a.333.333 0 1 0 .002.666.333.333 0 0 0-.002-.665zm0 .597a.262.262 0 0 1-.262-.264.262.262 0 0 1 .524 0 .263.263 0 0 1-.262.264z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.81 10.973a.11.11 0 0 0-.11-.11h-.16v.38h.07v-.156h.05l.073.156h.078l-.075-.162a.12.12 0 0 0 .076-.107zm-.11.043h-.093v-.084h.092c.02 0 .038.02.038.04 0 .024-.017.044-.04.044z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20.54 10.295c0-.63.616-2.965-3.87-6.498l.754-.168-.39-1.28-.747.498v-.775h-1.47C13.86 1.383 13.398.5 11.89.5c-.63 0-1.292.125-1.436.125-.11 0-.447-.07-1.018-.07-1.65 0-1.8 1.23-1.595 1.66C5.673 3.703 4.6 4.773 4.6 5.16c0 .15.088.343.088.623 0 .61-1.318 1.954-1.318 2.666 0 .662.846.708.846.708.048.195-.28.846.014 1.178-.408.443.068.664.068 1.016 0 .238-.166.312-.166.752 0 .502.235 1.105 1.473 1.105.49 0 .922-.077 1.266-.077.096 1.04.54 1.447.612 1.707.06.21.196.66.47.66.36 0 2.34-.648 3.845-1.56.753.278 1.712.187 2.06.187.38 0 .537.232.762.232.134 0 1.155-1.144 1.093-3.644.64 1.084 1.02 1.79 1.057 2.193.832-.298 1.53-2.263 1.23-3.515 0 0 1.046 1.7 2.634 1.45a2.003 2.003 0 0 1-.095-.55z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#D18A00",
    d: "M10.56 11.848c.385-.59.166-1.605-.565-1.324-.422-.69-.9-1.623-.9-2.776 0-1.23.25-1.55.25-2.637 0-1.85-.855-2.215-1.404-2.587C6.634 3.408 4.9 4.62 4.9 5.266c0 .19.084.37.084.556 0 .668-1.3 1.965-1.3 2.593 0 .236.188.433.49.433s1.07-.11 1.36-.143c.29-.03.32-.17.32-.246 0-.19-.296-.45-.52-.45-.19 0-.206.11-.206.138 0 .123.177.158.177.158.225-.03.226.167.012.167-.176 0-.373-.13-.373-.354 0-.226.18-.282.314-.282.562 0 .885.508.792.832.697.346.677.853.562.853-.24 0-.074-.64-.98-.64-.255 0-.787.075-.913.09-.123.013-.16.03-.176.136-.015.1-.146.476-.146.706 0 .34.227.363.373.363.382 0 1.03-.093 1.03-.245 0-.1-.165-.07-.225-.07-.115 0-.167-.07-.167-.11 0-.103.165-.15.36-.15.326 0 .36.212.344.31-.037.22.315.166.315.63 0 .054-.004.187-.115.187-.112 0-.113-.14-.113-.217 0-.076-.127-.2-.236-.2-.114 0-.532.216-1.432.134-.355.446.064.478.064.93 0 .5-.154.47-.154.776 0 .61.67.77 1.34.77 1.383 0 2.945-.32 3.495-1.31-.188.874-.893 1.187-2.092 1.46.137.97.338 1.195.484 1.457.146.264.178.63.436.63.31 0 2.13-.655 3.355-1.394l-.894-1.922z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.165 11.72c-.03 0-.062.044-.062.16 0 .134.15.41.335.59.006-.093.005-.17.005-.212 0-.154-.087-.54-.278-.54zM8.83 9.928c-.265-.29-.664-1.13.13-1.848-.607-.163-1.44 1.46-.13 1.848zm-.948-5.6c.037.043.1.05.144.014.032-.028.054-.095.012-.144a5.35 5.35 0 0 0-.65-.635l.164-.123c.158.132.77.657 1.155 1.136.037.044.1.05.144.015a.102.102 0 0 0 .017-.14c-.377-.47-.944-.96-1.147-1.136.067-.048.125-.093.155-.114.413.3.647.588.65.59a.1.1 0 0 0 .142.017.102.102 0 0 0 .018-.143 3.963 3.963 0 0 0-.753-.673.1.1 0 0 0-.12.003l-.648.485c-.06.044-.048.123-.002.162.405.315.717.684.72.688zm-.194.85c-.617 0-.82-.662-1.595-.662-.416 0-.63.163-.63.3 0 .14.16.26.16.26.08.17-.46.356-.177.47l.35.136c-.114.198-.04.565-.02.657-.713.005-.644.227-.025.236.003.102-.07.375.04.375.118 0 .268-.136.325-.396.52-.064 1.106-.243 1.106-.243.105-.028.21-.123.01-.242l-.957-.563s-.082-.048-.028-.173l.073-.17c.02-.05.073-.057.098-.057.272 0 .68.407 1.22.407.235 0 .496-.137.496-.27 0-.13-.32-.064-.444-.064z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6.21 5.843a1.162 1.162 0 0 0-.004.485c.613-.037.864-.15.864-.15l-.86-.335zm-.945 5.095c-.067.033.206.6.157.854.04.115.21.537.498.39.286-.145.044-.528-.025-.63-.236-.11-.563-.65-.63-.614zm2.527-4.023c-.237.063-.454.298-.883.413-.16.04-.438 0-.52 0 .064.09.235.242.235.242s-.063.156-.076.263c.07-.042.278-.168.437-.21.43-.112.734-.013.97-.075.112-.03.316-.087.234-.402-.08-.313-.288-.262-.398-.23z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.31 10.615c-.262-.076-.573.2-.694.613-.12.414-.005.81.256.89.262.075.572-.198.693-.614.12-.414.005-.813-.255-.89zm-4.74.182c-.128-.178-.197-.018-.333.055-.136.068-.31.03-.236.238.078.225-.085.682-.014.82.058.11.182.154.283.104a.3.3 0 0 0 .152-.223c.05-.253-.098-.604-.03-.64.065-.035.266.29.5.4.087.04.178.05.27.006.1-.053.138-.182.082-.293-.072-.138-.537-.273-.674-.466zm1.853-3.034c-.07.02-.177.08-.353.126-.175.046-.395.047-.43-.088a.063.063 0 0 1 0-.036c.012-.11.17-.254.17-.254s-.21-.047-.274-.136a.11.11 0 0 1-.017-.032c-.037-.134.157-.242.332-.288.174-.047.298-.047.37-.064.14-.038.26-.132.23-.244-.056-.21-.327-.158-.477-.12-.75.2-.916.507-.86.72.055.214.298.27.298.27s-.184.167-.128.38c.055.212.352.398 1.102.2.15-.04.413-.128.36-.336-.032-.115-.183-.136-.324-.1zm7.681-4.145c-2.188 1.638-3.365 4.08-3.723 4.916 0 0-.046.098.01.205l.692 1.35c.03.056.09.065.138.022l1.14-1.03c.078-.07.104-.185.104-.185.52-2.975 1.22-4.43 1.658-5.088a.49.49 0 0 1-.022-.15c.004-.014.004-.028.004-.042z",
    fill: "#CF0A2C",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.92 2.746l-.588.39.137.447.66-.146zm-1.613 1.366a.547.547 0 0 1-.11-.13c-.7 1.123-1.595 3.935-1.595 6.342 0 2.463.754 3.77 1.025 3.77.21 0 .947-1.317.947-3.017 0-.465-.39-2.326-.39-5.82.002-.75.058-.95.123-1.145zm-3.753 4.495l.62 1.342 1.13-1.048s.546-3.178 1.517-4.93c-2.562 2.486-3.266 4.635-3.266 4.635zm4.151-5.401a.457.457 0 1 0 0 .914.457.457 0 0 0 0-.914z",
    fill: "#00833E",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#FFD100",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.92 4.04c.152 0 .133-.204-.01-.204-2.19 0-3.445.278-3.638.324-.122-1.073-.74-1.416-.74-2.11 0-.27.18-.324.325-.324.512 0 .896.6 1.606.6.66 0 .802-.468 1.18-.468.563 0 .315 1.502 1.315 1.502.316 0 .523-.126.523-.126.138-.075.01-.236-.106-.176 0 0-.2.103-.398.103-.846 0-.477-1.506-1.355-1.506-.42 0-.56.464-1.168.464-.68 0-.948-.607-1.62-.607-.383 0-.52.256-.52.513 0 .77.76 1.354.76 2.408 0 1.074-.367 2.017-.367 3.507 0 1.737 1.65 2.25 1.65 3.868 0 .916.352 1.48.744 1.48.215 0 .416-.127.512-.463a.412.412 0 0 0 .152.035c.11 0 .52-.12.52-.602 0-1.38-2.37-2.094-2.37-4.257 0-1.04.166-2.704.42-2.704.135 0 .302.582.62.582.397 0 .26-1.15.435-1.15.14 0 .352.538.603.538.203 0 .27-.417.357-.744.033-.153-.182-.195-.213-.04-.055.242-.17.564-.17.564-.13-.13-.338-.523-.59-.523-.402 0-.343 1.148-.434 1.148-.168 0-.274-.596-.64-.596-.473 0-.612 1.642-.612 2.934 0 2.273 2.375 3.035 2.375 4.226 0 .3-.22.402-.307.402a.382.382 0 0 1-.107-.02c.013-.083.02-.175.02-.276 0-.7-.387-.834-.544-.834-.156 0-.245.137-.245.363 0 .303.27.64.53.832-.04.188-.122.362-.298.362-.34 0-.535-.79-.535-1.264 0-1.71-1.65-2.203-1.65-3.91 0-1.454.368-2.386.368-3.352 0-.06 0-.117-.004-.175.227-.05 1.64-.365 3.63-.32z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.023 4.582s-1.248 2.627-1.248 5.688c0 2.027.63 3.576.803 3.576.137 0 .777-.965.777-2.98 0-.81-.44-3.9-.332-6.284z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.428 8.438l-.45.348c-.054.436-.09.887-.095 1.35l.496-.338c.003-.396.016-.85.048-1.36zm.334-2.056c-.088.743-.145 1.41-.182 2.002l.504.372c-.068-.74-.14-1.57-.17-2.364-.004-.113-.13-.22-.152-.01zm-.237 3.493l.7.482c-.026-.387-.077-.89-.13-1.45l-.523-.39c-.03.514-.043.967-.047 1.358zm.085-3.488c.017-.137-.097-.115-.12-.035-.19.64-.377 1.42-.494 2.277l.44-.34c.037-.565.09-1.202.173-1.903zm-.618 5.355c.035.234.076.45.123.648.072.078.273.22.443-.29.29.48.47.417.527.376.04-.176.074-.37.102-.584l-.693-.46-.502.31zm.576-.4l.635.424a6.915 6.915 0 0 0 .033-1.26l-.71-.49a17.94 17.94 0 0 0 .042 1.326zm-.191-1.404l-.494.338c0 .484.035.936.092 1.342l.445-.277a17.493 17.493 0 0 1-.043-1.402z",
    fill: "#00833E",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#CF0A2C",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.396 7.164c-.303.5-.55 1.03-.657 1.274-.044.105-.062.164-.062.164l.533 1.15.983-.914c.012-.05.1-.54.252-1.2.22-.937.59-2.308.996-3.14a18.885 18.885 0 0 0-2.044 2.666z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "15.705",
    cy: "3.662",
    r: ".292",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M13.725 5.563c-.025-.013-.06-.003-.07.023-.203.402-.38.784-.533 1.14l-.624.276a7.872 7.872 0 0 0-.1.16l.66-.292c-.17.404-.31.77-.427 1.09l-.83.337a7.03 7.03 0 0 0-.06.14l.843-.343c-.258.735-.364 1.187-.367 1.194-.006.027.01.06.04.062a.053.053 0 0 0 .063-.04c0-.007.103-.44.35-1.15l.448.75.076-.072.002-.002-.48-.806c.105-.292.23-.625.384-.99l.346.595c.012-.05.02-.1.035-.15l-.327-.568c.168-.396.363-.828.596-1.284.012-.024 0-.054-.025-.07z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.037 2.316h-.963l.615.666h.347zm3.57 4.796c-1.05-1.686-2.88-3.103-3.3-3.417-.007.097-.1.257-.147.336-.057.062-.123.134-.156.153.072.29.184.707.332 1.19.22.536.467 1.197.676 1.886.238.57.515 1.137.828 1.64 1.3 2.088 2.596 1.8 2.596 1.8-.223-.354.43-1.56-.83-3.588z",
    fill: "#FF671B",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M19.22 7.232c-.83-1.333-2.593-2.918-2.993-3.27a.557.557 0 0 1-.09.12c.252.717 1.234 3.405 2.14 4.86.882 1.42 1.745 1.35 1.745 1.35s.29-1.298-.803-3.06z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#FF671B",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.27 4.145c.14.392.418 1.147.762 1.982l.092-.506-.45-.72a.053.053 0 0 1 .02-.075c.026-.015.058-.008.07.018l.433.69.666.165a25.393 25.393 0 0 0-1.593-1.553z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.273 5.663l.795 1.278 1.032.306c-.29-.46-.69-.948-1.107-1.405l-.72-.177zm-.168.647c.193.463.406.946.625 1.4l.258-.697-.78-1.257-.103.553zm2.827 3.874c.023-.2.06-.738-.16-1.48l-.684-.124.402.648c.018.023.008.057-.018.072a.053.053 0 0 1-.074-.018l-.406-.656-.258.77c.536.64 1.012.762 1.198.788zm-1.78-3.107l.86 1.38.724.133a5.632 5.632 0 0 0-.553-1.208l-1.03-.305zm.502 2.223l.266-.79-.86-1.383-.263.715c.188.382.38.74.568 1.043.098.156.194.295.29.416z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#D18A00",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6.12 5.038l-.388.104c-.082.02-.086.068-.008.106l.295.142a.06.06 0 0 0 .08-.03l.1-.23c.03-.07-.007-.11-.08-.092z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ellipse", {
    transform: "rotate(-73.776 10.092 11.367)",
    cx: "10.092",
    cy: "11.367",
    rx: ".496",
    ry: ".275",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFD100",
    d: "M17.012 7.26a21.45 21.45 0 0 0-.676-1.886c-.148-.484-.26-.9-.332-1.19a.613.613 0 0 1-.582.008c-.186 4.312.242 5.058.32 6.29 1.088 1.715 1.127 2.215 1.127 2.215s1.27-.89.978-3.535a10.603 10.603 0 0 1-.62-1.1",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#001970",
    d: "M17.37 8.787a9.023 9.023 0 0 0-.144-.725 13.907 13.907 0 0 0-.215-.8c-.208-.69-.456-1.35-.675-1.887-.217-.526-.404-.93-.494-1.126a.626.626 0 0 1-.26.002c-.042.464-.19 2.448.093 4.234.404 2.562 1.377 3.49 1.377 3.49s.673-.968.32-3.19z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.123 7.156l-.336-2.124c-.016-.096-.143-.084-.148.055-.028.645-.04 1.554.038 2.482l.445-.414zm.354 2.24l-.166-1.05-.466.464c.074.39.162.738.256 1.05l.377-.464zM15.69 7.71c.022.254.056.508.095.758.012.07.02.14.033.208l.473-.465-.145-.92-.456.42zm.208-2.695l.34 2.153.75.422a21.46 21.46 0 0 0-.953-2.636c-.03-.083-.156-.065-.137.06zm.87 5.595l-.262-1.073-.367.45c.132.41.274.75.41 1.02l.218-.396zm-.508-3.3c.05.304.098.607.14.886l.84.48a10.757 10.757 0 0 0-.208-.933l-.772-.434zm.162 1.026l.166 1.04.77.417a8.35 8.35 0 0 0-.094-.977l-.842-.48zm.838 2.726l-.416-.357-.234.424a4.2 4.2 0 0 0 .422.65c.062-.132.156-.368.228-.718zm.1-1.14l-.743-.4.26 1.066.406.35a5.3 5.3 0 0 0 .076-1.016z",
    fill: "#FFD100",
    __self: this
  }));
};

LogoCHI.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoDET = function LogoDET(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#CE1126",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.444 12.767a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4zm0 .714a.314.314 0 1 1 0-.627.314.314 0 0 1 0 .628z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.61 13.074a.137.137 0 0 0-.137-.136h-.193v.457h.086v-.185h.062l.087.186h.095l-.09-.193c.05-.02.09-.07.09-.13zm-.136.05h-.107v-.1h.107c.027 0 .05.022.05.05s-.023.05-.05.05z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M20.896 4.923c.896-.766 1.765-2 1.765-3.416 0-.205-.25-.263-.35-.124-.924 1.26-1.795 1.74-2.32 1.922.874-.662 1.732-1.744 1.952-2.97A.196.196 0 0 0 21.61.16c-1.07 1.07-2.547 2.214-6.51 2.214-.96 0-2.054-.028-2.762-.028-3.218 0-4.4 1.99-4.668 2.543a5.785 5.785 0 0 0-.8-.06 5.538 5.538 0 0 0-5.53 5.533c0 3.05 2.48 5.53 5.53 5.53a5.5 5.5 0 0 0 5.098-3.384c.06.005.125.016.18.016.7 0 .848-.205.848-.378 0-.093-.092-.204-.137-.27 1.027-.005 1.33-.054 1.774-.207a.166.166 0 0 0 .115-.16c0-.152-.313-.403-.538-.6 1.438-.023 2.497-.28 2.497-.616 0-.065-.007-.148-.39-.45.813-.22 2.238-.767 2.238-1.124 0-.137-.12-.222-.26-.32 1.265-.476 2.326-1.314 2.326-1.615 0-.243-.356-.263-.534-.277.63-.403 1.506-1.09 1.506-1.387 0-.305-.48-.184-.7-.197z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M20.526 5c1.007-.753 1.964-2.056 1.964-3.494 0-.03-.03-.035-.042-.022-1.557 2.125-2.972 2.104-2.972 2.104-.062 0-.076-.087-.026-.12 1.004-.592 2.08-1.81 2.323-3.164.004-.018-.023-.04-.042-.02-1.143 1.142-2.713 2.264-6.63 2.264-1.256 0-1.91-.028-2.762-.028-3.396 0-4.44 2.258-4.565 2.557a5.36 5.36 0 1 0 4.087 7.25c.102.02.198.03.288.03.546 0 .678-.123.678-.208 0-.058-.35-.44-.176-.44 1.21 0 1.482-.044 1.927-.197-.213-.333-.985-.766-.588-.766 1.92 0 2.55-.37 2.55-.45 0-.09-.613-.53-.613-.53.884-.147 2.46-.854 2.46-1.043 0-.108-.45-.292-.376-.397 1.402-.466 2.444-1.372 2.444-1.537 0-.132-.822-.117-.822-.117V6.58c.712-.37 1.794-1.263 1.794-1.46 0-.125-1.016.085-.9-.12z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M8.188 9.35a1.686 1.686 0 0 0-.67-.518l-.043.043.09.612c.027.022.054.045.08.07l.448.003.095-.21zm-1.942-.467l.495.37a.945.945 0 0 1 .108-.006l.44-.435-.008-.06a1.672 1.672 0 0 0-1.034.07v.06zm1.074.144l-.242.24c.103.018.2.052.29.097l-.048-.337zm.18 2.258a1.122 1.122 0 0 1-.274.137l.272.203.003-.34zm-2.215 1.531l.79-.777a1.854 1.854 0 0 1-.757-.66l-.663.888c.183.21.395.396.63.548zm2.508-3.083c.043.062.08.13.11.202.025-.047.062-.115.104-.2l-.214-.002zm-1.485 2.399l-.058-.02-.81.798a2.89 2.89 0 0 0 1.03.347l-.162-1.125zm1.479-1.082l-.04.006a.88.88 0 0 1-.07.08l-.006.62.05.035c.15-.088.284-.2.398-.33-.164-.15-.283-.292-.33-.41zM6.24 9.44c.085-.058.178-.104.276-.137L6.244 9.1l-.003.34zm-1.017 1.776c-.01-.02-.02-.036-.027-.055l-1.138-.01c.1.36.266.69.485.977l.68-.91zm2.273.626L7 11.472a.928.928 0 0 1-.106.008l-.44.434.008.06a1.656 1.656 0 0 0 1.034-.07v-.062zM6.422 11.7l.242-.24a1.08 1.08 0 0 1-.292-.098l.05.337zm1.248.34l-.01 1.137c.357-.1.687-.267.976-.485l-.913-.68-.054.027zm-1.722-1.047a1.13 1.13 0 0 1-.137-.276l-.202.272.34.003zm.15.177l-.62-.006-.034.048c.18.302.453.543.78.682l.044-.043-.09-.61a1.38 1.38 0 0 1-.08-.07zm-.033-1.58l.005-.62-.048-.036c-.302.18-.543.455-.68.782l.04.043.613-.09c.023-.027.046-.055.07-.08zm-.53.323l.238.243c.02-.104.053-.2.098-.292l-.335.05zm-.275.04c-.032.132-.05.27-.05.41 0 .22.043.432.122.624h.06l.37-.495a1.23 1.23 0 0 1-.007-.106l-.435-.442-.06.01zm1.232 2.227l.16 1.097a2.95 2.95 0 0 0 .833-.056l.01-1.108a1.86 1.86 0 0 1-1.003.067zm2.002-4.02c0-.077-.002-.152-.005-.23l-.033-.02-.79.776c.23.11.437.268.604.46.123-.322.224-.68.224-.987zm-2.474.555a.453.453 0 0 1 .053-.027l.01-1.14c-.358.1-.688.267-.977.486l.913.68zm1.23-.17L7.09 7.45a2.954 2.954 0 0 0-.834.056L6.25 8.612a1.882 1.882 0 0 1 1.002-.068zm1.92 3.62a5.512 5.512 0 0 1-.903-.58 1.79 1.79 0 0 1-.38.33l.89.663a2.96 2.96 0 0 0 .393-.413zm-.867-4.35a2.922 2.922 0 0 0-1.033-.347l.164 1.125c.02.006.04.012.058.02l.81-.798zM3.95 10.363c0 .21.02.415.063.613l1.108.01a1.855 1.855 0 0 1-.067-1.003l-1.096.16a3.21 3.21 0 0 0-.008.22zm.027-.399L5.103 9.8l.02-.058-.8-.812a2.888 2.888 0 0 0-.346 1.034zm.44-1.187l.777.79c.146-.31.377-.57.66-.757l-.888-.663a2.95 2.95 0 0 0-.55.63z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    fill: "#CE1126",
    cx: "6.871",
    cy: "10.363",
    r: ".603",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M6.87 6.748a3.615 3.615 0 1 0 2.952 5.702 4.52 4.52 0 0 1-.415-.17 3.18 3.18 0 1 1-.93-4.663 4.775 4.775 0 0 1 .01-.49 3.603 3.603 0 0 0-1.615-.38z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M10.888 12.59c-.233.057-.535.022-.858-.072a3.824 3.824 0 0 1-6.976-2.356c-.118.18-.084.476-.294.476-.166 0-.074-.227-.196-.227-.075 0-.086.105-.18.105-.012 0-.02-.004-.028-.004-.02 0-.03.046-.068.046-.05 0-.082-.06-.122-.06-.044 0-.058.085-.115.085-.06 0-.116-.1-.14-.145a4.963 4.963 0 0 0 9.562 1.8 6.878 6.878 0 0 1-1.09-.453c.033.33.506.81.506.81zM2.4 8.464c.114.094.022.26.104.375a4.626 4.626 0 0 1 6.22-2.713c.042-.1.09-.203.145-.31a4.963 4.963 0 0 0-6.603 2.69c.04.028.085-.083.132-.043zm10.532-5.101h2.73c3.49 0 5.018-1.248 5.62-2.353.033-.067-.01-.08-.075-.02-.76.68-1.893 1.87-6.52 1.87h-1.954c-3.07 0-4.228 1.385-4.53 2.31.154.038.306.084.453.137.546-.984 1.587-1.944 4.276-1.944z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M12.868 4.067c-2.733 0-4.308 1.877-4.127 3.67.135 1.337-.612 2.422-.612 2.422S9.17 9.686 9.17 7.783c0-1.803 1.795-3.116 3.307-3.116 1.462 0 3.16.01 4 .01 4.46 0 5.54-2.062 5.694-2.464.028-.06-.01-.048-.026-.02-.93 1.256-2.235 1.974-5.773 1.974-2.273 0-2.993-.1-3.502-.1z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M13.887 5.63c-.738 0-.812.205-.812.205-.024.03-.012.096-.063.116-.17.066-.355-.074-.5.114-.088.113-.3-.026-.438.054-.03.018 0 .097.024.107.064.028.17.02.21.053.044.035.04.084.08.113.048.037.14.053.18.11.03.042.042.128.088.13 1.108.064 2.245.064 3.297-.343.118-.188-1.032-.658-2.066-.658zM9.533 8.072c.014.107-.013.272.01.274a4.313 4.313 0 0 0 2.266-.38c.198-.085-.775-.592-1.586-.592a.889.889 0 0 0-.44.112c-.048.026-.084.133-.137.21-.04.06.036.15.005.19-.058.07-.13.113-.12.186zm1.055-1.877c-.038.006-.066.066-.094.106-.07.1-.29.078-.29.19.003.205-.225.242-.26.39-.03.115-.092.202-.1.326.817.004 1.66-.048 2.384-.465.19-.085-.998-.638-1.64-.545zm2.602-.701c-.058-.237-.346-.282-.542-.396-.078-.046-.17-.025-.26.014-.194.084-.445-.06-.646.086-.057.042-.087.12-.16.138-.094.024-.186.028-.28.04-.034.005-.1.028-.094.067.02.167-.137.202-.26.245-.12.042-.078.2-.082.318.798.01 1.626-.104 2.325-.512zM9.13 9.43c.203.106 1.194-.036 1.71-.357-.53-.45-1.38-.614-1.38-.614-.117.32-.24.64-.33.97z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#CE1126",
    d: "M8.98 9.617c-.098.052-.21.198-.12.257.157.107.418.346 1.62.346 1.173 0 1.62-.362 1.84-.587 0-.146-1.03-.442-1.17-.36-.04.02-.046.062-.052.08-.047.02-.19.022-.224.047-.08.06-.064.154-.086.16-.183.045-.41-.07-.582.01-.047.02-.043.15-.104.154-.124.01-.262-.066-.382-.028-.02.008-.085.017-.128.044a.695.695 0 0 0-.187-.063c-.063-.015-.125.028-.202.015-.073-.012-.154-.11-.224-.075zm4.75-.847c.218-.112.48-.122.637-.337-.97-.508-2.105-.455-2.243-.375-.035.02-.074.09-.118.118-.066.044-.13.022-.173.067-.026.026.003.096-.016.122-.024.034-.078.04-.11.06-.036.018-.107-.013-.16.01s-.057.073-.092.09c-.13.066-.32-.01-.41-.01-.045.003-.033.075-.02.09.06.057.228.074.22.16 0 .018-.04.076-.066.08.09.19.917.442 2.007.08.18-.054.37-.064.544-.154zm1.242-1.398c.09-.06.203-.062.256-.146.117-.153-1.018-.405-1.48-.405-.456 0-1.302.116-1.446.167-.06.025-.063.147-.134.156-.136.017-.27.033-.406.045-.045.003-.034.075-.02.087a.39.39 0 0 1 .153.226c.004.01.096.002.116.02.09.076.153.185.264.212.538.13 1.057.165 1.607.037.06-.015.103-.063.155-.07.193-.024.394-.035.544-.178.106-.103.274-.07.392-.15zm1.304-2.325c.032-.02.006-.122-.02-.125-.124-.02-.258-.068-.39.05-.046.042-.13-.046-.192-.008-.05.03-.1.11-.147.132-.128.057-.252-.076-.393-.06-.042.004-.03.097-.073.106-.12.03-.226-.104-.294-.06-.105.07-.193.155-.32.098-.122-.056-.282-.17-.366-.098-.145.126-.32-.057-.448-.008-.107.042-.397.11-.2.226.615.372 1.897.298 2.844-.253zm-6.088 6.973c-.032-.058-.115-.026-.173-.06-.042-.025-.062-.112-.102-.146-.032-.025-.107.033-.146.01-.056-.032-.098-.103-.14-.15-.05-.054-.093-.11-.14-.164a.603.603 0 0 0-.148-.13c-.03-.018-.09.02-.127.012-.065-.018-.104-.13-.156-.178-.03-.027-.08-.03-.106-.057-.027-.026-.033-.075-.062-.107-.037-.043-.094-.058-.136-.092-.057-.046-.098-.162-.142-.227s-.107-.07-.15-.127c-.05-.07-.08-.19-.145-.26-.063-.073-.224.042-.272.14a.447.447 0 0 0 .047.497c.602.672 1.382 1.23 2.276 1.377-.068-.095-.137-.263-.178-.336zm1.978-.224c-.092-.025-.17-.075-.255-.11-.05-.02-.1.06-.155.026-.112-.067-.21-.163-.298-.234-.07-.057-.213-.2-.274-.17-.023.01-.058.143-.116.1-.14-.105-.23-.218-.36-.332-.06-.053-.117.12-.193.083-.174-.086-.244-.274-.38-.41-.155-.154-.305-.335-.52-.393-.036-.01-.016.043-.05.07-.164.128-.346-.092-.505-.165-.147-.067-.276-.175-.44-.187-.036-.003-.034.05-.022.066.94 1.11 2.243 1.945 3.674 1.912.033 0 .102.003.046-.066-.047-.054-.096-.174-.152-.19zm1.329-.81c-.042-.006-.106.05-.143.044-.11-.02-.2-.12-.334-.19-.056-.03-.084.1-.128.098-.224-.013-.546-.25-.745-.37-.035-.02-.25.022-.284.03-.127.025-.29-.2-.39-.247-.077-.034-.184-.072-.256-.018-.1.073-.216.034-.323.032-.04 0-.078.088-.13.104-.146.047-.31-.055-.453.017-.004.002-.023.032-.022.043.01.09.11.105.177.146 1.033.654 2.627.866 3.515.668.02-.006-.01-.082-.07-.128-.062-.048-.153-.065-.192-.093-.09-.06-.138-.12-.22-.134zm2.078-.953c-.11.033-.193-.047-.284-.013-.022.01-.036.043-.054.043-.17.003-.285-.18-.46-.167-.043.004-.042.08-.078.088-.107.025-.203-.104-.3-.058a.228.228 0 0 1-.184.012c-.086-.025-.15-.102-.232-.114-.072-.012-.146.06-.228.037-.205-.06-.364-.254-.585-.208-.11.023-.203-.05-.278-.006-.083.05-.106.108-.19.158-.056.034-.188.03-.247.065-.046.026-.057.096-.108.117-.097.04-.21.012-.3.062-.012.005-.018.056.02.066.843.285 2.205.6 3.833.177.05-.016.06-.045.02-.092-.09-.1-.213-.206-.347-.167zm1.947-1.426c-.143.067-.31-.007-.47.03-.04.01-.01.07-.05.076-.156.02-.318-.018-.465.04-.115.044-.253-.007-.38-.005-.047.002-.048.066-.055.12-.007.042-.072.07-.093.063-.156-.046-.306-.06-.464-.085-.398-.06-.792-.186-1.166-.074-.122.04-.284.068-.377.164-.036.037-.074.11-.122.127-.23.085-.48.1-.706.182-.07.024-.2.12-.15.134 0 0 .703.204 1.47.204 1.48 0 2.605-.364 3.43-.813-.05-.062-.292-.21-.4-.16zm1.623-1.617c-.09.03-.215-.057-.292 0-.115.085-.25.07-.37.058-.056-.006-.145-.026-.195.013-.032.026.015.067.045.095-.3.103-.63.006-.914.12-.02.01-.034.114-.086.125-.26.052-.504-.05-.763-.003-.065.012-.036.15-.104.154-.232.013-.458-.007-.69-.017-.274-.012-.528.088-.788.168-.078.024-.1.147-.184.16-.224.034-.452-.006-.657.096-.015.007-.015.075 0 .084.25.142.54.24.71.47 1.748-.02 3.63-.248 5.084-1.44.028-.024-.144-.06-.236-.082-.09-.02-.164-.02-.274-.057-.098-.03-.188.028-.283.06zm1.814-1.645a1.134 1.134 0 0 0-.43-.024c-.03.008-.05.06-.078.064-.19.03-.323.12-.515.126-.04 0-.126.03-.178.054-.07.033-.165-.048-.22.013-.035.04.026.134-.037.164-.168.08-.363-.06-.526.045-.048.03.05.135-.01.154-.236.073-.644-.293-.797.087-.024.06-.098.032-.144.02-.045-.01-.107-.03-.134-.01-.146.118-.23.165-.433.108-.052-.015-.053.138-.152.114-.113-.028-.223-.11-.327-.064-.048.02-.013.148-.083.155-.283.028-.575-.013-.836.104-.065.028-.07.145-.16.16-.2.032-.398.01-.584.07-.03.008-.023.097.022.103.12.018.254 0 .346.054.112.068.184.256.293.26 2.245.044 3.866-.76 4.98-1.687.044-.04.022-.055 0-.068zm-.551-1.317c-.033.016-.022.126-.087.156-.11.05-.237.05-.355.085-.044.013-.042.072-.08.095-.06.04-.146.007-.192.04-.284.21-.62.116-.936.168.005.237-.37.092-.523.195-.167.113-.145.082-.395.084-.078 0-.036.115-.1.117-.198.002-.455-.06-.603-.017-.027.008-.035.133-.088.147-.11.03-.224.04-.327.074-.08.025.024.177-.083.21-.183.06-.384.017-.567.12-.073.043-.18.003-.272.02-.08.016-.11.1-.045.136.06.033.158.024.216.053.137.067.248.163.394.172 2.37.146 5.438-1.54 5.92-3.58.018-.083-.02-.068-.037-.022-.516 1.225-1.84 1.745-1.84 1.745z",
    __self: this
  }));
};

LogoDET.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoNSH = function LogoNSH(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#002654",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.28 14.25a.364.364 0 1 0-.73 0 .364.364 0 0 0 .73 0zm-.652 0a.286.286 0 1 1 .572 0 .286.286 0 0 1-.572 0z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.064 14.46l-.082-.177a.124.124 0 0 0-.042-.24h-.176v.416h.078v-.17h.056l.08.17h.086zm-.124-.248h-.098v-.09h.098c.025 0 .046.02.046.044s-.02.046-.046.046z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M22.26 6.65a.27.27 0 0 0-.13-.14l-1.144-.55-.353-.272-.513-.636-.17-.76a.268.268 0 0 0-.128-.174l-.804-.457-.505-.506a.28.28 0 0 0-.083-.057L15.284 1.73a.28.28 0 0 0-.16-.018l-4.284.856c-1.167-.09-2.19.056-2.233.062-.262.044-.264.328-.172.42L2.02 4.33a.265.265 0 0 0-.16.1l-.68.893c-.12.16-.03.4.18.428.046.007 4.686.643 4.686 3.457 0 1.036-.71 2.056-.72 2.065-.102.146-.04.38.172.42l2.62.472c.2.16.867.628 1.837.628 1.15 0 1.474-.435 1.548-.79.57-.243 1.286-.818 1.286-1.28 0-.29-.26-.483-.503-.483-.028 0-.053.01-.08.013 0 0-.12-.226-.417-.226-.127 0-.264.062-.37.108.26-.302.695-.66 1.39-.892 1.07-.354 2.467-.655 3.167-.796-1.063 3.09-4.704 4.71-4.742 4.728-.217.095-.177.37-.09.426l-.396.18c-.284.124-.164.537.13.512 3.842-.326 6.668-1.672 8.636-4.104h.792c.045 0 .09-.012.13-.033.774-.433 1.294-.415 1.3-.415a.272.272 0 0 0 .254-.148c.384-.78.797-1.194.8-1.197a.266.266 0 0 0 .062-.292L22.26 6.65z",
    fill: "#fcb514",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20.845 6.19l-.4-.308-.572-.71-.183-.82-.835-.475-.53-.533-3.146-1.368-4.32.863c-1.168-.098-2.214.055-2.214.055l.364.313-6.937 1.385-.68.893s4.922.635 4.922 3.72c0 1.14-.768 2.222-.768 2.222l2.69.485s.668.61 1.72.61c1.22 0 1.3-.513 1.3-.712.537-.173 1.266-.764 1.266-1.09 0-.13-.137-.215-.234-.215-.082 0-.192.064-.282.104.052-.115-.02-.316-.216-.316-.163 0-.438.23-.973.28 0 0 .407-1.09 1.907-1.585 1.515-.504 3.644-.895 3.644-.895-.9 3.535-5.027 5.325-5.027 5.325l1.523-.343c-.706.373-2.008.946-2.008.946 3.837-.326 6.63-1.647 8.59-4.177l.134.072h.727c.865-.483 1.442-.447 1.442-.447.412-.837.854-1.27.854-1.27l-.592-1.45-1.17-.56z",
    fill: "#002654",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M5.02 6.152a6.347 6.347 0 0 1 .781.562c.024-.146.054-.286.09-.42.26-.99.79-1.65.79-1.65a3.046 3.046 0 0 0-1.66 1.508z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.612 2.903l-.516-.253-1.66.368s.344.392.344 1.062c0 .216-.05.425-.137.627l.76.06c0-.027-.01-.046-.01-.073 0-1.322 1.22-1.79 1.22-1.79zm-1.21 1.863l-.76-.058",
    fill: "none",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.464 5.208a1.946 1.946 0 0 1-.062-.44c0-.027-.01-.046-.01-.073 0-1.322 1.22-1.79 1.22-1.79l-.516-.255-1.66.368s.344.392.344 1.062c0 .216-.05.425-.137.627-.07.163-.16.32-.273.472-.567.75-1.643 1.34-2.693 1.615-.216.056-.366.142-.47.264a.656.656 0 0 0-.104.172l-.437 1.02c-1.314.56-1.526 1.733-1.423 2.398.035-.958 1.022-2.322 2.653-2.03 0 0 .23-.462.745-.845-.124-.28-.145-.61-.064-.96.007.343.093.63.235.847.147-.09.3-.167.462-.228-.047-.35.046-.717.273-1.063-.13.373-.138.715-.054.993a2.58 2.58 0 0 1 .5-.088c.05-.417.284-.793.674-1.087-.294.365-.426.745-.41 1.08.244.005.48.042.704.11l.602-.66.51-.56c-.002 0-.433-.335-.606-.95z",
    fill: "none",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20.293 7.235l.6-.21s.71.45 1.028-.128l-1.085-.51a2.44 2.44 0 0 1-.877.307c-.813.117-1.434-.225-1.434-.225-.675 0-1.136.107-1.53.305-.323.16-.603.38-.92.65l.95-1.043.146-.867s.298.724 1.118.724c.397 0 .7-.22.7-.22.89.672 1.706.3 1.706.3l-.304-.253-.29.155.18-.272-.11-.126-.395.203.246-.374-.085-.1-.332.147.19-.324-.133-.205-.126-.658-.797-.386-.547-.51-3.062-1.24-3.015.67c.71.17 1.298.542 1.298.542s.227.52-.067 1.098a2.63 2.63 0 0 0-1.504.54c-.69.52-.982 1.226-.982 1.226l-.467.108.54-1.263.195-.456c-1.21.178-1.754-.85-1.754-.85l-.092-.315-7.016 1.57c.757.052 1.59.293 2.352.68.18-.605.63-1.074.63-1.074L9.1 3.99s.15.495.81.892l-.013.12c-.305.062-.784.26-1.24.617A3.194 3.194 0 0 0 7.4 8.206c0 .623.207 1.134.207 1.134s-.26-.35-.41-.945c-.065-.25-.11-.54-.11-.87 0-.612.176-1.194.375-1.656.257-.598.552-.995.552-.995s-.84.342-1.42 1.214c-.18.27-.333.593-.43.972.418.442.728.948.868 1.5.053.21.082.428.082.653 0 1.067-.446 1.74-.446 1.74l1.495.303s.565.822 1.778.822c.384 0 .888-.043.888-.288 0-.185-.453-.436-.453-.97 0-.87 1.092-1.772 2.264-2.158 1.37-.45 3.46-.977 4.513-.977 2.984 0 2.886 1.97 2.886 1.97l.144-.007a3.618 3.618 0 0 1 1.424-.457l.05-.003s.295-.55.637-.948c-.003 0-.446-.93-2.002-1.007z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.617 10.92c.097.436.388.56.416.72 0 0 .754-.154 1.256-.9-.978.49-1.673.18-1.673.18m8.839-1.8c0-.427-.705-.835-1.037-.835-1.367 0-1.35 2.905-6.17 5.366 4.106-.59 7.207-3.384 7.207-4.53M9.588 3.89s.44.748 1.224.748l.814-.056.67-.7.914-.14a4.33 4.33 0 0 0-1.11-.46l-.765 1.068.486-1.135a7.312 7.312 0 0 0-.423-.08l-.657.92.407-.952a8.495 8.495 0 0 0-.5-.046l-.502.702.305-.713c-.71-.03-1.23.028-1.23.028l.175.15.193.664z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M7.465 5.87a23.99 23.99 0 0 0-.867.22 3.13 3.13 0 0 0-.43.972c.417.442.727.948.867 1.5.042-.046.098-.104.164-.167-.065-.25-.11-.54-.11-.87 0-.612.176-1.194.375-1.655M5.8 6.714c.024-.146.054-.286.09-.42-.17.052-.317.1-.442.14.123.09.24.183.353.28m15.092.31s-.41-.187-.935-.33c-.813.117-1.434-.225-1.434-.225-.675 0-1.136.107-1.53.305 4.353.383 4.9 1.35 4.61 2.42l.052-.004s.294-.55.636-.947c0 0-.443-.93-2-1.007l.6-.212zM10.857 6.45l-.466.11.54-1.263c-.82.08-1.585.194-2.273.323a3.188 3.188 0 0 0-1.255 2.587c0 .623.207 1.134.207 1.134-.17-.72.224-1.428.224-1.428s.908-.58 2.373-.853c.103-.124.252-.21.47-.265 1.05-.273 2.125-.866 2.692-1.616a23.733 23.733 0 0 0-1.53.044 3.302 3.302 0 0 0-.983 1.226m6.314-.934a21.12 21.12 0 0 0-2.706-.308c.173.615.604.95.604.95l-.51.56c.92-.016 1.88.022 1.88.022l-.363.684.948-1.043.148-.865z",
    fill: "#fcb514",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#002654",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.612 2.903l-.516-.253-1.66.368s.343.392.343 1.062c0 .388-.153.76-.41 1.1-.567.75-1.643 1.342-2.693 1.615-.216.056-.366.142-.47.264a.656.656 0 0 0-.104.172l-.437 1.02c-1.314.56-1.526 1.733-1.423 2.398.035-.958 1.022-2.322 2.653-2.03 0 0 .23-.46.745-.845-.123-.28-.145-.61-.063-.96.006.343.093.63.234.847.147-.09.3-.167.462-.228-.047-.35.046-.717.273-1.063-.13.373-.138.715-.054.993.162-.044.33-.075.5-.088.05-.417.284-.793.674-1.087-.294.365-.426.745-.41 1.08.244.005.48.043.704.11l.602-.66.51-.56s-.433-.337-.605-.952a1.86 1.86 0 0 1-.07-.513c-.002-1.32 1.217-1.79 1.217-1.79m3.326 2.535c-.013-.27.03-.767-.97-1.077l-1.197-.368s.925.827.925 1.014a.592.592 0 0 0 .907.503l.02.242c.42.033.91-.033 1.034-.58-.172.395-.552.34-.72.266",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.194 5.36l.15-.575-1.17-.56c.763.45 1.02.7 1.02 1.136",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.373 5.416c.124 0 .217-.06.217-.06a2.976 2.976 0 0 0-.03-.125.243.243 0 0 1-.124.04.214.214 0 0 1-.22-.218.22.22 0 0 1 .163-.21c-.12-.168-.24-.24-.24-.24s-.207.116-.207.373.215.44.44.44",
    fill: "#fcb514",
    __self: this
  }));
};

LogoNSH.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoSTL = function LogoSTL(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#002654",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20.528 1.184H6.435c.934 1.456 1.244 1.935.45 1.912l-1.17-1.912H3.47l5.093 8.32c-.07-.004-.138-.008-.207-.008-2.087 0-3.723 1.168-3.723 2.66s1.636 2.66 3.723 2.66c2.088 0 3.723-1.168 3.723-2.66 0-.378-.103-.74-.31-1.082L10.627 9.21s.918.186 1.607-.134l-.332-.428s1.4.13 2.69-.255l-.437-.463s1.964-.05 3.325-1.797h-.134s1.014-.488 1.44-1.57h-.132s.65-.484.87-1.478h-.19s1.033-.728 1.194-1.9z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.21 14.254h.11v.336h.04v-.336h.12v-.04h-.27zm.483.266l-.096-.306h-.065v.376h.04v-.32l.102.32h.04l.1-.32v.32h.04v-.376h-.064z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M20.18 1.43H6.892c1.088 1.65.767 1.914-.143 1.914L5.575 1.43H3.91l5.117 8.358a5.065 5.065 0 0 0-.67-.047c-1.948 0-3.476 1.062-3.476 2.416 0 1.354 1.528 2.414 3.478 2.414 1.95 0 3.478-1.06 3.478-2.414 0-.332-.093-.652-.277-.954l-1.45-2.366s1.008.332 1.714.11l-.446-.574s1.664.14 2.776-.086l-.53-.562s2.48-.025 3.404-1.555h-.424s1.168-.165 1.758-1.427h-.432s1.006-.463 1.278-1.517h-.467c0 .002 1.045-.69 1.44-1.797z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FCB514",
    d: "M19.902 1.602H7.2c.752 1.146.895 1.99-.552 1.91l-1.17-1.91H4.22l5.156 8.422a4.7 4.7 0 0 0-1.016-.11c-1.822 0-3.304 1.006-3.304 2.242s1.48 2.242 3.304 2.242 3.305-1.006 3.305-2.242c0-.3-.084-.59-.25-.863L9.732 8.55s1.058.37 1.79.29c0 0-.333-.41-.48-.665 0 0 1.204.145 2.777.008l-.59-.626.154.002c2.552 0 3.32-1.31 3.32-1.31h-.694s1.723-.438 2.092-1.425h-.64s1.363-.668 1.497-1.425h-.78s1.36-.767 1.722-1.798z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#002F87",
    d: "M19.608 1.785H7.525c1.002 1.635 0 2.004-.982 1.904L5.377 1.784h-.832L9.77 10.32a4.42 4.42 0 0 0-1.41-.223c-1.725 0-3.122.922-3.122 2.06 0 1.137 1.397 2.06 3.12 2.06 1.726 0 3.123-.923 3.123-2.06 0-.27-.08-.53-.224-.77L9.318 8.225s1.252.435 1.83.435c0 0-.264-.336-.423-.697 0 0 1.5.16 2.7.067l-.653-.69s.194.036.612.036c2.112 0 2.922-.94 2.922-.94h-6.28l-.092-.15h5.21s2.124-.406 2.637-1.276H9.155l-.092-.15h7.94s1.48-.713 1.69-1.275H8.282l-.093-.15h9.568c0-.002 1.395-.727 1.85-1.65z",
    __self: this
  }));
};

LogoSTL.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoCGY = function LogoCGY(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    __self: this
  }, ".cgy-gold", "{", "fill:#f3bc52", "}", ".cgy-bg", "{", "fill:#ce1126", "}", ".cgy-fg", "{", "fill:#111", "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "reg",
    className: "cgy-fg",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.642 14.334zm0 .75a.33.33 0 0 1 0-.66.33.33 0 1 1 0 .66z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.814 14.657a.142.142 0 0 0-.143-.143h-.2v.48h.09V14.8h.064l.09.194h.1l-.094-.203a.142.142 0 0 0 .094-.133zm-.142.052h-.112v-.105h.112c.03 0 .053.023.053.053s-.024.05-.053.05z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cgy-fg",
    d: "M20.176 6.788s.19-.55.19-1.412c0-2.6-2.065-4.55-4.93-4.55-2.195 0-3.768 1.48-4.684 1.48-.377 0-.824-.76-.824-.76s-.622.31-.505 1.048c0 0-.495-.292-1.297-.292-.98 0-1.76.624-1.987 1.17-1.15.442-.95.965-1.93 1.057 0 0 .04 1.034 1.135 1.264-.562.562-1.712.67-1.712.67 0 .354.8 1.264 2.382 1.002-.407.583-.072 1.147-1.16 1.668 0 0 .135.222.7.366 0 0 .02.494.16.993 0 0-.598-.148-1.045.074 0 0 .578.44.636 1.26.064.925.565 2.346 2.114 2.193-.234.178-.7.352-.7.352s.424.71 1.488.71c1.09 0 1.384-1.165 2.452-1.165 1.007 0 1.487.753 3.127.753 3.438 0 5.875-3.41 6.148-5.676H15.7s-.448 1.55-1.51 1.55c-.687 0-1.39-.476-1.39-1.773 0-1.393 1.18-3.872 2.885-3.872.508 0 .676.397.676.858 0 .5-.194 1.032-.194 1.032h4.01zM7.473 9.878c-.783 0-1.08-.605-1.08-.605.26-.058.413-.48.663-.48.27 0 .292.384 1.388.746-.1.045-.453.34-.97.34z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M7.08 8.987c-.188 0-.26.295-.444.335 0 0 .246.383.824.383.3 0 .59-.164.59-.164-.76-.18-.81-.553-.97-.553z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cgy-gold",
    d: "M20.037 6.612s.143-.537.143-1.236C20.18 2.89 18.24.99 15.436.99c-2.023 0-3.74 1.5-4.665 1.5-.393 0-.88-.675-.88-.675s-.537.36-.15 1.18c0 0-.635-.515-1.6-.515-1.414 0-1.863 1.132-1.863 1.132-1.075.375-.996.977-1.865 1.046 0 0 .096.95 1.27.987-.448.83-1.816.953-1.816.953s.388.726 1.587.726c.774 0 1.313-.3 1.313-.3-1.2.647-.427 1.544-1.612 2.128 0 0 .26.147.577.2 0 0 .023.746.265 1.458 0 0-.333-.273-.988-.158 0 0 .442.5.476 1.133.054 1.017.603 2.068 1.65 2.068.582 0 .9-.28.9-.28-.14.53-1.046.878-1.046.878s.48.45 1.193.45c1.113 0 1.272-1.178 2.462-1.178.91 0 1.698.786 3.146.786 3.66 0 5.764-3.852 5.934-5.328H15.83s-.505 1.543-1.638 1.543c-1.02 0-1.574-.767-1.574-1.953 0-1.505 1.21-4.068 3.078-4.068.682 0 .873.557.873 1.01 0 .492-.155.9-.155.9h3.622zm-13.4 2.71c.183-.04.255-.335.444-.335.16 0 .21.373.97.554 0 0-.29.165-.59.165-.578 0-.824-.383-.824-.383z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cgy-bg",
    d: "M19.703 6.22s.092-.32.092-.844c0-2.207-1.867-4.01-4.36-4.01-1.93 0-3.452 1.506-4.685 1.506-.463 0-.762-.426-.762-.426s.035.958 1.283 1.47c-1.512-.07-1.91-1.08-3.08-1.08-1.157 0-1.596.914-1.596.914s.304-.294.756-.294c1.125 0 1.055 1.127 2.44 2.108-.796 0-1.103-.428-2.075-.428-1.938 0-1.514 1.28-3.03 1.635 0 0 .29.217.74.217 1.065 0 1.072-.522 1.834-.522.78 0 .664.562 1.59 1.217-.214.066-.853-.416-1.493-.416-.635 0-.978.443-1.08 1.032-.102.592-.414.742-.414.742.637.038.685-.644 1.144-.644.436 0 .71.596 1.27.71.452.09.986.214 1.188.542-.952.093-1.14.573-1.99.573-.962 0-1.37-.752-1.37-.752-.052 1.125.688 2.63 1.99 2.63.683 0 1.173-.24 1.667.026-1.594.454-.954 1.814-2.042 2.324 0 0 .183.09.46.09.92 0 1.09-1.234 2.462-1.234 1.016 0 1.783.794 3.14.794 2.986 0 5.158-3.057 5.412-4.523H16.11s-.572 1.562-1.918 1.562c-1.31 0-1.992-.995-1.992-2.368 0-1.96 1.532-4.485 3.492-4.485.857 0 1.312.737 1.312 1.388 0 .336-.088.547-.088.547h2.787z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cgy-bg",
    d: "M8.292 4.633s-.54-.73-1.394-.73c-1.076 0-1.403.888-2.05.957 0 0 .217.398.89.398 1.41 0 1.24-1.024 2.554-.625zm.716 7.624c-.636-.232-1.035.23-1.606.23-1.015 0-1.047-1.214-1.745-1.44 0 0 .163.352.163.567 0 .39.233 1.883 1.323 1.883.913 0 .887-.726 1.865-1.24z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cgy-fg",
    d: "M6.392 9.272s.298.606 1.08.606c.52 0 .87-.294.972-.34-1.096-.362-1.118-.747-1.388-.747-.25 0-.405.425-.664.482zm1.66.27s-.29.163-.592.163c-.578 0-.824-.383-.824-.383.184-.04.256-.335.445-.335.16 0 .21.373.97.554z",
    __self: this
  }));
};

LogoCGY.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoCOL = function LogoCOL(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.585 9.032c0 .212.172.385.387.385a.386.386 0 0 0 0-.774.388.388 0 0 0-.387.39zm.69 0a.304.304 0 1 1-.607 0 .304.304 0 0 1 .607 0z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.812 9.253h.083v-.18h.06l.083.18h.092l-.087-.188a.128.128 0 0 0 .087-.125.13.13 0 0 0-.13-.13h-.188v.443zm.084-.36H20a.048.048 0 0 1 0 .098h-.104v-.096z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.96 9.22c.58-.794.914-1.63.914-2.456 0-1.883-1.877-3.313-5.14-3.313-.117 0-.236.003-.355.007-.302-.592-.985-.87-1.44-.952l-.847-1.34-1.923 3.14c-3.435 1.263-6.215 3.735-6.215 6.12 0 .856.39 1.62 1.123 2.197l-1.42 2.32s2.934-.425 6.31-.606l.248-.655c1.344-.13 2.694-.48 3.938-.99a.788.788 0 0 0 .056.43l.222.446c.355.706.995 1.367 2.097 1.367 3.077 0 3.986-2.562 3.986-2.562 0-1.432-.658-2.47-1.557-3.15z",
    fill: "#2a6190",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#adafaa",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.554 11.493c-1.563 0-2.61.783-4.032.783-1.98 0-2.59-1.398-2.59-2.366 0-2.98 3.515-4.778 3.515-4.778l.07-.113c-.012.004-.04.02-.087.042-.583.287-3.738 1.974-3.738 4.848a2.635 2.635 0 0 0 .43 1.463l-2 3.263s2.465-.352 5.677-.53l.744-1.97c.652-.192 1.288-.386 2.108-.386 1.74 0 2.856.933 2.856.933s-.636-1.19-2.954-1.19z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.674 2.526l-.58-.913L7.948 8.39c0 .08.007.228.038.396.088.48.376 1.16 1.313 1.16 1.875 0 4.584-1.732 6.646-1.732a4.075 4.075 0 0 1 .334.013l-3.605-5.7z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.1 2.064l-4.115 6.72c.088.482.376 1.162 1.313 1.162 1.875 0 4.584-1.733 6.646-1.733.015 0 .03 0 .045.002l-3.89-6.15m-5.824 9.513l-1.687 2.756s2.1-.28 5.044-.457l.627-1.66c-.56.16-1.15.298-1.897.298-.837 0-1.594-.345-2.088-.937z",
    fill: "#75263d",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.974 12.72c-.03-.483-.4-1.164-.4-1.164-.195.3-.517.65-.612.75l-.002.896-.058.006-.122.012-.31-.478c-2.24 1.572-3.92.605-3.92.605l.503.775c.9 1.15 3.836.736 5.088-1.396l-.166-.006z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#FFF",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.71 12.38l-.2.527c1.182-.04 2.38-.28 3.49-.667-1.22-.566-3.1.072-3.29.14zM9.43 5.062c-2.637 1.024-4.68 2.86-4.68 4.704 0 .798.355 1.417.92 1.89l.314-.514a2.642 2.642 0 0 1-.292-1.232c0-2.875 3.154-4.562 3.738-4.848zm9.178 3.918c.315-.52.49-1.06.49-1.6 0-2.058-2.375-2.94-4.572-3.115-.015.17-.054.354-.122.555l2.176 3.44c.68.09 1.396.327 2.028.72zm-5.054-5.06a.94.94 0 0 1 .69.56c.18-.683-.044-1.682-1.57-1.952a4.56 4.56 0 0 0-.592-.063l-.118.568-.398.122-.245.89-.32.26-.47.765c1.034-.73 2.01-1.178 2.723-1.18.108.002.207.01.3.03z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.945 8.402c-2.26 0-4.74 1.76-6.688 1.76-.58 0-.753-.214-.753-.214l-.084.13s-2.388-1.146.873-4.694c0 0-2.807 1.464-3.03 4.426l.17-.142s-.09 1.994 2.168 1.994c1.815 0 2.46-.674 4.144-.674 3.593 0 4.17 2.048 4.17 2.048s-2.356.693-2.512-.606c0 0-.36 1.523 2.66.758 0 0 .19-.3.167-.688 0 0 .278.28.325.492 0 0 .23-.26-.138-.964 0 0 .313.286.518.703l.126-.105s.01-.305-.597-1.123l-.412.26s-.96-1.815-4.53-1.583c0 0 2.974-1.056 4.703 1.093l.373-.255s1.038 1.008 1.305 2.188l.058-.005.003-.894.005-1.07.3.353s.145-.266-.028-.818c0 0 .7.683.906 1.957l.056-.71c-.004-.613-1.018-3.618-4.255-3.618z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#adafaa",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.124 6.91l-.844 2.25s-1.178.444-1.955.57c1.557.12 4.263-1.644 6.03-1.644-.798-.25-2.71.505-2.71.505l-.52-1.68zM11.05 4.54c1.907-1.066 2.688-.78 2.98-.524-.908-.952-2.82.28-2.82.28l-.16.243zm6.313 9.363l.138-.228c-1.864.617-2.636-.02-2.636-.02.63.708 1.99.4 2.5.248z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.146 14.034c.538.657 2.173.59 3.452-.177l.096-.253c-.8.55-2.587 1.06-3.548.43z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#2a6190",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.103 7.644l-.518 1.374.84-.345c-.1-.32-.214-.68-.322-1.03zm1.811-3.929c-.645-.614-2.168-.112-2.168-.112l-.042.163c1.534-.573 2.21-.05 2.21-.05z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.018 8.705s1.07.332 1.55 1.276l-.208.364-.025.374-.337-.362-.177.11S16.9 9.17 14.623 9.17c-2.37 0-3.458 1.403-5.49 1.403-2.584 0-1.848-2.593-1.675-3.12 0 0-.503.94-.503 1.8 0 .464.08 1.636 2.04 1.636 1.8 0 3.597-1.517 5.696-1.517 1.463 0 2.713 1.04 3.038 1.45l.235-.123.482.508.104-.768.29-.448c-.002.002-.422-1.02-1.822-1.285zm2.246 2.883l-.3-.352-.003 1.07c.096-.102.418-.452.614-.75 0 0 .37.68.4 1.163l.167.007c-.205-1.274-.906-1.957-.906-1.957.175.553.03.818.03.818z",
    __self: this
  })));
};

LogoCOL.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoEDM = function LogoEDM(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#0038A8",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.56 14.148a.41.41 0 1 0-.41.412.41.41 0 0 0 .41-.412m-.735 0a.323.323 0 1 1 .646 0 .323.323 0 0 1-.645 0",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.317 14.384l-.093-.2a.14.14 0 0 0-.047-.27h-.198v.47h.087v-.19h.063l.09.19h.097zm-.14-.28h-.11V14h.11a.05.05 0 0 1 .052.053.05.05 0 0 1-.052.05",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M12.445.384c.913 1.432 1.325 1.96 1.325 2.76 0 .963-.81 1.742-1.77 1.742s-1.772-.78-1.772-1.74c0-.803.412-1.33 1.325-2.762a7.63 7.63 0 1 0 .892 0",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M12 14.936a6.935 6.935 0 0 0 1.785-13.64c.157.197.68.92.68 1.85 0 1.343-1.104 2.436-2.464 2.436S9.536 4.488 9.536 3.145c0-.93.524-1.65.68-1.848A6.937 6.937 0 0 0 12 14.937",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M13.443 8.832h-.497v.795a.29.29 0 0 1-.577 0V8.614h.576v-.75h-.577v-.586a.288.288 0 0 1 .576 0v.364h.497V5.96H11.34v1.03a.37.37 0 0 1 .37.368v2.346a.21.21 0 0 1-.212.21v4.25c0 .305-.16.443-.234.492a6.01 6.01 0 0 0 1.632-.02s.547-.108.547-.59V8.83z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M11.34 8.832h-.498v.873a.21.21 0 0 1-.42 0V7.2c0-.115.095-.21.21-.21V5.96h-1.08v1.03c.115 0 .21.095.21.21v2.504a.21.21 0 0 1-.21.21v3.703c0 .31-.17.41-.25.44a5.89 5.89 0 0 0 1.54.532s.498.074.498-.426V8.832z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M9.393 13.617V9.915a.21.21 0 0 1-.21-.21V7.2a.21.21 0 0 1 .21-.21V5.96H8.31v1.03a.21.21 0 0 1 .212.21v2.504a.21.21 0 0 1-.21.21v2.522c0 .527-.27.61-.412.618.334.325.71.61 1.12.85-.002 0 .373.143.373-.287m8.353-5.974V6.51a.55.55 0 0 0-.548-.55h-.648a.55.55 0 0 0-.55.55v1.514c0 .08.05.19.11.244l.867.775c.06.054.11.164.11.244v.335a.294.294 0 0 1-.59 0v-.79H16v4.317c1.076-1 1.745-2.398 1.745-3.946V8.98c0-.08-.048-.19-.108-.244l-.867-.775a.37.37 0 0 1-.11-.243v-.515a.213.213 0 0 1 .427 0v.44h.66z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#0038A8",
    d: "M8.153 12.437V6.51a.55.55 0 0 0-.55-.55h-.8a.55.55 0 0 0-.55.55v2.694c0 1.35.51 2.585 1.352 3.54.165.216.548.277.548-.307m7.479-2.733V8.477c0-.21-.235-.307-.235-.307s.235-.097.235-.307V6.51a.55.55 0 0 0-.55-.55h-1.48v1.03a.21.21 0 0 1 .21.21v2.504a.21.21 0 0 1-.21.21v4.13a.683.683 0 0 1-.203.493 5.928 5.928 0 0 0 1.115-.388s.254-.124.254-.586v-3.65a.295.295 0 0 1-.297-.295v-.917a.227.227 0 0 1 .454 0v4.908c0 .14-.02.257-.048.354.293-.162.57-.35.828-.56 0 0 .137-.113.137-.65v-2.84a.21.21 0 0 1-.213-.21",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M7.203 6.99a.29.29 0 0 0-.29.29v2.346a.29.29 0 0 0 .58 0V7.28a.29.29 0 0 0-.29-.29m7.519.873a.25.25 0 0 0 .25-.25V7.24a.25.25 0 0 0-.25-.25.25.25 0 0 0-.25.25v.373c0 .138.112.25.25.25",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#D14414",
    d: "M13.29 3.17c0-.904-.784-1.387-1.29-2.648-.506 1.262-1.29 1.744-1.29 2.648 0 .617.51 1.22 1.29 1.22s1.29-.603 1.29-1.22",
    __self: this
  }));
};

LogoEDM.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoVAN = function LogoVAN(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#99999A",
    d: "M11.856 11.363l2.625-1.31c1.8.505 2.332 1.187 2.332 1.187l1.028-1.163c.058-.06.227-.27.227-.653 0-.412-.43-.73-.735-.947-.51-1.345-3.345-1.735-3.555-2.202-.068-.163-.483-1.56-.483-1.56-.247-.725-.975-.725-1.25-.725s-.866.093-.866.093c0 1.008-.138 2.237-.28 2.464 0 0-.512.267-1.113.483l-1.433-.967.377 1.304C6.31 8.694 5.72 11.01 5.72 11.01s.62 4.88 6.74 4.88c3.235 0 5.1-1.562 5.1-1.562l-1.042-2.33s-1.592.827-3.625.827c-1.875 0-2.606-.874-2.876-1.383 1.586.046 1.836-.08 1.836-.08z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.76 11.106l2.693-1.35c1.825.518 2.352 1.075 2.352 1.075l.834-.938s.153-.146.153-.47c0-.3-.45-.605-.692-.776-.496-1.35-3.254-1.598-3.56-2.233-.122-.256-.277-.866-.507-1.61-.185-.538-.72-.538-.988-.538-.26 0-.595.053-.595.053 0 .55-.103 2.147-.36 2.423-.06.083-.532.272-1.042.47l.152.102-.156.155-.293.297-.323 1.007-.42-.215.15.373-.75.125.424.148-1.222.94.33.026-.436.786c.63-.286.82-.34.82-.34l-.18-.185 1.267-.513s-.096.256-.096.747c0 .07.01.174.035.297.154.767.903 2.348 3.544 2.348 1.91 0 3.386-.67 3.386-.67l.686 1.532s-1.793 1.242-4.504 1.242c-5.545 0-6.248-4.36-6.248-4.36.764-2.045 2.05-2.94 2.868-3.32l-.255-.024-.023-.077C6.64 8.82 6 11.03 6 11.03s.657 4.587 6.46 4.587c2.97 0 4.763-1.376 4.763-1.376l-.84-1.876s-1.567.736-3.49.736c-2.86 0-3.284-1.953-3.284-1.953s1.63.098 2.15-.04zm5.788-1.44zM8.302 3.654L7.79 1.946 8.95 3.46l.37-.113-.847-2.82-.41.124.5 1.673L7.414.846l-.367.112.846 2.82zM9.66 3c.023.172.126.255.294.232l.91-.124c.17-.023.253-.132.23-.304l-.096-.72-.44.058.087.615-.565.077L9.782.666l.565-.077.08.576.434-.06L10.77.42c-.024-.172-.133-.254-.304-.23l-.91.124c-.166.022-.245.13-.22.303L9.658 3zm2.106.054l.955.016c.17.004.267-.09.27-.263l.044-2.404c.005-.175-.092-.272-.262-.275L11.817.11c-.168-.004-.263.092-.264.264l-.046 2.404c0 .175.088.27.26.276zM11.988.49l.607.01-.04 2.19-.606-.012.038-2.188zm1.666 2.672l.92.165c.172.03.285-.047.316-.218l.47-2.633L14.925.4l-.45 2.526-.585-.103.45-2.527-.43-.078-.47 2.632c-.032.17.044.28.214.312zm3.492.624l.395-.836.6.284.163-.343-.6-.284.37-.776.697.33.166-.35-1.094-.52-1.262 2.658 1.105.524.165-.35zM20.55 2.8l-.975-.645-1.622 2.457.365.243.727-1.1.12.077-.34 1.358.386.252.01-.012.318-1.367.13.083c.14.09.268.063.363-.08l.593-.897c.095-.144.07-.275-.072-.37zm-.865.996l-.464-.306.515-.776.463.304-.513.778zM17.353 1.09l.003-.007-.417-.136-.97 1.884.32-2.093L15.866.6v.007l-.374 2.966.42.136zM6.384 3.854l.496-.24.32.462.393-.188v-.002L5.807 1.478l-.416.2.76 2.898.002.004.393-.19-.16-.536zM5.89 2.196L6.663 3.3l-.39.187-.38-1.29zm-1.255-.133l-.37.238.847 1.943-1.42-1.573-.372.24.005.007L5.39 5.08l.37-.24-1.12-2.77z",
    fill: "#001F5B",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#071C2C",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.93 8.776c-.46-1.32-2.988-1.414-3.56-2.245-.156-.23-.418-1.71-.68-1.912-.29-.223-1.032-.12-1.032-.12 0 .204-.05 2.02-.428 2.393-.25.216-.678.31-1.187.576l-.292.298-.323 1.007-.42-.215.15.373-.75.125.424.148-1.222.94.33.026-.436.786c.63-.286.82-.34.82-.34l-.18-.185 1.267-.513s-.096.256-.096.747c0 .07.01.174.035.297.05-.053 1.145-1.142 2.293-1.377L9.87 10.953s1.46.062 1.82-.04c1.126-.525 2.033-1.018 2.742-1.372 1.646.438 2.35 1.008 2.35 1.008l.175-.195c-.083-.062-.688-.48-1.878-.872.353-.14.782-.303.896-.303.263 0 .802.343 1.384.72l.13-.147s.03-.027.058-.084a.397.397 0 0 0 .045-.188c0-.275-.358-.456-.662-.702zm1.064 4.984a.284.284 0 1 0 .286.282.284.284 0 0 0-.286-.282zm0 .507c-.122 0-.222-.102-.222-.225s.1-.22.222-.22c.124 0 .226.097.226.22s-.102.225-.226.225z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.112 13.978a.096.096 0 0 0-.096-.096h-.136v.323h.062v-.133h.042l.062.133h.067l-.063-.137a.095.095 0 0 0 .062-.09zm-.095.035h-.075v-.07h.075c.02 0 .035.016.035.035 0 .017-.017.035-.035.035z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.553 8.58l-.684.38 1.363.186-.68-.567zM9.67 9.654l.116-.85-1.584 1.07 1.467-.22zm1.335-2.348l-1.146.638.297.715.848-1.354z",
    fill: "#99999A",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#001F5B",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M8.587 9.726l.974-.154.102-.576zm2.406-.693l-.523-.305-.37.197zm-.863-.607l.627-.85-.726.41z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.895 13.53c-3.04 0-3.804-2.084-3.804-2.867 0-.176.014-.32.027-.44l-.7.23.09.198-.544.2-.47.31.955.175-.198.682.41-.12.393 1 .47-.06.157.7s.887.614 2.385.75c1.983.175 3.756-.5 3.756-.5s-2.115.828-4.037.624c-1.468-.154-2.427-.752-2.427-.752l-.012-.634-.58.01-.272-.972-.515.24.227-.867-.99-.122.202-.604.236-.476-.317.01 1.325-.986-.576-.227.94-.183-.328-.66.58.332.23-.72c-.696.24-2.195 1.01-3.06 3.272.103.52 1.01 4.115 6.015 4.115 2.16 0 3.736-.818 4.223-1.104l-.52-1.157a9.376 9.376 0 0 1-3.268.604zM8.578 6.408l.4 1.176.71.174.284-.387z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#FFF",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.5 6.49c-.104-.13-.228-1.446-.228-1.446s-.02 1.342-.1 1.462c-.078.12-.463.342-.463.342s.43-.14.638-.153c.154-.007.643.093.643.093s-.387-.164-.49-.297zm.038 2.4c-2.14.127-3.136 1.966-3.19 2.07.053-.054 1.147-1.143 2.295-1.378l.895-.69zm4.392-.114c-1.2-.134-1.525-.422-1.525-.606 0-.072.062-.092.12-.092.27 0 .63.196.835.415-.122-.313-.84-.683-1.308-.683-.088 0-.217.026-.217.17 0 .293.446.667 1.587.76.613.145 1.25.487 1.126.927a.397.397 0 0 0 .045-.188c0-.277-.358-.458-.662-.704zm-1.586.699l.446.158a.956.956 0 0 0 .18-.09c.005-.013.005-.022-.016-.04a5.007 5.007 0 0 0-.335-.13l-.276.102zm.376-.14c.117.047.282.113.296.114.02.003.05.004.067 0 .015-.003.11-.054.185-.09-.07-.034-.21-.098-.302-.098-.09 0-.247.073-.247.073zm.44.153c-.004.008 0 .016.015.027.017.01.247.132.264.134.02 0 .034 0 .054-.003a1.7 1.7 0 0 0 .146-.092l-.308-.167c-.08.042-.166.09-.173.1zm.217.242c.008-.01.01-.02.005-.03a1.88 1.88 0 0 0-.268-.138c-.026-.005-.04-.005-.062.01a4.26 4.26 0 0 0-.18.096l.36.163c.067-.042.14-.09.145-.1zm.44.128c.007 0 .03-.004.056-.014a.902.902 0 0 0 .103-.077L16.7 9.59a1.32 1.32 0 0 0-.144.1c0 .004.002.008.016.03l.245.138zm.113.028c-.006.016-.01.023-.004.026.007.01.152.106.25.17l.11-.11-.253-.167a.926.926 0 0 0-.102.08zm-.157.047c.004-.008.002-.02-.008-.03a3.053 3.053 0 0 0-.25-.136.187.187 0 0 0-.07.006c-.01 0-.074.047-.136.092l.338.155c.057-.037.12-.08.125-.087zm.059.045c-.01.004-.07.05-.12.088l.306.19.113-.126a5.01 5.01 0 0 0-.236-.158c-.01-.005-.046 0-.062.006z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.432 9.54c1.646.438 2.35 1.008 2.35 1.008l.175-.195c-.083-.062-.688-.48-1.878-.872.353-.14.782-.303.896-.303.263 0 .802.343 1.384.72l.13-.147c-.508-.35-1.1-.765-1.53-.765-.35 0-.85.216-1.528.556z",
    __self: this
  })));
};

LogoVAN.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoANA = function LogoANA(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    __self: this
  }, ".ana-silver", "{", "fill:#a4a9ad", "}", ".ana-bg", "{", "fill:#111", "}", ".ana-high", "{", "fill:#b5985a", "}", ".ana-fg", "{", "fill:#f95602", "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "reg",
    className: "ana-bg",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.663 11.282l-.086-.184a.13.13 0 0 0-.043-.252h-.184v.436h.082v-.177h.06l.082.177h.09zm-.13-.26h-.102v-.095h.104a.048.048 0 1 1 0 .096z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M19.89 11.064a.383.383 0 1 0-.767 0 .383.383 0 0 0 .766 0zm-.683 0a.3.3 0 1 1 .6 0 .3.3 0 0 1-.6 0z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "ana-silver",
    d: "M14.162 2.26c-5.48 0-9.844 3-9.844 3s5.38-.432 5.38.682c0 .976-4.26 2.565-4.26 2.565s3.36.088 3.36.9c0 1.368-6.98 3.21-6.98 3.21s2.445 1.124 6.265 1.124c6.84 0 14.1-3.878 14.1-6.9 0-2.785-4.084-4.58-8.02-4.58z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "ana-bg",
    d: "M14.162 2.505c-3.958 0-7.355 1.608-8.866 2.452 0 0 4.646-.327 4.646.984 0 .818-1.997 1.8-3.392 2.387 1.146.11 2.492.385 2.492 1.078 0 1.277-4.277 2.643-6.433 3.25.972.324 2.917.84 5.473.84 6.874 0 13.856-3.873 13.856-6.657-.002-2.677-4.04-4.333-7.778-4.333z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "ana-fg",
    d: "M6.802 12.6l-.807.215s.722.08 1.858.08c8.155 0 13.57-4.962 13.57-5.752a.498.498 0 0 0-.028-.16c-2.89 3.438-8.63 5.81-14.593 5.618z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.26 3.177c-3.045 0-6.362 1.18-6.362 1.18s3.413-.17 3.413 1.257c0 1.33-2.41 2.308-2.41 2.308s1.463.343 1.463 1.188c0 1.924-4.746 3.118-4.746 3.118 9.958.483 15.646-4.84 15.646-5.825 0-.916-2.77-3.226-7.003-3.226z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "ana-high",
    d: "M14.26 3.372c-1.91 0-3.944.476-5.17.82 0 0 2.416.1 2.416 1.42 0 1.077-1.347 1.906-2.078 2.277.477.192 1.13.575 1.13 1.22 0 1.43-2.28 2.448-3.73 2.95 9.03 0 14.238-4.8 14.238-5.658 0-.78-2.673-3.03-6.806-3.03z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.592 4.812s2.668.602 3.86 1.4l-5.2 1.346 4.932-.16c-1.1.803-5.107 2.726-5.107 2.726s4.926-.733 8.04-3.578c-2.77-2.49-6.525-1.734-6.525-1.734z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "ana-bg",
    d: "M13.734 4.907s2.064.527 3.19 1.384L13.01 7.306l3.8-.124c-1.06.894-4.188 2.4-4.188 2.4 1.645-.435 4.243-1.34 6.185-3.03-1.73-1.447-3.82-1.67-5.073-1.643z",
    __self: this
  }));
};

LogoANA.defaultProps = {
  id: "Layer_2",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoDAL = function LogoDAL(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#111",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.445 14.702a.358.358 0 0 0-.717 0 .36.36 0 0 0 .717 0zm-.64 0a.282.282 0 1 1 .563 0 .282.282 0 0 1-.563 0z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.234 14.906l-.08-.173a.122.122 0 0 0-.04-.237h-.174v.41h.077v-.166h.055l.078.166h.084zm-.12-.243h-.097v-.09h.096c.025 0 .045.02.045.046 0 .023-.02.043-.045.043z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#006847",
    d: "M5.924 12.45H4.328l2.174-3.64L3 5.99h5.188l.556-.933h1.645L13.442 0l.513 5.083c.86.087 1.562.397 2.048.906h6.47l-6.148 3.29a5.324 5.324 0 0 1-.23.442c-.407.7-.9 1.246-1.503 1.664l.432 4.288L11 12.432c-.192.01-.39.017-.59.02L3.78 16l2.144-3.55z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#111",
    d: "M6.518 12.113H4.92l2.02-3.38-2.988-2.41H8.38l.556-.93h1.643l2.63-4.358.44 4.362c.97.042 1.73.36 2.205.927h5.28l-5.07 2.716a5.14 5.14 0 0 1-.264.515c-.415.717-.93 1.264-1.564 1.666l.373 3.69-3.5-2.82a13.36 13.36 0 0 1-.786.023L4.7 15.126l1.818-3.013z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M18.46 6.995h-2.957c-.315-.582-1.036-.93-2.07-.93h-.39l-.3-2.96-1.786 2.96h-1.64l-.557.93H5.854l1.96 1.58-1.71 2.866H8.91l-1.435.39-.937 1.55 3.618-1.938h.15c.365 0 .702-.015 1.017-.04l2.456 1.98-.216-2.063c-.664.07-1.307.014-1.604.006 1.728-.276 2.636-1.03 3.263-2.107.428-.733.547-1.39.405-1.91.245.3.372.606.42.99l2.41-1.305z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#8F8F8C",
    d: "M13.564 11.316l.215 2.062-1.072-2.025a7.1 7.1 0 0 0 .856-.037m-.82-8.212l-.7 2.96h1l-.3-2.96zm-4.44 4.654l-2.45-.763 1.96 1.58.49-.817zm1.5-.253h2.43c.702 0 1.12.13 1.225.49l1.015-.497c-.276-.644-1.067-.715-1.562-.715H9.998l-.006-.002-2.322 3.894 1.57-.768 1.172-1.912-.61-.49zm5.7-.51l-1.03.504c.068.174.162.592-.093 1.214-.29.708-1.16 1.96-3.53 1.96H7.67l-1.567.768H8.91l-.36.098-2.012 1.84 3.618-1.94h.15c.365 0 .702-.015 1.017-.038l.637-.078c1.728-.276 2.636-1.03 3.263-2.107.428-.732.547-1.39.405-1.91 0 0-.05-.166-.125-.312m.35.65c.105.2.167.412.194.654l2.41-1.306-2.603.652z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#111",
    d: "M12.234 7.505h-2.43l.608.49-1.17 1.91h1.61c.537 0 1.157-.02 1.673-.322.65-.382 1.037-1.056.947-1.528-.076-.406-.497-.55-1.238-.55z",
    __self: this
  }));
};

LogoDAL.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoLAK = function LogoLAK(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#111",
    d: "M18.518.22H5.482v10.85l.104.075 6.266 4.527.148.108.148-.107 6.265-4.527.104-.075V.22z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M5.734 10.97L12 15.497l6.266-4.53V.502H5.734v10.47z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#111",
    d: "M16.395 13.434a.128.128 0 0 0-.127-.127h-.182v.43h.08v-.176h.058l.08.177h.09l-.084-.182a.135.135 0 0 0 .085-.12zm-.127.046h-.102v-.094h.102c.025 0 .046.02.046.047s-.02.047-.046.047z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#111",
    d: "M16.24 13.145a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75zm0 .67a.294.294 0 1 1 .294-.294.293.293 0 0 1-.294.294z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6.147 10.758L12 14.988l5.852-4.23V8.183H6.147v2.575zm0-2.938H17.85V.916H6.148V7.82z",
    fill: "#ACAEA9",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6.517 10.57L12 14.533l5.482-3.963V8.824H6.517v1.746zm0-3.293h10.966V1.284H6.517v5.993z",
    fill: "#111",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M7.86 5.582v-1.3c0-1.51.352-2.05.352-2.05H6.846s.352.54.352 2.05c0 1.508-.352 2.047-.352 2.047h4.46s.373-.507.373-1.278c0 0-.51.53-1.705.53H7.86zm4.21-3.35s.352.54.352 2.05c0 1.508-.353 2.047-.353 2.047h1.014V4.802h3.057V6.33h1.015s-.353-.54-.353-2.05c0-1.51.353-2.048.353-2.048H12.07z",
    fill: "#ACAEA9",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.223 2.327c.106.25.294.846.294 1.955 0 1.108-.188 1.703-.294 1.953h.767V4.708h3.246v1.526h.766c-.106-.25-.293-.845-.293-1.953s.186-1.703.292-1.954h-4.78zm-4.457 3.35V4.28c0-1.108.187-1.703.294-1.954H7c.105.25.292.846.292 1.955 0 1.11-.187 1.704-.293 1.954h4.256c.07-.11.27-.47.316-.98-.243.167-.75.423-1.598.423H7.766z",
    fill: "#FFF",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#ACAEA9",
    d: "M12.99 4.15h3.245V2.885H12.99V4.15z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.084 2.98h3.057v1.076h-3.056z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M13.647 12.633l.408-2.332-.086-.036s-.33.443-.395.527a1.64 1.64 0 0 0-.746-.49l.154-.378-.28.113.018-.033-.347.018c-.024-.04-.188-.332-.21-.37l.087-.155.088-.074-.1-.19-.212.015-.004.118-.024.04-.024-.04-.005-.118-.21-.015-.1.19.086.073.09.154-.21.37c-.05 0-.35-.017-.35-.017l.02.033a23.85 23.85 0 0 1-.28-.113l.154.38a1.65 1.65 0 0 0-.747.49c-.062-.085-.394-.528-.394-.528l-.085.037.406 2.33s.58.15 1.65.15c1.07 0 1.647-.147 1.647-.147z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.662 12.674s-.53-.05-.844-.17c.214.03.562.072.88.072 0 0-.43-.043-.715-.15.216.027.522.06.805.06 0 0-.42-.042-.705-.147.256-.056.57-.1.917-.1s.66.044.916.1a3.58 3.58 0 0 1-.704.147c.28 0 .588-.033.804-.06-.285.106-.715.15-.715.15.318 0 .667-.042.882-.073-.314.12-.845.17-.845.17.78-.02 1.242-.137 1.242-.137l.356-2.08-.362.484c-.16-.26-.47-.468-.865-.583l.108-.266-.56.25v-.136L12 9.76l-.26.445v.137l-.56-.25.108.266c-.396.115-.704.324-.864.584l-.362-.484.358 2.08s.463.114 1.242.136z",
    fill: "#111",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#ACAEA9",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.74 10.393l-.473-.21.473 1.15v-.94zm.52 0v.94l.473-1.15-.474.21zm-.05-.02l-.21-.275-.212.275.212.252.21-.252z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.656 11.81a.204.204 0 0 1-.164-.202c0-.113.087-.205.193-.205a.13.13 0 0 1 .04.004l.132-.766-.573.767c.013.367-.077.516-.077.516s-.19-.078-.406-.12l-.073-.372a.158.158 0 0 1-.088-.026h-.003l-.19.342s-.236-.023-.355-.023l.107-.328-.2-.512-.197.51.106.328c-.12 0-.358.024-.358.024l-.174-.316c-.01.002-.022.002-.034.002a.15.15 0 0 1-.067-.016l-.078.387c-.215.044-.407.122-.407.122s-.09-.148-.077-.516l-.573-.766.132.766c.013-.004.026-.004.04-.004a.2.2 0 0 1 .194.205.203.203 0 0 1-.166.203l.114.662c.18-.07.787-.28 1.543-.28.756 0 1.363.21 1.544.28l.112-.66z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.09 10.365a.09.09 0 0 0-.09-.09c-.05 0-.088.04-.088.09s.038.088.088.088a.09.09 0 0 0 .09-.088zm.39.092a.09.09 0 0 0-.07-.035.09.09 0 0 0-.09.09c0 .04.03.076.067.086a.1.1 0 0 0 .047.014.083.083 0 0 0 .084-.084.084.084 0 0 0-.04-.07zm-.857 0a.09.09 0 0 0-.07-.035.09.09 0 0 0-.09.09c0 .04.03.076.068.086a.1.1 0 0 0 .048.014.083.083 0 0 0 .084-.084.084.084 0 0 0-.04-.07z",
    fill: "#111",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#FFF",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.49 11.03l.098.13c.24-.47.722-.523.722-.523-.412.154-.585.395-.64.633l.092.12s-.012.333.055.474a.392.392 0 0 1 .07-.025c-.214-.886.482-1.048.482-1.048-.493.254-.446.707-.347 1.004l.136-.033.073-.367a.17.17 0 1 1 .196-.262c.045.03.076.08.076.137a.16.16 0 0 1-.084.142l.157.285a5.1 5.1 0 0 1 .255-.018l-.505-1.23c-.39.114-.697.325-.838.58zm2.103.353a.17.17 0 1 1 .222-.25c.046.03.076.08.076.137a.16.16 0 0 1-.117.154l.07.338.134.033c.1-.297.145-.75-.348-1.004 0 0 .696.163.482 1.048.026.008.05.016.07.025.066-.14.055-.473.055-.473l.094-.12c-.056-.24-.227-.48-.64-.634 0 0 .48.053.72.523l.1-.132c-.14-.254-.446-.465-.838-.58l-.504 1.23c.086.003.17.01.254.017l.17-.312z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.294 11.092a.145.145 0 0 0 0 .29c.08 0 .146-.065.146-.145s-.066-.145-.146-.145zm1.531.144c0-.08-.065-.145-.146-.145s-.146.065-.146.146a.145.145 0 1 0 .29 0zm-2.452.371c0-.035-.026-.064-.06-.064a.04.04 0 0 0-.016.002l.02.125a.06.06 0 0 0 .056-.063z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.313 11.424a.124.124 0 0 0-.037.006l.004.023a.096.096 0 0 1 .033-.006c.082 0 .146.072.146.16 0 .08-.055.145-.127.156l.005.023a.18.18 0 0 0 .146-.18c0-.1-.077-.182-.17-.182zm3.313.183c0 .033.023.06.055.062l.022-.126c-.005-.002-.01-.002-.017-.002-.033 0-.06.03-.06.065z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.66 11.787l.005-.023a.155.155 0 0 1-.126-.156c0-.088.064-.16.145-.16a.1.1 0 0 1 .033.006l.005-.023a.13.13 0 0 0-.038-.005c-.094 0-.17.082-.17.184 0 .09.063.163.146.177zm-1.585-1.422c0-.04-.033-.076-.075-.076s-.076.034-.076.075c0 .043.034.076.076.076s.075-.032.075-.075zm.333.221a.074.074 0 0 0 .076-.074.075.075 0 0 0-.076-.076.076.076 0 0 0-.076.076c0 .04.035.074.076.074zm-.856 0a.074.074 0 0 0 .076-.074.075.075 0 0 0-.076-.076.075.075 0 0 0 0 .15z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#111",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "11.294",
    cy: "11.236",
    r: ".129",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "12.68",
    cy: "11.236",
    r: ".129",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.995 11.45a.09.09 0 0 0 .033.01.078.078 0 0 0 .077-.08.076.076 0 0 0-.043-.067c.01.014.02.033.02.053a.086.086 0 0 1-.087.085z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "11.995",
    cy: "11.365",
    r: ".068",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "12",
    cy: "10.365",
    r: ".067",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "12.408",
    cy: "10.511",
    r: ".067",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "11.552",
    cy: "10.511",
    r: ".067",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.598 12.043h-.002c.01.004.022.008.034.008a.077.077 0 0 0 .077-.077.078.078 0 0 0-.043-.068c.012.016.02.033.02.053a.086.086 0 0 1-.086.085zm-.66.115h-.002c.01.008.02.01.034.01a.077.077 0 0 0 .077-.076c0-.03-.018-.06-.043-.07a.08.08 0 0 1 .02.053.087.087 0 0 1-.086.083zm1.417-.115a.08.08 0 0 0 .032.008.077.077 0 0 0 .077-.077.078.078 0 0 0-.043-.068c.012.016.02.033.02.053a.086.086 0 0 1-.085.085zm.661.115c.01.008.02.01.033.01a.076.076 0 0 0 .075-.076c0-.03-.018-.06-.043-.07.013.016.02.03.02.053 0 .046-.04.083-.086.083z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "11.598",
    cy: "11.958",
    r: ".069",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "10.938",
    cy: "12.073",
    r: ".069",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "12.355",
    cy: "11.958",
    r: ".069",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "13.016",
    cy: "12.073",
    r: ".069",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.282 11.375l.083.004-.036-.11zm.193.063l.024-.112-.094.067zm.14.022l-.112.01.035.073zm-.077.208l.11-.03-.102-.052zm-.01.029l-.045.07.11.024zm-.162.137l.08.08-.004-.113zm3.304-.564l-.037.11.084-.005zm-.076.123l-.093-.067.024.112zm-.097.077l-.113-.01.077.083zm-.043.116l-.102.05.11.032zm-.049.204l.112-.022-.046-.07zm.152.01l-.004.114.08-.08zm-1.837-1.612l.28-.48.278.48h.224l.025-.053h-.22l-.278-.48.136-.233.033-.033-.024-.036-.05.005-.008.042-.118.203-.117-.203-.01-.043-.05-.006-.022.035.034.032.136.234-.278.48h-.22l.026.052z",
    __self: this
  })));
};

LogoLAK.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoSJS = function LogoSJS(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.215 4.487L16.71 6.894c.163-.077.337-.156.51-.235l1.608-2.602s-2.734.598-5.225.85c.06.093.117.186.176.28 1.708-.18 3.49-.51 4.435-.7z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.456 10.847c-.208-.865-.24-1.022-.702-1.255l-.075-.098c.846-1.517 1.458-3.327 1.458-3.543 0-.052-.023-.067-.056-.05-1.347.682-2.826 1.29-3.154 1.52l-.087.12a18.706 18.706 0 0 0-1.586-1.268C12.748 3.316 10.438 1.24 8.95.495c0 .31 1.472 2.577 1.698 4.483-2.665-.182-6.045-.92-6.045-.92l2.91 4.71c-2.39.146-4.488.196-4.488.196 0 .166 2.67 1.442 6.61 2.334.863.195 1.504.164 1.924.164a19.82 19.82 0 0 0-.236-.252c.57.348 1.093.695 1.562 1.008l-.388.002c-.948 0-1.664-.05-2.117-.084l-.41-.652a9.842 9.842 0 0 1-.43-.087c-.18-.04-.353-.082-.47-.11l.595.963c-.558.4-1.986 1.613-3.02 3.304l.09.167s1-.06 1.844-.085c0 0 .378-1.08 1.734-2.333l1.4 2.264 1.697-2.747c.11-.013.222-.025.335-.04.117.074.23.144.34.206a.386.386 0 0 0-.146.146s.097.067.103.2c0 0 .084.013.172-.013 0 0 .06-.092.11-.2.112.057.217.105.315.145 0 .095.016.165.016.165s.107.033.238-.083c.752.172 1.202.026 1.202.026.764.226 1.152-.027 1.152-.027.3.13.55.205 1.368.205.445 0 .592-.053.592-.128.004-.36-.374-1.822-.752-2.575z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.676 10.58l.028.1s.244.168.422.218l.14-.103s-.08-.104-.054-.257c-.186-.12-.536.043-.536.043zm1.716-4.17l-.192.34.042.262c-.86 1.692-1.817 3.223-1.817 3.223l.118.287.14-.097.096.008s.916-.877 2.084-3.14c0 0 .34.01.365-.263.027-.277.046-.47.046-.58-.422-.154-.884-.04-.884-.04z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M14.116 12.077c-.307.1-.438.03-.438.03.06-.062.1-.18.1-.18-.272.076-.357 0-.357 0 .045-.025.09-.13.09-.13-.354 0-.547.06-.547.06.293.036.484.165.647.33.23-.016.37-.036.47-.053l.036-.057zm1.137 1.028c.208-.123.36-.24.36-.24-.685.03-.942-.053-.942-.053.123-.122.275-.228.372-.324-.073.012-.15.02-.223.025-.002.033-.04.07-.143.135a42.5 42.5 0 0 1-.604.09c.056.06.116.117.183.173l.148-.047c0 .04-.01.09-.027.138.08.057.173.107.276.15a.523.523 0 0 1 .07-.2c.036.01.055.11.074.138.05.074.117.086.13.147.287.066.65.084 1.13.023l.134-.107c-.7.014-.937-.045-.937-.045z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M13.52 11.898s.15.01.322-.052c0 0 .01.115-.07.22 0 0 .147-.002.446-.07 0 0-.025.06-.062.126a.74.74 0 0 1 .138-.016c.097 0 .108.02.192.02.16 0 .18.034.202.22.033.047.07.08.096.107.118-.01.254-.022.39-.042 0 0-.15.212-.38.368 0 0 .636.06.966.02 0 0-.142.172-.34.272 0 0 .44.028.914.02 0 0-.093.103-.186.178 0 0 .584.13 1 .032-1.5-.597-2.326-1.5-3.58-1.5-.02.054-.047.098-.047.098zM7.47 14.6l-.336.432s.992-.154 1.587-.064l.166-.283c-.325-.17-1.416-.085-1.416-.085z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M7.624 14.406l-.104.13s1.025-.077 1.397.096l.243-.365c-.33-.055-1.536.14-1.536.14zm.176-.216l-.117.144s1.227-.19 1.517-.12l.02-.03c-.303-.1-1.42.005-1.42.005zm.414-.476l-.356.408s.993-.104 1.402.012l.412-.477c-.418-.07-1.458.057-1.458.057zm.534-.536l-.472.468s.87-.118 1.444-.043l.225-.25c-.215-.182-1.197-.175-1.197-.175z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M8.838 13.096l-.025.022s.85-.014 1.174.19l.05-.052c-.264-.15-1.2-.16-1.2-.16z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M9.307 12.69l-.405.35s.944.016 1.176.172l.348-.343c-.306-.176-1.12-.18-1.12-.18zm-.542 2.315l.012.086.137-.236-.015-.083zm.181-.309l.013.082.227-.333-.016-.093zm.274-.412l.014.1.023-.03-.02-.096zm.064-.088l.02.1.387-.436-.015-.12zm.442-.511l.016.12.235-.25-.03-.115zm.267-.295l.03.115.046-.047-.017-.133zm.111-.12l.016.135.308-.3-.004-.158z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.056 15.234a.33.33 0 1 0-.33.33.33.33 0 0 0 .33-.33zm-.59 0a.26.26 0 1 1 .52 0 .26.26 0 0 1-.52 0z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.86 15.423l-.073-.16a.112.112 0 0 0-.037-.217h-.16v.377h.07v-.154h.052l.07.153h.08zm-.11-.224h-.09v-.084h.09c.022 0 .04.02.04.042s-.018.04-.04.04z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#EA7200",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.104 13.262c.116-.156.194-.256.214-.318-.103.044-.234.068-.305.177 0 0 .05.05.09.142zm.596.108s.077-.01.146-.078c0 0-.073-.11-.115-.215-.05.13-.03.292-.03.292zm-.357-2.74c.062.492.18.7.18.7s.186.147.54.29c-.358-.66-.72-.99-.72-.99zm-3.869 2.198l.142-.08s.585.095 4.086-.267c-.084-.06-.125-.048-.125-.187 0-.045.007-.053-.068-.053-.078 0-.11-.02-.2-.02-.113 0-.28.112-1.995.112-1.365 0-2.32-.114-2.385-.114-.062 0-.186.116-.55.41 0 .002.718-.007 1.094.2zM8.69 15.02c-.526-.1-1.612.082-1.612.082l-.292.42 1.7-.08.205-.42zm11.698-8.068c-.568 1.02-1.188 2.375-1.863 3.21l.195-.12.042-.043-.035.114.082-.04-.125.22.115-.094s.58-.65 2.043-3.294c-.325-.05-.455.046-.455.046zm.059-.397l-.118.188s.285-.054.667-.022l.138-.193c-.42-.08-.688.028-.688.028z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.642 10.183s-.054.044-.138.067l.07.15.045-.033-.02-.055.075-.14-.033.01zm.508.392c-.12-.062-.352.03-.352.03s.235.055.368.115c0 0-.022-.054-.016-.145zm-6.288 2.298a26.917 26.917 0 0 1-1.948.11l-.24.002c-.01.007-.015.014-.024.02l-.067.06 1.132 1.807 1.257-2.008c-.037.002-.073.006-.11.01m3.698-5.911c.05-.022.1-.045.15-.07l1.505-2.406c-.943.19-2.727.52-4.436.7.016.03.032.057.05.085l.113.192a50.868 50.868 0 0 0 3.667-.562l-1.408 2.233.36-.172m-6.591 4.52a9.842 9.842 0 0 1-.43-.087l.445.712.106.007.29.02-.41-.652z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.568 12.898c-.75.06-1.343.078-1.654.084-.154.003-.24.003-.24.003-.01.007-.015.014-.024.02l1.065 1.703 1.147-1.835c-.1.01-.198.018-.294.025zm-2.476-.783l.29.02-.413-.65a9.842 9.842 0 0 1-.31-.062l.432.692zm7.518-7.213l-1.408 2.233c.106-.053.228-.11.358-.173l1.47-2.347c-.93.182-2.592.484-4.2.657l.113.192a49.69 49.69 0 0 0 3.667-.562zm-6.932.542c0-.104-.004-.21-.015-.316-.915.097-1.462.313-1.67.412.32-.09.89-.117 1.685-.096zm6.959 4.223s-1.114-1.564-3.256-3.14c.183.375.353.764.505 1.166.02.056.018.105-.03.105-.47 0-2.125-.91-3.752-.748.845.805 1.686 1.934.87 1.52 0 0 .85.526 1.85 1.58.744 0 .893.125.937.23.084.2.207.557.695 1.13.224 0 .265-.014.347-.214 0 0 .06.256-.052.444 1.016.803 2.988 1.61 3.29 1.61.12 0-.13-1.104-.7-2.43-.188-.838-.29-1.074-.703-1.253zM8.38 8.71s.29.173.768.532c-.117-.203-.426-.424-.765-.63l-.74.056.054.088.683-.045zm4.37 1.302a3.037 3.037 0 0 0 .007 1.145c-.02-.212.146-.924.146-.924l-.152-.22zm-.37-.364c-.118.73.047 1.31.047 1.31-.035-.267.104-1.056.104-1.056l-.15-.254zm-.37-.33c-.12.78.067 1.4.067 1.4-.036-.353.085-1.18.085-1.18l-.152-.22zm-.84-1.284S9.738 6.848 7.96 6.55c-.065 0-.193.27-.193.27s.188-.17.245-.17c1.522.294 3.158 1.384 3.158 1.384z",
    fill: "#006D75",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M11.715 14.25l.854-1.352a27.83 27.83 0 0 1-1.655.084l.8 1.27z",
    __self: this
  }));
};

LogoSJS.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoCBJ = function LogoCBJ(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    __self: this
  }, ".cbj-silver", "{", "fill:#a4a9ad", "}", ".cbj-bg", "{", "fill:#002654", "}", ".cbj-fg", "{", "fill:#ce1126", "}", ".cbj-st3", "{", "fill:#fff", "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "reg",
    className: "cbj-bg",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.885 11.85a.313.313 0 1 0 0 .626.313.313 0 0 0 0-.627zm0 .56a.246.246 0 0 1-.246-.246.247.247 0 1 1 .246.246z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.016 12.09a.107.107 0 0 0-.106-.105h-.152v.358h.068v-.146h.047l.068.146h.076l-.072-.15a.112.112 0 0 0 .072-.102zm-.11.04h-.083v-.08h.084a.04.04 0 0 1 .038.04c0 .02-.015.04-.038.04z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cbj-silver",
    d: "M17.3 11.285l3.373-7.764s-2.44 1.447-5.23 2.552l4.793-3.563-3.017.518c-.434-.26-1.935-1.036-4.358-1.036l-.394.01L11.958.5l-.774 1.603C6.766 2.67 3.327 5.28 3.327 8.097c0 1.26.54 2.913 3.026 3.808l-1.254 3.1 3.317-2.617c.713.097 1.503.146 2.356.146.997 0 1.978-.076 2.92-.22l3.63 3.187-1.238-3.736s.73-.238 1.214-.48z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cbj-bg",
    d: "M20.05 4.223s-2.845 1.656-6.014 2.75l-.11-.307 5.434-3.77-6.04 1.547L16.7 3.08s-1.43-.798-3.838-.798c-.2 0-.4.005-.602.014l-.35-1.027-1.88 3.897-2.87.817L9.826 4.89l.874-1.78.182-.372.158-.324C7.03 2.99 3.62 5.38 3.62 8.097c0 1.523.838 2.92 3.133 3.637L5.567 14.32l2.763-2.24c.715.104 1.526.16 2.442.16 1.147 0 2.158-.098 3.013-.236l3.064 2.722-1.146-3.152c.89-.262 1.37-.502 1.37-.502l2.976-6.85z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cbj-fg",
    d: "M15.708 3.054s-1.137-.553-3.354-.48l.1.3c.247-.03 1.582-.156 3.254.18zm-3.253 7.273c-1.297-.245-2.073-.496-2.073-.496s.6-.23 1.483-.637a32.66 32.66 0 0 0 2.832-1.463c.823-.48 1.648-1.024 2.36-1.61 0 0-4.15 2.265-7.596 2.265-2.316 0-3.386-1.075-3.386-1.795 0-2.146 3.778-3.257 4.625-3.48l.182-.372C7.25 3.453 5.9 4.878 5.9 4.878s-1.214.735-1.674 2.098c-.107.317-.173.67-.173 1.054 0 1.642 1.075 3.787 6.59 3.787 3.912 0 5.994-1.037 5.994-1.037a26.65 26.65 0 0 1-4.182-.453z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cbj-silver",
    d: "M8.526 7.868l.237-.516-1.387-.382s-.395.704 1.15.898z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.002 4.018l-4.42 1.07-.777-2.432L10.572 5.6l-3.353.837 2.346.574-.45.9.125.004.174.002c.16 0 .326-.006.493-.016.41-.024.833-.078 1.265-.155.33-.058.662-.13.996-.214.44-.108.886-.237 1.326-.377l-.254-.677 3.762-2.458zM15.26 11.85a1.007 1.007 0 0 0-.292.15.553.553 0 0 0-.174.27 1.58 1.58 0 0 0-.038.15l1.025.81-.52-1.38zm-7.942.058a.37.37 0 0 0-.098-.022.472.472 0 0 0-.087-.01l-.558 1.114 1.047-.78c-.067-.12-.144-.246-.304-.302z",
    className: "cbj-silver",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "cbj-st3",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M8.763 9.595c1.367 0 2.51-.245 3.103-.4a32.66 32.66 0 0 0 2.832-1.464c-.86.327-3.58 1.296-5.506 1.296-2.922 0-3.836-1.693-3.836-2.648 0-.854.546-1.5.546-1.5s-1.008.704-1.008 1.876c0 1.93 1.924 2.84 3.87 2.84z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9.887 10.497c-5.43 0-5.673-2.894-5.66-3.52a3.25 3.25 0 0 0-.174 1.053s.056 3.2 6.262 3.2c2.02 0 3.84-.425 4.416-.574a26.71 26.71 0 0 1-2.275-.33c-.43.07-1.288.17-2.568.17zm6.835-2.321c-.177-.37-.692-.435-1.15-.144-.46.292-.69.826-.516 1.196.177.372.69.436 1.15.145.46-.293.69-.826.516-1.197z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.125 9.558l-.004-.13-.114.142-.18.024.113.06-.113.145.19-.1.132.094-.025-.156.178-.1zm1.378-.654L13.5 8.77l-.12.15-.188.023.116.063-.116.15.2-.103.135.098-.022-.16.183-.105zm1.002.108L14.5 8.89l-.106.133-.17.023.105.058-.106.135.178-.094.125.088-.02-.145.167-.098zm-1.385.752v-.12l-.108.13-.17.018.103.062-.108.132.182-.09.12.092-.017-.147.17-.09zm.994.138V9.78L14 9.912l-.168.02.104.058-.108.136.183-.092.12.094-.016-.15.17-.09zm.82-1.86l-.006-.155-.136.17-.216.028.134.074-.134.172.23-.12.157.114-.028-.187.21-.122zm1.351-.802l-.123.225.257-.172.23.12-.084-.222.237-.17-.266.052-.047-.186-.13.223-.264.056zm2.153-1.11l-.32.036-.025-.236-.184.26-.32.043.21.11-.177.267.328-.183.253.173-.065-.284zm-1.686 3.89v-.187l-.172.204-.26.027.16.092-.168.208.28-.14.19.14-.028-.224.26-.143zm.5-1.232l-.004-.172-.154.19-.24.033.15.08-.15.19.254-.13.178.125-.03-.207.233-.136zm.43-1.213l-.006-.186-.166.205-.26.034.16.087-.16.21.276-.143.19.137-.032-.225.256-.148zm-2.315 2.309l-.127.154-.196.02.12.07-.125.155.208-.106.143.106-.02-.17.192-.104-.194.014zM11.805 3.07l-.633 2.873 1.24-.805zm4.478 1.322l-5.11 1.552s1.877.41 1.934.417c.058.01 3.176-1.968 3.176-1.968z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.17 7.532l-.997-1.59v1.804c.328-.06.66-.13.996-.214zm-2.93.382l.174.002c.16 0 .326-.006.493-.016l1.265-1.958-1.484 1.095-.447.877z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.636 5.65l-2.756.743 3.292-.45zm4.158 6.62l.68.538L14.97 12a.57.57 0 0 0-.174.27zm-7.999.45l.522-.812a.37.37 0 0 0-.098-.022l-.425.833z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cbj-fg",
    d: "M15.64 8.138c-.375.236-.57.678-.438.986.13.308.54.367.913.13.375-.236.57-.677.44-.985-.135-.31-.543-.368-.915-.132z",
    __self: this
  }));
};

LogoCBJ.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoMIN = function LogoMIN(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#024930",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.536 14.044a.346.346 0 1 0 .062.69.346.346 0 0 0-.062-.69zm.054.616a.27.27 0 1 1 .247-.295.272.272 0 0 1-.247.295z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.7 14.296a.117.117 0 0 0-.126-.106l-.166.015.035.393.073-.006-.014-.16.053-.004.09.153.08-.006-.092-.16a.122.122 0 0 0 .068-.118zm-.112.054l-.093.008-.008-.087.093-.007a.044.044 0 0 1 .047.04.044.044 0 0 1-.04.047z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#E2D6B5",
    d: "M21.11 3.83c.008 0 .735-.573.735-.573s-2.913-.79-6.39-.584c0 0-.493-1.655-2.828-1.672C10.89.99 9.89 2.073 9.577 2.918c-3.283.71-5.788 2.37-5.788 2.37l.597.46C2.84 6.554 1.245 7.85 1.245 7.85s.15.783 1.09 2.034c0 0 .63.49 2.295 1.132 0 0 .32-.078.48-.157.228.077.464.143.696.187-.01.21-.074.512.312.87l-.283.15s.342.865 2.26 1.332c.736-.173 4.077-.78 5.214 1.327l5.844-5.67-1.236-.007 4.6-4.83s-.756-.258-1.408-.39z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#024930",
    d: "M21.406 4.455c-.705-.273-1.646-.476-1.646-.476l.59-.45c-3.168-.658-5.344-.472-5.344-.472s-.423-1.653-2.536-1.667c-2.043-.014-2.668 1.807-2.668 1.807-2.802.53-5.445 2.12-5.445 2.12l.638.49c-1.655.8-3.374 2.17-3.374 2.17.238.756.94 1.675.94 1.675.652.46 2.09 1.032 2.09 1.032.207-.046.433-.17.433-.17s.714.29 1.48.295c.278 0 .59-.03.592-.14 0-.188-.572-.25-.57-.46 0-.155.346-.368 1.655-.36.783.006 1.67.067 1.67.067-.644-.004-1.913.15-1.915.45 0 .234.86.252.858.566-.004.454-.678.605-1.463.6-.703-.005-1.036-.207-1.195-.21-.062 0-.1.03-.1.07 0 .164.31.495.56.59l-.34.193c.377.507 1.79.894 1.79.894 4.047-.853 5.276 1.17 5.276 1.17l4.77-4.868-1.114-.008 4.37-4.91z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.345 3.608a1.85 1.85 0 0 1 .037.702 12.34 12.34 0 0 1 2.522.54c-.925.024-1.87.105-2.78.215a1.968 1.968 0 0 1-2.99.472c-1.9.366-3.237.737-3.237.737.94.05 1.47.27 1.47.27-2.432.474-4.697 1.395-5.433 1.71.173.28.4.607.4.607l-.366.447c.647.123 1.45.06 1.45.06l1.21-.73.944.29.288-.387-.31-.002.63-1 .515 1.007H8.46l.157.346.654-.11.28-.352-.248-.002.376-.57h-.28l.595-.99.495 1.03-.223-.002.332.602-.265-.003.537.994.548-.758-.373-.004.568-.84-.36-.003.82-1.384.692 1.41h-.292l.473.83-.338-.002.457 1.03.795-1.28-.434-.003.65-1.04-.396-.005.872-1.74.89 1.835-.318-.002.576.966-.398-.004.438.956.736-1.1-.39-.004.85-1.21-.453-.003 1.365-1.856.702 1.287 1.528-1.853c-1.74-.664-3.728-1.027-5.733-1.106zm-3.878.439c0-.08.007-.16.017-.24-1.828.266-3.535.777-4.924 1.517 0 0 2.14-.732 4.924-1.01a2.126 2.126 0 0 1-.017-.267z",
    fill: "#AF1E24",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#EDAA00",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M14.345 3.608a21.21 21.21 0 0 0-3.86.198c-.01.08-.016.16-.017.24 0 .092.006.18.017.268 1.217-.122 2.558-.155 3.897-.005a1.936 1.936 0 0 0-.037-.7zM12.42 6.026a1.968 1.968 0 0 0 1.704-.96c-1.068.128-2.09.298-2.988.47.342.302.79.486 1.283.49z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.446 2.096a1.964 1.964 0 0 0-1.96 1.71s.988-.437 3.67-.688a1.964 1.964 0 0 0-1.71-1.022z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M12.654 4.772c-2.565.066-4.876.69-4.876.69l-.052-.34-.237.393c-.002 0-1.164.417-1.932.814a26.455 26.455 0 0 1 1.782-.535c-.08.17-.16.333-.242.503.15-.13.29-.256.438-.387.106.058.207.115.312.17l-.04-.373s2.59-.702 4.846-.935z",
    __self: this
  }));
};

LogoMIN.defaultProps = {
  baseProfile: "basic",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 16"
};

var LogoWPG = function LogoWPG(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#041E42",
    d: "M673.57 595.888v11.824h-2.958v-11.824h-3.422v-2.937h9.802v2.937h-3.423zm16.022 11.824V599l-2.49 5.428h-2.612L682 599v8.713h-2.956V592.95H682l3.796 7.883 3.796-7.883h2.956v14.761h-2.956z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#A2AAAD",
    d: "M799.997 320.002C799.997 496.739 656.793 640 480.048 640c-176.733 0-320.045-143.26-320.045-319.998C160.003 143.258 303.273 0 480.005 0c176.746 0 319.992 143.258 319.992 320.002",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#041E42",
    d: "M480.005 21.477c-164.873 0-298.507 133.666-298.507 298.525 0 164.851 133.678 298.522 298.551 298.522s298.46-133.67 298.46-298.522c0-164.86-133.631-298.525-298.504-298.525zM615.12 377.453l-13.254-6.604-84.073 5.624v12.42l38.18 54.924v33.314l-52.662-25.965-4.333-10.935-18.977 42.006-18.39-42.014-4.347 10.943-52.654 25.965v-33.306l38.188-54.931v-12.421l-84.074-5.624-13.26 6.604v-76.958l-.162-21.645 18.298 44.02 83.403-39.797 4.497-51.088 28.54-132.744 29.05 132.744 4.496 51.088 83.395 39.798 17.808-44.582.33 22.206v76.958z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M508.888 101.817L480.02 29.064l-30.614 72.757c-107.727 14.533-190.801 106.785-190.801 218.5 0 121.796 99.611 220.547 221.415 220.547 121.806 0 219.666-98.75 219.666-220.546 0-111.717-83.066-203.974-190.798-218.505zM615.12 377.453l-13.254-6.604-84.073 5.624v12.42l38.18 54.924v33.314l-52.662-25.965-4.333-10.935-18.977 42.006-18.39-42.014-4.347 10.943-52.654 25.965v-33.306l38.188-54.931v-12.421l-84.074-5.624-13.26 6.604v-76.958l-.162-21.645 18.298 44.02 83.403-39.797 4.497-51.088 28.54-132.744 29.05 132.744 4.496 51.088 83.395 39.798 17.808-44.582.33 22.206v76.958z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M345.287 278.851l18.302 44.02 83.402-39.8 4.5-51.086 6.194-28.61-42.022-27.552 16.913 100.154-44.723-44.622-1.227 35.21-65.442-24.693 24.269 64.262v-5.64l-.166-21.643zm97.498 97.622l-59.33-3.97 23.996 20.936L393.346 411l30.608 4.979 18.831-27.086zm37.242 105.564l-18.43-41.814-.35.885 18.784 91.215 19.011-91.892-.078-.2zm37.753-93.143L536.62 416l30.98-4.987-14.114-17.575 24.027-20.962-59.734 3.996zm-4.205-105.821l83.396 39.798 17.807-44.582.329 22.203v6.67l24.672-65.3-65.466 24.703-1.235-35.21-44.719 44.629c1.146-6.954 16.913-100.162 16.913-100.162l-42.346 27.81 6.155 28.352 4.494 51.09zm137.583 25.155l-36.05-.17v31.622zm-341.381 0l35.674 31.121v-31.291z",
    fill: "#782F40",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M442.717 376.473l-54.395-3.637 22.99 20.065c-.364 1.017-12.47 15.99-12.47 15.99l26.928 4.382 16.947-24.379v-12.421zm14.236-170.033l-37.238-24.452.074.443 29.622 72.384 2.009-22.829 5.533-25.546zm-24.4 73.667c-.035-.028-.07-.047-.106-.076l-41.87-41.762-1.223 32.421-62.601-23.547 61.121 64.106 51.394-24.524-6.715-6.618zm33.915 171.219l13.593 68.66-.066-37.722zM317.635 311.15l27.75 24.214V311.02zm223.311-128.939l-37.386 24.662 4.193 19.317zm93.707 64.865l-62.515 23.652-18.28 31.602 12.502 5.967z",
    fill: "#A6192E",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#53565A",
    d: "M614.79 278.29l-17.808 44.58-83.395-39.797-4.495-51.088-29.05-132.744L451.5 231.985l-4.497 51.088-83.403 39.798-18.298-44.021.162 21.645v76.958l13.26-6.604 84.074 5.624v12.42l-38.188 54.932v33.306l52.654-25.965 4.346-10.943 18.391 42.014 18.977-42.006 4.333 10.935 52.661 25.965v-33.314l-38.179-54.923v-12.422l84.073-5.623 13.254 6.604v-76.958l-.33-22.206zM480.007 467.9l-18.2-41.34-6.187-14.344 3.664 18.26-6.553 16.506-42.36 20.894v-22.248l38.18-54.923v-19.608l-91.006-6.09-6.317 3.146v-60.032l9.384 22.555 83.771-39.971 5.468 26.782 2.574-30.62.028-.006 4.751-54.077 22.817-110.276-.014 345.393z",
    __self: this
  }));
};

LogoWPG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 960 640"
};

var LogoARI = function LogoARI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#010101",
    d: "M578.78 529.604c-8.282 0-15.005 6.714-15.005 15.001 0 8.278 6.723 15.001 15.005 15.001s14.995-6.723 14.995-15c0-8.288-6.713-15.002-14.995-15.002zm0 26.784a11.772 11.772 0 0 1-11.782-11.783c0-6.51 5.264-11.774 11.782-11.774 6.51 0 11.78 5.264 11.78 11.774 0 6.512-5.27 11.783-11.78 11.783zm6.164-15.26a5.085 5.085 0 0 0-5.09-5.082h-7.228v17.123h3.213v-6.954h2.305l3.247 6.954h3.553l-3.39-7.251a5.095 5.095 0 0 0 3.39-4.79zm-5.09 1.872h-4.015v-3.747h4.014c1.033 0 1.878.839 1.878 1.875a1.878 1.878 0 0 1-1.877 1.872z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M764.22 296.987s7.908-34.705-30.023-63.171c.308 30.19-12.766 42.695-12.766 42.695l-3.836-1.909-8.478-22.794 36.778-76.928c1.829 6.747 4.012 14.884 4.012 14.884l10.61-21.034s9.683-18.303 8.012-41.062l8.996-18.835-5.233-76.143c-3.672-14.825-15.25-25.723-30.043-30.457-14.17-4.501-28.325-2.128-38.888 6.488L542.063 133.428c-82.051 3.115-146.092 39.4-185.649 105.09L170.988 387.736c9.881 21.86 56.14 79.822 127.884 66.335l37.072-6.662S366.334 613.54 510.76 640c0 0-48.848-79.413-36.993-144.964 0 0 33.328 95.998 97.538 82.494-51.746-63.24-23.473-126.32-23.473-126.32s26.123 42.524 85.258 37.384c0 0-40.219-42.715-26.712-100.028l97.355 3.577 50.79-21.306 34.488-62.591-24.791-11.259z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#010101",
    d: "M741.62 252.91c-1.541 17.978-17.848 34.783-17.848 34.783l-13.383-6.592-11.087-29.726 47.957-100.204c3.442 6.717 5.245 13.504 5.245 13.504 6.97-13.743 7.947-27.631 6.943-38.86l8.937-18.742-5.002-72.954c-2.427-9.78-11.953-19.513-23.854-23.297-11.284-3.593-22.7-1.537-30.83 5.118L545.355 142.244c-83.075 2.334-144.473 38.665-182.095 102.355L182.39 390.087s33.518 63.54 110.521 55.917l49.78-8.953c5.35 23.1 35.157 156.418 150.505 188.698-19.54-37.555-44.79-104.457-20.012-159.288 33.046 106.046 81.475 103.086 81.475 103.086-46.855-66.437-8.695-137.09-8.695-137.09 19.1 32.61 46.64 47.147 69.116 47.147 0 0-32.98-43.461-15.592-100.303l102.614 3.787 46.035-19.323 28.273-51.34-22.182-10.097c6.924-31.345-12.608-49.419-12.608-49.419z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#862633",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M745.055 305.033h.092c.95-3.744 5.154-23.012-.656-36.155-5.081 15.439-14.123 23.923-18.149 27.087l-22.64-11.013.098.115 46.416 30.017-28.372 6.642-.059-.01-.02.01-25.348-9.366c.072 0 .072-.046.079-.046l-.164-.03c1.495-7.713 3.868-24.512-1.502-36.695-5.219 15.812-14.169 25.044-19.014 29.11l-24.47-9.075-20.563-53.704 74.708-120.7c4.25 4.458 8.8 10.526 12.51 18.565 3.7-11.861.158-27.103-2.248-35.102l9.068-14.668 21.277-15.378 3.954 19.952-35.486 98.322 28.142-60.637c1.22.954 3.803 3.006 9.6 14.956 2.963-9.488-1.528-30.58-1.528-30.58l8.209-15.688-3.869-61.06c-3.245 5.206-6.596 16.353-8.012 20.805-6.878-46.993-25.08-12.097-29.61-40.203L702.39 32.198c-1.193 5.9-3.088 17.821-3.462 35.875 0 0-10.563-11.16-13.933-21.749-1.311 6.6-3.337 19.641-3.777 39.289 0 0-11.828-12.52-15.448-24.29-1.422 7.373-3.56 21.582-4.039 42.803 0 0-12.746-13.455-16.83-26.224-1.6 8.114-3.922 23.736-4.479 46.956 0 0-14.838-15.71-18.884-30.177l-75.14 58.04c-4.984 5.911-28.411 29.778-37.027 65.624 0 0-.02-25.31 1.994-33.112-6.597 4.747-31.408 24.175-44.947 38.263 0 0 1.639-25.546 12.136-40.059-22.162 16.166-55.969 50.421-55.969 50.421 27.946-48.32 50.317-62.705 61.562-72.065-56.428 17.864-105.453 57.483-126.96 124.386 0 0 .42-13.373 2.473-24.421L199.569 388.406s24.654 45.389 94.077 43.639l90.654-14.393s-9.029-24.201-8.13-41.285c11.022 38.138 30.056 52.317 30.056 52.317s-50.887 6.704-50.887 6.744c9.219 33.39 29.446 127.411 121.478 171.61-21.441-41.38-25.198-80.628-21.592-113.51 5.816-39.2 25.807-63.067 25.807-63.067 3.253 46.028 25.08 80.829 39.328 98.984 3.698 5.187 7.835 9.944 12.438 14.071 0 0-18.53-33.541-4.982-93.722 1.206-3.397 11.5-32.208 22.063-42.774 13.717 38.679 47.143 53.605 47.143 53.605-23.867-49.362-3.147-96.647-3.147-96.647s107.407 4.006 108.227 4.04l40.363-16.934 20.772-37.691-18.182-8.36z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M678.051 245.533l16.786 23.92-9.475-23.612 9.475-24.398z",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M518.105 173.28c1.652-5.186-8.662-4.104-8.662-4.104 7.12-4.675 14.406-7.396 18.064-8.593 2.564-3.16 4.708-5.688 5.783-6.888-5.081.403-18.215 3.216-43.996 21.608 10.485-2 21.828-2.62 28.81-2.023zm226.95 131.753h.092c.95-3.744 5.154-23.012-.656-36.155-5.081 15.439-14.123 23.923-18.149 27.087l-22.64-11.013.098.115 46.416 30.017-28.372 6.642-.059-.01-.02.01-25.348-9.366c.072 0 .072-.046.079-.046l-.164-.03c1.495-7.713 3.868-24.512-1.502-36.694-5.219 15.811-14.169 25.043-19.014 29.109l-24.47-9.075-20.563-53.704 74.708-120.7c4.25 4.458 8.8 10.526 12.51 18.565 3.7-11.861.158-27.102-2.248-35.102l9.068-14.667 21.277-15.38 3.954 19.953-35.486 98.322 28.142-60.637c1.22.954 3.803 3.006 9.6 14.956 2.963-9.487-1.528-30.58-1.528-30.58l8.209-15.687-12.137-30.303-34.37 19.008L599.395 218.04c4.328-1.078-38.574 14.147-52.572 32.207 0 0 29.473 5.685 32.213 25.428-11.514 4.625-222.564 147.783-132.362 293.84 7.901 12.27 17.795 24.84 30.142 37.524-21.441-41.38-25.198-80.63-21.592-113.511 6.045-54.799 32.672-91.94 32.672-91.94s-.819 81.344 32.463 127.858c3.698 5.186 7.836 9.943 12.438 14.07 0 0-18.53-33.541-4.982-93.722 4.792-21.376 13.611-46.091 28.79-73.876-9.448 44.35 30.601 75.967 40.416 84.707-23.867-49.362-3.147-96.647-3.147-96.647s107.407 4.006 108.227 4.04l37.51-36.739 2.853 19.805 20.772-37.692-18.182-8.36zm-522.944 86.589c11.52 20.696 38.652 26.361 54.487 27.892-4.583-4.534-19.847-20.51-15.126-32.236 0 0 12.897 10.13 30.423 11.989 0 0-14.543-40.354 10.275-71.515-36.338 29.119-80.059 63.87-80.059 63.87z",
    fill: "#DDCBA4",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#010101",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M599.396 218.04L712.48 89.668 593.547 211.464s-29.597 4.99-72.459 38.82c21.467 41.222-81.035 169.827-124.435 135.722 8.865 26.139 41.105 15.454 41.105 15.454-4.334 10.025-46.41 82.239 8.917 168.054-90.202-146.056 120.848-289.214 132.362-293.84-2.74-19.742-32.213-25.427-32.213-25.427 13.998-18.06 56.9-33.285 52.572-32.207z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M649.11 198.842l-34.496 41.796 29.939 55.356-20.313-55.356zm-301.987 92.48c-6.76 5.747-24.745 20.208-44.953 36.43-24.818 31.161-10.275 71.515-10.275 71.515-17.526-1.859-30.423-11.989-30.423-11.989-4.721 11.727 10.543 27.703 15.126 32.236 7.239.702 12.097.535 12.097.535l77.128-13.625s-111.36-25.35-18.7-115.101z",
    __self: this
  })));
};

LogoARI.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 960 640"
};

var LogoVGK = function LogoVGK(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#010101",
    d: "M581.374 603.26v11.825h-2.957V603.26h-3.423v-2.937h9.802v2.938h-3.422zm16.022 11.825v-8.713l-2.49 5.428h-2.611l-2.49-5.428v8.713h-2.956v-14.762h2.956l3.796 7.883 3.795-7.883h2.957v14.762h-2.957z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#FFF",
    d: "M517.313 35.03L480 0s-30.894 29.003-37.312 35.03H243.575v437.294C317.907 554.723 380.31 594.081 480 640c99.495-45.83 161.97-85.14 236.425-167.676V35.03H517.313z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#89734C",
    d: "M514.049 43.263c-.345-.34-34.05-31.972-34.05-31.972s-33.702 31.632-34.048 31.972H251.808V469.16C321.456 546.387 383.548 586.5 480 630.935c96.246-44.34 158.326-84.306 228.192-161.775V43.263H514.05zM325.903 225.935V451.21a496.324 496.324 0 0 1-8.232-8.323v-216.95c0-91.853 52.835-155.167 128.263-182.657.913.638 2.537 4.634 2.936 5.673 1.17 3.052 2.124 6.508 2.87 9.72 0 0-4.12-3.446-8.23-5.418-80.545 33.652-117.607 95.655-117.607 172.681zm148.691 187.66l-36.41-117.762 12.237-12.237-2.906 14.548L480 403.212l-5.406 10.383zM517.8 528.981l-14.485 16.645 107.793-310.821 10.457-5.025L517.8 528.981z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#010101",
    d: "M691.726 59.728v403.104C628.12 533.364 561.471 575.268 480 612.806c-81.471-37.538-148.12-79.442-211.726-149.974V59.728h142.408c-56.125 32.651-93.011 89.466-93.011 166.208v216.95c38.271 39.664 90 79.58 139.015 102.74L348.888 234.805l101.533 48.79-12.237 12.238 36.41 117.762h10.813l36.41-117.762-12.238-12.237 101.53-48.791-107.794 310.82c48.681-23.003 100.438-62.759 139.015-102.739v-216.95c0-76.742-36.887-133.557-93.012-166.208h142.408z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M508.26 58.671c2.89-12.441 5.805-15.392 5.805-15.392A93549.915 93549.915 0 0 0 480 11.29v310.916l22.594-72.713 120.383-57.932c-10.751-62.247-51.307-109.78-114.717-132.89zm125.837 198.348l-89.573 259.227 15.524-20.05s40.82-31.248 65.816-60.024V303.717l8.233-46.698zm-308.194 0l74.545 215.734-41.44-97.654-24.872-71.382-8.233-46.698zm123.332-21.208l-95.87-36.385 104.041 50.068V97.144l-8.171 138.667z",
    fill: "#333F48",
    __self: this
  }));
};

LogoVGK.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 960 640"
};
var teamResources = {
  "1": {
    "teamName": "New Jersey Devils",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoNJD, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }),
    "primaryColor": "#CE1126"
  },
  "2": {
    "teamName": "New York Islanders",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoNYI, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }),
    "primaryColor": "#00539B"
  },
  "3": {
    "teamName": "New York Rangers",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoNYR, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }),
    "primaryColor": "#0038A8"
  },
  "4": {
    "teamName": "Philadelphia Flyers",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoPHI, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }),
    "primaryColor": "#F74902"
  },
  "5": {
    "teamName": "Pittsburgh Penguins",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoPIT, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }),
    "primaryColor": "#FCB514"
  },
  "6": {
    "teamName": "Boston Bruins",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoBOS, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }),
    "primaryColor": "#000000"
  },
  "7": {
    "teamName": "Buffalo Sabres",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoBUF, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }),
    "primaryColor": "#002654"
  },
  "8": {
    "teamName": "Montréal Canadiens",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoMTL, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }),
    "primaryColor": "#AF1E2D"
  },
  "9": {
    "teamName": "Ottawa Senators",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoOTT, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }),
    "primaryColor": "#E31837"
  },
  "10": {
    "teamName": "Toronto Maple Leafs",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoTOR, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }),
    "primaryColor": "#003E7E"
  },
  "12": {
    "teamName": "Carolina Hurricanes",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoCAR, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }),
    "primaryColor": "#CC0000"
  },
  "13": {
    "teamName": "Florida Panthers",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoFLA, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }),
    "primaryColor": "#041E42"
  },
  "14": {
    "teamName": "Tampa Bay Lightning",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoTBL, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }),
    "primaryColor": "#002868"
  },
  "15": {
    "teamName": "Washington Capitals",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoWSH, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }),
    "primaryColor": "#C8102E"
  },
  "16": {
    "teamName": "Chicago Blackhawks",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoCHI, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }),
    "primaryColor": "#CF0A2C"
  },
  "17": {
    "teamName": "Detroit Red Wings",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoDET, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: undefined
    }),
    "primaryColor": "#CE1126"
  },
  "18": {
    "teamName": "Nashville Predators",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoNSH, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }),
    "primaryColor": "#041E42"
  },
  "19": {
    "teamName": "St. Louis Blues",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoSTL, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: undefined
    }),
    "primaryColor": "#002F87"
  },
  "20": {
    "teamName": "Calgary Flames",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoCGY, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }),
    "primaryColor": "#C8102E"
  },
  "21": {
    "teamName": "Colorado Avalanche",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoCOL, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    }),
    "primaryColor": "#6F263D"
  },
  "22": {
    "teamName": "Edmonton Oilers",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoEDM, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: undefined
    }),
    "primaryColor": "#041E42"
  },
  "23": {
    "teamName": "Vancouver Canucks",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoVAN, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: undefined
    }),
    "primaryColor": "#001F5B"
  },
  "24": {
    "teamName": "Anaheim Ducks",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoANA, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: undefined
    }),
    "primaryColor": "#B09862"
  },
  "25": {
    "teamName": "Dallas Stars",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoDAL, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: undefined
    }),
    "primaryColor": "#006847"
  },
  "26": {
    "teamName": "Los Angeles Kings",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoLAK, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: undefined
    }),
    "primaryColor": "#111111"
  },
  "28": {
    "teamName": "San Jose Sharks",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoSJS, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }),
    "primaryColor": "#006D75"
  },
  "29": {
    "teamName": "Columbus Blue Jackets",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoCBJ, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: undefined
    }),
    "primaryColor": "#002654"
  },
  "30": {
    "teamName": "Minnesota Wild",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoMIN, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: undefined
    }),
    "primaryColor": "#154734"
  },
  "52": {
    "teamName": "Winnipeg Jets",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoWPG, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: undefined
    }),
    "primaryColor": "#041E42"
  },
  "53": {
    "teamName": "Arizona Coyotes",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoARI, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: undefined
    }),
    "primaryColor": "#8C2633"
  },
  "54": {
    "teamName": "Vegas Golden Knights",
    "logo": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoVGK, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: undefined
    }),
    "primaryColor": "#B4975A"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (teamResources);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next-server/dist/lib/head-manager-context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head-manager-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next-server/dist/lib/side-effect.js"));

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next-server/dist/lib/head-manager-context.js");

function defaultHead() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next-head';
  return [react_1.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8",
    className: className
  })];
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === "string" || typeof child === "number") {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new _set.default();
  var tags = new _set.default();
  var metaTypes = new _set.default();
  var metaCategories = {};
  return function (h) {
    if (h.key && typeof h.key !== 'number' && h.key.indexOf(".$") === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
      return true;
    }

    switch (h.type) {
      case "title":
      case "base":
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case "meta":
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === "charSet") {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set.default();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead('')).filter(unique()).reverse().map(function (c, i) {
    var className = (c.props && c.props.className ? c.props.className + " " : "") + "next-head";
    var key = c.key || i;
    return react_1.default.cloneElement(c, {
      key: key,
      className: className
    });
  });
}

var Effect = side_effect_1.default();

function Head(_ref) {
  var children = _ref.children;
  return react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
    return react_1.default.createElement(Effect, {
      reduceComponentsToState: reduceComponents,
      handleStateChange: updateHead
    }, children);
  });
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/side-effect.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-server/dist/lib/side-effect.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = typeof window === 'undefined';

function withSideEffect() {
  var mountedInstances = new _set.default();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState((0, _toConsumableArray2.default)(mountedInstances));

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  var SideEffect =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(SideEffect, _react_1$Component);
    (0, _createClass2.default)(SideEffect, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function SideEffect(props) {
      var _this;

      (0, _classCallCheck2.default)(this, SideEffect);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideEffect).call(this, props));

      if (isServer) {
        mountedInstances.add((0, _assertThisInitialized2.default)(_this));
        emitChange((0, _assertThisInitialized2.default)(_this));
      }

      return _this;
    }

    (0, _createClass2.default)(SideEffect, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances.delete(this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);
    return SideEffect;
  }(react_1.Component);

  return SideEffect;
}

exports.default = withSideEffect;

/***/ }),

/***/ "./node_modules/next-server/head.js":
/*!******************************************!*\
  !*** ./node_modules/next-server/head.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/head */ "./node_modules/next-server/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcjgilroy%2FDesktop%2FDevelopment%2FReact%2Fhockey-cards%2Fpages%2Findex.js!./":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcjgilroy%2FDesktop%2FDevelopment%2FReact%2Fhockey-cards%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-spring/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-spring/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-spring/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-spring/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: apply, config, animated, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-spring/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-spring/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop = false;
function injectManualFrameloop(manual) {
  manualFrameloop = manual;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, _ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        if (node.current) {
          const didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
          if (didUpdate === false) forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(_ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: childRef => node.current = handleRef(childRef, _ref)
    }));
  });
  return AnimatedComponent;
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output) {
    this.calc = createInterpolator(range, output);
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (!manualFrameloop) requestFrame(update);
  } else active = false;
};

const start = controller => {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active && !manualFrameloop) requestFrame(update);
    active = true;
  }
};

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let merge$$1 = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props); // If it doesn't have a delay, merge it, otherwise add it to the queue


        if (!entry.delay) merge$$1 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, merge$$1, entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, merge$$1.to, entry.to)
        });else this.queue = [...this.queue, entry];
      }); // Append merged props, if present

      if (Object.keys(merge$$1).length > 0) this.queue = [...this.queue, merge$$1];
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          to: props.to[index]
        });

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(interpolateTo(fresh)).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false);
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, () => ctrl.current.forEach(c => c.stop())] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        stop = _useSprings[2];

  return isFn ? [result[0], set, stop] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        stop = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, stop] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ }),

/***/ "./node_modules/react-with-gesture/dist/react-with-gesture.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-with-gesture/dist/react-with-gesture.es.js ***!
  \***********************************************************************/
/*! exports provided: withGesture, Gesture, useGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGesture", function() { return withGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gesture", function() { return Gesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGesture", function() { return useGesture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var touchMove = 'touchmove';
var touchEnd = 'touchend';
var mouseMove = 'mousemove';
var mouseUp = 'mouseup';
var defaultProps = {
  touch: true,
  mouse: true,
  passive: {
    passive: true
  }
};
var initialState = {
  event: undefined,
  args: undefined,
  temp: undefined,
  target: undefined,
  time: undefined,
  xy: [0, 0],
  delta: [0, 0],
  initial: [0, 0],
  previous: [0, 0],
  direction: [0, 0],
  local: [0, 0],
  lastLocal: [0, 0],
  velocity: 0,
  distance: 0,
  down: false,
  first: true,
  shiftKey: false
};

function handlers(set, props, args) {
  if (props === void 0) {
    props = {};
  }

  // Common handlers
  var handleUp = function handleUp(event) {
    var shiftKey = event.shiftKey;
    set(function (state) {
      var newProps = _extends({}, state, {
        down: false,
        first: false
      });

      var temp = props.onAction && props.onAction(newProps);
      return _extends({}, newProps, {
        event: event,
        shiftKey: shiftKey,
        lastLocal: state.local,
        temp: temp || newProps.temp
      });
    });
  };

  var handleDown = function handleDown(event) {
    var _ref = event.touches ? event.touches[0] : event,
        target = _ref.target,
        pageX = _ref.pageX,
        pageY = _ref.pageY,
        shiftKey = _ref.shiftKey;

    set(function (state) {
      var lastLocal = state.lastLocal || initialState.lastLocal;

      var newProps = _extends({}, initialState, {
        event: event,
        target: target,
        args: args,
        lastLocal: lastLocal,
        shiftKey: shiftKey,
        local: lastLocal,
        xy: [pageX, pageY],
        initial: [pageX, pageY],
        previous: [pageX, pageY],
        down: true,
        time: Date.now(),
        cancel: function cancel() {
          stop();
          requestAnimationFrame(function () {
            return handleUp(event);
          });
        }
      });

      var temp = props.onAction && props.onAction(newProps);
      return _extends({}, newProps, {
        temp: temp
      });
    });
  };

  var handleMove = function handleMove(event) {
    var _ref2 = event.touches ? event.touches[0] : event,
        pageX = _ref2.pageX,
        pageY = _ref2.pageY,
        shiftKey = _ref2.shiftKey;

    set(function (state) {
      var time = Date.now();
      var x_dist = pageX - state.xy[0];
      var y_dist = pageY - state.xy[1];
      var delta_x = pageX - state.initial[0];
      var delta_y = pageY - state.initial[1];
      var distance = Math.sqrt(delta_x * delta_x + delta_y * delta_y);
      var len = Math.sqrt(x_dist * x_dist + y_dist * y_dist);
      var scalar = 1 / (len || 1);

      var newProps = _extends({}, state, {
        event: event,
        time: time,
        shiftKey: shiftKey,
        xy: [pageX, pageY],
        delta: [delta_x, delta_y],
        local: [state.lastLocal[0] + pageX - state.initial[0], state.lastLocal[1] + pageY - state.initial[1]],
        velocity: len / (time - state.time),
        distance: distance,
        direction: [x_dist * scalar, y_dist * scalar],
        previous: state.xy,
        first: false
      });

      var temp = props.onAction && props.onAction(newProps);
      return _extends({}, newProps, {
        temp: temp || newProps.temp
      });
    });
  };

  var onDown = function onDown(e) {
    if (props.mouse) {
      window.addEventListener(mouseMove, handleMove, props.passive);
      window.addEventListener(mouseUp, onUp, props.passive);
    }

    if (props.touch) {
      window.addEventListener(touchMove, handleMove, props.passive);
      window.addEventListener(touchEnd, onUp, props.passive);
    }

    handleDown(e);
  };

  var stop = function stop() {
    if (props.mouse) {
      window.removeEventListener(mouseMove, handleMove, props.passive);
      window.removeEventListener(mouseUp, onUp, props.passive);
    }

    if (props.touch) {
      window.removeEventListener(touchMove, handleMove, props.passive);
      window.removeEventListener(touchEnd, onUp, props.passive);
    }
  };

  var onUp = function onUp(e) {
    stop();
    handleUp(e);
  };

  var output = {};
  var capture = props.passive.capture ? 'Capture' : '';

  if (props.mouse) {
    output["onMouseDown" + capture] = onDown;
  }

  if (props.touch) {
    output["onTouchStart" + capture] = onDown;
  }

  return output;
}

var Gesture =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Gesture, _React$Component);

  function Gesture(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = initialState;

    var set = _this.setState.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (props.onAction) {
      _this._state = initialState;

      set = function set(cb) {
        return _this._state = cb(_this._state);
      };
    }

    _this.handlers = handlers(set, props);
    return _this;
  }

  var _proto = Gesture.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        children = _this$props.children,
        className = _this$props.className;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, this.handlers, {
      style: _extends({
        display: 'contents'
      }, style),
      className: className
    }), children(this.state));
  };

  return Gesture;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Gesture.defaultProps = defaultProps;

var withGesture = function withGesture(config) {
  return function (Wrapped) {
    return function (props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gesture, _extends({}, config, {
        children: function children(gestureProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, _extends({}, props, gestureProps));
        }
      }));
    };
  };
};

function useGesture(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(initialState),
      state = _React$useState[0],
      set = _React$useState[1];

  var transientState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(initialState);
  if (typeof props === 'function') props = {
    onAction: props
  };
  props = _extends({}, defaultProps, props);

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return handlers(props.onAction ? function (cb) {
        return transientState.current = cb(transientState.current);
      } : set, props, args);
    };
  }),
      spread = _React$useState2[0];

  return props.onAction ? spread : [spread, state];
}




/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_4d62ad301d4c9a40eec7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_4d62ad301d4c9a40eec7 */ "dll-reference dll_4d62ad301d4c9a40eec7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App.js */ "./components/App.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/cjgilroy/Desktop/Development/React/hockey-cards/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jsx-1028220061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    className: "jsx-1028220061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Hockey Cards"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1028220061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-1028220061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1028220061",
    __self: this
  }, "body{margin:0;font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUIsQUFHYyxTQUNjLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvY2pnaWxyb3kvRGVza3RvcC9EZXZlbG9wbWVudC9SZWFjdC9ob2NrZXktY2FyZHMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwLmpzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IF9KU1hTdHlsZSBmcm9tICdzdHlsZWQtanN4L3N0eWxlJ1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICA8SGVhZD5cbiAgPHRpdGxlPkhvY2tleSBDYXJkczwvdGl0bGU+XG4gIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG48L0hlYWQ+XG48c3R5bGUganN4IGdsb2JhbD57YFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbmB9PC9zdHlsZT5cbiAgPEFwcCAvPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/cjgilroy/Desktop/Development/React/hockey-cards/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
});

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcjgilroy%2FDesktop%2FDevelopment%2FReact%2Fhockey-cards%2Fpages%2Findex.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcjgilroy%2FDesktop%2FDevelopment%2FReact%2Fhockey-cards%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcjgilroy%2FDesktop%2FDevelopment%2FReact%2Fhockey-cards%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_4d62ad301d4c9a40eec7":
/*!*******************************************!*\
  !*** external "dll_4d62ad301d4c9a40eec7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_4d62ad301d4c9a40eec7;

/***/ })

},[[1,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map