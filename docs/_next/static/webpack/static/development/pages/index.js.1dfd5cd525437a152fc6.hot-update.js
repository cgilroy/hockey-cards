webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.1dfd5cd525437a152fc6.hot-update.js.map