webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.b67dbf71fb2d32054e8f.hot-update.js.map