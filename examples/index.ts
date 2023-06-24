import './eskit'
import {
  addClass,
  createDom,
  addCss,
  getStyleProps,
  addEvent,
  removeEvent,
  canUseDom,
  getTextPixelWidth,
  setStyleProps,
  requestAnimationFrame,
  cancelAnimationFrame,
  setCssVariable,
  getCssVariable,
  getBoundingClientPosition,
  getOffsetPosition,
  hasClass,
  rem,
  removeDom
} from '@/domkit/src'
import _require from '@/domkit/src/require'

const dom = createDom({ tagName: 'div', container: document.body, node: `Hey Guys, I'm Gavin!` })

addClass(dom, 'my-class item active')
addCss('.item', { backgroundColor: 'black', color: '#FFF', textAlign: 'center', width: '800px', margin: '0 auto' })
const w = getStyleProps(dom, 'width')
console.log(w, 'getStyleProps')
if (w !== '800px') {
  throw Error('getStyleProps')
}

const callBack = addEvent(dom, 'click', (e) => {
  console.log(e)
})

setTimeout(() => {
  removeEvent(dom, 'click', callBack)
}, 3000)

addEvent(
  dom,
  'click',
  (e) => {
    console.log('useDebounce')
  },
  { useDebounce: true }
)

if (!canUseDom()) {
  throw Error('canUseDom')
}

console.log(getTextPixelWidth('hello word', {}), 'getTextPixelWidth')

// test requestAnimationFrame

function changeHeight() {
  setStyleProps(dom, { height: `${parseInt(getStyleProps(dom, 'height') as string) + 1}px` })
  animation = requestAnimationFrame(changeHeight)
}

let animation = requestAnimationFrame(changeHeight)

setTimeout(() => cancelAnimationFrame(animation), 3000)

// end

setCssVariable('--theme', 'green')
console.log(getCssVariable('--theme'), 'getCssVariable')
;(function () {
  const div = createDom({ tagName: 'div', container: document.body })
  setStyleProps(div, { width: '200px', padding: '100px', margin: '100px' })
  const div2 = createDom({ tagName: 'div', container: div })
  setStyleProps(div2, { width: '200px', padding: '100px' })
  console.log(getBoundingClientPosition(div2))
  console.log(getOffsetPosition(div2))

  setTimeout(() => removeDom(div), 5000)
})()

console.log(getStyleProps(dom, 'width'), 'getStyleProps')
console.log(hasClass(dom, 'my-class'), 'hasClass')

rem(1200, { scale: 100 })

_require('https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js', () => {
  // @ts-ignore
  console.log(window?.React, '_require')
})
