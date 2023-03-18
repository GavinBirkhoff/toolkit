# domkit

A toolkit for dom
## usage

`npm i util4dom`


```ts
import {
  addClass,
  createDom,
  addCss,
  getStyleProps,
  addEvent,
  removeEvent,
  canUseDom,
  getTextPixelWith,
  setStyleProps,
  requestAnimationFrame,
  clearAnimationFrame,
  setC3Var,
  getC3Var,
  getBoundingClient,
  getOffsetPosition,
  hasClass,
  rem,
  removeDom
} from 'domkit'

const dom = createDom({ tagName: 'div', container: document.body, node: `Hey Guys, I'm Gavin!` })
```

## API documentation

see jsdoc of files or run `npm run docs` then open folder docs
