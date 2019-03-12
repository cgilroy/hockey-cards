webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.1617f8596a015d27b59d.hot-update.js.map