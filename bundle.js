/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Condensed&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --text: #000711;
    --text-light: #f0f6ff;
    --background: #f5faff;
    --primary: #0261d6;
    --primary-light: #9bc8ffd3;
    --secondary: #ffc000;
    --secondary--light: #fffdf8;
    --accent: #ff4af3;
}

body,
html {
  background-color: pink;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
}

/* ====START HEADER AREA */

header{
  margin: 32px;
}
.header-photo{
  width: 100%;
  align-self: center;
}
.header-title{
  text-align: center;
  padding: 12px;
}
.header-text{
  font-size: 1.1rem;
}
.social-icons{
  display: flex;
  justify-content: center;
  gap: 24px;
  font-size: 1.2rem;
  padding-top: 24px;
}

@media screen and (min-width:932px) and (max-width:1300px){
  header{
    margin: 200px 120px 64px 120px;
    background-color: rgb(255, 252, 245);
    box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.61);
    padding: 82px 48px;
  }
  .header-photo{
    max-width: 400px;
    float: left;
    margin: 12px;

    /* transform-origin: bottom; */
    transform: scale(1.3) translate(-60px,-60px);
    
    
  }
  .header-title{
    font-size: 3.5rem;
    padding: 12px 0px;
  }
  .header-text{
    padding: 24px 12px;
    font-size: 1.8rem;
  }
  .social-icons{
    font-size: 2.5rem;
  }
}


@media (min-width:1300px) {
  header{
    margin: 120px 84px 180px 84px;
    background-color: rgb(255, 252, 245);
    box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.61);
    padding: 82px 48px 12px 48px;
  }
  .header-photo{
    float: left;
    transform: scale(1.5) translateY(calc(8.4px - (100vw*0.01415)));
    max-width: 400px;
    margin-right: 140px;
    margin-bottom: 100px;
  }
  .header-title{
    font-size: 4rem;
    padding: 12px 0px;
  }
  .header-text{
    padding: 24px 12px;
    font-size: 2.5rem;
  }
  .social-icons{
    font-size: 2.5rem;
    padding: 24px 12px;
  }

}

/* ====END HEADER AREA */

/* ====START MAIN AREA */
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 64px 32px 128px 32px;
}

.content-container{
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  justify-content: center;
}

.tile{
  flex: 1 1 auto;
  font-size: 1.1rem;
  background-color: rgb(255, 252, 245);
  box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.2);
}
.tile-text{
  padding: 24px;
}
.tile-title{
  display: flex;
  align-items: center;
  align-content: center;
}
.tile-title>*,.tile-description{
  margin: 8px;
}
.tile-title>h3{
  margin-right: auto;
}
.open-in-new{
  width: 30px;
}
i{
  font-size: 30px;
}
.tile-description{
  padding-top: 24px;
}

.project-photo>img{
  width: 100%;
}

@media screen and (min-width:932px) and (max-width:1300px){
  .tile{
    flex: 1 1 33%;
    font-size: 1.2rem;
  }
  .open-in-new{
    width: 35px;
  }
  i{
    font-size: 35px;
  }
  
}

@media (min-width:1300px){
  .tile{
    flex: 1 1 25%;
    font-size: 1.3rem;
  }
  .open-in-new{
    width: 40px;
  }
  i{
    font-size: 40px;
  }
  
}
/* ====END MAIN AREA */

/* ====START FOOTER AREA */
footer{
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(148, 69, 69);
  color: #fffdf8;
}
footer>*{
  flex: 1 1 50%;
}
.footer-info{
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}
.footer-photo{
  display: block;
  width: 100%;
}

@media screen and (min-width:932px) and (max-width:1300px){
  footer{
    gap: 24px;
    flex-wrap: nowrap;
  }
  footer>*{
    flex: 1 1 50%;
  }
  .footer-info{
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  .footer-photo{
    width: 400x;
  }
  
}

@media (min-width:1300px){
  .tile{
    flex: 1 1 25%;
    font-size: 1.3rem;
  }
  .open-in-new{
    width: 40px;
  }
  i{
    font-size: 40px;
  }
  
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,qBAAqB;IACrB,kBAAkB;IAClB,0BAA0B;IAC1B,oBAAoB;IACpB,2BAA2B;IAC3B,iBAAiB;AACrB;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qCAAqC;AACzC;;AAEA,0BAA0B;;AAE1B;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE;IACE,8BAA8B;IAC9B,oCAAoC;IACpC,6CAA6C;IAC7C,kBAAkB;EACpB;EACA;IACE,gBAAgB;IAChB,WAAW;IACX,YAAY;;IAEZ,8BAA8B;IAC9B,4CAA4C;;;EAG9C;EACA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;AACF;;;AAGA;EACE;IACE,6BAA6B;IAC7B,oCAAoC;IACpC,6CAA6C;IAC7C,4BAA4B;EAC9B;EACA;IACE,WAAW;IACX,+DAA+D;IAC/D,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;EACtB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;AAEF;;AAEA,wBAAwB;;AAExB,wBAAwB;AACxB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,oCAAoC;EACpC,4CAA4C;AAC9C;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;IACE,aAAa;IACb,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;;AAEF;;AAEA;EACE;IACE,aAAa;IACb,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;;AAEF;AACA,sBAAsB;;AAEtB,0BAA0B;AAC1B;EACE,aAAa;EACb,eAAe;EACf,kCAAkC;EAClC,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE;IACE,SAAS;IACT,iBAAiB;EACnB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,SAAS;IACT,uBAAuB;EACzB;EACA;IACE,WAAW;EACb;;AAEF;;AAEA;EACE;IACE,aAAa;IACb,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;;AAEF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Condensed&display=swap');\n\n:root{\n    --text: #000711;\n    --text-light: #f0f6ff;\n    --background: #f5faff;\n    --primary: #0261d6;\n    --primary-light: #9bc8ffd3;\n    --secondary: #ffc000;\n    --secondary--light: #fffdf8;\n    --accent: #ff4af3;\n}\n\nbody,\nhtml {\n  background-color: pink;\n}\n\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto Mono', monospace;\n}\n\n/* ====START HEADER AREA */\n\nheader{\n  margin: 32px;\n}\n.header-photo{\n  width: 100%;\n  align-self: center;\n}\n.header-title{\n  text-align: center;\n  padding: 12px;\n}\n.header-text{\n  font-size: 1.1rem;\n}\n.social-icons{\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  font-size: 1.2rem;\n  padding-top: 24px;\n}\n\n@media screen and (min-width:932px) and (max-width:1300px){\n  header{\n    margin: 200px 120px 64px 120px;\n    background-color: rgb(255, 252, 245);\n    box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.61);\n    padding: 82px 48px;\n  }\n  .header-photo{\n    max-width: 400px;\n    float: left;\n    margin: 12px;\n\n    /* transform-origin: bottom; */\n    transform: scale(1.3) translate(-60px,-60px);\n    \n    \n  }\n  .header-title{\n    font-size: 3.5rem;\n    padding: 12px 0px;\n  }\n  .header-text{\n    padding: 24px 12px;\n    font-size: 1.8rem;\n  }\n  .social-icons{\n    font-size: 2.5rem;\n  }\n}\n\n\n@media (min-width:1300px) {\n  header{\n    margin: 120px 84px 180px 84px;\n    background-color: rgb(255, 252, 245);\n    box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.61);\n    padding: 82px 48px 12px 48px;\n  }\n  .header-photo{\n    float: left;\n    transform: scale(1.5) translateY(calc(8.4px - (100vw*0.01415)));\n    max-width: 400px;\n    margin-right: 140px;\n    margin-bottom: 100px;\n  }\n  .header-title{\n    font-size: 4rem;\n    padding: 12px 0px;\n  }\n  .header-text{\n    padding: 24px 12px;\n    font-size: 2.5rem;\n  }\n  .social-icons{\n    font-size: 2.5rem;\n    padding: 24px 12px;\n  }\n\n}\n\n/* ====END HEADER AREA */\n\n/* ====START MAIN AREA */\nmain{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  margin: 64px 32px 128px 32px;\n}\n\n.content-container{\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  width: 100%;\n  justify-content: center;\n}\n\n.tile{\n  flex: 1 1 auto;\n  font-size: 1.1rem;\n  background-color: rgb(255, 252, 245);\n  box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.2);\n}\n.tile-text{\n  padding: 24px;\n}\n.tile-title{\n  display: flex;\n  align-items: center;\n  align-content: center;\n}\n.tile-title>*,.tile-description{\n  margin: 8px;\n}\n.tile-title>h3{\n  margin-right: auto;\n}\n.open-in-new{\n  width: 30px;\n}\ni{\n  font-size: 30px;\n}\n.tile-description{\n  padding-top: 24px;\n}\n\n.project-photo>img{\n  width: 100%;\n}\n\n@media screen and (min-width:932px) and (max-width:1300px){\n  .tile{\n    flex: 1 1 33%;\n    font-size: 1.2rem;\n  }\n  .open-in-new{\n    width: 35px;\n  }\n  i{\n    font-size: 35px;\n  }\n  \n}\n\n@media (min-width:1300px){\n  .tile{\n    flex: 1 1 25%;\n    font-size: 1.3rem;\n  }\n  .open-in-new{\n    width: 40px;\n  }\n  i{\n    font-size: 40px;\n  }\n  \n}\n/* ====END MAIN AREA */\n\n/* ====START FOOTER AREA */\nfooter{\n  display: flex;\n  flex-wrap: wrap;\n  background-color: rgb(148, 69, 69);\n  color: #fffdf8;\n}\nfooter>*{\n  flex: 1 1 50%;\n}\n.footer-info{\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  justify-content: center;\n}\n.footer-photo{\n  display: block;\n  width: 100%;\n}\n\n@media screen and (min-width:932px) and (max-width:1300px){\n  footer{\n    gap: 24px;\n    flex-wrap: nowrap;\n  }\n  footer>*{\n    flex: 1 1 50%;\n  }\n  .footer-info{\n    display: flex;\n    gap: 12px;\n    justify-content: center;\n  }\n  .footer-photo{\n    width: 400x;\n  }\n  \n}\n\n@media (min-width:1300px){\n  .tile{\n    flex: 1 1 25%;\n    font-size: 1.3rem;\n  }\n  .open-in-new{\n    width: 40px;\n  }\n  i{\n    font-size: 40px;\n  }\n  \n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


console.log('this is index.js');
console.log('this is index 2.js');


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0lBQStJO0FBQy9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxlQUFlLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8s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Ozs7O0FDQW9COztBQUVwQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1ob21lLXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4taG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWUtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4taG9tZS1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4taG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4taG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4taG9tZS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4taG9tZS1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWhvbWUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLXRleHQ6ICMwMDA3MTE7XG4gICAgLS10ZXh0LWxpZ2h0OiAjZjBmNmZmO1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZmFmZjtcbiAgICAtLXByaW1hcnk6ICMwMjYxZDY7XG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjOWJjOGZmZDM7XG4gICAgLS1zZWNvbmRhcnk6ICNmZmMwMDA7XG4gICAgLS1zZWNvbmRhcnktLWxpZ2h0OiAjZmZmZGY4O1xuICAgIC0tYWNjZW50OiAjZmY0YWYzO1xufVxuXG5ib2R5LFxuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG5cbip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xufVxuXG4vKiA9PT09U1RBUlQgSEVBREVSIEFSRUEgKi9cblxuaGVhZGVye1xuICBtYXJnaW46IDMycHg7XG59XG4uaGVhZGVyLXBob3Rve1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmhlYWRlci10aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmhlYWRlci10ZXh0e1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5zb2NpYWwtaWNvbnN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5MzJweCkgYW5kIChtYXgtd2lkdGg6MTMwMHB4KXtcbiAgaGVhZGVye1xuICAgIG1hcmdpbjogMjAwcHggMTIwcHggNjRweCAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTIsIDI0NSk7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IDFweCByZ2JhKDAsMCwwLDAuNjEpO1xuICAgIHBhZGRpbmc6IDgycHggNDhweDtcbiAgfVxuICAuaGVhZGVyLXBob3Rve1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAxMnB4O1xuXG4gICAgLyogdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tOyAqL1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO1xuICAgIFxuICAgIFxuICB9XG4gIC5oZWFkZXItdGl0bGV7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gIH1cbiAgLmhlYWRlci10ZXh0e1xuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuICAuc29jaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6MTMwMHB4KSB7XG4gIGhlYWRlcntcbiAgICBtYXJnaW46IDEyMHB4IDg0cHggMTgwcHggODRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTIsIDI0NSk7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IDFweCByZ2JhKDAsMCwwLDAuNjEpO1xuICAgIHBhZGRpbmc6IDgycHggNDhweCAxMnB4IDQ4cHg7XG4gIH1cbiAgLmhlYWRlci1waG90b3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSkgdHJhbnNsYXRlWShjYWxjKDguNHB4IC0gKDEwMHZ3KjAuMDE0MTUpKSk7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICB9XG4gIC5oZWFkZXItdGl0bGV7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICB9XG4gIC5oZWFkZXItdGV4dHtcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLnNvY2lhbC1pY29uc3tcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gIH1cblxufVxuXG4vKiA9PT09RU5EIEhFQURFUiBBUkVBICovXG5cbi8qID09PT1TVEFSVCBNQUlOIEFSRUEgKi9cbm1haW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luOiA2NHB4IDMycHggMTI4cHggMzJweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGlsZXtcbiAgZmxleDogMSAxIGF1dG87XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTIsIDI0NSk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCAxcHggcmdiYSgwLDAsMCwwLjIpO1xufVxuLnRpbGUtdGV4dHtcbiAgcGFkZGluZzogMjRweDtcbn1cbi50aWxlLXRpdGxle1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4udGlsZS10aXRsZT4qLC50aWxlLWRlc2NyaXB0aW9ue1xuICBtYXJnaW46IDhweDtcbn1cbi50aWxlLXRpdGxlPmgze1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ub3Blbi1pbi1uZXd7XG4gIHdpZHRoOiAzMHB4O1xufVxuaXtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnRpbGUtZGVzY3JpcHRpb257XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuXG4ucHJvamVjdC1waG90bz5pbWd7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkzMnB4KSBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xuICAudGlsZXtcbiAgICBmbGV4OiAxIDEgMzMlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5vcGVuLWluLW5ld3tcbiAgICB3aWR0aDogMzVweDtcbiAgfVxuICBpe1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICBcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6MTMwMHB4KXtcbiAgLnRpbGV7XG4gICAgZmxleDogMSAxIDI1JTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAub3Blbi1pbi1uZXd7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbiAgaXtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbiAgXG59XG4vKiA9PT09RU5EIE1BSU4gQVJFQSAqL1xuXG4vKiA9PT09U1RBUlQgRk9PVEVSIEFSRUEgKi9cbmZvb3RlcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCA2OSwgNjkpO1xuICBjb2xvcjogI2ZmZmRmODtcbn1cbmZvb3Rlcj4qe1xuICBmbGV4OiAxIDEgNTAlO1xufVxuLmZvb3Rlci1pbmZve1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb3Rlci1waG90b3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkzMnB4KSBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xuICBmb290ZXJ7XG4gICAgZ2FwOiAyNHB4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIGZvb3Rlcj4qe1xuICAgIGZsZXg6IDEgMSA1MCU7XG4gIH1cbiAgLmZvb3Rlci1pbmZve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5mb290ZXItcGhvdG97XG4gICAgd2lkdGg6IDQwMHg7XG4gIH1cbiAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjEzMDBweCl7XG4gIC50aWxle1xuICAgIGZsZXg6IDEgMSAyNSU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLm9wZW4taW4tbmV3e1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG4gIGl7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG4gIFxufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsNkNBQTZDO0lBQzdDLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZOztJQUVaLDhCQUE4QjtJQUM5Qiw0Q0FBNEM7OztFQUc5QztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7OztBQUdBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLDZDQUE2QztJQUM3Qyw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLFdBQVc7SUFDWCwrREFBK0Q7SUFDL0QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUY7O0FBRUEsd0JBQXdCOztBQUV4Qix3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFRjtBQUNBLHNCQUFzQjs7QUFFdEIsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdHtcXG4gICAgLS10ZXh0OiAjMDAwNzExO1xcbiAgICAtLXRleHQtbGlnaHQ6ICNmMGY2ZmY7XFxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZmFmZjtcXG4gICAgLS1wcmltYXJ5OiAjMDI2MWQ2O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICM5YmM4ZmZkMztcXG4gICAgLS1zZWNvbmRhcnk6ICNmZmMwMDA7XFxuICAgIC0tc2Vjb25kYXJ5LS1saWdodDogI2ZmZmRmODtcXG4gICAgLS1hY2NlbnQ6ICNmZjRhZjM7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi8qID09PT1TVEFSVCBIRUFERVIgQVJFQSAqL1xcblxcbmhlYWRlcntcXG4gIG1hcmdpbjogMzJweDtcXG59XFxuLmhlYWRlci1waG90b3tcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uaGVhZGVyLXRpdGxle1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuLmhlYWRlci10ZXh0e1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbi5zb2NpYWwtaWNvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkzMnB4KSBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xcbiAgaGVhZGVye1xcbiAgICBtYXJnaW46IDIwMHB4IDEyMHB4IDY0cHggMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MiwgMjQ1KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IDFweCByZ2JhKDAsMCwwLDAuNjEpO1xcbiAgICBwYWRkaW5nOiA4MnB4IDQ4cHg7XFxuICB9XFxuICAuaGVhZGVyLXBob3Rve1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAxMnB4O1xcblxcbiAgICAvKiB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO1xcbiAgICBcXG4gICAgXFxuICB9XFxuICAuaGVhZGVyLXRpdGxle1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgcGFkZGluZzogMTJweCAwcHg7XFxuICB9XFxuICAuaGVhZGVyLXRleHR7XFxuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICB9XFxuICAuc29jaWFsLWljb25ze1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6MTMwMHB4KSB7XFxuICBoZWFkZXJ7XFxuICAgIG1hcmdpbjogMTIwcHggODRweCAxODBweCA4NHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTIsIDI0NSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCAxcHggcmdiYSgwLDAsMCwwLjYxKTtcXG4gICAgcGFkZGluZzogODJweCA0OHB4IDEycHggNDhweDtcXG4gIH1cXG4gIC5oZWFkZXItcGhvdG97XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSkgdHJhbnNsYXRlWShjYWxjKDguNHB4IC0gKDEwMHZ3KjAuMDE0MTUpKSk7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcbiAgLmhlYWRlci10aXRsZXtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcXG4gIH1cXG4gIC5oZWFkZXItdGV4dHtcXG4gICAgcGFkZGluZzogMjRweCAxMnB4O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gIC5zb2NpYWwtaWNvbnN7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XFxuICB9XFxuXFxufVxcblxcbi8qID09PT1FTkQgSEVBREVSIEFSRUEgKi9cXG5cXG4vKiA9PT09U1RBUlQgTUFJTiBBUkVBICovXFxubWFpbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIG1hcmdpbjogNjRweCAzMnB4IDEyOHB4IDMycHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGlsZXtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTIsIDI0NSk7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggMXB4IHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLnRpbGUtdGV4dHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcbi50aWxlLXRpdGxle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50aWxlLXRpdGxlPiosLnRpbGUtZGVzY3JpcHRpb257XFxuICBtYXJnaW46IDhweDtcXG59XFxuLnRpbGUtdGl0bGU+aDN7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5vcGVuLWluLW5ld3tcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5pe1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4udGlsZS1kZXNjcmlwdGlvbntcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1waG90bz5pbWd7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5MzJweCkgYW5kIChtYXgtd2lkdGg6MTMwMHB4KXtcXG4gIC50aWxle1xcbiAgICBmbGV4OiAxIDEgMzMlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG4gIC5vcGVuLWluLW5ld3tcXG4gICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuICBpe1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICB9XFxuICBcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6MTMwMHB4KXtcXG4gIC50aWxle1xcbiAgICBmbGV4OiAxIDEgMjUlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gIH1cXG4gIC5vcGVuLWluLW5ld3tcXG4gICAgd2lkdGg6IDQwcHg7XFxuICB9XFxuICBpe1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICB9XFxuICBcXG59XFxuLyogPT09PUVORCBNQUlOIEFSRUEgKi9cXG5cXG4vKiA9PT09U1RBUlQgRk9PVEVSIEFSRUEgKi9cXG5mb290ZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgNjksIDY5KTtcXG4gIGNvbG9yOiAjZmZmZGY4O1xcbn1cXG5mb290ZXI+KntcXG4gIGZsZXg6IDEgMSA1MCU7XFxufVxcbi5mb290ZXItaW5mb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXItcGhvdG97XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkzMnB4KSBhbmQgKG1heC13aWR0aDoxMzAwcHgpe1xcbiAgZm9vdGVye1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgfVxcbiAgZm9vdGVyPip7XFxuICAgIGZsZXg6IDEgMSA1MCU7XFxuICB9XFxuICAuZm9vdGVyLWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTJweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuZm9vdGVyLXBob3Rve1xcbiAgICB3aWR0aDogNDAweDtcXG4gIH1cXG4gIFxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDoxMzAwcHgpe1xcbiAgLnRpbGV7XFxuICAgIGZsZXg6IDEgMSAyNSU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcbiAgLm9wZW4taW4tbmV3e1xcbiAgICB3aWR0aDogNDBweDtcXG4gIH1cXG4gIGl7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gIH1cXG4gIFxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc29sZS5sb2coJ3RoaXMgaXMgaW5kZXguanMnKTtcbmNvbnNvbGUubG9nKCd0aGlzIGlzIGluZGV4IDIuanMnKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9