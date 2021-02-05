I have a package in the `packages/pkg-b` directory. I have installed some development dependencies:

`lerna-codelab/packages/pkg-b/package.json`:

```json
{
  "name": "pkg-b",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "ts-node"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-node": "^9.1.1",
    "typescript": "^4.1.3"
  }
}
```

`lerna-codelab/package.json`:

```json
{
  "name": "root",
  "private": true,
  "scripts": {
    "boostrap": "lerna bootstrap",
    "link-convert": "lerna link convert"
  },
  "devDependencies": {
    "lerna": "^3.22.1"
  }
}
```

When I run `lerna link convert` command at the root of the repository.

```console
☁  lerna-codelab [main] ⚡  npm run link-convert

> root@ link-convert /Users/dulin/workspace/github.com/mrdulin/lerna-codelab
> lerna link convert

lerna notice cli v3.22.1
```

The `devDependencies` is be pulled up to the `package.json` at root of the repository.

`lerna-codelab/packages/pkg-b/package.json`:

```json
{
  "name": "pkg-b",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "ts-node"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

`lerna-codelab/package.json`:

```json
{
  "name": "root",
  "private": true,
  "scripts": {
    "boostrap": "lerna bootstrap",
    "link-convert": "lerna link convert"
  },
  "devDependencies": {
    "@types/jest": "^26.0.20",
    "jest": "^26.6.3",
    "lerna": "^3.22.1",
    "ts-jest": "^26.5.0",
    "ts-node": "^9.1.1",
    "typescript": "^4.1.3"
  },
  "dependencies": {
    "pkg-a": "file:packages/pkg-a",
    "pkg-b": "file:packages/pkg-b"
  }
}
```

When I run `npm run test` command inside `packages/pkg-b` again, got error:

```console
☁  lerna-codelab [main] ⚡  cd packages/pkg-b
☁  pkg-b [main] ⚡  npm t

> pkg-b@1.0.0 test /Users/dulin/workspace/github.com/mrdulin/lerna-codelab/packages/pkg-b
> ts-node

sh: ts-node: command not found
npm ERR! Test failed.  See above for more details.
```
