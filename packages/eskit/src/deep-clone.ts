import hasOwnProperty from './hasOwnProperty'
import isArray from './is-array'
import isDate from './is-date'
import isObject from './is-object'
import isRegExp from './is-reg-exp'

function deepClone<T>(obj: T): T {
  const clonedMap = new Map<any, any>()

  const cloneValue = (value: any): any => {
    if (!isObject(value)) {
      return value
    }

    if (clonedMap.has(value)) {
      return clonedMap.get(value)
    }

    let clonedObj: any

    if (isArray(value)) {
      clonedObj = []
      clonedMap.set(value, clonedObj)

      for (let i = 0; i < value.length; i++) {
        clonedObj[i] = cloneValue(value[i])
      }
    } else if (isDate(value)) {
      clonedObj = new Date(value.getTime())
      clonedMap.set(value, clonedObj)
    } else if (isRegExp(value)) {
      clonedObj = new RegExp(value.source, value.flags)
      clonedMap.set(value, clonedObj)
    } else {
      clonedObj = Object.create(null)
      clonedMap.set(value, clonedObj)

      for (const key in value) {
        if (hasOwnProperty(value, key)) {
          clonedObj[key] = cloneValue(value[key])
        }
      }
    }

    return clonedObj
  }

  return cloneValue(obj)
}

export default deepClone
