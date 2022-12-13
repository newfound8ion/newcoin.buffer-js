# newcoin.buffer-js

JS Library to read data from newcoin.buffer smart contract.

## Usage

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm install @newfound8ion/newcoin.buffer-js
```

### Initialize

Web library can be found in the [dist] folder

```javascript
// standard import
const { ActionGenerator, ChainApi } = require("@newfound8ion/newcoin.buffer-js");
// ES6 import
import { ActionGenerator, ChainApi } from "@newfound8ion/newcoin.buffer-js";
```

## Documentation

### ChainApi

Uses only native nodeos calls to chain api plugin.

### ActionGenerator

Helper class to construct contract actions which can be pushed on chain with eosjs.