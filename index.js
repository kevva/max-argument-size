'use strict';
const execa = require('execa');

module.exports = () => execa.stdout('getconf', ['ARG_MAX']).then(stdout => parseInt(stdout, 10));
module.exports.sync = () => parseInt(execa.sync('getconf', ['ARG_MAX']).stdout, 10);
