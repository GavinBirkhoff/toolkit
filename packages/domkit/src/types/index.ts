export interface ObjectType<T> {
  [key: string]: T
}

export type StylePropsKeys = Omit<
  CSSStyleDeclaration,
  | 'getPropertyPriority'
  | 'getPropertyValue'
  | 'item'
  | 'removeProperty'
  | 'setProperty'
  | 'parentRule'
  | 'length'
  | number
>
