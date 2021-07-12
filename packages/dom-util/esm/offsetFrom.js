// getBoundingClientRect
var offsetFrom = function (ele) {
    var top = ele.offsetTop;
    var left = ele.offsetLeft;
    while ((ele = ele.offsetParent)) {
        top += ele.offsetTop;
        left += ele.offsetLeft;
    }
    return { x: left, y: top };
};
export default offsetFrom;
