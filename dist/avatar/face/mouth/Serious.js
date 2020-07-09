"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Serious = /** @class */ (function (_super) {
    __extends(Serious, _super);
    function Serious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Serious.prototype.render = function () {
        return (React.createElement("g", { id: 'Mouth/Serious', transform: 'translate(2.000000, 52.000000)', fill: '#000000', fillOpacity: '0.699999988' },
            React.createElement("rect", { id: 'Why-so-serious?', x: '42', y: '18', width: '24', height: '6', rx: '3' })));
    };
    Serious.optionValue = 'Serious';
    return Serious;
}(React.Component));
exports.default = Serious;
