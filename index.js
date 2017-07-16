'use strict';
const execa = require('execa');

module.exports = () => execa.stdout('getconf', ['ARG_MAX']).then(stdout => Number(stdout));
module.exports.sync = () => Number(execa.sync('getconf', ['ARG_MAX']).stdout);
