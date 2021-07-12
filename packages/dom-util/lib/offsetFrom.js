"use strict";
// getBoundingClientRect
Object.defineProperty(exports, "__esModule", { value: true });
var offsetFrom = function (ele) {
    var top = ele.offsetTop;
    var left = ele.offsetLeft;
    while ((ele = ele.offsetParent)) {
        top += ele.offsetTop;
        left += ele.offsetLeft;
    }
    return { x: left, y: top };
};
exports.default = offsetFrom;
