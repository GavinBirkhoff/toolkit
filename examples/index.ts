import {
  addClass,
  createDom,
  addCss,
  getStyleProps,
  addEvent,
  removeEvent,
  canUseDom,
  getTextPixelWith
} from '@/dom-util/src'

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

console.log(getTextPixelWith('hello word'))
