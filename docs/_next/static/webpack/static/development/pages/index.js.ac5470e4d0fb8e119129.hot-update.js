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
    }, "\n      .btn {\n        position: relative;\n        display: block;\n        padding: 0;\n        cursor: pointer;\n        overflow: hidden;\n        min-width: 80px;\n        border-width: 0;\n        outline: none;\n        border-radius: 2px;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n        z-index: 99999;\n        background-color: #2ecc71;\n        color: #ecf0f1;\n\n        transition: background-color .3s;\n      }\n\n      .btn:hover, .btn:focus {\n        background-color: #27ae60;\n      }\n\n      .btn > * {\n        position: relative;\n      }\n\n      .btn span {\n        display: block;\n        padding: 12px 24px;\n      }\n\n      .btn:before {\n        content: \"\";\n\n        position: absolute;\n        top: 50%;\n        left: 50%;\n\n        display: block;\n        width: 0;\n        padding-top: 0;\n\n        border-radius: 100%;\n\n        background-color: rgba(236, 240, 241, .3);\n\n        -webkit-transform: translate(-50%, -50%);\n        -moz-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        -o-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n      }\n\n      .btn:active:before {\n        width: 120%;\n        padding-top: 120%;\n\n        transition: width .2s ease-out, padding-top .2s ease-out;\n      }\n      ");
    var resetStyle = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "\n        .btn {\n          top: 0;\n          position: absolute;\n          justify-content: center;\n          align-items: center;\n          margin-top: 10px;\n        }\n        ");

    if (buttonState === 'open') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttonRow__button btn",
        onClick: loadPack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, buttonStyle, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "OPEN"));
    } else if (buttonState === 'reset') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttonRow__button btn",
        onClick: reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, buttonStyle, resetStyle, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
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
    className: "jsx-2130316502" + " " + "app-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, button(), isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2130316502" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: displayCards,
    className: "jsx-2130316502",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, cardsContainer), showPack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClosedPack_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    packState: packState,
    doneAnimation: doneAnimation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2130316502",
    __self: this
  }, ".app-container.jsx-2130316502{width:100vw;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:light-blue;position:relative;overflow:hidden;}.buttonRow.jsx-2130316502{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-2130316502{height:8px;width:200px;position:relative;overflow:hidden;background-color:#ddd;z-index:999;border:1px solid #eee;}.loading.jsx-2130316502:before{display:block;position:absolute;content:\"\";left:-200px;width:20px;height:8px;background-color:#2980b9;-webkit-animation:loading-jsx-2130316502 2s linear infinite;animation:loading-jsx-2130316502 2s linear infinite;}@-webkit-keyframes loading-jsx-2130316502{from{left:-20px;width:30%;}50%{width:30%;}70%{width:70%;}80%{left:50%;}95%{left:120%;}to{left:100%;}}@keyframes loading-jsx-2130316502{from{left:-20px;width:30%;}50%{width:30%;}70%{width:70%;}80%{left:50%;}95%{left:120%;}to{left:100%;}}@-webkit-keyframes spin-jsx-2130316502{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-2130316502{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jamdpbHJveS9EZXNrdG9wL0RldmVsb3BtZW50L1JlYWN0L2hvY2tleS1jYXJkcy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SWtCLEFBMkN1QixBQVVELEFBTUEsQUFTRyxBQVdJLEFBQ0YsQUFDQSxBQUNBLEFBQ0EsQUFDRCxBQUlVLEFBR0UsU0FUVixDQUZBLEFBQ0EsQUFFQSxBQUNELENBOUJILEFBTUQsQUFtQmlCLENBbkNoQixFQXlCSyxPQVVZLEVBbEJaLEVBaEJMLE9BeUJGLFNBUkssRUFTSixZQUNELEVBVFcsU0FVWCxXQUNjLEVBVmIsRUF5QlosSUFqQ0YsRUFvQ0UsSUExQkgsUUFwQnNCLEdBNkJrQixXQVR2QywrRUFuQnlCLHNCQTZCekIsNkVBNUJ3QixzQkFDSixrQkFDRixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2NqZ2lscm95L0Rlc2t0b3AvRGV2ZWxvcG1lbnQvUmVhY3QvaG9ja2V5LWNhcmRzL2NvbXBvbmVudHMvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRzQ29udGFpbmVyIGZyb20gJy4vQ2FyZHNDb250YWluZXIuanMnXG5pbXBvcnQgQ2xvc2VkUGFjayBmcm9tICcuL0Nsb3NlZFBhY2suanMnXG5pbXBvcnQgX0pTWFN0eWxlIGZyb20gJ3N0eWxlZC1qc3gvc3R5bGUnXG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3BhY2tTdGF0ZSwgdXBkYXRlUGFja10gPSB1c2VTdGF0ZSgnY2xvc2VkJylcbiAgY29uc3QgW2J1dHRvblN0YXRlLCB1cGRhdGVCdXR0b25TdGF0ZV0gPSB1c2VTdGF0ZSgnb3BlbicpXG4gIGNvbnN0IFtzaG93UGFjaywgdXBkYXRlU2hvd1BhY2tdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3Nob3dDYXJkcywgdXBkYXRlU2hvd0NhcmRzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNMb2FkaW5nLCB1cGRhdGVJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjYXJkc0NvbnRhaW5lciwgdXBkYXRlQ2FyZHNDb250YWluZXJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBsb2FkUGFjayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbG9hZFBhY2snKVxuICAgIHVwZGF0ZUlzTG9hZGluZyh0cnVlKVxuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCcnKVxuICAgIHVwZGF0ZUNhcmRzQ29udGFpbmVyKDxDYXJkc0NvbnRhaW5lciBkb25lTG9hZD17ZG9uZUxvYWR9Lz4pXG4gICAgY29uc29sZS5sb2coJ2ltbWVkaWF0ZWNhcmRjb250JyxjYXJkc0NvbnRhaW5lcilcbiAgfVxuXG4gIGNvbnN0IGRvbmVMb2FkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkb25lTG9hZCcpXG4gICAgdXBkYXRlSXNMb2FkaW5nKGZhbHNlKVxuICAgIHVwZGF0ZVBhY2soJ29wZW4nKVxuICB9XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgdXBkYXRlSXNMb2FkaW5nKGZhbHNlKVxuICAgIHVwZGF0ZVBhY2soJ2Nsb3NlZCcpXG4gICAgY29uc29sZS5sb2cocGFja1N0YXRlKVxuICAgIHVwZGF0ZVNob3dQYWNrKHRydWUpXG4gICAgdXBkYXRlU2hvd0NhcmRzKGZhbHNlKVxuICAgIHVwZGF0ZUNhcmRzQ29udGFpbmVyKCcnKVxuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCdvcGVuJylcbiAgfVxuXG4gIGNvbnN0IGRvbmVBbmltYXRpb24gPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkb25lQW5pbWF0aW9uJyxlLnRhcmdldClcbiAgICB1cGRhdGVTaG93Q2FyZHModHJ1ZSlcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgncmVzZXQnKVxuICAgIC8vIHVwZGF0ZVNob3dQYWNrKGZhbHNlKVxuICB9XG4gIGNvbnNvbGUubG9nKCdyZW5kZXItYXBwJyxzaG93Q2FyZHMpXG4gIGNvbnN0IGJ1dHRvbiA9ICgpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKGJ1dHRvblN0YXRlKVxuICAgIGxldCBidXR0b25TdHlsZSA9IChcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5idG4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIC42KTtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XG4gICAgICAgIGNvbG9yOiAjZWNmMGYxO1xuXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuICAgICAgfVxuXG4gICAgICAuYnRuOmhvdmVyLCAuYnRuOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcbiAgICAgIH1cblxuICAgICAgLmJ0biA+ICoge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5idG4gc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC5idG46YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG5cbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDAsIDI0MSwgLjMpO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAuYnRuOmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTIwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEyMCU7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2Utb3V0LCBwYWRkaW5nLXRvcCAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgKVxuICAgIGxldCByZXNldFN0eWxlID0gKFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICApXG4gICAgaWYgKGJ1dHRvblN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd19fYnV0dG9uIGJ0blwiIG9uQ2xpY2s9e2xvYWRQYWNrfSA+e2J1dHRvblN0eWxlfTxzcGFuPk9QRU48L3NwYW4+PC9kaXY+XG4gICAgfSBlbHNlIGlmIChidXR0b25TdGF0ZSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93X19idXR0b24gYnRuXCIgb25DbGljaz17cmVzZXR9ID57YnV0dG9uU3R5bGV9e3Jlc2V0U3R5bGV9PHNwYW4+UkVTRVQ8L3NwYW4+PC9kaXY+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgfVxuICBsZXQgZGlzcGxheUNhcmRzID0gc2hvd0NhcmRzID8ge2hlaWdodDonMTAwJScsd2lkdGg6JzEwMCUnfSA6IHtkaXNwbGF5Oidub25lJ31cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAge2J1dHRvbigpfVxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48L2Rpdj59XG4gICAgICA8ZGl2IHN0eWxlPXtkaXNwbGF5Q2FyZHN9PntjYXJkc0NvbnRhaW5lcn08L2Rpdj5cbiAgICAgIHtzaG93UGFjayAmJiA8Q2xvc2VkUGFjayBwYWNrU3RhdGU9e3BhY2tTdGF0ZX0gZG9uZUFuaW1hdGlvbj17ZG9uZUFuaW1hdGlvbn0vPn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFwcC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodC1ibHVlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25Sb3cge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2FkaW5nIHtcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZVxuICAgICAgICB9XG4gICAgICAgIC5sb2FkaW5nOmJlZm9yZXtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBsZWZ0OiAtMjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcbiAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICAgICAgICAgIGZyb20ge2xlZnQ6IC0yMHB4OyB3aWR0aDogMzAlO31cbiAgICAgICAgICAgIDUwJSB7d2lkdGg6IDMwJTt9XG4gICAgICAgICAgICA3MCUge3dpZHRoOiA3MCU7fVxuICAgICAgICAgICAgODAlIHsgbGVmdDogNTAlO31cbiAgICAgICAgICAgIDk1JSB7bGVmdDogMTIwJTt9XG4gICAgICAgICAgICB0byB7bGVmdDogMTAwJTt9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/cjgilroy/Desktop/Development/React/hockey-cards/components/App.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.ac5470e4d0fb8e119129.hot-update.js.map