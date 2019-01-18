"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BITBOXSDK = require("bitbox-sdk/lib/bitbox-sdk").default;
var Button_1 = require("./Button");
var Badger = /** @class */ (function (_super) {
    __extends(Badger, _super);
    function Badger(config) {
        var _this = _super.call(this, config) || this;
        var restURL;
        if (config && config.restURL && config.restURL !== "")
            restURL = config.restURL;
        else
            restURL = "https://rest.bitcoin.com/v1/";
        _this.Button = new Button_1.default(restURL);
        return _this;
    }
    return Badger;
}(BITBOXSDK));
exports.default = Badger;