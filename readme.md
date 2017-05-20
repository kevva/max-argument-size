# max-argument-size [![Build Status](https://travis-ci.org/kevva/max-argument-size.svg?branch=master)](https://travis-ci.org/kevva/max-argument-size)

> Get maximum argument size


## Install

```
$ npm install --save max-argument-size
```


## Usage

```js
const maxArgumentSize = require('max-argument-size');

maxArgumentSize().then(max => {
	console.log(max);
	//=> 262144
});
```


## API

### maxArgumentSize()

Returns a Promise for a number with the maximum argument size.

### maxArgumentSize.sync()

Returns a number with the maximum argument size.


## License

MIT © [Kevin Martensson](https://github.com/kevva)
