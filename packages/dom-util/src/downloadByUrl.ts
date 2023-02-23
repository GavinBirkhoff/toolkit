/**
 * @description Download resources thought url
 * @param {string} Url Resource url
 * @param {string} type MIME(Multipurpose Internet Mail Extensions) //https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 */

const downloadByUrl = (Url: string, type = 'application/octet-stream'): void => {
  const blob = new Blob([''], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  // createDom({ tagName: 'a' })
  a.href = Url
  a.download = Url.replace(/(.*\/)*([^.]+.*)/gi, '$2').split('?')[0]
  const e = document.createEvent('MouseEvents')
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)
  URL.revokeObjectURL(url)
}

export default downloadByUrl
