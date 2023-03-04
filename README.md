# Toolkit

**All kit modules**

- eskit Tool library of TS / JS that can be used in browser and nodejs
- domkit The JS tool library used in the browser mainly operates DOM related APIs

## Lerna

Lerna is used to manage and develop multiple modules. All modules are in the `packages` directory. Each module is an independent NPM package, and the problem of relying on local development files among packages is solved.

usage：

- install

```bash
npm i
npx lerna bootstrap
```

- link

Through the `link` operation, the dependencies between packages can be changed into locally developed files.

```bash
npx lerna link
```

- run (test、build...)

You can run `scripts` in batches through this command. For example:

```bash
npx lerna run test
npx lerna run build
```

- publish

batch publish。

- clean

batch clean packages of node_modules

```bash
npx lerna clean
```

Users can refer to other commands：[lerna](https://github.com/lerna/lerna)。

## Principles

-Try to unify the compilation and tool chain to ensure the consistency of versions, such as Babel, typescript, jest, etc. try to use the unified version of each package and write the dependency to the root directory package json。

- tsconfig. JSON requires the extensions root directory configuration, and the characteristic configuration of each module is managed by itself.

- The module needs single test coverage.

- `scripts` of the same specification:

  - start

  - test

  - build

- Increase Npmignore, remove the source code and keep only the compiled and compressed package.

- Unified lint configuration.

- README. The MD module needs to clearly show the API and main path usage examples of the module.
