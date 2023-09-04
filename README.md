# jaystar-uid Package [jaystar-uid ](https://github.com/Jaystar-Bee/jaystar-uid)

`jaystar-uid` is an easy way of generating id.   

## Install

```

$ npm install --save jaystar-uid

```

## Modules

There are two "modules" available in `jaystar-uid`:

### `jaystar-uid`

## Usage

```js
const id = require('jaystar-uid')

//template
id(); or id(length);

// Sample

// default id length is 12 e.g:

id(); // => 'yB8kPbi0PcP0'

id(); // => '2W3phJ7HLss2'

  
// customize length

id(20); // => '62o9Pjao0PU14lUSJP8J'

id(12); // => '6oPJLi183IF1'
```
 
 ### `jaystar-uid/pattern`


## Usage

> pattern and separator parameters are required for this module

```js

const id = require('jaystar-uid/pattern')

// template
id(pattern, separator);

// Sample
id('4=3=4=2=4', '=') // => UTWc=Yvj=EErn=2t=zUcU
id('4-4-4-4-4', '-') // => LFre-uj3C-1SHL-5B7G-tnSu
```