/**
 * @since 1.0.0
 * @description web require
 * @param file
 * @param callback
 */
const _require = (file: string, callback: () => any) => {
  const script = document.getElementsByTagName('script')[0]
  const newjs: any = document.createElement('script')

  // IE
  newjs.onreadystatechange = function () {
    if (newjs.readyState === 'loaded' || newjs.readyState === 'complete') {
      newjs.onreadystatechange = null
      callback()
    }
  }

  // others
  newjs.onload = function () {
    callback()
  }

  newjs.src = file
  script?.parentNode?.insertBefore(newjs, script)
}

export default _require
