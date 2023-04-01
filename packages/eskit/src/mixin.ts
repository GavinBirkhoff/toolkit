import copyProperties from './copy-properties'
/**
 * Creates a new class by combining multiple classes.
 * @param mixins The classes to combine.
 * @example
 * // Define some classes
 * class Foo {
 *   foo() {}
 * }
 *
 * class Bar {
 *   bar() {}
 * }
 *
 * // Create a new class by combining Foo and Bar
 * const Baz = mixin(Foo, Bar);
 *
 * // Create an instance of Baz
 * const baz = new Baz();
 *
 * // Call methods from both Foo and Bar
 * baz.foo();
 * baz.bar();
 */
const mixin = (...mixins: any[]): any => {
  class Mixin {
    constructor() {
      for (const mixin of mixins) {
        copyProperties(this, new mixin()) // Copy Instance Properties
      }
    }
  }

  for (const mixin of mixins) {
    copyProperties(Mixin, mixin) // Copy static properties
    copyProperties(Mixin.prototype, mixin.prototype) // Copy prototype properties
  }

  return Mixin
}

export default mixin
