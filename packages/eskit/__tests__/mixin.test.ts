import { mixin } from '../src'
describe('mixin', () => {
  class MixinClass {
    public mixinMethod() {
      return 'Mixin method called.'
    }
  }

  class BaseClass {
    public baseMethod() {
      return 'Base method called.'
    }
  }

  it('should create a new class that combines the two classes', () => {
    const CombinedClass = mixin(BaseClass, MixinClass)
    const instance = new CombinedClass()
    expect(instance.baseMethod()).toEqual('Base method called.')
    expect(instance.mixinMethod()).toEqual('Mixin method called.')
  })
})
