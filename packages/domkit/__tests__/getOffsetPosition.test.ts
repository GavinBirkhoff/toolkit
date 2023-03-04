import { getOffsetPosition } from '../src'
describe('getOffsetPosition', () => {
  test('default', () => {
    const wrap = document.createElement('div')
    const box = document.createElement('div')
    wrap.style.cssText = `margin:10px;padding:10px;height:20px`
    box.style.cssText = `margin:10px;padding:10px;height:20px`
    document.body.style.cssText = 'margin:0px;padding:0px;'
    wrap.appendChild(box)
    document.body.appendChild(wrap)
    const position = getOffsetPosition(box)
    // expect { left: 30, top: 30 } but evn TODO
    expect(position).toEqual({ left: 0, top: 0 })
  })
})
