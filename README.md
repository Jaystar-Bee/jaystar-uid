# jaystar-ui Package



## Install

```
$ npm install --save jaystar-uid
```

## Modules

There are two "modules" available in `jaystar-uid`:

#### `jaystar`

## Usage

```js
const id = require('jaystar-uid')

// default id length is 10 e.g:
id(); //=> 'yB8kPbi0P'
id(); //=> 'ac84bbb3728'

// customize length
id(16); //=> '8234dbf9a7dcec3b'
id(25); //=> '4bbb3728b7a00a12209ec5ff5'
id(32); //=> 'dcbc3e65506a7e6f15d30a357e884432'
```





#### `jaystar/pattern`
