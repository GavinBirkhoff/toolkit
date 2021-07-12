"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTextPixelWith = function (text, font) {
    var fontStyle = font.fontStyle, fontVariant = font.fontVariant, fontWeight = font.fontWeight, fontSize = font.fontSize, fontFamily = font.fontFamily;
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.font = ((fontStyle !== undefined ? fontStyle : '') + " " + (fontVariant !== undefined ? fontVariant : '') + " " + (fontWeight !== undefined ? fontWeight : '') + " " + fontSize + " \"" + fontFamily + "\"").trimStart();
    var dimension = ctx.measureText(text);
    return dimension.width;
};
exports.default = getTextPixelWith;
