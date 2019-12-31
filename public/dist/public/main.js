(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"loggedIn; else notLoggedIn\">\n    <h2>Welcome Adrien!</h2>\n    <button (click)=\"displayCityForm()\">Create City</button>\n    <button (click)=\"displayDangerForm()\">Danger Form</button>\n    <button (click)=\"changeKey('Eastern-Seaboard')\">Eastern-Seaboard Trip</button>\n    <button (click)=\"changeKey('')\">Get All Cities</button>\n    <div class=\"forms\">\n        <app-new-city *ngIf=\"cityForm\" (refresh)=\"updateCities($event)\"></app-new-city>\n        <app-new-danger *ngIf=\"dangerForm\"></app-new-danger>\n        <app-edit-city *ngIf=\"editCityId\" [cityId]=\"editCityId\" (close)=\"closeEditCity($event)\"></app-edit-city>\n        <app-edit-danger *ngIf=\"editDangerId\" [dangerId]=\"editDangerId\"></app-edit-danger>\n\n    </div>\n    <app-show-city (cityId)=\"getEditCity($event)\" [cityKey]=\"cityKey\"></app-show-city>\n    <app-show-danger></app-show-danger>\n    \n</div>\n\n<ng-template #notLoggedIn >\n    <form (submit)=\"adminLoggin()\">\n        <input type=\"text\" name=\"answer\" [(ngModel)]=\"answer\">\n        <input type=\"submit\" value=\"PUSH\">\n    </form>\n\n</ng-template>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1><a [routerLink]=\"['/roadtrip']\" routerLinkActive=\"router-link-active\" >ROAD</a> TRI<span [routerLink]=\"['/secret/admin']\">P</span></h1>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/city/city.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/city/city.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"city\">\n    <h1>{{city.name}}</h1>\n    <img src=\"../../assets/img/cities/{{city.imageUrl}}\" alt={{city.name}}>\n    <p>{{city.description}}</p>\n</div>\n<div>\n    <h3>Decisions: </h3>\n    <ol>\n        <li>1. - <button>Hit the road.</button></li>\n        <li>2. - <button>Go to store.</button></li>\n        <li>3. - <button>Explore city.</button></li>\n    </ol>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-city/edit-city.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-city/edit-city.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-light\" *ngIf=\"editCity\" >\n    <button (click)=\"closeEdit()\">CLOSE</button>\n    <button (click)=\"deleteCity(editCity._id)\" >DELETE</button>\n\n    <h3>Edit {{editCity.name}}</h3>\n    <form (submit)=\"updateCityToService()\">\n        <div class=\"form-group\">\n            <label>City Name: </label>\n            <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"editCity.name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Description: </label>\n            <textarea class=\"form-control\" name=\"description\" cols=\"30\" rows=\"5\" [(ngModel)]=\"editCity.description\"></textarea>\n        </div>\n        <div class=\"form-group\">\n            <label>Image Url: </label>\n            <input class=\"form-control\" type=\"text\" name=\"imageUrl\" [(ngModel)]=\"editCity.imageUrl\">\n        </div>\n        <div class=\"form-group\">\n            <label>Bypass: </label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" name=\"bypass\" [(ngModel)]=\"editCity.bypass\">\n        </div>\n        <div class=\"form-group\">\n            <label>North: </label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" name=\"north\" [(ngModel)]=\"editCity.north\">\n        </div>\n        <div class=\"form-group\">\n            <label>South: </label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" name=\"south\" [(ngModel)]=\"editCity.south\">\n        </div>\n        <div class=\"form-group\">\n            <label>List Number: </label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" name=\"listNumber\" [(ngModel)]=\"editCity.listNumber\">\n        </div>\n        <div class=\"form-group\">\n            <label>Trip Name: </label>\n            <input class=\"form-control\" type=\"text\" name=\"trip\" [(ngModel)]=\"editCity.trip\">\n        </div>\n        <div class=\"form-group\">\n            <input class=\"btn\" type=\"submit\" value=\"Edit City\">\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-danger/edit-danger.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-danger/edit-danger.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-danger works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-city *ngIf=\"inCity\" [city]=\"currentCity\"></app-city>\n<app-road *ngIf=\"onRoad\" ></app-road>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"landing\">\n    <img src={{roadtripSrc}} alt=\"Road Trip\">\n    <button class=\"btn \"[routerLink]=\"['/newgame']\" routerLinkActive=\"router-link-active\" >Click To Play</button>\n    <audio src=\"../../assets/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3\" type=\"audio/mpeg\" autoplay loop></audio>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-city/new-city.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-city/new-city.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-light\" >\n    <h3>Create New City</h3>\n    <form (submit)=\"createCityToService()\">\n        <div class=\"form-group\">\n            <label>City Name: </label>\n            <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"newCity.name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Description: </label>\n            <textarea class=\"form-control\" name=\"description\" cols=\"30\" rows=\"5\" [(ngModel)]=\"newCity.description\"></textarea>\n        </div>\n        <div class=\"form-group\">\n            <label>Image Url: </label>\n            <input class=\"form-control\" type=\"text\" name=\"imageUrl\" [(ngModel)]=\"newCity.imageUrl\">\n        </div>\n        <div class=\"form-group\">\n            <label>Bypass: </label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" name=\"bypass\" [(ngModel)]=\"newCity.bypass\">\n        </div>\n        <div class=\"form-group\">\n            <label>North: </label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" name=\"north\" [(ngModel)]=\"newCity.north\">\n        </div>\n        <div class=\"form-group\">\n            <label>South: </label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" name=\"south\" [(ngModel)]=\"newCity.south\">\n        </div>\n        <div class=\"form-group\">\n            <label>List Number: </label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" name=\"listNumber\" [(ngModel)]=\"newCity.listNumber\">\n        </div>\n        <div class=\"form-group\">\n            <label>Trip Name: </label>\n            <input class=\"form-control\" type=\"text\" name=\"trip\" [(ngModel)]=\"newCity.trip\">\n        </div>\n        <div class=\"form-group\">\n            <input class=\"btn\" type=\"submit\" value=\"Create City\">\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-danger/new-danger.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-danger/new-danger.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-light\" >\n\n    <h3>Create New Danger</h3>\n    <form (submit)=\"createDangerToService()\">\n        <div class=\"form-group\">\n            <label>Class: </label>\n            <select name=\"class\" class=\"form-control\" [(ngModel)]=\"newDanger.class\">\n                <option value=\"city\">City</option>\n                <option value=\"road\">Road</option>\n                <option value=\"unique\">Unique</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label>Name: </label>\n            <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"newDanger.name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Description: </label>\n            <textarea class=\"form-control\" name=\"description\" cols=\"30\" rows=\"5\" [(ngModel)]=\"newDanger.description\"></textarea>\n        </div>\n        <div class=\"form-group\">\n            <label>Damage: </label>\n            <input class=\"form-control\" type=\"number\" min=\"1\" max=\"10\" name=\"damage\" [(ngModel)]=\"newDanger.damage\">\n        </div>\n        <div class=\"form-group\">\n            <input class=\"btn\" type=\"submit\" value=\"Create Danger\">\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-game/new-game.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-game/new-game.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{instructions}}</h1>\n<div id=\"newgame\">\n    <div class=\"car\">\n        <h4>Option 1: Hooptie</h4>\n        <img (click)=\"selectParty(1)\" src=\"../../assets/img/hooptie.jpg\" alt=\"Hooptie\">\n    </div>\n    <div class=\"car\">\n        <h4>Option 2: Mom's Suv</h4>\n        <img (click)=\"selectParty(2)\" src=\"../../assets/img/momSuv.jpg\" alt=\"Mom SUV\">\n    </div>\n    <div class=\"car\">\n        <h4>Option 3: Party Bus</h4>\n        <img (click)=\"selectParty(3)\" src=\"../../assets/img/partyBus.jpg\" alt=\"Party Bus\">\n    </div>\n</div>\n<div class=\"party\" [ngClass]=\"{'off': switch}\">\n    <app-party-form  class=\"col-5\" *ngIf=\"party\" [partyId]=\"party\"  (closeForm)=\"closeForm($event)\"></app-party-form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-screen/open-screen.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-screen/open-screen.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>open-screen works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/party-form/party-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/party-form/party-form.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form (submit)=\"createParty()\">\n    <div class=\"form-group\">\n        <label>Player One: </label>\n        <input class=\"form-control\" type=\"text\" name=\"newParty.playerOne\" [(ngModel)]=\"newParty.playerOne\">\n    </div>\n    <div class=\"form-group\">\n        <label>Player Two: </label>\n        <input class=\"form-control\" type=\"text\" name=\"newParty.playerTwo\" [(ngModel)]=\"newParty.playerTwo\">\n    </div>\n    <div class=\"form-group\">\n        <label>Player Three: </label>\n        <input class=\"form-control\" type=\"text\" name=\"newParty.playerThree\" [(ngModel)]=\"newParty.playerThree\">\n    </div>\n    <div class=\"form-group\">\n        <label>Player Four: </label>\n        <input class=\"form-control\" type=\"text\" name=\"newParty.playerFour\" [(ngModel)]=\"newParty.playerFour\">\n    </div>\n    <div *ngIf=\"partyId == 2 || partyId == 3\">\n        <div class=\"form-group\">\n            <label>Player Five: </label>\n            <input class=\"form-control\" type=\"text\" name=\"newParty.playerFive\" [(ngModel)]=\"newParty.playerFive\">\n        </div>\n        <div class=\"form-group\">\n            <label>Player Six: </label>\n            <input class=\"form-control\" type=\"text\" name=\"newParty.playerSix\" [(ngModel)]=\"newParty.playerSix\">\n        </div>\n        <div class=\"form-group\">\n            <label>Player Seven: </label>\n            <input class=\"form-control\" type=\"text\" name=\"newParty.playerSeven\" [(ngModel)]=\"newParty.playerSeven\">\n        </div>\n        <div *ngIf=\"partyId == 3\" >\n            <div class=\"form-group\">\n                <label>Player Eight: </label>\n                <input class=\"form-control\" type=\"text\" name=\"newParty.playerEight\" [(ngModel)]=\"newParty.playerEight\">\n            </div>\n            <div class=\"form-group\">\n                <label>Player Nine: </label>\n                <input class=\"form-control\" type=\"text\" name=\"newParty.playerNine\" [(ngModel)]=\"newParty.playerNine\">\n            </div>\n            <div class=\"form-group\">\n                <label>Player Ten: </label>\n                <input class=\"form-control\" type=\"text\" name=\"newParty.playerTen\" [(ngModel)]=\"newParty.playerTen\">\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <input class=\"btn btn-outline-warning\" type=\"submit\" value=\"PLAY\">\n        <button class=\"btn btn-outline-warning\"  (click)=\"close()\">CLOSE</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/road/road.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/road/road.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>road works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-city/show-city.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-city/show-city.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  *ngIf=\"allCities\">\n    <div class=\"city\"*ngFor=\"let city of allCities\" >\n        <p>{{ city.trip }} || #{{city.listNumber}}</p>\n        <h2>{{city.name}}</h2>\n        <img (click)=\"sendEditId(city._id)\" src=\"../../assets/img/cities/{{city.imageUrl}}\" alt={{city.name}}>\n        <p>{{city.description}}</p>\n        <p>ByPass: {{city.bypass}} miles</p>\n        <p>North: {{city.north}} miles</p>\n        <p>South: {{city.south}} miles</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-danger/show-danger.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-danger/show-danger.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>show-danger works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>store works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    margin: 0;\n    padding: 0;\n    vertical-align: top;\n    box-sizing: border-box;\n}\napp-new-city, app-new-danger, app-edit-city, app-edit-danger{\n    display: inline-block;\n    width: 400px;\n    max-height: 300px;\n    overflow-y: scroll;\n    padding: 10px;\n    border: 2px dotted orange;\n    margin: 0 10px;\n}\napp-show-city, app-show-danger{\n    display: block;\n    width: 95%;\n    max-height: 500px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n    border: 2px dotted orange;\n    margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmFwcC1uZXctY2l0eSwgYXBwLW5ldy1kYW5nZXIsIGFwcC1lZGl0LWNpdHksIGFwcC1lZGl0LWRhbmdlcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IGRvdHRlZCBvcmFuZ2U7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbmFwcC1zaG93LWNpdHksIGFwcC1zaG93LWRhbmdlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogOTUlO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgb3JhbmdlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AdminComponent = class AdminComponent {
    constructor(_router) {
        this._router = _router;
        this.loggedIn = false;
        this._pass = "bennybob";
        this.cityForm = false;
        this.dangerForm = false;
    }
    ngOnInit() {
        this.answer = '';
    }
    adminLoggin() {
        console.log(this.answer);
        if (this.answer === this._pass) {
            this.loggedIn = true;
        }
        else {
            this._router.navigate(['/']);
        }
    }
    displayCityForm() {
        this.cityForm = !this.cityForm;
    }
    displayDangerForm() {
        this.dangerForm = !this.dangerForm;
    }
    updateCities(e) {
        console.log(e);
    }
    getEditCity(id) {
        this.editCityId = id;
    }
    changeKey(key) {
        console.log(key);
        this.cityKey = key;
    }
    closeEditCity(e) {
        this.editCityId = null;
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-game/new-game.component */ "./src/app/new-game/new-game.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");







const routes = [
    { path: 'roadtrip', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
    { path: 'secret/admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: 'newgame', component: _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__["NewGameComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    margin: 0;\n    padding: 0;\n}\nh1 a {\n    color: lime;\n    cursor: default;\n}\nh1{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuaDEgYSB7XG4gICAgY29sb3I6IGxpbWU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _danger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./danger.service */ "./src/app/danger.service.ts");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city.service */ "./src/app/city.service.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game.service */ "./src/app/game.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _new_city_new_city_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-city/new-city.component */ "./src/app/new-city/new-city.component.ts");
/* harmony import */ var _new_danger_new_danger_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-danger/new-danger.component */ "./src/app/new-danger/new-danger.component.ts");
/* harmony import */ var _show_city_show_city_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-city/show-city.component */ "./src/app/show-city/show-city.component.ts");
/* harmony import */ var _show_danger_show_danger_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show-danger/show-danger.component */ "./src/app/show-danger/show-danger.component.ts");
/* harmony import */ var _edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-city/edit-city.component */ "./src/app/edit-city/edit-city.component.ts");
/* harmony import */ var _edit_danger_edit_danger_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-danger/edit-danger.component */ "./src/app/edit-danger/edit-danger.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./new-game/new-game.component */ "./src/app/new-game/new-game.component.ts");
/* harmony import */ var _party_form_party_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./party-form/party-form.component */ "./src/app/party-form/party-form.component.ts");
/* harmony import */ var _open_screen_open_screen_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./open-screen/open-screen.component */ "./src/app/open-screen/open-screen.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _road_road_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./road/road.component */ "./src/app/road/road.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
            _new_city_new_city_component__WEBPACK_IMPORTED_MODULE_11__["NewCityComponent"],
            _new_danger_new_danger_component__WEBPACK_IMPORTED_MODULE_12__["NewDangerComponent"],
            _show_city_show_city_component__WEBPACK_IMPORTED_MODULE_13__["ShowCityComponent"],
            _show_danger_show_danger_component__WEBPACK_IMPORTED_MODULE_14__["ShowDangerComponent"],
            _edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_15__["EditCityComponent"],
            _edit_danger_edit_danger_component__WEBPACK_IMPORTED_MODULE_16__["EditDangerComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_17__["LandingComponent"],
            _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_18__["NewGameComponent"],
            _party_form_party_form_component__WEBPACK_IMPORTED_MODULE_19__["PartyFormComponent"],
            _open_screen_open_screen_component__WEBPACK_IMPORTED_MODULE_20__["OpenScreenComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_21__["GameComponent"],
            _city_city_component__WEBPACK_IMPORTED_MODULE_22__["CityComponent"],
            _store_store_component__WEBPACK_IMPORTED_MODULE_23__["StoreComponent"],
            _road_road_component__WEBPACK_IMPORTED_MODULE_24__["RoadComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [
            _city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"],
            _game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"],
            _danger_service__WEBPACK_IMPORTED_MODULE_5__["DangerService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/city.service.ts":
/*!*********************************!*\
  !*** ./src/app/city.service.ts ***!
  \*********************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CityService = class CityService {
    constructor(_http) {
        this._http = _http;
    }
    getAllCities() {
        return this._http.get('/api/cities');
    }
    getSelectedCities(key) {
        return this._http.get(`/api/cities/selected/${key}`);
    }
    getOneCity(id) {
        return this._http.get(`/api/cities/${id}`);
    }
    createCity(newCity) {
        return this._http.post('/api/cities/create', newCity);
    }
    updateCity(updateCity) {
        return this._http.put(`/api/cities/update/${updateCity._id}`, updateCity);
    }
    destroyCity(id) {
        return this._http.delete(`/api/cities/destroy/${id}`);
    }
};
CityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CityService);



/***/ }),

/***/ "./src/app/city/city.component.css":
/*!*****************************************!*\
  !*** ./src/app/city/city.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    margin: 0;\n    padding: 0;\n    background-color: black;\n}\n.city{\n    width: 80%;\n    margin: 10px auto;\n    background-color: black;\n}\nh1{\n    text-align: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS9jaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NpdHkvY2l0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5jaXR5e1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5oMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/city/city.component.ts":
/*!****************************************!*\
  !*** ./src/app/city/city.component.ts ***!
  \****************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CityComponent = class CityComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.city);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CityComponent.prototype, "city", void 0);
CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/city/city.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./city.component.css */ "./src/app/city/city.component.css")).default]
    })
], CityComponent);



/***/ }),

/***/ "./src/app/danger.service.ts":
/*!***********************************!*\
  !*** ./src/app/danger.service.ts ***!
  \***********************************/
/*! exports provided: DangerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangerService", function() { return DangerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DangerService = class DangerService {
    constructor(_http) {
        this._http = _http;
    }
    getAllDangers() {
        return this._http.get('/api/dangers');
    }
    getOneDanger() {
        return this._http.get('/api/dangers/:id');
    }
    createDanger(newDanger) {
        console.log(newDanger);
        return this._http.post('/api/dangers/create', newDanger);
    }
    updateDanger(updateDanger) {
        return this._http.put(`/api/dangers/update/${updateDanger._id}`, updateDanger);
    }
    destroyDanger(id) {
        return this._http.delete(`/api/dangers/destroy/${id}`);
    }
};
DangerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DangerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DangerService);



/***/ }),

/***/ "./src/app/edit-city/edit-city.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-city/edit-city.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input{\n    border: 1px solid orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1jaXR5L2VkaXQtY2l0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1jaXR5L2VkaXQtY2l0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit-city/edit-city.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-city/edit-city.component.ts ***!
  \**************************************************/
/*! exports provided: EditCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCityComponent", function() { return EditCityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../city.service */ "./src/app/city.service.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");




let EditCityComponent = class EditCityComponent {
    constructor(_cityService, _gameService) {
        this._cityService = _cityService;
        this._gameService = _gameService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.getEditCity(this.cityId);
    }
    ngOnChanges() {
        this.getEditCity(this.cityId);
    }
    getEditCity(id) {
        const obs = this._cityService.getOneCity(id);
        obs.subscribe(data => {
            if (data['results']) {
                this.editCity = data['results'];
            }
        });
    }
    updateCityToService() {
        const obs = this._cityService.updateCity(this.editCity);
        obs.subscribe(data => {
            if (data['results']) {
                this.editCity = null;
            }
        });
    }
    closeEdit() {
        this.close.emit(true);
    }
};
EditCityComponent.ctorParameters = () => [
    { type: _city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"] },
    { type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditCityComponent.prototype, "cityId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditCityComponent.prototype, "close", void 0);
EditCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-city',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-city.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-city/edit-city.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-city.component.css */ "./src/app/edit-city/edit-city.component.css")).default]
    })
], EditCityComponent);



/***/ }),

/***/ "./src/app/edit-danger/edit-danger.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-danger/edit-danger.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZGFuZ2VyL2VkaXQtZGFuZ2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/edit-danger/edit-danger.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-danger/edit-danger.component.ts ***!
  \******************************************************/
/*! exports provided: EditDangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDangerComponent", function() { return EditDangerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditDangerComponent = class EditDangerComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditDangerComponent.prototype, "dangerId", void 0);
EditDangerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-danger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-danger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-danger/edit-danger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-danger.component.css */ "./src/app/edit-danger/edit-danger.component.css")).default]
    })
], EditDangerComponent);



/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameService = class GameService {
    constructor() {
        this._state = {
            playing: {
                vehicle: null,
                snacks: {
                    chips: 0,
                    fruit: 0,
                    soda: 0,
                    beefSticks: 0,
                    nuts: 0,
                    beer: 0
                }
            },
            vehicles: {
                hooptie: {
                    id: 1,
                    speed: 50,
                    img: 'hooptie.jpg',
                    capacity: 4,
                    passengers: [],
                    fuel: 0
                },
                momSuv: {
                    id: 2,
                    speed: 85,
                    img: 'momSuv.jpg',
                    capacity: 7,
                    passengers: [],
                    fuel: 0
                },
                partyBus: {
                    id: 3,
                    speed: 65,
                    img: 'partyBus.jpg',
                    capacity: 10,
                    passengers: [],
                    fuel: 0
                }
            }
        };
    }
    createParty(newParty, vehicleId) {
        for (var key in this._state.vehicles) {
            if (this._state.vehicles[key].id === vehicleId) {
                this._state.playing.vehicle = this._state.vehicles[key];
                for (var player in newParty) {
                    this._state.playing.vehicle.passengers.push(newParty[player]);
                }
                console.log(this._state);
                return true;
            }
        }
    }
    getParty() {
        return this._state.playing;
    }
};
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../city.service */ "./src/app/city.service.ts");




let GameComponent = class GameComponent {
    constructor(_gameService, _cityService) {
        this._gameService = _gameService;
        this._cityService = _cityService;
        this.inCity = false;
    }
    ngOnInit() {
        console.log(this._gameService.getParty());
        this.currentCityId = 0;
        this.getAllCities();
    }
    getAllCities() {
        let obs = this._cityService.getSelectedCities('Eastern-Seaboard');
        obs.subscribe(data => {
            if (data['results']) {
                this.allCities = data['results'];
                this.getCity(this.currentCityId);
            }
        });
    }
    getCity(id) {
        this.currentCity = this.allCities[id];
        this.inCity = true;
    }
};
GameComponent.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"] }
];
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#landing{\n    width: 100%;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 10% 80% 10%;\n    grid-template-rows: 90% 5px 10%;\n}\n\nbutton{\n    padding: 10px;\n    border: 2px solid orange;\n    grid-row: 3;\n    grid-column: 2;\n    margin: 0 auto;\n    \n}\n\nbutton:hover{\n    transition: .3s;\n    border: 2px solid lime;\n    background-color: orange;\n    color: black;\n    border: 2px solid black;\n}\n\nimg{\n    border: 3px solid lime;\n    grid-row:1;\n    grid-column: 2;\n    width: 100%;\n    -webkit-animation: borderBlink .3s infinite;\n    animation:         borderBlink .3s infinite;\n}\n\n@-webkit-keyframes borderBlink {\n    0%   { border: 3px solid lime; }\n    100% { border: 3px solid orange; }\n}\n\n@keyframes borderBlink {\n0%   { border: 3px solid lime; }\n100% { border: 3px solid orange; }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7O0FBRWxCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCwyQ0FBMkM7SUFHM0MsMkNBQTJDO0FBQy9DOztBQUNBO0lBQ0ksT0FBTyxzQkFBc0IsRUFBRTtJQUMvQixPQUFPLHdCQUF3QixFQUFFO0FBQ3JDOztBQVNBO0FBQ0EsT0FBTyxzQkFBc0IsRUFBRTtBQUMvQixPQUFPLHdCQUF3QixFQUFFO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGFuZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDgwJSAxMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MCUgNXB4IDEwJTtcbn1cblxuYnV0dG9ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xuICAgIGdyaWQtcm93OiAzO1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIFxufVxuYnV0dG9uOmhvdmVye1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaW1lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5pbWd7XG4gICAgYm9yZGVyOiAzcHggc29saWQgbGltZTtcbiAgICBncmlkLXJvdzoxO1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3JkZXJCbGluayAuM3MgaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb246ICAgIGJvcmRlckJsaW5rIC4zcyBpbmZpbml0ZTtcbiAgICAtby1hbmltYXRpb246ICAgICAgYm9yZGVyQmxpbmsgLjNzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogICAgICAgICBib3JkZXJCbGluayAuM3MgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm9yZGVyQmxpbmsge1xuICAgIDAlICAgeyBib3JkZXI6IDNweCBzb2xpZCBsaW1lOyB9XG4gICAgMTAwJSB7IGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTsgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJvcmRlckJsaW5rIHtcbjAlICAgeyBib3JkZXI6IDNweCBzb2xpZCBsaW1lOyB9XG4xMDAlIHsgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlOyB9XG59XG5ALW8ta2V5ZnJhbWVzIGJvcmRlckJsaW5rIHtcbjAlICAgeyBib3JkZXI6IDNweCBzb2xpZCBsaW1lOyB9XG4xMDAlIHsgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlOyB9XG59XG5Aa2V5ZnJhbWVzIGJvcmRlckJsaW5rIHtcbjAlICAgeyBib3JkZXI6IDNweCBzb2xpZCBsaW1lOyB9XG4xMDAlIHsgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlOyB9XG59Il19 */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
        this.roadtripSrc = '../../assets/img/road-trip-orange.jpg';
        this.flickerRoadSign();
        setInterval(() => {
            this.flickerRoadSign();
        }, 100);
    }
    flickerRoadSign() {
        if (this.roadtripSrc == '../../assets/img/road-trip.jpg') {
            this.roadtripSrc = '../../assets/img/road-trip-orange.jpg';
        }
        else if (this.roadtripSrc == '../../assets/img/road-trip-orange.jpg') {
            this.roadtripSrc = '../../assets/img/road-trip.jpg';
        }
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/new-city/new-city.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-city/new-city.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input{\n    border: 1px solid orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWNpdHkvbmV3LWNpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL25ldy1jaXR5L25ldy1jaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/new-city/new-city.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-city/new-city.component.ts ***!
  \************************************************/
/*! exports provided: NewCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCityComponent", function() { return NewCityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../city.service */ "./src/app/city.service.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");




let NewCityComponent = class NewCityComponent {
    constructor(_cityService, _gameService) {
        this._cityService = _cityService;
        this._gameService = _gameService;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.newCity = {
            name: '',
            description: '',
            imageUrl: '',
            bypass: 0,
            north: 0,
            south: 0,
            listNumber: 0o1,
            trip: ''
        };
        console.log(this.newCity.listNumber);
    }
    createCityToService() {
        const obs = this._cityService.createCity(this.newCity);
        obs.subscribe(data => {
            console.log(data);
            this.newCity = {
                name: '',
                description: '',
                imageUrl: '',
                bypass: 0,
                north: 0,
                south: 0,
                listNumber: 0,
                trip: ''
            };
            this.refresh.emit("refresh");
        });
    }
};
NewCityComponent.ctorParameters = () => [
    { type: _city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"] },
    { type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NewCityComponent.prototype, "refresh", void 0);
NewCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-city',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-city.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-city/new-city.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-city.component.css */ "./src/app/new-city/new-city.component.css")).default]
    })
], NewCityComponent);



/***/ }),

/***/ "./src/app/new-danger/new-danger.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-danger/new-danger.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input{\n    border: 1px solid orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWRhbmdlci9uZXctZGFuZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9uZXctZGFuZ2VyL25ldy1kYW5nZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/new-danger/new-danger.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-danger/new-danger.component.ts ***!
  \****************************************************/
/*! exports provided: NewDangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDangerComponent", function() { return NewDangerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _danger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../danger.service */ "./src/app/danger.service.ts");



let NewDangerComponent = class NewDangerComponent {
    constructor(_dangerService) {
        this._dangerService = _dangerService;
    }
    ngOnInit() {
        this.newDanger = {
            class: '',
            name: '',
            description: '',
            damage: 1
        };
    }
    createDangerToService() {
        console.log(this.newDanger);
        const obs = this._dangerService.createDanger(this.newDanger);
        obs.subscribe(data => {
            this.newDanger = {
                class: '',
                name: '',
                description: '',
                damage: 1
            };
        });
    }
};
NewDangerComponent.ctorParameters = () => [
    { type: _danger_service__WEBPACK_IMPORTED_MODULE_2__["DangerService"] }
];
NewDangerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-danger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-danger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-danger/new-danger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-danger.component.css */ "./src/app/new-danger/new-danger.component.css")).default]
    })
], NewDangerComponent);



/***/ }),

/***/ "./src/app/new-game/new-game.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-game/new-game.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    margin: 0;\n    padding: 0;\n    vertical-align: top;\n    box-sizing: border-box;\n    background-color: black;\n}\n#newgame{\n    margin: 0 auto;\n}\nh4{\n    text-align: center;\n    margin-top: 5%;\n}\n.car{\n    width: 90%;\n    display: block;\n    margin: 0 auto;\n    border: 2px solid orange;\n}\n.car img{\n    width: 90%;\n    display: block;\n    margin: 10% auto;\n}\n.party{\n    width: 90%;\n    position: fixed;\n    top: 80px;\n    left: 5%;\n    background-color: black;\n    padding: 20px;\n    border: 2px solid orange;\n    height: 400px;\n    overflow-y: scroll;\n}\nh1{\n    text-align: center;\n}\n.off{\n    visibility: hidden;\n}\n@media only screen and (min-width: 768px){\n    #newgame{\n        display: flex;\n        justify-content: space-around;\n    }\n    .car{\n        display: inline-block;\n        width: 30%;\n    }\n    .party{\n        width: 40%;\n        left: 30%;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWdhbWUvbmV3LWdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3LWdhbWUvbmV3LWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuI25ld2dhbWV7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5oNHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG4uY2Fye1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xufVxuLmNhciBpbWd7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xufVxuLnBhcnR5e1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogODBweDtcbiAgICBsZWZ0OiA1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbmgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vZmZ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAjbmV3Z2FtZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgIC5jYXJ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gICAgLnBhcnR5e1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBsZWZ0OiAzMCU7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/new-game/new-game.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-game/new-game.component.ts ***!
  \************************************************/
/*! exports provided: NewGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameComponent", function() { return NewGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");



let NewGameComponent = class NewGameComponent {
    constructor(_gameService) {
        this._gameService = _gameService;
        this.switch = true;
    }
    ngOnInit() {
        this.instructions = "Please select a vehicle for travel.";
    }
    selectParty(num) {
        this.party = num;
        this.switch = false;
        this.instructions = "Please enter the names of your friends.";
    }
    closeForm(e) {
        this.switch = true;
        this.party = null;
        this.instructions = "Please select a vehicle for travel.";
    }
};
NewGameComponent.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
NewGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-game/new-game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-game.component.css */ "./src/app/new-game/new-game.component.css")).default]
    })
], NewGameComponent);



/***/ }),

/***/ "./src/app/open-screen/open-screen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/open-screen/open-screen.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZW4tc2NyZWVuL29wZW4tc2NyZWVuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/open-screen/open-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/open-screen/open-screen.component.ts ***!
  \******************************************************/
/*! exports provided: OpenScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenScreenComponent", function() { return OpenScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OpenScreenComponent = class OpenScreenComponent {
    constructor() { }
    ngOnInit() {
    }
};
OpenScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-screen/open-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-screen.component.css */ "./src/app/open-screen/open-screen.component.css")).default]
    })
], OpenScreenComponent);



/***/ }),

/***/ "./src/app/party-form/party-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/party-form/party-form.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, button{\n    border: 1px solid orange;\n}\nbutton{\n    margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydHktZm9ybS9wYXJ0eS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhcnR5LWZvcm0vcGFydHktZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsIGJ1dHRvbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG59XG5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/party-form/party-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/party-form/party-form.component.ts ***!
  \****************************************************/
/*! exports provided: PartyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyFormComponent", function() { return PartyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PartyFormComponent = class PartyFormComponent {
    constructor(_gameService, _router) {
        this._gameService = _gameService;
        this._router = _router;
        this.closeForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.partyId == 1) {
            this.newParty = {
                playerOne: '',
                playerTwo: '',
                playerThree: '',
                playerFour: ''
            };
        }
        else if (this.partyId == 2) {
            this.newParty = {
                playerOne: '',
                playerTwo: '',
                playerThree: '',
                playerFour: '',
                playerFive: '',
                playerSix: '',
                playerSeven: ''
            };
        }
        else if (this.partyId == 3) {
            this.newParty = {
                playerOne: '',
                playerTwo: '',
                playerThree: '',
                playerFour: '',
                playerFive: '',
                playerSix: '',
                playerSeven: '',
                playerEight: '',
                playerNine: '',
                playerTen: ''
            };
        }
    }
    createParty() {
        let submit = this._gameService.createParty(this.newParty, this.partyId);
        if (submit === true) {
            this._router.navigate(['/game']);
        }
    }
    close() {
        this.closeForm.emit(true);
    }
};
PartyFormComponent.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PartyFormComponent.prototype, "partyId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PartyFormComponent.prototype, "closeForm", void 0);
PartyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-party-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./party-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/party-form/party-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./party-form.component.css */ "./src/app/party-form/party-form.component.css")).default]
    })
], PartyFormComponent);



/***/ }),

/***/ "./src/app/road/road.component.css":
/*!*****************************************!*\
  !*** ./src/app/road/road.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvYWQvcm9hZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/road/road.component.ts":
/*!****************************************!*\
  !*** ./src/app/road/road.component.ts ***!
  \****************************************/
/*! exports provided: RoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadComponent", function() { return RoadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RoadComponent = class RoadComponent {
    constructor() { }
    ngOnInit() {
    }
};
RoadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-road',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./road.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/road/road.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./road.component.css */ "./src/app/road/road.component.css")).default]
    })
], RoadComponent);



/***/ }),

/***/ "./src/app/show-city/show-city.component.css":
/*!***************************************************!*\
  !*** ./src/app/show-city/show-city.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    box-sizing: border-box;\n    vertical-align: top;\n}\n\n\n.city{\n    width: 400px;\n    border: 1px solid lime;\n    display: inline-block;\n    white-space: normal;\n    margin: 10px;\n    padding: 5px;\n}\n\n\n.city img{\n    width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1jaXR5L3Nob3ctY2l0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7OztBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hvdy1jaXR5L3Nob3ctY2l0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cblxuLmNpdHl7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpbWU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5jaXR5IGltZ3tcbiAgICB3aWR0aDogNDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/show-city/show-city.component.ts":
/*!**************************************************!*\
  !*** ./src/app/show-city/show-city.component.ts ***!
  \**************************************************/
/*! exports provided: ShowCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCityComponent", function() { return ShowCityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../city.service */ "./src/app/city.service.ts");



let ShowCityComponent = class ShowCityComponent {
    constructor(_cityService) {
        this._cityService = _cityService;
        this.cityId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cityKey = '';
    }
    ngOnInit() {
        this.getAllCitiesFromService();
        if (this.cityKey == '') {
            this.getAllCitiesFromService();
        }
        else {
            this.getSelectedTripCitiesFromService(this.cityKey);
        }
    }
    ngOnChanges() {
        this.getAllCitiesFromService();
        if (this.cityKey == '') {
            this.getAllCitiesFromService();
        }
        else {
            this.getSelectedTripCitiesFromService(this.cityKey);
        }
    }
    getAllCitiesFromService() {
        const obs = this._cityService.getAllCities();
        obs.subscribe(data => {
            if (data['results']) {
                this.allCities = data['results'];
            }
        });
    }
    getSelectedTripCitiesFromService(key) {
        const obs = this._cityService.getSelectedCities(key);
        obs.subscribe(data => {
            if (data['results']) {
                this.allCities = data['results'];
            }
        });
    }
    sendEditId(id) {
        this.cityId.emit(id);
    }
};
ShowCityComponent.ctorParameters = () => [
    { type: _city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShowCityComponent.prototype, "cityId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowCityComponent.prototype, "cityKey", void 0);
ShowCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-city',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-city.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-city/show-city.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-city.component.css */ "./src/app/show-city/show-city.component.css")).default]
    })
], ShowCityComponent);



/***/ }),

/***/ "./src/app/show-danger/show-danger.component.css":
/*!*******************************************************!*\
  !*** ./src/app/show-danger/show-danger.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctZGFuZ2VyL3Nob3ctZGFuZ2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/show-danger/show-danger.component.ts":
/*!******************************************************!*\
  !*** ./src/app/show-danger/show-danger.component.ts ***!
  \******************************************************/
/*! exports provided: ShowDangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDangerComponent", function() { return ShowDangerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _danger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../danger.service */ "./src/app/danger.service.ts");



let ShowDangerComponent = class ShowDangerComponent {
    constructor(_dangerService) {
        this._dangerService = _dangerService;
    }
    ngOnInit() {
    }
    getAllDangers() {
        const obs = this._dangerService.getAllDangers();
        obs.subscribe(data => {
            if (data['results']) {
            }
        });
    }
};
ShowDangerComponent.ctorParameters = () => [
    { type: _danger_service__WEBPACK_IMPORTED_MODULE_2__["DangerService"] }
];
ShowDangerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-danger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-danger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-danger/show-danger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-danger.component.css */ "./src/app/show-danger/show-danger.component.css")).default]
    })
], ShowDangerComponent);



/***/ }),

/***/ "./src/app/store/store.component.css":
/*!*******************************************!*\
  !*** ./src/app/store/store.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreComponent = class StoreComponent {
    constructor() { }
    ngOnInit() {
    }
};
StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store.component.css */ "./src/app/store/store.component.css")).default]
    })
], StoreComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adrienjdion/Desktop/road-trip/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map