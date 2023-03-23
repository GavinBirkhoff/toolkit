# Toolkit

**All kit modules**

- eskit Tool library of TS / JS that can be used in browser and nodejs
- domkit The JS tool library used in the browser mainly operates DOM related APIs

## usage

- install

```bash
npm i
npm run bootstrap
npm run test
npm run build
```

## Principles

I hope that the excellent unit methods of the entire front-end community can be collected here.

## TODO

**ts-copilot**

memoize

flatten

compose

```
type Func<T> = (arg: T) => T;

function compose<T>(...funcs: Array<Func<T>>): Func<T> {
  return (arg: T): T => funcs.reduce((acc, func) => func(acc), arg);
}
```
