import {
  isArguments,
  isArrayBuffer,
  isArrayLikeObject,
  isArrayLike,
  isArray,
  isBoolean,
  isDate,
  isDecimal,
  isEmpty,
  isError,
  isFunction,
  isNil,
  isNumber,
  isObjectLike,
  isObject,
  isPrototype,
  isRegExp,
  isString,
  isType
} from '../src'
describe('isTypes', () => {
  const arr = [0, 1, 3]
  const children = { 0: 1, 1: 1, 2: 2, length: 3 }
  const func = () => {
    // console.log('func')
  }
  const str = 'abc'
  const arg = (function () {
    // eslint-disable-next-line prefer-rest-params
    return arguments
  })()
  const ab = new ArrayBuffer(2)
  const date = new Date()
  const decimal = 1.11
  test('isArguments', () => {
    expect(isArguments(arg)).toBeTruthy()
  })
  test('isArrayBuffer', () => {
    expect(isArrayBuffer(ab)).toBeTruthy()
  })
  test('isArrayLikeObject', () => {
    expect(isArrayLikeObject(arr)).toBeTruthy()
    expect(isArrayLikeObject(children)).toBeTruthy()
    expect(isArrayLikeObject(func)).toBeFalsy()
    expect(isArrayLikeObject(str)).toBeFalsy()
  })
  test('isArrayLike', () => {
    expect(isArrayLike(arr)).toBeTruthy()
    expect(isArrayLike(children)).toBeTruthy()
    expect(isArrayLike(str)).toBeTruthy()
    expect(isArrayLike(func)).toBeFalsy()
  })
  test('isArray', () => {
    expect(isArray(arr)).toBeTruthy()
    expect(isArray(children)).toBeFalsy()
    expect(isArray(str)).toBeFalsy()
    expect(isArray(func)).toBeFalsy()
  })
  test('isBoolean', () => {
    expect(isBoolean(false)).toBeTruthy()
    expect(isBoolean(children)).toBeFalsy()
    expect(isBoolean(str)).toBeFalsy()
    expect(isBoolean(func)).toBeFalsy()
    expect(isBoolean(1)).toBeFalsy()
  })
  test('isDate', () => {
    expect(isDate(date)).toBeTruthy()
    expect(isDate(false)).toBeFalsy()
    expect(isDate(children)).toBeFalsy()
    expect(isDate(str)).toBeFalsy()
    expect(isDate(func)).toBeFalsy()
    expect(isDate(1)).toBeFalsy()
  })
  test('isDecimal', () => {
    expect(isDecimal(decimal)).toBeTruthy()
  })
  test('isEmpty', () => {
    expect(isEmpty([])).toBeTruthy()
    expect(isEmpty(new Map())).toBeTruthy()
    expect(isEmpty(1)).toBeTruthy()
    expect(isEmpty(false)).toBeTruthy()
  })
  test('isError', () => {
    expect(isError(new Error())).toBeTruthy()
  })
  test('isFunction', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isFunction(() => {})).toBeTruthy()
    expect(isFunction(func)).toBeTruthy()
  })
  test('isNil', () => {
    expect(isNil(null)).toBeTruthy()
    expect(isNil(void 0)).toBeTruthy()
    expect(isNil(undefined)).toBeTruthy()
    expect(isNil(NaN)).toBeFalsy()
  })
  test('isNumber', () => {
    expect(isNumber(1)).toBeTruthy()
    expect(isNumber('1')).toBeFalsy()
  })
  test('isObjectLike', () => {
    expect(isObjectLike({})).toBeTruthy()
    expect(isObjectLike(arr)).toBeTruthy()
    expect(isObjectLike(func)).toBeFalsy()
    expect(isObjectLike(null)).toBeFalsy()
  })
  test('isObject', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject(arr)).toBeTruthy()
    expect(isObject(func)).toBeTruthy()
    expect(isObject(null)).toBeFalsy()
  })
  test('isPrototype', () => {
    expect(isPrototype(Reflect.getPrototypeOf({}))).toBeTruthy()
  })
  test('isRegExp', () => {
    expect(isRegExp(/\d\D/)).toBeTruthy()
  })
  test('isString', () => {
    expect(isString('')).toBeTruthy()
  })
  test('isType', () => {
    expect(isType('String', '')).toBeTruthy()
  })
})
