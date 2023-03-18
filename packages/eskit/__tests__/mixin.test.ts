import { mixin } from '../src'
describe('mixin', () => {
  test('mixin', () => {
    class A {
      a = 1
    }
    class B {
      b = 2
    }
    class C extends mixin(A, B) {}
    const c = new C()
    expect(c).toEqual({ a: 1, b: 2 })
  })
})
