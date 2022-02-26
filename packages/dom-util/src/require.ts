function require(file, callback) {
  const script = document.getElementsByTagName('script')[0],
    newjs = document.createElement('script')

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
  script.parentNode.insertBefore(newjs, script)
}
