/**
 * getPreload
 * @returns {Function}
 * @since 1.0.0
 * @example
 * getPreload('my_web_worker.js');
 *
 */
const getPreload = (): ((file: string) => void) => {
  let preload
  // eslint-disable-next-line no-constant-condition
  if (/*@cc_on!@*/ false) {
    // IE sniffing with conditional comments
    preload = function (file: string) {
      new Image().src = file
    }
  } else {
    preload = function (file: string) {
      const obj = document.createElement('object'),
        body = document.body

      obj.width = '0'
      obj.height = '0'
      obj.data = file
      body.appendChild(obj)
    }
  }
  return preload
}

export default getPreload()
