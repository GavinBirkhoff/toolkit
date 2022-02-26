// preload('my_web_worker.js');

let preload
if (/*@cc_on!@*/ false) {
  // IE sniffing with conditional comments
  preload = function (file) {
    new Image().src = file
  }
} else {
  preload = function (file) {
    const obj = document.createElement('object'),
      body = document.body

    obj.width = 0
    obj.height = 0
    obj.data = file
    body.appendChild(obj)
  }
}
